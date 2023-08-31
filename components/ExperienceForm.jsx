// import { useState } from "react";

// function ExperienceForm({ onAddExperience }) {
//   const [company, setCompany] = useState("COMPANY");
//   const [position, setPosition] = useState("POSITION");
//   const [startDate, setStartDate] = useState("Start Date");
//   const [endDate, setEndDate] = useState("End Date");
//   const [description, setDescription] = useState("Description");

//   const handleAddExperience = () => {
//     if (!company || !position || !startDate || !endDate || !description) {
//       alert('Please fill in all fields.');
//       return;
//     }

//   const newExperience = {
//     company,
//     position,
//     startDate,
//     endDate,
//     description,
//   };

//   onAddExperience(newExperience);

//   setCompany("");
//   setPosition("");
//   setStartDate("");
//   setEndDate("");
//   setDescription("");
//   }
//   return (
//     <div>
//       <div className="form-row">
//         <label htmlFor="company">Company</label>
//         <input
//           onChange={(e) => setCompany(e.target.value)}
//           type="text"
//           name="company"
//           id="company"
//         />
//       </div>
//       <div className="form-row">
//         <label htmlFor="position">Position</label>
//         <input
//           onChange={(e) => setPosition(e.target.value)}
//           type="text"
//           name="position"
//           id="position"
//         />
//       </div>
//       <div className="dates">
//         <div className="form-row" key={startDate}>
//           <label htmlFor="startDate">Start</label>
//           <input
//             onChange={(e) => setStartDate(e.target.value)}
//             type="text"
//             name="startDate"
//             id="startDate"
//           />
//         </div>
//         <div className="form-row" key={endDate}>
//           <label htmlFor="endDate">End</label>
//           <input
//             onChange={(e) => setEndDate(e.target.value)}
//             type="text"
//             name="endDate"
//             id="endDate"
//           />
//         </div>
//       </div>
//       <div className="form-row description">
//         <label htmlFor="description">Description</label>
//         <textarea
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="List duties & accomplishments"
//           rows={4}
//           name="description"
//           id="description"
//         />
//       </div>
//       <div className="buttons">
//             <button className="delete-education deleteBtn">Delete</button>
//             <button className="add-experience addBtn" onClick={handleAddExperience}>Add</button>
//         </div>
//     </div>
//   );
// }

// export default ExperienceForm;
