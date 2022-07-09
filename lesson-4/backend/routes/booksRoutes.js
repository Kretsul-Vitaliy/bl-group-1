const router = require('express').Router();
const BooksController = require('../controllers/BooksController');
const verifyAuth = require('../middlewares/verifyAuth');
const verifyRole = require('../middlewares/verifyRole');

router.post('/', verifyAuth, verifyRole(['ADMIN']), BooksController.add);
router.get('/', verifyAuth, BooksController.getAll);
router.get('/:id', BooksController.getOne);
router.patch('/:id', BooksController.update);
router.delete('/:id', BooksController.delete);

module.exports = router;
// add
// getOne
// getAll
// update
// delete
