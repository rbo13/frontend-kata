import React, { useState } from 'react';
import { Button } from 'react-rainbow-components';

function App() {
  return (
    <Button label="Test" variant="brand" onClick={() => {
      console.log("Hello...")
    }}/>
  );
}

export default App
