import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);
  const [count, setCount] = useState(0);

  //useEffect is used because we are fetching data from an external API and by default it runs only once when array empty is passed in useEffect and if we not use useEffect then it will run again and again because of useState.because setCountriesData is a state variable and it is changing every time so it will render again and again.

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      setCountriesData(data);
    });

      const id = setInterval(() => {
        console.log("CountriesList running");
      }, [1000]);

    return () => {
      clearInterval(id);
    }
  }, []);

  useEffect(() => {
    console.log('hiii');
    
  }, [])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
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
