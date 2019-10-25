var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Sofipics = require("./models/sofipics")


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/views"));


app.get("/", function(req, res){
  res.render("landing");
});

app.get("/sofipics", function(req, res){
    Sofipics.find({}, function(err, allSofiPics){
      if(err){
        console.log(err);
      } else{
        res.render("sofipics", {sofipics: allSofiPics});
      }
    });
});

app.post("/sofipics", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newSofiPic = {name: name, image: image}
  Sofipics.create(newSofiPic, function(err, newlyCreated){
    if(err){
      console.log(err)
    } else{
      res.redirect("./sofipics");
    }
  });
  res.redirect("/sofipics");
});


app.get("/sofipics/new", function(req, res){
  res.render("new")
});

//Connect to Mongo
var url = process.env.DATABASEURL || "mongodb+srv://andrea:andrea123@cluster0-kkwas.mongodb.net/ratesofi?retryWrites=true&w=majority";
//have production db set to DATABASEURL on heroku 
mongoose
.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

mongoose.set('useFindAndModify', false);
app.listen(process.env.PORT || 3000, function(req, res){
console.log("Enjoy Sofi!");
});