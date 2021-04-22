import React from 'react'
import Head from 'next/head'

import Navbar from '../../components/Navbar'
import LinkCard from '../../components/LinkCard'
import Footer from '../../components/Footer'

import css from '../../css/project.module.css'
import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../../../utils/api'

type ProjectProps = {
    project: Project
}

export default function Project({ project }: ProjectProps) {
    return (
        <div className={css.container}>
            <Head>
                <title>{project.name}</title>
            </Head>

            <Navbar />

            <main>
                <header>
                    <h2>{project.name}</h2>
                    <hr/>
                </header>

                <section>
                    <div>
                        <img src={`/images/${project.img}`} alt="Capa do Projeto"/>
                    </div>

                    <h2>Descrição do projeto</h2>
                    <hr/>

                    <p>{project.details}</p>
                </section>

                <div className={css.links}>
                    <LinkCard link={`${project.githubLink}`} img="github" external="true">Repositório</LinkCard>
                    
                    {project.designLink && <LinkCard link={`${project.designLink}`} img="figma" external="true">Design</LinkCard>}
                    
                    {project.webLink && <LinkCard link={`${project.webLink}`} img="globe" external="true">Acesse</LinkCard>}
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

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await api.get('find-projects')
    
    const paths = data.map((project: Project) => ({
        params: { id: project._id },
    }))
    
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data } = await api.get(`projects/${params.id}`)
    
    const project = data
    
    return {
        props: { project },
        revalidate: 60 * 60 * 8
    }
}

// export async function getStaticPaths() {
//     const res = await fetch('http://localhost:3000/api/find-projects')
//     const projects = await res.json()
  
//     const paths = projects.map((project: Project) => ({
//         params: { id: project._id },
//     }))
  
//     return { paths, fallback: false }
// }

// export async function getStaticProps({ params }) {
//     const res = await fetch(`http://localhost:3000/api/projects/${params.id}`)
//     const project = await res.json()

//     return {
//         props: { project },
//         revalidate: 60 * 60 * 8
//     }
// }