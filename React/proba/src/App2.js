import './App.css';
import Kiir from "./Kiir";
import {useState} from 'react';
function App() {
  const [tomb, setTomb]=useState(["Laci","Kati","Ákos","Lenke"]);
  const neve="Piri";
  let ujtomb=tomb.concat(neve);
  setTomb(ujtomb);
  return (
    <ul>
      {tomb.map((n,index)=>(<Kiir nev={n} key={index} />))}
    </ul>
  );
}

export default App;
