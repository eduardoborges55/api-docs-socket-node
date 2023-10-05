import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTextoEditor(texto);
    });
}

function emitirTextoEditor(texto, nomeDocumento) {
    socket.emit("texto_editor", texto, nomeDocumento);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome){
   socket.emit("excluir_documento", nome) 
}

socket.on("excluir_documento_sucesso", (nome) => {
    alertarERedirecionar(nome);
})

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };