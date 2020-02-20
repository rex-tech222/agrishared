import Link from "next/link";
import $ from 'jquery'
import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import MainLayout from "../../layouts/MainLayout";

function MainHeader(props) {
    const [state, setState] = useState({
        show: false,
        showProduct: false,
        showTabContent: false,
        activeTabContent: '',
    });

    useEffect(() => {
        var $window = $(window);
        $window.on('scroll', function () {
            if ($window.scrollTop() >= 50) {
               // $('.landing-page-header .navbar').addClass('navbar-bg')
            } else {
             //   $('.landing-page-header .navbar').removeClass('navbar-bg')
            }
        });

        return () => {
            //  $('body').removeClass('no-scroll')
        }
    });


    const onCloseLoginModal = (e) => {
        e.preventDefault();
        setState(state => ({
            ...state,
            showProduct: false
        }))
    }

    const onViewProducts = () => {

        if (state.showProduct === true) {
            $('body').removeClass('no-scroll')
        }

        if (state.showProduct === false) {
            $('body').addClass('no-scroll')
        }


        setState(state => ({
            ...state,
            showProduct: !state.showProduct,
            showTabContent: false,
        }))
    }

    const onCloseProducts = () => {
        setState(state => ({
            ...state,
            showTabContent: false,
            showProduct: false
        }))
        $('body').removeClass('no-scroll')
    }

    const onCloseTabContent = () => {
        if (state.showProduct) {
            $('body').removeClass('no-scroll')
        } else {
            $('body').addClass('no-scroll')
        }
        setState(state => ({
            ...state,
            showProduct: true,
            showTabContent: false,
            activeTabContent: '',
        }))
        $('body').removeClass('navbar-transparent')
    }

    const onOpenTabContent = (tab) => {

        setState(state => ({
            ...state,
            showProduct: false,
            showTabContent: true,
            activeTabContent: tab,
        }))

        $('body').addClass('no-scroll')
        $('body').addClass('navbar-transparent')
    }


    const onGotoPage = () => {

        setState(state => ({
            ...state,
            showProduct: false,
            showTabContent: false,
            activeTabContent: '',
        }))

        $('body').removeClass('no-scroll');
        $('body').removeClass('navbar-transparent');
        $('.landing-page-header .navbar').removeClass('navbar-bg');
    }


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };



    return (
        <header className="landing-page-header">


            <nav className="navbar fixed-top navbar-expand-md custom-navbar ">
                <Link href="/landing">
                    <a>
                        <img className="navbar-brand desktop-logo" src="/img/logo/logo1.png" id="logo_custom"
                             alt="logo"/>
                        <img className="navbar-brand mobile-logo" src="/img/logo/logo_mobile.png" id="logo_custom"
                             alt="logo"/>
                    </a>
                </Link>


                <div className="auth-btn">
                    <button className="nav-item btn lang-btn dropdown">
                        <span className=" dropdown-toggle" href="#" id="navbarDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            EN
                        </span>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link href="#">
                                <a className="dropdown-item">Lang 1</a>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link href="#">
                                <a className="dropdown-item" href="#">Lang 2</a>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link href="#">
                                <a className="dropdown-item">Lang 3</a>
                            </Link>
                        </div>
                    </button>
                    <Link href="/login">
                        <button className="nav-item btn login-btn "><i class="icon-user"></i> Log In</button>
                    </Link>
                    <Link href="/signup">
                        <button className="nav-item btn signup-btn ">Sign Up</button>
                    </Link>
                </div>

                <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button"
                        data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon ">
                            <i className="fa fa-bars"></i>
                        </span>
                </button>


                {
                    props.activePage === ''? {

                    }
                    : ''
                }


                {
                    props.activePage === 'knowledge-library'?
                        <div className="collapse collapse-search navbar-collapse " id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link href="/landing">
                                        <a onClick={onGotoPage} className="nav-link"> Home </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a onClick={onGotoPage} onClick={onViewProducts} className="nav-link"
                                       href="#"> Products </a>
                                </li>
                                <li onClick={onGotoPage} className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Issues
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link href="/landing/company#about-us">
                                            <a onClick={onGotoPage} className="dropdown-item">About Us</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#our-services">
                                            <a onClick={onGotoPage} className="dropdown-item" href="#">Our Services</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#how-it-works">
                                            <a onClick={onGotoPage} className="dropdown-item">How it works</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#team">
                                            <a onClick={onGotoPage} className="dropdown-item">Team</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#sponsors-and-partners">
                                            <a onClick={onGotoPage} className="dropdown-item">Sponsors & partners</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#our-blog">
                                            <a onClick={onGotoPage} className="dropdown-item">Our Blog</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#contact">
                                            <a onClick={onGotoPage} className="dropdown-item">Contact</a>
                                        </Link>
                                    </div>
                                </li>

                            </ul>

                            <form className="navbar-form nav-search">
                                <div className="form-group" >
                                    <div className="input-group">
                                        <input className="form-control" placeholder="Search for anything" type="text"/>
                                            <span className="input-group-addon">
                                                <i className="fa fa-search"></i>
                                            </span>
                                    </div>
                                </div>
                            </form>

                        </div>

                    : ''
                }


                {
                    props.activePage === 'learning-tool'?
                        <div className="collapse collapse-search navbar-collapse " id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link href="/landing">
                                        <a onClick={onGotoPage} className="nav-link"> Home </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a onClick={onGotoPage} onClick={onViewProducts} className="nav-link"
                                       href="#"> Products </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Issues
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link href="/landing/company#about-us">
                                            <a onClick={onGotoPage} className="dropdown-item">About Us</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#our-services">
                                            <a onClick={onGotoPage} className="dropdown-item" href="#">Our Services</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#how-it-works">
                                            <a onClick={onGotoPage} className="dropdown-item">How it works</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#team">
                                            <a onClick={onGotoPage} className="dropdown-item">Team</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#sponsors-and-partners">
                                            <a onClick={onGotoPage} className="dropdown-item">Sponsors & partners</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#our-blog">
                                            <a onClick={onGotoPage} className="dropdown-item">Our Blog</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#contact">
                                            <a onClick={onGotoPage} className="dropdown-item">Contact</a>
                                        </Link>
                                    </div>
                                </li>

                            </ul>

                            <form className="navbar-form nav-search">
                                <div className="form-group" >
                                    <div className="input-group">
                                        <input className="form-control" placeholder="Search for anything" type="text"/>
                                            <span className="input-group-addon">
                                                <i className="fa fa-search"></i>
                                            </span>
                                    </div>
                                </div>
                            </form>

                        </div>

                    : ''
                }




                {
                    !props.activePage ?
                        <div className="collapse navbar-collapse " id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link href="/landing">
                                        <a onClick={onGotoPage} className="nav-link"> Home </a>
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Company
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link href="/landing/company#about-us">
                                            <a onClick={onGotoPage} className="dropdown-item">About Us</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#our-services">
                                            <a onClick={onGotoPage} className="dropdown-item" href="#">Our Services</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#how-it-works">
                                            <a onClick={onGotoPage} className="dropdown-item">How it works</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#team">
                                            <a onClick={onGotoPage} className="dropdown-item">Team</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#sponsors-and-partners">
                                            <a onClick={onGotoPage} className="dropdown-item">Sponsors & partners</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#our-blog">
                                            <a onClick={onGotoPage} className="dropdown-item">Our Blog</a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/landing/company#contact">
                                            <a onClick={onGotoPage} className="dropdown-item">Contact</a>
                                        </Link>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a onClick={onGotoPage} onClick={onViewProducts} className="nav-link"
                                       href="#"> Products </a>
                                </li>

                            </ul>
                        </div>

                        : ''
                }




            </nav>

            <div className={`product-dropdown ${state.showProduct ? 'show' : 'hide'}`}>
                <span onClick={onCloseProducts} className="product-dropdown-close-btn"><i
                    className="fa fa-close"></i></span>

                <div className="product-dropdown-wrapper">
                    <div className="product-tabs-container">
                        <div className="nav-justified ">
                            <ul className="product-tabs nav nav-tabs">
                                <li onClick={onOpenTabContent.bind(this, 'overview')}
                                    className={`nav-item nav-link ${state.activeTabContent === 'overview' ? 'active' : ''}`}>
                                    Overview
                                </li>
                                <li onClick={onOpenTabContent.bind(this, 'how-it-works')}
                                    className={`nav-item nav-link ${state.activeTabContent === 'how-it-works' ? 'active' : ''}`}>
                                    How it works
                                </li>
                                <li onClick={onOpenTabContent.bind(this, 'benefits')}
                                    className={`nav-item nav-link ${state.activeTabContent === 'benefits' ? 'active' : ''}`}>
                                    Benefits
                                </li>
                                <li onClick={onOpenTabContent.bind(this, 'pricing')}
                                    className={`nav-item nav-link ${state.activeTabContent === 'pricing' ? 'active' : ''}`}>
                                    Pricing
                                </li>
                                <li onClick={onOpenTabContent.bind(this, 'disclaimer')}
                                    className={`nav-item nav-link ${state.activeTabContent === 'disclaimer' ? 'active' : ''}`}>
                                    Disclaimer
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container products">

                    <section className="container g-pt-40 g-pb-40">

                        <div className="row">

                            <div className="col-lg-4 g-mb-30">
                                <div className="media">
                                    <div className="d-flex mr-4">
                                      <span className="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i className="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="h5 g-color-black mb-20">AGRI SPX</h3>
                                        <p className="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/products/agri-spx">
                                            <a onClick={onGotoPage} className="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 g-mb-30">
                                <div className="media">
                                    <div className="d-flex mr-4">
                                      <span className="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i className="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="h5 g-color-black mb-20">AGRI B2B</h3>
                                        <p className="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/products/agri-b2b">
                                            <a onClick={onGotoPage} className="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 g-mb-30">
                                <div className="media">
                                    <div className="d-flex mr-4">
                                      <span className="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i className="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="h5 g-color-black mb-20">AGRI B2C</h3>
                                        <p className="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the
                                            printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/products/agri-b2c">
                                            <a onClick={onGotoPage} className="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 g-mb-30">
                                <div className="media">
                                    <div className="d-flex mr-4">
                                      <span className="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i className="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="h5 g-color-black mb-20">RESOURCE SHARING</h3>
                                        <p className="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the
                                            printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/products/resource-sharing">
                                            <a onClick={onGotoPage} className="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 g-mb-30">
                                <div className="media">
                                    <div className="d-flex mr-4">
                                      <span className="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i className="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="h5 g-color-black mb-20">LEARNING TOOL</h3>
                                        <p className="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the
                                            printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/products/learning-tool">
                                            <a onClick={onGotoPage}
                                               className="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 g-mb-30">
                                <div className="media">
                                    <div className="d-flex mr-4">
                                      <span className="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i className="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="h5 g-color-black mb-20">AGRIBUSINESS INVESTMENT</h3>
                                        <p className="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/products/agribusiness-investment">
                                            <a onClick={onGotoPage}
                                               className="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 g-mb-30">
                                <div className="media">
                                    <div className="d-flex mr-4">
                                      <span className="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i className="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="h5 g-color-black mb-20">FBO MONITORING</h3>
                                        <p className="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the
                                            printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/products/fbo-monitoring">
                                            <a onClick={onGotoPage}
                                               className="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 g-mb-30">
                                <div className="media">
                                    <div className="d-flex mr-4">
                                      <span className="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i className="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="h5 g-color-black mb-20">KNOWLEDGE LIBRARY</h3>
                                        <p className="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the
                                            printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/products/knowledge-library">
                                            <a onClick={onGotoPage}
                                               className="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 g-mb-30">
                                <div className="media">
                                    <div className="d-flex mr-4">
                                      <span className="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i className="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="h5 g-color-black mb-20">COLLABORATION</h3>
                                        <p className="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the
                                            printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/products/collaboration">
                                            <a onClick={onGotoPage}
                                               className="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 g-mb-30">
                                <div className="media">
                                    <div className="d-flex mr-4">
                                      <span className="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i className="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="h5 g-color-black mb-20">RESEARCH & DEVELOPMENT</h3>
                                        <p className="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the
                                            printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/products/research-and-development">
                                            <a onClick={onGotoPage}
                                               className="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </section>


                </div>
            </div>
            <div onClick={onCloseProducts} className={`product-overlay ${state.showProduct ? 'show' : 'hide'}`}></div>


            <div className={`product-tab-content ${state.showTabContent ? 'show' : 'hide'}`}>
                <span onClick={onCloseTabContent} className="product-tab-content-close-btn"><i
                    className="fa fa-close"></i></span>
                <div className="product-tab-content-wrapper  ">
                    <div className="">
                        <div className="product-tabs-container">
                            <div className="nav-justified ">
                                <ul className="product-tabs nav nav-tabs">
                                    <li onClick={onOpenTabContent.bind(this, 'overview')}
                                        className={`nav-item nav-link ${state.activeTabContent === 'overview' ? 'active' : ''}`}>
                                        Overview
                                    </li>
                                    <li onClick={onOpenTabContent.bind(this, 'how-it-works')}
                                        className={`nav-item nav-link ${state.activeTabContent === 'how-it-works' ? 'active' : ''}`}>
                                        How it works
                                    </li>
                                    <li onClick={onOpenTabContent.bind(this, 'benefits')}
                                        className={`nav-item nav-link ${state.activeTabContent === 'benefits' ? 'active' : ''}`}>
                                        Benefits
                                    </li>
                                    <li onClick={onOpenTabContent.bind(this, 'pricing')}
                                        className={`nav-item nav-link ${state.activeTabContent === 'pricing' ? 'active' : ''}`}>
                                        Pricing
                                    </li>
                                    <li onClick={onOpenTabContent.bind(this, 'disclaimer')}
                                        className={`nav-item nav-link ${state.activeTabContent === 'disclaimer' ? 'active' : ''}`}>
                                        Disclaimer
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content">
                            {state.activeTabContent === 'overview' ?
                                <div>
                                    <h3>Overview</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer
                                        took a
                                        galley of type and scrambled it to make a type specimen book.</p>
                                </div> : ''}

                            {state.activeTabContent === 'how-it-works' ?
                                <div>
                                    <h3>How it works</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer
                                        took a
                                        galley of type and scrambled it to make a type specimen book.</p>
                                </div> : ''}

                            {state.activeTabContent === 'benefits' ?
                                <div>
                                    <h3>Benefits</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer
                                        took a
                                        galley of type and scrambled it to make a type specimen book.</p>
                                </div> : ''}

                            {state.activeTabContent === 'pricing' ?
                                <div>
                                    <h3>Pricing</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer
                                        took a
                                        galley of type and scrambled it to make a type specimen book.</p>
                                </div> : ''}

                            {state.activeTabContent === 'disclaimer' ?
                                <div>
                                    <h3>Disclaimer</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer
                                        took a
                                        galley of type and scrambled it to make a type specimen book.</p>
                                </div> : ''}
                        </div>
                        <button className="btn sign-up"> SIGN UP FOR FREE</button>
                    </div>


                    <br/>
                    <br/>


                    <div className="card d-none">
                        <div className="col-md-12 text-center nw">
                            <nav className=" ">
                                <ul className="nav nav-tabs " id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="pop1-tab" data-toggle="tab" href="#pop1"
                                       role="tab" aria-controls="pop1" aria-selected="true">Popular Cars</a>
                                    <a className="nav-item nav-link" id="pop2-tab" data-toggle="tab" href="#pop2"
                                       role="tab" aria-controls="pop2" aria-selected="false">Upcoming</a>
                                    <a className="nav-item nav-link" id="pop3-tab" data-toggle="tab" href="#pop3"
                                       role="tab" aria-controls="pop3" aria-selected="false">Newly Launched</a>
                                    <a className="nav-item nav-link" id="pop3-tab" data-toggle="tab" href="#pop3"
                                       role="tab" aria-controls="pop3" aria-selected="false">Saunched</a>
                                </ul>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="pop1" role="tabpanel"
                                     aria-labelledby="pop1-tab">
                                    <div className="pt-3"></div>
                                    <p>1. There's another way to do this for layouts that doesn't have to put the navbar
                                        inside the container, and which doesn't require any CSS or Bootstrap overrides.

                                        Simply place a div with the Bootstrap container class around the navbar. This
                                        will center the links inside the navbar:</p>
                                </div>
                                <div className="tab-pane fade" id="pop2" role="tabpanel" aria-labelledby="pop2-tab">
                                    <div className="pt-3"></div>
                                    2. There's another way to do this for layouts that doesn't have to put the navbar
                                    inside the container, and which doesn't require any CSS or Bootstrap overrides.

                                    Simply place a div with the Bootstrap container class around the navbar. This
                                    will center the links inside the navbar:

                                </div>
                                <div className="tab-pane fade" id="pop3" role="tabpanel" aria-labelledby="pop3-tab">
                                    <div className="pt-3"></div>
                                    3. There's another way to do this for layouts that doesn't have to put the navbar
                                    inside the container, and which doesn't require any CSS or Bootstrap overrides.

                                    Simply place a div with the Bootstrap container class around the navbar. This
                                    will center the links inside the navbar:

                                </div>

                            </div>
                        </div>
                    </div>


                </div>


            </div>
            <img className={`product-tab-img ${state.showTabContent && state.activeTabContent === 'overview' ? 'show' : 'hide'}`} src="/img/Female-Farmer-1.png"/>
            <img className={`product-tab-img ${state.showTabContent && state.activeTabContent === 'how-it-works' ? 'show' : 'hide'}`} src="/img/5e09feeac38b0.png"/>
            <img className={`product-tab-img ${state.showTabContent && state.activeTabContent === 'benefits' ? 'show' : 'hide'}`} src="/img/l1.jpg"/>
            <img className={`product-tab-img ${state.showTabContent && state.activeTabContent === 'pricing' ? 'show' : 'hide'}`} src="/img/wall.bmp"/>
            <img className={`product-tab-img ${state.showTabContent && state.activeTabContent === 'disclaimer' ? 'show' : 'hide'}`} src="/img/soft.jpg"/>
            <img className={`product-tab-img-overlay ${state.showTabContent ? 'show' : 'hide'}`}
                 src="/img/Rectangle 1555.png"/>


        </header>
    )
}

export default MainHeader