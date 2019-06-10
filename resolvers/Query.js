const { usuarios, perfis } = require('../data/db');

module.exports = {
    ola() {
        return 'retorna carai'
    },

    horaAtual() {
        return new Date
    },

    usuarioLogado() {
        return {
            id: 1,
            nome: 'Test',
            email: 'test@gmail.com',
            idade: 20,
            salario_real: 2000,
            vip: true,
        }
    },

    produtoEmDestaque() {
        return {
            nome: 'Notebook Dell',
            preco: 3000,
            desconto: 0.15,
        }
    },

    numeroMegaSena() {
        const crescente = (a, b) => a - b;
        return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente);
    },

    usuarios() {
        return usuarios
    },

    usuario(_, args) {
        const sels = usuarios.filter(u => u.id == args.id);
        return sels ? sels[0] : null
    },

    perfis() {
        return perfis
    },

    perfil(_, args) {
        const perfil = perfis.filter(p => p.id == args.id);
        return perfil ? perfil[0] : null
    }
};