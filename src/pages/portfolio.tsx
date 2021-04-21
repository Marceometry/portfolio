import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Footer from '../components/Footer'

import css from '../css/portfolio.module.css'

type Props = {
    projects: object[]
}

export default function Portfolio(props: Props) {
    return (
        <div className={css.container}>
            <Head>
                <title>Portfólio</title>
            </Head>

            <Navbar />

            <main>
                <header>
                    <h2> Meu Portfólio </h2>
                </header>
                <hr/>

                {props.projects.map((project: Project) => (
                    <>
                    <Project _id={project._id} img={`/images/${project.img}`} title={project.name} origin={project.origin}>
                        {project.description}
                    </Project>

                    <hr/>
                    </>
                ))}
            </main>

            <Footer />
        </div>
    )
}

type Project = {
    _id: string
    name: string
    origin: string
    description: string
    img: string
}

export async function getStaticProps() {
    const res = await fetch('/api/find-projects')
    const projects = await res.json()

    return {
        props: { projects },
        revalidate: 60 * 60 * 8
    }
}