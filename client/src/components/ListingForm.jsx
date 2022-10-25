import { useNavigate } from 'react-router-dom'

const ListingForm = (props) => {
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    props.addListing(e)
    navigate('/listing')

  }

  const newListing = props.newListing

  return (
    <div>
    <h1>Add A New Listing</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newListing.name} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
      <input type="text" value={newListing.location} onChange={ props.handleChange} name={'location'} placeholder={'location'} />
      <input type="text-area" value={newListing.city} onChange={ props.handleChange} name={'city'} placeholder={'city'} />
      <input type="text" value={newListing.adress} onChange={ props.handleChange} name={'address'} placeholder={'address'} />
      <input type="text" value={newListing.type} onChange={ props.handleChange} name={'type'} placeholder={'type'} />
      <input type="text" value={newListing.rating} onChange={ props.handleChange} name={'rating'} placeholder={'rating'} />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default ListingForm
