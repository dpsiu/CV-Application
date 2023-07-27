import { useState } from 'react'

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

    </>
  )
}