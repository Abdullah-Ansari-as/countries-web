
function SearchFilter({search, setSearch, filter, setFilter, country, setCountry}) {
    
    const sortCountries = (value) => {
        const sortCountry = [...country].sort((a, b) => {
            return value === 'asc'
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common)
        })
        
        setCountry(sortCountry)
    }

  return (
    <section className="section-searchFilter container">
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="asc">
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div className="desc">
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div>

      <div className="select-section-div">
        <select
          className="select-section"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default SearchFilter
