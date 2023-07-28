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
              <h3>Education</h3>
              <div className="educationItem">
                <div className="school">The University of Texas at Dallas</div>
                <div className="dateAndTitle">
                  <div className="degree">Bachelor of Arts</div>
                  <div className="dates">
                    <div className="startDate">2018</div>
                    <div className="endDate">2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='experiencePreview'>
              <h3>Experience</h3>
              <div className="experienceItem">
                <div className="company">Akamai Innovations</div>
                <div className="dateAndTitle">
                  <div className="position">Web Designer</div>
                  <div className="dates">
                    <div className="startDate">June 2022</div>
                    <div className="endDate">Present</div>
                  </div>
                </div>
                <ul>
                  <li>Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged.</li>
                </ul>
              </div>
            </div>
            <div className='skillsPreview'>
              <h3>Skills</h3>
              <h4 className="categoryPreview">Languages</h4>
              <ul className='listItems'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}