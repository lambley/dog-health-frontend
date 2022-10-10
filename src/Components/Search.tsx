import React from "react"

const Search = () => {
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
  }

  return(
    <div>
      <h2>Browse all dogs</h2>
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="search-hidden">Search here:</span>
        </label>
        <input
          type="text"
          placeholder="Search here:"
          id="header-search"
          onKeyUp={handleKeyUp}
        />
      </form>
    </div>
  )
}

export default Search
