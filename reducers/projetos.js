export const initialProjetos = []

export const reducerProjetos = (state, action) => {
    switch (action.type) {
        case 'ADD_PROJETO':
            return [...state, action.payload]
        default:
            return state
    }
}