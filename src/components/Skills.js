import React from 'react';
import Zoom from 'react-reveal/Zoom';


export const Skills = () => {
    return (
        <div className="container skills__contenedor">


            <div className="row">
                <div className="col-12">




                </div>
            </div>
            <Zoom right cascade>

                <div className="row">
                    <div className="col-2 skills__icons">
                        <label className="skill__html">HTML <i className="fab fa-html5"></i></label>
                    </div>
                    <div className="col-10 skills__icons">

                        <div className="progress my-1">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-orange"
                                role="progressbar"
                                aria-valuenow="10"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '70%' }}>70%</div>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-2 skills__icons">
                        <label className="skill__css">CSS <i className="fab fa-css3-alt"></i></label>
                    </div>
                    <div className="col-10 skills__icons">

                        <div className="progress my-1">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-primary"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '75%' }}>75%</div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-2 skills__icons">
                        <label className="skill__js">JS <i className="fab fa-js"></i></label>
                    </div>
                    <div className="col-10 skills__icons">
                        <div className="progress my-1">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-warning"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '75%' }}>75%</div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-2 skills__icons">
                        <label className="skill__sass">SCSS <i className="fab fa-sass"></i></label>
                    </div>
                    <div className="col-10 skills__icons">
                        <div className="progress my-1">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-pink"
                                role="progressbar"
                                aria-valuenow="50%"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '65%', color: 'white' }}>65%</div>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-2 skills__icons">
                        <label className="skill__bs">BS5<i className="fab fa-bootstrap"></i></label>
                    </div>
                    <div className="col-10 skills__icons">
                        <div className="progress my-1">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-violet"
                                role="progressbar"
                                aria-valuenow="50%"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '65%' }}>65%</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2 skills__icons">
                        <label className="skill__react">REACT <i className="fab fa-react"></i></label>
                    </div>
                    <div className="col-10 skills__icons">
                        <div className="progress my-1">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-info"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '45%' }}>45%</div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-2 skills__icons">
                        <label className="skill__ux">UX/UI<i className="fas fa-palette "></i></label>
                    </div>
                    <div className="col-10 skills__icons">

                        <div className="progress my-1 mb-4">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-danger"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '35%' }}>35%</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2 skills__icons">
                        <label className="skill__node">NODE <i className="fab fa-node-js"></i></label>
                    </div>
                    <div className="col-10 skills__icons">

                        <div className="progress my-1 mb-4">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-success"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '25%' }}>25%</div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}
