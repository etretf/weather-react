import "./searchBar.css";

export default function searchBar() {
  
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="searchBar">
       <form onSubmit={handleSubmit}>
      <input type="text"/>
      <input type="submit" value="search" className="searchButton"/>
    </form>
    </div>
  );
}
