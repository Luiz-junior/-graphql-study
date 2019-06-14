const { perfis, proximoId } = require('../../data/db');

function indicePerfil(filtro) {
    if (!filtro) return -1;
    const { id } = filtro;
    if (id)
        return perfis.findIndex(u => u.id === id);

    return -1;
}

module.exports = {
    novoPerfil(_, { dados }) {
        const nomeExistente = perfis.some(p => p.nome === dados.nome);

        if (nomeExistente)
            throw new Error('Perfil já existente');

        const novo = {
            id: proximoId(),
            ...dados
        };

        perfis.push(novo);
        return novo;
    },

    excluirPerfil(_, { id }) {
        const i = indicePerfil(filtro);
        if (i < 0) return null;
        const excluidos = perfis.splice(i, 1);

        return excluidos ? excluidos[0] : null;
    },

    alterarPerfil(_, { filtro, dados }) {
        const i = indicePerfil(filtro);
        if (i < 0) return null;

        const perfil = {
            ...perfis[i],
            ...dados,
        };

        perfis.splice(i, 1, perfil);

        return perfil;
    },
}