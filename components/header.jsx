'use client'

import { useRouter } from "next/navigation"

export default function Header() {
    const router = useRouter()

    return <header className="flex p-4 border-b border-tertiary bg-zinc-950 justify-between"  >
        <h3 className="text-xl text-slate-100">DL Importados</h3>
        <button
            onClick={(e) => router.push('/login')}
            className="text-sm text-slate-100 hover:bg-slate-100 hover:text-blue-900 transition-all py-1 px-2 rounded duration-200">
            Logout
        </button>
    </header>
}