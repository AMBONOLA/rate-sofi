var express = require("express"),
    app = express(),
    bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/views"));

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/sofipics", function(req, res){
  var sofipics = [
    {name: "Sofi Sleeps", image: "https://i.postimg.cc/kXBpVjfF/20-FE1-FC9-2-B33-45-B5-8-CA9-3-E7-A9-B3-DD484.jpg"},
    {name: "Sofi Peeps", image: "https://i.postimg.cc/nhmS2X8X/AD57-E8-D4-CB38-4078-9-FD4-FCF7-ECE0-AC4-B.jpg"},
    {name: "sofi don't Care", image: "https://i.postimg.cc/5NTk8wrc/879-CE9-C2-2-FF6-4051-AE69-B85702-A42-E35.jpg"}
  ]
  res.render("sofipics", {sofipics: sofipics});
});


app.listen(process.env.PORT || 3000, function(req, res){
console.log("Enjoy Sofi!");
});