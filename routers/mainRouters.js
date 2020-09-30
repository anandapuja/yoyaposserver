const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

const userRouters = require('./userRouters');
const bahanRouters = require('./bahanRouters');
const rekananRouters = require('./rekananRouters');
const bahanMasukRouters = require('./bahanMasukRouters');
const bahanReturRouters = require('./bahanReturRouters');
const bahanProduksiRouters = require('./bahanProduksiRouters');
const bahanSisaRouters = require('./bahanSisaRouters');
const produkRouters = require('../routers/produkRouters');
const produkMasukRouters = require('./produkMasukRouters');

router.get('/',(req,res) => res.send('clean page'));
router.use('/user', userRouters);
router.use('/bahan', bahanRouters);
router.use('/rekanan', rekananRouters);
router.use('/bahanmasuk', bahanMasukRouters);
router.use('/bahanretur', bahanReturRouters);
router.use('/bahanproduksi', bahanProduksiRouters);
router.use('/bahansisa', bahanSisaRouters);
router.use('/produk', authentication, authorization, produkRouters);
router.use('/produkmasuk', produkMasukRouters);

module.exports = router;