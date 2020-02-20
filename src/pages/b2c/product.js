import React, {useEffect, useRef, useState} from 'react'
import B2CLayout from "../../components/layouts/B2CLayout";
import {NextSeo} from 'next-seo';
import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';

import ProductWidget from '../../components/widgets/productWidget'
import BuyerChoiceProductSlider from '../../components/widgets/product/BuyerChoiceProductSlider'
import Slider from "react-slick";

function Home(props) {

    const [state, setState] = useState({
        show: false,
        nav1: null,
        nav2: null
    });

    useEffect(() => {
        setState(state => ({
            ...state,
            nav1: slider,
            nav2: slider2
        }))
    }, []);

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
    let slider2 = useRef()
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
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <B2CLayout>
            <NextSeo
                title="B2C Product - Agrishared"
                description="This example uses more of the available config options."
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Open Graph Title',
                    description: 'Open Graph Description',
                    images: [
                        {
                            url: 'https://www.example.ie/og-image-01.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                        },
                        {
                            url: 'https://www.example.ie/og-image-02.jpg',
                            width: 900,
                            height: 800,
                            alt: 'Og Image Alt Second',
                        },
                        {url: 'https://www.example.ie/og-image-03.jpg'},
                        {url: 'https://www.example.ie/og-image-04.jpg'},
                    ],
                    site_name: 'SiteName',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

            <div className="categories">


                <section className="g-mb-20">
                    <div className="g-bg-cover__inner">
                        <ul className="u-list-inline g-mb-20">
                            <li className="list-inline-item g-mr-7">
                                <a className="u-link-v5 g-color-main" href="#!">Home</a>
                                <i className="fa fa-angle-right g-ml-7"></i>
                            </li>
                            <li className="list-inline-item g-mr-7">
                                <a className="u-link-v5 g-color-main" href="#!">Product</a>
                                <i className="fa fa-angle-right g-ml-7"></i>
                            </li>
                            <li className="list-inline-item g-color-primary">
                                <span>Farm's Water Resistant Jacket</span>
                            </li>
                        </ul>
                        <header className="">
                            <h2 className="h1 g-font-size-23 g-font-weight-300 text-uppercase">
                                Farm's Water Resistant Jacket
                            </h2>
                        </header>
                    </div>
                </section>


                <div className="row">
                    <div className="col-lg-4 g-mb-30 g-mb-0--lg">

                        <div className="row align-items-center">

                            <div className="col-12">

                                <div id="carouselCus1"
                                     className="js-carousel g-pt-10 g-mb-10 slick-initialized slick-slider"
                                     data-infinite="true" data-fade="true"
                                     data-arrows-classes="u-arrow-v1 g-brd-around g-brd-white g-absolute-centered--y g-width-45 g-height-45 g-font-size-14 g-color-white g-color-primary--hover rounded-circle"
                                     data-arrow-left-classes="fa fa-angle-left g-left-40"
                                     data-arrow-right-classes="fa fa-angle-right g-right-40"
                                     data-nav-for="#carouselCus2">
                                    <div onClick={previous} className="js-prev u-arrow-v1 g-brd-around g-brd-white g-absolute-centered--y g-width-45 g-height-45 g-font-size-14 g-color-white g-color-primary--hover rounded-circle fa fa-angle-left g-left-40 slick-arrow"
                                        ></div>
                                    <div className="slick-list draggable">
                                        <div className="slick-track"//  style="opacity: 1; width: 1407px;"
                                             >

                                            <Slider
                                                ref={c => ( slider = c)}
                                                    {...settings}
                                                asNavFor={state.nav2}
                                            >
                                            <div
                                                className="js-slide g-bg-cover g-bg-black-opacity-0_1--after slick-slide slick-current slick-active"
                                                data-slick-index="0" aria-hidden="false" tabIndex="0"
                                               style={{width: '469px', position: 'relative', left: '0px', top:' 0px', zIndex: 999, opacity: 1, height: 'auto'}}
                                            >
                                                <img className="img-fluid w-100" src="/img/1.jpg" alt="Image Description"/>
                                            </div>
                                                <div
                                                    className="js-slide g-bg-cover g-bg-black-opacity-0_1--after slick-slide slick-current slick-active"
                                                    data-slick-index="0" aria-hidden="false" tabIndex="0"
                                                    style={{width: '469px', position: 'relative', left: '0px', top:' 0px', zIndex: 999, opacity: 1, height: 'auto'}}
                                                >
                                                    <img className="img-fluid w-100" src="/img/4.jpg" alt="Image Description"/>
                                                </div>

                                                <div
                                                    className="js-slide g-bg-cover g-bg-black-opacity-0_1--after slick-slide slick-current slick-active"
                                                    data-slick-index="0" aria-hidden="false" tabIndex="0"
                                                    style={{width: '469px', position: 'relative', left: '0px', top:' 0px', zIndex: 999, opacity: 1, height: 'auto'}}
                                                >
                                                    <img className="img-fluid w-100" src="/img/6.jpg" alt="Image Description"/>
                                                </div>
                                                <div
                                                    className="js-slide g-bg-cover g-bg-black-opacity-0_1--after slick-slide slick-current slick-active"
                                                    data-slick-index="0" aria-hidden="false" tabIndex="0"
                                                    style={{width: '469px', position: 'relative', left: '0px', top:' 0px', zIndex: 999, opacity: 1, height: 'auto'}}
                                                >
                                                    <img className="img-fluid w-100" src="/img/5.jpg" alt="Image Description"/>
                                                </div>
                                            </Slider>

                                        </div>
                                    </div>


                                    <div onClick={next} className="js-next u-arrow-v1 g-brd-around g-brd-white g-absolute-centered--y g-width-45 g-height-45 g-font-size-14 g-color-white g-color-primary--hover rounded-circle fa fa-angle-right g-right-40 slick-arrow"
                                        ></div>
                                </div>


                                <br/><br/>


                                <div id="carouselCus2"
                                     className="js-carousel text-center u-carousel-v3 g-mx-minus-5 slick-initialized slick-slider slick-transform-off"
                                     data-infinite="true" data-center-mode="true" data-slides-show="3"
                                     data-is-thumbs="true" data-focus-on-select="false" data-nav-for="#carouselCus1">
                                    <div className="slick-list draggable"
                                       //  style="padding: 0px;"
                                    >
                                        <div className="slick-track"
                                         //    style="opacity: 1; width: 645px; transform: translate3d(-215px, 0px, 0px);"
                                        >
                                            <Slider
                                                asNavFor={state.nav1}
                                                ref={c => ( slider2 = c)}
                                                slidesToShow={4}
                                                swipeToSlide={true}
                                                focusOnSelect={true}
                                            >
                                            <div className="js-slide g-cursor-pointer g-px-5 slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabIndex="-1"
                                                 style={{width: '137px'}}
                                            >
                                                <img className="img-fluid" src="/img/1.jpg" alt="Image Description"/>
                                            </div>
                                            <div className="js-slide g-cursor-pointer g-px-5 slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabIndex="-1"
                                                 style={{width: '137px'}}
                                            >
                                                <img className="img-fluid" src="/img/4.jpg" alt="Image Description"/>
                                            </div>
                                            <div className="js-slide g-cursor-pointer g-px-5 slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabIndex="-1"
                                                 style={{width: '137px'}}
                                            >
                                                <img className="img-fluid" src="/img/6.jpg" alt="Image Description"/>
                                            </div>
                                                <div className="js-slide g-cursor-pointer g-px-5 slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabIndex="-1"
                                                     style={{width: '137px'}}
                                                >
                                                    <img className="img-fluid" src="/img/5.jpg" alt="Image Description"/>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>


                    </div>

                    <div className="col-lg-8">
                        <div className="g-px-40--lg">

                            <div className="g-mb-30">
                                <h1 className="g-font-weight-300 mb-4 g-font-size-30">Farm's Water Resistant Jacket</h1>
                            </div>

                            <div className="g-mb-30">
                                <h2 className="g-color-gray-dark-v5 g-font-weight-400 g-font-size-12 text-uppercase mb-2">Price</h2>
                                <span className="g-color-black g-font-weight-500 g-font-size-30 mr-2">GHS99.00</span>
                                <s className="g-color-gray-dark-v4 g-font-weight-500 g-font-size-16">GHS131.00</s>
                            </div>

                            <div id="accordion-01" role="tablist" aria-multiselectable="true">
                                <div id="accordion-01-heading-01" className="g-brd-y g-brd-gray-light-v3 py-3"
                                     role="tab">
                                    <h5 className="g-font-weight-400 g-font-size-default mb-0">
                                        <a className="d-block g-color-gray-dark-v5 g-text-underline--none--hover"
                                           href="#accordion-01-body-01" data-toggle="collapse"
                                           data-parent="#accordion-01" aria-expanded="false"
                                           aria-controls="accordion-01-body-01">Details
                                            <span
                                                className="float-right g-pos-rel g-top-3 mr-1 fa fa-angle-down"></span></a>
                                    </h5>
                                </div>
                                <div id="accordion-01-body-01" className="collapse" role="tabpanel"
                                     aria-labelledby="accordion-01-heading-01">
                                    <div className="g-py-10">
                                        <p className="g-font-size-12 mb-2">SHELL: 100% POLYESTER</p>
                                        <p className="g-font-size-12 mb-2">Always check the care label instructions.</p>
                                        <p className="g-font-size-12 mb-2">Professional dry clean only. Remove all
                                            detachable parts before cleaning. Do not iron.</p>
                                        <p className="g-font-size-12 mb-2">(Navy: Avoid contact with light coloured
                                            fabrics and upholstery especially whilst damp.)</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="d-flex justify-content-between align-items-center g-brd-bottom g-brd-gray-light-v3 py-3"
                                role="tab">
                                <h5 className="g-color-gray-dark-v5 g-font-weight-400 g-font-size-default mb-0">Colour</h5>


                                <label className="form-check-inline u-check mb-0 ml-auto g-mr-10">
                                    <input className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radInline1_1"
                                           type="radio"/>
                  <span
                      className="d-block u-check-icon-checkbox-v4 g-brd-transparent g-brd-gray-dark-v4--checked rounded-circle">
                    <i className="d-block g-absolute-centered g-width-12 g-height-12 g-bg-primary rounded-circle"></i>
                  </span>
                                </label>
                                <label className="form-check-inline u-check mb-0 g-mx-10">
                                    <input className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radInline1_1"
                                           type="radio"/>
                  <span
                      className="d-block u-check-icon-checkbox-v4 g-brd-transparent g-brd-gray-dark-v4--checked rounded-circle">
                    <i className="d-block g-absolute-centered g-width-12 g-height-12 g-bg-beige rounded-circle"></i>
                  </span>
                                </label>
                                <label className="form-check-inline u-check mb-0 g-mx-10">
                                    <input className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radInline1_1"
                                           type="radio"/>
                  <span
                      className="d-block u-check-icon-checkbox-v4 g-brd-transparent g-brd-gray-dark-v4--checked rounded-circle">
                    <i className="d-block g-absolute-centered g-width-12 g-height-12 g-bg-black rounded-circle"></i>
                  </span>
                                </label>
                                <label className="form-check-inline u-check mb-0 g-ml-10 mr-0">
                                    <input className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radInline1_1"
                                           type="radio"/>
                  <span
                      className="d-block u-check-icon-checkbox-v4 g-brd-transparent g-brd-gray-dark-v4--checked rounded-circle">
                    <i className="d-block g-absolute-centered g-width-12 g-height-12 g-bg-gray-dark-v4 rounded-circle"></i>
                  </span>
                                </label>

                            </div>

                            <div
                                className="d-flex justify-content-between align-items-center g-brd-bottom g-brd-gray-light-v3 py-3"
                                role="tab">
                                <h5 className="g-color-gray-dark-v5 g-font-weight-400 g-font-size-default mb-0">Size</h5>


                                <label className="form-check-inline u-check mb-0 ml-auto g-mr-15">
                                    <input className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radInline2_1"
                                           type="radio"/>
                  <span className="d-block g-font-size-12 g-color-primary--checked">
                    S
                  </span>
                                </label>
                                <label className="form-check-inline u-check mb-0 g-mx-15">
                                    <input className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radInline2_1"
                                           type="radio"/>
                  <span className="d-block g-font-size-12 g-color-primary--checked">
                    M
                  </span>
                                </label>
                                <label className="form-check-inline u-check mb-0 g-mx-15">
                                    <input className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radInline2_1"
                                           type="radio"/>
                  <span className="d-block g-font-size-12 g-color-primary--checked">
                    L
                  </span>
                                </label>
                                <label className="form-check-inline u-check mb-0 g-mx-15">
                                    <input className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radInline2_1"
                                           type="radio"/>
                  <span className="d-block g-font-size-12 g-color-primary--checked">
                    XL
                  </span>
                                </label>
                                <label className="form-check-inline u-check mb-0 g-ml-15">
                                    <input className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radInline2_1"
                                           type="radio"/>
                  <span className="d-block g-font-size-12 g-color-primary--checked">
                    XXL
                  </span>
                                </label>

                            </div>

                            <div
                                className="d-flex justify-content-between align-items-center g-brd-bottom g-brd-gray-light-v3 py-3 g-mb-30"
                                role="tab">
                                <h5 className="g-color-gray-dark-v5 g-font-weight-400 g-font-size-default mb-0">Quantity</h5>

                                <div className="js-quantity input-group u-quantity-v1 g-width-80 g-brd-primary--focus">
                                    <input className="js-result form-control text-center g-font-size-13 rounded-0"
                                           type="text" value="1" readOnly=""/>

                                        <div
                                            className="input-group-addon d-flex align-items-center g-width-30 g-brd-gray-light-v2 g-bg-white g-font-size-13 rounded-0 g-pa-5">
                                            <i className="js-plus g-color-gray g-color-primary--hover fa fa-angle-up"></i>
                                            <i className="js-minus g-color-gray g-color-primary--hover fa fa-angle-down"></i>
                                        </div>
                                </div>
                            </div>

                            <div className="row g-mx-minus-5 g-mb-20">
                                <div className="col g-px-5 g-mb-10">
                                    <button
                                        className="btn btn-block u-btn-primary g-font-size-12 text-uppercase g-py-8 g-px-2"
                                        type="button">
                                        Add to Cart <i
                                        className="align-middle ml-2 icon-finance-100 u-line-icon-pro"></i>
                                    </button>
                                </div>
                                <div className="col g-px-5 g-mb-10">
                                    <button
                                        className="btn btn-block u-btn-outline-black g-brd-gray-dark-v5 g-brd-black--hover g-color-gray-dark-v4
                                        g-color-white--hover g-font-size-12 text-uppercase g-py-8 g-px-2 "
                                        type="button">
                                        Add to Wishlist <i
                                        className="align-middle ml-2 icon-medical-022 u-line-icon-pro"></i>
                                    </button>
                                </div>
                            </div>

                            <ul className="nav d-flex justify-content-between g-font-size-12 text-uppercase"
                                role="tablist" data-target="nav-1-1-default-hor-left">
                                <li className="nav-item g-brd-bottom g-brd-gray-dark-v4">
                                    <a className="nav-link g-color-primary--parent-active g-pa-0 g-pb-1 active show"
                                       data-toggle="tab" href="#nav-1-1-default-hor-left--1" role="tab"
                                       aria-selected="false">Seller's Details</a>
                                </li>
                                <li className="nav-item g-brd-bottom g-brd-gray-dark-v4">
                                    <a className="nav-link g-color-primary--parent-active g-pa-0 g-pb-1 "
                                       data-toggle="tab" href="#nav-1-1-default-hor-left--3" role="tab"
                                       aria-selected="true">Returns</a>
                                </li>
                                <li className="nav-item g-brd-bottom g-brd-gray-dark-v4">
                                    <a className="nav-link g-color-primary--parent-active g-pa-0 g-pb-1"
                                       data-toggle="tab" href="#nav-1-1-default-hor-left--2" role="tab"
                                       aria-selected="false">Delivery</a>
                                </li>
                            </ul>

                            <div id="nav-1-1-default-hor-left" className="tab-content">
                                <div className="tab-pane fade g-pt-30 " id="nav-1-1-default-hor-left--3"
                                     role="tabpanel">
                                    <p className="g-color-gray-dark-v4 g-font-size-13 mb-0">You can return/exchange your
                                        orders in Unify E-commerce. For more information, read our
                                        <a href="page-help-1.html">Help</a>.</p>
                                </div>

                                <div className="tab-pane fade g-pt-30 active show" id="nav-1-1-default-hor-left--1" role="tabpanel">

                                    <div className="details col-md-6">
                                        <h3 className="product-title g-font-size-18">Abraham Nwoke</h3>
                                        <div className="rating">
                                            <ul className="js-rating u-rating-v1 g-font-size-13 g-color-gray-light-v3 mb-0"
                                                data-hover-classes="g-color-primary">
                                                <li className="g-color-primary g-line-height-1_4">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="g-color-primary g-line-height-1_4">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="g-color-primary g-line-height-1_4">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="g-color-primary g-line-height-1_4">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="g-color-primary g-line-height-1_4">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                            </ul>
                                            <span className="review-no g-ml-3">41 reviews</span>
                                        </div>
                                        <br/>
                                        <p className="product-description">
                                            <strong> 68.8% </strong> Response Rate
                                        </p>

                                        <p className="product-description">
                                            <strong> 170,000+ </strong> for 117 Transactions
                                        </p>

                                        <p className="product-description">
                                            <strong> 100.0%</strong> On-time delivery rate
                                        </p>

                                        <div className="action">
                                            <button className="add-to-cart btn green-btn" type="button">Contact Seller</button>
                                        </div>
                                    </div>

                                </div>

                                <div className="tab-pane fade g-pt-30" id="nav-1-1-default-hor-left--2" role="tabpanel">

                                    <table>
                                        <thead
                                            className="h6 g-brd-bottom g-brd-gray-light-v3 g-color-gray-dark-v3 g-font-size-13">
                                        <tr>
                                            <th className="g-width-100 g-font-weight-500 g-pa-0 g-pb-10">Destination</th>
                                            <th className="g-width-140 g-font-weight-500 g-pa-0 g-pb-10">Delivery type
                                            </th>
                                            <th className="g-width-150 g-font-weight-500 g-pa-0 g-pb-10">Delivery time
                                            </th>
                                            <th className="g-font-weight-500 text-right g-pa-0 g-pb-10">Cost</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                                            <td className="align-top g-py-10">Madina</td>
                                            <td className="align-top g-py-10">Standard delivery</td>
                                            <td className="align-top g-font-size-11 g-py-10">2-3 Working days</td>
                                            <td className="align-top text-right g-py-10">GHS5.5</td>
                                        </tr>
                                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                                            <td className="align-top g-py-10"></td>
                                            <td className="align-top g-py-10">Next day</td>
                                            <td className="align-top g-font-size-11 g-py-10">Order before 12pm monday -
                                                thursday and receive it the next day
                                            </td>
                                            <td className="align-top text-right g-py-10">GHS9.5</td>
                                        </tr>
                                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                                            <td className="align-top g-py-10"></td>
                                            <td className="align-top g-py-10">Saturday delivery</td>
                                            <td className="align-top g-font-size-11 g-py-10">Saturday delivery for
                                                orders placed before 12pm on friday
                                            </td>
                                            <td className="align-top text-right g-py-10">GHS12.00</td>
                                        </tr>
                                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                                            <td className="align-top g-py-10">Kumasy</td>
                                            <td className="align-top g-py-10">Standard delivery</td>
                                            <td className="align-top g-font-size-11 g-py-10">3-9 Working days</td>
                                            <td className="align-top text-right g-py-10">GHS20.00</td>
                                        </tr>
                                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                                            <td className="align-top g-py-10">Accra</td>
                                            <td className="align-top g-py-10">Standard delivery</td>
                                            <td className="align-top g-font-size-11 g-py-10">3-9 Working days</td>
                                            <td className="align-top text-right g-py-10">GHS25.00</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <br/><br/><br/>

                <div className="g-brd-y g-brd-gray-light-v3 g-py-100">

                    <ul class="nav u-nav-v1-1 u-nav-primary g-brd-bottom--md g-brd-primary g-mb-20" role="tablist" data-target="nav-1-1-default-hor-left-underline" data-tabs-mobile-type="slide-up-down" data-btn-classes="btn btn-md btn-block rounded-0 u-btn-outline-primary g-mb-20">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#nav-1-1-default-hor-left-underline--1" role="tab">Description</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#nav-1-1-default-hor-left-underline--2" role="tab">Review</a>
                        </li>
                    </ul>

                    <div id="nav-1-1-default-hor-left-underline" class="tab-content">
                        <div class="tab-pane fade show active" id="nav-1-1-default-hor-left-underline--1" role="tabpanel">
                            <h2 className="h4 mb-3">Description</h2>

                            <div className="row">
                                <div className="col-md-4 g-mb-30">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                </div>

                                <div className="col-md-4 g-mb-0 g-mb-30--md">

                                    <ul className="list-unstyled g-color-text">
                                        <li className="g-brd-bottom--dashed g-brd-gray-light-v3 pt-1 mb-3">
                                            <span>Title:</span>
                                            <span className="float-right g-color-black">Content</span>
                                        </li>
                                        <li className="g-brd-bottom--dashed g-brd-gray-light-v3 pt-1 mb-3">
                                            <span>Title:</span>
                                            <span className="float-right g-color-black">Content</span>
                                        </li>
                                        <li className="g-brd-bottom--dashed g-brd-gray-light-v3 pt-1 mb-3">
                                            <span>Title:</span>
                                            <span className="float-right g-color-black">Content</span>
                                        </li>
                                        <li className="g-brd-bottom--dashed g-brd-gray-light-v3 pt-1 mb-3">
                                            <span>Title:</span>
                                            <span className="float-right g-color-black">Content</span>
                                        </li>
                                        <li className="g-brd-bottom--dashed g-brd-gray-light-v3 pt-1 mb-3">
                                            <span>Title:</span>
                                            <span className="float-right g-color-black">Content</span>
                                        </li>
                                    </ul>

                                </div>

                                <div className="col-md-4 g-mb-30">

                                    <ul className="list-unstyled g-color-text">
                                        <li className="g-brd-bottom--dashed g-brd-gray-light-v3 pt-1 mb-3">
                                            <span>Title:</span>
                                            <span className="float-right g-color-black">Content</span>
                                        </li>
                                        <li className="g-brd-bottom--dashed g-brd-gray-light-v3 pt-1 mb-3">
                                            <span>Title:</span>
                                            <span className="float-right g-color-black">Content</span>
                                        </li>
                                        <li className="g-brd-bottom--dashed g-brd-gray-light-v3 pt-1 mb-3">
                                            <span>Title:</span>
                                            <span className="float-right g-color-black">Content</span>
                                        </li>
                                        <li className="g-brd-bottom--dashed g-brd-gray-light-v3 pt-1 mb-3">
                                            <span>Title:</span>
                                            <span className="float-right g-color-black">Content</span>
                                        </li>
                                        <li className="g-brd-bottom--dashed g-brd-gray-light-v3 pt-1 mb-3">
                                            <span>Title:</span>
                                            <span className="float-right g-color-black">Content</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="nav-1-1-default-hor-left-underline--2" role="tabpanel">
                            <h2 className="h4 mb-5">Review</h2>

                            <div className="g-brd-bottom g-brd-gray-light-v4 g-pb-30 g-mb-50">

                                <div className="media g-mb-30">
                                    <img className="d-flex g-width-60 g-height-60 rounded-circle g-mt-3 g-mr-20"
                                         src="/img/4.jpg" alt="Image Description"/>
                                    <div className="media-body">
                                        <div className="d-flex align-items-start g-mb-15 g-mb-10--sm">
                                            <div className="d-block">
                                                <h5 className="h6">Abraham Nwoke</h5>


                                                <ul className="js-rating u-rating-v1 g-font-size-13 g-color-gray-light-v3 mb-0"
                                                    data-hover-classes="g-color-primary">
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                </ul>


                                                <span
                                                    className="d-block g-color-gray-dark-v5 g-font-size-11">Feb 22, 2020</span>
                                            </div>
                                            <div className="ml-auto">
                                                <a className="u-link-v5 g-color-black g-color-primary--hover g-font-size-12 text-uppercase"
                                                   href="#!">Reply</a>
                                            </div>
                                        </div>

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>

                                        <ul className="list-inline my-0">
                                            <li className="list-inline-item g-mr-20">
                                                <a className="g-color-gray-dark-v5 g-text-underline--none--hover"
                                                   href="#!">
                                                    <i className="g-pos-rel g-top-1 g-mr-3 icon-medical-022 u-line-icon-pro"></i> 5
                                                </a>
                                            </li>
                                            <li className="list-inline-item g-mr-20">
                                                <a className="g-color-gray-dark-v5 g-text-underline--none--hover"
                                                   href="#!">
                                                    <i className="icon-finance-206 u-line-icon-pro g-pos-rel g-top-1 g-mr-3"></i> 1
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="media g-brd-top g-brd-gray-light-v4 g-pt-30 g-ml-40 g-mb-30">
                                    <img className="d-flex g-width-60 g-height-60 rounded-circle g-mt-3 g-mr-15"
                                         src="/img/4.jpg" alt="Image Description"/>
                                    <div className="media-body">
                                        <div className="d-flex align-items-start g-mb-15 g-mb-10--sm">
                                            <div className="d-block">
                                                <h5 className="h6">Abraham Nwoke</h5>


                                                <ul className="js-rating u-rating-v1 g-font-size-13 g-color-gray-light-v3 mb-0"
                                                    data-hover-classes="g-color-primary">
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                </ul>


                                                <span
                                                    className="d-block g-color-gray-dark-v5 g-font-size-11">Feb 22, 2020</span>
                                            </div>
                                            <div className="ml-auto">
                                                <a className="u-link-v5 g-color-black g-color-primary--hover g-font-size-12 text-uppercase"
                                                   href="#!">Reply</a>
                                            </div>
                                        </div>

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>

                                        <ul className="list-inline my-0">
                                            <li className="list-inline-item g-mr-20">
                                                <a className="g-color-gray-dark-v5 g-text-underline--none--hover"
                                                   href="#!">
                                                    <i className="g-pos-rel g-top-1 g-mr-3 icon-medical-022 u-line-icon-pro"></i> 2
                                                </a>
                                            </li>
                                            <li className="list-inline-item g-mr-20">
                                                <a className="g-color-gray-dark-v5 g-text-underline--none--hover"
                                                   href="#!">
                                                    <i className="icon-finance-206 u-line-icon-pro g-pos-rel g-top-1 g-mr-3"></i> 0
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="media g-brd-top g-brd-gray-light-v4 g-pt-30 g-mb-30">
                                    <img className="d-flex g-width-60 g-height-60 rounded-circle g-mt-3 g-mr-15"
                                         src="/img/4.jpg" alt="Image Description"/>
                                    <div className="media-body">
                                        <div className="d-flex align-items-start g-mb-15 g-mb-10--sm">
                                            <div className="d-block">
                                                <h5 className="h6">Abraham Nwoke</h5>


                                                <ul className="js-rating u-rating-v1 g-font-size-13 g-color-gray-light-v3 mb-0"
                                                    data-hover-classes="g-color-primary">
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li className="g-color-primary g-line-height-1_4">
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                </ul>


                                                <span
                                                    className="d-block g-color-gray-dark-v5 g-font-size-11">Feb 22, 2020</span>
                                            </div>
                                            <div className="ml-auto">
                                                <a className="u-link-v5 g-color-black g-color-primary--hover g-font-size-12 text-uppercase"
                                                   href="#!">Reply</a>
                                            </div>
                                        </div>

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>

                                        <ul className="list-inline my-0">
                                            <li className="list-inline-item g-mr-20">
                                                <a className="g-color-gray-dark-v5 g-text-underline--none--hover"
                                                   href="#!">
                                                    <i className="g-pos-rel g-top-1 g-mr-3 icon-medical-022 u-line-icon-pro"></i> 0
                                                </a>
                                            </li>
                                            <li className="list-inline-item g-mr-20">
                                                <a className="g-color-gray-dark-v5 g-text-underline--none--hover"
                                                   href="#!">
                                                    <i className="g-pos-rel g-top-1 g-mr-3 icon-finance-206 u-line-icon-pro"></i> 0
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>


                            <h2 className="h4 mb-5">Add Review</h2>





                            <div className="g-mb-30">
                                        <textarea
                                            className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v3 g-brd-primary--focus g-resize-none rounded-3 g-py-13 g-px-15"
                                            rows="12" placeholder="Your message"></textarea>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-5 col-sm-4 col-md-3">
                                    <button
                                        className="btn u-btn-primary g-font-size-12 text-uppercase g-py-15 g-px-25"
                                        type="submit" role="button">Add Comment
                                    </button>
                                </div>


                                <div className="col-5 col-sm-4 col-md-3">
                                    <h3 className="h6 mb-1">Rate:</h3>

                                    <ul className="js-rating u-rating-v1 g-font-size-20 g-color-gray-light-v3 mb-0"
                                        data-hover-classes="g-color-primary">
                                        <li className="g-color-primary g-line-height-1_4 click">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4 click">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4 click">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4 click">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>






                </div>


                <br/><br/><br/><br/>
                <br/><br/>

                <div className="u-heading-v3-1 g-mb-40">
                    <h2 className="h3 u-heading-v3__title">Reviews (3)</h2>
                </div>
                <div className="g-brd-bottom g-brd-gray-light-v4 g-pb-30 g-mb-50">
                    <div className="media g-mb-30">
                        <img className="d-flex g-width-60 g-height-60 rounded-circle g-mt-3 g-mr-20"
                             src="/img/4.jpg" alt="Image Description"/>
                        <div className="media-body">
                            <div className="d-flex align-items-start g-mb-15 g-mb-10--sm">
                                <div className="d-block">
                                    <h5 className="h6">Abraham Nwoke</h5>


                                    <ul className="js-rating u-rating-v1 g-font-size-13 g-color-gray-light-v3 mb-0"
                                        data-hover-classes="g-color-primary">
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                    </ul>


                                    <span
                                        className="d-block g-color-gray-dark-v5 g-font-size-11">Feb 22, 2020</span>
                                </div>
                                <div className="ml-auto">
                                    <a className="u-link-v5 g-color-black g-color-primary--hover g-font-size-12 text-uppercase"
                                       href="#!">Reply</a>
                                </div>
                            </div>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>

                            <ul className="list-inline my-0">
                                <li className="list-inline-item g-mr-20">
                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover"
                                       href="#!">
                                        <i className="g-pos-rel g-top-1 g-mr-3 icon-medical-022 u-line-icon-pro"></i> 5
                                    </a>
                                </li>
                                <li className="list-inline-item g-mr-20">
                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover"
                                       href="#!">
                                        <i className="icon-finance-206 u-line-icon-pro g-pos-rel g-top-1 g-mr-3"></i> 1
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="media g-brd-top g-brd-gray-light-v4 g-pt-30 g-mb-30">
                        <img className="d-flex g-width-60 g-height-60 rounded-circle g-mt-3 g-mr-15"
                             src="/img/4.jpg" alt="Image Description"/>
                        <div className="media-body">
                            <div className="d-flex align-items-start g-mb-15 g-mb-10--sm">
                                <div className="d-block">
                                    <h5 className="h6">Abraham Nwoke</h5>


                                    <ul className="js-rating u-rating-v1 g-font-size-13 g-color-gray-light-v3 mb-0"
                                        data-hover-classes="g-color-primary">
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                    </ul>


                                    <span
                                        className="d-block g-color-gray-dark-v5 g-font-size-11">Feb 22, 2020</span>
                                </div>
                                <div className="ml-auto">
                                    <a className="u-link-v5 g-color-black g-color-primary--hover g-font-size-12 text-uppercase"
                                       href="#!">Reply</a>
                                </div>
                            </div>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>

                            <ul className="list-inline my-0">
                                <li className="list-inline-item g-mr-20">
                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover"
                                       href="#!">
                                        <i className="g-pos-rel g-top-1 g-mr-3 icon-medical-022 u-line-icon-pro"></i> 0
                                    </a>
                                </li>
                                <li className="list-inline-item g-mr-20">
                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover"
                                       href="#!">
                                        <i className="g-pos-rel g-top-1 g-mr-3 icon-finance-206 u-line-icon-pro"></i> 0
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="media g-brd-top g-brd-gray-light-v4 g-pt-30 g-mb-30">
                        <img className="d-flex g-width-60 g-height-60 rounded-circle g-mt-3 g-mr-15"
                             src="/img/4.jpg" alt="Image Description"/>
                        <div className="media-body">
                            <div className="d-flex align-items-start g-mb-15 g-mb-10--sm">
                                <div className="d-block">
                                    <h5 className="h6">Abraham Nwoke</h5>


                                    <ul className="js-rating u-rating-v1 g-font-size-13 g-color-gray-light-v3 mb-0"
                                        data-hover-classes="g-color-primary">
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li className="g-color-primary g-line-height-1_4">
                                            <i className="fa fa-star"></i>
                                        </li>
                                    </ul>


                                    <span
                                        className="d-block g-color-gray-dark-v5 g-font-size-11">Feb 22, 2020</span>
                                </div>
                                <div className="ml-auto">
                                    <a className="u-link-v5 g-color-black g-color-primary--hover g-font-size-12 text-uppercase"
                                       href="#!">Reply</a>
                                </div>
                            </div>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>

                            <ul className="list-inline my-0">
                                <li className="list-inline-item g-mr-20">
                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover"
                                       href="#!">
                                        <i className="g-pos-rel g-top-1 g-mr-3 icon-medical-022 u-line-icon-pro"></i> 0
                                    </a>
                                </li>
                                <li className="list-inline-item g-mr-20">
                                    <a className="g-color-gray-dark-v5 g-text-underline--none--hover"
                                       href="#!">
                                        <i className="g-pos-rel g-top-1 g-mr-3 icon-finance-206 u-line-icon-pro"></i> 0
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <br/><br/><br/><br/>
                <br/><br/>

                <div className="u-heading-v3-1 g-mb-40">
                    <h2 className="h3 u-heading-v3__title">Recently Viewed</h2>
                </div>

                <div className="row">


                    <div className="col-sm-6 col-lg-2 g-mb-30">
                        <ProductWidget/>
                    </div>
                    <div className="col-sm-6 col-lg-2 g-mb-30">
                        <ProductWidget/>
                    </div>
                    <div className="col-sm-6 col-lg-2 g-mb-30">
                        <ProductWidget/>
                    </div>
                    <div className="col-sm-6 col-lg-2 g-mb-30">
                        <ProductWidget/>
                    </div>
                    <div className="col-sm-6 col-lg-2 g-mb-30">
                        <ProductWidget/>
                    </div>
                    <div className="col-sm-6 col-lg-2 g-mb-30">
                        <ProductWidget/>
                    </div>
                    <div className="col-sm-6 col-lg-2 g-mb-30">
                        <ProductWidget/>
                    </div>
                    <div className="col-sm-6 col-lg-2 g-mb-30">
                        <ProductWidget/>
                    </div>
                    <div className="col-sm-6 col-lg-2 g-mb-30">
                        <ProductWidget/>
                    </div>
                    <div className="col-sm-6 col-lg-2 g-mb-30">
                        <ProductWidget/>
                    </div>
                    <div className="col-sm-6 col-lg-2 g-mb-30">
                        <ProductWidget/>
                    </div>
                    <div className="col-sm-6 col-lg-2 g-mb-30">
                        <ProductWidget/>
                    </div>
                </div>


            </div>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>

        </B2CLayout>
    )

}


export default Home
