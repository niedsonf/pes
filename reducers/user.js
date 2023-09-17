export const initialUser = {
    email: '',
    nome: ''
}

export const reducerUser = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return Object.assign(state, action.payload)
        case 'LOGOUT':
            return {
                email: '',
                nome: '',
            }
        default:
            return state
    }
}