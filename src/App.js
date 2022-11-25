import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  
  return(
    <div>
      <NavBar/>
      <ItemListContainer 
        greeting={"Bienvenido/a al E-Commerce de Online Marketing"}/>
    </div>
  )


}

export default App;
