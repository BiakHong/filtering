function SearchBar({ filterText, inStockOnly, onFilterTextChange}) {
    return (
      <form>
        <input type="text" 
        value={filterText} 
        placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)}/>
        <label>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }

  export default SearchBar;