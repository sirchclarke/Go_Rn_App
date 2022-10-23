import React from 'react'

const ViewListings = (props) => {
  return (
    <div className="listing view-listing" id= "info-wrapper flex-col" onClick={props.onClick}>
  
    
    <div >
      <h2>{props.name}</h2>
      <h3>{props.location}</h3>
      <p>Experience:{props.type}</p>
      <p>Rating:{props.rating}</p>
    </div>
    </div>
  )
}

export default ViewListings