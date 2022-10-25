import { useState, useEffect } from 'react'
import axios from 'axios'
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
      {listings?.map((listing) => (
        <Link to={`/listings/${listing?._id}`}>
          <ViewListings
            key={listing?._id}
            name={listing?.name}
            location={listing?.location}
            city={listing?.city}
            address={listing?.address}
            type={listing?.type}
            rating={listing?.rating}
          />
        </Link>
      ))}
    </div>
  )
}

export default Listings
