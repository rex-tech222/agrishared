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
            showProduct: !state.showProduct
        }))
    }

    const onCloseProducts = () => {
        setState(state => ({
            ...state,
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
            showTabContent: false
        }))
    }

    const onOpenTabContent = () => {
        setState(state => ({
            ...state,
            showProduct: false,
            showTabContent: true,
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

                    <div className="d-flex justify-content-center">
                        <ul className="product-tabs">
                            <li><a onClick={onOpenTabContent} href="#">Overview</a></li>
                            <li><a onClick={onOpenTabContent} href="#">How it works</a></li>
                            <li><a onClick={onOpenTabContent} href="#">Benefits</a></li>
                            <li><a onClick={onOpenTabContent} href="#">Pricing</a></li>
                            <li><a onClick={onOpenTabContent} href="#">Disclaimer</a></li>
                        </ul>
                    </div>

                   <div className="container products">
                       <div className="row">
                           <a className="col-md-4 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">AGRI <br/> SPX</h3>
                           </a>
                           <a className="col-md-4 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">AGRI <br/> B2B</h3>
                           </a>
                           <a className="col-md-4 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">AGRI <br/> B2C</h3>
                           </a>
                           <a className="col-md-4 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">RESOURCE <br/> SHARING</h3>
                           </a>
                           <a className="col-md-4 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">LEARNING <br/> TOOL</h3>
                           </a>
                           <a className="col-md-4 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">AGRIBUSINESS <br/> INVESTMENT</h3>
                           </a>
                           <a className="col-md-4 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">FBO <br/> MONITORING</h3>
                           </a>
                           <a className="col-md-4 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">KNOWLEDGE <br/> LIBRARY</h3>
                           </a>
                           <a className="col-md-4 product">
                               <img  className="img" src="/img/3.jpg" alt=""/>
                               <h3 className="name">COLLABORATION  </h3>
                           </a>
                       </div>
                   </div>
            </div>
            <div onClick={onCloseProducts} className={`product-overlay ${state.showProduct? 'show' : 'hide'}`}></div>





            <div className={`product-tab-content ${state.showTabContent? 'show' : 'hide'}`} >
                <span onClick={onCloseTabContent} className="product-tab-content-close-btn"><i className="fa fa-close"></i></span>
                <div className="d-flex justify-content-center">
                   <div>
                       <ul className="product-tabs">
                           <li><a onClick={onOpenTabContent} href="#">Overview</a></li>
                           <li><a onClick={onOpenTabContent} href="#">How it works</a></li>
                           <li><a onClick={onOpenTabContent} href="#">Benefits</a></li>
                           <li><a onClick={onOpenTabContent} href="#">Pricing</a></li>
                           <li><a onClick={onOpenTabContent} href="#">Disclaimer</a></li>
                       </ul>
                       <div className="content">
                           <br/><br/><br/><br/><br/>
                           <br/><br/><br/><br/><br/>
                       </div>
                   </div>
                </div>



            </div>
            <div   className={`product-overlay ${state.showTabContent? 'show' : 'hide'}`}></div>


        </header>
    )
}

export default MainHeader