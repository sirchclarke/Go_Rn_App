const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is rt!'))
router.post('/city', controllers.createCity)
router.get('/city', controllers.getAllCities)
router.get('/city/:id', controllers.getCityById)

module.exports = router
