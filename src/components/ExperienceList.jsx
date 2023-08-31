import { useState, useEffect } from "react";
import ExperienceForm from "./ExperienceForm";

const ExperienceList = ({experiences}) => {
  // // const experiences = props.experiences
  // // const listItems  =props.listItems
  // console.log(experiences, listItems)

  // useEffect(() => {
  //   console.log("Updated listItems? =" + listItems)
  // }, [listItems])

  return (
    <div>
      {experiences.map((experience, index) => (
        <div key={index}>
          <div className="experienceItem">
            <div className="subtitle">{experience.company}</div>
            <div className="dateInfo">
              <div className="position">{experience.position} |</div>
              <div className="dates">
                <div className="startDate">{experience.startDate}</div>
                <div> - </div>
                <div className="endDate">{experience.endDate}</div>
              </div>
            </div>
            <ul className="description">
              <li>{experience.description1}</li>
              <li>{experience.description2}</li>
              <li>{experience.description3}</li>
              {/* {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))} */}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceList;
