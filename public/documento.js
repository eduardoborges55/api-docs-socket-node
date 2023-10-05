import { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
const tituloDocumento = document.getElementById("titulo-documento");
const botaoExcluirDocumento = document.getElementById("excluir-documento")

botaoExcluirDocumento.addEventListener("click", (event) => {
    emitirExcluirDocumento(nomeDocumento);
});


tituloDocumento.textContent = nomeDocumento || "Documento sem título";
selecionarDocumento(nomeDocumento);

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

export { atualizaTextoEditor, alertarERedirecionar};