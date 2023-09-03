'use client'

import { Projeto } from '@/components/Projeto'
import { MainContext } from '@/contexts/main_context'
import { ArrowBigLeft } from 'lucide-react'
import { useContext } from 'react'

export default function ProjetoDetalhado({ data }) {

    const { state, dispatch } = useContext(MainContext)

    return <div className="p-8 flex flex-col gap-6">
        <button
            onClick={() => dispatch({
                type: 'FP_CLEAN',
                payload: {}
            })}
            className="flex align-middle gap-1 hover:gap-2 transition-all duration-200 text-blue-950 text-lg font-semibold"><ArrowBigLeft width={24} /> Voltar</button>
        <Projeto.Root data={data}>
            <Projeto.Investimento />
        </Projeto.Root>
    </div>
}