import { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
const tituloDocumento = document.getElementById("titulo-documento");
const botaoExcluirDocumento = document.getElementById("excluir-documento")
const listaUsuariosConectados = documento.getElementById("usuarios-connectados")

botaoExcluirDocumento.addEventListener("click", (event) => {
    emitirExcluirDocumento(nomeDocumento);
});


tituloDocumento.textContent = nomeDocumento || "Documento sem título";

function tratarAutorizacaoSucesso(payloadToken){
    selecionarDocumento({nomeDocumento, nomeUsuario: payloadToken.nomeUsuario});
}

function atualizarInterfaceUsuarios(usuariosNoDocumento){
    listaUsuariosConectados.innerHTML = "";

    usuariosNoDocumento.forEach((usuario) => {
        listaUsuariosConectados.innerHTML += `<li class="list-group-item">${usuario}</li>`
    })
}

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textoEditor.value, nomeDocumento);
});


    

function atualizaTextoEditor(texto) {
    textoEditor.value = texto
};

function alertarERedirecionar(nome){
    if(nome === nomeDocumento) {
        alert(`Documento ${nome} excluído`);
        window.location.href = "/";
    }
};

export { atualizaTextoEditor, alertarERedirecionar, tratarAutorizacaoSucesso, atualizarInterfaceUsuarios};