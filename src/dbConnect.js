import { MongoClient } from 'mongodb';

const cliente = new MongoClient(process.env.DB_CONNECTION_STRING)

let documentosColecao;

try {
    await cliente.connect();
    const db = cliente.db("docs-websockets")
    documentosColecao = db.collection("documentos")
    console.log("Conectado ao banco de dados com sucesso")
} catch (erro) {
    console.log(erro)
}

export { documentosColecao };