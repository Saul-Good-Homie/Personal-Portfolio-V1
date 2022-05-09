import React, { Component } from "react";
import ProfilePic from "../Images/profile_pic_1.jpeg";
import About from "./About.js";

export default class Hero extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="left-card col">{<About />}</div>

            <div className="right-card col">
              <img
                className="profile-pic img-fluid"
                src={ProfilePic}
                alt="Profile photo of Saul with his dog Dusty"
              />
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
