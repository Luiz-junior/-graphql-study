const { usuarios, perfis } = require('../data/db');

module.exports = {

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