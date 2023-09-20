import { ArrowLeftRight } from 'lucide-react';
import { Undo2 } from 'lucide-react';

export default function Produto() {

    return <div className='flex flex-col justify-between bg-zinc-900 text-slate-100 w-fit'>
        <div>
            <div>
                <h2>Redmi 12C</h2>
            </div>
            <div className='flex flex-col'>
                <h3>Preço de compra:</h3>
                <span>R$1340,00</span>
            </div>
        </div>
        <div>
            <button>
                <ArrowLeftRight height={20} width={20} />
                <span>Registrar Troca</span>
            </button>
            <button>
                <Undo2 height={20} width={20} />
                <span>Registrar Devolução</span>
            </button>
        </div>
    </div>
}