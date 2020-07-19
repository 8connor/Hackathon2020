var express = require("express");
var mysql = require("mysql");
var axios = require("axios");
var path = require("path");
var moment = require("moment");

var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("front end"))




var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",
    // Your password
    password: "password",
    database: "landfilldb"
});


connection.connect(function (err) {
    if (err) throw err;

});

function refresh() {

    axios.get("https://knxhx.richdataservices.com/rds/api/query/waste/landfill/select?collimit=25&coloffset=0&count=true&offset=0&limit=25").then(function (response) {
        // connection.query("INSERT INTO 'landfill' VALUES(?, ?, ?, ?)", [response.data.records[i]])
        for (var i = 0; i < response.data.records.length; i++) {
            var insertSt = "INSERT INTO landfill (date, class, source, landfill_wt) VALUES(?, ?, ?, ?)"
            // console.log(response.data.records[i][j])
            connection.query(insertSt, [response.data.records[i][0], response.data.records[i][1], response.data.records[i][2], response.data.records[i][3]], function (err, res) {
                if (err) throw err;

                console.log(res)
            });
        };
        connection.end();
    });
};




app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/api/trash", function (req, res) {
    connection.query("SELECT * FROM landfill", function (err, response) {
        if (err) throw err;
        console.log(response)

        res.json(response)
    })

})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});