// PaymentSuccessPage.js
import React from 'react';
import './CSS/PaymentSuccessPage.css';

const PaymentSuccessPage = () => {
  return (
    <div className="payment-success-container">
      <div className="tick-container">
        <div className="tick">&#10004;</div>
      </div>
      <h1 className="success-message">Payment Successfully Completed!</h1>
      <p className="thank-you-message">Thank you for your purchase.</p>
    </div>
  );
};

export default PaymentSuccessPage;
