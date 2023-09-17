'use client'
import FormLogin from "@/components/forms/form_login";

export default function Page() {
    return <div className="h-screen flex flex-col bg-zinc-300">
        <main className="flex-1 grid place-items-center">
            <div className="flex overflow-hidden rounded-2xl ">
                <div className="bg-primary px-16 grid place-items-center">
                    <h1 className="text-zinc-900 text-2xl">Login</h1>
                </div>
                <div className="bg-zinc-900 py-12 px-14">
                    <FormLogin />
                </div>
            </div>
        </main>
    </div>
}