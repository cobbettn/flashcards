const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  username:         {type: String, required: true},
  email:            {type: String, required: true},
  password:         {type: String, required: true},
  activationToken:  {type: String}
})

module.exports = mongoose.model('Users', UserSchema)