import './App.css';
import Kiir from "./Kiir";
import { useState } from 'react';
import Beker from "./Beker";
function App() {
  function Auto(marka,motor,benzin){
    this.marka=marka;
    this.motor=motor;
    this.benzin=benzin;
    this.fogyaszt=function(){
      let f = 0;
      if(benzin){
        if(motor>1500){
          f=7;
        }
        else{
          f=6;
        }
      }
      else{
        if(motor>1500){
          f=6
        }
        else{
          f=5
        }
      }
      return f;
    }
    
  }
  
  const e1=new Auto("HONDA","1555",true);
  const e2=new Auto("BMW","3000",false);
  const [tomb, setTomb] = useState([e1,e2]);
  const [marka,setMarka]=useState(null);
  const [motor,setMotor]=useState(null);
  const [benzin,setBenzin]=useState(null);
  return (
    <>
      <Beker fg={setMarka} adat="Márka" tipus="text" szin="piros"/>
      <Beker fg={setMotor} adat="Motor" tipus="number" szin="kek"/>
      <Beker fg={setBenzin} adat="Benzin" tipus="checkbox" szin="piros"/>
      <button onClick={
        () => {
          setTomb(tomb.concat(new Auto(marka,motor,benzin)));
        }
      }>OK</button>
      <table>
        {tomb.map((n, index) => (<Kiir auto={n} key={index} />))}
      </table>
    </>
  )
}

export default App;
