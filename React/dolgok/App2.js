import './App.css';
import {useState} from 'react';

function App2(props) {
    const [szam, setszam] = useState(0);
  return (
    <div className={props.cnev} >
        <button onClick={() => setszam(0)}>RESET</button>
        <br/>
        
        <button onClick={() => setszam(szam+props.dif)}>+</button>

        <button onClick={() => setszam(szam-props.dif)}>-</button> 


        <p>{szam}</p>
    </div>
  );
}

export default App2;
