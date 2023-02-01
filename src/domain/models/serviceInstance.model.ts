const { Model, DataTypes, Sequelize } = require('sequelize');

export enum STATUS {
    OFFLINE = "offline",
    ONLINE = "online",
}

const SERVICE_INSTANCE_TABLE = 'serviceInstance';
const ServiceInstanceSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  apiName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  host: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  port: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  status: {
    allowNull: false,
    type: STATUS,
  }
  
}

class ServiceInstance extends Model {  
  static config(sequelize){
    return {
      sequelize,
      tableName:SERVICE_INSTANCE_TABLE,
      modelName:'ServiceInstance',
      timestamps: false
    }
  }
}

module.exports = {SERVICE_INSTANCE_TABLE, ServiceInstanceSchema, ServiceInstance}
