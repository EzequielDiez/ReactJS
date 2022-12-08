import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";
import Productos from "../pages/Productos";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <NavBar background={'transparent'} />
        <Routes>
          <Route exact path="/detail/:id" element ={<DetailPage/>}/>
          <Route exact path="/productos" element ={<Productos/>}/>
          <Route exact path="/" element = {<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;