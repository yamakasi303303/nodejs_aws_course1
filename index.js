const express = require("express");
const app = express();

app.get("/", (req, res) => { console.log("req", req); return res.send("Welcome " + req.socket.remoteAddress); })
app.listen(3000, () => console.log("the node server is running"));