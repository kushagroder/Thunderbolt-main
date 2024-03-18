import React from 'react';

function EnvironmentSelectionPage({ setEnvironment }) {
  const handleEnvironmentSelection = (environment) => {
    setEnvironment(environment);
  };

  return (
    <div>
      <h1>Select Environment</h1>
      <button onClick={() => handleEnvironmentSelection('BF1')}>BF1</button>
      <button onClick={() => handleEnvironmentSelection('BF2')}>BF2</button>
      <button onClick={() => handleEnvironmentSelection('BF3')}>BF3</button>
      <button onClick={() => handleEnvironmentSelection('BF4')}>BF4</button>
    </div>
  );
}

export default EnvironmentSelectionPage;
