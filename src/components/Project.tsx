import React from 'react'
import Link from 'next/link'
import css from '../css/components/project.module.css'

export default function Project(props) {
    return (
        <Link href={`/portfolio/project/${props.id}`}>
            <a className={css.container}>
                <img src={props.img} alt="Capa do Projeto"/>

                <section>
                    <h2>{props.title}</h2>
                    <h3>{props.origin}</h3>

                    <p>{props.children}</p>
                </section>
            </a>
        </Link>
    )
}