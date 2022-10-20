const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Listing = new Schema(
  {
    listing_id: { type: String, required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    City: { type: String, required: true },
    type: { type: String, required: true },
    rating: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Listing', Listing)
