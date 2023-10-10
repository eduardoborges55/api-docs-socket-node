import autorizarUsuario from "./middlewares/autorizarUsuario.js";
import registrarEventosCadastro from "./registrarEventos/Cadastro.js";
import registrarEventosDocumento from "./registrarEventos/Documento.js";
import registrarEventosInicio from "./registrarEventos/EventosInicio.js";
import registrarEventosLogin from "./registrarEventos/Login.js";
import io from "./servidor.js";

const nspUsuarios = io.of("/usuarios")

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket, nspUsuarios);
  registrarEventosDocumento(socket, nspUsuarios);
});

io.of("/").on("connection", (socket, io) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});

