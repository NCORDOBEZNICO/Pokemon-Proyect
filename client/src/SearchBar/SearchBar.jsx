import { Link, } from "react-router-dom";
import Loader from "../Loader/Loader";
import style from '../SearchBar/SearchBar.module.css';
import imagen from '../Imagenes/pokemon2.png';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchPokemon } from "../Redux/actions";


const SearchBar = ({ onSearch }) => {


  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSearch = () => {
    const pokemonName = name.trim().toLowerCase() //Elimina los espacios en blanco y convierte todo a minusculas

    if(!pokemonName){
      alert('No ingresó un nombre.');
  } else { 
    setLoading(true); 
    dispatch(searchPokemon(name));
    setLoading(false);
   
  };
}

 
 

  return (
    <div className={style.mainContainer}>
      <img src={imagen} alt="" />
      <Link className={style.links} to="/home">HOME</Link>
      <Link className={style.links} to="/create">CREATE POKEMON</Link>
      <Link className={style.links} to="/about">ABOUT ME</Link>
      <input className={style.links} type="text" placeholder="Buscar un Pokémon..." onChange={handleChange} />
      <button className={style.links} onClick={handleSearch}>Search</button>

      {loading ? ( 
            <Loader />
            ) : null} 
      
    </div>
  )
}

export default SearchBar;