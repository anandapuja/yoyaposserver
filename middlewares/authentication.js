const jwt = require('jsonwebtoken');

function authentication(req,res,next){
  try{
    const decode = jwt.verify(req.headers.token, process.env.JWT);
    req.UserId = decode.id;
    req.nama = decode.nama;
    next();
  }catch{
    res.status(500).json({message: 'invalid token'});
  };
};

module.exports = authentication;