const { User } = require('../models');
const { checkPassword, hashPassword } = require('../helpers/bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
  static user(req,res){
    User.findAll({
      order: [
        ['id', 'DESC']
      ]
    })
      .then( data => {
        res.status(200).json({
          data
        });
      })
      .catch( err => {
        res.status(500).json({
          message: err
        })
      })
  }
  static register(req,res){
    const reqBody = {
      nama: req.body.nama,
      role: req.body.role,
      password: req.body.password
    }
    User.create(reqBody)
      .then(data => {
        res.status(201).json({ data });
      })
      .catch(err => {
        res.status(400).json({ 
          message: err
        });
      })
  }
  static login(req,res){
    const reqBody = {
      nama: req.body.nama,
      password: req.body.password
    }
    User.findOne({
      where: {
        nama: reqBody.nama
      }
    })
      .then( data => {
        if(data){
          if(checkPassword(reqBody.password, data.password)){
            const token = jwt.sign({
              id: data.id,
              nama: data.nama
            }, process.env.JWT)
            res.status(200).json({
              userId: data.id,
              userNama: data.nama,
              userRole: data.role,
              token
            });
          } else {
            res.status(401).json({
              message: 'password not match'
            });
          }
        } else {
          res.status(404).json({
            message: 'not found'
          })
        }
      })
      .catch( err => {
        res.status(400).json({
          message: err
        })
      })
  }
  static delete(req,res){
    const params = req.params.id;
    User.findByPk(params)
      .then( data => {
        if( data ){
          return User.destroy({
            where:{
              id: params
            }
          });
        } else {
          res.status(404).json({
            message: 'user not found'
          });
        };
      })
      .then( data => {
        res.status(200).json({
          message: 'success delete'
        })
      })
      .catch( err => {
        res.status(400).json({
          message: err
        });
      });
  }
  static edit(req,res){
    const reqBody = {
      nama: req.body.nama,
      role: req.body.role,
      password: req.body.password
    }
    if(reqBody.password !== ''){
      reqBody.password = hashPassword(reqBody.password);
    };
    const params = req.params.id;
    User.findByPk(params)
      .then( data => {
        if( data ){
          return User.update(reqBody, {
            where: {
              id: params
            }
          })
        } else {
          return 0;
        }
      })
      .then( data => {
        if( data === 0 ){
          res.status(400).json({
            message: 'user not found'
          });
        } else {
          res.status(200).json({
            message: 'success edit'
          });
        }
      })
      .catch( err => {
        res.status(500).json({
          message: err
        })
      })
  }
}

module.exports = UserController;