import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import loginsvg from '../../images/Login/loginsvg.png';
import '../../css/signup.css';
import CustomModal from '../../Components/CustomModal/CustomModal';
import { storeFormData } from '../../redux/actions/authActions';
import congo from '../../images/Signup/Group 173.png';
import axios from 'axios';

// Define interface for signup form data
interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const [displayCheck, setDisplayCheck] = useState(false);  
  const [modalShow, setModalShow] = useState(false);
  const [showEmailOtpModal, setShowEmailOtpModal] = useState(false);
  const [resetSuccessModalShow, setResetSuccessModalShow] = useState(false);
  const [congoModalShow, setCongoModalShow] = useState(false);

  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [expectedOTP, setExpectedOTP] = useState('');
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  // Access the form data from Redux store using useSelector
  const userFormData = useSelector((state: any) => state.auth.formData);

  const openEmailOtpModal = () => {
    const timer = setTimeout(() => {
      navigate("/categories");
    sessionStorage.setItem('wallet', '5000');

    }, 3000);

    setCongoModalShow(true);
    // Make API call using form data from Redux store
    axios.post('http://localhost:3001/users', {
      firstName: userFormData.firstName,
      lastName: userFormData.lastName,
      email: userFormData.email,
      location: userFormData.location,
      username: userFormData.username,
      password: userFormData.password
    })
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  
  };

  const closeEmailOtpModal = () => {
    setShowEmailOtpModal(false);
  };

  const handleEmailVerify = () => {
    setDisplayCheck(true);
    handleModalNext();
  };


  const handleModalNext = () => {
    setModalShow(false);
    setResetSuccessModalShow(true);
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCongoModalShow(true);
  
    try {
      await axios.post('http://localhost:3001/users', formData);
      dispatch(storeFormData(formData));
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        username: '',
        password: '',
        confirmPassword: ''
      });
      openEmailOtpModal();
    } catch (error) {
      console.error('Error storing form data:', error);
    }
  };
  
  // Function to handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'email') {
      setEmail(value);
    }
  };

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
  

  return (
    <div className="container-fluid">
      <div className="row main-content">
        <div className="col-md-6 login_form">
          <div className="container">
          <div className='leftTitle'>
            <h1 className="mt-5" style={{ color: 'rgba(75, 0, 130, 1)', fontFamily: 'Poppins, Arial, sans-serif', fontSize: '40px', lineHeight: '52.5px', fontWeight: '600' }}>Sign Up</h1>
            <p className="lead" style={{ color: '#343434', fontFamily: 'Poppins, Arial, sans-serif', fontSize: '20px', opacity: '50%', lineHeight: '45px', fontWeight: '500' }}>Connect & Collect..!</p>
            </div>
            <form onSubmit={handleSubmit} className="row g-3 mt-5">
  <div className="col-md-12">
    <div className="card SignupCard border- border-0">
      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-6 ps-0">
            <div className="input-group mb-3 border border-2 px-3 py-2">
              <span className="input-group-text border border-0 text-white" style={{ background: "#4B0082", borderRadius: '5px' }}>@</span>
              <input type="text" className="form-control border border-0" style={{ fontSize: '1.1em' }} placeholder="First Name" aria-label="FirstName" aria-describedby="basic-addon1" name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6  pe-0">
            <div className="input-group mb-3 border border-2 px-3 py-2">
              <span className="input-group-text border border-0 text-white" style={{ background: "#4B0082", borderRadius: '5px' }}>@</span>
              <input type="text" className="form-control border border-0" style={{ fontSize: '1.1em' }} placeholder="Last Name" aria-label="LastName" aria-describedby="basic-addon1" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="input-group mb-3 border border-2 px-3 py-2">
            <span className="input-group-text border border-0 text-white" style={{ background: "#4B0082", borderRadius: '5px' }}>@</span>
            <input type="email" className="form-control border border-0" style={{ fontSize: '1.1em' }} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" name="email" value={formData.email} onChange={handleChange} />
            <span 
  className="input-group-text border border-0" 
  style={{ 
    color: "#4B0082", 
    borderRadius: '5px', 
    background: '#fff', 
    cursor: 'pointer', 
    display: displayCheck ? 'none' : 'block' 
  }} 
  data-bs-target="#emailOtpVerfication" 
  data-bs-toggle="modal" 
  onClick={() => {
    sendEmail(); 
    setModalShow(true);
  }}
>
  verify
</span>


            <span className="input-group-text border border-0 text-success" style={{ color: "#4B0082", borderRadius: '5px', background: '#fff', cursor: 'pointer', display: displayCheck ? 'block' : 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
            </svg>
            </span>
          </div>
          <div className="input-group mb-3 border border-2 px-3 py-2">
            <span className="input-group-text border border-0 text-white" style={{ background: "#4B0082", borderRadius: '5px' }}>@</span>
            <input type="text" className="form-control border border-0" style={{ fontSize: '1.1em' }} placeholder="Location" aria-label="Location" aria-describedby="basic-addon1" name="location" value={formData.location} onChange={handleChange} />
          </div>
          <div className="input-group mb-3 border border-2 px-3 py-2">
            <span className="input-group-text border border-0 text-white" style={{ background: "#4B0082", borderRadius: '5px' }}>@</span>
            <input type="text" className="form-control border border-0" style={{ fontSize: '1.1em' }} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" value={formData.username} onChange={handleChange} />
          </div>
          <div className="col-md-6 ps-0">
            <div className="input-group mb-3 border border-2 px-3 py-2">
              <span className="input-group-text border border-0 text-white" style={{ background: "#4B0082", borderRadius: '5px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-unlock" viewBox="0 0 16 16">
                  <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2M3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
                </svg>
              </span>
              <input type="password" className="form-control border border-0" style={{ fontSize: '1.1em' }} placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" name="password" value={formData.password} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6 pe-0">
            <div className="input-group mb-3 border border-2 px-3 py-2">
              <span className="input-group-text border border-0 text-white" style={{ background: "#4B0082", borderRadius: '5px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-unlock" viewBox="0 0 16 16">
                  <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2M3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
                </svg>
              </span>
              <input type="password" className="form-control border border-0" style={{ fontSize: '1.1em' }} placeholder="Reenter Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className='bottomDetails'>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <span>Accept Terms & Conditions. <Link to='/signup' style={{ textDecoration: 'none' }}>Click Here</Link></span>
          </div>
        </div>
        
        {displayCheck?
        <button type="submit" className="btn text-white px-4 py-3 mt-5 w-100" style={{ background: 'rgba(75, 0, 130, 1)' }}>Sign In</button>
      :
      <button type="button" className="btn text-white px-4 py-3 mt-5 w-100" style={{ background: 'rgba(75, 0, 130, 1)' }}>Verify Email Before Sign-In</button>
    }
        
        <div className='text-center mt-4'>
          <span>Are you new to Denaurlen? <Link to='/login' style={{ textDecoration: 'none' }}>Sign In</Link></span>
        </div>
        <div className='text-center' style={{ marginTop: '5em' }}>
          <a href='#' style={{ textDecoration: 'none' }}>Privacy Policy</a> <br />
          <span>   Denaurlen Copyright @ 2021, All Rights Reserved   </span>
        </div>
      </div>
    </div>
  </div>
</form>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 company__info">
        <div className="container">
            <h1 className="mt-5" style={{ color: 'rgba(75, 0, 130, 1)', fontFamily: 'Poppins, Arial, sans-serif', fontSize: 'clamp(20px, 4vw, 40px)', lineHeight: '67.5px', fontWeight: '600' }}>DENAURLEN</h1>
            <p className="lead mt-4" style={{ color: '#343434', fontFamily: 'Poppins, Arial, sans-serif', fontSize: 'clamp(12px, 4vw, 32px)', lineHeight: '45px', fontWeight: '500' }}>Every dream has a demand..!</p>
            <img src={loginsvg} className="img-fluid" alt="Login Svg" />
          </div>
        </div>
      </div>

      {/* Modals */}
      {modalShow && (
        <CustomModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          title="OTP VERIFICATION"
          description="Enter 4 digit one time password"
          otpVerification={true}
          onNext={handleEmailVerify}
          expectedOTP={expectedOTP}
          Fp={false}
        />
      )}

      {resetSuccessModalShow && (
        <CustomModal
          res="Your Email has been verified successfully."
          show={resetSuccessModalShow}
          onHide={() => setResetSuccessModalShow(false)}
          resetSuccess={true}
          Fp={false}
        />
      )}

        <CustomModal
          show={congoModalShow}
          lowertitle="Congratulations"
          lowerdescription="You have earned 5000 U-Coins"
          congrats={true}
          img = {congo}
          resetSuccess={true}
          Fp={false}
        />
    </div>
  );
};

export default Signup;
