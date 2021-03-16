const Cards = require('../models/Cards')

exports.createCards = (req, res, next) => {
  const { name, userId, cardList } = req.body
  const cards  = new Cards({name, userId, cardList})
  cards.save().then(() => {
    res.status(201).send()
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
  const { name, userId, cardList } = req.body

  Cards.findById(id).then((cards) => {
    cards.name = name
    cards.userId = userId
    cards.cardList = cardList
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
  const { userId } = req.body
  Cards.find({userId: userId}).then((cards) => {
    res.status(200).json({cards: cards})
  }).catch((err) => {
    res.status(400).json({error: err})
  })
}