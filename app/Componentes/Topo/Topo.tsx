import estilos from './Topo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';

export default function Topo (){
    return (
        <>
            <header className={estilos.topo}>  
                <div className={estilos.conteudoTopo}>
                    <Image src={Logo} alt="Logo"/>
                    <nav className={estilos.navegacao}>
                        <ul className={estilos.links}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/pages/sabores">Sabores</Link></li>
                            <li><Link href="/pages/sobre">Sobre</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}