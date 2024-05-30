import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Orders from './Orders';
import Products from './Products';
import Users from './Users';

const Dashboard = ({ onLogout }) => {
    return (
        <div>
        <header className="header">
        <div className="login-header">
            <div className="left-head">
                <img src="	https://edu-web-fundamentals.web.app/static/media/logo.58169365.png" alt="head-img" />
                <div className="head">Kafene</div>
            </div>
            <div className="head-list">
                <a><Link to='/'>Orders</Link></a>
                <a><Link to='/products'>Products</Link></a>
                <a><Link to='/users'>Users</Link></a>
            </div>
        </div>
        <div className="logout-containor">
            <p onClick={onLogout}>Logout</p>
        </div>
    </header>
        
        <Routes>
        <Route exact path='/' element={<Orders />} />
        <Route path='products' element={<Products />} />
        <Route path='users' element={<Users />} />
        </Routes>
      </div>
      
    );
  };

export default Dashboard