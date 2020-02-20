import Link from "next/link";
import MainHeader from "./../sections/headers/MainHeader";
import LandingPageFooter from  '../../components/sections/footers/LandingPageFooter'
import React from "react";

function Layout(props) {


    return (
        <div className="b2c">

            <section className=" ad-banner">
              <div className="container-fluid d-flex justify-content-between">
                  <div className="banner">
                      <h1>AD BANNER</h1>
                  </div>
                  <div className="">
                      <button className="btn"><i className="fa fa-shopping-bag"></i> shop now</button>
                  </div>

              </div>
            </section>

            <section className="d-flex justify-content-between contact-auth">
                   <ul className="contact">
                       <li> <i className="fa fa-phone"></i> 000-000-000-000</li>
                       <li> <i className="fa fa-envelope"></i> info@domainname.com </li>
                   </ul>
                   <div className="auth">
                       <i className="ti-user"></i>
                       <a href="">Login</a> / <a href="">Register</a></div>
            </section>


          <div className="header">
              <nav className=" navbar navbar-expand-md custom-navbar">
                  <Link href="/b2c">
                      <img  className="navbar-brand g-cursor-pointer" src="/img/logo/YOURLOGO.png" id="logo_custom" width="10%" alt="logo"/>
                  </Link>
                  <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button"
                          data-toggle="collapse" data-target="#collapsibleNavbar">
                      <span className="navbar-toggler-icon "></span>
                  </button>
                  <div className="collapse navbar-collapse " id="collapsibleNavbar">

                      <form className="navbar-form m-auto" role="search">
                          <div className="input-group">
                              <input type="text" className="form-control" placeholder="Search" name="q"/>
                              <div className="input-group-btn">
                                  <button className="btn" type="submit"><i
                                      className="fa fa-search"></i></button>
                              </div>
                          </div>
                      </form>
                      <ul className="navbar-nav ml-auto nav-icon">
                          <li className="nav-item">
                              <a className="nav-link" href="#offer">
                                  <span className="    g-rounded-50x">10</span>
                                  <i className="fa fa-heart-o"></i>
                              </a>
                          </li>
                          <li className="nav-item">
                             <Link href="/b2c/cart">
                                 <a className="nav-link">
                                     <span className="    g-rounded-50x">33</span>
                                     <i className="fa fa-shopping-cart"></i>
                                 </a>
                             </Link>
                          </li>

                      </ul>
                  </div>
              </nav>


              <div className="container-fluid">
                  <nav className="navbar navbar-expand-sm    ">
                      <button className="navbar-toggler" type="button" data-toggle="collapse"
                              data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                              aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                          <div className="category">
                              <button className="btn">
                                  <i className="ti-menu-alt"></i>
                                  All Categories</button>
                          </div>
                          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 category-menu">
                              <li className="nav-item">
                                  <Link href="/b2c/categories">
                                  <a className="nav-link">Organic <span className="sr-only">(current)</span></a>
                                  </Link>
                              </li>
                              <li className="nav-item">
                                  <Link href="/b2c/categories">
                                  <a className="nav-link">Conventional</a>
                                  </Link>
                              </li>

                              <li className="nav-item">
                                  <Link href="/b2c/categories">
                                  <a className="nav-link" >Fruits and vegetables</a>
                                  </Link>
                              </li>
                              <li className="nav-item">
                                  <Link href="/b2c/categories">
                                  <a className="nav-link" >Cereals</a>
                                  </Link>
                              </li>
                              <li className="nav-item">
                                  <Link href="/b2c/categories">
                                  <a className="nav-link"  >Tools and Machinery</a>
                                  </Link>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>


            <div className="b2c-wrapper">
               <div className="container-fluid">
                   {props.children}
               </div>
            </div>

            <LandingPageFooter />

        </div>
    )
}

export default Layout
