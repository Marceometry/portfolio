import css from '../css/components/project.module.css'

export default function Project() {
    return (
        <div className={css.container}>
            <img src="images/wallpaper.png" alt=""/>

            <section>
                <h1>Nome do Projeto</h1>
                <h3>Origem do Projeto</h3>

                <p>Descrição do projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Curabitur vehicula tortor maximus mauris venenatis scelerisque. Nulla tristique 
                   semper lectus vitae facilisis. Nunc sodales orci libero, in ultrices nisi euismod 
                   at. Proin vel erat mauris. Etiam lorem neque, tempor in ante lobortis, ultricies.</p>
            </section>
        </div>
    )
}