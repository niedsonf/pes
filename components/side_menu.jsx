'use client'

import { CircleDollarSign } from 'lucide-react';
import { ArrowLeftRight } from 'lucide-react';
import { PackagePlus } from 'lucide-react';
import { UserPlus } from 'lucide-react';
import { LineChart } from 'lucide-react';
import { PackageSearch } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Undo2 } from 'lucide-react';
import { LogOut } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function SideMenu() {

    const currentRoute = usePathname()

    const Tabs = {
        LucroMensal: {
            text: 'Lucro Mensal',
            icon: <CircleDollarSign height={20} width={20} />,
            href: '/lucro_mensal'
        },
        GiroEstoque: {
            text: 'Giro de Estoque',
            icon: <LineChart height={20} width={20} />,
            href: '/giro_estoque'
        },
        RegistrarTroca: {
            text: 'Registrar Troca',
            icon: <ArrowLeftRight height={20} width={20} />,
            href: '/registrar_troca'
        },
        CadastrarProduto: {
            text: 'Cadastrar Produto',
            icon: <PackagePlus height={20} width={20} />,
            href: '/cadastrar_produto'
        },
        BuscarCompra: {
            text: 'Buscar Compra',
            icon: <PackageSearch height={20} width={20} />,
            href: '/buscar_compra'
        },
        CadastrarFornecedor: {
            text: 'Cadastrar Fornecedor',
            icon: <UserPlus height={20} width={20} />,
            href: '/cadastrar_fornecedor'
        },
        CadastrarCompra: {
            text: 'Cadastrar Compra',
            icon: <ShoppingCart height={20} width={20} />,
            href: '/cadastrar_compra'
        },
        RegistrarDevolucao: {
            text: 'Registrar Devolução',
            icon: <Undo2 height={20} width={20} />,
            href: '/registrar_devolucao'
        },
        Logout: {
            text: 'Logout',
            icon: <LogOut height={20} width={20} />,
            href: '/login'
        }
    }

    const NavItem = ({ href, icon, text }) => {
        return <Link
            className={`flex align-middle justify-center gap-2 py-2 ${currentRoute === href ? 'text-primary' : 'text-secondary'} hover:text-primary active:text-primary group-hover:justify-start group-hover:pl-3 transition-all duration-200 ease-out`}
            href={href}>
            {icon}
            <span className='text-sm w-0 hidden whitespace-nowrap group-hover:block'>{text}</span>
        </Link>
    }

    return <aside className="bg-[#e4e4e4] w-16 px-4 py-8 border-r border-[#999fa2] group hover:w-72 transition-all duration-200 ease-out">
        <nav className='flex flex-col gap-7'>
            <div className='flex flex-col gap-3'>
                <h6 className='text-xs font-light tracking-widest text-secondary pl-1 invisible whitespace-nowrap group-hover:visible'>ORDENS DE COMPRA</h6>
                <NavItem {...Tabs.CadastrarCompra} />
                <NavItem {...Tabs.BuscarCompra} />
                {/* <NavItem {...Tabs.RegistrarTroca} />
                <NavItem {...Tabs.RegistrarDevolucao} /> */}
            </div>
            <div className='flex flex-col gap-3'>
                <h6 className='text-xs font-light tracking-widest text-secondary pl-1 invisible whitespace-nowrap group-hover:visible'>CADASTROS</h6>
                <NavItem {...Tabs.CadastrarProduto} />
                <NavItem {...Tabs.CadastrarFornecedor} />
            </div>
            <div className='flex flex-col gap-3'>
                <h6 className='text-xs font-light tracking-widest text-secondary pl-1 invisible whitespace-nowrap group-hover:visible'>ESTATÍSTICAS</h6>
                <NavItem {...Tabs.LucroMensal} />
                <NavItem {...Tabs.GiroEstoque} />
            </div>
            <div className='flex flex-col gap-3 mt-12'>
                <h6 className='text-xs font-light tracking-widest text-secondary pl-1 invisible whitespace-nowrap group-hover:visible'>CONTA</h6>
                <NavItem {...Tabs.Logout} />
            </div>
        </nav>
    </aside>
}