const { Produkmasuk } = require('../models');

class ProdukMasukController{
  static listProdukMasuk(req,res){
    Produkmasuk.findAll({
      order: [
        ['id', 'DESC']
      ]
    })
      .then(data => {
        res.status(200).json({
          data
        });
      })
      .catch(err => {
        res.status(500).json({
          err
        })
      })
  };
  static detailProdukMasuk(req,res){
    Produkmasuk.findByPk(Number(req.params.id))
      .then(data => {
        if(data){
          res.status(200).json({
            data
          });
        }else{
          res.status(404).json({
            message: 'no data'
          });
        };
      })
      .catch(err => {
        res.status(500).json({
          err
        })
      });
  };
  static tambahProdukMasuk(req,res){
    const reqBody = {
      ProdukId: Number(req.body.ProdukId),
      ProdukkategoriId: Number(req.body.ProdukkategoriId),
      jumlahproduk: Number(req.body.jumlahproduk),
      bahanterpakai: Number(req.body.bahanterpakai),
      modalbahan: Number(req.body.modalbahan),
      modalpuring: Number(req.body.modalpuring),
      modaljahit: Number(req.body.modaljahit),
      modalrenda: Number(req.body.modalrenda),
      modallain: Number(req.body.modallain),
      total: Number(req.body.modalbahan) * Number(req.body.bahanterpakai),
      hargaperpotong: Number(req.body.hargaperpotong),
      hargagrosir: Number(req.body.hargagrosir),
      keterangan: req.body.keterangan
    };
    Produkmasuk.create(reqBody)
      .then(data => {
        res.status(201).json({data});
      })
      .catch(err => {
        res.status(500).json({err});
      });
  };
  static editProdukMasuk(req,res){
    const reqBody = {
      ProdukId: Number(req.body.ProdukId),
      ProdukkategoriId: Number(req.body.ProdukkategoriId),
      jumlahproduk: Number(req.body.jumlahproduk),
      bahanterpakai: Number(req.body.bahanterpakai),
      modalbahan: Number(req.body.modalbahan),
      modalpuring: Number(req.body.modalpuring),
      modaljahit: Number(req.body.modaljahit),
      modalrenda: Number(req.body.modalrenda),
      modallain: Number(req.body.modallain),
      total: Number(req.body.modalbahan) * Number(req.body.bahanterpakai),
      hargaperpotong: Number(req.body.hargaperpotong),
      hargagrosir: Number(req.body.hargagrosir),
      keterangan: req.body.keterangan
    };
    Produkmasuk.findByPk(Number(req.params.id))
      .then(data => {
        if(data){
          return Produkmasuk.update(reqBody,{
            where: {
              id: Number(req.params.id)
            }
          });
        }else{
          return 0;
        };
      })
      .then(data => {
        if(data === 0){
          res.status(404).json({message: 'no data'});
        }else{
          res.status(200).json({data});
        };
      })
      .catch(err => {
        res.status(500).json({err});
      })
  };
  static deleteProdukMasuk(req,res){
    Produkmasuk.findByPk(Number(req.params.id))
      .then(data => {
        if(data){
          return Produkmasuk.destroy({
            where:{
              id: Number(req.params.id)
            }
          })
        }else{
          return 0;
        };
      })
      .then(data => {
        if(data === 0){
          res.status(404).json({message: 'no data'});
        }else{
          res.status(200).json({data});
        };
      })
      .catch(err => {
        res.status(500).json({
          err
        });
      });
  };
};

module.exports = ProdukMasukController;