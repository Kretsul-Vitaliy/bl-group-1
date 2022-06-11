const router = require("express").Router();
const { modelNames } = require("mongoose");
const BooksController = require("../controllers/BooksController");
router.post("/", BooksController.add);
router.get("/", BooksController.getAll);
router.get("/:id", BooksController.getOne);
router.patch("/:id", BooksController.update);
router.delete("/:id", BooksController.delete);

module.exports = router;
// add
// getOne
// getAll
// update
// delete
