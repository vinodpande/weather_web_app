import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Weather from "../Screens/Weather";
import RecentSearch from "../Screens/RecentSearch";
import Favourite from "../Screens/Favourite";
import NavBar from "./NavBar";

type Props = {};

export default function Navigations({}: Props) {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/home" element={<Weather />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
        <Route path="/recentsearch" element={<RecentSearch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
