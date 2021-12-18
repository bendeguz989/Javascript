import './App.css';
import Kiir from './Kiir';
import react, {useState} from 'react';

function App() {
  const [nevek, setnevek]=useState(["Kati" , "Feri", "Peti"]);
  return (
    <div className="App">
    <label for="n">Név:</label>
    <input type="text" name="n" id="ne" />
    
   
    <button onClick={()=>{
        const neve=document.getElementById("ne").value;
        let ns=nevek.concat(neve);
        setnevek(ns);
    }}>OK</button>
      <table>
      <tbody>
        {nevek.map((n,index)=><Kiir nev={n} key={index} />)}
        
        </tbody>
    </table>
      
    </div>
  );
}

export default App;