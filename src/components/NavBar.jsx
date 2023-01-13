import React from 'react';
import CartWidget from './CartWidget';
import { NavLink, Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles/NavBar.css'

const NavBar = () => {

    return (
        <Navbar className="navbar navbar-expand-lg bg-white p-1" id="navbar">
            <Navbar.Brand as={Link} to="/"  className="navbar-brand"><img src="../logo-online.png" alt="logoheader"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <Nav>
                    <NavLink className="nav-link active" aria-current="page" to="/">INICIO</NavLink>
                    <NavLink className="nav-link disabled" to="/">NOSOTROS</NavLink>
                    <NavLink className="nav-link disabled" to="/">SERVICIOS</NavLink>
                    <NavLink className="nav-link disabled" to="/">NUESTROS CLIENTES</NavLink>
                    <NavDropdown title="TIENDA" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/categoria/templatex9">Template x9</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/categoria/templatex12">Template x12</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/categoria/templatex15">Template x15</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/categoria/tarjetavirtual">Tarjeta personal virtual</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink className="nav-link disabled" to="/">CONTACTO</NavLink>
                    <CartWidget/>
                </Nav> 
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;