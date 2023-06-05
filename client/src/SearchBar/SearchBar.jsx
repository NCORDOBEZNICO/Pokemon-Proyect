import { Link } from "react-router-dom"
import style from '../SearchBar/SearchBar.module.css'
import imagen from '../Imagenes/pokemon2.png'



const SearchBar = () => {
    return(
        
        <div className={style.mainContainer}>
            <img src={imagen} alt="" />
            <Link className={style.links} to="/home">HOME</Link>
            <Link className={style.links} to="/create">CREATE POKEMON</Link>
            <Link className={style.links} to="/about">ABOUT ME</Link>
            <input className={style.links} type="text" placeholder="Buscar un Pokemon..." />
            <button className={style.links}>Search</button>

        </div>
    
    )
}
   


export default SearchBar;