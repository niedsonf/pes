'use client'

import Projeto from "@/components/projeto";
import ProjetoDetalhado from "@/components/projeto_detalhado";
import Projetos from "@/components/projetos";
import { MainContext } from "@/contexts/main_context";
import { useContext } from "react";

export default function Page() {

    const { state } = useContext(MainContext)

    return <h1>investimentos</h1>
}