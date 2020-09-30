'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bahansisa = sequelize.define('Bahansisa', {
    BahanmasukId: DataTypes.INTEGER,
    yard: DataTypes.INTEGER,
    roll: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    keterangan: DataTypes.TEXT
  }, {});
  Bahansisa.associate = function(models) {
    // associations can be defined here
  };
  return Bahansisa;
};