import Head from 'next/head'
import Link from 'next/link'
import css from '../css/landing.module.css'

export default function Landing() {
  return (
    <div className={css.container}>
      <main>
        <Head>
          <title>Marcelino - FrontEnd Dev</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <div>
            <img src="images/profile-img.jpg" alt="Marcelino"/>

            <h1>Olá, meu nome é Marcelino Teixeira
            <br/>Eu sou Desenvolvedor FrontEnd.</h1>
          </div>
          
          <p> Tenho 18 anos, domino <strong>HTML</strong> e <strong>CSS</strong>, e atualmente estou focado em praticar a 
          biblioteca JavaScript <strong>React</strong> juntamente do framework <strong>Next.js</strong> </p>
        </header>

        <section>
          <Link href="/about">
            <a>
              <img src="icons/address-card.svg" alt=""/>

              <span>Sobre mim</span>

              <img src="icons/arrow-right.svg" alt=""/>
            </a>
          </Link>
          
          <Link href="/portfolio">
            <a>
              <img id={css.journal} src="icons/journal-whills.svg" alt=""/>

              <span>Meu portfólio</span>

              <img src="icons/arrow-right.svg" alt=""/>
            </a>
          </Link>
            
          <Link href="/contact">
            <a>
              <img src="icons/envelope.svg" alt=""/>

              <span>Contato</span>

              <img src="icons/arrow-right.svg" alt=""/>
            </a>
          </Link>
            
          <Link href="https://github.com/marceometry">
            <a target="_blank" rel="external noopener noreferrer nofollow">
              <img src="icons/github.svg" alt=""/>

              <span>Meu GitHub</span>

              <img src="icons/arrow-right.svg" alt=""/>
            </a>
          </Link>
        </section>
      </main>
    </div>
  )
}
