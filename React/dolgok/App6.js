import {nev,kor} from "./Valami";
import nem from "./Valami2";
import Kiir from "./Kiir";
import './App.css';


function App6(){
    const tomb = ["Kitti", "Géza", "Pali","Feri", "Peti"  ];
    return(
        <div>
            <ul>
                 {
                    tomb.map((elem, index)=><li><Kiir nev= {elem} key={index}/></li>)
                 }
            </ul>
        </div>
    )
}


export default App6;