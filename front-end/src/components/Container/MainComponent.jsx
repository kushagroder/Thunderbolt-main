import React, { useState } from 'react';
import EnvironmentSelectionPage from './EnvironmentSelectionPage';
import Manage_Container from './Manage_container';

function MainComponent() {
  const [environment, setEnvironment] = useState(null);

  return (
    <div>
      {!environment && <EnvironmentSelectionPage setEnvironment={setEnvironment} />}
      {environment && <Manage_Container environment={environment} />}
    </div>
  );
}

export default MainComponent;
