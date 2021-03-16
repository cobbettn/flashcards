const express = require('express')
const cardsController = require('../controllers/cardsController')
const router  = express.Router()

router.post('/', cardsController.createCards)
router.get('/', cardsController.getUserCards)
router.get('/:id', cardsController.getCards) 
router.put('/:id', cardsController.updateCards) 
router.delete('/:id', cardsController.deleteCards) 

module.exports = router