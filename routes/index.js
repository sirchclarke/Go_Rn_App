const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('home page'))
router.post('/city', controllers.createCity)
router.get('/cities', controllers.getAllCities)
router.get('/city/:id', controllers.getCityById)

router.get('/listings/city/:cityId', controllers.getListingsByCity)
router.post('/listing', controllers.createListing)
router.get('/listings', controllers.getAllListings)
router.get('/listing/:id', controllers.getListingById)
router.delete('/listing/:id', controllers.deleteListing)
router.put('/listing/:id', controllers.updateListing)

module.exports = router
