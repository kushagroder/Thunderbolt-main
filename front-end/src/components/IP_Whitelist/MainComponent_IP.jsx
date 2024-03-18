import React, { useState } from 'react';
import EnvironmentSelectionPage from './EnvironmentSelection_IP';
import IPAddressForm from './IP_Whitelist';

function MainComponent() {
  const [environment, setEnvironment] = useState(null);

  return (
    <div>
      {!environment && <EnvironmentSelectionPage setEnvironment={setEnvironment} />}
      {environment && <IPAddressForm environment={environment} />}
    </div>
  );
}

export default MainComponent;