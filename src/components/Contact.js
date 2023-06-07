import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Save user details to local storage
    localStorage.setItem('userDetails', JSON.stringify({ name, email, phoneNumber }));

    // Reset form fields
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='form'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='form'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form'>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className='middle'>
      <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Contact;
