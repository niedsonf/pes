export const initialFP = []

export const reducerFP = (state, action) => {
    switch (action.type) {
        case 'FP_ADD':
            return [...state, action.payload]
        case 'FP_CLEAN':
            return []
        default:
            return state
    }
}