import React, { Component } from "react";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assets/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Mes diplômes
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                </h3>
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
        
          </div>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
