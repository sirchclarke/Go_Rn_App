const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Listing = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    city_id: { type: Schema.Types.ObjectId, ref: 'City' },
    city: { type: String, required: true },
    address: { type: String, required: true },
    type: { type: String, required: true },
    rating: { type: String, required: '' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Listing', Listing)
