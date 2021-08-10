import Sidebar from "./components/Sidebar";
import HomePage from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./styles/theme";
import GlobalStyle from "./styles/global";
import "./styles/global.ts";
import { useState } from "react";

export function AppPortfolio() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = (darkin: boolean) => {
    if(darkin){
      setTheme(light);
    }else{
      setTheme(dark);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Sidebar
        behance="marcosnunes16"
        github="MarcosNSouza87"
        linkedin="marcosnsouza/"
        changeTheme={toggleTheme}
      />
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  );
}
