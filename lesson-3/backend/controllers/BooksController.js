const Book = require('../models/Book');
console.log();
class BooksController {
  async add(req, res) {
    if (!req.body.author) {
      throw new Error('Пусто добавь не жалей');
    }
    const result = await Book.create(req.body);

    res.status(201).json({
      code: 201,
      data: result,
    });
  }
  async getOne(req, res) {
    const result = await Book.find({ _id: req.params.id });

    res.status(200).json({
      code: 200,
      data: result,
    });
  }
  async getAll(req, res) {
    const result = await Book.find({});

    res.status(200).json({
      code: 200,
      data: result,
      qty: result.length,
    });
  }
  async update(req, res) {
    const result = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      code: 200,
      data: result,
    });
  }
  async delete(req, res) {
    const result = await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({
      code: 200,
      data: result,
    });
  }
}
module.exports = new BooksController();
