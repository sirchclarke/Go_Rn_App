import { useNavigate } from 'react-router-dom'
import { useState,  } from 'react'
import axios from 'axios'





const ListingForm = () => {
  let navigate = useNavigate()
  const initialForm = {
    name: '',
    location: '',
    city: '',
    address: '',
    type: '',
    rating: '',
    image:''
  }

   
    const [newListing, setNewListing] = useState(initialForm)

    const handleSubmit = async (e) => {
      e.preventDefault()
       axios.post('http://localhost:3001/listing', newListing)
      setNewListing(initialForm)
      navigate('/listings')
    }
    const handleChange = (e) => {
      setNewListing({ ...newListing, [e.target.id]: e.target.value })
    }
 
      
  return (
    <div>
    <h1>Add A New Listing</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newListing.name} onChange={ handleChange} id={'name'} placeholder={'name'} />
      <input type="text" value={newListing.location} onChange={ handleChange} id={'location'} placeholder={'location'} />
      <input type="text-area" value={newListing.city} onChange={ handleChange} id={'city'} placeholder={'city'} />
      <select
            id="city"
            onChange={handleChange}
            value={newListing.city}
            required
          >
            <option value="null">Select City</option>
            <option value="Tacoma,WA">Tacoma</option>
            <option value="Seattle,WA">Seattle</option>
            <option value="Dallas,TX">Dallas</option>
            <option value="Commmerce,TX">Commerce</option>
            <option value="Houston,TX">Houston</option>
            <option value="Oakland,CA">Oakland</option>
            <option value="Astoria,OR">Astoria</option>
            <option value="Jacksonville,FL">Jacksonville</option>
          </select>
      {/* <select name="" id ="city_id">{cities.map(city =>(<option value={city._id}>{city.name}</option> ))} </select> */}

      <input type="text" value={newListing.address} onChange={ handleChange} id={'address'} placeholder={'address'} />
      <input type="text" value={newListing.type} onChange={ handleChange} id={'type'} placeholder={'type'} />
      <input type="text" value={newListing.rating} onChange={ handleChange} id={'rating'} placeholder={'rating'} />
      <input type="text" value={newListing.image}  onChange={ handleChange} id={'image'} placeholder={'Img URL'}/>
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}


export default ListingForm
