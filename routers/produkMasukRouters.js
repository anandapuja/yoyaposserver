const router = require('express').Router();
const ProdukMasukController = require('../controllers/ProdukMasukController');

router.get('/', ProdukMasukController.listProdukMasuk);
router.get('/:id', ProdukMasukController.detailProdukMasuk);
router.post('/', ProdukMasukController.tambahProdukMasuk);
router.put('/:id', ProdukMasukController.editProdukMasuk);
router.delete('/:id', ProdukMasukController.deleteProdukMasuk);

module.exports = router;