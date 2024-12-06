import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";

import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        {
          query === 'finish'? '' : <CountriesList query={query} />}
      </main>
    </>
  );
}
