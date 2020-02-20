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
        autoplay: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 8000,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        <section >
            <div className="slick-list draggable">
                <Slider ref={c => ( slider = c)} {...settings}>
                    <div>
                        <article className="g-color-gray-dark-v4 g-px-3 product">
                            <a className="d-block" href="#!">
                                <img style={{height:'179px'}} className="w-100" src="/img/simple-GERMANY-farm-tools-truper-wheelbarrow-prices.png" alt="Image Description"/>
                            </a>
                            <div className="g-pa-10">
                                <h3 className="h6 g-font-size-12 g-font-weight-600 text-uppercase g-mb-10">
                                    <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#!">Double-breasted</a>
                                </h3>

                                <div className="d-flex justify-content-between">
                                    <span className="g-color-black g-font-size-12">GHS95.00</span>
                                    <button
                                        style={{
                                            fontSize: '11px',
                                            background: '#FFA500',
                                            color: '#fff',
                                            padding: '0px 3px',
                                            borderRadius: '2px',
                                            float: 'right'
                                        }}
                                        className="btn">Buy Now</button>
                                </div>
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                            </div>
                        </article>
                    </div>
                   <div>
                       <article className="g-color-gray-dark-v4 g-px-3 product">
                           <a className="d-block" href="#!">
                               <img style={{height:'179px'}} className="w-100" src="/img/00028-PLOUGH-DISC-ARH3-MOUNTED-REV-26X6MM-GREASE.png" alt="Image Description"/>
                           </a>
                           <div className="g-pa-10">
                               <h3 className="h6 g-font-size-12 g-font-weight-600 text-uppercase g-mb-10">
                                   <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#!">Double-breasted</a>
                               </h3>

                                   <div className="d-flex justify-content-between">
                                       <span className="g-color-black g-font-size-12">GHS95.00</span>
                                       <button
                                           style={{
                                               fontSize: '11px',
                                               background: '#FFA500',
                                               color: '#fff',
                                               padding: '0px 3px',
                                               borderRadius: '2px',
                                               float: 'right'
                                           }}
                                           className="btn">Buy Now</button>
                                   </div>
                                   <ul className="stars">
                                       <li><i className="fa fa-star"></i></li>
                                       <li><i className="fa fa-star"></i></li>
                                       <li><i className="fa fa-star"></i></li>
                                       <li><i className="fa fa-star"></i></li>
                                       <li><i className="fa fa-star"></i></li>
                                   </ul>
                           </div>
                       </article>
                   </div>
                    <div>
                        <article className="g-color-gray-dark-v4 g-px-3 product">
                            <a className="d-block" href="#!">
                                <img style={{height:'179px'}} className="w-100" src="/img/simple-GERMANY-farm-tools-truper-wheelbarrow-prices.png" alt="Image Description"/>
                            </a>
                            <div className="g-pa-10">
                                <h3 className="h6 g-font-size-12 g-font-weight-600 text-uppercase g-mb-10">
                                    <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#!">Double-breasted</a>
                                </h3>

                                <div className="d-flex justify-content-between">
                                    <span className="g-color-black g-font-size-12">GHS95.00</span>
                                    <button
                                        style={{
                                            fontSize: '11px',
                                            background: '#FFA500',
                                            color: '#fff',
                                            padding: '0px 3px',
                                            borderRadius: '2px',
                                            float: 'right'
                                        }}
                                        className="btn">Buy Now</button>
                                </div>
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div>
                        <article className="g-color-gray-dark-v4 g-px-3 product">
                            <a className="d-block" href="#!">
                                <img style={{height:'179px'}} className="w-100" src="/img/Agricultural_machinery.png" alt="Image Description"/>
                            </a>
                            <div className="g-pa-10">
                                <h3 className="h6 g-font-size-12 g-font-weight-600 text-uppercase g-mb-10">
                                    <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#!">Double-breasted</a>
                                </h3>

                                <div className="d-flex justify-content-between">
                                    <span className="g-color-black g-font-size-12">GHS95.00</span>
                                    <button
                                        style={{
                                            fontSize: '11px',
                                            background: '#FFA500',
                                            color: '#fff',
                                            padding: '0px 3px',
                                            borderRadius: '2px',
                                            float: 'right'
                                        }}
                                        className="btn">Buy Now</button>
                                </div>
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                            </div>

                        </article>
                    </div>
                    <div>
                        <article className="g-color-gray-dark-v4 g-px-3 product">
                            <a className="d-block" href="#!">
                                <img style={{height:'179px'}} className="w-100" src="/img/983d284a-2212-40e2-8215-be2c864c7cc1.png" alt="Image Description"/>
                            </a>
                            <div className="g-pa-10">
                                <h3 className="h6 g-font-size-12 g-font-weight-600 text-uppercase g-mb-10">
                                    <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#!">Double-breasted</a>
                                </h3>

                                <div className="d-flex justify-content-between">
                                    <span className="g-color-black g-font-size-12">GHS95.00</span>
                                    <button
                                        style={{
                                            fontSize: '11px',
                                            background: '#FFA500',
                                            color: '#fff',
                                            padding: '0px 3px',
                                            borderRadius: '2px',
                                            float: 'right'
                                        }}
                                        className="btn">Buy Now</button>
                                </div>
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div>
                        <article className="g-color-gray-dark-v4 g-px-3 product">
                            <a className="d-block" href="#!">
                                <img style={{height:'179px'}} className="w-100" src="/img/simple-GERMANY-farm-tools-truper-wheelbarrow-prices.png" alt="Image Description"/>
                            </a>
                            <div className="g-pa-10">
                                <h3 className="h6 g-font-size-12 g-font-weight-600 text-uppercase g-mb-10">
                                    <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#!">Double-breasted</a>
                                </h3>

                                <div className="d-flex justify-content-between">
                                    <span className="g-color-black g-font-size-12">GHS95.00</span>
                                    <button
                                        style={{
                                            fontSize: '11px',
                                            background: '#FFA500',
                                            color: '#fff',
                                            padding: '0px 3px',
                                            borderRadius: '2px',
                                            float: 'right'
                                        }}
                                        className="btn">Buy Now</button>
                                </div>
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div>
                        <article className="g-color-gray-dark-v4 g-px-3 product">
                            <a className="d-block" href="#!">
                                <img style={{height:'179px'}} className="w-100" src="/img/Agricultural_machinery.png" alt="Image Description"/>
                            </a>
                            <div className="g-pa-10">
                                <h3 className="h6 g-font-size-12 g-font-weight-600 text-uppercase g-mb-10">
                                    <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#!">Double-breasted</a>
                                </h3>

                                <div className="d-flex justify-content-between">
                                    <span className="g-color-black g-font-size-12">GHS95.00</span>
                                    <button
                                        style={{
                                            fontSize: '11px',
                                            background: '#FFA500',
                                            color: '#fff',
                                            padding: '0px 3px',
                                            borderRadius: '2px',
                                            float: 'right'
                                        }}
                                        className="btn">Buy Now</button>
                                </div>
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                            </div>

                        </article>
                    </div>
                </Slider>
            </div>
        </section>

    )

}


export default Testimonies
