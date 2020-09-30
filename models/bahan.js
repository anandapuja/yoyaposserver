'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bahan = sequelize.define('Bahan', {
    namaBahan: DataTypes.STRING,
    keterangan: DataTypes.TEXT
  }, {});
  Bahan.associate = function(models) {
    // associations can be defined here
    Bahan.belongsToMany(models.Rekanan, {
      through: "BahanMasuk",
      foreignKey: "BahanId"
    });
    Bahan.hasMany(models.Produk, {
      foreignKey: "BahanId"
    });
  };
  return Bahan;
};