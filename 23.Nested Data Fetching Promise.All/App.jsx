import { Outlet } from "react-router";
import Header from "./components/Header";

import "./App.css";

export default function App() {
  
  return (
    <>
      <Header />
      <Outlet />  
    </>
  );
}
