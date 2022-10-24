import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ViewListings from '../components/ViewListings'

const Listings = () => {
  const [listings, setListings] = useState([])

  const getListings = async () => {
    const response = await axios.get(`http://localhost:3001/listings`)
    setListings(response.data.listings)
    console.log(response.data)
  }
  useEffect(() => {
    getListings()
  }, [])

  return (
    <div>
      {listings.map((listings) => (
        <Link to={`/listings/${listings.id}`}>
          <ViewListings
            key={listings._id}
            name={listings.name}
            location={listings.location}
            city={listings.city}
            address={listings.address}
            type={listings.type}
            rating={listings.rating}
          />
        </Link>
      ))}
    </div>
  )
}

export default Listings
