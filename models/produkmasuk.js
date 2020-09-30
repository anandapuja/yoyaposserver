'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produkmasuk = sequelize.define('Produkmasuk', {
    ProdukId: DataTypes.INTEGER,
    ProdukkategoriId: DataTypes.INTEGER,
    jumlahproduk: DataTypes.INTEGER,
    bahanterpakai: DataTypes.INTEGER,
    modalbahan: DataTypes.INTEGER,
    modalpuring: DataTypes.INTEGER,
    modaljahit: DataTypes.INTEGER,
    modalrenda: DataTypes.INTEGER,
    modallain: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    hargaperpotong: DataTypes.INTEGER,
    hargagrosir: DataTypes.INTEGER,
    keterangan: DataTypes.TEXT
  }, {});
  Produkmasuk.associate = function(models) {
    // associations can be defined here
    Produkmasuk.belongsTo(models.Produk);
    Produkmasuk.belongsTo(models.Produkkategori);
  };
  return Produkmasuk;
};