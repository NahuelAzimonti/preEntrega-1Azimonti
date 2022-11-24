import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="logoNavBar">
                        <img src="images/nota-musical.png" alt="" width="30" />
                        <a className="navbar-brand" href="#">Do-sostenido</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li class="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Instrumentos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Informacion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className=" d-flex align-items-center justify-content-end">
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
