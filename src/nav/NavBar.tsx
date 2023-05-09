import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { Row, Col } from "react-bootstrap";

import Autocompelet from "../component/autocomplete/Autocompelete";

type Props = {};

export default function <Nav>({}: Props) {
  return (
    <div className="linkContainer">
      <Row style={{ marginTop: 32 }}>
        <Col>
          <img
            src={require("../assets/images/logo_splash.png")}
            style={{ width: 142, height: 30 }}
          ></img>
        </Col>
        <Col style={{ display: "flex", justifyContent: "flex-end" }}>
          <Autocompelet />
        </Col>
      </Row>
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
