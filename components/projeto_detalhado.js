'use client'

import { MainContext } from "@/contexts/main_context"
import { useContext } from "react"
import { ArrowBigLeft } from "lucide-react"

export default function ProjetoDetalhado({ data }) {

    const { state, dispatch } = useContext(MainContext)

    return <div className="p-8 flex flex-col gap-6">
        <button
            onClick={() => dispatch({
                type: 'FP_CLEAN',
                payload: {}
            })}
            className="flex align-middle gap-1 hover:gap-2 transition-all duration-200 text-blue-950"><ArrowBigLeft /> Voltar</button>
        <div className="flex flex-col gap-6 rounded bg-slate-100 shadow-md shadow-gray-400 p-6 hover:shadow-lg transition-all duration-200 cursor-pointer">
            <div className="flex align-top justify-between gap-12">
                <div>
                    <h2 className="text-xl font-semibold">{data.projeto}</h2>
                    <h6 className="text-sm font-light">{data.data}</h6>
                </div>
                <div className="flex relative after:right-0 after:absolute after:w-3 after:h-3 after:rounded-full after:bg-rose-500 after:shadow-md after:shadow-rose-500">
                    <span className="pr-6 text-sm font-medium uppercase">Cancelado</span>
                </div>
            </div>
            <div className="flex align-middle">
                <p >{data.descricao}</p>
            </div>
        </div>
    </div>
}