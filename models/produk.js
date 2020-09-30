'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produk = sequelize.define('Produk', {
    kode: DataTypes.STRING,
    nama: DataTypes.STRING,
    BahanId: DataTypes.INTEGER,
    warna: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    ProdukkategoriId: DataTypes.INTEGER
  }, {});
  Produk.associate = function(models) {
    // associations can be defined here
    Produk.belongsTo(models.Bahan);
    Produk.belongsTo(models.Produkkategori);
  };
  return Produk;
};