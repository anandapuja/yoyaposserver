const router = require('express').Router();
const BahanProduksiController = require('../controllers/BahanProduksiController');

router.get('/', BahanProduksiController.listBahanProduksi);
router.get('/:id', BahanProduksiController.detailBahanProduksi);
router.post('/:id', BahanProduksiController.tambahBahanProduksi);
router.put('/:id', BahanProduksiController.editBahanProduksi);
router.delete('/:id', BahanProduksiController.deleteBahanProduksi);

module.exports = router;