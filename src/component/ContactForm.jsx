import React, { useState } from 'react';
import './contact_style.scss';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/api/contact', formData)   
      .then(response => {
        console.log('Form data submitted:', response.data);
        // Réinitialiser le formulaire après l'envoi
        setFormData({
          lastName: '',
          firstName: '',
          email: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('Error submitting form data:', error);
      });
  };

  return (
    <div className="contact-form-container">
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;

