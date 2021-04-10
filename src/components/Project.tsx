import React from 'react'
import Link from 'next/link'
import css from '../css/components/project.module.css'

export default function Project() {
    return (
        <Link href="/project#navbar">
            <a className={css.container}>
                <img src="images/happy.png" alt="Capa do Projeto"/>

                <section>
                    <h2>Happy</h2>
                    <h3>NLW#3 - Rocketseat</h3>

                    <p>Descrição do projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                       Curabitur vehicula tortor maximus mauris venenatis scelerisque. Nulla tristique 
                       semper lectus vitae facilisis. Nunc sodales orci libero, in ultrices nisi euismod 
                       at. Proin vel erat mauris. Etiam lorem neque, tempor in ante lobortis, ultricies.</p>
                </section>
            </a>
        </Link>
    )
}