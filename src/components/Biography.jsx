import React, {useState} from 'react';

function Biography({onFullNameChange, onOccupationChange, onEmailChange, onWebsiteChange, onPhoneChange}) {

    const [fullName, setFullName] = useState("Name");
    const [occupation, setOccupation] = useState("Occupation");
    const [email, setEmail] = useState("Email");
    const [website, setWebsite] = useState("Website");
    const [phone, setPhone] = useState("Phone");

    
  return (
    <form className="new-bio">
        <h2>Personal Information</h2>
        <div className="form-row">
        <label htmlFor="fullName">Full Name</label>
        <input
            maxLength={20}
            onChange={onFullNameChange}
            type="text"
            name="fullName"
            id="fullName"
        />
        </div>
        <div className="form-row">
        <label htmlFor="occupation">Occupation</label>
        <input
            maxLength={25}
            onChange={(e) => {
                setOccupation(onOccupationChange(e.target.value))
                
            }}
            type="text"
            name="occupation"
            id="occupation"
        />
        </div>
        <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
            onChange={(e) => {
                setEmail(onEmailChange(e.target.value))
                
            }}
            type="email"
            name="email"
            id="email"
        />
        </div>
        <div className="form-row">
        <label htmlFor="website">Website</label>
        <input
            onChange={(e) => {
                setWebsite(onWebsiteChange(e.target.value))
                
            }}
            type="url"
            name="website"
            id="website"
        />
        </div>
        <div className="form-row">
        <label htmlFor="phone">Phone</label>
        <input
            onChange={(e) => {
                setPhone(onPhoneChange(e.target.value))
                
            }}
            type="tel"
            name="phone"
            id="phone"
        />
        </div>
    </form>
  );
}

export default Biography;