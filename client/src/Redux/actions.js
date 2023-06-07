import axios from 'axios'

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";
export const SEARCH_POKEMON_SUCCESS = 'SEARCH_POKEMON_SUCCESS'
export const SEARCH_POKEMON_FAILURE = 'SEARCH_POKEMON_FAILURE'

export const getPokemons = () => {
    return async function (dispatch){
        const dataApi = await axios.get(`http://localhost:3001/pokemons`);
        const pokemons = dataApi.data;
        return dispatch({type: GET_POKEMONS, payload: pokemons, });
    }
}

export const getPokemon = (id) => {
    return async function (dispatch){
        const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);
        const pokemon = apiData.data;
        dispatch({type: "GET_POKEMON", payload: pokemon});
    };
};

export const searchPokemon = (name) => {
    return (dispatch) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response)=> {
            const pokemon = response.data;
            dispatch({
                type: SEARCH_POKEMON_SUCCESS,
                payload: pokemon,
            });
        })
        .catch((error) => {
            dispatch({
                type: SEARCH_POKEMON_FAILURE,
                payload: error,
            });
        });
    }
}


