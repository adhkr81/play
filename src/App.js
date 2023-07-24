import { useState } from 'react';
import './App.css';
import { ChangeColor } from './utils/changeColor';

function App() {

 const {color, handleClick} = ChangeColor()


  return (
    <div className="App" style={{"backgroundColor": color}} onClick={handleClick}>

    </div>
  );
}

export default App;
