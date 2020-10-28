const express = require('express')
const routerLog = express.Router()
const user = require('../models/user')


//get all
routerLog.get('/', (req, res) => {
    res.send('Invalid request, must include email and password')
})

//get one
routerLog.get('/:email/:passwd', (req, res) => {
    async function verifyData(req, res, next) {
        let userSearch
        try {
            userSearch = user.findById(req.params.email + req.params.passwd)
            if (userSearch == null) {
                return res.status(404).json({ message: 'Cannot find user' })
            }
        } catch (err) {

        }
    }
})

module.exports = routerLog