import { Outlet } from "react-router";
import Header from "./components/Header";
import { useState } from "react";

import "./App.css";

export default function App() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")));
  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />  {/*isko wahi child use kar payegaa jo useOutletContext use karegaa.*/} 
    </>
  );
}
