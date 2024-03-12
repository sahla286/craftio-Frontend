import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import bcrypt from 'bcryptjs';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const login = async () => {
    try {
      if (formData.email.trim() === "" || formData.password.trim() === "") {
        alert("Email and password are required");
        return;
      }
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        window.location.replace("/");
      } else {
        alert(data.errors);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  const signup = async () => {
    try {
      const hashedPassword = await bcrypt.hash(formData.password, 10);
      const formDataWithHashedPassword = { ...formData, password: hashedPassword };
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataWithHashedPassword)
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        window.location.replace("/");
      } else {
        alert(data.errors);
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }

  const handleSubmit = () => {
    if (state === "Login") {
      login();
    } else {
      if (!validateEmail(formData.email)) {
        alert("Invalid email format");
        return;
      }
      if (formData.username.trim() === "" || formData.password.trim() === "") {
        alert("All fields are required for sign up");
        return;
      }
      signup();
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Name' /> : <></>}
          <input name='email' value={formData.email} onChange={handleEmailChange} type='email' placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password' />
        </div>
        <button onClick={handleSubmit}>Continue</button>
        {state === "Sign Up"
          ? <p className='loginsignup-login'>Already have an account? <span onClick={() => { setState("Login") }}>Login here</span></p>
          : <p className='loginsignup-login'>Create an account?<span onClick={() => { setState("Sign Up") }}>Click here</span></p>}
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;
