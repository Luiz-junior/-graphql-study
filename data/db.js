const usuarios = [
    {
        id: 1,
        nome: "Felipe Fietoza",
        email: "felipefietoza@gmail.com",
        idade: 30,
        perfil_id: 1,
        status: 'ATIVO'
    }, {
        id: 2,
        nome: "Lorena Silva",
        email: "lorenasilva@gmail.com",
        idade: 25,
        perfil_id: 2,
        status: 'INATIVO'
    }, {
        id: 3,
        nome: "Lucas Marques",
        email: "lucamarques@gmail.com",
        idade: 26,
        perfil_id: 1,
        status: 'BLOQUEADO'
    }
];

const perfis = [
    {
        id: 1,
        nome: "Comum",
    }, {
        id: 2,
        nome: "Administrador",
    }
];

module.exports = { usuarios, perfis };