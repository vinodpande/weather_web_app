import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Screens/weather/Weather";
import Favourite from "./Screens/favourite/Favourite";
import RecentSearch from "./Screens/recent_search/RecentSearch";
import Navigations from "./nav/Navigations";
import NavBar from "./nav/NavBar";
import { Link } from "react-router-dom";
import Container from "./component/container/Container";
import "./fonts/font.css";

function App() {
  return (
    <Container>
      <Navigations />
    </Container>
  );
}

export default App;
