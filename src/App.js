import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
]


function App() {

  const [steps, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious(){
    if ( steps > 1 )
    setStep(steps - 1)  
  }
  function handleNext(){
    if( steps < 3)
    setStep(steps + 1)
  }

  return (
    <>
    <button className='close' onClick={()=>setIsOpen(!isOpen)}>&times;</button>
    {isOpen && (

    <div className='steps'>
      <div className='numbers'>
        <div className={`${steps >=1 ? 'active': "unactive"}`}>1</div>
        <div className={`${steps >=2 ? 'active': ""}`}>2</div>
        <div className={`${steps >=3 ? 'active': ""}`}>3</div>
      </div>

      <p className='message'>Step {steps} : {messages[steps-1]}</p>

      <div className='buttons'>
       <button style={{backgroundColor:"#7950f2", color: "#fff"}} 
          onClick={handlePrevious} 
          
          >Previous</button>
       <button style={{backgroundColor:"#7950f2", color: "#fff"}}
        onClick={handleNext}
       >Next</button>
      </div>
    </div>
    )}
    </>
  );
}

export default App;
