import Image from 'next/image';
import estilos from './Sobre.module.css';
import loja from '@/public/sorveteria.jpg';
import imgSobre from '@/public/eventos-image.jpg';

export default function Sobre() {
  return (
    <>
        <main>
            <div className={estilos.sobreBanner}>
                <h1>A gelateria</h1>
            </div>
            <div className={estilos.secaoSobre}>
                <div className={estilos.sobreTexto}>
                    <h2>sobre nós</h2>
                    <span>Nós simplesmente amamos sorvete!</span>
                    <p>
                        Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete 
                        produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de 
                        receber elogios. Estamos operando desde 2009 com as melhores matérias-primas 
                        para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                        Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou 
                        levar para sua residência e aproveitar junto com a família. Também vendemos 
                        para estabelecimentos e criamos eventos como festa de aniversário, formaturas e 
                        eventos empresariais. Para contratar os nossos serviços, basta entrar em contato 
                        conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para 
                        você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                    </p>
                </div>
            </div>
            <div className={estilos.sobreImagens}>
                <div className={estilos.boxImagem}>
                    <Image src={imgSobre} alt="Imagem sobre nós" />
                </div>
                <div className={estilos.boxImagem}>
                    <Image src={loja} alt="Imagem da loja" />
                </div>
            </div>
        </main>
    </>

  )
}