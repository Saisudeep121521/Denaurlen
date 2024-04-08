import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/getStarted.css'; 
import group23 from '../../images/GetStarted/Group 23.svg';
import group24 from '../../images/GetStarted/Group 24.svg';
import group37 from '../../images/GetStarted/Group 37.svg';
import btmbg from '../../images/GetStarted/Vector 3.svg';

const GetStarted: React.FC = () => {
    return (
        <div className="d-flex text-center height">
          <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main className="px-3">
              <h1 className="mt-5" style={{ color: 'rgba(75, 0, 130, 1)', fontFamily: 'Poppins, Arial, sans-serif', fontSize: '45px', lineHeight: '67.5px', fontWeight: '600' }}>Welcome to DENAURLEN</h1>
              <p className="lead mt-4" style={{ color: 'rgba(52, 52, 52, 1)', fontFamily: 'Poppins, Arial, sans-serif', opacity: '50%', fontSize: '30px', lineHeight: '45px', fontWeight: '500' }}>Gamify with Smart Savvy Social Network</p>
              <div className="row" style={{ marginTop: '5rem' }}>
                <div className="col-12 col-lg-4 col-md-4 col-sm-12 text-center">
                  <div className="container d-flex justify-content-center align-items-center">
                  <div className="numberBg">1</div>
                  <span className="activityText">Activity to infinity</span>
                  </div>
                  <img src={group23} className="img-fluid mt-5" alt="..."></img>
                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-12  text-center">
                <div className="container d-flex justify-content-center align-items-center">
                  <div className="numberBg">2</div>
                  <span className="activityText">One Platform Multiple Persona</span>
                </div>
                <img src={group24} className="img-fluid mt-5" alt="..."></img>
                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="container d-flex justify-content-center align-items-center">
                  <div className="numberBg">3</div>
                  <span className="activityText">Real you, rewards for you!</span>
                  </div>
                  <img src={group37} className="img-fluid mt-5" alt="..."></img>
                </div>
              </div>
            </main>
            <footer className="text-white-50" style={{marginTop:'8em'}}>
              <img src={btmbg} className="img-fluid" style={{ position: 'absolute', bottom: 0, left: 0,width:'100%', zIndex: '-9' }} alt="background" />
              <Link to="/login" className="btn text-white px-5 py-3" style={{ background: 'rgba(75, 0, 130, 1)',fontSize:'20px' }}>Get Started</Link>
            </footer>
          </div>
        </div>
      );
}

export default GetStarted;
