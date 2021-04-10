import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';


export const SoftSkills = () => {
    return (
        <div className="row">
            <div className="col">


                <LightSpeed right>

                    <label>Teamwork
                <div className="progress my-1 mb-2">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-danger"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '95%' }}>95%</div>
                        </div></label>
                </LightSpeed>


                <LightSpeed left>

                    <label>Communication skills
                <div className="progress my-1">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-danger"
                                role="progressbar"
                                aria-valuenow="10"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '90%' }}>90%</div>
                        </div></label>
                </LightSpeed>

                <LightSpeed right>

                    <label>Flexibility
                <div className="progress my-1">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-orange"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '85%' }}>85%</div>
                        </div></label>
                </LightSpeed>

                <LightSpeed left>

                    <label>Persuasion ability
                <div className="progress my-1">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-orange"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '85%' }}>85%</div>
                        </div></label>
                </LightSpeed>

                <LightSpeed right>

                    <label>Leadership
                <div className="progress my-1">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-warning"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '80%' }}>80%</div>
                        </div></label>
                </LightSpeed>


                <LightSpeed left>

                    <label>Motivation
                <div className="progress my-1">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-warning"
                                role="progressbar"
                                aria-valuenow="50%"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '75%' }}>75%</div>
                        </div></label>
                </LightSpeed>

                <LightSpeed right>

                    <label>Problem solving skills
                <div className="progress my-1 mb-2">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-success"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '70%' }}>70%</div>
                        </div></label>
                </LightSpeed>

                <LightSpeed left>

                    <label>Patience
                <div className="progress my-1">
                            <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-secondary"
                                role="progressbar"
                                aria-valuenow="50%"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: '65%' }}>65%</div>
                        </div></label>
                </LightSpeed>



            </div>
        </div>


    )
}
