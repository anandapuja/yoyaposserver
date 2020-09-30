const bcrypt = require('bcryptjs');

function hashPassword(password){
  const salt = bcrypt.genSaltSync(Number(process.env.SALT));
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

function checkPassword(pass, hash){
  return bcrypt.compareSync(pass, hash);
}

module.exports = {
  hashPassword,
  checkPassword
}