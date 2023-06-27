import React, { useState } from 'react';
import './App.css';
import Capsules from './Components/capsules/Capsules';
import Launches from './Components/launches/Launches';

function App() {
  const [view, setView] = useState('view1');
  const toggleView = () => {
    setView(prevView => (prevView === 'view1' ? 'view2' : 'view1'));
  };
  return (
    <div className="btnDiv">
    <button onClick={toggleView}>Toggle View</button>
    {view === 'view1' ? (
      <div>
        <h1>View 1</h1>
        <Launches />
      </div>
    ) : (
      <div>
        <h1>View 2</h1>
        <Capsules />
      </div>
    )}
  </div>
);
}
export default App;
