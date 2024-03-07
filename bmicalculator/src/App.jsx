import { useState } from 'react';
import Card from '@mui/material/Card';
import './App.css';


function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmilStatus] = useState('');
  const [errormessage, setErrormessage] = useState("");
  const calculateBMI = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if(isValidHeight && isValidWeight)
    {
      const heightInMeters = height/100;
      const bmiValue = weight/(heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2)); //upto 2 decimal point
      if(bmiValue < 18.5)      
        setBmilStatus("Underweight");              
      else if(bmiValue >= 18.5 && bmiValue < 24.9)      
        setBmilStatus("Normal Weight");      
      else if(bmiValue >= 25 && bmiValue < 29.9)      
        setBmilStatus("Overweight");      
      else
      setBmilStatus("Obese");
      setErrormessage("");
    }
   
    else
    {
      setBmi(null);
      setBmilStatus("");
      setErrormessage("Please enter valid numeric data");
    }
  };
  const clearAll = () =>{
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmilStatus("");
  }
  return (
    <>
       
            <div className='bmi-calculator'>
              <div className='box'></div>
              <div className='data'>
                <h1>BMI Calculator</h1>
                <p className='error'>{errormessage}</p>
                <div className="input-container">
                  <label htmlFor="height">Height (cm): </label>
                  <input type="text"
                  value={height}                  
                  id='height' 
                  onChange={(e)=>setHeight(e.target.value)}/>
                </div>
                <div className="input-container">
                  <label htmlFor="weight">Weight (kg): </label>
                  <input type="text"
                  value={weight}
                  id='weight' 
                  onChange={(e)=>setWeight(e.target.value)}/>
                </div>
                <button onClick={calculateBMI}>Calculate BMI</button>
                <button onClick={clearAll}>Clear All</button>
                {bmi!== null && (
                  <div className='result'>
                    <p>Your BMI is: {bmi}</p>
                    <p>Status: {bmiStatus}</p>
                    </div>
                )}
              </div>
              </div>           
       
            
    </>
  )
}

export default App
