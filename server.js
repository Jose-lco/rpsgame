let express = require("express");
let path = require("path");
let app = express();
let PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});