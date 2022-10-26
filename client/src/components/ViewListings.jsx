import axios from 'axios'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'





const ViewListings = (props) => {
  let Navigate=useNavigate()
  const deleteListing=async()=>{
   await axios.delete(`http://localhost:3001/listing/${props.id}`)
   Navigate('/listings')
  }

  

  
  return (
      <div>
       <button onClick={deleteListing}> X</button>
      <Link to = {`/UpdateListingForm/${props.id}`}><button> O</button></Link>
      <div className="listing view-listing" id= "info-wrapper flex-col" onClick={props.onClick}>
      <h2>{props.name}</h2>
      <h3>{props.location}</h3>
      <h3>{props.city}</h3>
      <p>{props.address}</p>
      <p>Experience:{props.type}</p>
      <p>Rating:{props.rating}</p>
      </div>
      <img src={props.img} alt="pics" />
    </div>
    
  )
}

export default ViewListings