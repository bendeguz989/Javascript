import './App.css';
import Kiir from "./Kiir";
import { useState } from 'react';
import Beker from "./Beker";
function App() {
  function Ember(neve,cime,neme){
    this.neve=neve;
    this.cime=cime;
    this.neme=neme;
  }
  
  const e1=new Ember("Kitt","Nyíregyháza","lány")
  const e2=new Ember("Kati","Nyíregyháza","lány")
  const [tomb, setTomb] = useState([e1,e2]);
  const [nev,setNev]=useState(null);
  const [cim,setCim]=useState(null);
  const [nem,setNem]=useState(null);
  return (
    <>
      <Beker fg={setNev} adat="Név:" tipus="text" szin="piros"/>
      <Beker fg={setCim} adat="Cím:" tipus="text" szin="kek"/>
      <Beker fg={setNem} adat="Nem:" tipus="text" szin="piros"/>
      <button onClick={
        () => {
          setTomb(tomb.concat(new Ember(nev,cim,nem)));
        }
      }>OK</button>
      <ul>
        {tomb.map((n, index) => (<Kiir nev={n.neve} cim={n.cime} nem={n.neme} key={index} />))}
      </ul>
    </>
  )
}

export default App;
