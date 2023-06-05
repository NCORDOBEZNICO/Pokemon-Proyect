const { Router } = require('express');
const pokemonsRouter = require("./RoutePokemons")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

  
router.use('/pokemons', pokemonsRouter);
  
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
