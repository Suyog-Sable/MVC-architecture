const express = require("express");
const {connectMongoDb} = require ('./connection');

const userRouter = require('./routes/user');
const {logReqRes} = require("./middlewares");

const app = express();
const PORT = 8000;

//connection
connectMongoDb("mongodb://127.0.0.1:27017/app-1").then(()=>console.log('MongoDb connected!'));

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(logReqRes("log.txt"));

//Route
app.use("/api/users", userRouter);

app.listen(PORT, ()=> console.log(`server is running on PORT: ${PORT}`));
