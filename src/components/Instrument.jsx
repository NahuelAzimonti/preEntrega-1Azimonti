import React from "react";
const int = () => {
    return (
        <div className="container">
        <div className="row gx-5 mb-5">
            <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded">
                <p><img src="images/Jazz_guitar.jpg" alt="Wakanda" className="img-fluid" /></p>
                <h4>Encuentra el instrumento que mas se adapte a vos </h4>
                <p><a href="#" target="_blank" className="btn btn-dark">Ver Más</a></p>
            </div>
            <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded">
                <p><img src="images/AntencionAlCliente.webp" alt="Pedí la App" className="img-fluid" /></p>
                <h4>Contactate con nosotros</h4>
                <p><a href="#" target="_blank" className="btn btn-dark">Ver Más</a></p>
            </div>
        </div>
    </div>
    )
}

export default int;