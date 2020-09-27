'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kasus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  kasus.init({
    kontak: DataTypes.INTEGER,
    suspek: DataTypes.INTEGER,
    positif: DataTypes.INTEGER,
    tanggal: DataTypes.DATE,
    id_wilayah: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kasus',
  });
  return kasus;
};