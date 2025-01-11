const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api")
.then(() => {
  console.log("connection established with mongo DB!!");  
})
.catch((e) => {
    console.log("No connection with Database: ",e);
});