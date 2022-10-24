const Search = (props) => {

    return (
  <form onSubmit={props.onSubmit}>
  <input
    type="text"
    name="search"
    value={props.value}
    placeholder="Search Listings"
    onChange={props.onChange}></input>
  <button>Submit</button>
  <h2> Search Results</h2>
           </form>
           
    )
  
  }
 
  
  export default Search