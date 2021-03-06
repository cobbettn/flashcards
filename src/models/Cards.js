const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name:   {type: String, required: true},
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  cards:  {type: Array}
})

module.exports = mongoose.model('Cards', UserSchema)