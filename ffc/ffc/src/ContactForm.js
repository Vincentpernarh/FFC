
import React, { useState } from 'react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    city: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the formData to your backend for email processing
    // You would typically use a server or a service like Nodemailer for this

    // Clear the form after submission
    setFormData({
      name: '',
      state: '',
      city: '',
      message: '',
    });
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <div className='lab'>
          <label htmlFor="name">Name:</label>
          </div>
          <div className='contact_inputs_name'>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className='lab'>
          <label htmlFor="state">State:</label>
          </div>
          <div className='contact_inputs_state'>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
          </div>
        </div>
        <div className="form-group">
        <div className='lab'>
          <label htmlFor="city">City:</label>
          </div>
          <div className='contact_inputs_city'>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          </div>
        </div>
        <div className="form-group">
        <div className='lab'>
          <label htmlFor="message">Message:</label>
          </div>
          <div className='contact_inputs_message'>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required 
              aria-multiline
              placeholder='Enter your message'
              
            />
          </div>
        </div>
        <button className='submit' type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
