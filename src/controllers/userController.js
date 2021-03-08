const User = require('../models/User')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

exports.registerUser = async (req, res, next) => {
  const { username, email, password } = req.body
  const errorList = await validateRegisterRequestData(username, email)
  if (errorList.length === 0) {
    const activationToken = crypto.createHash('sha256').update(username).digest('hex')
    const hash = bcrypt.hashSync(password, 10)
    const user = new User({username, email, password: hash, activationToken})
    user.save() // error handling?
    res.status(201).json({message: 'successfully registered user'})
  }
  else {
    res.status(400).json({errorList: errorList})
  }
}

exports.activateUser = async (req, res, next) => {
  const { token } = req.body
  await User.find({activationToken: token}, (err, user) => {
    if (user.length > 0) {
      const [ activatedUser ] = user
      activatedUser.activationToken = null
      activatedUser.save()
    }
  })
  res.status(200).send()
}

exports.loginUser = async (req, res, next) => {
  const errorList = []
  const { credential, password } = req.body
  let user
  if ('username' in credential)  {
    user = await findUserByUsername(credential.username)
    if (!user) errorList.push('username not registered')
    else {
      checkExistingUser(user, password, errorList)
    }
  }
  if ('email' in credential) {
    user = await findUserByEmail(credential.email)
    if (!user) errorList.push('email not registered')
    else {
      checkExistingUser(user, password, errorList)
    }
  }
  if (errorList.length === 0) {
    const userObj = user.toObject()
    userObj.token = jwt.sign({user: user}, 'secret key')
    res.status(200).json(userObj)
  }
  else {
    res.status(400).json({errorList: errorList})
  }
}

const validateRegisterRequestData = async (username, email) => {
  const errorList = []
  const usernameUser = await findUserByUsername(username)
  const emailUser = await findUserByEmail(email)
  if (usernameUser) errorList.push('username taken')
  if (emailUser) errorList.push('email taken')
  return errorList
}

const findUserByUsername = async (username) => {
  let usernameUser
  await User.find({username: username}, (err, user) => {
    if (user.length > 0) usernameUser = user[0]
  })
  return usernameUser
}

const findUserByEmail = async (email) => {
  let emailUser
  await User.find({email: email}, (err, user) => {
    if (user.length > 0) emailUser = user[0]
  })
  return emailUser
}

const checkExistingUser = async (user, password, errorList) => {
  if (user.activationToken) {
    errorList.push('user not activated')
  }
  if (!bcrypt.compareSync(password, user.password)) {
    errorList.push('incorrect password')
  }
} 
