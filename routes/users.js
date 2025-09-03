const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send('all users..')
})


router.get('/new', (req, res) => {
    res.send('new user form')
})

router.get('/:id', (req, res) => {
    res.send(`what do you mean ${req.params.id}?`)
})

module.exports = router