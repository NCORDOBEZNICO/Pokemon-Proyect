const { Router } = require('express');

const { getPokemonsHandler, getPokemonsHandlerId, createPokemonHandler} = require("../Handlers/PokemonHandlers")

const RoutePokemons = Router()

RoutePokemons.get('/', getPokemonsHandler)

RoutePokemons.get("/:id", getPokemonsHandlerId)

RoutePokemons.post('/', createPokemonHandler)

module.exports = RoutePokemons;

