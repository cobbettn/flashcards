const express = require('express')
const router  = express.Router()
const userController = require('../controllers/userController')
const cardsController = require('../controllers/cardsController')

router.post('/register',userController.registerUser)
router.post('/activate', userController.activateUser)
router.post('/login', userController.loginUser)
router.get('/:id/cards', cardsController.getUserCards)

module.exports = router