import React from "react";
import "./App.css";
import {ThemeProvider as MuiThemeProvider} from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
function App() {
  return (
    <MuiThemeProvider>
      <NavBar />
      <Search />
    </MuiThemeProvider>
  );
}

export default App;
