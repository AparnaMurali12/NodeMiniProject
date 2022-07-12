const express = require('express')
const router = new express.Router()

const baseUrl = '/api'
const employee = require('./employee')

router.use(baseUrl,employee)

module.exports = router
