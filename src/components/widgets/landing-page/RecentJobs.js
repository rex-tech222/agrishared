import React, {useEffect, useState, useRef} from 'react'

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';
import Slider from "react-slick";
import BlogPost from "./BlogPost";
import JobWidget from "./JobWidget";

function RecentJobs(props) {

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
        //  autoplaySpeed: 100,
        slidesToShow: 3,
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
        <div className="shortcode-html g-mt-50 g-mb-30">
            <Slider ref={c => ( slider = c)} {...settings}>
                <div>
                    <div className={`g-mr-${layoutSettings.marginRight} g-ml-${layoutSettings.marginLeft} g-mb-3 g-mt-3`}>
                        <JobWidget />
                    </div>
                </div>
                <div>
                    <div className={`g-mr-${layoutSettings.marginRight} g-ml-${layoutSettings.marginLeft} g-mb-3 g-mt-3`}>
                        <JobWidget />
                    </div>
                </div>
                <div>
                    <div className={`g-mr-${layoutSettings.marginRight} g-ml-${layoutSettings.marginLeft} g-mb-3 g-mt-3`}>
                        <JobWidget />
                    </div>
                </div>
                <div>
                    <div className={`g-mr-${layoutSettings.marginRight} g-ml-${layoutSettings.marginLeft} g-mb-3 g-mt-3`}>
                        <JobWidget />
                    </div>
                </div>
            </Slider>
        </div>
    )

}


export default RecentJobs
