const express = require("express");
const app = express();
const http = require("http");

const { Server } = require("socket.io");
const cors= require("cors");
const { Socket } = require("dgram");

app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (Socket)=>{
    // connection -> projectid sanga room banauna paryo
    console.log(`User Connected: ${Socket.id}`);
    Socket.on ("send_message", (data)=>{
        console.log(data)
    })

    Socket.on("value",(data)=>{
        console.log(data);
        // broadcast to room only
        Socket.broadcast.emit("value",data)
    })
})



server.listen(3001, () =>{
    console.log("SERVER IS RUNNING");
});