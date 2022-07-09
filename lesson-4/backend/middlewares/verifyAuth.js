// 1. читаем заголовки авторизации что там было слово 'Bearer'
// 2.проверяем токен на валидность (verify token)
// 3.добавить пользователя в request чтобы все могли этим пользователем пользоваться
// 4. и передаем управление следующей функции
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyAuth = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = await User.findById(decoded.id);
  }
  next();
});

module.exports = verifyAuth;
