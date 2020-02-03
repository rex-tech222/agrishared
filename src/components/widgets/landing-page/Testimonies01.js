import React, {useEffect, useState, useRef} from 'react'

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';
import Slider from "react-slick";

function Testimonies(props) {

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
        speed: 500,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        // cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
        <section id="testimonials">
            <div className="u-bg-overlay g-bg-img-hero g-bg-black-opacity-0_5--after g-py-90" style={{backgroundImage: 'url(/img/5e09feeac38b0.png)'}}>
                <div className="container u-bg-overlay__inner g-width-760">
                    <div className="text-center mx-auto u-heading-v2-2--bottom g-brd-primary g-mb-70">
                        <h2 className="text-uppercase g-line-height-1_1 g-font-weight-700 g-font-size-26 g-color-white g-mb-15">What
                            do people say?</h2>
                        <p className="g-color-white-opacity-0_8 mb-0">Curabitur ullamcorper ultricies nisi. Nam
                            eget dui. Etiam rhoncus. Nam eget dui. Etiam rhoncus. ullamcorper ultricies nisi,
                            ullamcorper ultricies nisi</p>
                    </div>
                </div>

                <div className="container u-bg-overlay__inner g-width-900">
                    <div className="js-carousel g-pb-70 slick-initialized slick-slider" data-infinite="true"
                         data-arrows-classes="u-arrow-v1 g-absolute-centered--x g-bottom-0 g-width-40 g-height-40 g-rounded-50x g-font-size-default g-theme-color-gray-light-v2 g-color-white--hover g-bg-white g-bg-primary--hover g-transition-0_2 g-transition--ease-in"
                         data-arrow-left-classes="fa fa-angle-left g-ml-minus-30"
                         data-arrow-right-classes="fa fa-angle-right g-ml-30">
                        <div onClick={previous} className="js-prev u-arrow-v1 g-absolute-centered--x g-bottom-0 g-width-40 g-height-40 g-rounded-50x g-font-size-default g-theme-color-gray-light-v2 g-color-white--hover g-bg-white g-bg-primary--hover g-transition-0_2 g-transition--ease-in fa fa-angle-left g-ml-minus-30 slick-arrow"
                            //   style=""
                        ></div>
                        <div className="slick-list draggable">

                            <Slider ref={c => ( slider = c)} {...settings}>

                                <div className="media d-block d-md-flex">
                                    <div className="g-mb-30 g-mb-0--md g-pr-30--sm">
                                        <img className="g-width-200 g-height-200 img-fluid rounded-circle img-bordered g-brd-white mx-auto" src="/img/4.jpg" alt="Image Description"/>
                                    </div>

                                    <div
                                        className="media-body align-self-center text-center text-sm-left g-color-white">
                                        <blockquote className="g-mb-25">Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes.
                                            Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas
                                        </blockquote>
                                        <h4 className="h6 text-uppercase g-font-weight-700 g-color-white mb-0">Someone someone</h4>
                                    </div>
                                </div>

                                <div className="media d-block d-md-flex">
                                    <div className="g-mb-30 g-mb-0--md g-pr-30--sm">
                                        <img className="g-width-200 g-height-200  img-fluid rounded-circle img-bordered g-brd-white mx-auto" src="/img/4.jpg" alt="Image Description"/>
                                    </div>

                                    <div
                                        className="media-body align-self-center text-center text-sm-left g-color-white">
                                        <blockquote className="g-mb-25">Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes.
                                            Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas
                                        </blockquote>
                                        <h4 className="h6 text-uppercase g-font-weight-700 g-color-white mb-0">Someone someone</h4>
                                    </div>
                                </div>

                                <div className="media d-block d-md-flex">
                                    <div className="g-mb-30 g-mb-0--md g-pr-30--sm">
                                        <img className="g-width-200 g-height-200  img-fluid rounded-circle img-bordered g-brd-white mx-auto" src="/img/4.jpg" alt="Image Description"/>
                                    </div>

                                    <div
                                        className="media-body align-self-center text-center text-sm-left g-color-white">
                                        <blockquote className="g-mb-25">Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes.
                                            Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas
                                        </blockquote>
                                        <h4 className="h6 text-uppercase g-font-weight-700 g-color-white mb-0">Someone someone</h4>
                                    </div>
                                </div>

                                <div className="media d-block d-md-flex">
                                    <div className="g-mb-30 g-mb-0--md g-pr-30--sm">
                                        <img className="g-width-200 g-height-200  img-fluid rounded-circle img-bordered g-brd-white mx-auto" src="/img/4.jpg" alt="Image Description"/>
                                    </div>

                                    <div
                                        className="media-body align-self-center text-center text-sm-left g-color-white">
                                        <blockquote className="g-mb-25">Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes.
                                            Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas
                                        </blockquote>
                                        <h4 className="h6 text-uppercase g-font-weight-700 g-color-white mb-0">Someone someone</h4>
                                    </div>
                                </div>

                                <div className="media d-block d-md-flex">
                                    <div className="g-mb-30 g-mb-0--md g-pr-30--sm">
                                        <img className="g-width-200 g-height-200  img-fluid rounded-circle img-bordered g-brd-white mx-auto" src="/img/4.jpg" alt="Image Description"/>
                                    </div>

                                    <div
                                        className="media-body align-self-center text-center text-sm-left g-color-white">
                                        <blockquote className="g-mb-25">Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes.
                                            Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas
                                        </blockquote>
                                        <h4 className="h6 text-uppercase g-font-weight-700 g-color-white mb-0">Someone someone</h4>
                                    </div>
                                </div>

                                <div className="media d-block d-md-flex">
                                    <div className="g-mb-30 g-mb-0--md g-pr-30--sm">
                                        <img className="g-width-200 g-height-200  img-fluid rounded-circle img-bordered g-brd-white mx-auto" src="/img/4.jpg" alt="Image Description"/>
                                    </div>

                                    <div
                                        className="media-body align-self-center text-center text-sm-left g-color-white">
                                        <blockquote className="g-mb-25">Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas principes.
                                            Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.Lorem ipsum dolor sit amet, his ea mollis fabellas
                                        </blockquote>
                                        <h4 className="h6 text-uppercase g-font-weight-700 g-color-white mb-0">Someone someone</h4>
                                    </div>
                                </div>

                            </Slider>


                        </div>


                        <div onClick={next}
                            className="js-next u-arrow-v1 g-absolute-centered--x g-bottom-0 g-width-40 g-height-40 g-rounded-50x g-font-size-default g-theme-color-gray-light-v2 g-color-white--hover g-bg-white g-bg-primary--hover g-transition-0_2 g-transition--ease-in fa fa-angle-right g-ml-30 slick-arrow"

                        ></div>
                    </div>
                </div>
            </div>


        </section>

    )

}


export default Testimonies
