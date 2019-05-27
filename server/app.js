const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const morgan = require('morgan');
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));

// logger
app.use(morgan('dev'));

app.use("/users", userRouter);;
app.use("/", homeRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});