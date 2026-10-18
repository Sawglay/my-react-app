import './App.css';
import { useState } from 'react';

function App() {
  
  let name = "Hlaing Min Han";
  let changeName = () => {
    name = "Aung Aung"
    console.log(name);
    
  }
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
