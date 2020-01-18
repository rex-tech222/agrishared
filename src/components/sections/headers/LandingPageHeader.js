import Link from "next/link";
import $ from 'jquery'
import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import MainLayout from "../../layouts/MainLayout";

function MainHeader() {
    const [state, setState] = useState({
        show: false,
        showProduct: false,
        showTabContent: false,
        activeTabContent: '',
    });

    useEffect(() => {
        var $window = $(window);
        $window.on('scroll', function () {
            if($window.scrollTop() >= 200) {
                $('.landing-page-header .navbar').addClass('navbar-bg')
            } else {
                $('.landing-page-header .navbar').removeClass('navbar-bg')
            }
        });

        return () =>{
            $('body').removeClass('no-scroll')
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
        if(state.showProduct){
            $('body').removeClass('no-scroll')
        } else {
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
        if(state.showProduct){
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
    }

    const onOpenTabContent = (tab) => {
        setState(state => ({
            ...state,
            showProduct: false,
            showTabContent: true,
            activeTabContent: tab,
        }))
        $('body').removeClass('no-scroll')
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

            <Modal
                isOpen={state.show}
                /* onAfterOpen={afterOpenModal}*/
                onRequestClose={onCloseLoginModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                {/*<h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>*/}

                <div className="products-modal">
                    <div className="header">
                        <div className="d-flex justify-content-center  ">
                            <div className=" ">
                                <h1>Products</h1>
                            </div>
                            <div onClick={onCloseLoginModal} className="close-btn">
                                <i className="fa fa-close"></i>
                            </div>
                        </div>
                    </div>
                    <div className="body">

                    </div>

                </div>
            </Modal>



            <nav className="navbar fixed-top navbar-expand-md custom-navbar ">
                  <Link href="/landing">
                      <a >
                          <img className="navbar-brand" src="/img/logo/googlelogo_color_324x112dp.png" id="logo_custom" alt="logo"/>
                      </a>
                  </Link>
                    <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button"
                            data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon ">
                            <i className="fa fa-bars"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse " id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item">
                                <Link href="/landing">
                                <a className="nav-link" > Home  </a>
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     Our Company
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a onClick={onViewProducts} className="nav-link" href="#"> Products </a>
                            </li>
                        </ul>

                        <button className="nav-item btn sign-up ml-auto">Sign Up</button>
                    </div>
            </nav>
             
            <div className={`product-dropdown ${state.showProduct? 'show' : 'hide'}`}>
                <span onClick={onCloseProducts} className="product-dropdown-close-btn"><i className="fa fa-close"></i></span>

                    <div className="product-dropdown-wrapper">
                        <div className="product-tabs-container">
                            <div className="nav-justified ">
                                <ul className="product-tabs nav nav-tabs">
                                    <li  onClick={onOpenTabContent.bind(this, 'overview')}
                                         className={`nav-item nav-link ${state.activeTabContent === 'overview'? 'active' : ''}`}>
                                        Overview
                                    </li>
                                    <li onClick={onOpenTabContent.bind(this, 'how-it-works')}
                                        className={`nav-item nav-link ${state.activeTabContent === 'how-it-works'? 'active' : ''}`}>
                                        How it works
                                    </li>
                                    <li onClick={onOpenTabContent.bind(this, 'benefits')}
                                        className={`nav-item nav-link ${state.activeTabContent === 'benefits'? 'active' : ''}`}>
                                        Benefits
                                    </li>
                                    <li onClick={onOpenTabContent.bind(this, 'pricing')}
                                        className={`nav-item nav-link ${state.activeTabContent === 'pricing'? 'active' : ''}`}>
                                        Pricing
                                    </li>
                                    <li onClick={onOpenTabContent.bind(this, 'disclaimer')}
                                        className={`nav-item nav-link ${state.activeTabContent === 'disclaimer'? 'active' : ''}`}>
                                        Disclaimer
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                   <div className="container products">
                       <div className="row">

                           <Link href="/landing/agri-spx">
                           <a className="col-md-4 col-sm-6 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">AGRI <br/> SPX</h3>
                           </a>
                           </Link>

                           <Link href="/landing/agri-spx">
                           <a className="col-md-4 col-sm-6 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">AGRI <br/> B2B</h3>
                           </a>
                           </Link>

                           <Link href="/landing/agri-spx">
                           <a className="col-md-4 col-sm-6 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">AGRI <br/> B2C</h3>
                           </a>
                           </Link>

                           <Link href="/landing/agri-spx">
                           <a className="col-md-4 col-sm-6 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">RESOURCE <br/> SHARING</h3>
                           </a>
                           </Link>

                           <Link href="/landing/agri-spx">
                           <a className="col-md-4 col-sm-6 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">LEARNING <br/> TOOL</h3>
                           </a>
                           </Link>

                           <Link href="/landing/agri-spx">
                           <a className="col-md-4 col-sm-6 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">AGRIBUSINESS <br/> INVESTMENT</h3>
                           </a>
                           </Link>

                           <Link href="/landing/agri-spx">
                           <a className="col-md-4 col-sm-6 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">FBO <br/> MONITORING</h3>
                           </a>
                           </Link>

                           <Link href="/landing/agri-spx">
                           <a className="col-md-4  col-sm-6 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">KNOWLEDGE <br/> LIBRARY</h3>
                           </a>
                           </Link>

                           <Link href="/landing/agri-spx">
                           <a className="col-md-4 col-sm-6 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">COLLABORATION  </h3>
                           </a>
                           </Link>
                       </div>
                   </div>
            </div>
            <div onClick={onCloseProducts} className={`product-overlay ${state.showProduct? 'show' : 'hide'}`}></div>





            <div className={`product-tab-content ${state.showTabContent? 'show' : 'hide'}`} >
                <span onClick={onCloseTabContent} className="product-tab-content-close-btn"><i className="fa fa-close"></i></span>
                <div className="product-tab-content-wrapper  ">
                   <div className="">
                        <div className="product-tabs-container">
                            <div className="nav-justified ">
                                <ul className="product-tabs nav nav-tabs">
                                    <li  onClick={onOpenTabContent.bind(this, 'overview')}
                                         className={`nav-item nav-link ${state.activeTabContent === 'overview'? 'active' : ''}`}>
                                        Overview
                                    </li>
                                    <li onClick={onOpenTabContent.bind(this, 'how-it-works')}
                                        className={`nav-item nav-link ${state.activeTabContent === 'how-it-works'? 'active' : ''}`}>
                                        How it works
                                    </li>
                                    <li onClick={onOpenTabContent.bind(this, 'benefits')}
                                        className={`nav-item nav-link ${state.activeTabContent === 'benefits'? 'active' : ''}`}>
                                        Benefits
                                    </li>
                                    <li onClick={onOpenTabContent.bind(this, 'pricing')}
                                        className={`nav-item nav-link ${state.activeTabContent === 'pricing'? 'active' : ''}`}>
                                        Pricing
                                    </li>
                                    <li onClick={onOpenTabContent.bind(this, 'disclaimer')}
                                        className={`nav-item nav-link ${state.activeTabContent === 'disclaimer'? 'active' : ''}`}>
                                        Disclaimer
                                    </li>
                                </ul>
                            </div>
                        </div>
                       <div className="content">
                           {state.activeTabContent === 'overview'?
                           <div>
                               <h3>Overview</h3>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                   industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                   galley of type and scrambled it to make a type specimen book.</p>
                           </div>: ''}

                           {state.activeTabContent === 'how-it-works'?
                           <div>
                               <h3>How it works</h3>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                   industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                   galley of type and scrambled it to make a type specimen book.</p>
                           </div>: ''}

                           {state.activeTabContent === 'benefits'?
                            <div>
                                <h3>Benefits</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book.</p>
                          </div>: ''}

                           {state.activeTabContent === 'pricing'?
                          <div>
                              <h3>Pricing</h3>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                  galley of type and scrambled it to make a type specimen book.</p>
                         </div>: ''}

                           {state.activeTabContent === 'disclaimer'?
                           <div>
                               <h3>Disclaimer</h3>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                   industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                   galley of type and scrambled it to make a type specimen book.</p>
                          </div>: ''}
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
            <div   className={`product-overlay ${state.showTabContent? 'show' : 'hide'}`}></div>


        </header>
    )
}

export default MainHeader