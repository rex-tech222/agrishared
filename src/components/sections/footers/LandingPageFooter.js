import React, {useEffect, useState} from 'react'
import Link from "next/link";


function LandingPageFooter(props) {


    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 ">
                            <img className="logo" src="/img/logo/logo1.png" id="logo_custom" alt="logo"/>
                            <p className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            </p>

                            <h3 className="social-links-title">Stay in touch</h3>
                            <ul className="social-links">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-telegram"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <h3 className="quick-links-title">Quick Links</h3>
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                                    <ul className="quick-links">
                                        <li>
                                            <Link href="/landing">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/landing/company#about-us">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/landing/company#pricing">
                                                <a>Pricing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/landing/company#location">
                                                <a>Location</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/landing/company#contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                                    <ul className="quick-links">
                                        <li><a href="#"> Privacy Agreement </a></li>
                                        <li><a href="#"> Our Careers</a></li>
                                        <li><a href="#"> Our Blog</a></li>
                                        <li><a href="#"> Our Partners</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 justify-content-start copyright-text">
                           Copyright &copy; 2020 Agrishared
                        </div>
                        <div className="col-md-6 d-flex justify-content-end copyright-links">
                           <ul>
                               <li><a href="#">Privacy Policy</a></li>
                               <li><a href="#">Terms and Conditions</a></li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default LandingPageFooter
