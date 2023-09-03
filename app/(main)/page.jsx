'use client'

import { MainContext } from "@/contexts/main_context"
import { useContext, useEffect } from "react"
import { redirect } from "next/navigation"

export default function Page() {

    const { state } = useContext(MainContext)

    // state.user.cargo
    // ? redirect('/projetos')
    // : redirect('/login')
    // useEffect(() => {

    // }, [])

    return state.user.cargo
        ? redirect('/projetos')
        : redirect('/login')
}