const router = require('express').Router();
const BahanController = require('../controllers/BahanController');

router.get('/', BahanController.listBahan);
router.get('/:id', BahanController.detailBahan);
router.post('/', BahanController.tambahBahan);
router.put('/:id', BahanController.editBahan);
router.delete('/:id', BahanController.deleteBahan);

module.exports = router;