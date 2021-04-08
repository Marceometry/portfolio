import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

import css from '../css/base.module.css'

export default function About() {
    return (
        <div className={css.container}>
            <Head>
                <title>Sobre mim</title>
            </Head>

            <Navbar />

            <main>
                <Profile />

                <section>
                    <header>
                        <h2> Sobre mim </h2>
                        <hr/>
                    </header>

                    <article>
                        <p> Email: <strong> marceometry@gmail.com </strong></p>

                        <p> Whatsapp: <strong> +55 51 99579-4033 </strong></p>
                    </article>
                </section>
            </main>
        </div>
    )
}