const express = require('express')

const router = express.Router()
const User = require('../models/user')

/* GET users listing. */
router.get('/', (req, res) => {
  const u = new User(req.query.name, req.query.age)
  res.render('user', {user: u})
})

module.exports = router
