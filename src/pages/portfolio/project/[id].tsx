import React from 'react'
import Head from 'next/head'

import Navbar from '../../../components/Navbar'
import LinkCard from '../../../components/LinkCard'
import Footer from '../../../components/Footer'

import css from '../../../css/project.module.css'

export default function Portfolio() {
    return (
        <div className={css.container}>
            <Head>
                <title>Nome do Projeto</title>
            </Head>

            <Navbar />

            <main>
                <header>
                    <h2> Happy </h2>
                    <hr/>
                </header>

                <section>
                    <div>
                        <img src="/images/happy.png" alt=""/>
                    </div>

                    <h2>Descrição do projeto</h2>
                    <hr/>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Curabitur vehicula tortor maximus mauris venenatis scelerisque. Nulla tristique 
                   semper lectus vitae facilisis. Nunc sodales orci libero, in ultrices nisi euismod 
                   at. Proin vel erat mauris. Etiam lorem neque, tempor in ante lobortis, ultricies. 
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Curabitur vehicula tortor maximus mauris venenatis scelerisque. Nulla tristique 
                   semper lectus vitae facilisis. Nunc sodales orci libero, in ultrices nisi euismod 
                   at. Proin vel erat mauris. Etiam lorem neque, tempor in ante lobortis, ultricies. 
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Curabitur vehicula tortor maximus mauris venenatis scelerisque. Nulla tristique 
                   semper lectus vitae facilisis. Nunc sodales orci libero, in ultrices nisi euismod 
                   at. Proin vel erat mauris. Etiam lorem neque, tempor in ante lobortis, ultricies.</p>
                </section>

                <div className={css.links}>
                    <LinkCard link="https://github.com/marceometry" img="github" external="true">Repositório</LinkCard>

                    <LinkCard link="https://www.figma.com/file/JulJQK2kpLXpexpcqQNiwU/My-website" img="figma" external="true">Design</LinkCard>
                    
                    <LinkCard link="https://my-website-blue.vercel.app" img="globe" external="true">Acesse</LinkCard>
                </div>
            </main>

            <Footer />
        </div>
    )
}