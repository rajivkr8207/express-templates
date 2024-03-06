const express = require('express')
const controllers = require('../controllers/controllers')
const router = express.Router()


router.route('/').get(controllers.Home)
router.route('/contact').get(controllers.Contact)






module.exports = router