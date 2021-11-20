import logo from './logo.svg';
import './App.css';
import Kiir from './Kiir';
import {useState} from 'react';

function App() {

  const [tomb, hozzaad] = useState( ["Kati","Pisti", "Atti", "Évi"]);
  const [nev,setnev] = useState("");
  return (
    <div>
      
      <label>Adj meg egy nevet:
        <input type="text" key="nev" onChange={(e) => setnev(e.target.value)}/>
      </label>

      <button onClick={ () =>{
        const masik = tomb.concat(nev);
        hozzaad(masik);
      }}>OK</button>

        <table>
          <tbody>
              {
                tomb.map((n,index) => <Kiir nev={n} key = {index} />)
              }
          </tbody>  
        </table>
    </div>
  );
}

export default App;
