import React, { Component } from "react";
import MemoryGame from "../Images/React-memory-game-2.png";
import NYT from "../Images/NYT.png";
import ShoppingCart from "../Images/shopping-cart.png";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h1 className="section-title">Projects</h1>
        <div className="projects-container">
          <div className="post-wrap">
            <div className="post">
              <div className="post-front">
                <div className="post-img">
                  <img
                    className="img-fluid"
                    src={MemoryGame}
                    alt="simple user interface for a 9x9 grid card-matching game"
                  ></img>
                </div>
                <div class="post-info">
                  {/* <span>June 25, 2020</span> */}
                  <h2>React Memory Card Game</h2>
                </div>
              </div>
              <div className="post-back">
                <div class="post-except">
                  <h2>React Memory Card Game</h2>
                  <p>
                    In this project I use React JS to create a simple Memory
                    Game. There is no storage or backend connected. The purpose
                    of this project to practice the React JS framework to create
                    reusable components, functional component, state and props,
                    handling inputs and rendering lists.
                  </p>
                </div>
                <a
                  href="https://saul-good-homie.github.io/react-memory-game/"
                  target="_blank"
                >
                  View Online
                </a>
              </div>
            </div>
          </div>
          <div className="post-wrap">
            <div className="post">
              <div className="post-front">
                <div className="post-img">
                  <img
                    className="img-fluid"
                    src={NYT}
                    alt="simple user interface for a 9x9 grid card-matching game"
                  />
                </div>
                <div class="post-info">
                  {/* <span>June 25, 2020</span> */}
                  <h2>New York Times Clone</h2>
                </div>
              </div>
              <div className="post-back">
                <div class="post-except">
                  <h2>New York Times Clone</h2>
                  <p>
                    In this HTML & CSS project, I am attempting to recreate an
                    article from the New York Times. This project will primarily
                    practice using CSS Grid and Flexbox.
                  </p>
                </div>
                <a
                  href="https://saul-good-homie.github.io/NYT-clone/NYT-clone/"
                  target="_blank"
                >
                  View Online
                </a>
              </div>
            </div>
          </div>
          <div className="post-wrap">
            <div className="post">
              <div className="post-front">
                <div className="post-img">
                  <img
                    className="img-fluid"
                    src={ShoppingCart}
                    alt="simple user interface for a 9x9 grid card-matching game"
                  />
                </div>
                <div class="post-info">
                  {/* <span>June 25, 2020</span> */}
                  <h2>React Shopping Cart</h2>
                </div>
              </div>
              <div className="post-back">
                <div class="post-except">
                  <h2>React Shopping Cart</h2>
                  <p>
                    In this project I use React JS to create a simple shop
                    storefront with a functional shopping cart. The purpose of
                    this project is to practice managing state, page routing,
                    switch and links.
                  </p>
                </div>
                <a
                  href="https://saul-good-homie.github.io/react-shopping-cart/#/"
                  target="_blank"
                >
                  View Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {
    //console.log("component will unmount - product");
  }
}
