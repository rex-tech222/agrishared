import React, {useEffect, useState, useRef } from 'react'

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';
import Slider from "react-slick";

function FindUserClientSlider(props) {

    const [state, setState] = useState({
        show: false
    });

    let slider = useRef()
    const  next = () => {
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
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className="user-client-slider">
                                   <span onClick={previous} className="arrow arrow-left">
                                        <i className="fa fa-angle-left"></i>
                                   </span>
            <Slider ref={c => ( slider = c)} {...settings}>
                <div>
                    <div className="user-profile">
                        <img src="/img/1.jpg" alt=""/>
                        <span className="name">Abraham Nwoke</span>
                    </div>
                </div>
                <div>
                    <div className="client-profile">
                        <img src="/img/logo.png" alt=""/>
                        <span className="name">Abraham Company</span>
                    </div>
                </div>
                <div>
                    <div className="user-profile">
                        <img src="/img/4.jpg" alt=""/>
                        <span className="name">Abraham Nwoke</span>
                    </div>
                </div>
                <div>
                    <div className="client-profile">
                        <img src="/img/logo.png" alt=""/>
                        <span className="name">Abraham Company</span>
                    </div>
                </div>
                <div>
                    <div className="user-profile">
                        <img src="/img/1.jpg" alt=""/>
                        <span className="name">Abraham Nwoke</span>
                    </div>
                </div>
                <div>
                    <div className="client-profile">
                        <img src="/img/logo.png" alt=""/>
                        <span className="name">Abraham Company</span>
                    </div>
                </div>
                <div>
                    <div className="user-profile">
                        <img src="/img/4.jpg" alt=""/>
                        <span className="name">Abraham Nwoke</span>
                    </div>
                </div>
                <div>
                    <div className="client-profile">
                        <img src="/img/logo.png" alt=""/>
                        <span className="name">Abraham Company</span>
                    </div>
                </div>
            </Slider>
            <span onClick={next} className="arrow arrow-right">
                                       <i className="fa fa-angle-right"></i>
                                   </span>
        </div>
    )

}


export default FindUserClientSlider
