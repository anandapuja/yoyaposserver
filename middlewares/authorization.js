const { User } = require('../models');

async function authorization(req,res,next){
  const findUser = await User.findByPk(req.UserId);
  console.log(req.UserId);
  console.log(findUser);
  if(findUser){
    next();
  }else{
    res.status(400).json({message: 'no authorization'});
  };
};

module.exports = authorization;