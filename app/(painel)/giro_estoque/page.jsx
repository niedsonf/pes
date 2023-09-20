import FormGiroEstoque from "@/components/forms/form_giro_estoque";

export default function Page() {
    return <div className="h-screen flex flex-col">
        <div className="flex-1 flex flex-col gap-8 items-center mt-16">
            <h1 className="text-2xl font-light tracking-wide text-secondary">GIRO DE ESTOQUE</h1>
            <div className="rounded-2xl flex px-10 py-16 bg-zinc-900 shadow-tertiary border-2 border-tertiary">
                <FormGiroEstoque />
            </div>
        </div>
    </div>
}