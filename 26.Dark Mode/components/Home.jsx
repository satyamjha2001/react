import { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useOutletContext } from "react-router";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useOutletContext(); //ye important hai agar hume outlet se kuchh chahiye jo wo bhej raha hai.
  // console.log(theme);
  
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <CountriesList query={query} />
    </main>
  );
}
