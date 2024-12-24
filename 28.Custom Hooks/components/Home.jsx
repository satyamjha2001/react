import { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useTheme } from "../hooks/useThemes";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme();
  const {width, height} = useWindowSize();

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <h1 style={{ textAlign: "center" }}>
        {width} X {height}
      </h1>
      <CountriesList query={query} />
    </main>
  );
}
