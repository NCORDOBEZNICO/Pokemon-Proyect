const { buscarPokemonPorNombre, obtenerPokemonId, obtenerTodosPokemons, crearPokemon, } = require('../Controllers/PokemonController')


const getPokemonsHandler = async (req, res) => { //Maneja la solicitud para obtener a todos los pokemones
    const { name } = req.query; //comprueba si se esta pasando un nombre

    const resultado = name ? await buscarPokemonPorNombre(name) : await obtenerTodosPokemons(); //si se proporciona un nombre llama a la funcion

    res.status(200).json(resultado)
}

const getPokemonsHandlerId = async (req, res) => {
    const { id } = req.params; //se obtiene el id por el parametro de la URL
    const source = isNaN(id) ? "bdd" : "api"; //se verifica si el ID es numero o no
    try {
        const pokemon = await obtenerPokemonId(id, source) //llamamos la funcion
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