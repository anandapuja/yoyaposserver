const { Bahanmasuk, Bahanretur } = require('../models');

class BahanReturController {
  static listBahanRetur(req,res){
    Bahanretur.findAll({
      order: [
        ['id', 'DESC']
      ],
      include: [
        {model: Bahanmasuk}
      ]
    })
      .then(data => {
        if(data.length !== 0){
          res.status(200).json({data});
        } else {
          res.status(404).json({message: 'no data'});
        };
      })
      .catch(err => res.status(500).json({err}));
  };
  static detailBahanRetur(req,res){
    const params = Number(req.params.id);
    Bahanretur.findByPk(params, {
      include: [
        {model: Bahanmasuk}
      ]
    })
      .then(data => {
        if(data){
          res.status(200).json({data});
        } else {
          res.status(404).json({message: 'no data'});
        };
      })
      .catch(err => res.status(200).json({err}));
  };
  static tambahBahanRetur(req,res){
    const params = Number(req.params.id);
    Bahanmasuk.findByPk(params)
      .then(data => {
        if(data){
          const reqBody = {
            BahanmasukId: params,
            yard: Number(req.body.yard),
            roll: Number(req.body.roll),
            total: data.harga * Number(req.body.yard),
            keterangan: req.body.keterangan
          };
          return Bahanretur.create(reqBody);
        } else {
          return 0;
        };
      })
      .then(data => {
        if(data === 0){
          res.status(404).json({message: 'no data'});
        } else {
          res.status(201).json({data});
        }
      })
      .catch(err => res.status(500).json({err}));
  };
  static editBahanRetur(req,res){
    const params = Number(req.params.id);
    const reqBody = {
      yard: Number(req.body.yard),
      roll: Number(req.body.roll),
      keterangan: req.body.keterangan
    };
    Bahanretur.findByPk(params)
      .then(data => {
        if(data){
          reqBody.BahanmasukId = Number(data.BahanmasukId);
          return Bahanmasuk.findByPk(Number(data.BahanmasukId));
        } else {
          return 0;
        };
      })
      .then(data => {
        if(data === 0){
          return 0;
        } else {
          reqBody.total = Number(req.body.yard) * data.harga;
          return Bahanretur.update(reqBody,{
            where: {
              id: params
            }
          })
        };
      })
      .then(data => {
        if(data === 0){
          res.status(404).json({message: 'no data'});
        } else {
          res.status(200).json({data});
        };
      })
      .catch(err => res.status(500).json({err}));
  };
  static deleteBahanRetur(req,res){
    const params = Number(req.params.id);
    Bahanretur.findByPk(params)
      .then(data => {
        if(data){
          return Bahanretur.destroy({
            where: {
              id: params
            }
          });
        } else {
          return 0;
        };
      })
      .then(data => {
        if(data === 0){
          res.status(404).json({message: 'no data'});
        } else {
          res.status(200).json({data});
        };
      })
      .catch(err => res.status(500).json({err}));
  };
};

module.exports = BahanReturController;