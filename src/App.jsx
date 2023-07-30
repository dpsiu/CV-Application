import { useState } from 'react'
import './App.css'

export default function App() {

  return (
    <>
      <div className="application">
        <div className="editor">
          <h1>CV Maker</h1>
          <form className='new-bio'>
            <h2>Personal Information</h2>
            <div className="form-row">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName"/>
            </div>
            <div className="form-row">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName"/>
            </div>
            <div className="form-row">
              <label htmlFor="occupation">Occupation</label>
              <input type="text" name="occupation" id="occupation"/>
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"/>
            </div>
            <div className="form-row">
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" id="phone"/>
            </div>
          </form>
          <form action="">
            <h2>Education</h2>
            <div className="form-row">
              <label htmlFor="school">School</label>
              <input type="text" name="school" id="school"/>
            </div>
            <div className="form-row">
              <label htmlFor="degree">Degree</label>
              <input type="text" name="degree" id="degree"/>
            </div>
            <div className="form-row">
              <label htmlFor="gpa">GPA</label>
              <input type="text" name="gpa" id="gpa"/>
            </div>
            <div className="dates">
              <div className="form-row">
                <label htmlFor="startDate">Start</label>
                <input type="text" name="startDate" id="startDate"/>
              </div>
              <div className="form-row">
                <label htmlFor="endDate">End</label>
                <input type="text" name="endDate" id="endDate"/>
              </div>
            </div>
            <div className="buttons">
              <button className='delete-education deleteBtn'>Delete</button>
              <button className='add-education addBtn'>Add</button>
            </div>
          </form>
          <form action="">
            <h2>Experience</h2>
            <div className="form-row">
              <label htmlFor="company">Company</label>
              <input type="text" name="company" id="company"/>
            </div>
            <div className="form-row">
              <label htmlFor="position">Position</label>
              <input type="text" name="position" id="position"/>
            </div>
            <div className="dates">
              <div className="form-row">
                <label htmlFor="startDate">Start</label>
                <input type="text" name="startDate" id="startDate"/>
              </div>
              <div className="form-row">
                <label htmlFor="endDate">End</label>
                <input type="text" name="endDate" id="endDate"/>
              </div>
            </div>
            <div className="buttons">
              <button className='delete-education deleteBtn'>Delete</button>
              <button className='add-experience addBtn'>Add</button>
            </div>
          </form>
          <form action="" className='skillsForm'>
            <h2>Skills</h2>
            <div className="form-row">
              <label htmlFor="category">Category</label>
              <input type="text" name="category" id="category"/>
              <img src="./icons/plus.svg" alt="" />
            </div>
            <div className="form-row skillsRow" >
              <label htmlFor="skill">Skill</label>
              <input type="text" name="skill" id="skill"/>
              <img src="./icons/plus.svg" alt="" />
            </div>
            <div className="categoryList list">
              <h3>Category</h3>
              <div className="categoryListItem">
                <div>Adobe PS</div>
                <img src="./icons/close.svg" alt="" />
              </div>
              <div className="categoryListItem">
                <div>Javascript</div>
                <img src="./icons/close.svg" alt="" />
              </div>
            </div>
            <div className="skillsList list">
              <h3>Skills</h3>
              <div className="skillsListItem">
                <div>Adobe PS</div>
                <img src="./icons/close.svg" alt="" />
              </div>
              <div className="skillsListItem">
                <div>Javascript</div>
                <img src="./icons/close.svg" alt="" />
              </div>
              <div className="skillsListItem">
                <div>React</div>
                <img src="./icons/close.svg" alt="" />
              </div>
            </div>
          </form>
        </div>
        <div className="cvPreviewBody">
          <div className="cvPreview">
            <div className="bioPreview">
              <div className="nameTitle">
                <h1>Denver Siu</h1>
                <h2>Software Developer</h2>
              </div>
              <div className="contactInfo">
                <p>www.denversiu.com</p>
                <p>denversiu24@gmail.com</p>
                <p>512 363 6913</p>
              </div>
            </div>
            <div className='educationPreview'>
              <h3>EDUCATION</h3>
              <div className="educationItem">
                <div className="subtitle">THE UNIVERSITY OF TEXAS AT DALLAS</div>
                <div className="dateInfo">
                  <div className="degree">B.A. INTERACTION DESIGN |</div>
                  <div className="dates">
                    <div className="startDate">2018</div>
                    <div> - </div>
                    <div className="endDate">2020</div>
                  </div>
                </div>
                <ul>
                  <li className="gpa">GPA: 3.8 Magna Cum Laude</li>
                </ul>
              </div>
            </div>
            <div className='experiencePreview'>
              <h3>EXPERIENCE</h3>
              <div className="experienceItem">
                <div className="subtitle">AKAMAI INNOVATIONS</div>
                <div className="dateInfo">
                  <div className="position">WEB DESIGNER |</div>
                  <div className="dates">
                    <div className="startDate">JUN 2022</div>
                    <div> - </div>
                    <div className="endDate">PRESENT</div>
                  </div>
                </div>
                <ul>
                  <li>Participate in cross-functional product development
                     with a team of 4 to deliver 10+ doctor client sites.</li>
                  <li>Collaborate with web developer to create an internal
                    tool to improve collaboration and efficiency in worklflows.
                  </li>
                </ul>
              </div>
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
                  <li>Design the internal administration tool and 
                    customer-facing application</li>
                  <li>Build a robust, data heavy CRM by creating a cohesive system
                    across two external systems.
                  </li>
                  <li>
                    Streamline and optimize workflows for product and design utilizing
                    reasearch, wireframes, and mockups.
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
                  <li>One of 3 students chosen from UTD to shadow UX 
                    designers from Projekt202 in a week-long externship
                    over spring break.
                  </li>
                </ul>
              </div>
            </div>
            <div className='skillsPreview'>
              <h3>SKILLS</h3>
              <div className="skillsItem">
                <div className="subtitle">LANGUAGES</div>
                <ul className='listItems'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="skillsItem">
                <div className="subtitle">DESIGN</div>
                <ul className='listItems'>
                  <li>User Interviews</li>
                  <li>Interaction Design</li>
                  <li>User Centered Design</li>
                  <li>Wireframing</li>
                  <li>User Research</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}