import React, {useEffect, useState, useRef} from 'react'
import LandingPageLayout from "../../components/layouts/LandingPageLayout";
import FindUserClientSlider from "../../components/widgets/landing-page/FindUserClientSlider";

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
                   <img src="/img/5e09feeac38b0.png" alt=""/>
                   <img className="bg-overlay" src="/img/overlay.png" alt=""/>
                    <div className="container">
                        <h1>AGRI SPX</h1>
                        <h3>Get products <br/>
                            that meets standards
                        </h3>
                        <p>Farmers and Buyers engage on contact terms</p>
                        <button className="btn sign-up">Sign for free</button>
                    </div>
                </div>

                <div className="agrispx-sign">
                    <div className="container">
                        <h1>Sub-contracting and partnership <br/> on one platform.</h1>
                        <p>Sign contracts with offtakers even before you start farming</p>
                        <button className="btn sign-up">Sign for free</button>
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


                <div className="agrispx-pricing">
                    <div className="container">

                        <header className="text-center g-width-60x--md mx-auto g-mb-50">
                            <h2 className="h1 g-color-gray-dark-v1 g-font-weight-300">Pricing</h2>
                            <p className="lead">Ut fringilla lectus tellusimp imperdiet molestie. Nullam elementum
                                tincidunt massa, a pulvinar leo ultricies ut.</p>
                        </header>

                        <div className="shortcode-html">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-4 g-mb-30">
                                    <article className="text-center g-brd-around g-color-gray gray-brd-light g-pa-10">
                                        <div className="gray-bg-light g-pa-30">
                                            <h4 className="text-uppercase g-color-gray-dark-v3 g-font-weight-500 g-mb-10">Starter</h4>
                                            <em className="g-font-style-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry</em>

                                            <hr className="g-brd-gray-light-v4 g-my-10"/>

                                                <div className="g-color-primary g-my-20">
                                                    <strong
                                                        className="d-block g-font-size-30 g-line-height-1_2">GHS500.00</strong> per month
                                                </div>

                                                <hr className="g-brd-gray-light-v4 g-mt-10 mb-0"/>

                                                    <ul className="list-unstyled g-mb-25">
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            Lorem Ipsum is simply dummy text
                                                        </li>
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            <b>10%</b> Lorem Ipsum is simply dummy text
                                                        </li>
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            <b>10gb</b> Lorem Ipsum is simply dummy text
                                                        </li>
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            <b>25</b> Lorem Ipsum is simply dummy text
                                                        </li>
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            <b>No</b> Lorem Ipsum is simply dummy text
                                                        </li>
                                                    </ul>
                                                    <a className="btn btn-md rounded-0 green-btn" href="#!">Order Now</a>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4 g-mb-30">
                                    <article className="text-center g-brd-around g-color-gray gray-brd-light g-pa-10">
                                        <div className="gray-bg-light g-px-30 g-py-60">
                                            <h4 className="text-uppercase g-color-gray-dark-v3 g-font-weight-500 g-mb-10">Advanced</h4>
                                            <em className="g-font-style-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry</em>

                                                <hr className="g-brd-gray-light-v4 g-my-10"/>

                                                <div className="g-color-primary g-my-20">
                                                    <strong
                                                        className="d-block g-font-size-30 g-line-height-1_2">GHS1000.00</strong> per
                                                    month
                                                </div>

                                                    <hr className="g-brd-gray-light-v4 g-mt-10 mb-0"/>

                                                    <ul className="list-unstyled g-mb-25">
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            VLorem Ipsum is simply dummy text
                                                        </li>
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            <b>20%</b> Lorem Ipsum is simply dummy text
                                                        </li>
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            <b>20gb</b> Lorem Ipsum is simply dummy text
                                                        </li>
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            <b>50</b> Lorem Ipsum is simply dummy text
                                                        </li>
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            <b>Yes</b> Lorem Ipsum is simply dummy text
                                                        </li>
                                                    </ul>
                                                    <a className="btn btn-md rounded-0 green-btn" href="#!">Order Now</a>
                                        </div>
                                    </article>
                                </div>

                                <div className="col-md-4 g-mb-30">
                                    <article className="text-center g-brd-around g-color-gray gray-brd-light g-pa-10">
                                        <div className="gray-bg-light g-pa-30">
                                            <h4 className="text-uppercase g-color-gray-dark-v3 g-font-weight-500 g-mb-10">Professional</h4>
                                            <em className="g-font-style-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry</em>

                                                <hr className="g-brd-gray-light-v4 g-my-10"/>

                                                <div className="g-color-primary g-my-20">
                                                    <strong
                                                        className="d-block g-font-size-30 g-line-height-1_2">GHS2000.00</strong> per
                                                    month
                                                </div>

                                                <hr className="g-brd-gray-light-v4 g-mt-10 mb-0"/>

                                                    <ul className="list-unstyled g-mb-25">
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">Lorem Ipsum is simply dummy text
                                                        </li>
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            <b>30%</b> Lorem Ipsum is simply dummy text
                                                        </li>
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            <b>40gb</b> Lorem Ipsum is simply dummy text
                                                        </li>
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            <b>100</b> Lorem Ipsum is simply dummy text
                                                        </li>
                                                        <li className="g-brd-bottom g-brd-gray-light-v4 g-py-12">
                                                            <b>Yes</b> Lorem Ipsum is simply dummy text
                                                        </li>
                                                    </ul>
                                                    <a className="btn btn-md rounded-0 green-btn" href="#!">Order Now</a>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>

                    </div>
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

              

            </div>
        </LandingPageLayout>
    )

}


export default Home
