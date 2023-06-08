const { Type } = require("../db");
const axios = require("axios")

const getAllTypes = async () => {
    const typesInfo = (await axios.get("https://pokeapi.co/api/v2/type")).data.results    
    
    const filteredApi = typesInfo.map((type) => type.name)    

    filteredApi.forEach( async (type) => {
        await Type.findOrCreate({
          where: { name: type.toLowerCase() },
        });
      });

    const allTypesDb = await Type.findAll()

    return allTypesDb
}



module.exports = {
    getAllTypes,
}