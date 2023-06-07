import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../Redux/actions';
import style from '../Home/Home.module.css';
import Cards from '../Components/Cards/Cards';
import Loader from '../Loader/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const searchedPokemon = useSelector((state) => state.searchedPokemon);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    dispatch(getPokemons());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={style.containerPrincipal}>
      {searchedPokemon ? (
        <div className={style.containerSecundary}>
          <img
            src={searchedPokemon.sprites.front_default}
            alt={searchedPokemon.name}
          />
          <h2 className={style.namePokemon}>{searchedPokemon.name}</h2>
          console.log(searchedPokemon);
          
          {/* Mostrar más detalles del Pokémon si es necesario */}
        </div>
      ) : (
        <Cards allPokemons={allPokemons} />
      )}
    </div>
  );
};

export default Home;