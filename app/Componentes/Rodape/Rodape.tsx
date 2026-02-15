import estilos from './Rodape.module.css';
import Image from 'next/image';
import Logo from '@/public/logo.png';

export default function Rodape() {
    return (
        <>
            <footer className={estilos.rodape}>
                <div className={estilos.conteudoRodape}>
                    <Image src={Logo} alt="LogoMarca"/>
                    <div className={estilos.itensRodape}>
                        <div className={estilos.cardItem}>
                            <h3>endereço</h3>
                            <p>Av Industrial, 589</p>
                            <p>Santo André - SP</p>
                        </div>
                        <div className={estilos.cardItem}>
                            <h3>contato</h3>
                            <p>Email: gelateria_sa@gmail.com</p>
                            <p>Tel: (11) 99999-9999</p>
                        </div>
                        <div className={estilos.cardItem}>
                            <h3>horários</h3>
                            <p>Aberto todos os dias</p>
                            <p>08:00 às 20:00</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}