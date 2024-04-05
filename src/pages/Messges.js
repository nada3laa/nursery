import React , { useState }  from 'react'
import Sidenav from '../components/Sidenav'
import Box from "@mui/material/Box";
import NAvbar from '../components/Navbar'
import Chat from './Chat';
import './style.css'; // Import your CSS file

// import Typography from "@mui/material/Typography";

export default function Settings() {
  const [formData, setFormData] = useState({
    // Define your form fields here
    name: '',
    email: '',
    message: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform form validation
    console.log('Form submitted with data:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Hide the form after submission
    setShowForm(false);
  };


  
  return (
    <div>
      <div className="bgcolor">

      <NAvbar/>
      <Box height={70}/>
      <Box sx={{ display: "flex" }}>

      <Sidenav/>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Chat/>
        
      </Box> */}


<div className="form-container">
      {!showForm ? (
        <button onClick={() => setShowForm(true)}>Open Form</button>
      ) : (
        <div className="form-overlay">
          <div className="form-content">
            <span className="close-icon" onClick={() => setShowForm(false)}>×</span>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  

      </Box>
      </div>
    </div>
  )
}
