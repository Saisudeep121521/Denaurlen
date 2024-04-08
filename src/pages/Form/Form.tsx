import React, { useState } from 'react';
import axios from 'axios';

const Form: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [expectedOTP, setExpectedOTP] = useState('');
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  const baseUrl = "http://localhost:3001";

  const sendEmail = async () => {
    try {
      const response = await axios.post(`${baseUrl}/email/sendEmail`, { email });
      if (response.status === 200) {
        alert("OTP Sent Successfully!");
        setExpectedOTP(response.data.otp); // Update expectedOTP with the received OTP
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  

  const verifyOTP = () => {
    console.log(otp,'------',expectedOTP)
    // Compare the entered OTP with the expected OTP
    if (otp === expectedOTP) {
      setIsOTPVerified(true);
      // Proceed with the desired action (e.g., account verification)
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      {!isOTPVerified ? (
        <>
          <label>Email address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={sendEmail}>Send OTP</button>
          <br />
          <label>Enter OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button onClick={verifyOTP}>Verify OTP</button>
        </>
      ) : (
        <p>OTP Verified Successfully!</p>
      )}
    </div>
  );
}

export default Form;
