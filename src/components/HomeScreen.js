import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import { Footer } from './Footer';
import Tilt from 'react-vanilla-tilt';


export const HomeScreen = () => {


    const iniciarAnimacion = () => {
        const spans = document.querySelectorAll('.word span');

        spans.forEach((span, idx) => {
            span.addEventListener('click', (e) => {
                e.target.classList.add('active');
            });

            // Initial animation
            setTimeout(() => {
                span.classList.add('active');

            }, 650 * (idx + 1))

            setTimeout(() => {
                span.classList.remove('active');

            }, 2150 * (idx + 1))
        });


    }




    return (
        <>
            <div className="container-fluid">

                <div className="row ">

                    <Fade left>

                        <div className="col-md-8 col-6 home__arrow" onClick={iniciarAnimacion}>

                            <div className="word">
                                <span className="active">W</span>
                                <span>E</span>
                                <span>L</span>
                                <span>C</span>
                                <span>O</span>
                                <span>M</span>
                                <span>E</span>


                            </div>

                            <p className="home__sub">TO MY PAGE </p> <br />





                            <Link to="/cv/CvES.pdf" target="_blank" download> <button className="btn btn-dark"> Descarga mi CV</button></Link>


                        </div>
                    </Fade>
                    <Fade top>

                        <div className="col-md-4 col-6 home__imgContenedor">

                            <Tilt src="#" className="home__img img-fluid" style={{ width: "16rem", height: "30vh" }} alt="" />

                            <div className="row">
                                <div className="col contenedor">
                                    <p className="home__estaticSub">I am a</p>
                                    <ul className="home__UlSub">
                                        <li>Developer</li>
                                        <li>Designer</li>
                                        <li>Dreamer</li>
                                    </ul>
                                </div>
                            </div>

                            <br />

                            <Fade>
                                <Link to="/about">

                                    <button className="btn btn-warning home__AboutButton">Conoceme</button>
                                </Link>
                            </Fade>
                        </div>

                    </Fade>
                </div>
                <div className="row">
                    <Footer />

                </div>
            </div >
        </>
    )
}
