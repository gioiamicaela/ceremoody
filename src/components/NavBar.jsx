import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                SHOP
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                SUBSCRIPTION
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                WHOLESALE
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                COLD BREW
              </a>
            </li>
          </ul>
        </div>
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                LOCATIONS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                LEARN
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                ACCOUNT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                COLD BREW
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
