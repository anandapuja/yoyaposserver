'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produkkategori = sequelize.define('Produkkategori', {
    nama: DataTypes.STRING,
    keterangan: DataTypes.TEXT
  }, {});
  Produkkategori.associate = function(models) {
    // associations can be defined here
    Produkkategori.hasMany(models.Produk);
    Produkkategori.hasMany(models.Produkmasuk);
  };
  return Produkkategori;
};