const { Rekanan } = require('../models');

class RekananController {
  static listRekanan(req,res){
    Rekanan.findAll({
      order: [
        ['id', 'DESC']
      ]
    })
      .then(data => {
        if(data.length !== 0){
          res.status(200).json({
            data
          });
        } else {
          res.status(404).json({
            message: 'Rekanan not found'
          });
        };
      })
      .catch(err => {
        res.status(500).json({
          err
        });
      });
  };
  static detailRekanan(req,res){
    const params = Number(req.params.id);
    Rekanan.findByPk(params)
      .then(data => {
        res.status(200).json({
          data
        });
      })
      .catch(err => {
        res.status(500).json({
          err
        });
      });
  }
  static tambahRekanan(req,res){
    const reqBody = {
      nama: req.body.nama,
      telepon: Number(req.body.telepon),
      email: req.body.email,
      alamat: req.body.alamat,
      rekening: req.body.rekening,
      status: req.body.status
    };
    Rekanan.create(reqBody)
      .then(data => {
        res.status(201).json({
          data
        });
      })
      .catch(err => {
        res.status(500).json({
          err
        });
      });
  };
  static editRekanan(req,res){
    const params = Number(req.params.id);
    const reqBody = {
      nama: req.body.nama,
      alamat: req.body.alamat,
      telepon: req.body.telepon,
      email: req.body.email
    };
    Rekanan.findByPk(params)
      .then(data => {
        if(data){
          return Rekanan.update(reqBody,{
            where: {
              id: params
            }
          });
        } else {
          return 0;
        };
      })
      .then(data => {
        if(data !== 0){
          res.status(200).json({
            data
          });
        } else {
          res.status(404).json({
            message: 'Rekanan not found'
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          err
        });
      });
  };
  static deleteRekanan(req,res){
    const params = Number(req.params.id);
    Rekanan.findByPk(params)
      .then(data => {
        if(data){
          return Rekanan.destroy({
            where:{
              id: params
            }
          });
        } else {
          return 0;
        };
      })
      .then(data => {
        if(data === 0){
          res.status(404).json({
            message: 'Rekanan not found'
          });
        } else {
          res.status(200).json({
            data
          });
        };
      })
      .catch(err => {
        res.status(500).json({
          err
        });
      });
  };
};

module.exports = RekananController;