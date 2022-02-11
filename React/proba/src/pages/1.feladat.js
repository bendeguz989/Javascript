import {useState} from 'react';

function Feladat1() {
   const [a,setA]= useState(null)
   const [b,setB]= useState(null)
   const [c,setC]= useState(null)
   const [k,setK]= useState(null)
   const [t,setT]= useState(null)
    
  
  function terulet(){
    let aold=parseFloat(a);
    let bold=parseFloat(b);
    let cold=parseFloat(c);
    let s= (2*(aold+bold+cold));
    
    setT(s * (s - aold) * (s - bold * (s - cold)))
  }

  function kerulet(){
    let aold=parseFloat(a);
    let bold=parseFloat(b);
    let cold=parseFloat(c);

    setK(aold+bold+cold);
    
  }

    return (
      <div>
        <p>A oldal</p>
        <input
          type="number"
          onChange={e => (setA(e.target.value))}
    
        />
        <p>B oldal</p>
        <input
          type="number"
          onChange={e => (setB(e.target.value))}
        />
        <p>C oldal</p>
        <input
          type="number"
          onChange={e => (setC(e.target.value))}
        />
        
        <br/>
        <p/>
        <button className= "button" onClick={() =>terulet()}>Terület</button>
        <p>Terület: {t}</p>
        <br/>
        <button className= "button" onClick={() =>kerulet()}>Kerület</button>
        <p>Kerület: {k}</p>
      </div>
    
  );
}

export default Feladat1;