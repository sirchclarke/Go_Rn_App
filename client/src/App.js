import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Listing from './pages/Listing'
import Listings from './pages/Listings'
import CityResults from './components/CityResults'
import ListingForm from './components/ListingForm'
import UpdateListingForm from './components/UpdateListingForm'

const App = () => {
  return (
    <div className="App">
      <header className="Nav">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route Path="/About" element={<About />} />
          <Route path="/ViewListings/:id" element={<Listing />} />
          <Route path="/CityResults/:id" element={<CityResults />} />
          <Route path="/listing" element={<ListingForm />} />
          <Route
            path="/UpdateListingForm/:listingId"
            element={<UpdateListingForm />}
          />
        </Routes>
      </main>
    </div>
  )
}
export default App
