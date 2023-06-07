import { Link } from "react-router-dom";
import style from '../SearchBar/SearchBar.module.css';
import imagen from '../Imagenes/pokemon2.png';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchPokemon } from "../Redux/actions";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchPokemon(name));
  };

 
 

  return (
    <div className={style.mainContainer}>
      <img src={imagen} alt="" />
      <Link className={style.links} to="/home">HOME</Link>
      <Link className={style.links} to="/create">CREATE POKEMON</Link>
      <Link className={style.links} to="/about">ABOUT ME</Link>
      <input className={style.links} type="text" placeholder="Buscar un Pokémon..." onChange={handleChange} />
      <button className={style.links} onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar;