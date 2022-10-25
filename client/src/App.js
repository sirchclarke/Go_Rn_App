import { Routes, Route } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import listingsArray from './pages/Listing'
import Nav from './components/Nav'
import Home from './pages/Home'
import Listing from './pages/Listing'
import Listings from './pages/Listings'
import { params } from 'react-router-dom'
import CityResults from './components/CityResults'
import ListingForm from './components/ListingForm'
import axios from 'axios'

const App = () => {
  const [newListing, setNewListing] = useState({
    id: '',
    name: '',
    location: '',
    city: '',
    address: '',
    type: '',
    rating: ''
  })

  const addListing = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/listing', newListing)
  }

  const handleChange = (e) => {
    setNewListing({ ...newListing, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <header className="Nav">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/ViewListings/:id" element={<Listing />} />
          <Route path="/CityResults/:id" element={<CityResults />} />
          <Route
            path="/listing"
            element={
              <ListingForm
                newListing={newListing}
                handleChange={handleChange}
                addListing={addListing}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
