import './App.css';   
import Home from './components/Home';
import Shortnerresult from './components/Shortnerresult';
import { useState } from 'react';




function App() {

  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">

          <div className="container">

          <Home setInputValue={setInputValue}/><br/><br/>
          <Shortnerresult inputValue={inputValue}/>

        </div>
      
    </div>
  );
}

export default App; 