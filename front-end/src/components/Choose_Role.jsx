import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const RoleSelection = ({ onSelectRole }) => {
  const handleRoleSelect = (role) => {
    onSelectRole(role);
  };

  return (
    <div>
      <h2>Select Your Role:</h2>
      <button onClick={() => handleRoleSelect('role1')}>Role 1</button>
      <button onClick={() => handleRoleSelect('role2')}>Role 2</button>
    </div>
  );
};

const App = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  return (
    <Router>
      <div>
        <Route path="/" exact>
          <RoleSelection onSelectRole={handleRoleSelection} />
        </Route>
        {selectedRole && (
          <div>
            <h2>Selected Role: {selectedRole}</h2>
            <ul>
              <li>
                <Link to={selectedRole === 'role1' ? '/url1' : '/url2'}>
                  Button 1
                </Link>
              </li>
              <li>
                <Link to={selectedRole === 'role1' ? '/url3' : '/url4'}>
                  Button 2
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
