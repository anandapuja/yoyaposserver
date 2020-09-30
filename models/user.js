'use strict';
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nama: DataTypes.STRING,
    role: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.beforeCreate(async (user, options) => {
    const hashPass = await hashPassword(user.password);
    user.password = hashPass;
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};