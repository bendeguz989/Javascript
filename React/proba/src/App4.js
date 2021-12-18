import './App.css';
import Kiir from "./Kiir";
import {useState} from 'react';
function App() {
  const [tomb, setTomb]=useState(["Laci","Kati","Ákos","Lenke"]);
  const [neve, setNeve]=useState(null);
  
  
  return (
    <div>
      <label>Név:</label>
      <input
      type="text"
      onChange={(e)=>(setNeve(e.target.value))}
      >
      </input>
      <button onClick={()=>{
        setTomb(tomb.concat(neve));
      }
      }>OK</button>
    <ul>
      {tomb.map((n,index)=>(<Kiir nev={n} key={index} />))}
    </ul>
    </div>
    
  );
}

export default App;
