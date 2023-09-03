export const initialInvestimentos = [
    {
        projeto: 'Projeto 1',
        data: '02/09/2023',
        descricao: 'Descrição do projeto 1',
        despesas: {
            material: 120,
            pessoal: 300,
            diarias: 500
        }
    }
]

export const reducerInvestimentos = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}