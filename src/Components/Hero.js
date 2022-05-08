import React, { Component } from "react";
import ProfilePic from "../Images/profile_pic_1.jpeg";

export default class Hero extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Hey, I'm Saul</h5>

          <div className="row">
            <div className="left-card col">
              <p className="card-text">
                I'm a full time Project Manager and a sometimes Web Developer.
              </p>
              {/* <div className="row">
                <span className="bg bg-primary">Short</span>
                <span className="bg bg-primary">Medium</span>
                <span className="bg bg-primary">Long</span>
              </div> */}
            </div>

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
