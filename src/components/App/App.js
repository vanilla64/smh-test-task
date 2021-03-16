import React from "react";
import './App.css';
import api from '../../utils/Api'
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";

function App() {

  const handleLoginSubmit = (data) => {
    console.log(data)
  }

  const handleRegisterSubmit = (data) => {
    console.log(data)
    api.register(data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div className="row App">
      <div className="row">
        <LoginForm
          onLoginSubmit={handleLoginSubmit}
        />
        <RegisterForm
          onRegisterSubmit={handleRegisterSubmit}
        />
      </div>
    </div>
  );
}

export default App;
