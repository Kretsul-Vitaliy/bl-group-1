const router = require('express').Router();
const UsersController = require('../controllers/UsersController');
const verifyAuth = require('../middlewares/verifyAuth');
router.post('/register', UsersController.registerUser);
router.post('/login', UsersController.loginUser);
router.get('/logout', verifyAuth, UsersController.logoutUser);
router.get('/users/info', UsersController.getInfoByUser);
router.get('/users', verifyAuth, UsersController.getAllUsers);

module.exports = router;
