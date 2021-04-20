import React, { ReactNode } from 'react'
import Link from 'next/link'
import css from '../css/components/project.module.css'

type ProjectProps = {
    id: string
    img: string
    title: string
    origin: string
    children: ReactNode
}

export default function Project(props: ProjectProps) {
    return (
        <Link href={`/portfolio/project/${props.id}`}>
            <a className={css.container}>
                <img src={props.img} alt="Capa do Projeto"/>

                <section>
                    <h2>{props.title}</h2>
                    <h4>{props.origin}</h4>

                    <p>{props.children}</p>
                </section>
            </a>
        </Link>
    )
}