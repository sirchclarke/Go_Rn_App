import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState } from 'react'

const CityResults = () => {
    let {city_id}= useParams()
    const [cityResult, getCityResults] = useState([])

    const getCityId = async () => {
      const response = await axios.get(`http://localhost:3001/listings/city/${city_id}`)
    getCityResults(response)
    console.log(response.data.listings)
    }
    useEffect(()=>{
      getCityId()
    },[]
    )    


    return (
        <div>   
        <h2>{cityResult?.name}</h2>
        <h3>{cityResult.location}</h3>
        <p>{cityResult.address}</p>
        <p>Experience:{cityResult.type}</p>
        <p>Rating:{cityResult.rating}</p></div>
    
  )
}

export default CityResults