import React, {useEffect, useState, useRef} from 'react'

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';
import Slider from "react-slick";


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
        <div className="silder-block b2c-home-sliders">
            <div onClick={previous} className="prev fa fa-angle-left"></div>
            <Slider ref={c => ( slider = c)} {...settings}>
                <div>
                    <div className="b2c-home-slider">
                        <img className="bg-img"  src="/img/5e09feeac38b0.png" alt=""/>
                        <img className="bg-overlay" src="/img/backgrounds/Group 223.png" alt=""/>
                        <div className="container  ">
                           <div className="row">
                               <div className="des-box col-lg-8">
                                   <h1>German combine harvester</h1>
                                   <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat.
                                       Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                                   </p>
                                   <button className="btn sign-up">Buy Now</button>
                               </div>
                               <div className="col-lg-4">
                                   <div className="price-box ">
                                       <h4>GH 59   </h4>
                                       <button className="btn price-box-btn">ADD CART</button>
                                   </div>
                               </div>
                           </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="b2c-home-slider">
                        <img className="bg-img"  src="/img/5e09feeac38b0.png" alt=""/>
                        <img className="bg-overlay" src="/img/backgrounds/Group 223.png" alt=""/>
                        <div className="container  ">
                            <div className="row">
                                <div className="des-box col-lg-8">
                                    <h1>German combine harvester</h1>
                                    <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat.
                                        Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                                    </p>
                                    <button className="btn sign-up">Buy Now</button>
                                </div>
                                <div className="col-lg-4">
                                    <div className="price-box ">
                                        <h4>GH 59   </h4>
                                        <a className="btn price-box-btn">ADD CART</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="b2c-home-slider">
                        <img className="bg-img"  src="/img/5e09feeac38b0.png" alt=""/>
                        <img className="bg-overlay" src="/img/backgrounds/Group 223.png" alt=""/>
                        <div className="container  ">
                            <div className="row">
                                <div className="des-box col-lg-8">
                                    <h1>German combine harvester</h1>
                                    <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat.
                                        Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                                    </p>
                                    <button className="btn sign-up">Buy Now</button>
                                </div>
                                <div className="col-lg-4">
                                    <div className="price-box ">
                                        <h4>GH 59   </h4>
                                        <button className="btn price-box-btn">ADD CART</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Slider>
            <div onClick={next} className="next fa fa-angle-right "></div>
        </div>
    )

}


export default BlogPosts
