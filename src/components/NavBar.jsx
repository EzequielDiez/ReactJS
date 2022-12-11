import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-white p-4" id="navbar">
            <div className="container-fluid">
                <NavLink className="navbar-brand"><img src="../logo-online.png" alt="logoheader" to="/"/></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> 
                </button>
                <div className="collapse navbar-collapse justify-content-end fs-4" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">INICIO</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link disabled" to="/">NOSOTROS</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link disabled" to="/">SERVICIOS</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link disabled" to="/">NUESTROS CLIENTES</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        TIENDA
                    </NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="/categoria/templatex9">Templates x9</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/categoria/templatex12">Templates x12</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/categoria/templatex15">Templates x15</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/categoria/tarjetavirtual">Tarjeta personal virtual</NavLink></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link disabled" to="/">CONTACTO</NavLink>
                    </li>
                    <CartWidget/>
                </ul>
                </div>
            </div>
            </nav>
        </header>
    )
}

export default NavBar