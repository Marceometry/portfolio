import React from 'react'
import css from '../css/components/footer.module.scss'
import { Purple } from './TextColor'

export default function Footer() {
    return (
        <footer className={css.footer}>
            <section>
                <h3>Tecnologias que já tive contato:</h3>

                <ul>
                    <li><img src="/icons/html.svg" alt=""/>HTML</li>
                    <li><img src="/icons/css.svg" alt=""/>CSS</li>
                    <li><img src="/icons/js.svg" alt=""/>JavaScript</li>
                    <li><img src="/icons/react.svg" alt=""/>React</li>
                    <li><img src="/icons/next.svg" alt=""/>Next.js</li>
                    <li><img src="/icons/mongo.svg" alt="" className={css.mongo}/>MongoDB</li>
                    <li><img src="/icons/node.svg" alt=""/>Node.js</li>
                </ul>
            </section>

            <hr/>

            <section>
                <p><Purple>&#169;</Purple> Copyright 2021</p>
                <p>Desenvolvido com <Purple>&#10084;</Purple> por Marcelino Teixeira</p>
            </section>
        </footer>
    )
}