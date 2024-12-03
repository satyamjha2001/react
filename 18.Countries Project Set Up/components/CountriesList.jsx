import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList() {

    const array = countriesData.map(() => <CountryCard />);
    console.log(array);

  return <div className="countries-container">{array}</div>;
}
