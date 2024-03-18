import {  useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./register.css";

function Register() {
  
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    async function save(event) {
        event.preventDefault();
        if (!employeename || !email || !password || !role) {
          alert("All fields are required");
          return;
      }
        try {
          const response = await axios.post("http://localhost:8085/api/v1/employee/save", {
              employeename: employeename,
              email: email,
              password: password,
              role: role,
          });
          console.log(response.data);
          if (response.data === "Email already exists") {
            alert("Email already exists");
        } else {
            alert("Employee Registration Successful");
            navigate('/Login');
          }
      } catch (error) {
          console.error(error);
          alert("An error occurred while registering the employee. Please try again.");
      }
      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>Registation</h1>
    
    <form>
        <div class="form-group">
          <label>Employee name</label>
          <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
          
          value={employeename}
          onChange={(event) => {
            setEmployeename(event.target.value);
          }}
          />

        </div>

        <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>

        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
          <div className="form-group">
                            <label>Role</label>
                            <select className="form-control" value={role} onChange={(event) => setRole(event.target.value)}>
                                <option value="">Select Role</option>
                                <option value="Admin">Admin</option>
                                <option value="Tester">Tester</option>
                                <option value="DevOps">DevOps</option>
                                <option value="Developer">Developer</option>
                            </select>
                        </div>
        <div className="btn-group">
        <button type="submit" class="btn btn-primary mt-4" onClick={save}>Register</button>
        <button className="btn btn-primary" class="btn btn-primary mt-4" onClick={() => navigate('/Login')}>Login</button>
        </div>
       
      </form>
    </div>
    </div>
     </div>
    );
  }
  
  export default Register;