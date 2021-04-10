import React from 'react'

export const Skills = () => {
    return (
        <>
            <h2>Skills</h2>

            <label>HTML <i className="fab fa-html5"></i>
                <div className="progress my-1">
                    <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-orange"
                        role="progressbar"
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '70%' }}>70%</div>
                </div></label>

            <label>CSS <i className="fab fa-css3-alt"></i>
                <div className="progress my-1">
                    <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-primary"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '75%' }}>75%</div>
                </div></label>


            <label>JS <i className="fab fa-js"></i>
                <div className="progress my-1">
                    <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-warning"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '85%' }}>85%</div>
                </div></label>

            <label>SCSS <i className="fab fa-sass"></i>
                <div className="progress my-1">
                    <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-pink"
                        role="progressbar"
                        aria-valuenow="50%"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '65%' }}>65%</div>
                </div></label>


            <label>Bootstrap <i className="fab fa-bootstrap"></i>
                <div className="progress my-1">
                    <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-violet"
                        role="progressbar"
                        aria-valuenow="50%"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '65%' }}>65%</div>
                </div></label>

            <label>REACT <i className="fab fa-react"></i>
                <div className="progress my-1">
                    <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-info"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '45%' }}>45%</div>
                </div></label>

            <label>NODE <i className="fab fa-node-js"></i>
                <div className="progress my-1 mb-4">
                    <div className="progress-bar-animated progress-bar-striped  skills__progressBar bg-success"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '25%' }}>25%</div>
                </div></label>





        </>
    )
}
