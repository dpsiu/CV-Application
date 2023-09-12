import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ExperienceForm from "./components/ExperienceForm";
import ExperienceList from "./components/ExperienceList";
import Biography from "./components/Biography";
import BiographyPreview from "./components/BiographyPreview";
import Footer from "./components/Footer";

export default function App() {
  const [fullName, setFullName] = useState("Name");
  const [occupation, setOccupation] = useState("Occupation");
  const [email, setEmail] = useState("Email");
  const [website, setWebsite] = useState("Website");
  const [phone, setPhone] = useState("Phone");

  const [school, setSchool] = useState("UNIVERSITY");
  const [degree, setDegree] = useState("Degree");
  const [startDate, setStartDate] = useState("Start Date");
  const [endDate, setEndDate] = useState("End Date");
  const [description, setDescription] = useState("Description");

  const [newSkill, setNewSkill] = useState([]);
  const [skillsList, setSkillsList] = useState([
    { title: "Category", id: crypto.randomUUID(), className: "category" },
    { title: "Skill", id: crypto.randomUUID(), className: "skill" },
  ]);

  const exampleExperience = {
    company: "EXAMPLE - COMPANY A",
    position: "UX DESIGNER",
    startDate: "JAN 2022",
    endDate: "DEC 2023",
    description1:
      "Design the internal administration tool and customer-facing application.",
    description2:
      "Build a robust, data heavy CRM by creating a cohesive system across two external systems.",
    description3:
      "Streamline and optimize workflows for product and design utilizing reasearch, wireframes, and mockups.",
    id: crypto.randomUUID(),
  };

  function handleCategoryAdd(e) {
    if (!newSkill) {
      alert("Please enter a category");
      return;
    }
    setSkillsList((currentSkillsList) => {
      return [
        ...currentSkillsList,
        { title: newSkill, id: crypto.randomUUID(), className: "category" },
      ];
    });
    setNewSkill("");
  }

  function handleSkillAdd(e) {
    if (!newSkill) {
      alert("Please enter a skill");
      return;
    }
    setSkillsList((currentSkillsList) => {
      return [
        ...currentSkillsList,
        { title: newSkill, id: crypto.randomUUID(), className: "skill" },
      ];
    });
    setNewSkill("");
  }

  function deleteSkill(id) {
    setSkillsList((currentSkillsList) => {
      return currentSkillsList.filter((skill) => skill.id !== id);
    });
  }

  function checkEmpty(value) {
    if (!value) {
      alert("Please fill out the input field!");
    }
  }

  const [experiences, setExperiences] = useState([exampleExperience]);

  const handleAddExperience = (newExperience) => {
    event.preventDefault();
    setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
  };

  const handleDeleteExperience = (id) => {
    setExperiences((currentExperiences) => {
      return currentExperiences.filter((experience) => experience.id !== id);
    });
  };

  const handleAddExampleExperience = (exampleExperience) => {
    setExperiences(handleAddExperience(exampleExperience));
  };

  const handleNameChange = (value) => {
    setFullName(value);
  };

  const handleOccupationChange = (value) => {
    setOccupation(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleWebsiteChange = (value) => {
    setWebsite(value);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  return (
    <>
      <div className="application">
        <div className="editor">
          <h1>CV Maker</h1>
          <Biography
            onFullNameChange={handleNameChange}
            onOccupationChange={handleOccupationChange}
            onEmailChange={handleEmailChange}
            onWebsiteChange={handleWebsiteChange}
            onPhoneChange={handlePhoneChange}
          />

          <form action="" className="education">
            <h2>Education</h2>
            <div className="form-row">
              <label htmlFor="school">University</label>
              <input
                onChange={(e) => setSchool(e.target.value)}
                type="text"
                name="school"
                id="school"
              />
            </div>
            <div className="form-row">
              <label htmlFor="degree">Degree</label>
              <input
                onChange={(e) => setDegree(e.target.value)}
                type="text"
                name="degree"
                id="degree"
              />
            </div>
            <div className="dates">
              <div className="form-row">
                <label htmlFor="startDate">Start</label>
                <input
                  onChange={(e) => setStartDate(e.target.value)}
                  type="text"
                  name="startDate"
                  id="startDate"
                />
              </div>
              <div className="form-row">
                <label htmlFor="endDate">End</label>
                <input
                  onChange={(e) => setEndDate(e.target.value)}
                  type="text"
                  name="endDate"
                  id="endDate"
                />
              </div>
            </div>
            <div className="form-row description">
              <label htmlFor="description">Description</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                placeholder="List any significant accomplishments."
                rows={8}
                name="description"
                id="description"
              />
            </div>
          </form>
          <form
            action=""
            className="experience"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2>Experience</h2>
            <ExperienceForm
              onAddExampleExperience={handleAddExampleExperience}
              onAddExperience={handleAddExperience}
            />
            <div className="skillsList list">
              <h3>Experiences</h3>
              {experiences.map((experience) => (
                <div className="skillsListItem" key={experience.id}>
                  <div>{experience.company}</div>
                  <img
                    src="./icons/close.svg"
                    alt=""
                    onClick={() => handleDeleteExperience(experience.id)}
                  />
                </div>
              ))}
            </div>
          </form>
          <form action="" className="skillsForm">
            <h2>Skills</h2>
            <div className="form-row">
              <label htmlFor="category">Category</label>
              <input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                type="text"
                name="category"
                id="category"
              />
              <img src="./icons/plus.svg" alt="" onClick={handleCategoryAdd} />
            </div>
            <div className="form-row skillsRow">
              <label htmlFor="skill">Skill</label>
              <input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                type="text"
                name="skill"
                id="skill"
              />
              <img src="./icons/plus.svg" alt="" onClick={handleSkillAdd} />
            </div>
            <div className="categoryList list">
              <h3>Category</h3>
              {skillsList
                .filter((skill) => skill.className === "category")
                .map((skill) => (
                  <div className="skillsListItem" key={skill.id}>
                    <div>{skill.title}</div>
                    <img
                      src="./icons/close.svg"
                      alt=""
                      onClick={() => deleteSkill(skill.id)}
                    />
                  </div>
                ))}
            </div>
            <div className="skillsList list">
              <h3>Skills</h3>
              {skillsList
                .filter((skill) => skill.className === "skill")
                .map((skill) => (
                    <div className="skillsListItem" key={skill.id}>
                      <div>{skill.title}</div>
                      <img
                        src="./icons/close.svg"
                        alt=""
                        onClick={() => deleteSkill(skill.id)}
                      />
                    </div>
                ))}
            </div>
          </form>
        </div>
        <div className="cvPreviewBody">
          <div className="cvPreview">
            <BiographyPreview
              fullName={fullName}
              occupation={occupation}
              email={email}
              website={website}
              phone={phone}
            />
            <div className="educationPreview">
              <h3>EDUCATION</h3>
              <div className="educationItem">
                <div className="subtitle">{school}</div>
                <div className="dateInfo">
                  <div className="degree">{degree} |</div>
                  <div className="dates">
                    <div className="startDate">{startDate}</div>
                    <div> - </div>
                    <div className="endDate">{endDate}</div>
                  </div>
                </div>
                <ul>
                  <li className="gpa">{description}</li>
                </ul>
              </div>
            </div>
            <div className="experiencePreview">
              <h3>EXPERIENCE</h3>
              <ExperienceList experiences={experiences} />
            </div>
            <div className="skillsPreview">
              <h3>SKILLS</h3>
              {skillsList.map((skill) => (
                <div className={skill.className} key={skill.id}>
                  {skill.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
