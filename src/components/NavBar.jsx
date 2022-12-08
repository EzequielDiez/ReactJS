
import CartWidget from './CartWidget';

const NavBar = () => {

    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-white p-4" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href='/'><img src="./logo-online.png" alt="logoheader"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end fs-4" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href='/'>INICIO</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href='/'>NOSOTROS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href='/'>SERVICIOS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href='/'>NUESTROS CLIENTES</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        TIENDA
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href='/'>Templates x9</a></li>
                        <li><a className="dropdown-item" href='/'>Templates x12</a></li>
                        <li><a className="dropdown-item" href='/'>Templates x15</a></li>
                        <li><a className="dropdown-item" href='/'>Tarjeta personal digital</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href='/'>CONTACTO</a>
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