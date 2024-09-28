import React, { useState } from 'react'
import CountryData from '../api/CountryData.json'

function About() {

  // const [countryData, setCountryData] = useState([])  

  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we’re proud of
      </h2>

      <div className="gradient-cards">

        {
          CountryData.map((curData) => { 
            const {id, capital, countryName, fact, population} = curData

            return (
            <div className="card" key={id} >
              <div className="container-card bg-blue-box">
                <p className="card-title">
                  {countryName}
                </p>
                <p>
                  <span className="card-description">Capital: </span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                 {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact: </span>
                 {fact}
                </p>
              </div>
            </div>
            )
          })
        }
      </div>


    </section>
  )
}

export default About
