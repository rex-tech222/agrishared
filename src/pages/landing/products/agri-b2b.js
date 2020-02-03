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

                <section id="home" className="u-bg-overlay g-height-100vh g-bg-img-hero g-bg-black-opacity-0_3--after g-py-20" style={{backgroundImage: 'url(/img/5e09feeac38b0.png)'}}>
                    <div className="u-bg-overlay__inner g-absolute-centered--y w-100">
                        <div className="container g-z-index-1  ">

                            <div className="row">

                                <div className="col-md-6 col-lg-7  align-self-center g-color-white">
                                    <h2 className="text-uppercase text-left g-line-height-1 g-font-weight-700 g-font-size-40 g-font-size-56--md g-color-white g-mb-30">Business TO Business</h2>
                                    <h3 className="text-uppercase text-left g-font-weight-700 g-font-size-18 g-color-white g-mb-20">Delivering anything to anywhere</h3>
                                    <p className="g-font-size-default g-color-white-opacity-0_8 g-mb-35">Maecenas lacus
                                        magna, pretium in congue a, pharetra at lacus. Nulla neque justo, sodales vitae
                                        dui non, imperdiet luctus libero.</p>
                                    <a className="btn btn-md text-uppercase green-bg g-font-weight-700 g-font-size-12 g-brd-none g-rounded-4 g-py-12 g-px-25"
                                       href="#!">Sing Up For Free</a>
                                </div>


                                <div className="col-md-6 col-lg-5 align-self-center">
                                    <div className="g-bg-white g-rounded-5 g-pa-15 g-pa-30--md">
                                        <h3 className="h6 g-color-black g-font-weight-600 text-uppercase text-center g-mb-25">Calculate shipping cost</h3>
                                        <form>
                                            <div className="form-group g-mb-10 g-mb-20--md">
                                                <input
                                                    className="form-control h-100 g-theme-color-gray-light-v10 g-placeholder-inherit g-brd-gray-light-v5 g-bg-gray-light-v5 g-bg-gray-light-v5--focus g-px-10 g-py-12"
                                                    type="text" placeholder="Start Location"/>
                                            </div>

                                            <div className="form-group g-mb-10 g-mb-20--md">
                                                <input
                                                    className="form-control h-100 g-theme-color-gray-light-v10 g-placeholder-inherit g-brd-gray-light-v5 g-bg-gray-light-v5 g-bg-gray-light-v5--focus g-px-10 g-py-12"
                                                    type="text" placeholder="End Location"/>
                                            </div>

                                            <div className="form-group g-mb-10 g-mb-20--md">
                                                <select
                                                    className="js-custom-select u-select-v1 g-theme-color-gray-light-v10 g-brd-gray-light-v5 g-bg-gray-light-v5 g-rounded-4 g-pa-10"
                                                    style={{width: '100%', display: ' '}} data-placeholder="Cargo Type"
                                                    data-control-classes="g-color-gray-dark-v2 g-bg-gray-light-v5"
                                                    data-disable-search="true" data-open-icon="fa fa-sort"
                                                    data-close-icon="fa fa-sort">
                                                    <option value="1">Category</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group g-mb-10 g-mb-20--md">
                                                        <input
                                                            className="form-control h-100 g-theme-color-gray-light-v10 g-placeholder-inherit g-brd-gray-light-v5 g-bg-gray-light-v5 g-bg-gray-light-v5--focus g-px-10 g-py-12"
                                                            type="text" placeholder="Height"/>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="form-group g-mb-10 g-mb-20--md">
                                                        <input
                                                            className="form-control h-100 g-theme-color-gray-light-v10 g-placeholder-inherit g-brd-gray-light-v5 g-bg-gray-light-v5 g-bg-gray-light-v5--focus g-px-10 g-py-12"
                                                            type="text" placeholder="Width"/>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="form-group g-mb-10 g-mb-20--md">
                                                        <input
                                                            className="form-control h-100 g-theme-color-gray-light-v10 g-placeholder-inherit g-brd-gray-light-v5 g-bg-gray-light-v5 g-bg-gray-light-v5--focus g-px-10 g-py-12"
                                                            type="text" placeholder="Length"/>
                                                    </div>
                                                </div>
                                            </div>


                                            <button className="btn btn-md btn-block text-uppercase green-bg g-font-weight-700 g-font-size-12 g-brd-none g-rounded-4 g-py-12 g-px-15" type="submit">Calculate
                                            </button>
                                        </form>

                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </section>


                <section id="about" className="g-py-100 g-bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 g-pl-100--lg">
                                <div className="text-uppercase u-heading-v6-2 g-mb-15 g-ml-minus-55 g-ml-minus-90--md">
                                    <h4 className="u-heading-v6__subtitle g-font-weight-700 g-font-size-12 g-color-gray-dark-v5 g-ml-2 g-mb-10">About</h4>
                                    <h2 className="u-heading-v6__title g-font-weight-700 g-font-size-26 g-brd-primary mb-0">AGRI B2B</h2>
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


                <div className="g-bg-white">
                    <section className="container g-py-80 ">
                        <div className="text-center mx-auto g-max-width-600 g-mb-50">
                            <h2 className="g-color-black mb-4">New Arrivals</h2>
                            <p className="lead">Etiam dolor tortor, egestas a libero eget, sollicitudin maximus nulla. Nunc vitae maximus ipsum.
                                Vestibulum sodales nisi massa, vitae blandit massa luctus id.</p>
                        </div>

                        <div className="row g-mx-minus-10 g-mb-50">
                            <div className="col-md-6 col-lg-4 g-px-10">

                                <article
                                    className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">

                                    <div className="g-max-width-100 g-mr-15">
                                        <img className="d-flex w-100" src="/img/foods/Premium-Quality-Fresh-Cavendish-Banana-For-Sale.jpeg" alt="Image Description"/>
                                    </div>

                                    <div className="media-body align-self-center">
                                        <h4 className="h5 g-mb-7">
                                            <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                               href="#!">Name of item</a>
                                        </h4>
                                        <a className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                                           href="#!">Category</a>
                                        <footer className="d-flex justify-content-between g-font-size-16">
                                            <span className="g-color-black g-line-height-1">GHS100.00</span>
                                            <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                                                <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Cart">
                                                        <i className="icon-finance-100 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-middle">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Wishlist">
                                                        <i className="icon-medical-022 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </footer>
                                    </div>
                                </article>

                            </div>

                            <div className="col-md-6 col-lg-4 g-px-10">

                                <article
                                    className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">

                                    <div className="g-max-width-100 g-mr-15">
                                        <img className="d-flex w-100" src="/img/foods/91z-23Y2QgL._SX425_.jpg" alt="Image Description"/>
                                    </div>

                                    <div className="media-body align-self-center">
                                        <h4 className="h5 g-mb-7">
                                            <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                               href="#!">Name of item</a>
                                        </h4>
                                        <a className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                                           href="#!">Category</a>
                                        <footer className="d-flex justify-content-between g-font-size-16">
                                            <span className="g-color-black g-line-height-1">GHS100.00</span>
                                            <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                                                <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Cart">
                                                        <i className="icon-finance-100 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-middle">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Wishlist">
                                                        <i className="icon-medical-022 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </footer>
                                    </div>
                                </article>

                            </div>

                            <div className="col-md-6 col-lg-4 g-px-10">
                                <article
                                    className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">

                                    <div className="g-max-width-100 g-mr-15">
                                        <img className="d-flex w-100" src="/img/foods/1506808.jpg" alt="Image Description"/>
                                    </div>

                                    <div className="media-body align-self-center">
                                        <h4 className="h5 g-mb-7">
                                            <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                               href="#!">Name of item</a>
                                        </h4>
                                        <a className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                                           href="#!">Category</a>
                                        <footer className="d-flex justify-content-between g-font-size-16">
                                            <span className="g-color-black g-line-height-1">GHS100.00</span>
                                            <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                                                <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Cart">
                                                        <i className="icon-finance-100 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-middle">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Wishlist">
                                                        <i className="icon-medical-022 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </footer>
                                    </div>
                                </article>
                            </div>

                            <div className="col-md-6 col-lg-4 g-px-10">
                                <article
                                    className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                                    <div className="g-max-width-100 g-mr-15">
                                        <img className="d-flex w-100" src="/img/foods/1372152620_plantain.webp" alt="Image Description"/>
                                    </div>
                                    <div className="media-body align-self-center">
                                        <h4 className="h5 g-mb-7">
                                            <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                               href="#!">Name of item</a>
                                        </h4>
                                        <a className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                                           href="#!">Category</a>
                                        <footer className="d-flex justify-content-between g-font-size-16">
                                            <span className="g-color-black g-line-height-1">GHS100.00</span>
                                            <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                                                <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Cart">
                                                        <i className="icon-finance-100 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-middle">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Wishlist">
                                                        <i className="icon-medical-022 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </footer>
                                    </div>
                                </article>

                            </div>

                            <div className="col-md-6 col-lg-4 g-px-10">
                                <article
                                    className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                                    <div className="g-max-width-100 g-mr-15">
                                        <img className="d-flex w-100" src="/img/foods/AN78-Beans_dry-732x549-Thumb.jpg" alt="Image Description"/>
                                    </div>

                                    <div className="media-body align-self-center">
                                        <h4 className="h5 g-mb-7">
                                            <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                               href="#!">Name of item</a>
                                        </h4>
                                        <a className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                                           href="#!">Category</a>
                                        <footer className="d-flex justify-content-between g-font-size-16">
                                            <span className="g-color-black g-line-height-1">GHS100.00</span>
                                            <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                                                <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Cart">
                                                        <i className="icon-finance-100 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-middle">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Wishlist">
                                                        <i className="icon-medical-022 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </footer>
                                    </div>
                                </article>

                            </div>

                            <div className="col-md-6 col-lg-4 g-px-10">
                                <article className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                                    <div className="g-max-width-100 g-mr-15">
                                        <img className="d-flex w-100" src="/img/foods/banana-bunch-white-background.jpg" alt="Image Description"/>
                                    </div>

                                    <div className="media-body align-self-center">
                                        <h4 className="h5 g-mb-7">
                                            <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                               href="#!">Name of item</a>
                                        </h4>
                                        <a className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                                           href="#!">Category</a>
                                        <footer className="d-flex justify-content-between g-font-size-16">
                                            <span className="g-color-black g-line-height-1">GHS100.00</span>
                                            <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                                                <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Cart">
                                                        <i className="icon-finance-100 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-middle">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Wishlist">
                                                        <i className="icon-medical-022 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </footer>
                                    </div>
                                </article>
                            </div>

                            <div className="col-md-6 col-lg-4 g-px-10">
                                <article
                                    className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                                    <div className="g-max-width-100 g-mr-15">
                                        <img className="d-flex w-100" src="/img/foods/The-weird-reason-that-mango-makes-your-mouth-itch_548103076-Darren-Tierney-1024x683.jpg" alt="Image Description"/>
                                    </div>

                                    <div className="media-body align-self-center">
                                        <h4 className="h5 g-mb-7">
                                            <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                               href="#!">Name of item</a>
                                        </h4>
                                        <a className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                                           href="#!">Category</a>
                                        <footer className="d-flex justify-content-between g-font-size-16">
                                            <span className="g-color-black g-line-height-1">GHS100.00</span>
                                            <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                                                <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Cart">
                                                        <i className="icon-finance-100 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-middle">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Wishlist">
                                                        <i className="icon-medical-022 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </footer>
                                    </div>
                                </article>
                            </div>

                            <div className="col-md-6 col-lg-4 g-px-10">
                                <article
                                    className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">

                                    <div className="g-max-width-100 g-mr-15">
                                        <img className="d-flex w-100" src="/img/foods/report-1511226804.jpg" alt="Image Description"/>
                                    </div>

                                    <div className="media-body align-self-center">
                                        <h4 className="h5 g-mb-7">
                                            <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                               href="#!">Name of item</a>
                                        </h4>
                                        <a className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                                           href="#!">Category</a>
                                        <footer className="d-flex justify-content-between g-font-size-16">
                                            <span className="g-color-black g-line-height-1">GHS100.00</span>
                                            <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                                                <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Cart">
                                                        <i className="icon-finance-100 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-middle">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Wishlist">
                                                        <i className="icon-medical-022 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </footer>
                                    </div>
                                </article>
                            </div>

                            <div className="col-md-6 col-lg-4 g-px-10">
                                <article
                                    className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                                    <div className="g-max-width-100 g-mr-15">
                                        <img className="d-flex w-100" src="/img/foods/The-weird-reason-that-mango-makes-your-mouth-itch_548103076-Darren-Tierney-1024x683.jpg" alt="Image Description"/>
                                    </div>
                                    <div className="media-body align-self-center">
                                        <h4 className="h5 g-mb-7">
                                            <a className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                               href="#!">Name of item</a>
                                        </h4>
                                        <a className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                                           href="#!">Category</a>
                                        <footer className="d-flex justify-content-between g-font-size-16">
                                            <span className="g-color-black g-line-height-1">GHS100.00</span>
                                            <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                                                <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Cart">
                                                        <i className="icon-finance-100 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-middle">
                                                    <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                                                       href="#!" title="" data-toggle="tooltip" data-placement="top"
                                                       data-original-title="Add to Wishlist">
                                                        <i className="icon-medical-022 u-line-icon-pro"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </footer>
                                    </div>
                                </article>

                            </div>
                        </div>

                        <div className="text-center">
                            <a className="btn u-btn-primary g-font-size-12 text-uppercase g-py-8 g-px-12" href="#!">All New Arrivals</a>
                        </div>
                    </section>
                </div>


               <div className=" g-py-20 g-bg-white">
                   <div className="container">
                       <div className="u-heading-v2-2--bottom g-brd-primary g-mb-50 text-center">
                           <h2 className="text-uppercase g-line-height-1_1 g-font-weight-700 g-font-size-26 g-mb-15">Suppliers or Farmers</h2>
                           <p className="mb-0">Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                               rhoncus.</p>
                       </div>

                       <div className="row">
                           <div className="col-lg-4 g-mb-30">
                               <figure className="g-brd-around g-brd-gray-light-v4 g-rounded-4 g-pa-15">
                                   <div className="d-flex justify-content-start">
                                       <img className="g-width-100 g-height-100 g-mr-15" src="/img/4.jpg" alt="Image Description"/>
                                           <div className="d-block">
                                               <div className="g-mb-10">
                                                   <h4 className="h5 g-mb-0">Abraham Nwoke</h4>
                                                   <em className="d-block g-color-primary g-font-style-normal g-font-size-default">Employee</em>
                                               </div>
                                               <em className="d-block g-color-gray-dark-v5 g-font-style-normal g-font-size-13 g-mb-2">abraham@gmail.com</em>
                                               <em className="d-block g-color-gray-dark-v5 g-font-style-normal g-font-size-12"> +233244491485</em>
                                           </div>
                                   </div>
                               </figure>
                           </div>
                           <div className="col-lg-4 g-mb-30">
                               <figure className="g-brd-around g-brd-gray-light-v4 g-rounded-4 g-pa-15">
                                   <div className="d-flex justify-content-start">
                                       <img className="g-width-100 g-height-100 g-mr-15" src="/img/4.jpg" alt="Image Description"/>
                                       <div className="d-block">
                                           <div className="g-mb-10">
                                               <h4 className="h5 g-mb-0">Abraham Nwoke</h4>
                                               <em className="d-block g-color-primary g-font-style-normal g-font-size-default">Employee</em>
                                           </div>
                                           <em className="d-block g-color-gray-dark-v5 g-font-style-normal g-font-size-13 g-mb-2">abraham@gmail.com</em>
                                           <em className="d-block g-color-gray-dark-v5 g-font-style-normal g-font-size-12"> +233244491485</em>
                                       </div>
                                   </div>
                               </figure>
                           </div>
                           <div className="col-lg-4 g-mb-30">
                               <figure className="g-brd-around g-brd-gray-light-v4 g-rounded-4 g-pa-15">
                                   <div className="d-flex justify-content-start">
                                       <img className="g-width-100 g-height-100 g-mr-15" src="/img/4.jpg" alt="Image Description"/>
                                       <div className="d-block">
                                           <div className="g-mb-10">
                                               <h4 className="h5 g-mb-0">Abraham Nwoke</h4>
                                               <em className="d-block g-color-primary g-font-style-normal g-font-size-default">Employee</em>
                                           </div>
                                           <em className="d-block g-color-gray-dark-v5 g-font-style-normal g-font-size-13 g-mb-2">abraham@gmail.com</em>
                                           <em className="d-block g-color-gray-dark-v5 g-font-style-normal g-font-size-12"> +233244491485</em>
                                       </div>
                                   </div>
                               </figure>
                           </div>
                           <div className="col-lg-4 g-mb-30">
                               <figure className="g-brd-around g-brd-gray-light-v4 g-rounded-4 g-pa-15">
                                   <div className="d-flex justify-content-start">
                                       <img className="g-width-100 g-height-100 g-mr-15" src="/img/4.jpg" alt="Image Description"/>
                                       <div className="d-block">
                                           <div className="g-mb-10">
                                               <h4 className="h5 g-mb-0">Abraham Nwoke</h4>
                                               <em className="d-block g-color-primary g-font-style-normal g-font-size-default">Employee</em>
                                           </div>
                                           <em className="d-block g-color-gray-dark-v5 g-font-style-normal g-font-size-13 g-mb-2">abraham@gmail.com</em>
                                           <em className="d-block g-color-gray-dark-v5 g-font-style-normal g-font-size-12"> +233244491485</em>
                                       </div>
                                   </div>
                               </figure>
                           </div>
                           <div className="col-lg-4 g-mb-30">
                               <figure className="g-brd-around g-brd-gray-light-v4 g-rounded-4 g-pa-15">
                                   <div className="d-flex justify-content-start">
                                       <img className="g-width-100 g-height-100 g-mr-15" src="/img/4.jpg" alt="Image Description"/>
                                       <div className="d-block">
                                           <div className="g-mb-10">
                                               <h4 className="h5 g-mb-0">Abraham Nwoke</h4>
                                               <em className="d-block g-color-primary g-font-style-normal g-font-size-default">Employee</em>
                                           </div>
                                           <em className="d-block g-color-gray-dark-v5 g-font-style-normal g-font-size-13 g-mb-2">abraham@gmail.com</em>
                                           <em className="d-block g-color-gray-dark-v5 g-font-style-normal g-font-size-12"> +233244491485</em>
                                       </div>
                                   </div>
                               </figure>
                           </div>
                           <div className="col-lg-4 g-mb-30">
                               <figure className="g-brd-around g-brd-gray-light-v4 g-rounded-4 g-pa-15">
                                   <div className="d-flex justify-content-start">
                                       <img className="g-width-100 g-height-100 g-mr-15" src="/img/4.jpg" alt="Image Description"/>
                                       <div className="d-block">
                                           <div className="g-mb-10">
                                               <h4 className="h5 g-mb-0">Abraham Nwoke</h4>
                                               <em className="d-block g-color-primary g-font-style-normal g-font-size-default">Employee</em>
                                           </div>
                                           <em className="d-block g-color-gray-dark-v5 g-font-style-normal g-font-size-13 g-mb-2">abraham@gmail.com</em>
                                           <em className="d-block g-color-gray-dark-v5 g-font-style-normal g-font-size-12"> +233244491485</em>
                                       </div>
                                   </div>
                               </figure>
                           </div>
                       </div>


                       <div className="text-center">
                           <a className="btn u-btn-primary g-font-size-12 text-uppercase g-py-8 g-px-12" href="#!">All Suppliers</a>
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
