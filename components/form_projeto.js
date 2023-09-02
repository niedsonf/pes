'use client'

import { MainContext } from "@/contexts/main_context";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form'
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function FormProjeto() {

    const { state, dispatch } = useContext(MainContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const router = useRouter()

    const onSubmit = (data) => {
        dispatch({
            type: 'ADD_PROJETO',
            payload: {
                projeto: data.projeto,
                descricao: data.descricao,
                data: new Date().toLocaleDateString(),
                despesas: {
                    material: data.material,
                    pessoal: data.pessoal,
                    diarias: data.diarias
                }
            }
        })
        reset({
            projeto: '',
            descricao: '',
            material: '',
            pessoal: '',
            diarias: ''
        })
        toast.success('Projeto adicionado com sucesso!')
    }

    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 ">
        <Toaster />
        <div className="flex flex-col gap-0.5">
            <label className="text-blue-950 text-sm" htmlFor="projeto">Nome do Projeto</label>
            <input {...register("projeto", { required: true })}
                className="p-1 text-sm rounded text-yellow-950 focus:border-rose-500" type="text" name="projeto" id="projeto" />
        </div>
        <div className="flex flex-col gap-0.5">
            <label className="text-blue-950 text-sm" htmlFor="descricao">Descrição</label>
            <textarea {...register('descricao', { required: true })}
                className="p-1 text-sm rounded text-blue-950 focus:border-blue-950" type="text" name="descricao" id="descricao" />
        </div>

        <h3>Despesas</h3>
        <div className="flex flex-col gap-0.5">
            <label className="text-blue-950 text-sm" htmlFor="descricao">Material</label>
            <input {...register('material', { required: true })}
                className="p-1 text-sm rounded text-blue-950 focus:border-blue-950" type="text" name="material" id="material" />
        </div>
        <div className="flex flex-col gap-0.5">
            <label className="text-blue-950 text-sm" htmlFor="descricao">Pessoal</label>
            <input {...register('pessoal', { required: true })}
                className="p-1 text-sm rounded text-blue-950 focus:border-blue-950" type="text" name="pessoal" id="pessoal" />
        </div>
        <div className="flex flex-col gap-0.5">
            <label className="text-blue-950 text-sm" htmlFor="descricao">Diárias</label>
            <input {...register('diarias', { required: true })}
                className="p-1 text-sm rounded text-blue-950 focus:border-blue-950" type="text" name="diarias" id="diarias" />
        </div>

        <button type="submit" className="mt-3 w-full py-1 rounded text-slate-100 bg-blue-950 border border-blue--50 hover:bg-slate-100 hover:border-blue-950 hover:text-blue-950 transition-all duration-200">
            Adicionar Projeto
        </button>
    </form>
}