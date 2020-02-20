import Link from "next/link";
import $ from 'jquery'
import React, {useEffect} from "react";

function MainHeader() {

    useEffect(()=>{

        $(".sidebar-menu-toggle").click(function(e) {
            e.preventDefault();
            $(".dashboard").toggleClass("toggled");
            console.log('Clicked')
        });

        $(window).resize(function(e) {
            if($(window).width()<=768){
                $(".dashboard").removeClass("toggled");
            }else{
                $(".dashboard").addClass("toggled");
            }
        });
    })

    const showMobileSearch = (e) => {
        e.preventDefault()
        $('body').toggleClass('show-mobile-search')
    }

    const hideMobileSearch = () => {
        $('body').removeClass('show-mobile-search')
    }

    return (
        <div className="main-header">
            <nav className="navbar navbar-expand-md  flex-row">



               {/* <div>
                  <a href="#menu-toggle" className="nav-l ink sidebar-menu-toggle">
                        <span className="ti-menu"></span>
                    </a>

                </div>
*/}
                <a onClick={showMobileSearch} href="#" className="nav-link   mobile-search-btn"><i
                    className="fa fa-search"></i></a>

                <form className="navbar-form navbar-left form-horizontal" role="search">

                    <div className="input-group">
                        <button type="submit" className="btn"><span className="fa fa-search"></span>
                        </button>
                        <input type="text" className="search-box" placeholder="Search"/>
                    </div>
                </form>

                <Link href="/">
                    <a className="navbar-brand">
                        <img src="/img/logo/logo1.png" className="img-fluid" alt="Responsive image"/>
                    </a>
                </Link>

                <ul className="navbar-nav flex-row mr-0 left-menu">
                    <li className="nav-item dropdown farmer-request-dropdown icon-btn">
                        <a href="#" className="nav-link navbar-img mr-3 mr-lg-0" data-toggle="dropdown"
                           role="button" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-slideshare"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li className="hr">
                                Farmer Requests
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img className="" src="/img/4.jpg" alt=""/>
                                    </div>
                                    <div className="col-lg-5 details">
                                        <h4>Abraham Nwoke</h4>
                                        <p>4 min ago</p>
                                    </div>
                                    <div className="col-lg-2 action">
                                        <div className="accept">
                                            <i className="fa fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 action">
                                        <div className="reject">
                                            <i className="fa fa-times"></i>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img className="" src="/img/4.jpg" alt=""/>
                                    </div>
                                    <div className="col-lg-5 details">
                                        <h4>Abraham Nwoke</h4>
                                        <p>4 min ago</p>
                                    </div>
                                    <div className="col-lg-2 action">
                                        <div className="accept">
                                            <i className="fa fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 action">
                                        <div className="reject">
                                            <i className="fa fa-times"></i>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img className="" src="/img/4.jpg" alt=""/>
                                    </div>
                                    <div className="col-lg-5 details">
                                        <h4>Abraham Nwoke</h4>
                                        <p>4 min ago</p>
                                    </div>
                                    <div className="col-lg-2 action">
                                        <div className="accept">
                                            <i className="fa fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 action">
                                        <div className="reject">
                                            <i className="fa fa-times"></i>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img className="" src="/img/4.jpg" alt=""/>
                                    </div>
                                    <div className="col-lg-5 details">
                                        <h4>Abraham Nwoke</h4>
                                        <p>4 min ago</p>
                                    </div>
                                    <div className="col-lg-2 action">
                                        <div className="accept">
                                            <i className="fa fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 action">
                                        <div className="reject">
                                            <i className="fa fa-times"></i>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li className="fr">
                                View all requests
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item icon-btn">
                        <a href="#" className="nav-link  "><i className="fa fa-bell"></i></a>
                    </li>
                    <li className="nav-item icon-btn">
                        <a href="#" className="nav-link  "><i className="fa fa-envelope"></i></a>
                    </li>
                    <li className="nav-item dropdown user-account">
                        <a href="#" className="nav-link dropdown-toggle navbar-img mr-3 mr-lg-0" data-toggle="dropdown"
                           role="button" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-user-circle account-user-icon"></i>
                            Abraham Nwoke
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li>
                                <a className="dropdown-item" href="#">
                                    <img src="/img/icons/icons8_Connection_Status_On_24px.png" alt=""/>
                                    <b>Status</b>: Online
                                </a>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <img src="/img/icons/icons8_Settings_24px_2.png" alt=""/>
                                    Account Settings
                                </a>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <Link href="/dashboard-buyer">
                                    <a className="dropdown-item">
                                        <img src="/img/icons/chart-bar-32.png" alt=""/>
                                      Buyer  Dashboard
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard-farmer">
                                    <a className="dropdown-item">
                                        <img src="/img/icons/chart-bar-32.png" alt=""/>
                                      Farmer  Dashboard
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard-service-provider">
                                    <a className="dropdown-item">
                                        <img src="/img/icons/chart-bar-32.png" alt=""/>
                                        Service Provider Dashboard
                                    </a>
                                </Link>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <img src="/img/icons/icons8_Stripe_20px.png" alt=""/>
                                    My Wallet
                                </a>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <Link href="/profile">
                                    <a className="dropdown-item">
                                        <img src="/img/icons/icons8_User_24px_1.png" alt=""/>
                                        View Profile
                                    </a>
                                </Link>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <img src="/img/icons/icons8_Export_20px.png" alt=""/>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <button className="navbar-toggler ml-lg-0" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
            <div className="mobile-search-form">
                <div onClick={hideMobileSearch} className="overlay"></div>
                <form className="form" role="search">
                    <div className="input-group">
                        <button type="submit" className="btn"><span className="fa fa-search"></span>
                        </button>
                        <input type="text" className="search-box" placeholder="Search"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MainHeader
