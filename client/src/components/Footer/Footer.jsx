
import React from 'react';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./Footer.scss";
const Footer = () => {
    return (<footer className='footer'>
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minus dolores, natus molestiae adipisci dolore incidunt laborum impedit voluptas sapiente officiis maxime asperiores fuga in blanditiis esse porro obcaecati saepe.</div>

            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-items">
                    <FaLocationArrow />
                    <div className="text">Karachi pakistan karachi pakistan karachi pakistan, 123456</div>
                </div>
                <div className="c-items">
                    <FaMobileAlt />
                    <div className="text">Phone: 0315-1234567</div>
                </div>
                <div className="c-items">
                    <FaEnvelope />
                    <div className="text">Email: example@storedev.com</div>
                </div>

            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speaker</span>
                <span className="text">Wireless Buds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
                
                </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Conatct Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    JSDEVSTORE 2023 CREATED BY SALMAN. E-COMMERCE SOLUTION.
                </div>
                <img src={Payment} />
            </div>
        </div>
    </footer>);
};

export default Footer;
