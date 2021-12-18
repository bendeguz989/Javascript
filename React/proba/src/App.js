import './App.css';
import Kiir from "./Kiir";
import { useState } from 'react';
import Beker from "./Beker";
function App() {
  const [tomb, setTomb] = useState(["kitti", "Kati", "Peti"]);
  const [nev,setNev]=useState(null);
  const [cim,setCim]=useState(null);
  const [nem,setNem]=useState(null);
  return (
    <p>Heló</p>
  )
}

export default App;
