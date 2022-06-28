import React, { Component } from "react";

export default class About extends Component {
  state = {
    display: "",
    // shortBio: "test 1",
    // medBio: `
    // test 2`,
  };

  render() {
    return (
      <div className="bio-section h-50">
        <h2 className="card-title">Hey, I'm Saul</h2>
        <div className="about-content align-center">
          <span>{this.state.display}</span>
        </div>
        <div className="d-flex about-length-btns pl-0">
          <span
            className="badge bg-primary ml-0 m-2"
            onClick={this.getShortBio}
          >
            Short
          </span>
          <span className="badge bg-primary m-2" onClick={this.getMedBio}>
            Medium
          </span>
          <span className="badge bg-primary m-2" onClick={this.getLongBio}>
            Long
          </span>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.getShortBio();
  };

  getShortBio = (bio) => {
    this.setState({
      display:
        "I'm a experienced, remote Project Manager passionate about people and communities. I love projects that bring people together to accomplish meaningful otucomes.",
    });
  };

  getMedBio = (bio) => {
    this.setState({
      display:
        "I'm a experienced, remote Project Manager passionate about people and communities. I love projects that bring people together to accomplish meaningful otucomes. I'm also a self-taught, amatuer web developer with primary experience in HTML, CSS, Vanilla JS, React and Ruby on Rails. This website is a work in progress and a place for me to be creative.",
    });
  };
  getLongBio = (bio) => {
    this.setState({
      display:
        "I'm a experienced, remote Project Manager passionate about people and communities. I love projects that bring people together to accomplish meaningful otucomes. I'm also a self-taught, amatuer web developer with primary experience in HTML, CSS, Vanilla JS, React and Ruby on Rails. This website is a work in progress and a place for me to be creative. In my spare time I enjoy hiking, camping spending time outdoors with my dog, 'Dusty.'",
    });
  };
}
