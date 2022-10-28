const Search = (props) => {

    return (
      <div className="wrap" >
         
  <form className="search" onSubmit={props.onSubmit}>
  <input className="searchit"
    type="text"
    name="search"
    value={props.value}
    placeholder="Search Listings"
    onChange={props.onChange}></input>
  <button type="submit" className="searchButton">Submit</button>
  <i className="searchfor" ></i>
           </form>
           
           </div>
           
    )
  
  }
 
  
  export default Search