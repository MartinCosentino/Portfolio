import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


export const Portfoliox = () => {
    return (
        <>
            <h1 className="display-1">Portfolio</h1>
            <Zoom>
                <hr />
            </Zoom>
            <div className="container ">

                <div className="row CardContainer">

                    <Fade bottom cascade>

                        <div className="card cardd" style={{ width: '18rem' }}>
                            <img src="../img/prestamos.png" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">PrestamosApp</h5>
                                <p className="card-text">Solicita un monto y las cuotas, la app se encaga de hacer las cuentas!</p>
                                <p> <i className="fab fa-react"></i> <i className="fab fa-bootstrap"></i> <i className="fab fa-js"></i></p>
                                <a href="https://martincosentino.github.io/prestamosApp/" className="btn btn-warning">Ir a la App</a>
                            </div>
                        </div>



                        <div className="card cardd" style={{ width: '18rem' }}>
                            <img src="../img/gifExpert.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Gif Expert App</h5>
                                <p className="card-text">Buscando algun gif en particular? gifexpert app lo trae para vos.</p>
                                <p> <i className="fab fa-react"></i> <i className="fab fa-js"></i> <i className="fas fa-vial"></i></p>
                                <a href="https://giphyexpertapp.netlify.app/" className="btn btn-warning">Ir a la App</a>
                            </div>
                        </div>



                        <div className="card cardd" style={{ width: '18rem' }}>
                            <img src="../img/HeroesApp.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">HeroesAPP</h5>
                                <p className="card-text">Quien no tuvo un Superheroe favorito en su infancia? buscalo ya en la APP!</p>
                                <p> <i className="fab fa-react"></i> <i className="fab fa-bootstrap"></i>  <i className="fab fa-js"></i></p>
                                <a href="https://heroeapp.netlify.app/" className="btn btn-warning">Ir a la App</a>
                            </div>
                        </div>
                    </Fade>

                    <Fade bottom cascade>
                        <div className="card cardd" style={{ width: '18rem' }}>
                            <img src="../img/carrito.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Carro de Compra</h5>
                                <p className="card-text">Carro de compra similar a Udem. <br /> utilizando JS vanilla y localHost!</p>
                                <p> <i className="fab fa-html5"></i> <i className="fab fa-css3-alt"></i> <i className="fab fa-js"></i></p>
                                <a href="https://martincosentino.github.io/Carrito/" className="btn btn-warning">Ir a la App</a>
                            </div>
                        </div>

                        <div className="card cardd" style={{ width: '18rem' }}>
                            <img src="../img/criptomonedas.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Cotizador de CriptoMonedas</h5>
                                <p className="card-text">Interesado en comprar criptomonedas? el cotizador te indica el valor de tu transaccion.</p>
                                <p> <i className="fab fa-html5"></i> <i className="fab fa-bootstrap"></i> <i className="fab fa-js"></i></p>
                                <a href="https://martincosentino.github.io/CotizadorCritpoMonedas/" className="btn btn-warning">Ir a la App</a>
                            </div>
                        </div>

                        <div className="card cardd" style={{ width: '18rem' }}>
                            <img src="../img/NamesGeneratoer.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Generador de Nombres</h5>
                                <p className="card-text">Pensando en nombres? busca por nacionalidad y genero acá.</p>
                                <p> <i className="fab fa-html5"></i> <i className="fab fa-bootstrap"></i> <i className="fab fa-js"></i></p>
                                <a href="https://martincosentino.github.io/NamesGenerator/" className="btn btn-warning">Ir a la App</a>
                            </div>
                        </div>

                    </Fade>

                </div>
            </div>
        </>
    )
}
