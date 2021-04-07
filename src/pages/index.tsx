import Head from 'next/head'
import css from '../css/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marcelino - Dev | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={css.container}>
        <header>
          <div>
            <img src="" alt=""/>

            <h1>Olá, meu nome é Marcelino!
            <br/>Sou Desenvolvedor FrontEnd</h1>
          </div>
          
          <p> Domino HTML e CSS, e estou atualmente focado em praticar a 
          biblioteca JavaScript React juntamente do framework Next.js </p>
        </header>

        <footer>
          <section>
            <img src="" alt=""/>

            <span>Sobre mim</span>

            <img src="" alt=""/>
          </section>
          
          <section>
            <img src="" alt=""/>

            <span>Meu portfólio</span>

            <img src="" alt=""/>
          </section>
          
          <section>
            <img src="" alt=""/>

            <span>Contato</span>

            <img src="" alt=""/>
          </section>
          
          <section>
            <img src="" alt=""/>

            <span>Meu github</span>

            <img src="" alt=""/>
          </section>
        </footer>
      </main>
    </div>
  )
}
