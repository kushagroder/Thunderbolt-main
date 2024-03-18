// Login.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { BASE_URL } from '../../../constants.js';
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        if (!email || !password) {
            alert("All fields are required");
            return;
        }
        try {
            const response = await axios.post(`${BASE_URL}/employee/login`, {
                email: email,
                password: password,
            });
        
            console.log(response.data);
            
            if (response.data.message === "Email not exits") {
                alert("Email not exits");
            } else if (response.data.message === "Login Success") {
                navigate('/home');
            } else {
                alert("Incorrect Email and Password not match");
            }
        } catch (error) {
            console.error(error);
        }
        
    }

    return (
        <div className="container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="btn-group">
                            <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
                            <button className="btn btn-primary" onClick={() => navigate('/')}>Sign up</button>
                        </div>
            </form>
        </div>
    );
}

export default Login;
