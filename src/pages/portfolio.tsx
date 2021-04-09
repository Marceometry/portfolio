import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import css from '../css/portfolio.module.css'
import Project from '../components/Project'

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

                <Project />

                <hr/>

                <Project />

                <hr/>

                <Project />

                <hr/>

                <Project />
            </main>

            <Footer />
        </div>
    )
}