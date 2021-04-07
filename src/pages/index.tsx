import Head from 'next/head'
import css from '../css/Home.module.css'

export default function Home() {
  return (
    <main className={css.container}>
      <Head>
        <title>Marcelino - Dev | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div>
          <img src="Profile-img.jpg" alt="Marcelino"/>

          <h1>Olá, meu nome é Marcelino!
          <br/>Sou Desenvolvedor FrontEnd</h1>
        </div>
        
        <p> Domino HTML e CSS, e estou atualmente focado em praticar a 
        biblioteca JavaScript React juntamente do framework Next.js </p>
      </header>

      <section>
        <a>
          <img src="icons/address-card.svg" alt=""/>

          <span>Sobre mim</span>

          <img src="icons/arrow-right.svg" alt=""/>
        </a>
        
        <a>
          <img id={css.journal} src="icons/journal-whills.svg" alt=""/>

          <span>Meu portfólio</span>

          <img src="icons/arrow-right.svg" alt=""/>
        </a>
        
        <a>
          <img src="icons/envelope.svg" alt=""/>

          <span>Contato</span>

          <img src="icons/arrow-right.svg" alt=""/>
        </a>
        
        <a>
          <img src="icons/github.svg" alt=""/>

          <span>Meu github</span>

          <img src="icons/arrow-right.svg" alt=""/>
        </a>
      </section>
    </main>
  )
}
