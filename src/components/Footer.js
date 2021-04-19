import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <div className="footer__main">

                <ul className="footer__ul">
                    <li className="footer__li"> <a className="footer__a" href="https://www.facebook.com/tinchopss">Facebook</a></li>
                    <li className="footer__li"><a className="footer__a" href="https://github.com/MartinCosentino">Github</a></li>
                    <li className="footer__li"><a className="footer__a" href="https://api.whatsapp.com/send?phone=+543416811570">WhatsApp</a></li>
                    <li className="footer__li"><a className="footer__a" href="https://www.linkedin.com/in/martin-cosentino/">LinkedIn</a></li>
                </ul>
                <ul className="footer__ul">
                    <li className="footer__li"><a className="footer__a" href="https://www.instagram.com/martin.cosentino/">Instagram</a> </li>
                    <li className="footer__li"><Link to="/contact" className="footer__a" >Contact</Link></li>
                    <li className="footer__li"><Link to="/about" className="footer__a">Portfolio</Link></li>
                    <li className="footer__li"><a className="footer__a" href="https://www.udemy.com/user/martin-cosentino/">U. Profile</a></li>
                    <li className="footer__li"><a className="footer__a" href="https://www.sololearn.com/profile/16027029">SoloLearn</a></li>

                </ul>


            </div>
        </>
    )
}
