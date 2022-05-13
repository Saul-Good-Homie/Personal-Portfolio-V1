import React, { Component } from "react";
import MemoryGame from "../Images/React-memory-game.png";

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
                  />
                </div>
                <div class="post-info">
                  <span>June 25, 2020</span>
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
                <div className="post-img"></div>
                <div class="post-info">
                  <span>June 25, 2020</span>
                  <h2>Productivity: Expectations vs Reality</h2>
                </div>
              </div>
              <div className="post-back">
                <div class="post-except">
                  <h2>Productivity: Expectations vs Reality</h2>
                  <p>
                    Et hinc magna voluptatum usu, cum veniam graece et. Ius ea
                    scripserit temporibus, pri cu harum tacimates neglegentur.
                    At adipisci incorrupte nam. Cu qui sumo appareat constituto,
                    possit phaedrum inciderint ex usu, quis ignota cotidieque
                    nam ea. Cum deserunt periculis ocurreret.
                  </p>
                </div>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="post-wrap">
            <div className="post">
              <div className="post-front">
                <div className="post-img"></div>
                <div class="post-info">
                  <span>June 25, 2020</span>
                  <h2>Productivity: Expectations vs Reality</h2>
                </div>
              </div>
              <div className="post-back">
                <div class="post-except">
                  <h2>Productivity: Expectations vs Reality</h2>
                  <p>
                    Et hinc magna voluptatum usu, cum veniam graece et. Ius ea
                    scripserit temporibus, pri cu harum tacimates neglegentur.
                    At adipisci incorrupte nam. Cu qui sumo appareat constituto,
                    possit phaedrum inciderint ex usu, quis ignota cotidieque
                    nam ea. Cum deserunt periculis ocurreret.
                  </p>
                </div>
                <a href="#">Read More</a>
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
