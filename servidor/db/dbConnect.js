import { MongoClient } from 'mongodb';
import "dotenv/config"

const cliente = new MongoClient(process.env.DB_CONNECTION_STRING)

let documentosColecao;
let usuariosColecao;

try {
    await cliente.connect();
    const db = cliente.db("docs-websockets");
    documentosColecao = db.collection("documentos");
    usuariosColecao = db.collection("usuarios");
    console.log("Conectado ao banco de dados com sucesso");
} catch (erro) {
    console.log(erro);
}

export { documentosColecao, usuariosColecao };