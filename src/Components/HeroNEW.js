import React, { Component } from "react";
import ProfilePic from "../Images/profile_pic_1.jpeg";
import About from "./About.js";
import { Link } from "react-router-dom";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

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
              <Link to="https://twitter.com/saul_good_homie">
                <IconContext.Provider value={{ className: "icon-social" }}>
                  <FaTwitterSquare />
                </IconContext.Provider>
              </Link>{" "}
              <Link to="https://github.com/Saul-Good-Homie">
                <IconContext.Provider value={{ className: "icon-social" }}>
                  <FaGithubSquare />
                </IconContext.Provider>
              </Link>{" "}
              <Link to="https://www.linkedin.com/in/saulbelisle/">
                <IconContext.Provider value={{ className: "icon-social" }}>
                  <FaLinkedin />
                </IconContext.Provider>
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
