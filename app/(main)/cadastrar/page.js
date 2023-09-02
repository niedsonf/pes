import FormProjeto from "@/components/form_projeto";

export default function Page() {
    return <div className="py-24 grid place-items-center">
        <div className="p-12 bg-slate-200 rounded flex flex-col gap-4 shadow-md shadow-gray-400">
            <h1 className="text-2xl text-blue-950">Cadastrar Projeto</h1>
            <FormProjeto />
        </div>
    </div>
}