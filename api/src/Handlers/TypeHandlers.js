const { getAllTypes } = require("../controllers/typeController")
//destructuring de getAllTypes para usarlo luego


const getTypesHandler = async (req, res) => { //Funcion que maneja la solicitud para obtener todos los tipos de pokemones
    try {
        const allTypes = await getAllTypes()
        res.status(200).json(allTypes)        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getTypesHandler,
}