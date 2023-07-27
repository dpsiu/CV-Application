import { useState } from 'react'
import DatePicker from 'react-date-picker'
import './App.css'


export default function App() {


  return (
    <>
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
        <div className="form-row">
          <label htmlFor="startDate">Start Date</label>
          <input type="text" name="startDate" id="startDate"/>
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
        <div className="form-row">
          <label htmlFor="startDate">Start Date</label>
          <input type="text" name="startDate" id="startDate"/>
        </div>
        <div>
        </div>
        <div className="form-row">
          <label htmlFor="endDate">End Date</label>
          <input type="text" name="endDate" id="endDate"/>
        </div>
        <div className="buttons">
          <button className='delete-education deleteBtn'>Delete</button>
          <button className='add-education addBtn'>Add</button>
        </div>
      </form>
      <form action="">
        <h2>Skills</h2>
        <div className="form-row">
          <label htmlFor="skill">Skill</label>
          <input type="text" name="skill" id="skill"/>
        </div>
        <div className="buttons">
          <button className='delete-education deleteBtn'>Delete</button>
          <button className='add-education addBtn'>Add</button>
        </div>
      </form>

    </>
  )
}