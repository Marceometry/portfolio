import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { api } from '../../utils/api'

import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Footer from '../components/Footer'

import css from '../css/portfolio.module.css'

type PortfolioProps = {
    projects: Project[]
}

export default function Portfolio({ projects }: PortfolioProps) {
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

                {projects.map((project: Project) => (
                    <Project key={project._id} 
                        _id={project._id} 
                        img={`/images/${project.img}`} 
                        title={project.name} 
                        origin={project.origin} 
                        description={project.description}
                    />
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

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('find-projects')

    const projects = data.map((project: Project) => {
        return {
            _id: project._id,
            name: project.name,
            origin: project.origin,
            description: project.description,
            img: project.img
        }
    })

    return {
        props: {
            projects
        },
        revalidate: 60 * 60 * 8
    }
}