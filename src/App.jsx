import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';

const App = () => {
  
  return (    
    <>
      <BrowserRouter>
        <CartProvider> 
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter> 
    </>
  );
}

export default App;
