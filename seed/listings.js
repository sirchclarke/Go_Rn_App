const db = require('../db')
const Listing = require('../models/listing')
const City = require('../models/city')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  Listing.collection.drop()
  const Tacoma = await City.find({ state: 'Tacoma,WA' })
  const Seattle = await City.find({ state: 'Seattle,WA' })
  const Dallas = await City.find({ state: 'Dallas,TX' })
  const Commerce = await City.find({ state: 'Commerce,TX' })
  const Oakland = await City.find({ state: 'Oakland,CA' })
  const Astoria = await City.find({ state: 'Astoria,OR' })
  const Jacksonville = await City.find({ state: 'Jacksonville,FL' })
  const listing = [
    {
      name: 'Point Defiance Outer Loop',
      address: 'Point Defiance Park, 5400 N Pearl St, Tacoma, WA 98407',
      city_id: Tacoma[0]._id,
      city: 'Tacoma',
      location: 'Tacoma,WA',
      type: 'Recreation',
      rating: '1'
    },
    {
      name: 'Schmitz Park Preserve',
      address: 'Schmitz Blvd, Seattle, WA 98116',
      city_id: Seattle[0]._id,
      city: 'Seattle',
      location: 'Seattle,WA',
      type: 'Recreation',
      rating: '1'
    },
    {
      name: 'Boulder Park Trail',
      address: 'Oak Cliff, Dallas, TX 75237',
      city_id: Dallas[0]._id,
      city: 'Dallas',
      location: 'Dallas,TX',
      type: 'Cycling',
      rating: '1'
    },
    {
      name: 'TAMUC Disc Golf Course',
      address: '2320 TX-178 Loop, Commerce, TX 75428',
      city_id: Commerce[0]._id,
      city: 'Commerce',
      location: 'Commerce,TX',
      type: 'Disc Golf',
      rating: '1'
    },
    {
      name: 'Reinhardt Redwood Regional Park',
      address: '7867 Redwood Rd, Oakland, CA 94619',
      city_id: Oakland[0]._id,
      city: 'Oakland',
      location: 'Oakland,CA',
      type: 'Hike',
      rating: '1'
    },
    {
      name: 'Mountain view Cemetary',
      address: '5000 Piedmont Ave, Oakland, CA 94611',
      city_id: Oakland[0]._id,
      city: 'Oakland',
      location: 'Oakland,CA',
      type: 'Recreation',
      rating: '1'
    },
    {
      name: 'Cathedral Tree Trail',
      address: '2800 Irving Ave, Astoria, OR 97103',
      city_id: Astoria[0]._id,
      city: 'Astoria',
      location: 'Astoria,OR',
      type: 'Recreation',
      rating: '1'
    },
    {
      name: 'Amelia Island Trail',
      address: 'Florida A1A, Jacksonville, FL 32226',
      city_id: Jacksonville[0]._id,
      city: 'jacksonville',
      location: 'Jacksonville,FL',
      type: 'Recreation',
      rating: '1'
    }
  ]

  await Listing.insertMany(listing)
  console.log('Created some listings')
}
const run = async () => {
  await main()
  db.close()
}

run()
