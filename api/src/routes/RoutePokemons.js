const { Router } = require('express');

const { getPokemonsHandler, getPokemonsHandlerId, createPokemonHandler} = require("../Handlers/PokemonHandlers")

RoutePokemons = Router()

RoutePokemons.get('/', getPokemonsHandler)



RoutePokemons.post('/', createPokemonHandler)

module.exports = RoutePokemons;

