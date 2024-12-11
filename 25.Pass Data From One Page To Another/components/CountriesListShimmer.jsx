import "./CountriesListShimmer.css";

export default function CountriesListShimmer() {
  //   const array = new Array(10).fill(0);
  return (
    <div className="countries-container">
      {Array.from({ length: 12 }).map((arr, i) => {
        return <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
}
