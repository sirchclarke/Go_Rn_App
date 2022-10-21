const db = require('../db')
const Listing = require('../models/listing')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const listing = [
    {
      name: 'Point Defiance Outer Loop',
      location: 'Point Defiance Park, 5400 N Pearl St, Tacoma, WA 98407',
      city: 'Tacoma',
      type: 'Recreation',
      rating: '1'
    },
    {
      name: 'Schmitz Park Preserve',
      location: 'Schmitz Blvd, Seattle, WA 98116',
      city: 'Seattle',
      type: 'Recreation',
      rating: '1'
    },
    {
      name: 'Boulder Park Trail',
      location: 'Oak Cliff, Dallas, TX 75237',
      city: 'Dallas',
      type: 'Cycling',
      rating: '1'
    },
    {
      name: 'TAMUC Disc Golf Course',
      location: '2320 TX-178 Loop, Commerce, TX 75428',
      city: 'Commerce',
      type: 'Disc Golf',
      rating: '1'
    },
    {
      name: 'Reinhardt Redwood Regional Park',
      location: '7867 Redwood Rd, Oakland, CA 94619',
      city: 'Oakland',
      type: 'Hike',
      rating: '1'
    },
    {
      name: 'Mountain view Cemetary',
      location: '5000 Piedmont Ave, Oakland, CA 94611',
      city: 'Oakland',
      type: 'Recreation',
      rating: '1'
    },
    {
      name: 'Cathedral Tree Trail',
      location: '2800 Irving Ave, Astoria, OR 97103',
      city: 'Astoria',
      type: 'Recreation',
      rating: '1'
    },
    {
      name: 'Amelia Island Trail',
      location: 'Florida A1A, Jacksonville, FL 32226',
      city: 'Jacksonville',
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
