import React, { Component } from "react";
import ProfilePic from "../Images/profile_pic_1.jpeg";
import About from "./About.js";
import { Link } from "react-router-dom";

export default class HeroNEW extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-left">
          <div className="about-left-top">{<About />}</div>
          <div className="about-left-bottom"></div>
        </div>
        <div className="about-right">
          <div className="about-right-top">
            <img
              className="profile-pic img-fluid"
              src={ProfilePic}
              alt="Profile photo of Saul with his dog Dusty"
            />
          </div>
          <div className="about-right-bottom">
            <span>
              <Link to="https://twitter.com/saul_good_homie">Twitter</Link> |
              <Link to="https://github.com/Saul-Good-Homie">Github</Link> |
              <Link to="https://www.linkedin.com/in/saulbelisle/">
                Linkedin
              </Link>
            </span>
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
