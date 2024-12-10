import { useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useParams } from "react-router";

export default function CountryDetail() {
  const params = useParams();
  // console.log(params);
  const countryName = params.country;
  // console.log(countryName);

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  // console.log(countryData?.borders);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        // console.log(data);
        setCountryData({
          flag: data.flags.svg,
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          topLevelDomain: data.tld,
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          languages: Object.values(data.languages).join(", "),
          borders: [],
        })
        // console.log(data.borders);
        if (!data.borders)
        {
          data.borders = [];
        }

        Promise.all(
          data.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([borderCountry]) => borderCountry.name.common);
          })
        ).then((borders) => {
          // console.log('hiii');
          setCountryData((prevState) => ({ ...prevState, borders }));
        })
      })
      .catch(() => {
        setNotFound(true);
      })
  }, [countryName])


  if (notFound) {
    return (
      <div>
        <h1>Country not found</h1>
      </div>
    );
  }
  return countryData === null ? (
    "Loading...."
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => window.history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">
                  {countryData.population.toLocaleString()}
                </span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData.subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">
                  {countryData.capital.join(", ")}
                </span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">
                  {countryData.topLevelDomain.join(" ")}
                </span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryData.currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countryData.languages}</span>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
