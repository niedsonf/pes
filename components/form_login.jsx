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
        router.push('/projetos')
    }

    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-0.5">
            <label className="text-blue-950 text-sm" htmlFor="email">Email</label>
            <input  {...register("email", { required: true })}
                className="p-1 text-sm rounded text-yellow-950 focus:border-rose-500" type="email" name="email" id="email" />
        </div>
        <div className="flex flex-col gap-0.5">
            <label className="text-blue-950 text-sm" htmlFor="senha">Senha</label>
            <input {...register('senha', { required: true })}
                className="p-1 text-sm rounded text-blue-950 focus:border-blue-950" type="password" name="senha" id="senha" />
        </div>
        <button type="submit" className="mt-3 w-full py-1 rounded text-slate-100 bg-blue-950 border border-blue--50 hover:bg-slate-100 hover:border-blue-950 hover:text-blue-950 transition-all duration-200">
            Entrar
        </button>
    </form>
}