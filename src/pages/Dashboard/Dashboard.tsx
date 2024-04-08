import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import wallet from "../../images/Categories/wallet.svg";
import "../../css/Categories.css";
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const storedUsername = sessionStorage.getItem('username');
    
    const handleLogout = () => {
        sessionStorage.removeItem('username');
    };

    // Conditionally render logout button if username is stored
    const renderLogoutButton = () => {
        if (storedUsername) {
            return (
                <Link to="/login" className="btn text-white px-5 py-3 mt-5" style={{ background: 'rgba(75, 0, 130, 1)', fontSize:'20px' }} onClick={handleLogout}>Logout</Link>
            );
        }
    };

    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: 'rgba(75, 0, 130, 1)', fontFamily: 'Poppins, Arial, sans-serif', fontSize: '30px', lineHeight: '67.5px', fontWeight: '600', textTransform: 'uppercase' }}>Denaurlen</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link lead ms-5" style={{ color: "#343434", fontFamily: "Poppins, Arial, sans-serif", fontSize: "20px", lineHeight: "45px", fontWeight: "500" }}>Dashboard</span>
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
                    <main className="px-3 container-fluid">
                        <div className="pt-3 pb-1" style={{ backgroundColor: '#EDD3FF', color: "#343434", fontFamily: "Poppins, Arial, sans-serif", fontSize: "30px", fontWeight: "500",textTransform:'uppercase',wordSpacing:'10px'}}> <p>Hello <span style={{color: 'rgba(75, 0, 130, 1)'}}>{storedUsername}</span></p></div>
                        {renderLogoutButton()}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
