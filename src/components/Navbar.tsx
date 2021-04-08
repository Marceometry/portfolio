import Link from 'next/link'
import css from '../css/components/navbar.module.css'

export default function Navbar() {
    return (
        <div className={css.container}>
            <header>
                <img src="images/wallpaper.png" alt=""/>
            </header>

            <ul>
                <Link href="about"><a><li className={css.active}> Sobre mim </li></a></Link>
                <Link href="portfolio"><a><li> Portfólio </li></a></Link>
                <Link href="contact"><a><li> Contato </li></a></Link>
                <Link href="https://github.com/marceometry">
                    <a target="_blank" rel="external noopener noreferrer nofollow">
                        <li> GitHub </li>
                    </a>
                </Link>
            </ul>
        </div>
    )
}