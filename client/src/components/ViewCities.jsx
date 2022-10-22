import React from 'react'

const viewCities = (props) => {
  return (
    
    <div>
      <h1>
{props.state}
      </h1>
      <img src={props.image} alt={props.state} />
      </div>
  )
}

export default viewCities