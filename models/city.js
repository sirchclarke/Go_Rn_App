const mongoose = require('mongoose')
const Schema = mongoose.Schema

const City = new Schema(
  {
    City_id: { type: String, required: true },
    State: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('City', City)
