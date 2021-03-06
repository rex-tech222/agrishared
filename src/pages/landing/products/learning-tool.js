import React, {useEffect, useState, useRef} from 'react'
import LandingPageLayout from "../../../components/layouts/LandingPageLayout";
import Testimonies from "../../../components/widgets/landing-page/Testimonies";
import LearnCourses from "../../../components/widgets/landing-page/LearnCourses";
import DemoSection from "../../../components/widgets/landing-page/DemoSection";
import Testimonies01 from "../../../components/widgets/landing-page/Testimonies01";

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
        dots: true,
        autoplay: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 4000,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <LandingPageLayout activePage={'knowledge-library'}>
            <div className="product-page">

                <div className="silder-block">
                    <div onClick={previous} className="prev fa fa-angle-left"></div>
                    <Slider ref={c => ( slider = c)} {...settings}>
                        <div>
                            <div className="agrispx-call-for-action ">
                                <img className="bg-img"  src="/img/5e09feeac38b0.png" alt=""/>
                                <img className="bg-overlay" src="/img/overlay.png" alt=""/>
                                <div className="container g-pl-80 g-pr-80">
                                    <h1>LEARNING TOOL</h1>
                                    <h3>Get products <br/>
                                        that meets standards
                                    </h3>
                                    <p>Farmers and Buyers engage on contact terms</p>
                                    <button className="btn sign-up">Sign for free</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="agrispx-call-for-action">
                                <img src="/img/5e09feeac38b0.png" alt=""/>
                                <img className="bg-overlay" src="/img/overlay.png" alt=""/>
                                <div className="container g-pl-80 g-pr-80">
                                    <h1>LEARNING TOOL</h1>
                                    <h3>Get products <br/>
                                        that meets standards
                                    </h3>
                                    <p>Farmers and Buyers engage on contact terms</p>
                                    <button className="btn sign-up">Sign for free</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="agrispx-call-for-action">
                                <img src="/img/5e09feeac38b0.png" alt=""/>
                                <img className="bg-overlay" src="/img/overlay.png" alt=""/>
                                <div className="container g-pl-80 g-pr-80">
                                    <h1>LEARNING TOOL</h1>
                                    <h3>Get products <br/>
                                        that meets standards
                                    </h3>
                                    <p>Farmers and Buyers engage on contact terms</p>
                                    <button className="btn sign-up">Sign for free</button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div onClick={next} className="next fa fa-angle-right "></div>
                </div>


                <div className="g-py-80 " style={{background: '#DEE6DA'}}>
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-md-4">
                                <img src="/img/icons/icons8_Access_96px.png" alt=""/>
                                <h4 className="g-font-weight-800 g-font-size-17">Unlimited Access</h4>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="col-md-4">
                                <img src="/img/icons/icons8_Collaboration_96px.png" alt=""/>
                                <h4 className="g-font-weight-800 g-font-size-17">Expert Solutions</h4>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="col-md-4">
                                <img src="/img/icons/icons8_Online_96px.png" alt=""/>
                                <h4 className="g-font-weight-800 g-font-size-17">Learn Remotely</h4>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>





                <DemoSection />




                <section id="about" className="g-py-100 g-bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 g-pl-100--lg">
                                <div className="text-uppercase u-heading-v6-2 g-mb-15 g-ml-minus-55 g-ml-minus-90--md">
                                    <h4 className="u-heading-v6__subtitle g-font-weight-700 g-font-size-12 g-color-gray-dark-v5 g-ml-2 g-mb-10">About</h4>
                                    <h2 className="u-heading-v6__title g-font-weight-700 g-font-size-26 g-brd-primary mb-0">Knowledge Library</h2>
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


                <section id="ourCourses" className="g-py-100" style={{backgroundImage: 'url(/img/pattern1.png)'}}>
                    <div className="container g-max-width-750 g-mb-80">
                        <div className="text-uppercase text-center u-heading-v2-5--top g-brd-primary">
                            <h4 className="g-font-weight-700 g-font-size-26 g-color-black">Trainings</h4>
                        </div>
                    </div>

                    <div className="container-fluid g-px-30">


                        <div className="shortcode-html">

                            <ul className="nav justify-content-center u-nav-v5-1 u-nav-primary g-mb-30" role="tablist" data-target="nav-5-1-primary-hor-center" data-tabs-mobile-type="slide-up-down" data-btn-classes="btn btn-md btn-block u-btn-outline-primary">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tab1" role="tab">Irrigation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab2" role="tab">Poultry farming</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab3" role="tab">Fish farming</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab4" role="tab">Irrigation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab5" role="tab">Poultry farming</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab5" role="tab">Fish farming</a>
                                </li>
                            </ul>



                            <div id="nav-5-1-primary-hor-center" className="tab-content g-pt-20">
                                <div className="tab-pane fade show active" id="tab1" role="tabpanel">
                                    <LearnCourses/>
                                </div>
                                <div className="tab-pane fade" id="tab2" role="tabpanel">
                                    <LearnCourses/>
                                </div>
                                <div className="tab-pane fade" id="tab3" role="tabpanel">
                                    <LearnCourses/>
                                </div>
                                <div className="tab-pane fade" id="tab4" role="tabpanel">
                                    <LearnCourses/>
                                </div>
                                <div className="tab-pane fade" id="tab5" role="tabpanel">
                                    <LearnCourses/>
                                </div>
                                <div className="tab-pane fade" id="tab6" role="tabpanel">
                                    <LearnCourses/>
                                </div>
                            </div>

                            <div className="text-center g-pt-40">
                                <a className="btn yellow-bg g-font-size-12 text-uppercase g-py-8 g-px-12" href="#!">View All</a>
                            </div>
                             
                        </div>

                        




                    </div>
                </section>



                <section  className="g-py-100" style={{backgroundImage: 'url(/img/Rectangle14.png)'}}>


                    <div className="container g-px-30">
                        <div className="row">
                            <div className="col-lg-3 text-center">
                                <Progress strokeColor="#eea90e" type="circle" percent={20} format={percent => `${percent} `} />
                                <div className="text-center g-mt-20 g-color-white">
                                    <h4 className="g-font-size-18">Trainees Registered</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 text-center">
                                <Progress strokeColor="#eea90e" type="circle" percent={20} format={percent => `${percent} `} />
                                <div className="text-center g-mt-20 g-color-white">
                                    <h4 className="g-font-size-18">Success trainee Stories</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 text-center">
                                <Progress strokeColor="#eea90e" type="circle" percent={20} format={percent => `${percent} `} />
                                <div className="text-center g-mt-20 g-color-white">
                                    <h4 className="g-font-size-18">Website Visits & Traffic</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 text-center">
                                <Progress strokeColor="#eea90e" type="circle" percent={20} format={percent => `${percent} `} />
                                <div className="text-center g-mt-20 g-color-white">
                                    <h4 className="g-font-size-18">Ranked The Best Agri Training Site</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


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


                <section id="teachers" className="g-py-100" style={{backgroundImage: 'url(/img/pattern2.png)'}}>
                    <div className="container text-center g-max-width-750 g-mb-60">
                        <div className="text-uppercase u-heading-v2-5--top g-brd-white">
                            <h2 className="u-heading-v2__title g-font-weight-700 g-font-size-12 g-color-white-opacity-0_8 g-mb-10">
                                teachers</h2>
                            <h4 className="g-font-weight-700 g-font-size-26 g-color-white">Meet the professionals</h4>
                        </div>

                        <p className="g-color-white-opacity-0_8 mb-0">Etiam dolor tortor, egestas a libero eget,
                            sollicitudin maximus nulla. Nunc vitae maximus ipsum. Vestibulum sodales nisi massa, vitae
                            blandit massa luctus id.</p>
                    </div>

                    <div className="container">

                        <div className="g-mx-minus-9--sm">
                            <div className="js-carousel slick-initialized slick-slider" data-slides-show="4">
                                <div className="slick-list draggable">
                                    <div className="slick-track"  >
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="text-center g-parent g-bg-white--hover g-pa-20 g-transition-0_3">

                                                    <figure className="g-pos-rel g-mb-30">

                                                        <img className="w-100" src="/img/4.jpg"
                                                             alt="Image Description"/>

                                                        <figcaption>
                                                            <ul className="list-unstyled g-absolute-centered opacity-0 g-opacity-1--parent-hover mb-0 g-transition-0_3">
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-twitter"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-pinterest-p"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-facebook"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="mb-0">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-linkedin"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </figcaption>

                                                    </figure>

                                                    <em className="d-block text-uppercase g-font-style-normal g-font-size-13 g-color-white g-color-gray-dark-v5--parent-hover g-mb-15"> Seed Hacker </em>
                                                    <h4 className="h5 text-uppercase g-font-weight-700 g-color-white g-color-black--parent-hover g-mb-15"> Abraham <br/> Nwoke
                                                    </h4>
                                                    <p className="g-font-size-default g-color-white g-color-gray-dark-v5--parent-hover mb-0">Mauris
                                                        sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed
                                                        dignissim tellus quis sapien sagittis cursus. Cras porttitor auctor
                                                        sapien, eu tempus nunc.</p>

                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="text-center g-parent g-bg-white--hover g-pa-20 g-transition-0_3">

                                                    <figure className="g-pos-rel g-mb-30">

                                                        <img className="w-100" src="/img/4.jpg"
                                                             alt="Image Description"/>

                                                        <figcaption>
                                                            <ul className="list-unstyled g-absolute-centered opacity-0 g-opacity-1--parent-hover mb-0 g-transition-0_3">
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-twitter"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-pinterest-p"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-facebook"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="mb-0">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-linkedin"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </figcaption>

                                                    </figure>

                                                    <em className="d-block text-uppercase g-font-style-normal g-font-size-13 g-color-white g-color-gray-dark-v5--parent-hover g-mb-15"> Seed Hacker </em>
                                                    <h4 className="h5 text-uppercase g-font-weight-700 g-color-white g-color-black--parent-hover g-mb-15"> Abraham <br/> Nwoke
                                                    </h4>
                                                    <p className="g-font-size-default g-color-white g-color-gray-dark-v5--parent-hover mb-0">Mauris
                                                        sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed
                                                        dignissim tellus quis sapien sagittis cursus. Cras porttitor auctor
                                                        sapien, eu tempus nunc.</p>

                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="text-center g-parent g-bg-white--hover g-pa-20 g-transition-0_3">

                                                    <figure className="g-pos-rel g-mb-30">

                                                        <img className="w-100" src="/img/4.jpg"
                                                             alt="Image Description"/>

                                                        <figcaption>
                                                            <ul className="list-unstyled g-absolute-centered opacity-0 g-opacity-1--parent-hover mb-0 g-transition-0_3">
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-twitter"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-pinterest-p"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-facebook"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="mb-0">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-linkedin"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </figcaption>

                                                    </figure>

                                                    <em className="d-block text-uppercase g-font-style-normal g-font-size-13 g-color-white g-color-gray-dark-v5--parent-hover g-mb-15"> Seed Hacker </em>
                                                    <h4 className="h5 text-uppercase g-font-weight-700 g-color-white g-color-black--parent-hover g-mb-15"> Abraham <br/> Nwoke
                                                    </h4>
                                                    <p className="g-font-size-default g-color-white g-color-gray-dark-v5--parent-hover mb-0">Mauris
                                                        sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed
                                                        dignissim tellus quis sapien sagittis cursus. Cras porttitor auctor
                                                        sapien, eu tempus nunc.</p>

                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="text-center g-parent g-bg-white--hover g-pa-20 g-transition-0_3">

                                                    <figure className="g-pos-rel g-mb-30">

                                                        <img className="w-100" src="/img/4.jpg"
                                                             alt="Image Description"/>

                                                        <figcaption>
                                                            <ul className="list-unstyled g-absolute-centered opacity-0 g-opacity-1--parent-hover mb-0 g-transition-0_3">
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-twitter"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-pinterest-p"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-facebook"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="mb-0">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-linkedin"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </figcaption>

                                                    </figure>

                                                    <em className="d-block text-uppercase g-font-style-normal g-font-size-13 g-color-white g-color-gray-dark-v5--parent-hover g-mb-15"> Seed Hacker </em>
                                                    <h4 className="h5 text-uppercase g-font-weight-700 g-color-white g-color-black--parent-hover g-mb-15"> Abraham <br/> Nwoke
                                                    </h4>
                                                    <p className="g-font-size-default g-color-white g-color-gray-dark-v5--parent-hover mb-0">Mauris
                                                        sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed
                                                        dignissim tellus quis sapien sagittis cursus. Cras porttitor auctor
                                                        sapien, eu tempus nunc.</p>

                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="text-center g-parent g-bg-white--hover g-pa-20 g-transition-0_3">

                                                    <figure className="g-pos-rel g-mb-30">

                                                        <img className="w-100" src="/img/4.jpg"
                                                             alt="Image Description"/>

                                                        <figcaption>
                                                            <ul className="list-unstyled g-absolute-centered opacity-0 g-opacity-1--parent-hover mb-0 g-transition-0_3">
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-twitter"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-pinterest-p"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-facebook"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="mb-0">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-linkedin"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </figcaption>

                                                    </figure>

                                                    <em className="d-block text-uppercase g-font-style-normal g-font-size-13 g-color-white g-color-gray-dark-v5--parent-hover g-mb-15"> Seed Hacker </em>
                                                    <h4 className="h5 text-uppercase g-font-weight-700 g-color-white g-color-black--parent-hover g-mb-15"> Abraham <br/> Nwoke
                                                    </h4>
                                                    <p className="g-font-size-default g-color-white g-color-gray-dark-v5--parent-hover mb-0">Mauris
                                                        sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed
                                                        dignissim tellus quis sapien sagittis cursus. Cras porttitor auctor
                                                        sapien, eu tempus nunc.</p>

                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="text-center g-parent g-bg-white--hover g-pa-20 g-transition-0_3">

                                                    <figure className="g-pos-rel g-mb-30">

                                                        <img className="w-100" src="/img/4.jpg"
                                                             alt="Image Description"/>

                                                        <figcaption>
                                                            <ul className="list-unstyled g-absolute-centered opacity-0 g-opacity-1--parent-hover mb-0 g-transition-0_3">
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-twitter"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-pinterest-p"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="g-mb-5">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-facebook"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="mb-0">
                                                                    <a className="u-icon-v3 u-icon-size--sm g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
                                                                       href="#!" tabIndex="0">
                                                                        <i className="fa fa-linkedin"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </figcaption>

                                                    </figure>

                                                    <em className="d-block text-uppercase g-font-style-normal g-font-size-13 g-color-white g-color-gray-dark-v5--parent-hover g-mb-15"> Seed Hacker </em>
                                                    <h4 className="h5 text-uppercase g-font-weight-700 g-color-white g-color-black--parent-hover g-mb-15"> Abraham <br/> Nwoke
                                                    </h4>
                                                    <p className="g-font-size-default g-color-white g-color-gray-dark-v5--parent-hover mb-0">Mauris
                                                        sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed
                                                        dignissim tellus quis sapien sagittis cursus. Cras porttitor auctor
                                                        sapien, eu tempus nunc.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>







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


