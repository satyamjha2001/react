import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList() {
  return (
    <div className="countries-container">
      {countriesData.map((country) => {
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
  );
}
