const mongoose = require('mongoose')
const Schema = mongoose.Schema

const City = new Schema(
  {
    city_id: { type: String, required: true },
    state: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('City', City)
