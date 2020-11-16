import React from 'react';
import {Card} from './components/Card';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card />
    </div>
  );
}

export default App;
