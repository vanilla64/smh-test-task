import React, { useState } from 'react';

function LoginForm({ onLoginSubmit }) {
  const [values, setValues] = useState({
    name: '',
    email: ''
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
    onLoginSubmit(values)
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Email" name="name" type="email" className="col s6"/>
        <input onChange={handleChange} placeholder="Password" name="password" type="password" className="col s6"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
