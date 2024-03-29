const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CardSchema = new Schema({
  name:         {type: String, required: true},
  description:  {type: String},
  cardList:     {type: Array},
  userId:       {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model('Cards', CardSchema) // the collection name is capitalized here, but displays as FlashcardDB.cards in the mongo ui