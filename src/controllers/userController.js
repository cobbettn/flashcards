const User = require('../models/User')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const auth = require('../auth/lib')

exports.registerUser = async (req, res, next) => {
  const { username, email, password } = req.body
  const errorList = await validateRegisterRequestData(username, email)
  if (errorList.length === 0) {
    // after validation we know the username is unique, therefore creating a hash from it is safe
    const activationToken = crypto.createHash('sha256').update(username).digest('hex')
    const hashedPassword = bcrypt.hashSync(password, 10)
    const user = new User({username, email, password: hashedPassword, activationToken})
    user.save()
    sendActivationEmail(email, activationToken)
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
  const {user, errorList } = await loginWithCredentials(req)
  if (errorList.length === 0) {
    const userObj = user.toObject()
    userObj.token = auth.createToken(userObj)
    res.status(200).json(userObj)
  }
  else {
    res.status(400).send()
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

const loginWithCredentials = async (req) => {
  const errorList = []
  let user
  const { credential, password } = req.body
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
  return { user, errorList }
}

const checkExistingUser = async (user, password, errorList) => {
  if (user.activationToken) {
    errorList.push('user not activated')
  }
  if (!bcrypt.compareSync(password, user.password)) {
    errorList.push('incorrect password')
  }
}

const sendActivationEmail = (email, activationToken) => {
  const activationUrl = 'http://localhost:8080/activate/' + activationToken
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'deckBop420@gmail.com',
      pass: 'crimbTony666'
    }
  })
  const mailOptions = {
    from: 'deckBop420@gmail.com',
    to: email,
    subject: 'Welcome to flashcards',
    html: `<a href="${activationUrl}">Activate Account</a>`
  }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) console.log(error)
    else console.log('Email sent: ' + info.response)
  })
}
