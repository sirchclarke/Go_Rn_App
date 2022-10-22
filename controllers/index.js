const City = require('../models/city')
const Listing = require('../models/listing')

const createCity = async (req, res) => {
  try {
    const city = await new City(req.body)
    await city.save()
    return res.status(201).json({
      city
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllCities = async (req, res) => {
  try {
    const cities = await City.find()
    return res.status(200).json({ cities })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getCityById = async (req, res) => {
  try {
    const { id } = req.params
    const city = await City.findById(id)
    if (city) {
      return res.status(200).json({ city })
    }
    return res.status(404).send('City with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getListingsByCity = async (req, res) => {
  const { cityId } = req.params
  const listings = await Listing.find({ city: cityId })
  return res.status(200).json(listings)
}
const createListing = async (req, res) => {
  try {
    const listing = await new Listing(req.body)
    await listing.save()
    return res.status(201).json({
      city
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find()
    return res.status(200).json({ listings })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getListingById = async (req, res) => {
  try {
    const { id } = req.params
    const listing = await Listing.findById(id)
    if (listing) {
      return res.status(200).json({ listing })
    }
    return res.status(404).send('Listing with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  createCity,
  getAllCities,
  getCityById,
  getListingsByCity,
  createListing,
  getAllListings,
  getListingById
}
