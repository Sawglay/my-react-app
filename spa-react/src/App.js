import './App.css';
import QAImage from './assets/image.jpg';
// import Image from './assets/image.jpg';

function App() {
  
  let name = "Hlaing Min Han";
  
  return (
    <div>
      <h1>Hello {name}</h1>
      {/* <img src="/image.png" alt="" /> */}
      <img src={QAImage}/>
    </div>
  );
}

export default App;
