import React, {useEffect, useState, useRef} from 'react'
import LandingPageLayout from "../../../components/layouts/LandingPageLayout";
import Testimonies from "../../../components/widgets/landing-page/Testimonies";
import LearnCourses from "../../../components/widgets/landing-page/LearnCourses";
import DemoSection from "../../../components/widgets/landing-page/DemoSection";

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



            <Modal
                isOpen={state.show}
                /* onAfterOpen={afterOpenModal}*/
                onRequestClose={onCloseLoginModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                {/*<h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>*/}

                <div className="create-post-modal">
                    <div className="header">
                        <div className="d-flex justify-content-center  ">
                            <div className=" ">
                                <h1>Create Post</h1>
                            </div>
                            <div onClick={onCloseLoginModal} className="close-btn">
                                <i className="fa fa-close"></i>
                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="privacy-btn d-flex justify-content-start">
                            <h3>Sharing to</h3>
                            <button className="btn"><i className="fa fa-globe"></i> Public</button>
                        </div>
                        <div className="user d-flex justify-content-start">
                            <div className="mr-2">
                                <img className="rounded-circle" width="45"
                                     src="/user.png" alt=""/>
                            </div>
                            <div className="ml-2 user-name">
                                <div className="name">Abraham Nwoke</div>
                            </div>
                        </div>
                        <textarea  className="form-control post-text" id="message" rows="3"
                                   placeholder="What have you been up to, Abraham?"></textarea>
                    </div>
                    <div className="footer">
                        <button className="post-btn btn">Post</button>
                    </div>
                </div>
            </Modal>

            <div className="product-page knowledge-library">

                <div className="agrispx-call-for-action">
                    <img className="bg-img" src="/img/5e09feeac38b0.png" alt=""/>
                    <img className="bg-overlay" src="/img/overlay.png" alt=""/>
                  <div className="d-flex justify-content-center">
                      <div className="container">
                          <h1>KNOWLEDGE LIBRARY</h1>
                          <div className="row ">
                              <div className="col-md-6">
                                  <h3>Get products <br/>
                                      that meets standards
                                  </h3>
                              </div>

                              <div className="col-md-1">
                              </div>
                              <div className="col-md-5">
                                  <div className="">
                                      <h2 className="h1  g-pl-8 g-font-size-18 g-font-weight-300 g-mb-30">Post an issue for free</h2>

                                      <div className="post-container">
                                          <a onClick={(e) => {e.preventDefault();onWritePost()}} className="camera" href=""><i className="fa fa-camera"></i></a>
                                          <div className="card g-top-0 g-pos-rel">
                                              <div className="card-header">
                                                  <img src="/user.png" alt=""/>
                                              </div>
                                              <div className="card-body">
                                         <textarea
                                             onClick={onWritePost}
                                             className="form-control" id="message" rows="3" placeholder="What have you been up to?"></textarea>
                                                  <div className="btn-toolbar justify-content-end">
                                                      <button type="submit" className="btn  ">Tag A Farmer</button>
                                                      <button type="submit" className="btn  ">Add Attachment</button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </div>
                          <hr className=""/>
                          <div className="d-flex justify-content-between action-section">
                              <div className="">
                                  <p>Farmers and Buyers engage on contact terms</p>
                              </div>
                              <div className="">
                                  <button className="btn sign-up">Sign up for free</button>
                              </div>
                          </div>

                      </div>
                  </div>
                </div>


                <div className="row justify-content-center text-center g-mb-20 g-mt-50">
                    <div className="col-lg-9">
                        <div className=" g-brd-primary g-mb-20">
                            <h2 className="h1 u-heading-v2__title g-line-height-1_3 g-font-weight-600 g-font-size-30 g-color-black -light-v2 g-mb-minus-10">
                                For Farmers, by farmers
                            </h2>
                        </div>
                        <div className="d-inline-block g-width-40 g-height-5 g-bg-primary mb-2"></div>

                        <span className="d-block g-font-weight-300 g-font-size-18 mt-3 ">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                        </span>


                        <div className="row g-py-30 d-flex justify-content-between">
                            <div className="col-md-6 col-lg-3 g-mb-30">
                                <article className="u-shadow-v2 g-bg-white">
                                    <img className="w-10" src="/img/icons/icons8_Online_96px.png" alt="Image Description"/>
                                        <div className="g-rounded-bottom-3 g-pa-30">
                                            <h3 className="h6 g-color-black g-font-weight-700 text-uppercase g-mb-20">
                                                <a className="u-link-v5 g-color-black g-color-primary--hover" href="#!">Public Q&A</a>
                                            </h3>
                                            <p className="g-mb-20">Understanding who you are and what you want is our
                                                strategy for your health.</p>
                                            <a  className="btn btn-dark g-color-primary g-color-white   g-font-size-14">Browse Question</a>
                                        </div>
                                </article>
                            </div>

                            <div className="col-md-6 col-lg-3 g-mb-30">
                                <article className="u-shadow-v2 g-bg-white ">
                                    <img className="w-10" src="/img/icons/icons8_Online_96px.png" alt="Image Description"/>
                                        <div className="g-rounded-bottom-3 g-pa-30">
                                            <h3 className="h6 g-color-black g-font-weight-700 text-uppercase g-mb-20">
                                                <a className="u-link-v5 g-color-black g-color-primary--hover" href="#!">Private Q&A</a>
                                            </h3>
                                            <p className="g-mb-20">Level up with Stack Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&A engine.</p>
                                            <a  className="btn btn-dark g-color-primary g-color-white   g-font-size-14">Try For Free</a>
                                        </div>
                                </article>
                            </div>

                            <div className="col-md-6 col-lg-3 g-mb-30">
                                <article className="u-shadow-v2 g-bg-white">
                                    <img className="w-10" src="/img/icons/icons8_Online_96px.png" alt="Image Description"/>
                                    <div className="g-rounded-bottom-3 g-pa-30">
                                        <h3 className="h6 g-color-black g-font-weight-700 text-uppercase g-mb-20">
                                            <a className="u-link-v5 g-color-black g-color-primary--hover" href="#!">Browse jobs</a>
                                        </h3>
                                        <p className="g-mb-20">Find the right job through high quality listings and search for roles based on title,
                                            technology stack, salary, location, and more.</p>
                                        <a  className="btn btn-dark g-color-primary g-color-white g-font-size-14">Find  a job</a>
                                    </div>
                                </article>
                            </div>

                        </div>
                    </div>
                </div>





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
                    <div className="container g-max-width-750 g-mb-40">
                        <div className="text-uppercase text-center u-heading-v2-5--top g-brd-primary">

                            <h4 className="g-font-weight-700 g-font-size-26 g-color-black">Issues</h4>
                        </div>
                    </div>



                    <div className="container g-px-30">

                        <div className="card border-0">

                            <div
                                className="card-header d-flex align-items-center justify-content-between g-bg-gray-light-v5 border-0 g-mb-15">
                                <h3 className="h6 mb-0">

                                    <i className="icon-layers g-pos-rel g-top-1 g-mr-5"></i> Latest Issues

                                </h3>
                                <div className="dropdown g-mb-10 g-mb-0--md">
                      <span className="d-block g-color-primary--hover g-cursor-pointer g-mr-minus-5 g-pa-5"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                          <i className="icon-options-vertical g-pos-rel g-top-1"></i>

                        </span>
                                    <div className="dropdown-menu dropdown-menu-right rounded-0 g-mt-10"
                                         x-placement="bottom-end"
                                         style={{position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(23px, 32px, 0px)'}}>
                                        <a className="dropdown-item g-px-10" href="#!">
                                            <i className="icon-layers g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> menu 1
                                        </a>
                                        <a className="dropdown-item g-px-10" href="#!">
                                            <i className="icon-wallet g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> menu 2
                                        </a>
                                        <a className="dropdown-item g-px-10" href="#!">
                                            <i className="icon-fire g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Menu 3
                                        </a>
                                        <a className="dropdown-item g-px-10" href="#!">
                                            <i className="icon-settings g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i>  menu 4
                                        </a>

                                        <div className="dropdown-divider"></div>

                                        <a className="dropdown-item g-px-10" href="#!">
                                            <i className="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View
                                            More
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className=" card-block   g-height-500 g-pa-0 mCustomScrollbar _mCS_2 mCS-autoHide" style={{overflowY: 'scroll'}}>
                                <div  style={{maxHeight: 'none'}}>
                                    <div id="mCSB_2_container" className="mCSB_container" style={{position: 'relative', top: '0px', left: '0px'}} dir="ltr">
                                        <ul className="list-unstyled g-pa-10">

                                            <li className="">
                                                <div className="media g-brd-around widget question">
                                                         <div className="d-flex">
                                                             <div className="text-center">
                                                                 <img className="d-block user-img  g-width-50 rounded-circle mCS_img_loaded g-height-50  " src="/img/1.jpg" alt="Image Description"/>
                                                                 <br/>

                                                             </div>
                                                         </div>
                                                        <div className="media-body">
                                                            <div className=" header d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                                                                <div className="left">
                                                                    <h5 className="user-name h4 g-mr-10 g-mb-5 g-mb-0--sm">Abraham Nwoke</h5>
                                                                    <span className="loc">Accra, Ghana</span>
                                                                    <span className="date">23.05.2019</span>
                                                                </div>
                                                                <div className="right text-nowrap">
                                                                     <a className="btn green-bg" href="#!">Answer</a>
                                                                </div>
                                                            </div>
                                                              <h4 className="title">Skate Prevention</h4>
                                                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                                metus scelerisque ante sollicitudin. Cras purus odio,
                                                                vestibulum in vulputate at, tempus viverra turpis. Fusce
                                                                condimentum nunc ac nisi vulputate fringilla.
                                                            </p>

                                                            <div className="d-flex justify-content-sm-between">
                                                                <ul className="rating">
                                                                    <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                    <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                    <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                    <li><img src="/img/icons/icons8_Star_Half_Empty_30px.png" alt=""/></li>
                                                                    <li><img src="/img/icons/icons8_Star_30px.png" alt=""/></li>
                                                                </ul>
                                                                <ul className="list-inline my-0 reactions">
                                                                    <li className="list-inline-item g-mr-20">
                                                                        <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                            <li><img src="/img/icons/icons8_Banana_48px.png" alt=""/></li> Like 15
                                                                        </a>
                                                                    </li>
                                                                    <li className="list-inline-item g-mr-20">
                                                                        <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                            <li><img src="/img/icons/icons8_Comments_30px.png" alt=""/></li> Responds 14
                                                                        </a>
                                                                    </li>
                                                                    <li className="list-inline-item g-mr-20">
                                                                        <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                            <li><img src="/img/icons/icons8_Chili_Pepper_48px.png" alt=""/></li> Dislikes 0
                                                                        </a>
                                                                    </li>
                                                                    <li className="list-inline-item g-mr-20">
                                                                        <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                            <li><img src="/img/icons/icons8_Detective_24px.png" alt=""/></li> viewss 1
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                        </div>
                                                </div>
                                            </li>

                                            <li className="">
                                                <div className="media g-brd-around widget question">
                                                    <div className="d-flex">
                                                        <div className="text-center">
                                                            <img className="d-block user-img  g-width-50 rounded-circle mCS_img_loaded g-height-50  " src="/img/1.jpg" alt="Image Description"/>
                                                            <br/>

                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className=" header d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                                                            <div className="left">
                                                                <h5 className="user-name h4 g-mr-10 g-mb-5 g-mb-0--sm">Abraham Nwoke</h5>
                                                                <span className="loc">Accra, Ghana</span>
                                                                <span className="date">23.05.2019</span>
                                                            </div>
                                                            <div className="right text-nowrap">
                                                                <a className="btn green-bg" href="#!">Answer</a>
                                                            </div>
                                                        </div>
                                                        <h4 className="title">Skate Prevention</h4>
                                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                            metus scelerisque ante sollicitudin. Cras purus odio,
                                                            vestibulum in vulputate at, tempus viverra turpis. Fusce
                                                            condimentum nunc ac nisi vulputate fringilla.
                                                        </p>

                                                        <div className="d-flex justify-content-sm-between">
                                                            <ul className="rating">
                                                                <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_Half_Empty_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_30px.png" alt=""/></li>
                                                            </ul>
                                                            <ul className="list-inline my-0 reactions">
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Banana_48px.png" alt=""/></li> Like 15
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Comments_30px.png" alt=""/></li> Responds 14
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Chili_Pepper_48px.png" alt=""/></li> Dislikes 0
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Detective_24px.png" alt=""/></li> viewss 1
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </li>

                                            <li className="">
                                                <div className="media g-brd-around widget question">
                                                    <div className="d-flex">
                                                        <div className="text-center">
                                                            <img className="d-block user-img  g-width-50 rounded-circle mCS_img_loaded g-height-50  " src="/img/1.jpg" alt="Image Description"/>
                                                            <br/>

                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className=" header d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                                                            <div className="left">
                                                                <h5 className="user-name h4 g-mr-10 g-mb-5 g-mb-0--sm">Abraham Nwoke</h5>
                                                                <span className="loc">Accra, Ghana</span>
                                                                <span className="date">23.05.2019</span>
                                                            </div>
                                                            <div className="right text-nowrap">
                                                                <a className="btn green-bg" href="#!">Answer</a>
                                                            </div>
                                                        </div>
                                                        <h4 className="title">Skate Prevention</h4>
                                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                            metus scelerisque ante sollicitudin. Cras purus odio,
                                                            vestibulum in vulputate at, tempus viverra turpis. Fusce
                                                            condimentum nunc ac nisi vulputate fringilla.
                                                        </p>

                                                        <div className="d-flex justify-content-sm-between">
                                                            <ul className="rating">
                                                                <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_Half_Empty_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_30px.png" alt=""/></li>
                                                            </ul>
                                                            <ul className="list-inline my-0 reactions">
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Banana_48px.png" alt=""/></li> Like 15
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Comments_30px.png" alt=""/></li> Responds 14
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Chili_Pepper_48px.png" alt=""/></li> Dislikes 0
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Detective_24px.png" alt=""/></li> viewss 1
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </li>


                                            <li className="">
                                                <div className="media g-brd-around widget question">
                                                    <div className="d-flex">
                                                        <div className="text-center">
                                                            <img className="d-block user-img  g-width-50 rounded-circle mCS_img_loaded g-height-50  " src="/img/1.jpg" alt="Image Description"/>
                                                            <br/>

                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className=" header d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                                                            <div className="left">
                                                                <h5 className="user-name h4 g-mr-10 g-mb-5 g-mb-0--sm">Abraham Nwoke</h5>
                                                                <span className="loc">Accra, Ghana</span>
                                                                <span className="date">23.05.2019</span>
                                                            </div>
                                                            <div className="right text-nowrap">
                                                                <a className="btn green-bg" href="#!">Answer</a>
                                                            </div>
                                                        </div>
                                                        <h4 className="title">Skate Prevention</h4>
                                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                            metus scelerisque ante sollicitudin. Cras purus odio,
                                                            vestibulum in vulputate at, tempus viverra turpis. Fusce
                                                            condimentum nunc ac nisi vulputate fringilla.
                                                        </p>

                                                        <div className="d-flex justify-content-sm-between">
                                                            <ul className="rating">
                                                                <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_Half_Empty_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_30px.png" alt=""/></li>
                                                            </ul>
                                                            <ul className="list-inline my-0 reactions">
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Banana_48px.png" alt=""/></li> Like 15
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Comments_30px.png" alt=""/></li> Responds 14
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Chili_Pepper_48px.png" alt=""/></li> Dislikes 0
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Detective_24px.png" alt=""/></li> viewss 1
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </li>

                                            <li className="">
                                                <div className="media g-brd-around widget question">
                                                    <div className="d-flex">
                                                        <div className="text-center">
                                                            <img className="d-block user-img  g-width-50 rounded-circle mCS_img_loaded g-height-50  " src="/img/1.jpg" alt="Image Description"/>
                                                            <br/>

                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className=" header d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                                                            <div className="left">
                                                                <h5 className="user-name h4 g-mr-10 g-mb-5 g-mb-0--sm">Abraham Nwoke</h5>
                                                                <span className="loc">Accra, Ghana</span>
                                                                <span className="date">23.05.2019</span>
                                                            </div>
                                                            <div className="right text-nowrap">
                                                                <a className="btn green-bg" href="#!">Answer</a>
                                                            </div>
                                                        </div>
                                                        <h4 className="title">Skate Prevention</h4>
                                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                            metus scelerisque ante sollicitudin. Cras purus odio,
                                                            vestibulum in vulputate at, tempus viverra turpis. Fusce
                                                            condimentum nunc ac nisi vulputate fringilla.
                                                        </p>

                                                        <div className="d-flex justify-content-sm-between">
                                                            <ul className="rating">
                                                                <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_Half_Empty_30px.png" alt=""/></li>
                                                                <li><img src="/img/icons/icons8_Star_30px.png" alt=""/></li>
                                                            </ul>
                                                            <ul className="list-inline my-0 reactions">
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Banana_48px.png" alt=""/></li> Like 15
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Comments_30px.png" alt=""/></li> Responds 14
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Chili_Pepper_48px.png" alt=""/></li> Dislikes 0
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item g-mr-20">
                                                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                                                        <li><img src="/img/icons/icons8_Detective_24px.png" alt=""/></li> viewss 1
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <div className="agrispx-benefits">
                    <div className="container">
                        <div className="d-flex justify-content-start">
                            <div className="col-md-7 col-sm-10">
                                <h3>Benefits of Knowledge Library</h3>
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
