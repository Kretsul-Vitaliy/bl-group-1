const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { request, response } = require('express');
// const RepositoryUser = require('../repository/repositoryUser');
const User = require('../models/User');
const Role = require('../models/Role');
class UsersController {
  // @description     Register new User
  // @route           POST /register
  // @access          PUBLIC
  registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error('please add all fields');
    }
    const isExists = await User.findOne({ email });
    // const isExists = await RepositoryUser.find(email);
    // console.log('isExists', isExists);
    if (isExists) {
      res.status(400);
      throw new Error('user already exist');
    }
    // hashpassword
    const salt = await bcrypt.genSalt(5);
    const hashpassword = await bcrypt.hash(password, salt);
    // console.log('hashpassword', hashpassword);
    // createUser
    const roles = await Role.findOne({ value: 'ADMIN' });
    // console.log('role', role);
    const user = await User.create({
      name,
      email,
      password: hashpassword,
      roles: [roles.value],
    });

    // const user = await RepositoryUser.create(name, email, hashpassword);

    if (user) {
      res.status(201).json({
        status: 'ok',
        code: 201,
        data: {
          _id: user.id,
          name: user.name,
          email: user.email,
          roles: user.roles,
        },
      });
    } else {
      res.status(400);
      throw new Error('invalid user data');
    }
  });
  // @description     Login User
  // @route           POST /login
  // @access          PUBLIC
  loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error('please add all fields');
    }
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // await User.findByIdAndUpdate(user._id, {
      //   token: this.generateToken(user._id),
      // });
      user.token = this.generateToken(user._id, user.roles);
      user.save();
      res.status(200).json({
        status: 'ok',
        code: 200,
        data: {
          _id: user.id,
          name: user.name,
          email: user.email,
          token: user.token,
          roles: user.roles,
        },
      });
    } else {
      res.status(400);
      throw new Error('invalid credentials');
    }
  });
  generateToken = (id, roles) => {
    return jwt.sign({ id, roles }, process.env.SECRET_KEY, { expiresIn: '8h' });
  };
  // @description     Get User Info
  // @route           GET /users/info
  // @access          PRIVATE
  getInfoByUser = asyncHandler(async (req, res) => {
    res.send('getInfoByUser');
  });
  // @description     Logout User
  // @route           GET /logout
  // @access          PRIVATE
  logoutUser = asyncHandler(async (req, res) => {
    // 1.получаем token из header.
    // 2.расшифровываем токен.
    // 3.если в токене есть id то надо токен null.
    // 4.else Invalid token.
    // console.log('authorization', req.headers.authorization);
    const Bearer = req.headers.authorization.startsWith('Bearer');
    const token = req.headers.authorization.split(' ')[1];
    if (Bearer && !token) {
      res.status(401);
      throw new Error('Not Authorise');
    }
    try {
      const { id: user_id } = jwt.decode(token, process.env.SECRET_KEY);
      await User.findByIdAndUpdate(user_id, { token: null }, { new: true });
      res.status(200).send('logout success');
    } catch (error) {
      res.status(401);
      throw new Error('Authorisetion error');
      // res.status(401).send('Authorisetion error');
    }
  });
  // @description     Get All Users
  // @route           GET /users
  // @access          PRIVATE ADMIN role access
  getAllUsers = asyncHandler(async (req, res) => {
    res.send('getAllUsers');
  });
}

module.exports = new UsersController();
