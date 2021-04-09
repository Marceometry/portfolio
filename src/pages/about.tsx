import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

import css from "../css/base.module.css";

export default function About() {
  return (
    <div className={css.container}>
      <Head>
        <title>Sobre mim</title>
      </Head>

      <Navbar />

      <main>
        <Profile />

        <section>
          <header>
            <h2> Sobre mim </h2>
            <hr />
          </header>

          <article>
            <p>
              Olá. Meu nome é Marcelino Teixeira, eu tenho 18 anos e estudo 
              no <strong> Instituto Federal do Rio Grande do Sul - Campus Osório </strong>, 
              onde faço o curso <strong> Técnico em Informática</strong> Integrado ao Ensino 
              Médio. No ano de 2020, fui introduzido à matéria de programação
              web, pela qual me interessei e comecei a estudar mais por conta
              própria. Fiz cursos à distância, além de participar de eventos
              como a Next Level Week, da Rocketseat, o que me proporcionou
              bastante prática e aprendizado. Atualmente, 
              domino <strong><i> HTML </i></strong> e <strong><i> CSS </i></strong>, 
              e estou focado em praticar a biblioteca 
              JavaScript <strong><i>React</i></strong> juntamente 
              do framework <strong><i>Next.js</i></strong>.
            </p>

            <p>
              Este site foi inteiramente desenvolvido por mim em React,
              utilizando as ferramentas do Next.js. Em meu <strong>Portfólio</strong>, 
              é possível encontrar tanto projetos pessoais (que por enquanto ainda são 
              poucos) quanto os da NLW que participei, por exemplo, além de trabalhos 
              do meu curso técnico.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
