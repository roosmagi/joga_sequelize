'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.belongsToMany(models.Article, {
        foreignKey: 'tagId',
        through: 'ArticleTags',
      });
    }
  }
  Tags.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Tags',
  });
  return Tags;
};