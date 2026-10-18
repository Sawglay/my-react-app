import './App.css';
import { useState } from 'react';

function App() {
  
  // let name = "Hlaing Min Han";
  let [name, setName] = useState("Hlaing Min Han"); //[getter, setterFun]

  let changeName = () => {
    // name = "Aung Aung"
    setName("Aung Aung")
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
