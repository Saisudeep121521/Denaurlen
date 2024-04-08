import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted/GetStarted';
import Login from './pages/Login/index';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store
import Signup from './pages/Signup/Signup';
import Categories from './pages/Categories/Categories';
import Dashboard from './pages/Dashboard/Dashboard';
import Suggestions from './pages/Suggestions/Suggestions';
import Form from './pages/Form/Form';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/categories" element={ <Categories/>} />
            <Route path="/dashboard" element={ <Dashboard/>} />
            <Route path="/suggestions" element={ <Suggestions/>} />
            <Route path="/form" element={ <Form/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
