const http = require('http').createServer();
const io = require('socket.io')(http);

io.on('connection', socket => {
  socket.on('chat', chat => socket.join(chat));
  socket.on('typing', data => socket.to(data.chat_id).emit('typing', data));
  socket.on('disconnect', () => console.log('disconnected'));
});

http.listen(process.env.PORT || 3001);
