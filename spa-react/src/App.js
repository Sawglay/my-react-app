import './App.css';
import { useState } from 'react';

function App() {
  
  // let name = "Hlaing Min Han";
  let [name, setName] = useState("Hlaing Min Han"); //[getter, setterFun]
  let [posts, setPosts] = useState([
    {
      id : 1,
      title : 'First Post'
    },
     {
      id : 2,
      title : 'Second Post'
    },
     {
      id : 3,
      title : 'Third Post'
    },
  ])

  let changeName = () => {
    // name = "Aung Aung"
    setName("Aung Aung")
    console.log(name);
    
  }
  return (
    <div className = "app">
      <h1>Hello {name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
