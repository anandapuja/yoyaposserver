'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bahanretur = sequelize.define('Bahanretur', {
    BahanmasukId: DataTypes.INTEGER,
    yard: DataTypes.INTEGER,
    roll: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    keterangan: DataTypes.TEXT
  }, {});
  Bahanretur.associate = function(models) {
    // associations can be defined here
    Bahanretur.belongsTo(models.Bahanmasuk);
  };
  return Bahanretur;
};