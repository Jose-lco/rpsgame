let express = require("express");
let path = require("path");
let app = express();
let PORT = 3000;
let db = require("./models");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
let rps = require('./game');
let leaderBoard = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/leaderboard", function (req, res) {
    db.Leaderboard.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
});
app.get("/shoot/:playerName/:play", function (req, res) {
    let player = req.params.playerName;
    let play = req.params.play;
    let result = rps.game(play);
    if (leaderBoard.includes(player)) {
        let scoreObject = leaderBoard[player];
        for (let score in result) {
            if (result[score] === 1) {
                scoreObject[score] + 1;
            }
        }
    } else {
        leaderBoard.push(player);
        leaderBoard[player] = result;
    }

    return res.json(leaderBoard[player]);
});
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
