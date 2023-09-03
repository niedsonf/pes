'use client'

import { useContext } from "react"
import { MainContext } from "@/contexts/main_context"
import {Projeto}  from "@/components/Projeto"
export default function Projetos() {

    const { state } = useContext(MainContext)

    return (
        <div className="p-8 pb-28 flex flex-col gap-8 h-screen overflow-scroll">
            <h1 className="text-center text-3xl font-bold text-blue-950">Projetos</h1>

            <div className="flex flex-col gap-8">
                {state.projetos.map((item, index) => {
                    return <Projeto.Root key={index} data={item} />
                })}
            </div>
        </div>
    )
}