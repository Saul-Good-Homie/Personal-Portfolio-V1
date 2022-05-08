import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import { Routes, BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import Hero from "./Components/Hero";
import About from "./Components/About";

//import NoMatchPage from "./NoMatchPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="container-fluid">
          <Hero />
          <About />
          <Routes>
            {/* <Route path="/" exact element={<Hero />} /> */}
            {/* <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/Customers" exact element={<CustomerList />} />
            <Route path="/cart" exact element={<ShoppingCart />} />
            <Route path="*" element={<NoMatchPage />} /> */}
          </Routes>
        </div>
      </Router>
    );
  }
}
