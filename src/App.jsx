import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  
  return (    
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
