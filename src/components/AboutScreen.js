import React from 'react'
import { MIS_REDES } from './MIS_REDES'
import { Skills } from './Skills'
import { SoftSkills } from './SoftSkills'
import Roll from 'react-reveal/Roll';
import { Portfoliox } from './Portfoliox';
import { Footer } from './Footer';
import Tilt from 'react-vanilla-tilt';

export const AboutScreen = () => {
    return (
        <div className=" about__main">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-xl-4 col-md-4 col-sm-12	 a">
                        <h1 className="TitlePage display-5">        <Roll right cascade>
                            About</Roll> <Roll left cascade>Me.</Roll></h1>
                    </div>



                    <div className="col-xl-4 col-md-4 col-sm-12 b">
                        <div style={{ width: "20rem", height: "36vh" }} alt="" className="about__circleIMG img-fluid animate__animated animate__flip" ></div><br />
                        <b className="Name">Martin Cosentino</b>
                        <sub className="mb-4">25 años de la ciudad de Rosario.</sub>
                    </div>


                    <div className="col-xl-4 col-md-4 col-sm-12 c">
                        <Skills />
                    </div>


                </div>

            </div>


            <div className=" container2 container-fluid">



                <div className=" col-12 col-md-12 col-sm-12 e">
                    <div className="row">


                        <div className="about__textLeft col-12 order-sm-1 col-lg-3 col-md-7 mt-3 ">
                            <Tilt className="about__textTilt" style={{ background: 'none', border: '0.5px inset orange', paddingTop: '4rem', paddingBottom: '4rem', paddingRight: '1.5rem', paddingLeft: '1.5rem' }}>
                                <h2 className="about__textTilt" >My name is <b className="about__NameText">Martin Cosentino</b>,</h2>
                                <p className="about__textTilt"> I'm 25 years old and i from Rosario city,</p>
                                <p className="about__textTilt">Looking for my first job opportunity in the IT world,</p>
                            </Tilt>


                        </div>

                        <div className="about__textCenter col-12 order-sm-1 col-lg-3 col-md-6 my-3">
                            <Tilt className="about__textTilt" style={{ background: 'none', border: '0.5px inset orange', padding: '4rem' }}>
                                <p> I'm a  <h2>self-taught student </h2>and <br /> I'm focused on the Front-end.</p>
                                <p>oriented to layout and design</p>
                            </Tilt>
                        </div>

                        <div className="about__textRight col-12 order-sm-1 col-lg-3 col-md-6">
                            <Tilt className="about__textTilt" style={{ background: 'none', border: '0.5px inset orange', paddingTop: '6.5rem', paddingBottom: '6.5rem', padding: '4rem' }}>
                                <h2 >My Goal</h2><p> is to master the MERN JavaScript stack,</p>
                                <p>but I'm always open to new technologies.</p>
                            </Tilt>
                        </div>

                        <div className=" col-12 col-lg-3  col-sm-12 order-sm-0 col-md-5 f">
                            <SoftSkills />
                        </div>


                    </div>

                </div>

                <div className="row-fluid">



                    <div className=" col-12 d">

                        {/* COMPONENTE DE PROYECTOS */}
                        <Portfoliox />

                    </div>

                    <div className=" col-12 d">
                        <MIS_REDES />
                    </div>
                    <div className=" col-12 d p-5">

                        I would like to thank you for the time spent reading my Portfolio. <br />
                        I hope that we can finally develop a prosperous and fruitful <br />
                        working relationship.
                    </div>
                    <div className=" col-fluid">

                        <Footer />
                    </div>
                </div>




            </div>

        </div>
    )
}
