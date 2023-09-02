'use client'

import { createContext, useReducer } from "react";

import { initialUser, reducerUser } from "@/reducers/user";
import { initialProjetos, reducerProjetos } from "@/reducers/projetos";
import { initialFP, reducerFP } from "@/reducers/file_picker";
import { initialInvestimentos, reducerInvestimentos } from "@/reducers/investimentos";

const initialState = {
    user: initialUser,
    projetos: initialProjetos,
    fp: initialFP,
    investimentos: initialInvestimentos
}

export const MainContext = createContext({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state, action) => ({
    user: reducerUser(state.user, action),
    projetos: reducerProjetos(state.projetos, action),
    fp: reducerFP(state.fp, action),
    investimentos: reducerInvestimentos(state.investimentos, action)
})

export const MainContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return <MainContext.Provider value={{state, dispatch}}>{children}</MainContext.Provider>
}