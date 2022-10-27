const Search = (props) => {

    return (
      <div class="wrap" >
  <form class="search" onSubmit={props.onSubmit}>
  <input class="searchit"
    type="text"
    name="search"
    value={props.value}
    placeholder="Search Listings"
    onChange={props.onChange}></input>
  <button type="submit" class="searchButton">Submit</button>
  <i class="searchfor" ></i>
           </form>
           
           </div>
           
    )
  
  }
 
  
  export default Search