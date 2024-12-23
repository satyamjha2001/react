import { Outlet } from "react-router";
import Header from "./components/Header";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")));
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
    // <ThemeContext.Provider value={[isDark, setIsDark]}>
    //     <Header />
    //     <Outlet />
    // </ThemeContext.Provider>
  );
}
// iske andar jo bhi hai us sabme ye context jaayega.
