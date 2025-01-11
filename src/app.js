const express = require("express");
require("./db/conn.js");
const studentRouter = require("./routers/student.js")

const app = express();
const port = process.env.PORT || 4000;
// const port = 8000;

app.use(express.json());
app.use(studentRouter);

app.listen(port, (err) => {
    if (!err) {
        console.log("Connection established successfully");
    } else {
        console.log("Error: ", err);
    }
});