import React from 'react';
import MyForm from './MyForm';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import { Footer } from './Footer';


export const ContactScreen = () => {
    return (
        <>

            <div className="contact__container container-fluid">
                <div className="row">

                    <div className="col d-flex justify-content-center mb-5">
                        <h1 style={{ color: "orange" }}> _CONTACT_</h1>
                    </div>
                </div>



                <LightSpeed left cascade>

                    <div className="row contact__cardContenedor ">


                        <div className="card contact__card" style={{ width: '18rem' }}>

                            <i className="fab fa-whatsapp-square"></i>
                            <br /> <h5>WhatsApp</h5>
                            <a className="contact__wsp" href="https://api.whatsapp.com/send?phone=+543416811570">
                                <button className="btn contact__btn border-warning mt-3" style={{ color: "black", backgroundColor: "orange" }}>Click Here</button>
                            </a>

                        </div>


                        <div className="card contact__card" style={{ width: '18rem' }}>

                            <i className="fas fa-envelope"></i>
                            <br /> <h5>Correo</h5>
                            <a className="contact__wsp" href="mailto:MartinCosentino95@gmail.com?subject=PorfolioContacto">
                                <button className="btn border-warning mt-3" style={{ color: "black", backgroundColor: "orange" }}>Click Here</button>
                            </a>
                        </div>




                        <div className="card contact__card" style={{ width: '18rem' }}>

                            <i className="fab fa-facebook-square "></i>
                            <br /> <h5>Facebook</h5>
                            <a className="contact__wsp" href="https://fb.com/tinchopss">
                                <button className="btn mt-3" style={{ color: "black", backgroundColor: "orange" }}>Click Here</button>
                            </a>
                        </div>
                    </div>
                </LightSpeed>


                <div className="row border d-flex justify-content-center py-sm-4 ">

                    <Roll left>
                        <div className="col-sm-3 contact__left  d-flex justify-content-center   align-items-center mr-sm-3">

                            <h1>SEND</h1>
                        </div></Roll>

                    <Fade bottom>

                        <div className="col-sm-5 my-4  form__contenedor">
                            <MyForm />
                        </div>
                    </Fade>

                    <Roll right>
                        <div className="col-sm-3 contact__right  d-flex justify-content-center  align-items-center ml-sm-3">



                            <h1>A MESAGGE</h1>



                        </div>
                    </Roll>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <Footer />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
