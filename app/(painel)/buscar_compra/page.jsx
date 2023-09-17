'use client'

import { useForm } from 'react-hook-form'

export default function pAGE() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
    }

    return <div className="h-screen flex flex-col bg-zinc-300">
        <div className="flex-1 flex flex-col gap-8 items-center mt-16">
            <h1 className="text-2xl font-light tracking-wide text-secondary">BUSCAR COMPRA</h1>
            <div className="rounded-2xl flex px-10 py-16 bg-zinc-900 shadow-tertiary border-2 border-tertiary">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-4">
                    <div className="flex items-center">
                        <label className="text-slate-100 text-sm text-center p-1 bg-tertiary rounded-l z-10 w-40" htmlFor='codigo'>Código</label>
                        <div className="bg-slate-100 rounded-r h-full overflow-hidden">
                            <input  {...register('codigo', { required: true })}
                                className="flex-1 w-80 p-1 text-sm text-zinc-950 focus:border-rose-500 bg-slate-100" type='text' name='codigo' id='codigo' />
                        </div>
                    </div>
                    <button type="submit" className="py-1 w-full rounded text-slate-100 bg-tertiary border border-secondary hover:bg-primary hover:border-slate-100 hover:text-zinc-800 transition-all duration-200 ease-out">
                        Buscar
                    </button>
                </form>
            </div>
        </div>
    </div>

}