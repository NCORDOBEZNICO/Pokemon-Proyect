const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', 
  {
    id:{
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4 

    },
      name: { //Nombre
      type: DataTypes.STRING,
      allowNull: false,
    },
      image: { //Imagen
      type: DataTypes.STRING,
      allowNull: false,
    },
      hp: { //salud
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      attack: { //ataque
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      defend: { //defenza 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      speed: { //velocidad
      type: DataTypes.INTEGER,
      allowNull: true,
    },
      height: { //altura
      type: DataTypes.INTEGER,
      allowNull: true,
    },
      weight: { //peso
      type: DataTypes.INTEGER,
      allowNull: true,
    },
      createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
    },
    {timestamps: false}
    );  
};

