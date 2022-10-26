import React from 'react'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ViewCities from '../components/ViewCities'
import ViewListings from '../components/ViewListings'
import CityResults from '../components/CityResults'

const Home = () => {
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [cities, setCities] = useState([])

  const getCities = async () => {
    const response = await axios.get(`http://localhost:3001/cities`)
    setCities(response.data.cities)
  }
  useEffect(() => {
    getCities()
  }, [])
  const listingMatched = (listing) => {
    const listingString = JSON.stringify(listing).toLowerCase()
    if (listingString.indexOf(searchQuery) !== -1) {
      return true
    }
    return false
  }
  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(`http://localhost:3001/listings`)
    const filteredListings = response.data.listings.filter(listingMatched)

    setSearchResults(filteredListings)
    toggleSearched(true)
    setSearchQuery('')
    console.log(response.data.listings)
  }
  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <div className="search">
        <Search
          onSubmit={getSearchResults}
          onChange={handleChange}
          value={searchQuery}
        />

        <section className="search-results container-grid">
          {searched &&
            searchResults.map((listings) => (
              <Link to={`/ViewListings/${listings._id}`}>
                <ViewListings
                  key={listings._id}
                  name={listings.name}
                  location={listings.location}
                  address={listings.address}
                  city={listings.city}
                  type={listings.type}
                  rating={listings.rating}
                />
              </Link>
            ))}
        </section>
      </div>

      <div>
        {cities.map((city) => (
          <Link to={`/CityResults/${city._id}`}>
            <ViewCities key={city._id} state={city.state} image={city.image} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
