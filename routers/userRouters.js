const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.get('/', UserController.user);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.delete('/:id', UserController.delete);
router.put('/:id', UserController.edit);

module.exports = router;