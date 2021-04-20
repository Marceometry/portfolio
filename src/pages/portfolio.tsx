import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Footer from '../components/Footer'

import css from '../css/portfolio.module.css'

export default function Portfolio() {
    return (
        <div className={css.container}>
            <Head>
                <title>Portfólio</title>
            </Head>

            <Navbar />

            <main>
                <header>
                    <h2> Meu Portfólio </h2>
                    <hr/>
                </header>

                <Project id='1' img='/images/happy.png' title="Happy" origin="NLW#3 - Rocketseat">
                    Descrição do projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula tortor maximus mauris venenatis scelerisque. Nulla tristique semper lectus vitae facilisis. Nunc sodales orci libero, in ultrices nisi euismod at. Proin vel erat mauris. Etiam lorem neque, tempor in ante lobortis, ultricies.
                </Project>

                <hr/>

                <Project id='2' img='/images/wallpaper.jpg' title="Projeto Fictício" origin="Veio da minha cabeça">
                    Descrição do projeto. Lorem ipsum dolor sit amet, consectetur adur vehicula tortor maximus mauris venenatis scelerisque. Nulla tristique semper lectus vitae facilisis. Nunc sodales orci lid at. Proin vel erat mauris. Etiam lorem neque, tempor in ante lobortis, ultricies.
                </Project>

                <hr/>

                <Project id='3' img='/images/happy.png' title="Projeto 3" origin="Veio da minha cabeça">
                    Descrição do projeto. Lorem iptrices nisi euismod at. Proin vel erat mauris. Etiam lorem neque, tempor in ante lobortis, ultricies.
                </Project>

                <hr/>

                <Project id='4' img='/images/wallpaper.jpg' title="Projeto 4" origin="Veio da minha cabeça">
                    Descrição do projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula tortor maximus mauris venenatis scelerisque. Nulla tristique semper lectus vitae facilisis. Nunc sodales orci libero, in ultrices nisi euismod at. Proin vel erat mauris. Etiam lorem neque, tempor in ante lobortis, ultricies.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula tortor maximus mauris venenatis scelerisque.
                </Project>
            </main>

            <Footer />
        </div>
    )
}