const router = require('express').Router();
const BahanMasukController = require('../controllers/BahanMasukController');

router.get('/', BahanMasukController.listBahanMasuk);
router.get('/:id', BahanMasukController.detailBahanMasuk);
router.post('/', BahanMasukController.tambahBahanMasuk);
router.put('/:id', BahanMasukController.editBahanMasuk);
router.delete('/:id', BahanMasukController.deleteBahanMasuk);

module.exports = router;