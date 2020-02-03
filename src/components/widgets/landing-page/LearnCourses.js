import React, {useEffect, useState, useRef} from 'react'

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';
import Slider from "react-slick";
import BlogPost from "./BlogPost";

function BlogPosts(props) {

    const [state, setState] = useState({
        show: false
    });

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
        speed: 200,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        // cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const layoutSettings = {
        marginRight: 5,
        marginLeft: 5,
    }

    return (
        <div className="js-carousel g-pos-rel g-mx-minus-15 slick-initialized slick-slider hide-arrow"
             data-infinite="true" data-slides-show="4"
             data-arrows-classes="u-arrow-v1 g-pos-abs g-top-30x g-width-45 g-height-45 g-font-size-default g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover"
             data-arrow-left-classes="fa fa-angle-left g-left-45">

            <div className="js-prev u-arrow-v1 g-pos-abs g-top-30x g-width-45 g-height-45 g-font-size-default g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover fa fa-angle-left g-left-45 slick-arrow"
            ></div>

            <Slider ref={c => ( slider = c)} {...settings}>

                <div>

                    <div className="js-slide g-px-15--md slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style={{width: '373px'}} tabIndex="-1">

                        <article className="info-v5-3 g-parent g-pos-rel">

                            <div className="g-bg-cover g-bg-black-opacity-0_4--after">
                                <img className="w-100" src="/img/5e09feeac38b0.png"
                                     alt="Image description"/>
                            </div>


                            <a className="u-ribbon-v1 g-color-main
                             yellow-bg g-color-white--hover
                            g-bg-primary--hover g-font-weight-700
                            g-font-size-11 text-uppercase g-top-0
                            g-left-0 g-text-underline--none--hover
                            g-transition-0_5" href="#!" tabIndex="-1"
                            style={{borderRadius: '0 0 8px 0' }}
                            >Free</a>


                            <div className="text-uppercase info-v5-3__info g-pos-rel g-bg-primary-opacity-0_9--parent-hover g-pa-20 g-mt-minus-70 g-transition-0_5">

                                <header className="g-pos-rel g-color-white g-mb-0">
                                    <h3 className="info-v5-3__info-title g-font-weight-700 g-font-size-16 g-color-white g-transition-0_5">
                                        <a className="g-color-white g-color-white--hover" href="#!" tabIndex="-1">How to plant yam and beans</a>
                                    </h3>
                                </header>


                                <p className="g-text-transform-none g-color-white g-font-size-default g-color-white--parent-hover g-pt-0 g-mb-20">This
                                    is where we really begin to visualize your napkin sketches and make
                                    them into beautiful pixels.
                                </p>

                                <ul className="list-unstyled info-v5-3__info-list g-font-weight-700 g-font-size-12 g-color-black mb-0">
                                    <li className="g-color-white--parent-hover g-mb-20">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-money"></i>
                                        <span className="g-font-weight-700">$120</span>
                                        <span className="g-font-size-12">Per Course</span>
                                    </li>
                                    <li className="g-color-white--parent-hover g-mb-20">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-calendar"></i>
                                        Duration: 9 months
                                    </li>
                                    <li className="g-color-white--parent-hover">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-certificate"></i>
                                        Degree level: Advanced
                                    </li>
                                </ul>

                            </div>

                        </article>

                    </div>

                </div>
                <div>

                    <div className="js-slide g-px-15--md slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style={{width: '373px'}} tabIndex="-1">

                        <article className="info-v5-3 g-parent g-pos-rel">

                            <div className="g-bg-cover g-bg-black-opacity-0_4--after">
                                <img className="w-100" src="/img/5e09feeac38b0.png"
                                     alt="Image description"/>
                            </div>


                            <a className="u-ribbon-v1 g-color-main
                             yellow-bg g-color-white--hover
                            g-bg-primary--hover g-font-weight-700
                            g-font-size-11 text-uppercase g-top-0
                            g-left-0 g-text-underline--none--hover
                            g-transition-0_5" href="#!" tabIndex="-1"
                               style={{borderRadius: '0 0 8px 0' }}
                            >Premium</a>


                            <div className="text-uppercase info-v5-3__info g-pos-rel g-bg-primary-opacity-0_9--parent-hover g-pa-20 g-mt-minus-70 g-transition-0_5">

                                <header className="g-pos-rel g-color-white g-mb-0">
                                    <h3 className="info-v5-3__info-title g-font-weight-700 g-font-size-16 g-color-white g-transition-0_5">
                                        <a className="g-color-white g-color-white--hover" href="#!" tabIndex="-1">How to plant yam and beans</a>
                                    </h3>
                                </header>


                                <p className="g-text-transform-none g-color-white g-font-size-default g-color-white--parent-hover g-pt-0 g-mb-20">This
                                    is where we really begin to visualize your napkin sketches and make
                                    them into beautiful pixels.
                                </p>

                                <ul className="list-unstyled info-v5-3__info-list g-font-weight-700 g-font-size-12 g-color-black mb-0">
                                    <li className="g-color-white--parent-hover g-mb-20">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-money"></i>
                                        <span className="g-font-weight-700">$120</span>
                                        <span className="g-font-size-12">Per Course</span>
                                    </li>
                                    <li className="g-color-white--parent-hover g-mb-20">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-calendar"></i>
                                        Duration: 9 months
                                    </li>
                                    <li className="g-color-white--parent-hover">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-certificate"></i>
                                        Degree level: Advanced
                                    </li>
                                </ul>

                            </div>

                        </article>

                    </div>

                </div>
                <div>

                    <div className="js-slide g-px-15--md slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style={{width: '373px'}} tabIndex="-1">

                        <article className="info-v5-3 g-parent g-pos-rel">

                            <div className="g-bg-cover g-bg-black-opacity-0_4--after">
                                <img className="w-100" src="/img/5e09feeac38b0.png"
                                     alt="Image description"/>
                            </div>


                            <a className="u-ribbon-v1 g-color-main
                             yellow-bg g-color-white--hover
                            g-bg-primary--hover g-font-weight-700
                            g-font-size-11 text-uppercase g-top-0
                            g-left-0 g-text-underline--none--hover
                            g-transition-0_5" href="#!" tabIndex="-1"
                               style={{borderRadius: '0 0 8px 0' }}
                            >Free</a>


                            <div className="text-uppercase info-v5-3__info g-pos-rel g-bg-primary-opacity-0_9--parent-hover g-pa-20 g-mt-minus-70 g-transition-0_5">

                                <header className="g-pos-rel g-color-white g-mb-0">
                                    <h3 className="info-v5-3__info-title g-font-weight-700 g-font-size-16 g-color-white g-transition-0_5">
                                        <a className="g-color-white g-color-white--hover" href="#!" tabIndex="-1">How to plant yam and beans</a>
                                    </h3>
                                </header>


                                <p className="g-text-transform-none g-color-white g-font-size-default g-color-white--parent-hover g-pt-0 g-mb-20">This
                                    is where we really begin to visualize your napkin sketches and make
                                    them into beautiful pixels.
                                </p>

                                <ul className="list-unstyled info-v5-3__info-list g-font-weight-700 g-font-size-12 g-color-black mb-0">
                                    <li className="g-color-white--parent-hover g-mb-20">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-money"></i>
                                        <span className="g-font-weight-700">$120</span>
                                        <span className="g-font-size-12">Per Course</span>
                                    </li>
                                    <li className="g-color-white--parent-hover g-mb-20">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-calendar"></i>
                                        Duration: 9 months
                                    </li>
                                    <li className="g-color-white--parent-hover">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-certificate"></i>
                                        Degree level: Advanced
                                    </li>
                                </ul>

                            </div>

                        </article>

                    </div>

                </div>
                <div>

                    <div className="js-slide g-px-15--md slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style={{width: '373px'}} tabIndex="-1">

                        <article className="info-v5-3 g-parent g-pos-rel">

                            <div className="g-bg-cover g-bg-black-opacity-0_4--after">
                                <img className="w-100" src="/img/5e09feeac38b0.png"
                                     alt="Image description"/>
                            </div>


                            <a className="u-ribbon-v1 g-color-main
                             yellow-bg g-color-white--hover
                            g-bg-primary--hover g-font-weight-700
                            g-font-size-11 text-uppercase g-top-0
                            g-left-0 g-text-underline--none--hover
                            g-transition-0_5" href="#!" tabIndex="-1"
                               style={{borderRadius: '0 0 8px 0' }}
                            >Premium</a>


                            <div className="text-uppercase info-v5-3__info g-pos-rel g-bg-primary-opacity-0_9--parent-hover g-pa-20 g-mt-minus-70 g-transition-0_5">

                                <header className="g-pos-rel g-color-white g-mb-0">
                                    <h3 className="info-v5-3__info-title g-font-weight-700 g-font-size-16 g-color-white g-transition-0_5">
                                        <a className="g-color-white g-color-white--hover" href="#!" tabIndex="-1">How to plant yam and beans</a>
                                    </h3>
                                </header>


                                <p className="g-text-transform-none g-color-white g-font-size-default g-color-white--parent-hover g-pt-0 g-mb-20">This
                                    is where we really begin to visualize your napkin sketches and make
                                    them into beautiful pixels.
                                </p>

                                <ul className="list-unstyled info-v5-3__info-list g-font-weight-700 g-font-size-12 g-color-black mb-0">
                                    <li className="g-color-white--parent-hover g-mb-20">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-money"></i>
                                        <span className="g-font-weight-700">$120</span>
                                        <span className="g-font-size-12">Per Course</span>
                                    </li>
                                    <li className="g-color-white--parent-hover g-mb-20">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-calendar"></i>
                                        Duration: 9 months
                                    </li>
                                    <li className="g-color-white--parent-hover">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-certificate"></i>
                                        Degree level: Advanced
                                    </li>
                                </ul>

                            </div>

                        </article>

                    </div>

                </div>
                <div>

                    <div className="js-slide g-px-15--md slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style={{width: '373px'}} tabIndex="-1">

                        <article className="info-v5-3 g-parent g-pos-rel">

                            <div className="g-bg-cover g-bg-black-opacity-0_4--after">
                                <img className="w-100" src="/img/5e09feeac38b0.png"
                                     alt="Image description"/>
                            </div>


                            <a className="u-ribbon-v1 g-color-main
                             yellow-bg g-color-white--hover
                            g-bg-primary--hover g-font-weight-700
                            g-font-size-11 text-uppercase g-top-0
                            g-left-0 g-text-underline--none--hover
                            g-transition-0_5" href="#!" tabIndex="-1"
                               style={{borderRadius: '0 0 8px 0' }}
                            >Premium</a>


                            <div className="text-uppercase info-v5-3__info g-pos-rel g-bg-primary-opacity-0_9--parent-hover g-pa-20 g-mt-minus-70 g-transition-0_5">

                                <header className="g-pos-rel g-color-white g-mb-0">
                                    <h3 className="info-v5-3__info-title g-font-weight-700 g-font-size-16 g-color-white g-transition-0_5">
                                        <a className="g-color-white g-color-white--hover" href="#!" tabIndex="-1">How to plant yam and beans</a>
                                    </h3>
                                </header>


                                <p className="g-text-transform-none g-color-white g-font-size-default g-color-white--parent-hover g-pt-0 g-mb-20">This
                                    is where we really begin to visualize your napkin sketches and make
                                    them into beautiful pixels.
                                </p>

                                <ul className="list-unstyled info-v5-3__info-list g-font-weight-700 g-font-size-12 g-color-black mb-0">
                                    <li className="g-color-white--parent-hover g-mb-20">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-money"></i>
                                        <span className="g-font-weight-700">$120</span>
                                        <span className="g-font-size-12">Per Course</span>
                                    </li>
                                    <li className="g-color-white--parent-hover g-mb-20">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-calendar"></i>
                                        Duration: 9 months
                                    </li>
                                    <li className="g-color-white--parent-hover">
                                        <i className="g-font-size-18 g-color-primary g-color-white--parent-hover g-mr-10 fa fa-certificate"></i>
                                        Degree level: Advanced
                                    </li>
                                </ul>

                            </div>

                        </article>

                    </div>

                </div>
            </Slider>

            <div
                className="js-next u-arrow-v1 g-pos-abs g-top-30x g-width-45 g-height-45 g-font-size-default g-color-gray-dark-v5 g-color-white--hover g-bg-white g-bg-primary--hover fa fa-angle-right g-right-45 slick-arrow"
            ></div>
        </div>
    )

}


export default BlogPosts
