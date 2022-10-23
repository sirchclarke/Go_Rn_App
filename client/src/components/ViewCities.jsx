import React from 'react'

const viewCities = (props) => {
  return (
    
    <div>
      <h1>
{props.state}
      </h1>
      <div className="cities view-cities" onClick={props.onClick}>
    <div className="img-wrapper">
      <img src={props.image} alt={props.state} />
      </div>
      
      </div>
      </div>
  )
}

export default viewCities