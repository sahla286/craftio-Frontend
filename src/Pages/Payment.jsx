import React, { useContext, useState } from 'react';
import './CSS/Payment.css';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: ''
  });

  const {getTotalCartAmount,clearCartItems} = useContext(ShopContext);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    if (!formData.cardNumber.trim()) {
      alert('Card Number is required');
      return false;
    }
    if (!/^\d{16}$/.test(formData.cardNumber.trim())) {
      alert('Card Number must be 16 digits');
      return false;
    }
    if (!formData.expiryDate.trim()) {
      alert('Expiry Date is required');
      return false;
    }
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.expiryDate.trim())) {
      alert('Expiry Date must be in the format DD/MM/YYYY');
      return false;
    }
    if (!formData.cvv.trim()) {
      alert('CVV is required');
      return false;
    }
    if (!/^\d{3}$/.test(formData.cvv.trim())) {
      alert('CVV must be 3 digits');
      return false;
    }
    if (!formData.cardHolderName.trim()) {
      alert('Cardholder Name is required');
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(formData.cardHolderName.trim())) {
      alert('Cardholder Name must contain only letters');
      return false;
    }
    return true;
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      clearCartItems();
      // You can add your logic here for handling successful form submission
      navigate('/paymentsuccess');
    }
  };

  return (
    <div className='payment'>
      <div className="payment-container">
        <h2>Payment Details</h2><br/>
        <form className="payment-fields" onSubmit={handlePaymentSubmit}>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" placeholder='**** **** **** ****' value={formData.cardNumber} onChange={handleInputChange} required />
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" placeholder='DD/MM/YYYY' value={formData.expiryDate} onChange={handleInputChange} required />
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" placeholder='***' value={formData.cvv} onChange={handleInputChange} required />
          <label htmlFor="cardHolderName" >Cardholder Name:</label>
          <input type="text" id="cardHolderName" name="cardHolderName" placeholder='Name' value={formData.cardHolderName} onChange={handleInputChange} required />
          <button type="submit"><span>Pay Now </span> &#8377;{getTotalCartAmount()}</button>
        </form> 
      </div>
    </div>
  );
};

export default Payment;

