const express = require('express');
const UserController = require('./user.controller');
const { middlewareAuth } = require('../../middlewares/auth.middleware');
const { middlewareLogin } = require('../../middlewares/login.middleware');

const router = express.Router();

const userController = new UserController();

router.get('/', [middlewareAuth], userController.getCurrentUser);
router.post('/', [middlewareLogin], userController.login);
router.get('/logout', [middlewareAuth], userController.logout);

module.exports = router;