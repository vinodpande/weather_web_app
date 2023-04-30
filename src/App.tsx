import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Screens/Weather";
import Favourite from "./Screens/Favourite";
import RecentSearch from "./Screens/RecentSearch";
import Navigations from "./nav/Navigations";
import NavBar from "./nav/NavBar";
import { Link } from "react-router-dom";
import Container from "./component/container/Container";

function App() {
  return (
    <Container>
      <Navigations />
    </Container>
  );
}

export default App;
