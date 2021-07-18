const express = require('express')
const router = express.Router()
const admin = require('../firebase/index')
// login
console.log(admin)
router.get('/', (req, res) => {
  res.send('holasadfsafasdfasf')
})

module.exports = router
