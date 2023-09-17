'use client'

import { useForm } from 'react-hook-form'

export default function FormCadastrarProduto() {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

    }

    const FormItem = ({ text, registerText, required = true, inputType = 'text' }) => {
        return <div className="flex items-center">
            <label className="text-slate-100 text-sm text-center p-1 bg-tertiary rounded-l z-10 w-40" htmlFor={registerText}>{text}</label>
            <div className="bg-slate-100 rounded-r h-full overflow-hidden">
                <input  {...register(registerText, { required })}
                    className="flex-1 w-80 p-1 text-sm text-zinc-950 focus:border-rose-500 bg-slate-100" type={inputType} name={registerText} id={registerText} />
            </div>
        </div>
    }

    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <FormItem
            text='Nome'
            registerText='nome'
        />
        <FormItem
            text='Descrição'
            registerText='descricao'
        />
        <FormItem
            text='Categoria'
            registerText='categoria'
        />
        <FormItem
            text='Preço de Venda'
            registerText='preco_venda'
        />
        <FormItem
            text='Desconto'
            registerText='desconto'
        />
        <FormItem
            text='Fornecedor'
            registerText='fornecedor'
        />
        <FormItem
            text='Quantidade'
            registerText='quantidade'
        />

        <button type="submit" className="mt-3 w-full py-1 rounded text-slate-100 bg-tertiary border border-secondary hover:bg-primary hover:border-slate-100 hover:text-zinc-800 transition-all duration-200 ease-out">
            Cadastrar
        </button>
    </form>
}