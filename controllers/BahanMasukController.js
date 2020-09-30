const { Bahanmasuk, Bahan, Rekanan, Bahanretur, Bahansisa } = require('../models');

class BahanMasukController {
  static listBahanMasuk(req,res){
    Bahanmasuk.findAll({
      order: [
        [ 'id','DESC' ]
      ],
      include:[
        { model: Rekanan },
        { model: Bahan }
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
  static detailBahanMasuk(req,res){
    const params = Number(req.params.id);
    Bahanmasuk.findByPk(params, {
      include: [
        {model: Bahan},
        {model: Rekanan},
        {model: Bahanretur}
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
  static tambahBahanMasuk(req,res,next){
    const reqBody = {
      BahanId: Number(req.body.BahanId),
      RekananId: Number(req.body.RekananId),
      yard: Number(req.body.yard),
      roll: Number(req.body.roll),
      harga: Number(req.body.harga),
      total: Number(req.body.harga) * Number(req.body.yard),
      keterangan: req.body.keterangan
    };
    let dataBahanMasuk;
    Bahanmasuk.create(reqBody)
      .then(data => {
        if(data){
          dataBahanMasuk = data;
          return Bahansisa.create({
            BahanmasukId: data.id,
            yard: data.yard,
            roll: data.roll,
            total: data.total,
            keterangan: data.keterangan
          })
        } else {
          return 0;
        };
      })
      .then(data => {
        if(data !== 0){
          res.status(201).json({data: dataBahanMasuk});
        } else {
          next()
        };
      })
      .catch(err => res.status(500).json({err}));
  };
  static editBahanMasuk(req,res){
    const params = Number(req.params.id);
    const reqBody = {
      BahanId: Number(req.body.BahanId),
      RekananId: Number(req.body.RekananId),
      yard: Number(req.body.yard),
      roll: Number(req.body.roll),
      harga: Number(req.body.harga),
      total: Number(req.body.harga) * Number(req.body.yard),
      keterangan: req.body.keterangan
    }
    Bahanmasuk.findByPk(params)
      .then(data => {
        if(data){
          return Bahanmasuk.update(reqBody,{
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
          return 0;
        } else {
          return Bahansisa.update({
            BahanmasukId: params,
            yard: Number(req.body.yard),
            roll: Number(req.body.roll),
            total: reqBody.total,
            keterangan: req.body.keterangan
          }, {
            where: {
              BahanmasukId: params
            }
          });
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
  static deleteBahanMasuk(req,res){
    const params = Number(req.params.id);
    Bahanmasuk.findByPk(params)
      .then(data => {
        if(data){
          return Bahanmasuk.destroy({
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
          return 0;
        } else {
          return Bahansisa.destroy({
            where: {
              BahanmasukId: params
            }
          })
        };
      })
      .then(data => {
        if(data === 0){
          res.status(404).json({message: 'no data'});
        } else {
          res.status(200).json({data});
        }
      })
      .catch(err => res.status(500).json({err}));
  };
};

module.exports = BahanMasukController;