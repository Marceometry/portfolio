import css from '../css/components/footer.module.css'

export default function Footer() {
    return (
        <footer className={css.footer}>
            <p><img src="icons/copyright.svg" alt=""/> Copyright 2021</p>
            <p>Desenvolvido com <img src="icons/heart.svg" alt="<3"/> por Marcelino Teixeira</p>
        </footer>
    )
}