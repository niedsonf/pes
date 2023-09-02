export const initialUser = {
    email: '',
    nome: '',
    senha: '',
    cargo: ''
}

export const reducerUser = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return Object.assign(state, action.payload)
        case 'LOGOUT':
            LoginService.Logout()
            return {
                email: '',
                nome: '',
                senha: '',
                cargo: ''
            }
        default:
            return state
    }
}