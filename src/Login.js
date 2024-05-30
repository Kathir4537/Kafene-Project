import React, { useState } from 'react';
import './App.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === password && username !== '') {
            onLogin(username);
        } else {
            alert('Please Enter Valid Credentials');
        }
    };

    return (
        <div>
            <header className="header">
                <div className="login-header">
                    <div className="left-head">
                        <img
                            src="	https://edu-web-fundamentals.web.app/static/media/logo.58169365.png"
                            alt="head-img" />
                        <div className="head">Kafene</div>
                    </div>
                    <div className="head-list">
                        <a>Orders</a>
                        <a>Products</a>
                        <a>Users</a>
                    </div>
                </div>
            </header>
            <section className="login-page">
                <div className="login-containor">
                    <div className="login-head">Sign In</div>
                    <form action="">
                        <div className="login-input-containor">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login