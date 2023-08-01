import { useState } from 'react'
import './App.css'

export default function App() {
  const [fullName, setFullName] = useState('Name')
  const [occupation, setOccupation] = useState('Occupation')
  const [email, setEmail] = useState('Email')
  const [website, setWebsite] = useState('Website')
  const [phone, setPhone] = useState('Phone') 

  const [school, setSchool] = useState('SCHOOL')
  const [degree, setDegree] = useState('DEGREE')
  const [startDate, setStartDate] = useState('Start Date')
  const [endDate, setEndDate] = useState('End Date')
  const [description, setDescription] = useState('Description')

  const [company, setCompany] = useState('COMPANY')
  const [position, setPosition] = useState('POSITION')
  const [startDate2, setStartDate2] = useState('Start Date')
  const [endDate2, setEndDate2] = useState('End Date')
  const [description1, setDescription1] = useState('Description')
  const [description2, setDescription2] = useState('Description')
  const [description3, setDescription3] = useState('Description')

  const [newCategory, setNewCategory] = useState('')
  const [categories, setCategories] = useState([])

  function handleCategoryAdd(e) {
    // e.preventDefault()

    setCategories((currentCategories) => {
      return [
        ...currentCategories, 
        {title: newCategory, id: 12783}
      ]
    })
  }

console.log(categories)

  return (
    <>
      <div className="application">
        <div className="editor">
          <h1>CV Maker</h1>
          <form className='new-bio'>
            <h2>Personal Information</h2>
            <div className="form-row">
              <label htmlFor="fullName">Full Name</label>
              <input maxLength={20} onChange={e => setFullName(e.target.value)} type="text" name="fullName" id="fullName"/>
            </div>
            <div className="form-row">
              <label htmlFor="occupation">Occupation</label>
              <input maxLength={25} onChange={e => setOccupation(e.target.value)} type="text" name="occupation" id="occupation"/>
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input onChange={e => setEmail(e.target.value)} type="email" name="email" id="email"/>
            </div>
            <div className="form-row">
              <label htmlFor="website">Website</label>
              <input onChange={e => setWebsite(e.target.value)} type="url" name="website" id="website"/>
            </div>
            <div className="form-row">
              <label htmlFor="phone">Phone</label>
              <input onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone"/>
            </div>
          </form>
          <form action="" className='education'>
            <h2>Education</h2>
            <div className="form-row">
              <label htmlFor="school">University</label>
              <input onChange={e => setSchool(e.target.value)} type="text" name="school" id="school"/>
            </div>
            <div className="form-row">
              <label htmlFor="degree">Degree</label>
              <input onChange={e => setSchool(e.target.value)} type="text" name="degree" id="degree"/>
            </div>
            {/* <div className="form-row">
              <label htmlFor="gpa">GPA</label>
              <input type="text" name="gpa" id="gpa"/>
            </div> */}
            <div className="dates">
              <div className="form-row">
                <label htmlFor="startDate">Start</label>
                <input onChange={e => setStartDate(e.target.value)} type="text" name="startDate" id="startDate"/>
              </div>
              <div className="form-row">
                <label htmlFor="endDate">End</label>
                <input onChange={e => setEndDate(e.target.value)} type="text" name="endDate" id="endDate"/>
              </div>
            </div>
            <div className="form-row description">
              <label htmlFor="description">Description</label>
              <textarea onChange={e => setDescription(e.target.value)} placeholder='List any significant accomplishments.'
               rows={8} name="description" id="description"/>
            </div>
            <div className="buttons">
              <button className='delete-education deleteBtn'>Delete</button>
              <button className='add-education addBtn'>Add</button>
            </div>
          </form>
          <form action="" className='experience'>
            <h2>Experience</h2>
            <div className="form-row">
              <label htmlFor="company">Company</label>
              <input onChange={e => setCompany(e.target.value)} type="text" name="company" id="company"/>
            </div>
            <div className="form-row">
              <label htmlFor="position">Position</label>
              <input onChange={e => setPosition(e.target.value)} type="text" name="position" id="position"/>
            </div>
            <div className="dates">
              <div className="form-row">
                <label htmlFor="startDate">Start</label>
                <input onChange={e => setStartDate2(e.target.value)} type="text" name="startDate" id="startDate"/>
              </div>
              <div className="form-row">
                <label htmlFor="endDate">End</label>
                <input onChange={e => setEndDate2(e.target.value)} type="text" name="endDate" id="endDate"/>
              </div>
            </div>
            <div className="form-row description">
              <label htmlFor="description">Description - List duties & accomplishments.</label>
              <textarea onChange={e => setDescription1(e.target.value)} placeholder='Bullet 1'
               rows={4} name="description" id="description"/>
            </div>
            <div className="form-row description">
              <label htmlFor="description"></label>
              <textarea onChange={e => setDescription2(e.target.value)} placeholder='Bullet 2'
               rows={4} name="description" id="description"/>
            </div>
            <div className="form-row description">
              <label htmlFor="description"></label>
              <textarea onChange={e => setDescription3(e.target.value)} placeholder='Bullet 3'
               rows={4} name="description" id="description"/>
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
              <input value={newCategory} onChange={e => setNewCategory(e.target.value)} type="text" name="category" id="category"/>
              <img src="./icons/plus.svg" alt="" onClick={handleCategoryAdd}/>
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
                <h1 >{fullName}</h1>
                <h2>{occupation}</h2>
              </div>
              <div className="contactInfo">
                <p>{email}</p>
                <p>{website}</p>
                <p>{phone}</p>
              </div>
            </div>
            <div className='educationPreview'>
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
            <div className='experiencePreview'>
              <h3>EXPERIENCE</h3>
              <div className="experienceItem">
                <div className="subtitle">{company}</div>
                <div className="dateInfo">
                  <div className="position">{position} |</div>
                  <div className="dates">
                    <div className="startDate">{startDate2}</div>
                    <div> - </div>
                    <div className="endDate">{endDate2}</div>
                  </div>
                </div>
                <ul>
                  <li>{description1}</li>
                  <li>{description2}</li>
                  <li>{description3}</li>
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
              {categories.map(category => {
                return <div className="subtitle">
                {category.title}
              </div>
                
              })}

              <ul className='listItems'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
              </ul>
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
    </>
  )
}