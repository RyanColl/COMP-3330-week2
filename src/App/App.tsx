import Calculator from '../components/Calculator/Calculator';
import './App.css';
import React, { useState } from 'react';

function App() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [value, setValue] = React.useState(0)
  const [current, setCurrent] = React.useState([0])
  const [inDecimalMode, putInDecimalMode] = useState(false)
  const calcData = {
    conversions: ['AC', '+/-', '%'],
    numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'],
    operators: ['÷', 'x', '-', '+', '=']
  }
  
  return (
    <div style={{width, height}} className="App">
      {/* @ts-ignore */}
      <Calculator 
      value={value} 
      setValue={setValue} 
      current={current}
      inDecimalMode={inDecimalMode}
      putInDecimalMode={putInDecimalMode}
      setCurrent={setCurrent}
      calcData={calcData} 
      />
    </div>
  );
}

export default App;
