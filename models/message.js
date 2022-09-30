'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      message.belongsTo(models.User,{
        as:'sender',
        foreignKey:'user1Id'
      })
      message.belongsTo(models.User,{
        as:'reciever',
        foreignKey:'user2Id'
      })
    }
  }
  message.init({
    user1Id: DataTypes.INTEGER,
    user2Id: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'message',
  });
  return message;
};