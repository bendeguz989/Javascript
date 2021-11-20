import './App.css';
import {useState} from 'react';
import App2 from './App2';

function App3() {
  return (
    <div>
        <App2 cnev = "piros" dif = {2}/>
        <App2 cnev = "kek" dif = {5}/>
        <App2 cnev = "zöld" dif = {10}/>
    </div>
  );
}

export default App3;
