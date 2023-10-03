import io from '../src/servidor.js'


io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("selecionar_documento", (nomeDocumento) => {
    socket.join(nomeDocumento);
  })

  socket.on("texto_editor", (texto, nomeDocumento) => {
    // socket.broadcast.emit("texto_editor_clientes", texto);
    socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
  })
});
