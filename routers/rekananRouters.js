const router = require('express').Router();
const RekananController = require('../controllers/RekananController');

router.get('/', RekananController.listRekanan);
router.get('/:id', RekananController.detailRekanan);
router.post('/', RekananController.tambahRekanan);
router.put('/:id', RekananController.editRekanan);
router.delete('/:id', RekananController.deleteRekanan);

module.exports = router;