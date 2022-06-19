import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default class Work extends Component {
  render() {
    return (
      <div id="work-section">
        <h1 className="section-title">Work</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //icon={}
          >
            <h3 className="vertical-timeline-element-title">Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Light & Wonder
            </h4>
            <p>
              Responsible for designing, building, and implementing ServiceMax
              (a Salesforce based, mobile-ready field service software solution)
              for the entire enterprise field service department for US and
              Canada.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Program Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">
              MGM Resorts International
            </h4>
            <p>
              Lead the Strategic Sourcing category teams to develop program
              charters, category strategies, benefits, and resource
              requirements.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2017"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Program Management Specialist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              MGM Resorts International
            </h4>
            <p>
              Assisting the PMO team to lead the Strategic Sourcing category
              teams to develop cost-saving programs and initiatives.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            //icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Master of Business Administration
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              North Dakota State University
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            //icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              B.S. General Social Sciences concentrated in Business and
              Economics
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Oregon
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {
    //console.log("component will unmount - product");
  }
}
