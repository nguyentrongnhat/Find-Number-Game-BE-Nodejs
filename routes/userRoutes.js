const express = require('express')
const userControllers = require('../controllers/userControllers')

const router = express.Router()

router.route('')
    .get(userControllers.getUser)
    .post(userControllers.createUser)

// router.route('/:id')
//     .get()
//     .put()
//     .delete()

module.exports = router;