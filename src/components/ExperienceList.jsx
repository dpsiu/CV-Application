import React from 'react';

function ExperienceList({ experiences }) {
    
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
            <div className="description">{experience.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceList;
