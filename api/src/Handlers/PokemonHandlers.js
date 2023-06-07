const { buscarPokemonPorNombre, obtenerPokemonId, obtenerTodosPokemons, crearPokemon, } = require('../Controllers/PokemonController')


const getPokemonsHandler = async (req, res) => {
    const { name } = req.query;

    const resultado = name ? await buscarPokemonPorNombre(name) : await obtenerTodosPokemons();

    res.status(200).json(resultado)
}

const getPokemonsHandlerId = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const pokemon = await obtenerPokemonId(id, source)
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createPokemonHandler = async (req, res) => {
    try {
        const { name, image, hp, attack, defense, speed, height, weight } = req.body;
        const newPokemon = await crearPokemon(name, image, hp, attack, defense, speed, height, weight);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getPokemonsHandler,
    getPokemonsHandlerId,
    createPokemonHandler,
}