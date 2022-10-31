const mongoose = require('mongoose')
const Schema = mongoose.Schema

const City = new Schema(
  {
    state: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('City', City)

import React from 'react'
