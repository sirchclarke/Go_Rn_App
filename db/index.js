const mongoose = require('mongoose')
require('dotenv').config() // Add this line

let dbUrl = process.env.MONGODB_URI

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log(`Successfully connected to MongoDB at ${dbUrl}!`)
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
