const { reset } = require("nodemon")

exports.registerUser = (req, res, next) => {
  res.send('registerUser')
}

exports.activateUser = (req, res, next) => {
  res.send('activateUser')
}

exports.loginUser = (req, res, next) => {
  res.send('loginUser')
}