import axios from 'axios'

export const GET_POKEMONS = "GET_POKEMONS";

export const getPokemons = () => {
    return async function (dispatch){
        const dataApi = await axios.get(`http://localhost:3001/pokemons`);
        const pokemons = dataApi.data;
        return dispatch({type: GET_POKEMONS, payload: pokemons,});
    }
}