<Testimonies01 />


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

  <div className="g-bg-white  g-py-40">
                <div className="container  ">
                     <div className="row">
                         <div className="col-md-6">
                             <div className="g-px-30">
                                 <h3 className="yellow-color g-font-weight-700 g-font-size-40">Our <br/>Pricing Plans</h3>
                                 <p className="g-mt-40">Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean nisl nibh, sag faucibus sit
                                     amet, faucibus vitae lac elementum at isi pharetra convallis.
                                 </p>
                                 <div className="text-left g-pt-40">
                                     <a className="btn green-bg g-font-size-10 text-uppercase g-py-7 g-px-10" href="#!">Start Free Triall</a>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-6">
                             <div className="row">
                                 <div className="col-lg-6">
                                     <div className="text-center g-rounded-5 g-pa-30 g-brd-around g-brd-gray-light-v5 g-overflow-hidden u-shadow-v1-4 u-shadow-v1-5--hover g-transition-0_3">
                                         <h4 className="text-left g-font-weight-400 g-font-size-14 g-mb-15">Free</h4>
                                         <div className="d-block g-mb-23">
                                             <span className="align-top g-color-black">GH</span>
                                             <span className="g-color-black g-font-weight-800 g-font-size-70">0</span>
                                             <span className="g-color-gray g-font-size-23">/</span>
                                             <span className="g-color-black">monthly</span>
                                         </div>
                                         <p>
                                             Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean nisl nibh, sag faucibus sit ame
                                         </p>

                                         <div className="text-center g-pt-40">
                                             <a className="btn green-bg g-font-size-10 text-uppercase g-py-7 g-px-10" href="#!">Start Free Triall</a>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="col-lg-6">
                                     <div className="text-center g-rounded-5 g-pa-30 g-brd-around g-brd-gray-light-v5 g-overflow-hidden u-shadow-v1-4 u-shadow-v1-5--hover g-transition-0_3">
                                        <h4 className="text-left g-font-weight-400 g-font-size-14 g-mb-15">Premium</h4>
                                         <div className="d-block g-mb-23">
                                             <span className="align-top g-color-black">GH</span>
                                             <span className="g-color-black g-font-weight-800 g-font-size-70">15</span>
                                             <span className="g-color-gray g-font-size-23">/</span>
                                             <span className="g-color-black">monthly</span>
                                         </div>
                                         <p>
                                             Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean nisl nibh, sag faucibus sit ame
                                         </p>

                                         <div className="text-center g-pt-40">
                                             <a className="btn green-bg g-font-size-10 text-uppercase g-py-7 g-px-10" href="#!">Start Free Triall</a>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                </div>
  </div>
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
