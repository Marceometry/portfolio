import css from '../css/components/profile.module.css'

export default function Profile() {
    return (
        <header className={css.container}>
            <img src="images/profile-img.jpg" alt="Marcelino"/>

            <div>
                <h2> Marcelino Teixeira </h2>

                <span> Desenvolvedor FrontEnd </span>
            </div>
        </header>
    )
}