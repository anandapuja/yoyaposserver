const { Bahan } = require('../models');

class BahanController {
  static listBahan(req,res){
    Bahan.findAll({
      order: [
        ['id', 'DESC']
      ]
    })
      .then( data => {
        if( data.length !== 0 ){
          res.status(200).json({
            data
          });
        } else {
          res.status(404).json({
            message: 'Bahan not found'
          });
        };
      })
      .catch( err => {
        res.status(500).json({
          err
        });
      });
  };
  static detailBahan(req,res){
    const params = Number(req.params.id);
    Bahan.findByPk(params,{
      include: [
        {
          model: Supplier
        }
      ]
    })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).json({
          err
        });
      });
  };
  static tambahBahan(req,res){
    const reqBody = {
      namaBahan: req.body.namaBahan,
      keterangan: req.body.keterangan
    };
    Bahan.create(reqBody)
      .then(data => {
        res.status(201).json({
          data
        });
      })
      .catch( err => {
        res.status(500).json({
          err
        });
      });
  };
  static editBahan(req,res){
    const reqBody = {
      namaBahan: req.body.namaBahan,
      keterangan: req.body.keterangan
    };
    const params = Number(req.params.id);
    Bahan.findByPk(params)
      .then(data => {
        if(data){
          return Bahan.update(reqBody, {
            where: {
              id: params
            }
          })
        } else {
          return 0;
        }
      })
      .then(data => {
        if(data === 0){
          res.status(404).json({
            message: 'Bahan not found'
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
  static deleteBahan(req,res){
    const params = Number(req.params.id);
    Bahan.findByPk(params)
      .then(data => {
        if(data){
          return Bahan.destroy({
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
            message: 'Bahan not found'
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

module.exports = BahanController;