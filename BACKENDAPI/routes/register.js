const express = require('express')
const routerReg = express.Router()
const user = require('../models/user')

routerReg.post('/', async (req, res) => {
  const UserN = new user({

    _id: req.body.email + req.body.passwd,
    email: req.body.email,
    passwd: req.body.passwd,
    userType: req.body.userType
  })
  try {
    const newUser = await UserN.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = routerReg
