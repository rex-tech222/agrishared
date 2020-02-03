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
        autoplay: true,
        infinite: true,
        speed: 200,
         autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
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
        <section id="lessons" className="g-bg-primary g-py-100">
            <div className="container g-mb-60">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <h2 className="text-uppercase g-letter-spacing-3 g-font-weight-700 g-font-size-26 g-color-white g-mb-30 g-mb-0--md">You
                            must know it</h2>
                    </div>

                    <div className="col-md-6 text-md-right">

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="js-carousel slick-initialized slick-slider" data-infinite="true"
                     data-arrows-classes="u-arrow-v1 g-absolute-centered--y g-width-45 g-height-45 g-font-size-22 g-color-white g-color-gray-dark-v2--hover g-bg-white--hover g-brd-around g-brd-white-opacity-0_4 g-rounded-50x g-transition-0_2 g-transition--ease-in"
                     data-arrow-left-classes="fa fa-angle-left g-left-minus-50"
                     data-arrow-right-classes="fa fa-angle-right g-right-minus-50">
                    <div
                        onClick={previous} className="js-prev u-arrow-v1 g-absolute-centered--y g-width-45 g-height-45 g-font-size-22 g-color-white g-color-gray-dark-v2--hover g-bg-white--hover g-brd-around g-brd-white-opacity-0_4 g-rounded-50x g-transition-0_2 g-transition--ease-in fa fa-angle-left g-left-minus-50 slick-arrow"
                    ></div>
                    <div className="slick-list draggable">
                        <div className="slick-track" >
                            <Slider ref={c => ( slider = c)} {...settings}>
                            <div className="js-slide slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabIndex="-1" >
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="g-pos-rel g-pl-50--lg">
                                            <img className="img-fluid w-100" src="/img/5e09feeac38b0.png" alt="Image description"/>


                                            <a className="js-fancybox-media u-icon-v2 g-absolute-centered g-width-50 g-height-50 g-font-size-16 g-color-white g-text-underline--none--hover g-bg-black-opacity-0_6--hover g-brd-5 g-brd-white g-brd-white-opacity-0_6--hover g-rounded-50x"
                                               href="javascript:;" data-src="//vimeo.com/119228609"
                                               data-animate-in="flipInY" data-animate-out="flipOutY"
                                               data-speed="1000" tabIndex="-1">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 g-py-20">
                                        <h2 className="text-uppercase g-letter-spacing-3 g-font-weight-700 g-font-size-20 g-color-white g-mb-20">
                                            How to plant yam
                                        </h2>
                                        <p className="g-line-height-1_8 g-color-white-opacity-0_75 g-font-size-default g-mb-30">Fusce
                                            dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin
                                            fermentum turpis eget nisi facilisis lobortis. Praesent malesuada
                                            facilisis maximus. Donec sed lobortis tortor. Ut nec lacinia sapien,
                                            sit amet dapibus magna. Vestibulum nunc ex, tempus et volutpat nec,
                                            convallis ut massa. Sed ultricies luctus ipsum in placerat.</p>
                                        <a className="btn btn-md text-uppercase  g-letter-spacing-1 g-font-weight-700 g-font-size-11 g-theme-color-gray-dark-v1  g-bg-white g-theme-bg-gray-dark-v1--hover g-brd-none g-rounded-50 g-py-15 g-px-35"
                                           href="#!" tabIndex="-1">View our schedule</a>
                                    </div>
                                </div>
                            </div>
                            <div className="js-slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabIndex="0">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="g-pos-rel g-pl-50--lg">
                                            <img className="img-fluid w-100" src="/img/5e09feeac38b0.png" alt="Image description"/>


                                            <a className="js-fancybox-media u-icon-v2 g-absolute-centered g-width-50 g-height-50 g-font-size-16 g-color-white g-text-underline--none--hover g-bg-black-opacity-0_6--hover g-brd-5 g-brd-white g-brd-white-opacity-0_6--hover g-rounded-50x"
                                               href="javascript:;" data-src="//vimeo.com/119228609"
                                               data-animate-in="flipInY" data-animate-out="flipOutY"
                                               data-speed="1000" tabIndex="0">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 g-py-20">
                                        <h2 className="text-uppercase g-letter-spacing-3 g-font-weight-700 g-font-size-20 g-color-white g-mb-20">
                                            How to plant yam
                                        </h2>
                                        <p className="g-line-height-1_8 g-color-white-opacity-0_75 g-font-size-default g-mb-30">Fusce
                                            dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin
                                            fermentum turpis eget nisi facilisis lobortis. Praesent malesuada
                                            facilisis maximus. Donec sed lobortis tortor. Ut nec lacinia sapien,
                                            sit amet dapibus magna. Vestibulum nunc ex, tempus et volutpat nec,
                                            convallis ut massa. Sed ultricies luctus ipsum in placerat.</p>
                                        <a className="btn btn-md text-uppercase  g-letter-spacing-1 g-font-weight-700 g-font-size-11 g-theme-color-gray-dark-v1  g-bg-white g-theme-bg-gray-dark-v1--hover g-brd-none g-rounded-50 g-py-15 g-px-35 "
                                           href="#!" tabIndex="0">View our schedule</a>
                                    </div>
                                </div>
                            </div>
                            <div className="js-slide slick-slide" data-slick-index="1" aria-hidden="true" tabIndex="-1" >
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="g-pos-rel g-pl-50--lg">
                                            <img className="img-fluid w-100" src="/img/5e09feeac38b0.png" alt="Image description"/>

                                            <a className="js-fancybox-media u-icon-v2 g-absolute-centered g-width-50 g-height-50 g-font-size-16 g-color-white g-text-underline--none--hover g-bg-black-opacity-0_6--hover g-brd-5 g-brd-white g-brd-white-opacity-0_6--hover g-rounded-50x"
                                               href="javascript:;" data-src="//vimeo.com/119228609"
                                               data-animate-in="flipInY" data-animate-out="flipOutY"
                                               data-speed="1000" tabIndex="-1">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 g-py-20">
                                        <h2 className="text-uppercase g-letter-spacing-3 g-font-weight-700 g-font-size-20 g-color-white g-mb-20">
                                           How to plant yam
                                        </h2>
                                        <p className="g-line-height-1_8 g-color-white-opacity-0_75 g-font-size-default g-mb-30">Fusce
                                            dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin
                                            fermentum turpis eget nisi facilisis lobortis. Praesent malesuada
                                            facilisis maximus. Donec sed lobortis tortor. Ut nec lacinia sapien,
                                            sit amet dapibus magna. Vestibulum nunc ex, tempus et volutpat nec,
                                            convallis ut massa. Sed ultricies luctus ipsum in placerat.</p>
                                        <a className="btn btn-md text-uppercase  g-letter-spacing-1 g-font-weight-700 g-font-size-11 g-theme-color-gray-dark-v1  g-bg-white g-theme-bg-gray-dark-v1--hover g-brd-none g-rounded-50 g-py-15 g-px-35"
                                           href="#!" tabIndex="-1">View our schedule</a>
                                    </div>
                                </div>
                            </div>
                            <div className="js-slide slick-slide slick-cloned" data-slick-index="2" aria-hidden="true" tabIndex="-1" >
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="g-pos-rel g-pl-50--lg">
                                            <img className="img-fluid w-100" src="/img/5e09feeac38b0.png" alt="Image description"/>

                                            <a className="js-fancybox-media u-icon-v2 g-absolute-centered g-width-50 g-height-50 g-font-size-16 g-color-white g-text-underline--none--hover g-bg-black-opacity-0_6--hover g-brd-5 g-brd-white g-brd-white-opacity-0_6--hover g-rounded-50x"
                                               href="javascript:;" data-src="//vimeo.com/119228609"
                                               data-animate-in="flipInY" data-animate-out="flipOutY"
                                               data-speed="1000" tabIndex="-1">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 g-py-20">
                                        <h2 className="text-uppercase g-letter-spacing-3 g-font-weight-700 g-font-size-20 g-color-white g-mb-20">
                                            Workout for men
                                        </h2>
                                        <p className="g-line-height-1_8 g-color-white-opacity-0_75 g-font-size-default g-mb-30">Fusce
                                            dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin
                                            fermentum turpis eget nisi facilisis lobortis. Praesent malesuada
                                            facilisis maximus. Donec sed lobortis tortor. Ut nec lacinia sapien,
                                            sit amet dapibus magna. Vestibulum nunc ex, tempus et volutpat nec,
                                            convallis ut massa. Sed ultricies luctus ipsum in placerat.</p>
                                        <a className="btn btn-md text-uppercase  g-letter-spacing-1 g-font-weight-700 g-font-size-11 g-theme-color-gray-dark-v1  g-bg-white g-theme-bg-gray-dark-v1--hover g-brd-none g-rounded-50 g-py-15 g-px-35 "
                                           href="#!" tabIndex="-1">View our schedule</a>
                                    </div>
                                </div>
                            </div>
                            <div className="js-slide slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" tabIndex="-1" >
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="g-pos-rel g-pl-50--lg">
                                            <img className="img-fluid w-100" src="/img/5e09feeac38b0.png" alt="Image description"/>


                                            <a className="js-fancybox-media u-icon-v2 g-absolute-centered g-width-50 g-height-50 g-font-size-16 g-color-white g-text-underline--none--hover g-bg-black-opacity-0_6--hover g-brd-5 g-brd-white g-brd-white-opacity-0_6--hover g-rounded-50x"
                                               href="javascript:;" data-src="//vimeo.com/119228609"
                                               data-animate-in="flipInY" data-animate-out="flipOutY"
                                               data-speed="1000" tabIndex="-1">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 g-py-20">
                                        <h2 className="text-uppercase g-letter-spacing-3 g-font-weight-700 g-font-size-20 g-color-white g-mb-20">
                                            How to plant yam
                                        </h2>
                                        <p className="g-line-height-1_8 g-color-white-opacity-0_75 g-font-size-default g-mb-30">Fusce
                                            dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin
                                            fermentum turpis eget nisi facilisis lobortis. Praesent malesuada
                                            facilisis maximus. Donec sed lobortis tortor. Ut nec lacinia sapien,
                                            sit amet dapibus magna. Vestibulum nunc ex, tempus et volutpat nec,
                                            convallis ut massa. Sed ultricies luctus ipsum in placerat.</p>
                                        <a className="btn btn-md text-uppercase  g-letter-spacing-1 g-font-weight-700 g-font-size-11 g-theme-color-gray-dark-v1  g-bg-white g-theme-bg-gray-dark-v1--hover g-brd-none g-rounded-50 g-py-15 g-px-35"
                                           href="#!" tabIndex="-1">View our schedule</a>
                                    </div>
                                </div>
                            </div>
                            </Slider>
                        </div>
                    </div>


                    <div
                      onClick={next}  className="js-next u-arrow-v1 g-absolute-centered--y g-width-45 g-height-45 g-font-size-22 g-color-white g-color-gray-dark-v2--hover g-bg-white--hover g-brd-around g-brd-white-opacity-0_4 g-rounded-50x g-transition-0_2 g-transition--ease-in fa fa-angle-right g-right-minus-50 slick-arrow"
                    ></div>
                </div>
            </div>
        </section>
    )

}


export default BlogPosts
