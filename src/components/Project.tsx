import React, { ReactNode } from 'react'
import Link from 'next/link'
import css from '../css/components/project.module.css'

type ProjectProps = {
    _id: string
    img: string
    title: string
    origin: string
    description: string
}

export default function Project(props: ProjectProps) {
    return (
        <>
        <Link href={`/portfolio/${props._id}`}>
            <a className={css.container}>
                <img src={props.img} alt="Capa do Projeto"/>

                <section>
                    <h2>{props.title}</h2>
                    <h4>{props.origin}</h4>

                    <p>{props.description}</p>
                </section>
            </a>
        </Link>

        <hr/>
        </>
    )
}