import React, { Component } from "react";

export default class About extends Component {
  state = {
    display: "",
  };

  render() {
    return (
      <div className="bio-section">
        <h2 className="card-title">Hey, I'm Saul</h2>
        <span>{this.state.display}</span>
        <div className="d-flex justify-content-start">
          <span className="badge bg-primary m-2" onClick={this.getShortBio}>
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
        "I'm a full time Project Manager and a sometimes Web Developer. I like working on interesting projects that bring people together to solve big problems. ",
    });
  };

  getMedBio = (bio) => {
    this.setState({
      display:
        "I'm a full time Project Manager and a sometimes Web Developer. I like working on interesting projects that bring people together to solve big problems. This website is a practice project for my web development hobby. ",
    });
  };
  getLongBio = (bio) => {
    this.setState({
      display:
        "I'm a full time Project Manager and a sometimes Web Developer. I like working on interesting projects that bring people together to solve big problems. This website is a practice project for my web development hobby. In my spare time I enjoy camping, hiking and spending time outdoors with my dog, 'Dusty.'",
    });
  };
}
