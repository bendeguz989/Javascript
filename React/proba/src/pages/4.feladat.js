import {useState} from 'react';
function Feladat4() {

  const [nev, setNev] = useState(null);
  const [kor, setKor] = useState(null);
  const [emberek, setEmberek] = [];

  const kuld = () => {
    setEmberek(emberek.push({ nev : nev, kor : kor}));
  }
  return (
    <div>
      <label>Név:</label>
      <input
          type="text"
          id="nev"
          onChange={e => (setNev(e.target.value))}
        />

      <label>Kor:</label>
      <input
          type="number"
          id="kor"
          onChange={e => (setKor(e.target.value))}
        />
      <button className= "button" onClick={() =>kuld()}>Felvesz</button>
        
      
          <table>
            <tbody>
              <tr>
                <th>Név: </th>
                <th>Kor: </th>
              </tr>
              
              {emberek.map((item, index) =>(
                <tr>
                  <td>{item.nev}</td>
                  <td>{item.kor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        
    </div>
    
  );
}

export default Feladat4;