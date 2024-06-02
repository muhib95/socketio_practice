const express = require('express')
const app = express()
const http=require('http');
const port = 3000
const { Server } = require("socket.io");

const expressServer= http.createServer(app);


const io=new Server(expressServer);


io.on("connection", (socket) => {
    console.log('User is connected');
    socket.on('disconnect',()=>{
        console.log('User is disconnected'); 
    })
socket.on('userInput',(msg)=>{
    io.emit('userTransmit',msg);

})


  });


app.get('/', (req, res) => {
   res.sendFile(__dirname +"/index.html");
  })

expressServer.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })