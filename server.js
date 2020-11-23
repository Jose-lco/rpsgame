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
        .then(function (dbPost) {
            res.json(dbPost);
        });
});
app.get("/shoot/:playerName/:play", function (req, res) {
    let play = req.params.play;
    let result = rps.game(play);
    db.Leaderboard.findOne({
        where: {
            player: req.params.playerName
        }
    })
        .then(function (dbPost) {
            if (!dbPost) {
                db.Leaderboard.create({
                    player: req.params.playerName,
                    wins: result.wins,
                    losses: result.losses,
                    ties: result.ties
                })
                    .then(function (dbPost) {
                        return res.json(dbPost);
                    });
            } else {
            db.Leaderboard.increment({
                wins: result.wins,
                losses: result.losses,
                ties: result.ties
            },
                {
                    where: {
                        player: req.params.playerName
                    }
                })
                .then(
                    
                    db.Leaderboard.findOne({
                    where: {
                        player: req.params.playerName
                    }
                })
                    .then(function (dbPost) {

                    return res.json(dbPost);
                
                }))
            
            }
        
});
});
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
