const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userName: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  }
  
}

class User extends Model {  
  static config(sequelize){
    return {
      sequelize,
      tableName:USER_TABLE,
      modelName:'User',
      timestamps: false
    }
  }
}

module.exports = {USER_TABLE, UserSchema, User}
