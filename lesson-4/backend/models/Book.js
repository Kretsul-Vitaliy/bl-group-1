const { Schema, model } = require('mongoose');

const bookSchema = Schema(
  {
    author: {
      type: String,
      required: [true, 'Введите Имя'],
    },
    title: {
      type: String,
      default: 'ХЗ',
    },
    pages: Number,
    picture: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: false,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model('book', bookSchema);
