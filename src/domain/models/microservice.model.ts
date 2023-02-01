const { Model, DataTypes, Sequelize } = require('sequelize');

const MICROSERVICE_TABLE = 'microService';
const MicroServiceSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  apiName: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  instances: {
    allowNull: false,
    type: DataTypes.ARRAY,
  }  
}

class Microservice extends Model {  
  static config(sequelize){
    return {
      sequelize,
      tableName:MICROSERVICE_TABLE,
      modelName:'MicroService',
      timestamps: false
    }
  }
}

module.exports = {MICROSERVICE_TABLE, MicroServiceSchema, Microservice}
