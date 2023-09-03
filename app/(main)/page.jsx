'use client'

import { MainContext } from "@/contexts/main_context"
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react"

export default function Page() {

    const { state } = useContext(MainContext)

    useEffect(() => {
        state.user.cargo
            ? useRouter().push('/projetos')
            : useRouter().push('/login')
    }, [])

    return <>
    </>
}