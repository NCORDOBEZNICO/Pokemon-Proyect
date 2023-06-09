
import { GET_POKEMONS, GET_POKEMON, SEARCH_POKEMON_FAILURE, SEARCH_POKEMON_SUCCESS } from "./actions";

const initialState = {
    allPokemons: [],
    pokemons: [],
    pokemonDetail: [],
    searchedPokemon: null,
    
};

// { id: 1, name: "bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg", hp: 20, attack: 40, defense: 30 },
//     { id: 2, name: "charmander", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg", hp: 30, attack: 50, defense: 25 },
//    {id: 3, name: "squirtle", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg", hp: 35, attack: 45, defense: 55 }

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
          return {
            ...state,
            pokemons: action.payload,
            allPokemons: action.payload,
          };
    
        case GET_POKEMON:
          return {
            ...state,
            pokemonDetail: action.payload,
          };
    
        case SEARCH_POKEMON_SUCCESS:
          return {
            ...state,
            searchedPokemon: action.payload,
          };
    
        case SEARCH_POKEMON_FAILURE:
          return {
            ...state,
            searchedPokemon: null,
          };
    
        default:
          return state;
      }
    };
export default rootReducer;