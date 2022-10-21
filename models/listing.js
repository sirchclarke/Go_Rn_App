const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Listing = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    city: { type: Schema.Types.ObjectId, ref: 'City' },
    type: { type: String, required: true },
    rating: { type: String, required: '' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Listing', Listing)
