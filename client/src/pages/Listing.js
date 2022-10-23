import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ViewListings from '../components/ViewListings'

const Listing = (props) => {
  const [listings, setListings] = useState([])
  const { id } = useParams()
  const listingMatched = (listing) => {
    const listingString = JSON.stringify(listing).toLowerCase()
    if (listingString.indexOf(id) !== -1) {
      return true
    }
    return false
  }

  const getListings = async () => {
    const response = await axios.get(`http://localhost:3001/listings`)
    const filteredListings = response.data.listings.filter(listingMatched)
    setListings(filteredListings)

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

export default Listing
