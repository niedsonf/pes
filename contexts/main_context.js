'use client'

import { createContext, useReducer } from "react";

import { initialUser, reducerUser } from "@/reducers/user";

const initialState = {
    user: initialUser,
}

export const MainContext = createContext({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state, action) => ({
    user: reducerUser(state.user, action),
})

export const MainContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return <MainContext.Provider value={{state, dispatch}}>{children}</MainContext.Provider>
}