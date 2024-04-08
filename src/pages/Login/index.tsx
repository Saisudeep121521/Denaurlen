import React, { useState, useEffect } from 'react';
import Login from './Login';

function Logindata() {
  const [users, setUsers] = useState([]);

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

  return (
    <Login usersData={users} />
  );
}

export default Logindata;
