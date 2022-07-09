const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const Role = require('../models/Role');

// const verifyRole = asyncHandler(async (req, res, next) => {

// });

// module.exports =(rolesA) verifyRole();

module.exports = (rolessArr) => {
  return asyncHandler(async (req, res, next) => {
    if (req.method === 'OPTIONS') {
      next();
    }
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      let hasRole = false;
      decoded.roles.forEach((role) => {
        if (rolessArr.includes(role)) {
          hasRole = true;
        }
      });
      console.log('hasRole', hasRole);
      if (!hasRole) {
        return res.status(403).send('no access term');
      }
    }
    next();
  });
};
