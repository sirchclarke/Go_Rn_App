const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
////City Controlllers
router.post('/city', controllers.createCity)
router.get('/cities', controllers.getAllCities)
router.get('/city/:id', controllers.getCityById)

////Listing Controllers
router.get('/listings/city/:cityId', controllers.getListingsByCity)
router.post('/listing', controllers.createListing)
router.get('/listings', controllers.getAllListings)
router.get('/listing/:id', controllers.getListingById)

module.exports = router
