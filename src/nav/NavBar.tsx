import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";

type Props = {};

export default function <Nav>({}: Props) {
  return (
    <div className="linkContainer">
      <NavLink
        to="/home"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activelink" : "favourite"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/favourite"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activelink" : "favourite"
        }
      >
        Favourite
      </NavLink>
      <NavLink
        to="/recentsearch"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activelink" : "favourite"
        }
      >
        Recent Search
      </NavLink>
    </div>
  );
}
