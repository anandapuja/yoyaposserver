'use strict';

module.exports = (sequelize, DataTypes) => {
  const Bahanmasuk = sequelize.define('Bahanmasuk', {
    BahanId: DataTypes.INTEGER,
    RekananId: DataTypes.INTEGER,
    yard: DataTypes.INTEGER,
    roll: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    keterangan: DataTypes.TEXT,
    total: DataTypes.INTEGER
  }, {});
  Bahanmasuk.associate = function(models) {
    // associations can be defined here
    Bahanmasuk.belongsTo(models.Bahan);
    Bahanmasuk.belongsTo(models.Rekanan);
    Bahanmasuk.hasMany(models.Bahanretur, {
      foreignKey: "BahanmasukId"
    });
    Bahanmasuk.belongsToMany(models.Rekanan,{
      through: "BahanProduksi",
      foreignKey: "BahanmasukId"
    });
  };
  return Bahanmasuk;
};