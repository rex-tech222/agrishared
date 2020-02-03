import React, {useEffect, useState, useRef} from 'react'
import LandingPageLayout from "../../components/layouts/LandingPageLayout";
import FindUserClientSlider from "../../components/widgets/landing-page/FindUserClientSlider";

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';

import Slider from "react-slick";

import {Collapse, Form, Button, Select, Input, Icon, Progress} from 'antd';

const InputGroup = Input.Group;
const {Panel} = Collapse;
const {Option} = Select;

const text = ` A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`;

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};

function FAQS(props) {

    const [state, setState] = useState({
        show: false
    });


    const onCloseLoginModal = (e) => {
        e.preventDefault();
        setState(state => ({
            ...state,
            show: false
        }))
    }

    const onWritePost = () => {
        setState(state => ({
            ...state,
            show: true
        }))
    }

    function onChange(value) {
        console.log(`selected ${value}`);
    }


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

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
        speed: 1000,
        autoplaySpeed: 4000,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <LandingPageLayout>
            <div className="privacy-policy-page">


                <section className="container g-py-100">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="d-inline-block g-width-80 g-height-4 g-bg-black mb-3"></div>
                            <h2 className="g-color-black g-font-weight-700 g-font-size-50 g-line-height-1 mb-4">Terms &amp; Conditions</h2>
                            <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it
                                to make a type specimen book. It has survived not only five centuries,
                                but also the leap into
                            </p>
                        </div>
                    </div>
                </section>


                <section className="g-bg-gray-light-v5">
                    <div className="container g-py-80">
                        <div className="row">

                            <div id="stickyblock-start" className="col-md-4 g-mb-30">

                                <div className="stickyblock-start  g-m-reset"  >
                                    <ul className="list-unstyled mb-0">
                                        <li className="g-bg-gray-dark-v2 g-rounded-top-5 g-px-20 g-pt-30">
                                            <a className="js-go-to d-block g-color-white g-bg-primary--hover g-font-weight-600 g-font-size-12 text-uppercase g-text-underline--none--hover rounded g-px-20 g-py-15 animated js-animation-was-fired undefined"
                                               href="#license"
                                               style={{display: 'inline-block'}}>License</a>
                                        </li>
                                        <li className="g-bg-gray-dark-v2 g-px-20">
                                            <a className="js-go-to d-block g-color-white g-bg-primary--hover g-font-weight-600 g-font-size-12 text-uppercase g-text-underline--none--hover rounded g-px-20 g-py-15 animated js-animation-was-fired undefined"
                                               href="#ownership"
                                               style={{display: 'inline-block'}} >Ownership</a>
                                        </li>
                                        <li className="g-bg-gray-dark-v2 g-px-20">
                                            <a className="js-go-to d-block g-color-white g-bg-primary--hover g-font-weight-600 g-font-size-12 text-uppercase g-text-underline--none--hover rounded g-px-20 g-py-15 animated js-animation-was-fired undefined"
                                               href="#usage"   style={{display: 'inline-block'}}>Usage</a>
                                        </li>
                                        <li className="g-bg-gray-dark-v2 g-rounded-bottom-5 g-px-20 g-pb-30">
                                            <a className="js-go-to d-block g-color-white g-bg-primary--hover g-font-weight-600 g-font-size-12 text-uppercase g-text-underline--none--hover rounded g-px-20 g-py-15 animated js-animation-was-fired undefined"
                                               href="#refunds" data-target=""
                                               style={{display: 'inline-block'}}>Refunds</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-8">

                                <div id="license" className="u-shadow-v19 g-bg-white rounded g-pa-40 g-mb-50">
                                    <h2 className="h3 g-color-black mb-3">License</h2>
                                    <div className="d-inline-block g-width-50 g-height-2 g-bg-black mb-3"></div>
                                    <p>This is where we sit down, grab a cup of coffee and dial in the details.
                                        Understanding the task at hand and ironing out the wrinkles is key. Now that
                                        we've aligned the details, it's time to get things mapped out and organized.
                                        This part
                                        is really crucial in keeping the project in line to completion.</p>
                                    <p>Whether through commerce or just an experience to tell your brand's story, the
                                        time has come to start using development languages that fit your projects needs.
                                        Now that your brand is all dressed up and ready to party, it's time to release
                                        it to the world. By the way, let's celebrate already. We get it, you're busy and
                                        it's important that someone keeps up with marketing and driving people to your
                                        brand. We've got you covered.</p>
                                </div>

                                <div id="ownership" className="u-shadow-v19 g-bg-white rounded g-pa-40 g-mb-50">
                                    <h3 className="g-color-black mb-3">Ownership</h3>
                                    <div className="d-inline-block g-width-50 g-height-2 g-bg-black mb-3"></div>
                                    <p>This is where we sit down, grab a cup of coffee and dial in the details.
                                        Understanding the task at hand and ironing out the wrinkles is key. Now that
                                        we've aligned the details, it's time to get things mapped out and organized.
                                        This part
                                        is really crucial in keeping the project in line to completion.</p>
                                    <p>Whether through commerce or just an experience to tell your brand's story, the
                                        time has come to start using development languages that fit your projects needs.
                                        Now that your brand is all dressed up and ready to party, it's time to release
                                        it to the world. By the way, let's celebrate already. We get it, you're busy and
                                        it's important that someone keeps up with marketing and driving people to your
                                        brand. We've got you covered.</p>
                                </div>

                                <div id="usage" className="u-shadow-v19 g-bg-white rounded g-pa-40 g-mb-50">
                                    <h3 className="g-color-black mb-3">Usage</h3>
                                    <div className="d-inline-block g-width-50 g-height-2 g-bg-black mb-3"></div>
                                    <p>This is where we sit down, grab a cup of coffee and dial in the details.
                                        Understanding the task at hand and ironing out the wrinkles is key. Now that
                                        we've aligned the details, it's time to get things mapped out and organized.
                                        This part
                                        is really crucial in keeping the project in line to completion.</p>
                                    <p>Whether through commerce or just an experience to tell your brand's story, the
                                        time has come to start using development languages that fit your projects needs.
                                        Now that your brand is all dressed up and ready to party, it's time to release
                                        it to the world. By the way, let's celebrate already. We get it, you're busy and
                                        it's important that someone keeps up with marketing and driving people to your
                                        brand. We've got you covered.</p>
                                </div>

                                <div id="refunds" className="u-shadow-v19 g-bg-white rounded g-pa-40">
                                    <h3 className="g-color-black mb-3">Refunds</h3>
                                    <div className="d-inline-block g-width-50 g-height-2 g-bg-black mb-3"></div>
                                    <p>This is where we sit down, grab a cup of coffee and dial in the details.
                                        Understanding the task at hand and ironing out the wrinkles is key. Now that
                                        we've aligned the details, it's time to get things mapped out and organized.
                                        This part
                                        is really crucial in keeping the project in line to completion.</p>
                                    <p>Whether through commerce or just an experience to tell your brand's story, the
                                        time has come to start using development languages that fit your projects needs.
                                        Now that your brand is all dressed up and ready to party, it's time to release
                                        it to the world. By the way, let's celebrate already. We get it, you're busy and
                                        it's important that someone keeps up with marketing and driving people to your
                                        brand. We've got you covered.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </LandingPageLayout>
    )

}


export default FAQS
