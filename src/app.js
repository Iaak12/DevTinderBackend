const express = require('express');

const app = express();

app.use("/",(req,res) => {
    res.send("hello from /")
})

app.use("/hello",(req,res) => {
    res.send("hello from the server /hello")
})

app.use("/test",(req,res) => {
    res.send("Hello from the Server");
})

app.listen(7777, () => {
    console.log("Server is Successfully listening to 7777... ");

});