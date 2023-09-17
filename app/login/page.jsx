'use client'
import FormLogin from "@/components/form_login";

export default function Page() {
    return <div className="h-screen flex flex-col bg-zinc-900">
        <main className="flex-1 grid place-items-center">
            <div className="flex overflow-hidden rounded shadow-md shadow-zinc-950">
                <div className="bg-zinc-950 px-16 grid place-items-center">
                    <h1 className="text-tertiary text-2xl">Login</h1>
                </div>
                <div className="bg-zinc-800 py-12 px-14">
                    <FormLogin />
                </div>
            </div>
        </main>
    </div>
}