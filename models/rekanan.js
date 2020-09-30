'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rekanan = sequelize.define('Rekanan', {
    nama: DataTypes.STRING,
    telepon: DataTypes.INTEGER,
    email: DataTypes.STRING,
    alamat: DataTypes.STRING,
    rekening: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Rekanan.associate = function(models) {
    // associations can be defined here
    Rekanan.belongsToMany(models.Bahan, {
      through: "BahanMasuk",
      foreignKey: "RekananId"
    });
    Rekanan.belongsToMany(models.Bahanmasuk,{
      through: "BahanProduksi",
      foreignKey: "RekananId"
    });
  };
  return Rekanan;
};