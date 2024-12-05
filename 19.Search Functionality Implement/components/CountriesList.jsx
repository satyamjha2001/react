// import { useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList({query}) {
  // const [query, setQuery] = useState("");
  // const filteredData = countriesData.filter((country) => {
  //   return country.name.common.toLowerCase().includes("india"); 
  // })
  // console.log(filteredData);
  
  return (
    <>
      {/* <input onChange={(e) => setQuery(e.target.value.toLowerCase())} type="text" /> */}
      <div className="countries-container">
        {countriesData
          .filter((country) => {
            return country.name.common.toLowerCase().includes(query);
          })
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population.toLocaleString("en-IN")}
                region={country.region}
                capital={country.capital?.[0]}
              />
            );
          })}
      </div>
    </>
  );
}
