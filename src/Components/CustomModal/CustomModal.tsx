import React, { useState, useEffect,useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import '../../css/CustomModal.css';

function CustomModal(props: any) {
  const [otp, setOTP] = useState('');
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    if (!isNaN(value) && value !== '') {
      const newOTP = otp + value;
      setOTP(newOTP); // Update OTP with the concatenated string
      if (index < 3) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === '') {
      const newOTP = otp.slice(0, -1);
      setOTP(newOTP);
    }
  };
  

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };
  
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="px-4">
        <Card className="card p-0 m-0 border border-0">
          <Card.Body className="card-body modalCard">
            <div className="row g-3 mt-2" onSubmit={(e) => e.preventDefault()}>

            {props.congrats && (
               <div className="text-center">
                <span className="p-2" style={{ background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={props.img} className="img-fluid"  />
                </span>
                <h1 style={{ 
                   fontFamily: "Poppins, Arial, sans-serif", fontSize: "30px", lineHeight: "52.5px", fontWeight: "400" }}>
                {props.lowertitle}
              </h1>
              <p className="lead" style={{ color: "#343434", fontFamily: "Poppins, Arial, sans-serif", fontSize: "20px", opacity: "50%", lineHeight: "5px", fontWeight: "500" }}>
              {props.lowerdescription}
            </p>

               </div>

              )}
              {props.title && (
                <h1 style={{ color: "rgba(75, 0, 130, 1)", fontFamily: "Poppins, Arial, sans-serif", fontSize: "30px", lineHeight: "52.5px", fontWeight: "600" }}>
                  {props.title}
                </h1>
              )}
             
              {props.description && (
                <p className="lead" style={{ color: "#343434", fontFamily: "Poppins, Arial, sans-serif", fontSize: "20px", opacity: "50%", lineHeight: "5px", fontWeight: "500" }}>
                  {props.description}
                </p>
              )}

              

              {props.otpVerification ? (
               <div className="row">
               {Array.from({ length: 4 }).map((_, index) => (
                 <div key={index} className="col-md-3">
                   <input
                     type="text"
                     className="form-control otp-input"
                     style={{ height: "6vh", fontSize: "20px", textAlign: "center" }}
                     maxLength={1}
                     value={otp[index] || ''}
                     ref={(ref) => (inputRefs.current[index] = ref)}
                     onChange={(e) => handleInputChange(index, e.target.value)}
                     onKeyDown={(e) => {
                       if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
                         inputRefs.current[index - 1].focus();
                       }
                     }}
                   />
                 </div>
               ))}
             </div>
            
              ) : props.resetPassword ? (
                <>
                  {[1, 2].map((index) => (
                    <div key={index} className="col-md-12">
                      <div className="input-group border border-2 px-2 m-0">
                        <span
                          className="input-group-text border border-0 text-white"
                          id="basic-addon1"
                          style={{ background: "#4B0082", borderRadius: "5px" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-unlock"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2M3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
                          </svg>
                        </span>
                        <input
                          type="password"
                          className="form-control border border-0"
                          style={{ fontSize: "1.3em" }}
                          placeholder={index === 1 ? "Password" : "Confirm Password"}
                          aria-label={index === 1 ? "Password" : "Confirm Password"}
                        />
                      </div>
                    </div>
                  ))}
                </>
              ) : props.forgotPassword ? (
                <div className="col-md-12">
                  <div className="input-group mb-3 border border-2 p-2">
                    <span className="input-group-text border border-0 text-white me-3" style={{ background: "#4B0082", borderRadius: "5px" }}>@</span>
                    <input type="email" className="form-control border border-0 p-0 m-0" style={{ fontSize: "1.3em" }} placeholder="Email" aria-label="Email" />
                  </div>
                </div>
              ) : (
                <>
                 {props.congrats ? null :
                <>
                  <div className="m-0 p-0 col-md-12 text-center d-flex justify-content-center">
                    <span className="p-2" style={{ background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', width: 'fit-content', border: '5px solid rgb(75, 0, 130)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16" style={{ backgroundColor: "rgb(75, 0, 130)", borderRadius: "50%", padding: '30px' }}>
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" style={{ color: "rgb(255, 255, 255)" }}></path>
                      </svg>
                    </span>
                  </div>
                </>
              }
                  
                  <div className="col-md-12 text-center mt-3">
                    <p
                      className="lead"
                      style={{
                        fontFamily: "Poppins, Arial, sans-serif",
                        fontSize: "30px",
                        fontWeight: "500",
                      }}
                    >
                      {props.res}
                    </p>
                  </div>
                </>
              )}

              {props.resetSuccess ? null :
                <>
                  <div className="col-md-6">
                    <button className="btn px-4 py-3 mt-2 w-100" style={{ background: "#F5F5F5" }} onClick={props.onHide}>
                      Cancel
                    </button>
                  </div>
                  <div className="col-md-6">
                    {props.expectedOTP ? 
                    <button 
                    className="text-white px-4 py-3 mt-2 w-100" 
                    style={{ 
                      backgroundColor: "rgba(75, 0, 130, 1)",
                      cursor: otp === props.expectedOTP ? 'pointer' : 'not-allowed'
                    }}
                    onClick={otp === props.expectedOTP ? props.onNext : undefined}
                    disabled={otp !== props.expectedOTP}
                  >
                    Submit
                  </button>
                   : 
                   <button 
                    className="text-white px-4 py-3 mt-2 w-100" 
                    style={{ 
                      backgroundColor: "rgba(75, 0, 130, 1)",
                      cursor:  'not-allowed'
                    }}
                    disabled={otp !== props.expectedOTP}
                  >
                    Submit
                  </button>}                  
                  </div>
                </>
              }

            </div>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;
