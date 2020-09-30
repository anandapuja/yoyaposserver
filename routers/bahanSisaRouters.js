const router = require('express').Router();
const BahanSisaController = require('../controllers/BahanSisaController');

router.get('/', BahanSisaController.listBahanSisa);
router.get('/:id', BahanSisaController.detailBahanSisa);
router.post('/:id', BahanSisaController.tambahBahanSisa);
router.put('/:id', BahanSisaController.editBahanSisa);
router.delete('/:id', BahanSisaController.deleteBahanSisa);

module.exports = router;