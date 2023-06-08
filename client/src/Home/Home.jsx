import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../Redux/actions';
import styles from '../Home/Home.module.css'; // Corregir la importación del estilo
import Cards from '../Components/Cards/Cards';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
    <div className={styles.containerPrincipal}>
      {searchedPokemon ? (
        <div className={styles.containerSecundary}>
          <Link to={`/detail/${searchedPokemon.id}`}>
          <img
            src={searchedPokemon.sprites.front_default}
            alt={searchedPokemon.name}
          />
          <h2 className={styles.namePokemon}>{searchedPokemon.name}</h2>
          </Link>
          
          {/* Mostrar más detalles del Pokémon si es necesario */}
        </div>
      ) : (
        <Cards allPokemons={allPokemons} />
      )}

    </div>
  );
};

export default Home;