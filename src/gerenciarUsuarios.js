//const usuarios = ['Matheus', 'Marcos', 'Lucas', 'João'];


const usuarios = [
    {
        nome: 'Mateus',
        email: 'mateus@gospel.com'
    },
    {
        nome: 'Marcos',
        email: 'marcos@gospel.com'
    },
    {
        nome: 'Lucas',
        email: 'lucass@gospel.com'
    },
    {
        nome: 'João',
        email: 'joaao@gospel.com'
    }
]

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(nome) {
    usuarios.push(nome);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}