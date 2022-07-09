const { Schema, model } = require('mongoose');

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Введите Имя'],
    },
    email: {
      type: String,
      required: [true, 'Введите email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Введите password'],
    },
    token: {
      type: String,
      default: null,
    },
    roles: [{ type: String, ref: 'role' }],
  },
  { versionKey: false, timestamps: true }
);

module.exports = model('user', userSchema);
