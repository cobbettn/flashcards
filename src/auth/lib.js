const jwt = require('jsonwebtoken')
const secretKey = 'secret key'

exports.createToken = (user) => jwt.sign({user: user}, secretKey)

exports.verifyToken = (req, res, next) => {
  const { url } = req
  if (url.startsWith('/user')) next() // user routes are unprotected
  else {
    const authHeader = req.headers['authorization']
    if (authHeader) {
      const [bearer, token] = authHeader.split(' ')
      if (token) {
        const user = jwt.verify(token, secretKey)
        if (!!user) next()
        else res.status(400).json({message: "invalid jwt token"})
      }
      else {
        res.status(400).json({message: "missing auth token"})
      }
    }
    else {
      res.status(400).json({message: "missing auth header"})
    }
  }
}