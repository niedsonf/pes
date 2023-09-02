'use client'
import FormLogin from "@/components/form_login";

export default function Page() {
    return <div className="h-screen flex flex-col">
        <main className="flex-1 grid place-items-center">
            <div className="flex overflow-hidden rounded shadow-md shadow-gray-400">
                <div className="bg-blue-950 px-16 grid place-items-center">
                    <h1 className="text-slate-100 text-2xl">Login</h1>
                </div>
                <div className="bg-gray-400 py-12 px-14 ">
                    <FormLogin />
                </div>
            </div>
        </main>
    </div>
}