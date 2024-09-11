import React from "react";
import '../styles/Header.scss';
import logo from '../images/logo.png';

const Header = () => {

    const sendWhats = () => {
        window.location.href = `https://wa.me/5216863147116`;
    };

    return (
            <nav className="navbar navbarCustom navbar-expand-lg">
                <div className="container-fluid">
                    <img className="logo" src={logo} alt="Logo Portfolio Edson Rubio"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ml-3 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link" aria-current="page"></button>
                        </li>
                        {/*<li className="nav-item">
                            <button className="nav-link nav-linkCustom" aria-current="page">Inicio</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-linkCustom">Nosotros</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-linkCustom">Platillos</button>
                        </li>*/}
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="btn btnCustom" type="button" onClick={sendWhats}>¡Haz tu pedido!</button>
                    </form>
                    </div>
                </div>
            </nav>
           );
}

export default Header;