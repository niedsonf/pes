'use client'

import { MainContext } from '@/contexts/main_context';
import { FilePlus2 } from 'lucide-react';
import { FileStack } from 'lucide-react';
import { BadgeDollarSign } from 'lucide-react';
import Link from 'next/link'
import { useContext } from 'react';

export default function SideMenu() {

    const { state } = useContext(MainContext)

    const getMenuProps = () => {
        switch (state.user.cargo) {
            case 'admin':
                return [
                    {
                        name: 'Projetos',
                        icon: <FileStack height={18} />,
                        href: '/projetos'
                    },
                    {
                        name: 'Cadastrar projeto',
                        icon: <FilePlus2 height={18} />,
                        href: '/cadastrar'
                    },
                ]
            default:
                return [
                    {
                        name: 'Projetos',
                        icon: <FileStack height={18} />,
                        href: '/projetos'
                    },
                    {
                        name: 'Meus investimentos',
                        icon: <BadgeDollarSign height={18} />,
                        href: '/investimentos'
                    },
                    {
                        name: 'Cadastrar projeto',
                        icon: <FilePlus2 height={18} />,
                        href: '/cadastrar'
                    },
                ]
        }
    }

    return <aside className="bg-slate-100 w-72 px-4 py-8 border-r border-gray-400">
        <nav className='flex flex-col gap-4'>
            {getMenuProps().map((item, index) => {
                return <Link key={index} className={`text-sm flex align-middle gap-3 text-gray-800 rounded px-2 py-2 hover:text-blue-600 active:text-blue-600 transition duration-200`}
                    href={item.href}>
                    {item.icon}
                    {item.name}
                </Link>
            })}
        </nav>
    </aside>
}