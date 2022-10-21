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
    const city = await City.find()
    return res.status(200).json({ city })
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

module.exports = {
  createCity,
  getAllCities,
  getCityById
}
