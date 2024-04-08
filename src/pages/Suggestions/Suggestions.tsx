import React, { useState } from 'react';
import wallet from "../../images/Categories/wallet.svg";
import frame from "../../images/Suggestions/Frame.png";
import Ellipse31 from "../../images/Suggestions/Ellipse 31.png";
import Ellipse32 from "../../images/Suggestions/Ellipse 32.png";
import Ellipse33 from "../../images/Suggestions/Ellipse 33.png";
import Ellipse34 from "../../images/Suggestions/Ellipse 34.png";
import Ellipse35 from "../../images/Suggestions/Ellipse 35.png";
import Ellipse36 from "../../images/Suggestions/Ellipse 36.png";
import Ellipse37 from "../../images/Suggestions/Ellipse 37.png";
import Ellipse38 from "../../images/Suggestions/Ellipse 38.png";
import Ellipse39 from "../../images/Suggestions/Ellipse 39.png";
import Ellipse40 from "../../images/Suggestions/Ellipse 40.png";
import Ellipse41 from "../../images/Suggestions/Ellipse 41.png";
import { Link } from 'react-router-dom';


const Suggestions: React.FC = () => {
    const [followingMap, setFollowingMap] = useState({});
    
    const columnData = [
        {
            image: Ellipse31,
            username: 'emma_watson',
            fullName: 'Emma Watson',
        },
        {
            image: Ellipse32,
            username: 'pooja_hegde',
            fullName: 'Pooja Hegde',
        },
        {
            image: Ellipse33,
            username: 'eminem',
            fullName: 'Marshal Mathers',
        },
        {
            image: Ellipse34,
            username: 'akshaykumar',
            fullName: 'Akshay Kumar',
        },
        {
            image: Ellipse35,
            username: 'ava_32',
            fullName: 'Ava',
        },
        {
            image: Ellipse36,
            username: 'oliver_54',
            fullName: 'Rupa Rajeshan',
        },
        {
            image: Ellipse37,
            username: 'rupa_rajeshan',
            fullName: 'Ganesh Verma',
        },
        {
            image: Ellipse38,
            username: 'gany_varma',
            fullName: 'Kiran Katore',
        },
        {
            image: Ellipse39,
            username: 'kiran_katore',
            fullName: 'Zeel Fernandez',
        },
    ];

    // Function to toggle follow state
    const toggleFollow = (username: string) => {
        setFollowingMap(prevState => ({
            ...prevState,
            [username]: !prevState[username]
        }));
    };

    return (
        <div className='container-fluid' style={{ backgroundColor: '#fafafa' }}>
             <nav className="navbar navbar-expand-lg bg-white">
              <div className="container-fluid">
                <a className="navbar-brand" style={{ color: 'rgba(75, 0, 130, 1)', fontFamily: 'Poppins, Arial, sans-serif', fontSize: '30px', lineHeight: '67.5px', fontWeight: '600', textTransform: 'uppercase' }}>Denaurlen</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <span className="nav-link lead ms-5" style={{ color: "#343434", fontFamily: "Poppins, Arial, sans-serif", fontSize: "20px", lineHeight: "45px", fontWeight: "500" }}>Suggestions for you</span>
                    </li>
                  </ul>
                  <div className="navbar-text text-white px-4 d-flex justify-content-center align-items-center" style={{ background: '#4B0082', borderRadius: '30px' }}>
                    <img src={wallet} className="img-fluid" alt="Wallet" />
                    <span className='fw-bold ms-1' style={{ fontSize: '18px' }}>6000</span>
                  </div>
                </div>
              </div>
            </nav>
            <div className="d-flex text-center">
                <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <main className="px-3 ">
                        <div className="row mt-4 ">
                            <div className="col-12 col-md-6 col-lg-6 container">
                                <div className="container mt-5" style={{ width: "35rem" }}>
                                <img src={frame} className="img-fluid" alt="Frame" />
                                <p className="mt-5 text-start" style={{fontSize:'30px',lineHeight:'36px'}}>“Good company in a journey makes the way seems shorter.”</p>
                                <p className="mt-5 fw-600 text-end" style={{fontSize:'30px',lineHeight:'36px'}}>- Izzak Walton</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 bg-white d-flex justify-content-center">
                                <div className="row mt-4" style={{ width: '45rem' }}>
                                    {/* Map over columnData array to generate columns */}
                                    {columnData.map((data, index) => (
                                        <div key={index} className="my-3 col-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                            <div className="d-flex">
                                                <img src={data.image} className="img-fluid" style={{ width: "60px", height: "60px", borderRadius: '50px' }} alt={`Ellipse ${index}`} />
                                                <div className="d-grid align-content-center ms-4 text-start">
                                                    <span>{data.username}</span>
                                                    <span style={{ color: 'grey' }}>{data.fullName}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-self-center">
                                                <button 
                                                    type="button" 
                                                    className="btn btn-sm px-4 py-1" 
                                                    style={{ background: followingMap[data.username]?"":'rgba(75, 0, 130, 1)', fontSize: '20px', borderRadius: '7px',color:followingMap[data.username]?'rgba(75, 0, 130, 1)':'white',border:followingMap[data.username]?'2px solid rgba(75, 0, 130, 1)':'' }}
                                                    onClick={() => toggleFollow(data.username)}
                                                >
                                                    {followingMap[data.username] ? 'Following' : 'Follow'}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-12 mt-5 bg-white d-flex justify-content-center">
                                <Link to="/login" type="button" className="btn text-white border border-0 px-5 py-2" style={{ background: 'rgba(75, 0, 130, 1)', fontSize: '20px', borderRadius: '7px' }}>Next</Link>
                            </div>
                            <div className="col-12 mt-3 bg-white d-flex justify-content-center">
                            <Link to="/login" type="button" className="btn border border-0 px-5 py-2" style={{ color: 'rgba(75, 0, 130, 1)', fontSize: '20px' }}>Skip</Link>
                            </div>
                                </div>
                            </div>
                            
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Suggestions;
