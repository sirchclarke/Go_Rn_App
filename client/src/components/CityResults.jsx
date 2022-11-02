import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState } from 'react'


const CityResults = () => {
    let {id}= useParams()
    const [cityResults, getCityResults] = useState([])

    const getCityId = async () => {
      const response = await axios.get(`/listings/city/${id}`)
    getCityResults(response.data)
   console.log(response.data)
    }
    useEffect(()=>{
      getCityId()
    },[]
    )    


    return (
      cityResults.map((cityResult)=>(

        <div className='cityresults'>   
        <h2>{cityResult.name}</h2>
        <h3>{cityResult.city}</h3>
        <h3>{cityResult.location}</h3>
        <p>{cityResult.address}</p>
        <p>Experience:{cityResult.type}</p>
        <p>Rating:{cityResult.rating}</p></div>
       ) )
  )
}

export default CityResults