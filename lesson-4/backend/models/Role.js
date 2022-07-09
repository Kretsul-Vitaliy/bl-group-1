const { Schema, model } = require('mongoose');
// ADMIN
// MODERATOR
// USER
// COPYWRITER
// CUSTOMER

const roleSchema = Schema(
  {
    value: {
      type: String,
      default: 'USER',
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model('role', roleSchema);
