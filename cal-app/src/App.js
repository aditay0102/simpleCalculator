
import React, { useState} from 'react';

function App(){
  const [calc, setCal] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/','*','+','-','.'];

  const updatecal = value=>{
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return; 
    }

    setCal(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }

  const createDigits = ()=>{
    const digits = [];
      for(let i = 1;i<10;i++){
        digits.push(
          <button onClick={() =>updatecal(i.toString())} key={i}>
            {i}
          </button>
        )
      }

      return digits
  }


  const calculate = () =>{ 
    setCal(eval(calc).toString());
  }

  const del= () =>{
    if(calc === ''){
      return;
    }

    const value= calc.slice(0,-1);
    setCal(value); 
  }

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          {result ? <span>{result}</span>: ''}
          {calc || "0"}
        </div>

        <div className="operators">
            <button  onClick={ () => updatecal('/')  }>/</button>
            <button  onClick={ () => updatecal('*')  }>*</button>
            <button  onClick={ () => updatecal('+')  }>+</button>
            <button  onClick={ () => updatecal('-')  }>-</button>

            <button onClick={del}>Del</button>
        </div>

        <div className='digits'>
          {createDigits()}
          <button onClick={() =>updatecal('0')}>0</button>
          <button onClick={() =>updatecal('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>

      </div>
    </div>
  );
}
export default App;
