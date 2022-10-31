const Search = (props) => {

    return (
      <div className="search-wrap" >
         
  <form className="search" onSubmit={props.onSubmit}>
  <input className="searchbox"
    type="text"
    name="search"
    value={props.value}
    placeholder="Search Listings"
    onChange={props.onChange}></input>
  <button type="submit" className="searchButton">Submit</button>
  <i className="searchfor" ></i>
           </form>
           <div className="Resultstxt">
            <h2> Search Results</h2>
           </div>
           </div>
           
    )
  
  }
 
  
  export default Search