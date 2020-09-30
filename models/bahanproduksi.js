'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bahanproduksi = sequelize.define('Bahanproduksi', {
    BahanmasukId: DataTypes.INTEGER,
    RekananId: DataTypes.INTEGER,
    yard: DataTypes.INTEGER,
    roll: DataTypes.INTEGER,
    keterangan: DataTypes.TEXT
  }, {});
  Bahanproduksi.associate = function(models) {
    // associations can be defined here
    Bahanproduksi.belongsTo(models.Bahanmasuk);
    Bahanproduksi.belongsTo(models.Rekanan);
  };
  return Bahanproduksi;
};