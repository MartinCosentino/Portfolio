import React from 'react'
import { MIS_REDES } from './MIS_REDES'
import { Skills } from './Skills'
import { SoftSkills } from './SoftSkills'
import Roll from 'react-reveal/Roll';
import { Portfoliox } from './Portfoliox';
import { Footer } from './Footer';

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


                        <div className="about__textLeft col-12 order-sm-1 col-md-3 ">
                            <h2>My name is <b className="about__NameText">Martin Cosentino</b>,</h2>
                            <p> I am 25 years old and I am from the city of Rosario,</p>
                            <p>Looking for my first job opportunity in the IT world,</p>
                        </div>

                        <div className="about__textCenter col-12 order-sm-1 col-md-3 ">

                            <p> I am a  <h2>self-taught student </h2>and <br /> I am focused on the Front-end.</p>
                        </div>

                        <div className="about__textRight col-12 order-sm-1 col-md-3 ">

                            <h2 >My Goal</h2><p> is to master the MERN JavaScript stack,</p>
                            <p>but I am always open to new technologies.</p>
                        </div>

                        <div className=" col-12 col-md-3 col-sm-12 order-sm-0 f">
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
                        {/* <p> Thinker out of the box. <br />
            that defines me, <br />
            what led me to learn on my own, to be self-taught <br />
            without any agenda of any institution, <br />
             just learning from who, where, and when I choose.</p> */}
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
