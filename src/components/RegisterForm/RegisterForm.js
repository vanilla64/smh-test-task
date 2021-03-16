import React, { useState } from 'react';

function RegisterForm({ isOpen, onRegisterSubmit }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target

    setValues(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onRegisterSubmit(values)
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Name" name="name" type="text" className="col s4"/>
        <input onChange={handleChange} placeholder="Email" name="email" type="email" className="col s4"/>
        <input onChange={handleChange} placeholder="Password" name="password" type="password" className="col s4"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;