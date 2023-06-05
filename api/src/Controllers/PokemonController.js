const { Pokemon } = require('../db')
const axios = require('axios');

const buscarPokemonPorNombre = async (name) => {
    const databasePokemon = await Pokemon.findAll({ where: {name : name}}) //Buscamos en mi base de datos el parametro name

    const pokemonApi = (axios.get('https://pokeapi.co/api/v2/pokemon/')).data.results //Guardamos la API en una variable solicitando los datos detro de data.results

    apiFiltrada = pokemonApi.filter((pokemon) => pokemon.name === name) //Filtramos la API para encontrar los pokemons cuyo nombre coincida con el valor de parametro

    return  [...databasePokemon, ...apiFiltrada]; //Por último, se retorna un arreglo que combina los resultados de la búsqueda en la base de datos 

}

const obtenerPokemonId = async (id, source) => { //source indica si la peticion se hace desde la API o la DB

    const pokemon = source === 'api'

    ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data //si source es api se utiliza el numero ID
    : Pokemon.findByPk(id) //De lo contrario se utiliza el UUIDV4 que es una combinancion de numeros
    return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        type: pokemon.types.map((type) => type.type.name) //Creamos el objeto con la informacion del pokemon
    };
}

const obtenerTodosPokemons = async () => {
    const databasePokemons = await Pokemon.findAll(); //Obtenmos todos los pokemones de nuestra DB

    const apiPokemonsRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/`)).data.results; //Obtenmos todos los pokemones de nuestra API

    const urlPorPokemon = apiPokemonsRaw.map(pokemon => pokemon.url.split("/")); //Obtenemos el ID de cada pokemon en la URL

    const apiPokemons = [];

    for (let i = 0; i < urlPorPokemon.length; i++) {
        apiPokemons.push(await obtenerPokemonId(urlPorPokemon[i][6], "api")); //representa la posición del ID en el segmento dividido de la URL).
    } 

    return [...databasePokemons, ...apiPokemons];
}

const crearPokemon = async (name, image, hp, attack, defense, speed, height, weight) => //Crear un pokemon.
    await Pokemon.create({ name, image, hp, attack, defense, speed, height, weight })


module.exports = {
    buscarPokemonPorNombre,
    obtenerPokemonId,
    obtenerTodosPokemons,
    crearPokemon,
}