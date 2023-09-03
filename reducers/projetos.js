export const initialProjetos = [{
    projeto: 'Projeto 1',
    data: '02/09/2023',
    descricao: 'Descrição do projeto 1',
    despesas: {
        material: 120,
        pessoal: 300,
        diarias: 500
    }
}]

export const reducerProjetos = (state, action) => {
    switch (action.type) {
        case 'ADD_PROJETO':
            return [...state, action.payload]
        default:
            return state
    }
}