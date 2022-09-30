
import message from './message';

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.message,{
        as:'sent',
        foreignKey:"user1Id"
      })
      User.hasMany(models.message,{
        as:'recieved',
        foreignKey:"user2Id"
      })
    }
  }
  User.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};