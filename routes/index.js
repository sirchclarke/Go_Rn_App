const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is rt!'))
router.post('/city', controllers.createCity)

module.exports = router
