import React from 'react'
import Head from 'next/head'

import Navbar from '../../components/Navbar'
import LinkCard from '../../components/LinkCard'
import Footer from '../../components/Footer'

import css from '../../css/project.module.css'

export default function Project(props: { project: Project }) {
    return (
        <div className={css.container}>
            <Head>
                <title>{props.project.name}</title>
            </Head>

            <Navbar />

            <main>
                <header>
                    {console.log(props.project)}
                    <h2>{props.project.name}</h2>
                    <hr/>
                </header>

                <section>
                    <div>
                        <img src={`/images/${props.project.img}`} alt="Capa do Projeto"/>
                    </div>

                    <h2>Descrição do projeto</h2>
                    <hr/>

                    <p>{props.project.details}</p>
                </section>

                <div className={css.links}>
                    <LinkCard link={`${props.project.githubLink}`} img="github" external="true">Repositório</LinkCard>
                    
                    {props.project.designLink && <LinkCard link={`${props.project.designLink}`} img="figma" external="true">Design</LinkCard>}
                    
                    {props.project.webLink && <LinkCard link={`${props.project.webLink}`} img="globe" external="true">Acesse</LinkCard>}
                </div>
            </main>

            <Footer />
        </div>
    )
}

type Project = {
    _id: string
    name: string
    details: string
    img: string
    githubLink: string
    designLink: string
    webLink: string
}

export async function getStaticPaths() {
    const res = await fetch('../api/find-projects')
    const projects = await res.json()
  
    const paths = projects.map((project: Project) => ({
        params: { id: project._id },
    }))
  
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`../api/projects/${params.id}`)
    const project = await res.json()

    return {
        props: { project },
        revalidate: 60 * 60 * 8
    }
}