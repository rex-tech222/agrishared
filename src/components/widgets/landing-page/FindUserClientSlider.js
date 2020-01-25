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
        autoplay: true,
            infinite: true,
            speed: 8000,
            autoplaySpeed: 100,
            slidesToShow: 6,
            slidesToScroll: 4,
            initialSlide: 0,
            cssEase: "linear",
            pauseOnHover: true,
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
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    };

    return (
        <div className="user-client-slider">
                                   
            <Slider ref={c => ( slider = c)} {...settings}>
                <div>
                    <div className="user-profile">
                        <img src="/img/1.jpg" alt=""/>
                    </div>
                </div>
                <div>
                    <div className="client-profile">
                        <img src="/img/logo.png" alt=""/>
                       
                    </div>
                </div>
                <div>
                    <div className="user-profile">
                        <img src="/img/4.jpg" alt=""/>
                        
                    </div>
                </div>
                <div>
                    <div className="client-profile">
                        <img src="/img/logo.png" alt=""/>
                       
                    </div>
                </div>
                <div>
                    <div className="user-profile">
                        <img src="/img/1.jpg" alt=""/>
                        
                    </div>
                </div>
                <div>
                    <div className="client-profile">
                        <img src="/img/logo.png" alt=""/>
                        
                    </div>
                </div>
                <div>
                    <div className="user-profile">
                        <img src="/img/4.jpg" alt=""/>
                        
                    </div>
                </div>
                <div>
                    <div className="client-profile">
                        <img src="/img/logo.png" alt=""/>
                        
                    </div>
                </div>
            </Slider>
            
        </div>
    )

}


export default FindUserClientSlider
