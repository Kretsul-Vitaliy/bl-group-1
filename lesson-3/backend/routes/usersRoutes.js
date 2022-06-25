const router = require('express').Router();
const UsersController = require('../controllers/UsersController');
router.post('/register', UsersController.registerUser);
router.post('/login', UsersController.loginUser);
router.get('/logout', UsersController.logoutUser);
router.get('/users/info', UsersController.getInfoByUser);
router.get('/users', UsersController.getAllUsers);

module.exports = router;
