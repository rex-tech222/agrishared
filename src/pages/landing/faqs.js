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

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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
            <div className="faqs-page">

                <section
                    className="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall"
                    data-options='{direction: "fromtop", animation_duration: 25, direction: "reverse"}'>
                    <div
                        className="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-pos-center g-bg-black-opacity-0_2--after"
                        style={{height: '140%', backgroundImage: 'url(/img/backgrounds/soft.jpg)'}}>
                    </div>
                    <div className="container text-center g-bg-cover__inner g-py-150">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="mb-5">
                                    <h1 className="g-color-white g-font-size-60 mb-4">Have a question?</h1>
                                    <h2 className="g-color-white g-font-weight-300 g-font-size-20 mb-0">Finding your
                                        questions is easy now.</h2>
                                </div>
                                <div className="form-group mb-0">
                                    <div className="input-group">
                                        <input id="inputGroup1_1"
                                               className="form-control u-form-control g-brd-white g-font-size-default g-placeholder-gray g-rounded-left-30 g-px-25 g-py-15"
                                               type="text"
                                               placeholder="Ask a question"/>
                                        <div className="input-group-btn">
                                            <button
                                                className="btn green-bg g-font-size-18 g-rounded-right-30 g-px-25 g-py-15"
                                                type="submit">
                                                <i className="g-font-size-default fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container g-pt-80 g-pb-10">
                    <div className="row">
                        <div className="col-md-4 g-mb-30">
                            <div className="g-bg-purple text-center rounded g-pos-rel g-z-index-1 g-px-20 g-py-30">
            <span className="u-icon-v1 u-icon-size--xl g-color-white g-mb-10">

                <i className="icon-communication-009 u-line-icon-pro"></i>

              </span>
                                <h3 className="h4 g-color-white mb-2">Contact us</h3>
                                <span className="d-block h5 g-color-white-opacity-0_7 mb-4">+233244491485</span>
                                <a className="btn btn-md u-btn-white g-color-white g-bg-white-opacity-0_2 g-brd-white--hover g-color-purple--hover g-bg-white--hover g-rounded-25"
                                   href="#!">Give a Call</a>
                            </div>
                        </div>

                        <div className="col-md-4 g-mb-30">
                            <div className="g-bg-teal text-center rounded g-pos-rel g-z-index-1 g-px-20 g-py-30">
            <span className="u-icon-v1 u-icon-size--xl g-color-white g-mb-10">

                <i className="icon-communication-062 u-line-icon-pro"></i>

              </span>
                                <h3 className="h4 g-color-white mb-2">Email us</h3>
                                <span
                                    className="d-block h5 g-color-white-opacity-0_7 mb-4">agrishared@support.com</span>
                                <a className="btn btn-md u-btn-white g-color-white g-bg-white-opacity-0_2 g-brd-white--hover g-color-teal--hover g-bg-white--hover g-rounded-25"
                                   href="#!">Say Hi..</a>
                            </div>
                        </div>

                        <div className="col-md-4 g-mb-30">
                            <div className="g-bg-blue text-center rounded g-pos-rel g-z-index-1 g-px-20 g-py-30">
            <span className="u-icon-v1 u-icon-size--xl g-color-white g-mb-10">

                <i className="icon-communication-058 u-line-icon-pro"></i>

              </span>
                                <h3 className="h4 g-color-white mb-2">Support</h3>
                                <span className="d-block h5 g-color-white-opacity-0_7 mb-4">Technical Support</span>
                                <a className="btn btn-md u-btn-white g-color-white g-bg-white-opacity-0_2 g-brd-white--hover g-color-blue--hover g-bg-white--hover g-rounded-25"
                                   href="#!">Ask from Us</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container text-center g-pt-80 g-pb-30">
                    <h2 className="g-color-black g-font-weight-600 g-font-size-50 g-mb-70">Frequently Asked Questions</h2>
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item g-brd-right g-brd-gray-light-v4 px-4 mx-0">
                            <a className="js-go-to g-color-gray-dark-v5 g-font-weight-600 text-uppercase g-text-underline--none--hover" href="#category1">
                                Category 1
                            </a>
                        </li>
                        <li className="list-inline-item g-brd-right g-brd-gray-light-v4 px-4 mx-0">
                            <a className="js-go-to g-color-gray-dark-v5 g-font-weight-600 text-uppercase g-text-underline--none--hover"
                               href="#category2" >
                                Category 2
                            </a>
                        </li>
                        <li className="list-inline-item g-brd-right g-brd-gray-light-v4 px-4 mx-0">
                            <a className="js-go-to g-color-gray-dark-v5 g-font-weight-600 text-uppercase g-text-underline--none--hover"
                               href="#category3"  >
                                Category 3
                            </a>
                        </li>
                        <li className="list-inline-item px-4 mx-0">
                            <a className="js-go-to g-color-gray-dark-v5 g-font-weight-600 text-uppercase g-text-underline--none--hover"
                               href="#category4"  >
                                Category 4
                            </a>
                        </li>
                    </ul>
                </section>


                <section className="container g-pb-100">

                    <div id="category1" className="u-shadow-v34 rounded g-py-80 g-mb-50">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">

                                <div className="text-center g-mb-60">
                                    <h2 className="g-font-weight-600 text-uppercase mb-2">Category 1</h2>
                                </div>


                                <div id="accordion" className="u-accordion u-accordion-color-primary" role="tablist"
                                     aria-multiselectable="true">

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-heading-01"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-body-01" data-toggle="collapse"
                                                   data-parent="#accordion" aria-expanded="false"
                                                   aria-controls="accordion-body-01">

                                                    Question 1

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-body-01" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-heading-01" data-parent="#accordion">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-heading-02"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-body-02" data-toggle="collapse"
                                                   data-parent="#accordion" aria-expanded="false"
                                                   aria-controls="accordion-body-02">

                                                    Question 2

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-body-02" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-heading-02" data-parent="#accordion">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-heading-03"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-body-03" data-toggle="collapse"
                                                   data-parent="#accordion" aria-expanded="false"
                                                   aria-controls="accordion-body-03">

                                                    Question 3

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-body-03" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-heading-03" data-parent="#accordion">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-heading-04"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-body-04" data-toggle="collapse"
                                                   data-parent="#accordion" aria-expanded="false"
                                                   aria-controls="accordion-body-04">

                                                    Question 4

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-body-04" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-heading-04" data-parent="#accordion">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="category2" className="u-shadow-v34 rounded g-py-50 g-mb-50">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">

                                <div className="text-center g-mb-60">
                                    <h2 className="g-font-weight-600 text-uppercase mb-2">Category 2</h2>
                                </div>


                                <div id="accordion-1" className="u-accordion u-accordion-color-primary" role="tablist"
                                     aria-multiselectable="true">

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-1-heading-01"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-1-body-01" data-toggle="collapse"
                                                   data-parent="#accordion-1" aria-expanded="false"
                                                   aria-controls="accordion-1-body-01">

                                                    Question 1

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-1-body-01" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-1-heading-01" data-parent="#accordion-1">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-1-heading-02"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-1-body-02" data-toggle="collapse"
                                                   data-parent="#accordion-1" aria-expanded="false"
                                                   aria-controls="accordion-1-body-02">

                                                    Question 2

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-1-body-02" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-1-heading-02" data-parent="#accordion-1">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-1-heading-03"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-1-body-03" data-toggle="collapse"
                                                   data-parent="#accordion-1" aria-expanded="false"
                                                   aria-controls="accordion-1-body-03">

                                                    Question 3

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-1-body-03" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-1-heading-03" data-parent="#accordion-1">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-1-heading-04"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-1-body-04" data-toggle="collapse"
                                                   data-parent="#accordion-1" aria-expanded="false"
                                                   aria-controls="accordion-1-body-04">

                                                    Question 4

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-1-body-04" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-1-heading-04" data-parent="#accordion-1">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="category3" className="u-shadow-v34 rounded g-py-50 g-mb-50">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">

                                <div className="text-center g-mb-60">
                                    <h2 className="g-font-weight-600 text-uppercase mb-2">Category 3</h2>
                                </div>


                                <div id="accordion-2" className="u-accordion u-accordion-color-primary" role="tablist"
                                     aria-multiselectable="true">

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-2-heading-01"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-2-body-01" data-toggle="collapse"
                                                   data-parent="#accordion-2" aria-expanded="false"
                                                   aria-controls="accordion-2-body-01">

                                                    Question 1

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-2-body-01" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-2-heading-01" data-parent="#accordion-2">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-2-heading-02"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-2-body-02" data-toggle="collapse"
                                                   data-parent="#accordion-2" aria-expanded="false"
                                                   aria-controls="accordion-2-body-02">

                                                    Question 2

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-2-body-02" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-2-heading-02" data-parent="#accordion-2">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-2-heading-03"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-2-body-03" data-toggle="collapse"
                                                   data-parent="#accordion-2" aria-expanded="false"
                                                   aria-controls="accordion-2-body-03">

                                                    Question 3

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-2-body-03" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-2-heading-03" data-parent="#accordion-2">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-2-heading-04"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-2-body-04" data-toggle="collapse"
                                                   data-parent="#accordion-2" aria-expanded="false"
                                                   aria-controls="accordion-2-body-04">

                                                    Question 4

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-2-body-04" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-2-heading-04" data-parent="#accordion-2">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="category4" className="u-shadow-v34 rounded g-py-50">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">

                                <div className="text-center g-mb-60">
                                    <h2 className="g-font-weight-600 text-uppercase mb-2">Category 4</h2>
                                </div>


                                <div id="accordion-3" className="u-accordion u-accordion-color-primary" role="tablist"
                                     aria-multiselectable="true">

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-3-heading-01"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-3-body-01" data-toggle="collapse"
                                                   data-parent="#accordion-3" aria-expanded="false"
                                                   aria-controls="accordion-3-body-01">

                                                    Question 1

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-3-body-01" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-3-heading-01" data-parent="#accordion-3">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-3-heading-02"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-3-body-02" data-toggle="collapse"
                                                   data-parent="#accordion-3" aria-expanded="false"
                                                   aria-controls="accordion-3-body-02">

                                                    Question 2

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-3-body-02" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-3-heading-02" data-parent="#accordion-3">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-3-heading-03"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-3-body-03" data-toggle="collapse"
                                                   data-parent="#accordion-3" aria-expanded="false"
                                                   aria-controls="accordion-3-body-03">

                                                    Question 3

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-3-body-03" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-3-heading-03" data-parent="#accordion-3">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card g-brd-none rounded-0 g-mb-20">
                                        <div id="accordion-3-heading-04"
                                             className="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                                            <h5 className="mb-0">

                                                <a className="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20"
                                                   href="#accordion-3-body-04" data-toggle="collapse"
                                                   data-parent="#accordion-3" aria-expanded="false"
                                                   aria-controls="accordion-3-body-04">

                                                    Question 4

                                                    <span className="u-accordion__control-icon">

                          <i className="fa fa-angle-down"></i>

                          <i className="fa fa-angle-up"></i>

                        </span>

                                                </a>

                                            </h5>
                                        </div>
                                        <div id="accordion-3-body-04" className="collapse" role="tabpanel"
                                             aria-labelledby="accordion-3-heading-04" data-parent="#accordion-3">
                                            <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
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
