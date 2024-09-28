import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/GetApiData'
import Loader from '../components/UI/Loader' 
import CountryCards from '../components/layout/CountryCards'
import SearchFilter from '../components/UI/SearchFilter'


function Country() {

  const [isPending, startTransition] = useTransition()
  const [country, setCountry] = useState([])
  // console.log(country);
  

  // search and filter 
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all") 
  
  
  useEffect(() => {
    startTransition( async() => {
      const res = await getCountryData(); 
      setCountry(res.data)
    })
  }, [])

  if(isPending){
    return <Loader />
  }
 
  //search and filter
  const handleSearch = (curCountry) => {
    if(search){ 
     return curCountry.name.common.toLowerCase().includes(search.toLowerCase()) 
    }
    return curCountry;
  }

  const handleFilter = (curCountry) => {
    if(filter === "all") return curCountry;

    return curCountry.region === filter;
  }

  

  const filterCountries = country.filter((curCountry) => handleSearch(curCountry) && handleFilter(curCountry))
  

  return (
     <section className='country-section'>

      <SearchFilter 
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        country={country}
        setCountry={setCountry}
      />

      <ul className='grid grid-four-cols'>
        {filterCountries.map((curCountry, index) => {
          return <CountryCards country={curCountry} key={index}/>
        })}
      </ul>
     </section>
  )
}

export default Country
