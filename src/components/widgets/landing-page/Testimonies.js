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
        speed: 200,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        // cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className="rows g-mb-30">

            <Slider ref={c => (slider = c)} {...settings}>

                <div>
                    <div  className={`g-mr-${layoutSettings.marginRight} g-ml-${layoutSettings.marginLeft}`}>
                        <blockquote
                            className="lead u-blockquote-v1 rounded g-pl-60 g-pr-30 g-py-30 g-mb-40">Lorem Ipsum
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the..
                        </blockquote>
                        <div className="media">
                            <img
                                className="d-flex align-self-center rounded-circle g-width-60 g-brd-around g-brd-3 g-brd-white mr-3"
                                src="/img/1.jpg" alt="Image Description"/>
                            <div className="media-body align-self-center">
                                <h4 className="h6 g-font-weight-700 g-mb-0">Alexandra Pottorf</h4>
                                <em className="g-color-gray-dark-v4 g-font-style-normal">Web Developer</em>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`g-mr-${layoutSettings.marginRight} g-ml-${layoutSettings.marginLeft}`}>
                        <blockquote
                            className="lead u-blockquote-v1 rounded g-pl-60 g-pr-30 g-py-30 g-mb-40">Lorem Ipsum
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the..
                        </blockquote>
                        <div className="media">
                            <img
                                className="d-flex align-self-center rounded-circle g-width-60 g-brd-around g-brd-3 g-brd-white mr-3"
                                src="/img/1.jpg" alt="Image Description"/>
                            <div className="media-body align-self-center">
                                <h4 className="h6 g-font-weight-700 g-mb-0">Alexandra Pottorf</h4>
                                <em className="g-color-gray-dark-v4 g-font-style-normal">Web Developer</em>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`g-mr-${layoutSettings.marginRight} g-ml-${layoutSettings.marginLeft}`}>
                        <blockquote
                            className="lead u-blockquote-v1 rounded g-pl-60 g-pr-30 g-py-30 g-mb-40">Lorem Ipsum
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the..
                        </blockquote>
                        <div className="media">
                            <img
                                className="d-flex align-self-center rounded-circle g-width-60 g-brd-around g-brd-3 g-brd-white mr-3"
                                src="/img/1.jpg" alt="Image Description"/>
                            <div className="media-body align-self-center">
                                <h4 className="h6 g-font-weight-700 g-mb-0">Alexandra Pottorf</h4>
                                <em className="g-color-gray-dark-v4 g-font-style-normal">Web Developer</em>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`g-mr-${layoutSettings.marginRight} g-ml-${layoutSettings.marginLeft}`}>
                        <blockquote
                            className="lead u-blockquote-v1 rounded g-pl-60 g-pr-30 g-py-30 g-mb-40">Lorem Ipsum
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the..
                        </blockquote>
                        <div className="media">
                            <img
                                className="d-flex align-self-center rounded-circle g-width-60 g-brd-around g-brd-3 g-brd-white mr-3"
                                src="/img/1.jpg" alt="Image Description"/>
                            <div className="media-body align-self-center">
                                <h4 className="h6 g-font-weight-700 g-mb-0">Alexandra Pottorf</h4>
                                <em className="g-color-gray-dark-v4 g-font-style-normal">Web Developer</em>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>

        </div>

    )

}


export default Testimonies
