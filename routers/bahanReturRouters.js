const router = require('express').Router();
const BahanReturController = require('../controllers/BahanReturController');

router.get('/', BahanReturController.listBahanRetur);
router.get('/:id', BahanReturController.detailBahanRetur);
router.post('/:id', BahanReturController.tambahBahanRetur);
router.put('/:id', BahanReturController.editBahanRetur);
router.delete('/:id', BahanReturController.deleteBahanRetur);

module.exports = router;