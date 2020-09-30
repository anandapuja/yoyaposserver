const { Bahanproduksi, Bahanmasuk, Rekanan } = require('../models');

class BahanProduksiController {
  static listBahanProduksi(req,res){
    Bahanproduksi.findAll({
      order: [
        ['id','DESC']
      ],
      include: [
        {model: Rekanan},
        {model: Bahanmasuk}
      ]
    })
      .then(data => {
        res.status(200).json({data});
      })
      .catch(err => res.status(500).json({err}));
  };
  static detailBahanProduksi(req,res){
    const params = Number(req.params.id);
    Bahanproduksi.findByPk(params,{
      include: [
        {model: Bahanmasuk},
        {model: Rekanan}
      ]
    })
      .then(data =>{
        if(data === null){
          res.status(404).json({massage: 'no data'});
        }else{
          res.status(200).json({data});
        };
      })
      .catch(err => {
        res.status(500).json({err});
      });
  };
  static tambahBahanProduksi(req,res){
    const params = Number(req.params.id);
    const reqBody = {
      BahanmasukId: params,
      RekananId: Number(req.body.RekananId),
      yard: Number(req.body.yard),
      roll: Number(req.body.roll),
      keterangan: req.body.keterangan,
    };
    Bahanproduksi.create(reqBody)
      .then(data => res.status(201).json({data}))
      .catch(err => res.status(500).json({err}));
  };
  static editBahanProduksi(req,res){
    const params = Number(req.params.id);
    Bahanproduksi.findByPk(params)
      .then(data => {
        if(data === null){
          return 0;
        }else {
          const reqBody = {
            BahanmasukId: Number(data.BahanmasukId),
            RekananId: Number(req.body.RekananId),
            yard: Number(req.body.yard),
            roll: Number(req.body.roll),
            keterangan: req.body.keterangan,
          };
          return Bahanproduksi.update(reqBody,{
            where: {
              id: params
            }
          });
        }
      })
      .then(data => {
        if(data === 0){
          res.status(404).json({message: 'no data'});
        }else {
          res.status(200).json({data});
        }
      })
      .catch(err => res.status(500).json({err}));
  };
  static deleteBahanProduksi(req,res){
    const params = Number(req.params.id);
    Bahanproduksi.destroy({
      where:{
        id: params
      }
    })
      .then(data => {
        if(data === 0){
          res.status(404).json({message: 'no data'});
        }else {
          res.status(200).json({data});
        };
      })
      .catch(err => res.status(500).json({err}));
  };
};

module.exports = BahanProduksiController;