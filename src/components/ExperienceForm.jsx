import { useState, useEffect } from 'react'

function ExperienceForm({onAddExperience}) {
    const [company, setCompany] = useState('COMPANY')
    const [position, setPosition] = useState('POSITION')
    const [startDate, setStartDate] = useState('Start Date')
    const [endDate, setEndDate] = useState('End Date')
    const [description, setDescription] = useState('Description')

    const [experiences, setExperience] = useState([])

    const handleAddExperience = () => {
      const newExperience = {
        company:  company,
        position: position,
        startDate: startDate,
        endDate: endDate,
        description: description,
      }

      onAddExperience(newExperience)

      setExperience((prevExperiences) => [...prevExperiences,
      newExperience])

      setCompany('')
      setPosition('')
      setStartDate('')
      setEndDate('')
      setDescription('')
    }

    useEffect(() => {
      console.log(experiences);
    }, [experiences]);

    return (
      <>
        <div className="form-row">
          <label htmlFor="company">Company</label>
          <input
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            name="company"
            id="company"
          />
        </div>
        <div className="form-row">
          <label htmlFor="position">Position</label>
          <input
            onChange={(e) => setPosition(e.target.value)}
            type="text"
            name="position"
            id="position"
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
            placeholder="List duties & accomplishments"
            rows={4}
            name="description"
            id="description"
          />
        </div>
        <div className="buttons">
          <button className='delete-education deleteBtn'>Delete</button>
          <button className='add-experience addBtn' onClick={handleAddExperience}>Add</button>
        </div>
      </>
    )
}

export default ExperienceForm