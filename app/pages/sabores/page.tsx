import Image from "next/image";
import estilos from './Sabores.module.css'
import saborOreo from '@/public/sabor-oreo.png'
import saborPistache from '@/public/sabor-pistache.png'
import saborKiwi from '@/public/sorbet-kiwi.png'
import saborMorango from '@/public/sorbet-morango.png'
import saborCoockieAvela from '@/public/sabor-cookies-avela.png'
import saborLimaoSiciliano from '@/public/sorbet-limao.png'

export default function Sabores() {
    return (
        <>
            <main>
                <div className={estilos.saboresBanner}>
                    <h1>Nossos Sabores</h1>
                </div>
                <div className={estilos.secaoSabores}>
                    <h2>confira os nossos deliciosos sabores</h2>
                    <div className={estilos.cardSabores}> 
                        <div className={estilos.card}>
                            <Image src={saborOreo} alt="Sabor Oreo"/>
                            <span>Sorvete de Oreo</span>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                        <div className={estilos.card}>
                            <Image src={saborPistache} alt="Sabor Pistache"/>
                            <span>Sorvete de Pistache</span>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                        <div className={estilos.card}>
                            <Image src={saborCoockieAvela} alt="Sabor Cookies Avela"/>
                            <span>Sorvete de Cookies & Avelã</span>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                        <div className={estilos.card}>
                            <Image src={saborKiwi} alt="Sabor Kiwi"/>
                            <span>Sorvete de Kiwi</span>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div className={estilos.card}>
                            <Image src={saborMorango} alt="Sabor Morango"/> 
                            <span>Sorvete de Morango</span>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                        <div className={estilos.card}>
                            <Image src={saborLimaoSiciliano} alt="Sabor Limão Siciliano"/>
                            <span>Sorvete de Limão Siciliano</span>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    ) 
}