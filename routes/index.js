const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is rt!'))
router.post('/city', controllers.createCity)
router.get('/cities', controllers.getAllCities)
router.get('/city/:id', controllers.getCityById)
router.get('/lisitngs/city/:cityId', controllers.getListingsByCity)

module.exports = router
