import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import loginsvg from '../../images/Login/loginsvg.png';
import CustomModal from '../../Components/CustomModal/CustomModal';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeUsername } from "../../redux/actions/authActions"; // Import storeUsername action creator
import { User } from './types'; // Import User type

interface LoginProps {
  usersData: User[];
}

const Login: React.FC<LoginProps> = ({ usersData }) => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [otpModalShow, setOtpModalShow] = React.useState(false);
  const [resetPasswordModalShow, setResetPasswordModalShow] = React.useState(false);
  const [resetSuccessModalShow, setResetSuccessModalShow] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Correct import of useDispatch

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/getUsers');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = usersData.find((u) => u.username === username);

    if (!user || user.password !== password) {
      setError("Invalid username or password");
    } else {
      console.log("Login successful");
      setError("");
      sessionStorage.setItem('username', username);
      dispatch(storeUsername(username)); 
      navigate("/dashboard");
    }

    setUsername("");
    setPassword("");
  };

  const handleModalNext = () => {
    setModalShow(false);
    setOtpModalShow(true);
  };

  const handleOtpModalNext = () => {
    setOtpModalShow(false);
    setResetPasswordModalShow(true);
  };

  const handleResetModalNext = () => {
    setResetPasswordModalShow(false);
    setResetSuccessModalShow(true);
  };

  const resetSuccessModalNext = () => {
    setResetSuccessModalShow(false);
  };
  return (
    <div className="container-fluid">
      <div className="row main-content">
        <div className="col-md-6 login_form">
          <div className="container">
            <div className="leftTitle">
              <h1
                className="mt-5"
                style={{
                  color: "rgba(75, 0, 130, 1)",
                  fontFamily: "Poppins, Arial, sans-serif",
                  fontSize: "40px",
                  lineHeight: "52.5px",
                  fontWeight: "600",
                }}
              >
                Sign In
              </h1>
              <p
                className="lead"
                style={{
                  color: "#343434",
                  fontFamily: "Poppins, Arial, sans-serif",
                  fontSize: "20px",
                  opacity: "50%",
                  lineHeight: "45px",
                  fontWeight: "500",
                }}
              >
                Connect & Collect..!
              </p>
            </div>
            <form className="row g-3 mt-5"
            onSubmit={(e) => {
              e.preventDefault(); 
              handleLogin(e); 
            }}>
  <div className="col-md-12">
    <div className="card loginCard border border-0">
      <div className="card-body">
        <div className="input-group mb-3 border border-2 p-3" style={{ maxWidth: "600px" }}>
          <span className="input-group-text border border-0 text-white" id="basic-addon1" style={{ background: "#4B0082", borderRadius: "5px" }}>@</span>
          <input
            type="text"
            className="form-control border border-0"
            style={{ fontSize: "1.3em" }}
            placeholder="Username"
            aria-label="Username"
            value={username}
                          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group mb-3 border border-2 p-3" style={{ maxWidth: "500px" }}>
          <span className="input-group-text border border-0 text-white" id="basic-addon1" style={{ background: "#4B0082", borderRadius: "5px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-unlock" viewBox="0 0 16 16">
              <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2M3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
            </svg>
          </span>
          <input
            type="password"
            className="form-control border border-0"
            style={{ fontSize: "1.3em" }}
            placeholder="Password"
            aria-label="Password"
            value={password}
                          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="bottomDetails">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">Remember Me</label>
          </div>
          <div className="form-check text-end">
          <a href="#" onClick={() => setModalShow(true)}>
          Forgot Password ?
      </a>

             </div>
        </div>
        <button className="btn text-white px-4 py-3 mt-5 w-100" style={{ background: "rgba(75, 0, 130, 1)" }}>Sign In</button>
        <div className="text-center w-100 my-4"><span>OR</span></div>
        <button className="btn px-4 py-3 w-100 border border-1">
          <svg
            className="me-4"
            style={{ width: "1.3em" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 326667 333333"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4" />
            <path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853" />
            <path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04" />
            <path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335" />
          </svg>
          Sign In With Google
        </button>
        <div className="text-center mt-4">
          <span>
            Are you new to Denaurlen? <Link to="/signup" style={{ textDecoration: "none" }}>Sign up</Link>
          </span>
        </div>
        <div className="text-center" style={{ marginTop: "8em" }}>
          <a href="#" style={{ textDecoration: "none" }}>Privacy Policy</a> <br />
          <span> Denaurlen Copyright @ 2021, All Rights Reserved </span>
        </div>
      </div>
    </div>
  </div>
</form>
{error && <p>{error}</p>}
          </div>
        </div>
        <div className="col-md-6 company__info" style={{ padding: "0px 4rem" }}>
          <div className="container">
            <h1
              className="mt-5"
              style={{
                color: "rgba(75, 0, 130, 1)",
                fontFamily: "Poppins, Arial, sans-serif",
                fontSize: "clamp(20px, 4vw, 40px)",
                lineHeight: "67.5px",
                fontWeight: "600",
              }}
            >
              DENAURLEN
            </h1>
            <p
              className="lead mt-4"
              style={{
                color: "#343434",
                fontFamily: "Poppins, Arial, sans-serif",
                fontSize: "clamp(12px, 4vw, 32px)",
                lineHeight: "45px",
                fontWeight: "500",
              }}
            >
              Every dream has a demand..!
            </p>
            <img src={loginsvg} className="img-fluid" alt="Login Svg" />
          </div>
        </div>
      </div>

      {modalShow && (
        <CustomModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          title="FORGOT PASSWORD?"
          description="No worries, we've got you covered!"
          forgotPassword={true}
          onNext={handleModalNext}
          Fp={true}
        />
      )}

      {otpModalShow && (
        <CustomModal
          show={otpModalShow}
          onHide={() => setOtpModalShow(false)}
          title="OTP VERIFICATION?"
          description="Enter 4 digit one time password"
          otpVerification={true}
          onNext={handleOtpModalNext}
          Fp={true}
        />
      )}

      {resetPasswordModalShow && (
        <CustomModal
          show={resetPasswordModalShow}
          onHide={() => setResetPasswordModalShow(false)}
          title="Create new PASSWORD"
          resetPassword={true}
          onNext={handleResetModalNext}
          Fp={true}
        />
      )}

      {resetSuccessModalShow && (
        <CustomModal
          show={resetSuccessModalShow}
          res="Your password has been changed successfully."
          onHide={() => setResetSuccessModalShow(false)}
          onNext={resetSuccessModalNext}
          resetSuccess={true}
          Fp={true}
        />
      )}
    </div>
  );
}

export default Login;
