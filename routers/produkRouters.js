const router = require('express').Router();
const ProdukController = require('../controllers/ProdukController');

router.get('/kategori', ProdukController.listProdukkategori);
router.get('/kategori/:id', ProdukController.detailProdukkategori);
router.post('/kategori', ProdukController.tambahProdukkategori);
router.put('/kategori/:id', ProdukController.editProdukkategori);
router.delete('/kategori/:id', ProdukController.deleteProdukkategori);

router.get('/', ProdukController.listProduk);
router.get('/:id', ProdukController.detailProduk);
router.post('/', ProdukController.tambahProduk);
router.put('/:id', ProdukController.editProduk);
router.delete('/:id', ProdukController.deleteProduk);

module.exports = router;