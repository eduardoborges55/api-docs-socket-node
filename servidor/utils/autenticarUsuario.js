import scriptSync, { timingSafeEqual } from 'crypto'

function autenticarUsuario(senhaDigitada, usuario) {
    const hashTeste = scriptSync(senhaDigitada, usuario.salsenha, 64);
    const hashReal = Buffer.from(usuario.hashSenha, "hex");
    const autenticado = timingSafeEqual(hashTeste, hashReal);
    return autenticado;
}

export default autenticarUsuario;