import React, { Component } from "react";
import PMP from "../Images/pmi-pmp.png";
import CSM from "../Images/seal-csm.png";

export default class Certifications extends Component {
  render() {
    return (
      <div>
        <h1 className="section-title">Certifications</h1>
        <div className="h-25 d-flex flex-wrap justify-content-around">
          <div className="col-md-3 p-3">
            <div className="card text-center">
              <img
                src={PMP}
                className="card-img-top img-fluid"
                alt="PMI PMP badge icon"
              ></img>

              <div className="card-body">
                <h5 className="card-title">Project Management Professional</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card text-center">
              <img
                src={CSM}
                className="card-img-top img-fluid"
                alt="Certified scrum master badge"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Certified Scrum Master</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Go somewhere</button>
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
