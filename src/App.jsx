import React from 'react'

import styles from  './App.module.css';
import Display from './components/Display';
import ButtonsContainer from "./components/ButtonsContainer"
 
//repalce id by classname //div means container
function App() {
  return (
    <div className ={styles.calculator}> 
     <Display></Display>
     <ButtonsContainer></ButtonsContainer>
     


    </div>
  );
}

export default App
