import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Listing from './pages/Listing'
import Listings from './pages/Listings'
import { Params } from 'react-router-dom'
import CityResults from './components/CityResults'

function App() {
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
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
