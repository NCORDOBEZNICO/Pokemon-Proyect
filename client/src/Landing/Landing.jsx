import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import style from '../Landing/Landing.module.css'

const Landing = () => {
    return(
        <div className={style.container}>
            <a href="" className={style.btn}></a>
            <h1 className={style.tittle}>WELCOME TO THE POKEDEX</h1>
            <NavLink to='/home'>
            <button className={style.button}>
                <div className={style.icono}>
                <i class="fa-solid fa-arrow-right"></i>
                </div>
                <span className={style.span}>GET INTO</span>
            </button>
            </NavLink>
        </div>
    )
}

export default Landing;