import React, {useEffect, useState} from 'react'
import Link from "next/link";


function LandingPageFooter(props) {


    return (
        <div className="app">
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 ">
                            <Link href="/landing">
                                <a><img className="logo" src="/img/logo/logo1.png" id="logo_custom" alt="logo"/></a>
                            </Link>
                            <p className="desc">
                                Agrishared is an agritech company that provides an online platform to enables farmers, agribusinesses, agritechs,
                                and other stakeholders in the agricultural value chain across Africa to connect and share resources and information
                                to facilitate trade, capacity building, technology transfer,
                                improved food safety and security, reduce hunger, poverty, gender equality, collaboration and standards compliance.
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
                        <div className="col-md-2">
                            <h3 className="quick-links-title"></h3>
                            <br/><br/><br/><br/>
                            <ul className="quick-links">
                                <li>
                                    <Link href="/landing">
                                        <div>
                                            <i className="fa fa-phone g-mr-5"></i>
                                            <a>+233 54 683 1162</a>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#about-us">
                                        <div>
                                            <i className="fa fa-envelope g-mr-5"></i>
                                            <a className="">info@agrishared.com</a>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#pricing">
                                        <div>
                                            <i className="fa fa-map-marker g-mr-5"></i>
                                        <a>Adenta New Site</a>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h3 className="quick-links-title">Company</h3>
                            <ul className="quick-links">
                                <li>
                                    <Link href="/landing">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#about-us">
                                        <a>Leadership</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#pricing">
                                        <a>Social Impact</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#location">
                                        <a>Career</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#contact">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#contact">
                                        <a>Partners </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#contact">
                                        <a>Contact Us </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h3 className="quick-links-title">Products </h3>
                            <ul className="quick-links">
                                <li>
                                    <Link href="/landing">
                                        <a>Agri SPX</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#about-us">
                                        <a>Agri B2B</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#pricing">
                                        <a>PricingLearning Tool</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#location">
                                        <a>Investment</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#contact">
                                        <a>Knowledge Library</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#contact">
                                        <a>R&D</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#contact">
                                        <a>All Products</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h3 className="quick-links-title">Support</h3>
                            <ul className="quick-links">
                                <li>
                                    <Link href="/landing">
                                        <a>FAQs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#about-us">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#pricing">
                                        <a>User Agreement</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#location">
                                        <a>Disclaimer</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#contact">
                                        <a>Language</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/landing/company#contact">
                                        <a>Location</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="copyright ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 justify-content-start copyright-text copyright-text-desktop">
                            Copyright &copy; 2020 Agrishared
                        </div>
                        <div className="col-md-6  copyright-links">
                            <div className="row">
                                <div className="col-md-6 col-6">
                                    <Link href="/landing/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </div>
                                <div className="col-md-6 col-6">
                                    <Link href="/landing/terms-and-conditions">
                                        <a style={{whiteSpace: 'nowrap'}} href="#">Terms and Conditions</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 justify-content-start copyright-text copyright-text-mobile">
                            Copyright &copy; 2020 Agrishared
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default LandingPageFooter
