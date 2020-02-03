import React, {useEffect, useState, useRef} from 'react'
import LandingPageLayout from "../../../components/layouts/LandingPageLayout";
import Testimonies from "../../../components/widgets/landing-page/Testimonies";

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';

import Slider from "react-slick";

import {Collapse, Form, Button, Select, Input, Icon, Progress} from 'antd';

const InputGroup = Input.Group;

const {Option} = Select;


function Home(props) {

    const [state, setState] = useState({
        show: false
    });


    const onCloseLoginModal = (e) => {
        e.preventDefault();
        setState(state => ({
            ...state,
            show: false
        }))
    }

    const onWritePost = () => {
        setState(state => ({
            ...state,
            show: true
        }))
    }

    function onChange(value) {
        console.log(`selected ${value}`);
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

    let slider = useRef()
    const next = () => {
        slider.slickNext();
    };

    const previous = () => {
        slider.slickPrev();
    };
    const settings = {
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 4000,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <LandingPageLayout>
            <div className="product-page">

                <div className="agrispx-call-for-action">
                   <img className="bg-img"  src="/img/5e09feeac38b0.png" alt=""/>
                   <img className="bg-overlay" src="/img/overlay.png" alt=""/>
                    <div className="container">
                        <h1>AGRI B2C</h1>
                        <h3>Get products <br/>
                            that meets standards
                        </h3>
                        <p>Farmers and Buyers engage on contact terms</p>
                        <button className="btn sign-up">Sign for free</button>
                    </div>
                </div>


                <section id="about" className="g-py-100 g-bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 g-pl-100--lg">
                                <div className="text-uppercase u-heading-v6-2 g-mb-15 g-ml-minus-55 g-ml-minus-90--md">
                                    <h4 className="u-heading-v6__subtitle g-font-weight-700 g-font-size-12 g-color-gray-dark-v5 g-ml-2 g-mb-10">About</h4>
                                    <h2 className="u-heading-v6__title g-font-weight-700 g-font-size-26 g-brd-primary mb-0">AGRI B2C</h2>
                                </div>

                                <p className="g-color-gray-dark-v4 g-mb-40">Etiam dolor tortor, egestas a libero eget,
                                    sollicitudin maximus nulla. Nunc vitae maximus ipsum. Vestibulum sodales nisi massa,
                                    vitae blandit massa luctus id.</p>

                                <div className="row g-mb-30 g-mb-0--md">
                                    <a className="js-fancybox-media col-md-7 g-pos-rel" href="javascript:;"
                                       data-src="//vimeo.com/20924263" data-animate-in="fadeIn"
                                       data-animate-out="fadeOut" data-speed="1000">
                                        <img className="img-fluid" src="/img/5e09feeac38b0.png"
                                             alt="Image description"/>
                                        <i className="fa fa-play fa-3x g-absolute-centered g-color-primary"></i>
                                    </a>

                                    <div className="col-md-5 d-flex align-self-center">
                                        <h4 className="h6 text-uppercase g-font-weight-700 mb-0">View our promo
                                            video</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <img className="img-fluid" src="/img/l1.jpg"
                                     alt="Image description"/>
                            </div>
                        </div>
                    </div>
                </section>



                <div className=" g-py-100 g-bg-white">
                    <div className="container">

                        <div className="u-heading-v2-2--bottom g-brd-primary g-mb-50 text-center">
                            <h2 className="text-uppercase g-line-height-1_1 g-font-weight-700 g-font-size-26 g-mb-15"> All New Arrivals </h2>
                            <p className="mb-0">Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam    rhoncus.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <article className="u-shadow-v11 rounded g-pa-20 g-mb-30">
                                    <div className="row align-items-center">

                                        <a className="col-sm-4" href="#!">
                                            <img className="img-fluid w-100" src="/img/foods/Premium-Quality-Fresh-Cavendish-Banana-For-Sale.jpeg" alt="Image Description"/>
                                        </a>

                                        <div className="col-sm-8 g-brd-left--sm g-brd-gray-light-v4">
                                            <div className="g-pa-10">
                                                <header className="d-flex justify-content-start g-mb-3">
                                                    <h4 className="h5 d-inline-block text-uppercase g-mr-10">

                                                        <a className="g-color-black" href="#!">Bananas</a>

                                                    </h4>
                                                    <a className="g-color-gray-dark-v5 g-font-style-normal text-uppercase"
                                                       href="#!">Foods</a>
                                                    <div
                                                        className="js-rating ml-auto d-inline-block g-color-primary g-font-size-13"
                                                        data-rating="3" data-spacing="2"
                                                        data-backward-icons-classes="fa fa-star-o g-opacity-0_5"></div>
                                                </header>

                                                <span
                                                    className="d-block g-color-gray-dark-v4 g-font-size-18 g-mb-10">

                          GHS10.00 <s className="d-inline-block g-color-red g-font-size-15 g-ml-10">GHS20.00</s>

                        </span>

                                                <p className="g-mb-20">
                                                    Etiam dolor tortor, egestas a libero eget, sollicitudin maximus nulla. Nunc vitae maximus ipsum.
                                                    Vestibulum sodales nisi massa, vitae blandit massa luctus id.
                                                </p>

                                                <ul className="list-inline g-mx-minus-20 mb-20 g-pl-7">
                                                    <li className="list-inline-item info-v5-4__action g-brd-right g-brd-gray-light-v3 g-color-gray-dark-v5 g-pr-20 g-pl-15">
                                                        <i className="align-middle g-font-size-16 g-transition-0_3 g-mr-7 icon-medical-022 u-line-icon-pro"></i>
                                                        <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                           href="#!">Add to Wishlist</a>
                                                    </li>
                                                    <li className="list-inline-item info-v5-4__action g-color-gray-dark-v5 g-pr-20 g-pl-15">
                                                        <i className="align-middle g-font-size-16 g-transition-0_3 g-mr-7 icon-communication-159 u-line-icon-pro"></i>
                                                        <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                           href="#!">Add to Compare</a>
                                                    </li>
                                                </ul>

                                                <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-12 text-uppercase g-mx-5 g-mt-10">BUy Now</button>
                                                <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-12 text-uppercase g-mx-5 g-mt-10">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>


                        <div className="g-pt-20">
                            <div className="row">
                                <div className="col-md-6 col-lg-3 g-mb-30">

                                    <article className="g-color-gray-dark-v4">

                                        <a className="d-block" href="#!">
                                            <img className="g-height-200 w-100" src="/img/foods/5c4268d9d0074.image.jpg" alt="Image Description"/>
                                        </a>

                                        <div className="g-pa-20">
                                            <h3 className="h6 g-font-weight-600 text-uppercase g-mb-10">

                                                <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                                   href="#!">Item Name</a>

                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                                <span
                                                                    className="g-color-black g-font-size-16">GHS95.00</span>
                                                <div
                                                    className="js-rating g-color-primary g-font-size-11"
                                                    data-rating="3" data-spacing="2"></div>
                                            </div>

                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">BUy Now</button>
                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">Add to Cart</button>

                                        </div>

                                    </article>
                                </div>

                                <div className="col-md-6 col-lg-3 g-mb-30">

                                    <article>

                                        <a className="d-block" href="#!">
                                            <img className="g-height-200 w-100" src="/img/foods/banana-bunch-white-background.jpg" alt="Image Description"/>
                                        </a>

                                        <div className="g-pa-20">
                                            <h3 className="h6 g-font-weight-600 text-uppercase g-mb-10">

                                                <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                                   href="#!">Item Name</a>

                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                                <span
                                                                    className="g-color-black g-font-size-16">GHS95.00</span>
                                                <div
                                                    className="js-rating g-color-primary g-font-size-11"
                                                    data-rating="3" data-spacing="2"></div>
                                            </div>

                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">BUy Now</button>
                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">Add to Cart</button>

                                        </div>

                                    </article>

                                </div>

                                <div className="col-md-6 col-lg-3 g-mb-30">

                                    <article className="g-color-gray-dark-v4">
                                        <a className="d-block" href="#!">
                                            <img className="g-height-200 w-100" src="/img/foods/The-weird-reason-that-mango-makes-your-mouth-itch_548103076-Darren-Tierney-1024x683.jpg" alt="Image Description"/>
                                        </a>

                                        <div className="g-pa-20">
                                            <h3 className="h6 g-font-weight-600 text-uppercase g-mb-10">

                                                <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                                   href="#!">Item Name</a>

                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                                <span
                                                                    className="g-color-black g-font-size-16">GHS95.00</span>
                                                <div
                                                    className="js-rating g-color-primary g-font-size-11"
                                                    data-rating="3" data-spacing="2"></div>
                                            </div>

                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">BUy Now</button>
                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">Add to Cart</button>

                                        </div>

                                    </article>
                                </div>

                                <div className="col-md-6 col-lg-3 g-mb-30">
                                    <article className="g-color-gray-dark-v4">
                                        <a className="d-block" href="#!">
                                            <img className="g-height-200 w-100" src="/img/foods/1372152620_plantain.webp" alt="Image Description"/>
                                        </a>
                                        <div className="g-pa-20">
                                            <h3 className="h6 g-font-weight-600 text-uppercase g-mb-10">

                                                <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                                   href="#!">Item Name</a>

                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                                <span
                                                                    className="g-color-black g-font-size-16">GHS95.00</span>
                                                <div
                                                    className="js-rating g-color-primary g-font-size-11"
                                                    data-rating="3" data-spacing="2"></div>
                                            </div>

                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">BUy Now</button>
                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">Add to Cart</button>

                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-6 col-lg-3 g-mb-30">

                                    <article className="g-color-gray-dark-v4">

                                        <a className="d-block" href="#!">
                                            <img className="g-height-200 w-100" src="/img/foods/5c4268d9d0074.image.jpg" alt="Image Description"/>
                                        </a>

                                        <div className="g-pa-20">
                                            <h3 className="h6 g-font-weight-600 text-uppercase g-mb-10">

                                                <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                                   href="#!">Item Name</a>

                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                                <span
                                                                    className="g-color-black g-font-size-16">GHS95.00</span>
                                                <div
                                                    className="js-rating g-color-primary g-font-size-11"
                                                    data-rating="3" data-spacing="2"></div>
                                            </div>

                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">BUy Now</button>
                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">Add to Cart</button>

                                        </div>

                                    </article>
                                </div>

                                <div className="col-md-6 col-lg-3 g-mb-30">

                                    <article>

                                        <a className="d-block" href="#!">
                                            <img className="g-height-200 w-100" src="/img/foods/banana-bunch-white-background.jpg" alt="Image Description"/>
                                        </a>

                                        <div className="g-pa-20">
                                            <h3 className="h6 g-font-weight-600 text-uppercase g-mb-10">

                                                <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                                   href="#!">Item Name</a>

                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                                <span
                                                                    className="g-color-black g-font-size-16">GHS95.00</span>
                                                <div
                                                    className="js-rating g-color-primary g-font-size-11"
                                                    data-rating="3" data-spacing="2"></div>
                                            </div>

                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">BUy Now</button>
                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">Add to Cart</button>

                                        </div>

                                    </article>

                                </div>

                                <div className="col-md-6 col-lg-3 g-mb-30">

                                    <article className="g-color-gray-dark-v4">
                                        <a className="d-block" href="#!">
                                            <img className="g-height-200 w-100" src="/img/foods/The-weird-reason-that-mango-makes-your-mouth-itch_548103076-Darren-Tierney-1024x683.jpg" alt="Image Description"/>
                                        </a>

                                        <div className="g-pa-20">
                                            <h3 className="h6 g-font-weight-600 text-uppercase g-mb-10">

                                                <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                                   href="#!">Item Name</a>

                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                                <span
                                                                    className="g-color-black g-font-size-16">GHS95.00</span>
                                                <div
                                                    className="js-rating g-color-primary g-font-size-11"
                                                    data-rating="3" data-spacing="2"></div>
                                            </div>

                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">BUy Now</button>
                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">Add to Cart</button>

                                        </div>

                                    </article>
                                </div>

                                <div className="col-md-6 col-lg-3 g-mb-30">
                                    <article className="g-color-gray-dark-v4">
                                        <a className="d-block" href="#!">
                                            <img className="g-height-200 w-100" src="/img/foods/1372152620_plantain.webp" alt="Image Description"/>
                                        </a>
                                        <div className="g-pa-20">
                                            <h3 className="h6 g-font-weight-600 text-uppercase g-mb-10">

                                                <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                                   href="#!">Item Name</a>

                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                                <span
                                                                    className="g-color-black g-font-size-16">GHS95.00</span>
                                                <div
                                                    className="js-rating g-color-primary g-font-size-11"
                                                    data-rating="3" data-spacing="2"></div>
                                            </div>

                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">BUy Now</button>
                                            <button type="button" className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-8 text-uppercase g-mx-5 g-mt-10">Add to Cart</button>

                                        </div>
                                    </article>
                                </div>

                            </div>
                        </div>

                        <div className="text-center g-pt-30">
                            <a className="btn u-btn-primary g-font-size-12 text-uppercase g-py-8 g-px-12" href="#!">View More</a>
                        </div>

                    </div>
                </div>


                <div className="agrispx-benefits">
                    <div className="container">
                        <div className="d-flex justify-content-start">
                            <div className="col-md-7 col-sm-10">
                                <h3>Benefits of spx</h3>
                                <div className="row">
                                    <div className="col-md-6 benefit">
                                        <i className="fa fa-user"></i>
                                        <span>Saving time and costs on procurement</span>
                                    </div>
                                    <div className="col-md-6 benefit">
                                        <i className="fa fa-user"></i>
                                        <span>Facilitates planning and implementation.</span>
                                    </div>
                                    <div className="col-md-6 benefit">
                                        <i className="fa fa-user"></i>
                                        <span>Build digital trust between buyers and supplies</span>
                                    </div>
                                    <div className="col-md-6 benefit">
                                        <i className="fa fa-user"></i>
                                        <span>Conveniently accessible from home, phone and office</span>
                                    </div>
                                    <div className="col-md-6 benefit">
                                        <i className="fa fa-user"></i>
                                        <span>Supports quality assurances</span>
                                    </div>
                                    <div className="col-md-6 benefit">
                                        <i className="fa fa-user"></i>
                                        <span>Supports capacity building</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="/img/cow.png" alt=""/>
                </div>





                <div className="agrispx-how-it-works">
                <img src="/img/backgrounds/Path 4.png" />
                    <div className="container">
                        <div className="info">
                            <h1>How it works</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer
                                took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries,
                            </p>
                        </div>

                                   <div className="d-flex justify-content-center">
                                       <div className="board col-md-8">

                                           <div className="d-flex justify-content-center">
                                               <ul className="nav nav-tabs" id="myTab">
                                                   <div className="liner"></div>
                                                   <li className="  active">
                                                       <a href="#1" data-toggle="tab"  >
                                                  <span className="round-tabs one">
                                                          <i className="glyphicon glyphicon-home">01</i>
                                                  </span>
                                                       </a>
                                                   </li>

                                                   <li><a href="#2" data-toggle="tab"  >
                                                     <span className="round-tabs two">
                                                         <i className="glyphicon glyphicon-user">02</i>
                                                     </span>
                                                   </a>
                                                   </li>
                                                   <li><a href="#3" data-toggle="tab"  >
                                                     <span className="round-tabs three">
                                                          <i className="glyphicon glyphicon-gift">03</i>
                                                     </span> </a>
                                                   </li>

                                                   <li><a href="#4" data-toggle="tab"  >
                                                     <span className="round-tabs four">
                                                          <i className="glyphicon glyphicon-comment">04</i>
                                                     </span>
                                                   </a>
                                                   </li>
                                               </ul>
                                           </div>

                                           <div className="tab-content">
                                               <div className="tab-pane fade in active show" id="1">
                                                   <h3 className="">Post for  or request for supply 1</h3>
                                                   <div className="content">
                                                       Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.
                                                   </div>
                                               </div>
                                               <div className="tab-pane fade show" id="2">
                                                   <h3 className="">Post for  or request for supply 2 </h3>
                                                   <div className="content">
                                                       Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.
                                                   </div>
                                               </div>
                                               <div className="tab-pane fade show" id="3">
                                                   <h3 className="">Post for  or request for supply 3</h3>
                                                   <div className="content">
                                                       Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.
                                                   </div>
                                               </div>
                                               <div className="tab-pane fade show" id="4">
                                                   <h3 className="">Post for  or request for supply 4</h3>
                                                   <div className="content">
                                                       Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
                                                       mazim facilis tincidunt ut, utinam saperet facilisi an vim.
                                                   </div>
                                               </div>
                                               <div className="clearfix"></div>
                                           </div>

                                       </div>
                                   </div>


                    </div>
                </div>

                <div className="agrispx-demo">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <div className="col-md-8">
                                <h3>product demo</h3>
                                <div className="row">
                                    <div className="col-md-6 phone">
                                        <img src="/img/phone.png" alt=""/>
                                    </div>
                                    <div className="col-md-6 video">
                                       <div>
                                           <i className="fa fa-play-circle"></i>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <section id="FAQ" className="g-theme-bg-gray-light-v1 g-bg-white g-py-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 d-flex align-items-center g-order-2--lg g-mb-50 g-mb-0--lg">
                                <div className="w-100">
                                    <div className="u-heading-v2-2--bottom g-brd-primary g-mb-50">
                                        <h2 className="text-uppercase g-line-height-1_1 g-font-weight-700 g-font-size-26 g-mb-15">FAQ</h2>
                                        <p className="mb-0">Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                                            rhoncus.</p>
                                    </div>

                                    <div id="FAQAccordion">
                                        <div className="card g-brd-none">
                                            <div id="FAQAccordionHeading1"
                                                 className="card-header u-accordion__header g-pos-rel g-bg-transparent g-brd-none rounded-0 g-py-10 g-px-30">
                                                <a className="g-font-weight-700 g-font-size-18"
                                                   href="#FAQAccordionBody1" aria-expanded="true"
                                                   aria-controls="FAQAccordionBody1" data-toggle="collapse">
                      <span className="u-accordion__control-icon g-absolute-centered--y g-left-0 g-color-primary">
                        <i className="fa fa-plus"></i>
                        <i className="fa fa-minus"></i>
                      </span>
                                                    Phasellus bibendum semper lectus, in ornare erat tempus eget?
                                                </a>
                                            </div>

                                            <div id="FAQAccordionBody1" className="collapse show"
                                                 aria-labelledby="FAQAccordionHeading1" data-parent="#FAQAccordion">
                                                <div className="card-block u-accordion__body g-py-10 g-px-30">
                                                    <p className="g-line-height-1_5 mb-0">Anim pariatur cliche
                                                        reprehenderit, 3 wolf moon officia aute, non cupidatat
                                                        skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                        eiusmod.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card g-brd-none">
                                            <div id="FAQAccordionHeading2"
                                                 className="card-header u-accordion__header g-pos-rel g-bg-transparent g-brd-none rounded-0 g-py-10 g-px-30">
                                                <a className="g-font-weight-700 g-font-size-18 collapsed"
                                                   href="#FAQAccordionBody2" aria-expanded="false"
                                                   aria-controls="FAQAccordionBody2" data-toggle="collapse">
                      <span className="u-accordion__control-icon g-absolute-centered--y g-left-0 g-color-primary">
                        <i className="fa fa-plus"></i>
                        <i className="fa fa-minus"></i>
                      </span>
                                                    Duis vehicula turpis tincidunt, malesuada mauris et, tincidunt nisl?
                                                </a>
                                            </div>

                                            <div id="FAQAccordionBody2" className="collapse"
                                                 aria-labelledby="FAQAccordionHeading2" data-parent="#FAQAccordion">
                                                <div className="card-block u-accordion__body g-py-10 g-px-30">
                                                    <p className="g-line-height-1_5 mb-0">Anim pariatur cliche
                                                        reprehenderit, enim eiusmod high life accusamus terry richardson
                                                        ad squid. Food truck quinoa nesciunt laborum eiusmod.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card g-brd-none">
                                            <div id="FAQAccordionHeading3"
                                                 className="card-header u-accordion__header g-pos-rel g-bg-transparent g-brd-none rounded-0 g-py-10 g-px-30">
                                                <a className="g-font-weight-700 g-font-size-18 collapsed"
                                                   href="#FAQAccordionBody3" aria-expanded="false"
                                                   aria-controls="FAQAccordionBody3" data-toggle="collapse">
                      <span className="u-accordion__control-icon g-absolute-centered--y g-left-0 g-color-primary">
                        <i className="fa fa-plus"></i>
                        <i className="fa fa-minus"></i>
                      </span>
                                                    Mauris et lacus ut massa luctus varius?
                                                </a>
                                            </div>

                                            <div id="FAQAccordionBody3" className="collapse"
                                                 aria-labelledby="FAQAccordionHeading3" data-parent="#FAQAccordion">
                                                <div className="card-block u-accordion__body g-py-10 g-px-30">
                                                    <p className="g-line-height-1_5 mb-0">3 wolf moon officia aute, non
                                                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                        laborum eiusmod.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card g-brd-none">
                                            <div id="FAQAccordionHeading4"
                                                 className="card-header u-accordion__header g-pos-rel g-bg-transparent g-brd-none rounded-0 g-py-10 g-px-30">
                                                <a className="g-font-weight-700 g-font-size-18 collapsed"
                                                   href="#FAQAccordionBody4" aria-expanded="false"
                                                   aria-controls="FAQAccordionBody4" data-toggle="collapse">
                      <span className="u-accordion__control-icon g-absolute-centered--y g-left-0 g-color-primary">
                        <i className="fa fa-plus"></i>
                        <i className="fa fa-minus"></i>
                      </span>
                                                    Curabitur id elit lobortis, malesuada nibh in, fringilla metus?
                                                </a>
                                            </div>

                                            <div id="FAQAccordionBody4" className="collapse"
                                                 aria-labelledby="FAQAccordionHeading4" data-parent="#FAQAccordion">
                                                <div className="card-block u-accordion__body g-py-10 g-px-30">
                                                    <p className="g-line-height-1_5 mb-0">Anim pariatur cliche
                                                        reprehenderit, enim eiusmod high life accusamus terry richardson
                                                        ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        nesciunt laborum eiusmod.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card g-brd-none">
                                            <div id="FAQAccordionHeading5"
                                                 className="card-header u-accordion__header g-pos-rel g-bg-transparent g-brd-none rounded-0 g-py-10 g-px-30">
                                                <a className="g-font-weight-700 g-font-size-18 collapsed"
                                                   href="#FAQAccordionBody5" aria-expanded="false"
                                                   aria-controls="FAQAccordionBody5" data-toggle="collapse">
                      <span className="u-accordion__control-icon g-absolute-centered--y g-left-0 g-color-primary">
                        <i className="fa fa-plus"></i>
                        <i className="fa fa-minus"></i>
                      </span>
                                                    Fusce accumsan faucibus laoreet?
                                                </a>
                                            </div>

                                            <div id="FAQAccordionBody5" className="collapse"
                                                 aria-labelledby="FAQAccordionHeading5" data-parent="#FAQAccordion">
                                                <div className="card-block u-accordion__body g-py-10 g-px-30">
                                                    <p className="g-line-height-1_5 mb-0">Anim pariatur cliche
                                                        reprehenderit, enim eiusmod high life accusamus terry richardson
                                                        ad squid. 3 wolf moon officia aute.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 text-center g-order-1--lg">
                                <img className="img-fluid" src="/img/4.png"
                                     alt="Image description"/>
                            </div>
                        </div>
                    </div>
                </section>


                <section className=" auto-init height-is-based-on-content use-loading auth-page" data-options="{direction: 'reverse', settings_mode_oneelement_max_offset: '150'}">
                    <div className="divimage dzsparallaxer--target w-100 g-bg-repeat g-pos-abs g-left-0 g-right-0 g-top-0 h-100" style={{
                        backgroundImage: 'url(/img/pattern1.png)'
                    }}
                    ></div>

                    <div className="container">


                        <div className="container d-flex justify-content-center ">
                            <div className="col-md-6 col-12 ">

                                <form className="form">


                                    <h3>REGISTER</h3>

                                    <div className="field input-group u-shadow-v19">
                                        <div className="input-icon input-group-append ">
                                            <i className="fa fa-user"></i>
                                        </div>
                                        <input className="input form-control" type="text" placeholder="Full name" aria-label="Full name"/>
                                    </div>

                                    <div className="field input-group u-shadow-v19">
                                        <div className="input-icon input-group-append ">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <input className="input form-control" type="text" placeholder="Email" aria-label="Enter email"/>
                                    </div>

                                    <div className="field input-group u-shadow-v19">
                                        <div className="input-icon input-group-append ">
                                            <i className="fa fa-mobile"></i>
                                        </div>
                                        <input className="input form-control" type="text" placeholder="mobile number" aria-label="mobile number"/>
                                    </div>


                                    <div className="field input-group u-shadow-v19">
                                        <div className="input-icon input-group-append ">
                                            <i className="fa fa-key"></i>
                                        </div>
                                        <input className="input form-control" type="text" placeholder="password" aria-label="Enter email"/>
                                    </div>


                                    <div className="field">
                                        <button className="btn submit-btn">
                                            <span>SIGN UP</span>
                                            <i className="fa fa-long-arrow-right"></i>
                                        </button>
                                    </div>

                                    <div className="field action-btn">
                                        <i className="fa fa-lock "></i>
                                        Already  have an account?
                                        <Link href="/login">
                                            <a>  sign in</a>
                                        </Link>
                                    </div>


                                    <div className="field action-btn">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                                                <button className="btn facebook-btn">
                                                    <i className="fa fa-facebook"></i>
                                                    <span>SIGN UP</span>
                                                </button>
                                            </div>
                                            <div className="col-md-6 col-lg-6 col-sm-6 col-6 d-flex justify-content-end">
                                                <button className="btn google-btn">
                                                    <img src="/img/icons/icons8_Google_48px_1.png" alt=""/>
                                                    <span>SIGN IN</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </section>


            </div>
        </LandingPageLayout>
    )

}


export default Home
