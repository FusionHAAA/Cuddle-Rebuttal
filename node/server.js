const express = require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

//state of the game
io.on('connection', (socket) => {
    console.log(socket.id, 'a user connected');
    socket.emit('yourId', { id: socket.id })










    //workspace
})



http.listen(3000, () => {
    console.log('listening on *:3000');
});




app.use(express.static(path.join(__dirname, 'public')));