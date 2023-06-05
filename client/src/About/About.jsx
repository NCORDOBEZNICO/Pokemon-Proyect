import React from 'react';
import style from '../About/About.module.css';
import imagen from '../Imagenes/perfil.jpeg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const About = () => {
  return (
    <div>
      {/* Sección del banner */}
      <section id="inicio" className={style.inicio}>
        <div className={style['contenido-banner']}>
        <Link to='/home'>
        <button className={style.ingreso}>Volver</button>
        </Link> 
          <div className={style['contenedor-img']}>
            <img src={imagen} alt='Foto de perfil' />
          </div>
          <h1>NICOLAS CORDOBEZ</h1>
          <h2>Desarrollador web Full Stack</h2>
          <div className={style.redes}>
            <a href="https://www.facebook.com/niko.cordobez/" target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-facebook ${style['fa-brands']}`}></i>
            </a>
            <a href="https://twitter.com/Nicocordobez1" target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-twitter ${style['fa-brands']}`}></i>
            </a>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-linkedin ${style['fa-brands']}`}></i>
            </a>
            <a href="https://www.instagram.com/nico_cordobez/" target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-instagram ${style['fa-brands']}`}></i>
            </a>
          </div>
        </div>
      </section>

      {/* Sección Sobre mí */}
      <section id="sobremi" className={style.sobremi}>
      <div className={style['contenido-seccion']}>
          <h2>Sobre mí</h2>
          <p>
            <span>
              ¡Hola! Soy Nicolás Cordobez, un entusiasta desarrollador web full stack en busca de oportunidades emocionantes para aplicar mis habilidades y conocimientos. Actualmente, estoy finalizando mi carrera como desarrollador web full stack.
              <br />
              {/* Resto del contenido sobre mí */}
            </span>
          </p>

          {/* Información personal */}
          <div className={style.fila}>
            <div className={style.col}>
              <h3>Datos Personales</h3>
              <ul>
                <li>
                  <strong>Cumpleaños</strong>
                  24-06-1999
                </li>
                <li>
                  <strong>Teléfono</strong>
                  +54 3468 600610
                </li>
                <li>
                  <strong>Email</strong>
                  nicocordobez@gmail.com
                </li>
                <li>
                  <strong>Dirección</strong>
                  Mendoza 744, Arias, Cordoba, Argentina.
                </li>
                <li>
                  <strong>Cargo</strong>
                  <span>FREELANCE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
