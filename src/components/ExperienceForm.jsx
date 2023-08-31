import { useState, useEffect } from "react";

function ExperienceForm({ onAddExperience}) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");

  const [experiences, setExperience] = useState([]);

  const handleAddExperience = () => {
    if (!company || !position || !startDate || !endDate || !description1 || !description2 || !description3) {
      alert("Please fill out all fields");
      return
    }


    const newExperience = {
      company: company,
      position: position,
      startDate: startDate,
      endDate: endDate,
      description1: description1,
      description2: description2,
      description3: description3,
      id: crypto.randomUUID(),
    };
    onAddExperience(newExperience);
    setExperience((prevExperiences) => [...prevExperiences, newExperience]);

    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setDescription1("");
    setDescription2("");
    setDescription3("");
  };

  const handleDeleteExperience = (id) => {
    setExperience((currentExperiences) => {
      return currentExperiences.filter((experience) => experience.id !== id);
    });
  };

  // const [listItems, setListItems] = useState([]);

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     onAddListItem(description);
  //     setDescription("");
  //   }
  // };

  // const addListItem = (value) => {
  //   if (value.trim() !== "") {
  //     setListItems((listItems) => [...listItems, value]);
  //   }
  //   console.log("List items = " + listItems);
  // };

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
          name="description"
          id="description"
          cols="30"
          rows="5"
          placeholder="Bullet 1"
          onChange={(e) => setDescription1(e.target.value)}
          value={description1}
        ></textarea>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          placeholder="Bullet 2"
          onChange={(e) => setDescription2(e.target.value)}
          value={description2}
        ></textarea>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          placeholder="Bullet 3"
          onChange={(e) => setDescription3(e.target.value)}
          value={description3}
        ></textarea>
      </div>
      <div className="buttons">
        <button
          className="delete-education deleteBtn"
          onClick={handleDeleteExperience}
        >
          Delete
        </button>
        <button className="add-experience addBtn" onClick={handleAddExperience}>
          Add
        </button>
      </div>
    </>
  );
}

export default ExperienceForm;
