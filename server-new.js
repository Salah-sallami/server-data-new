// CREATE SERVER
const express = require("express");
const app = express();
const _PORT = "10000";
const cors = require("cors")
app.use(cors())
app.use(express.json())

// Connect to DB
const   username = "mern-amazona-user",
        password = "mern-amazona-user",
        database = "mern-amazona-app-db"

const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://${username}:${password}@cluster1.wofue0i.mongodb.net/${database}?retryWrites=true&w=majority`,{ useNewUrlParser: true , useUnifiedTopology: true },(err)=>{if(err){console.log(err)}else{console.log("successfully connected")}})

// USER MODEL
const UserModel = require("./models/Users");

app.post("/createUser", async(req,res)=>{
  const newUser = new UserModel(req.body);
  await newUser.save();
  //res.json(req.body);
})

app.get("/create", async(req,res)=>{
  
    res.send("hello")
})

app.use(express.static('./build'))
app.get("*", async(req,res)=>{
  

  res.sendFile(`${__dirname}/build/index.html`);
  res.redirect("/create")
})

app.listen(process.env.PORT || _PORT, () => {
  console.log("on port 300à1");
});
