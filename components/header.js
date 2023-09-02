'use client'

import { MainContext } from "@/contexts/main_context"
import { useContext } from "react"
import { useRouter } from "next/navigation"

export default function Header() {
    const { state, dispatch } = useContext(MainContext)
    const router = useRouter()

    return <header className="flex p-5 bg-blue-950 justify-between"  >
        <h3 className="text-xl text-slate-100">Sistema PES</h3>
        <h3>{state.user.email}</h3>
        <button
            onClick={(e) => router.push('/login')}
            className="text-sm text-slate-100 hover:bg-slate-100 hover:text-blue-900 transition-all py-1 px-2 rounded duration-200">
            Logout
        </button>
    </header>
}