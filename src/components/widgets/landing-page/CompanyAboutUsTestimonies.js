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
            speed: 500,
           // autoplaySpeed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
           /// cssEase: "linear",
           // pauseOnHover: true,
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
        <div className="">
                                   
            <Slider ref={c => ( slider = c)} {...settings}>
                <div>
                <div class="row justify-content-center">
            <div class="col-lg-7">
               
              <div class="g-pos-rel g-pt-40">
                <em class="g-color-gray-light-v5 g-font-size-120 g-pos-abs g-top-minus-15 g-left-minus-15 g-z-index-minus-1">

                    &#8220;

                  </em>
                <blockquote class="lead g-font-style-italic g-line-height-2 g-pl-30 g-mb-30">Dear Htmlstream team, I just bought the Unify template some weeks ago. The template is really nice and offers quite a large set of options.</blockquote>

                <div class="media">
                  <img class="d-flex align-self-center g-width-50 g-height-50 rounded-circle mr-3" src="/img/1.jpg" alt="Image Description"/>

                  <div class="media-body align-self-center">
                    <h4 class="h5 g-font-weight-700 g-mb-0">Daniel Ramirez</h4>
                    <span class="d-block g-color-gray-dark-v4">Designer</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
                </div> 

                <div>
                <div class="row justify-content-center">
            <div class="col-lg-7">
               
              <div class="g-pos-rel g-pt-40">
                <em class="g-color-gray-light-v5 g-font-size-120 g-pos-abs g-top-minus-15 g-left-minus-15 g-z-index-minus-1">

                    &#8220;

                  </em>
                <blockquote class="lead g-font-style-italic g-line-height-2 g-pl-30 g-mb-30">Dear Htmlstream team, I just bought the Unify template some weeks ago. The template is really nice and offers quite a large set of options.</blockquote>

                <div class="media">
                  <img class="d-flex align-self-center g-width-50 g-height-50 rounded-circle mr-3" src="/img/1.jpg" alt="Image Description"/>

                  <div class="media-body align-self-center">
                    <h4 class="h5 g-font-weight-700 g-mb-0">Daniel Ramirez</h4>
                    <span class="d-block g-color-gray-dark-v4">Designer</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
                </div> 

                <div>
                <div class="row justify-content-center">
            <div class="col-lg-7">
               
              <div class="g-pos-rel g-pt-40">
                <em class="g-color-gray-light-v5 g-font-size-120 g-pos-abs g-top-minus-15 g-left-minus-15 g-z-index-minus-1">

                    &#8220;

                  </em>
                <blockquote class="lead g-font-style-italic g-line-height-2 g-pl-30 g-mb-30">Dear Htmlstream team, I just bought the Unify template some weeks ago. The template is really nice and offers quite a large set of options.</blockquote>

                <div class="media">
                  <img class="d-flex align-self-center g-width-50 g-height-50 rounded-circle mr-3" src="/img/1.jpg" alt="Image Description"/>

                  <div class="media-body align-self-center">
                    <h4 class="h5 g-font-weight-700 g-mb-0">Daniel Ramirez</h4>
                    <span class="d-block g-color-gray-dark-v4">Designer</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
                </div> 

                <div>
                <div class="row justify-content-center">
            <div class="col-lg-7">
               
              <div class="g-pos-rel g-pt-40">
                <em class="g-color-gray-light-v5 g-font-size-120 g-pos-abs g-top-minus-15 g-left-minus-15 g-z-index-minus-1">

                    &#8220;

                  </em>
                <blockquote class="lead g-font-style-italic g-line-height-2 g-pl-30 g-mb-30">Dear Htmlstream team, I just bought the Unify template some weeks ago. The template is really nice and offers quite a large set of options.</blockquote>

                <div class="media">
                  <img class="d-flex align-self-center g-width-50 g-height-50 rounded-circle mr-3" src="/img/1.jpg" alt="Image Description"/>

                  <div class="media-body align-self-center">
                    <h4 class="h5 g-font-weight-700 g-mb-0">Daniel Ramirez</h4>
                    <span class="d-block g-color-gray-dark-v4">Designer</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
                </div> 


            </Slider>
            
        </div>
    )

}


export default FindUserClientSlider
