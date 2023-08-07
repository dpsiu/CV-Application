import { useState, useEffect } from 'react'

function ExperienceForm({onAddExperience}) {
    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [description, setDescription] = useState('')

    const [experiences, setExperience] = useState([])

    const handleAddExperience = () => {

      if (!company ||!position ||!startDate ||!endDate ||!description) {
        alert('Please fill out all fields')
      }
      
      // event.preventDefault()
      const newExperience = {
        company: company,
        position: position,
        startDate: startDate,
        endDate: endDate,
        description: description,
        id: crypto.randomUUID()
      };
      onAddExperience(newExperience);
      setExperience((prevExperiences) => [...prevExperiences, newExperience]);

      setCompany("");
      setPosition('');
      setStartDate("");
      setEndDate("");
      setDescription('');
    };

    useEffect(() => {
      console.log(experiences);
    }, [experiences]);

    // Delete experience
    const handleDeleteExperience = (id) => {
      setExperience((currentExperiences) => {
        return currentExperiences.filter((experience => experience.id !== id))
      })
    }

    return (
      <>
        <div className="form-row">
          <label htmlFor="company">Company</label>
          <input
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            name="company"
            id="company"
            value={company}
          />
        </div>
        <div className="form-row">
          <label htmlFor="position">Position</label>
          <input
            onChange={(e) => setPosition(e.target.value)}
            type="text"
            name="position"
            id="position"
            value={position}
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
              value={startDate}
            />
          </div>
          <div className="form-row">
            <label htmlFor="endDate">End</label>
            <input
              onChange={(e) => setEndDate(e.target.value)}
              type="text"
              name="endDate"
              id="endDate"
              value={endDate}
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
            value={description}
          />
        </div>
        <div className="buttons">
          <button className='delete-education deleteBtn' onClick={handleDeleteExperience}>Delete</button>
          <button className='add-experience addBtn' onClick={handleAddExperience}>Add</button>
        </div>
      </>
    )
}

export default ExperienceForm