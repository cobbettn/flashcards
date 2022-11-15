const { ObjectId } = require('bson')
const Cards = require('../models/Cards')

exports.createCards = (req, res, next) => {
  const { name, userId, cardList, description } = req.body
  const cards = new Cards({name, userId, cardList, description})
  cards.save().then((card) => {
    res.status(201).json(card)
  }).catch((err) => {
    res.status(500).json({error: err})
  })
}

exports.getCards = (req, res, next) => {
  const { id } = req.params
  Cards.findById(id).then((cards) => {
    res.status(200).json({cards: cards})
  }).catch((err) =>{
    res.status(500).json({error: err})
  })
}

exports.updateCards = (req, res, next) => {
  const { id } = req.params
  const { name, userId, cardList, description } = req.body
  Cards.findById(id).then((cards) => {
    cards.name = name
    cards.userId = userId
    cards.cardList = cardList
    cards.description = description
    cards.save().then(() => {
      res.status(200).send()
    }).catch((err) => {
      res.status(500).json({error: err})
    })
  }).catch((err) =>{
    res.status(500).json({error: err})
  })
}

exports.deleteCards = (req, res, next) => {
  const { id } = req.params
  Cards.deleteOne({_id: id}).then(() => {
    res.status(200).send()
  }).catch((err) => {
    res.status(500).json({error: err})
  })
}

exports.getUserCards = (req, res, next) => {
  const { id } = req.params
  Cards.find({userId: ObjectId(id)}).then((cards) => {
    res.status(200).json({cards: cards})
  }).catch((err) => {
    res.status(400).json({error: err})
  })
}