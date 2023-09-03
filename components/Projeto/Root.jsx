'use client'

import { MainContext } from "@/contexts/main_context"
import { useContext } from "react"

export function ProjetoRoot({ data, children }) {
    const { state, dispatch } = useContext(MainContext)

    return <div
        onClick={() => dispatch({
            type: 'FP_ADD',
            payload: data
        })}
        className="flex flex-col gap-6 rounded bg-slate-100 shadow-md shadow-gray-400 p-6 hover:shadow-lg transition-all duration-200 cursor-pointer">
        <div className="flex align-top justify-between gap-12">
            <div>
                <h2 className="text-xl text-blue-950 font-semibold">{data.projeto}</h2>
                <h6 className="text-sm font-light">{data.data}</h6>
            </div>
            <div className="flex relative after:right-0 after:absolute after:w-3 after:h-3 after:rounded-full after:bg-rose-500 after:animate-ping before:right-0 before:absolute before:w-3 before:h-3 before:rounded-full before:bg-rose-500 ">
                <span className="pr-6 text-sm font-medium uppercase">Cancelado</span>
            </div>
        </div>
        <div className="flex align-middle">
            <p >{data.descricao}</p>
        </div>
        {children}
    </div>
}