import { MainContext } from "@/contexts/main_context";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form'

export default function FormLogin() {

    const { state, dispatch } = useContext(MainContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter()

    const onSubmit = (data) => {
        dispatch({
            type: 'UPDATE_USER',
            payload: {
                email: data.email,
                senha: data.senha
            }
        })
        console.log(state)
        router.push('/cadastrar_compra')
    }

    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 ">
        <div className="flex items-center">
            <label className="text-slate-100 text-sm text-center p-1 bg-tertiary rounded-l z-10 w-32" htmlFor='email'>Email</label>
            <div className="bg-slate-100 rounded-r h-full overflow-hidden">
                <input  {...register('email', { required: true })}
                    className="flex-1 w-80 p-1 text-sm text-zinc-950 focus:border-rose-500 bg-slate-100" type="text" name='email' id='email' />
            </div>
        </div>
        <div className="flex items-center">
            <label className="text-slate-100 text-sm text-center p-1 bg-tertiary rounded-l z-10 w-32" htmlFor='senha'>Senha</label>
            <div className="bg-slate-100 rounded-r h-full overflow-hidden">
                <input  {...register('senha', { required: true })}
                    className="flex-1 w-80 p-1 text-sm text-zinc-950 focus:border-rose-500 bg-slate-100" type="text" name='senha' id='senha' />
            </div>
        </div>
        <button type="submit" className="mt-3 w-full py-1 rounded text-slate-100 bg-tertiary border border-secondary hover:bg-primary hover:border-slate-100 hover:text-zinc-800 transition-all duration-200 ease-out">
            Entrar
        </button>
    </form>
}