import { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(ThemeContext); //ye important hai agar hume outlet se kuchh chahiye jo wo bhej raha hai.
  
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
