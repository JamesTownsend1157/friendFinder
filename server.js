// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var characters = [{
        routeName: "jimmyJohn",
        name: "Jimmy",
        role: "Sub Maker",
        age: 23,
        Picture:"insert",
        Score: 5 

    },
    {
        routeName: "Jason",
        name: "Jaon",
        role: "basket Weaver",
        age: 24,
        Picture:"insert",
        Score: 6 
    },
    {
        routeName: "Tim",
        name: "Tim",
        role: "Librarian",
        age: 23,
        Picture:"insert",
        Score: 7

    },
    {
        routeName: "Brendan",
        name: "Brendan",
        role: "Social Worker",
        age: 23,
        Picture:"insert",
        Score: 8

    },
    {
        routeName: "Derek",
        name: "Derek",
        role: "Truck Driver",
        age: 23,
        Picture:"insert",
        Score: 9

    },
    {
        routeName: "Sarah",
        name: "Sarah",
        role: "Dancer",
        age: 26,
        Picture:"insert",
        Score: 10 

    },
    {
        routeName: "Barb",
        name: "Barb",
        role: "Cook",
        age: 27,
        Picture:"insert",
        Score: 11

    },
    {
        routeName: "Brad",
        name: "Brad",
        role: "Crossfit coach",
        age: 22,
        Picture:"insert",
        Score: 12 

    },
    {
        routeName: "Adam",
        name: "Adam",
        role: "Apple Picker",
        age: 21,
        Picture:"insert",
        Score: 13

    },
    {
        routeName: "Jessie",
        name: "Jessie",
        role: "Sales Man",
        age: 23,
        Picture:"insert",
        Score: 14

    },
    {
        routeName: "Carla",
        name: "Carla",
        role: "Actress",
        age: 23,
        Picture:"insert",
        Score: 15 

    },
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

// Displays all characters
app.get("/api/characters", function(req, res) {
    return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newcharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcharacter);

    characters.push(newcharacter);

    res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});