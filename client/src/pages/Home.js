import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ViewCities from '../components/ViewCities'

const Home = () => {
  const [cities, setCities] = useState([])
  const getCities = async () => {
    const response = await axios.get(`http://localhost:3001/cities`)
    setCities(response.data.cities)
    console.log(response.data)
  }
  useEffect(() => {
    getCities()
  }, [])

  return (
    <div>
      {cities.map((city) => (
        <ViewCities key={city._id} state={city.state} image={city.image} />
      ))}
    </div>
  )
}

export default Home
