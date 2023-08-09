import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

import ExperienceForm from './components/ExperienceForm'
import ExperienceList from './components/ExperienceList'
import Biography from './components/Biography'
import BiographyPreview from './components/BiographyPreview'

export default function App() {
  const [fullName, setFullName] = useState("Name");
  const [occupation, setOccupation] = useState("Occupation");
  const [email, setEmail] = useState("Email");
  const [website, setWebsite] = useState("Website");
  const [phone, setPhone] = useState("Phone"); 

  const [school, setSchool] = useState('SCHOOL')
  const [degree, setDegree] = useState('DEGREE')
  const [startDate, setStartDate] = useState('Start Date')
  const [endDate, setEndDate] = useState('End Date')
  const [description, setDescription] = useState('Description')

  const [newCategory, setNewCategory] = useState('')
  const [categories, setCategories] = useState([])

  const [newSkill, setNewSkill] = useState('')
  const[skills, setSkills] = useState([])

  function handleCategoryAdd(e) {
    setCategories((currentCategories) => {
      return [
        ...currentCategories,
        { title: newCategory, id: crypto.randomUUID()} // Fix the object key here
      ];
    });
    setNewCategory('');
  }

  function deleteCategory(id) {
    setCategories(currentCategories => {
      return currentCategories.filter(category => category.id!== id)
    })
  }

  function handleSkillAdd(e) {
    setSkills((currentSkills) => {
      return [
        ...currentSkills,
        {title:newSkill, id: crypto.randomUUID()},
      ]
    })
    setNewSkill('')
  }

  function deleteSkill(id) {
    setSkills(currentSkills => {
      return currentSkills.filter(skill => skill.id !== id)
    })
  }

  const [experiences, setExperiences] = useState([]);

  const handleAddExperience = (newExperience) => {
    event.preventDefault()
    setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
  }

  const handleDeleteExperience = (id) => {
    setExperiences(currentExperiences => {
      return currentExperiences.filter((experience => experience.id !== id))
    })
  }

  const handleNameChange = (value) => {
    setFullName(value)
  }

  const handleOccupationChange = (value) => {
    setOccupation(value)
  }

  const handleEmailChange = (value) => {
    setEmail(value)
  }

  const handleWebsiteChange = (value) => {
    setWebsite(value)
  }

  const handlePhoneChange = (value) => {
    setPhone(value)
  }

  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   setExperiences((prevExperiences) => {
  //     [...prevExperiences, [name]: value]
  //   })
  // }

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
            <ExperienceForm onAddExperience={handleAddExperience} />
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
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
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
              {categories.map((category) => (
                <div className="categoryListItem" key={category.id}>
                  <div>{category.title}</div>
                  <img
                    src="./icons/close.svg"
                    alt=""
                    onClick={() => deleteCategory(category.id)}
                  />
                </div>
              ))}
            </div>
            <div className="skillsList list">
              <h3>Skills</h3>
              {skills.map((skill) => {
                return (
                  <>
                    <div className="skillsListItem" key={skill.id}>
                      <div>{skill.title}</div>
                      <img
                        src="./icons/close.svg"
                        alt=""
                        onClick={() => deleteSkill(skill.id)}
                      />
                    </div>
                  </>
                );
              })}
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
              <div className="experienceItem">
                <div className="subtitle">FOODMAGNET</div>
                <div className="dateInfo">
                  <div className="position">UX DESIGNER |</div>
                  <div className="dates">
                    <div className="startDate">JAN 2022</div>
                    <div> - </div>
                    <div className="endDate">NOV 2022</div>
                  </div>
                </div>
                <ul>
                  <li>
                    Design the internal administration tool and customer-facing
                    application
                  </li>
                  <li>
                    Build a robust, data heavy CRM by creating a cohesive system
                    across two external systems.
                  </li>
                  <li>
                    Streamline and optimize workflows for product and design
                    utilizing reasearch, wireframes, and mockups.
                  </li>
                </ul>
              </div>
              <div className="experienceItem">
                <div className="subtitle">PROJKET202</div>
                <div className="dateInfo">
                  <div className="position">UX EXTERN |</div>
                  <div className="dates">
                    <div className="startDate">MAR 202</div>
                  </div>
                </div>
                <ul>
                  <li>
                    One of 3 students chosen from UTD to shadow UX designers
                    from Projekt202 in a week-long externship over spring break.
                  </li>
                </ul>
              </div>
            </div>
            <div className="skillsPreview">
              <h3>SKILLS</h3>
              {categories.map((category) => {
                return <div className="subtitle">{category.title}</div>;
              })}
              {skills.map((skill) => {
                return <li>{skill.title}</li>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}