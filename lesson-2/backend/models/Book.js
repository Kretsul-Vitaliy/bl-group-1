const { Schema, model } = require("mongoose");

const bookSchema = Schema(
  {
    author: {
      type: String,
      required: [true, "Введите Имя"],
    },
    title: {
      type: String,
      default: "ХЗ",
    },
    pages: Number,
    picture: String,
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("book", bookSchema);
