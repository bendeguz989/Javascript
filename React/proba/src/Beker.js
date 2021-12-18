import './st.css';
import { useState ,useEffect} from 'react';
function Beker(props){
  const [adat,setAdat]=useState(null);
  useEffect(
    ()=>props.fg(adat),[adat]
  )
    return(
    <label className={props.szin}>{props.adat}:
        <input
      type={props.tipus}
      onChange={(e)=>(setAdat(e.target.value))}
      />
    </label>
    )
}
export default Beker;