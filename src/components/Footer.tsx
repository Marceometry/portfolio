import React from 'react'
import css from '../css/components/footer.module.css'
import { Purple } from './TextColor'

export default function Footer() {
    return (
        <footer className={css.footer}>
            <p><Purple>&#169;</Purple> Copyright 2021</p>
            <p>Desenvolvido com <Purple>&#10084;</Purple> por Marcelino Teixeira</p>
        </footer>
    )
}