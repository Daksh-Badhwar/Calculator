import React,{useState} from 'react'

import styles from  './App.module.css';
import Display from './components/Display';
import ButtonsContainer from "./components/ButtonsContainer"

 
//repalce id by classname //div means container
function App() {

//we are not only concerned with display but button too so mention state in App
const[calVal,setCalVal]= useState("")   //initial display empty
//button text can be replaced by event.target.data
const onButtonClick=(buttonText)=>{
  if (buttonText==='C') setCalVal("");
  else if (buttonText==='=')
  {
    const result =eval(calVal);
     setCalVal(result);   
  }
  else
  {
     const newDisplayValue= calVal + buttonText;
     setCalVal(newDisplayValue);
  }

}


  return (
    <div className ={styles.calculator}> 
     <Display displayValue={calVal}></Display>
     <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
     


    </div>
  );
}

export default App
