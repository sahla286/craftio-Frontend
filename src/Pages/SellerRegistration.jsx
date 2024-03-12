// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'
// import './CSS/SellerRegistration.css';
// import bcrypt from 'bcryptjs';

// const SellerRegistration = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     companyName: "",
//   });

//   const navigate=useNavigate();


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const validateEmail = (email) => {
//     const re = /\S+@\S+\.\S+/;
//     return re.test(email);
//   };

//   const signup = async () => {
//     try {
//       for (const key in formData) {
//         if (formData[key].trim() === "") {
//           alert("All fields are required");
//           return;
//         }
//       }

//       if (!validateEmail(formData.email)) {
//         alert("Invalid email format");
//         return;
//       }

//       const hashedPassword = await bcrypt.hash(formData.password, 10);
//       const formDataWithHashedPassword = { ...formData, password: hashedPassword };
//       const response = await fetch('http://localhost:4000/seller/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formDataWithHashedPassword)
//       });
//       const data = await response.json();
//       if (data.success) {
//         localStorage.setItem('auth-token', data.token);
//       } else {
//         alert(data.errors);
//       }
//     } catch (error) {
//       console.error('Error signing up seller:', error);
//     }
//   }

//   const handleSubmit = () => {
//     signup();
//     navigate('/seller');
//   }

//   return (
//     <div className='seller-registration'>
//       <div className="seller-registration-container">
//         <h1>Registration</h1>
//         <div className="seller-registration-fields">
//           <input name='username' value={formData.username} onChange={handleChange} type='text' placeholder='Your Name' />
//           <input name='email' value={formData.email} onChange={handleChange} type='email' placeholder='Email Address' />
//           <input name='password' value={formData.password} onChange={handleChange} type='password' placeholder='Password' />
//           <input name='companyName' value={formData.companyName} onChange={handleChange} type='text' placeholder='Company Name' />
//         </div>
//         <button onClick={handleSubmit}>Start Selling</button>
//       </div>
//     </div>
//   )
// }

// export default SellerRegistration;


