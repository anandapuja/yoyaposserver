const e = require('express');
const {
  Produk,
  Bahan,
  Produkkategori
} = require('../models');

class ProdukController {
  static listProduk(req,res){
    Produk.findAll({
      order: [
        ['id', 'DESC']
      ],
      include: [
        {model: Bahan},
        {model: Produkkategori}
      ]
    })
      .then(data => {
        res.status(200).json({data});
      })
      .catch(err => res.status(500).json({err}));
  };
  static detailProduk(req,res){
    Produk.findByPk(Number(req.params.id),{
      include: [
        {model: Bahan},
        {model: Produkkategori}
      ]
    })
      .then(data => {
        res.status(200).json({data});
      })
      .catch(err => {
        res.status(500).json({err});
      })
  };
  static tambahProduk(req,res){
    const reqBody = {
      kode: Number(req.body.kode),
      nama: req.body.nama,
      BahanId: Number(req.body.BahanId),
      warna: req.body.warna,
      keterangan: req.body.keterangan,
      ProdukkategoriId: Number(req.body.ProdukkategoriId)
    };
    Produk.create(reqBody)
      .then(data => {
        res.status(201).json({data});
      })
      .catch(err => {
        res.status(500).json({err});
      })
  };
  static editProduk(req,res){
    Produk.findByPk(Number(req.params.id))
      .then(data => {
        if(data){
          return Produk.update({
            kode: Number(req.body.kode),
            nama: req.body.nama,
            BahanId: Number(req.body.BahanId),
            warna: req.body.warna,
            keterangan: req.body.keterangan,
            ProdukkategoriId: Number(req.body.ProdukkategoriId)
          },{
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
        }
      })
      .catch(err => {
        res.status(500).json({err});
      })
  };
  static deleteProduk(req,res){
    Produk.findByPk(Number(req.params.id))
      .then(data => {
        if(data) return Produk.destroy({ where: {id: Number(req.params.id)} });
        if(!data) return 0; 
      })
      .then(data => {
        data === 0 ? res.status(404).json({message: 'no data'}) : res.status(200).json({data});
      })
      .catch(err => {
        res.status(500).json({err});
      })
  };
  // PRODUK KATEGORI SECTION
  static listProdukkategori(req,res){
    Produkkategori.findAll()
      .then(data => res.status(200).json({data}))
      .catch(err => res.status(500).json({err}));
  };
  static detailProdukkategori(req,res){
    Produkkategori.findByPk(Number(req.params.id))
      .then(data => {
        if(data){
          res.status(200).json({data});
        }else{
          res.status(404).json({message: 'no data'});
        }
      })
      .catch(err => res.status(500).json({err}));
  };
  static tambahProdukkategori(req,res){
    const reqBody = {
      nama: req.body.nama,
      keterangan: req.body.keterangan
    };
    Produkkategori.create(reqBody)
      .then(data => res.status(201).json({data}))
      .catch(err => res.status(500).json({err}));
  }
  static editProdukkategori(req,res){
    Produkkategori.findByPk(Number(req.params.id))
      .then(data => {
        if(data){
          return Produkkategori.update({
            nama: req.body.nama,
            keterangan: req.body.keterangan
          }, {
            where: {
              id: Number(req.params.id)
            }
          });
        }else {
          return 0;
        }
      })
      .then(data => {
        if(data === 0){
          res.status(404).json({
            message: 'no data'
          });
        }else {
          res.status(200).json({
            data
          });
        };
      })
      .catch(err => {
        res.status(500).json({err});
      })
  };
  static deleteProdukkategori(req,res){
    Produkkategori.findByPk(Number(req.params.id))
      .then(data => {
        if(data){
          return Produkkategori.destroy({
            where:{
              id: Number(req.params.id)
            }
          });
        }else{
          return 0;
        }
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
      });
  };
};

module.exports = ProdukController;