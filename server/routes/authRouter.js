const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authControllers.js');

//Search couples route:
//
authRouter.get(
  '/searchcouple/:coupleQuery',
  authController.lookUpCouple,
  (req, res) => {
    console.log('sending result');
    res.status(200).json({ usernameMatches: res.locals.usernameMatches });
  }
);

//SignUp Route:
//POST Request

authRouter.post(
  '/signup',
  authController.createUser,
  authController.setSSIDCookie,
  (req, res) => {
    res.status(200).json(res.locals.loginInfo);
  }
);

//Login Route:
//POST Request

authRouter.post(
  '/login',
  authController.verifyUser,
  authController.setSSIDCookie,
  (req, res) => {
    res.status(200).json(res.locals.loginInfo); //contains {email, userId}
  }
);

module.exports = authRouter;
