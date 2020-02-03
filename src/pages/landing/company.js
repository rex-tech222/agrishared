import React, {useEffect, useState, useRef} from 'react'
import LandingPageLayout from "../../components/layouts/LandingPageLayout";
import FindUserClientSlider from "../../components/widgets/landing-page/FindUserClientSlider";
import CompanyAboutUsTestimonies from "../../components/widgets/landing-page/CompanyAboutUsTestimonies";
import JobWidget from "../../components/widgets/landing-page/JobWidget";
import Testimonies from "../../components/widgets/landing-page/Testimonies";
import BlogPosts from "../../components/widgets/landing-page/BlogPosts";
import RecentJobs from "../../components/widgets/landing-page/RecentJobs";

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';

import Slider from "react-slick";

import {Collapse, Form, Button, Select, Input, Icon, Progress} from 'antd';

const InputGroup = Input.Group;

const {Option} = Select;


function Company(props) {

    useEffect(() => {


    }, [props]);

    return (
        <LandingPageLayout>

            <div className="company-page">

                <div className="about-us" id="about-us">

                    <section
                        class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall"
                        data-options='{direction: "fromtop", animation_duration: 25, direction: "reverse"}'>
                        <div
                            className="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-pos-center g-bg-black-opacity-0_2--after"
                            style={{height: '140%', backgroundImage: 'url(/img/backgrounds/bg1.jpg)'}}>
                        </div>
                        <div className="container g-color-white text-center g-py-150">
                            <h3 className="h1 text-uppercase mb-0">About Us</h3>
                            <span className="d-block g-font-weight-300 g-font-size-25 mb-3">Agrishared is an agricultural and sharing app</span>
                        </div>
                    </section>


                    <section class="container g-pt-100 g-pb-50">
                        <div class="row justify-content-center g-mb-60">
                            <div class="col-lg-10">

                                <div class="">
                                    <h2 class="text-center h3 g-color-black text-uppercase mb-2">We are Agrishared</h2>
                                    <div class="d-inline-block g-width-35 g-height-2 g-bg-primary mb-2"></div>
                                    <p class="text-justify  mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the .
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                        It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged.
                                    </p>
                                    <p class="text-justify  mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the .
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                        It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged.
                                    </p>
                                    <p class="text-justify  mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the .
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                        It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged.
                                    </p>
                                    <p class="text-justify  mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the .
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                        It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 g-mb-50">
                                <img class="img-fluid" src="/img/5e09feeac38b0.png" alt="Image Description"/>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-5">
                                    <p class="g-mb-30">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                        the.</p>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <ul class="list-unstyled g-font-size-13 mb-0">
                                                <li class="d-flex mb-3">
                                                    <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                                                    Jacks of all. Experts in all.
                                                </li>
                                                <li class="d-flex mb-3">
                                                    <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                                                    It's good to virtually meet you.
                                                </li>
                                                <li class="d-flex mb-3">
                                                    <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                                                    A crew of creative doers.
                                                </li>
                                                <li class="d-flex mb-3">
                                                    <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                                                    Let's create something great.
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-sm-6">
                                            <ul class="list-unstyled g-font-size-13 mb-0">
                                                <li class="d-flex mb-3">
                                                    <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                                                    We're accepting projects today.
                                                </li>
                                                <li class="d-flex mb-3">
                                                    <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                                                    Finding your perfect plan.
                                                </li>
                                                <li class="d-flex mb-3">
                                                    <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                                                    Examples of branding projects.
                                                </li>
                                                <li class="d-flex mb-3">
                                                    <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                                                    Your brand has a story to tell.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <div class="container">
                        <div class="row text-center g-color-white">
                            <div class="col-md-3 col-6 d-flex justify-content-center g-mb-60">
                                <div
                                    class="d-flex justify-content-center u-counter-v3 green-brd green-bg g-width-150 g-height-150 rounded-circle g-pa-20">
                                    <div class="align-self-center">
                                        <div class="js-counter g-font-size-30 g-font-weight-300">5867</div>
                                        <h4 class="h5">Profiled Businesses</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-6 d-flex justify-content-center g-mb-60">
                                <div
                                    class="d-flex justify-content-center u-counter-v3 green-brd green-bg g-width-150 g-height-150 rounded-circle g-pa-20">
                                    <div class="align-self-center">
                                        <div class="js-counter g-font-size-30 g-font-weight-300">7169</div>
                                        <h4 class="h5">Profiled Farmers</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-6 d-flex justify-content-center g-mb-60">
                                <div
                                    class="d-flex justify-content-center u-counter-v3 green-brd green-bg g-width-150 g-height-150 rounded-circle g-pa-20">
                                    <div class="align-self-center">
                                        <div class="js-counter g-font-size-30 g-font-weight-300">3146</div>
                                        <h4 class="h5">Awards</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-6 d-flex justify-content-center g-mb-60">
                                <div
                                    class="d-flex justify-content-center u-counter-v3 green-brd green-bg g-width-150 g-height-150 rounded-circle g-pa-20">
                                    <div class="align-self-center">
                                        <div class="js-counter g-font-size-30 g-font-weight-300">9450</div>
                                        <h4 class="h5">Profiled Trades</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <section class="g-bg-gray-light-v5 g-pt-100 g-pb-50">
                        <div class="container">
                            <div class="row justify-content-center g-mb-60">
                                <div class="col-lg-7">

                                    <div class="text-center">
                                        <h2 class="h3 g-color-black text-uppercase mb-2">What people say about Us?</h2>
                                        <div class="d-inline-block g-width-35 g-height-2 g-bg-primary mb-2"></div>
                                        <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                            the.</p>
                                    </div>
                                </div>
                            </div>

                            <Testimonies/>

                        </div>
                    </section>


                </div>
                <div className="our-services" id="our-services">
                    <section
                        class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall"
                        data-options='{direction: "fromtop", animation_duration: 25, direction: "reverse"}'>
                        <div
                            className="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-pos-center g-bg-black-opacity-0_2--after"
                            style={{height: '140%', backgroundImage: 'url(/img/backgrounds/N3.jpg)'}}>
                        </div>
                        <div className="container g-color-white text-center g-py-150">
                            <h3 className="h1 text-uppercase mb-0">Products</h3>
                            <span className="d-block g-font-weight-300 g-font-size-25 mb-3">Agrishared is an agricultural and sharing app</span>
                        </div>
                    </section>

                    <section class="container g-pt-100 g-pb-70">

                        <div class="row">

                            <div class="col-lg-4 g-mb-30">
                                <div class="media">
                                    <div class="d-flex mr-4">
                                      <span class="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i class="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="h5 g-color-black mb-20">AGRI SPX</h3>
                                        <p class="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/agri-spx">
                                            <a class="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 g-mb-30">
                                <div class="media">
                                    <div class="d-flex mr-4">
                                      <span class="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i class="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="h5 g-color-black mb-20">AGRI B2B</h3>
                                        <p class="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/agri-spx">
                                            <a class="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 g-mb-30">
                                <div class="media">
                                    <div class="d-flex mr-4">
                                      <span class="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i class="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="h5 g-color-black mb-20">AGRI B2C</h3>
                                        <p class="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/agri-spx">
                                            <a class="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 g-mb-30">
                                <div class="media">
                                    <div class="d-flex mr-4">
                                      <span class="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i class="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="h5 g-color-black mb-20">RESOURCE SHARING</h3>
                                        <p class="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/agri-spx">
                                            <a class="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 g-mb-30">
                                <div class="media">
                                    <div class="d-flex mr-4">
                                      <span class="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i class="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="h5 g-color-black mb-20">LEARNING TOOL</h3>
                                        <p class="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/agri-spx">
                                            <a class="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 g-mb-30">
                                <div class="media">
                                    <div class="d-flex mr-4">
                                      <span class="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i class="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="h5 g-color-black mb-20">AGRIBUSINESS INVESTMENT</h3>
                                        <p class="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/agri-spx">
                                            <a class="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 g-mb-30">
                                <div class="media">
                                    <div class="d-flex mr-4">
                                      <span class="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i class="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="h5 g-color-black mb-20">FBO MONITORING</h3>
                                        <p class="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/agri-spx">
                                            <a class="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 g-mb-30">
                                <div class="media">
                                    <div class="d-flex mr-4">
                                      <span class="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i class="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="h5 g-color-black mb-20">KNOWLEDGE LIBRARY</h3>
                                        <p class="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/agri-spx">
                                            <a class="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 g-mb-30">
                                <div class="media">
                                    <div class="d-flex mr-4">
                                      <span class="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i class="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="h5 g-color-black mb-20">COLLABORATION</h3>
                                        <p class="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/agri-spx">
                                            <a class="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 g-mb-30">
                                <div class="media">
                                    <div class="d-flex mr-4">
                                      <span class="u-icon-v2 u-icon-size--sm g-color-primary rounded-circle">
                                        <i class="icon-education-087 u-line-icon-pro"></i>
                                     </span>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="h5 g-color-black mb-20">R & D</h3>
                                        <p class="g-color-gray-dark-v4">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry.
                                            Lorem Ipsum has been the industry's</p>
                                        <Link href="/landing/agri-spx">
                                            <a class="g-font-size-12 g-text-underline--none--hover text-uppercase">Learn
                                                More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </section>

                    <section class="g-bg-secondary">
                        <div class="container g-py-100">
                            <div class="row justify-content-center g-mb-60">
                                <div class="col-lg-7">

                                    <div class="text-center">
                                        <h2 class="h3 g-color-black text-uppercase mb-2">Benefits</h2>
                                        <div class="d-inline-block g-width-35 g-height-2 g-bg-primary mb-2"></div>
                                        <p class="lead mb-0">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                                    </div>

                                </div>
                            </div>


                            <div class="row">
                                <div class="col-lg-6 g-mb-30">

                                    <div class="u-shadow-v19 g-bg-white rounded g-pa-30">
                                        <div class="media g-mb-15">
                                            <div class="d-flex mr-4">
                  <span class="g-color-gray-dark-v4 g-font-size-26">

                    <i class="icon-education-087 u-line-icon-pro"></i>

                  </span>
                                            </div>
                                            <div class="media-body">
                                                <h3 class="h5 g-color-black mb-20">Benefit 1 </h3>
                                                <div class="g-width-30 g-brd-bottom g-brd-gray-dark-v5 g-my-15"></div>
                                                <p class="g-color-gray-dark-v4 g-mb-0">Lorem Ipsum is simply dummy text
                                                    of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since
                                                    the.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-lg-6 g-mb-30">

                                    <div class="u-shadow-v19 g-bg-white rounded g-pa-30">
                                        <div class="media g-mb-15">
                                            <div class="d-flex mr-4">
                  <span class="g-color-gray-dark-v4 g-font-size-26">

                    <i class="icon-education-035 u-line-icon-pro"></i>

                  </span>
                                            </div>
                                            <div class="media-body">
                                                <h3 class="h5 g-color-black mb-20">Benefit 2</h3>
                                                <div class="g-width-30 g-brd-bottom g-brd-gray-dark-v5 g-my-15"></div>
                                                <p class="g-color-gray-dark-v4 g-mb-0">Lorem Ipsum is simply dummy text
                                                    of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since
                                                    the.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-6 g-mb-30">

                                    <div class="u-shadow-v19 g-bg-white rounded g-pa-30">
                                        <div class="media g-mb-15">
                                            <div class="d-flex mr-4">
                  <span class="g-color-gray-dark-v4 g-font-size-26">

                    <i class="icon-education-141 u-line-icon-pro"></i>

                  </span>
                                            </div>
                                            <div class="media-body">
                                                <h3 class="h5 g-color-black mb-20">Benefit 3 </h3>
                                                <div class="g-width-30 g-brd-bottom g-brd-gray-dark-v5 g-my-15"></div>
                                                <p class="g-color-gray-dark-v4 g-mb-0">Lorem Ipsum is simply dummy text
                                                    of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since
                                                    the.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-lg-6 g-mb-30">

                                    <div class="u-shadow-v19 g-bg-white rounded g-pa-30">
                                        <div class="media g-mb-15">
                                            <div class="d-flex mr-4">
                  <span class="g-color-gray-dark-v4 g-font-size-26">

                    <i class="icon-finance-256 u-line-icon-pro"></i>

                  </span>
                                            </div>
                                            <div class="media-body">
                                                <h3 class="h5 g-color-black mb-20">Benefit 4 </h3>
                                                <div class="g-width-30 g-brd-bottom g-brd-gray-dark-v5 g-my-15"></div>
                                                <p class="g-color-gray-dark-v4 g-mb-0">Lorem Ipsum is simply dummy text
                                                    of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since
                                                    the.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div class="row">
                                <div class="col-lg-6 g-mb-30">

                                    <div class="u-shadow-v19 g-bg-white rounded g-pa-30">
                                        <div class="media g-mb-15">
                                            <div class="d-flex mr-4">
                  <span class="g-color-gray-dark-v4 g-font-size-26">

                    <i class="icon-science-020 u-line-icon-pro"></i>

                  </span>
                                            </div>
                                            <div class="media-body">
                                                <h3 class="h5 g-color-black mb-20">Benefit 5</h3>
                                                <div class="g-width-30 g-brd-bottom g-brd-gray-dark-v5 g-my-15"></div>
                                                <p class="g-color-gray-dark-v4 g-mb-0">Lorem Ipsum is simply dummy text
                                                    of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since
                                                    the.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-lg-6 g-mb-30">

                                    <div class="u-shadow-v19 g-bg-white rounded g-pa-30">
                                        <div class="media g-mb-15">
                                            <div class="d-flex mr-4">
                  <span class="g-color-gray-dark-v4 g-font-size-26">

                    <i class="icon-finance-009 u-line-icon-pro"></i>

                  </span>
                                            </div>
                                            <div class="media-body">
                                                <h3 class="h5 g-color-black mb-20">Benefit 6</h3>
                                                <div class="g-width-30 g-brd-bottom g-brd-gray-dark-v5 g-my-15"></div>
                                                <p class="g-color-gray-dark-v4 g-mb-0">Lorem Ipsum is simply dummy text
                                                    of the printing
                                                    and typesetting industry. Lorem Ipsum has been the industry's
                                                    standard dummy text ever since the.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                </div>


                <div className="how-it-works" id="how-it-works">

                    <section
                        class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall"
                        data-options='{direction: "fromtop", animation_duration: 25, direction: "reverse"}'>
                        <div
                            className="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-pos-center g-bg-black-opacity-0_2--after"
                            style={{height: '140%', backgroundImage: 'url(/img/backgrounds/wallpaper-99939.jpg)'}}>
                        </div>
                        <div className="container g-color-white text-center g-py-150">
                            <h3 className="h1 text-uppercase mb-0">How it works</h3>
                            <span className="d-block g-font-weight-300 g-font-size-25 mb-3">Agrishared is an agricultural and sharing app</span>
                        </div>
                    </section>


                    <div className="container">
                        <ul className="nav text-center nav-justified u-nav-v4-1 g-mt-40" role="tablist"
                            data-target="nav-4-1-default-hor-left-big-icons" data-tabs-mobile-type="slide-up-down"
                            data-btn-classes="btn btn-md btn-block rounded-0 u-btn-outline-lightgray">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab"
                                   href="#nav-4-1-default-hor-left-big-icons--1" role="tab">
                                    <i className="icon-christmas-037 d-block g-font-size-25 u-tab-line-icon-pro"></i>
                                    How 1
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#nav-4-1-default-hor-left-big-icons--2"
                                   role="tab">
                                    <i className="icon-communication-025 d-block g-font-size-25 u-tab-line-icon-pro"></i>
                                    How 2
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#nav-4-1-default-hor-left-big-icons--3"
                                   role="tab">
                                    <i className="icon-communication-017 d-block g-font-size-25 u-tab-line-icon-pro"></i>
                                    How 3
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#nav-4-1-default-hor-left-big-icons--4"
                                   role="tab">
                                    <i className="icon-communication-010 d-block g-font-size-25 u-tab-line-icon-pro"></i>
                                    How 4
                                </a>
                            </li>
                        </ul>

                        <div id="nav-4-1-default-hor-left-big-icons" className="tab-content g-pt-20">
                            <div className="tab-pane fade show active" id="nav-4-1-default-hor-left-big-icons--1"
                                 role="tabpanel">
                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>

                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>
                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>

                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>
                            </div>
                            <div className="tab-pane fade" id="nav-4-1-default-hor-left-big-icons--2" role="tabpanel">
                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>

                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>
                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>

                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>
                            </div>
                            <div className="tab-pane fade" id="nav-4-1-default-hor-left-big-icons--3" role="tabpanel">
                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>

                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>
                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>

                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>
                            </div>
                            <div className="tab-pane fade" id="nav-4-1-default-hor-left-big-icons--4" role="tabpanel">
                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>

                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>
                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>

                                <p>Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.Lorem Ipsum is simply dummy text
                                    of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.</p>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="team" id="team">

                    <section
                        class="d-none  dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall"
                        data-options='{direction: "fromtop", animation_duration: 25, direction: "reverse"}'>
                        <div
                            className="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-pos-center g-bg-black-opacity-0_2--after"
                            style={{height: '140%', backgroundImage: 'url(/img/backgrounds/wallpaper-99939.jpg)'}}>
                        </div>
                        <div className="container g-color-white text-center g-py-150">
                            <h3 className="h1 text-uppercase mb-0">Team</h3>
                            <span className="d-block g-font-weight-300 g-font-size-25 mb-3">Agrishared is an agricultural and sharing app</span>
                        </div>
                    </section>


                    <div className="row justify-content-center text-center g-mb-50 g-mt-40">
                        <div className="col-lg-9">
                            <h2 className="h3 g-color-black g-font-weight-600 text-uppercase mb-2">Meet our team</h2>
                            <div className="d-inline-block g-width-35 g-height-2 g-bg-primary mb-2"></div>
                        </div>
                    </div>


                    <div className="container">
                        <figure className="row">

                            <div className="col-md-8 col-lg-4 g-mb-30">
                                <img className="w-100" src="/img/4.jpg" alt="Image Description"/>
                            </div>


                            <div className="col-lg-8">
                                <div className="d-flex justify-content-between g-mb-10">
                                    <div className="g-mb-20">
                                        <h4 className="h5 g-mb-5">Abraham Nwoke</h4>
                                        <em className="d-block g-font-style-normal g-font-size-default text-uppercase green-color">CEO,
                                            Director</em>
                                    </div>


                                    <ul className="list-inline">
                                        <li className="list-inline-item g-mx-2">
                                            <a className="u-icon-v3 u-icon-size--xs g-color-gray-light-v1 g-bg-gray-light-v5 g-color-white--hover green-color-hover rounded-circle"
                                               href="#!">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item g-mx-2">
                                            <a className="u-icon-v3 u-icon-size--xs g-color-gray-light-v1 g-bg-gray-light-v5 g-color-white--hover green-color-hover rounded-circle"
                                               href="#!">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item g-mx-2">
                                            <a className="u-icon-v3 u-icon-size--xs g-color-gray-light-v1 g-bg-gray-light-v5 g-color-white--hover green-color-hover rounded-circle"
                                               href="#!">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item g-mx-2">
                                            <a className="u-icon-v3 u-icon-size--xs g-color-gray-light-v1 g-bg-gray-light-v5 g-color-white--hover green-color-hover rounded-circle"
                                               href="#!">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>

                                </div>

                                <div className="g-mb-50">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's</p>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's
                                    </p>
                                </div>


                            </div>
                        </figure>


                        <div className="row">
                            <div className="col-lg-3 col-sm-6 g-mb-30">
                                <div className="u-info-v6-1">

                                    <figure className="u-block-hover">

                                        <img className="w-100" src="/img/4.jpg" alt="Image Description"/>

                                        <figcaption
                                            className="u-block-hover__additional--fade green-bg-opacity-0_9 g-pa-30">
                                            <div
                                                className="u-block-hover__additional--fade u-block-hover__additional--fade-down g-flex-middle">

                                                <ul className="list-inline text-center g-flex-middle-item">
                                                    <li className="list-inline-item align-middle g-mx-3">
                                                        <a className="u-icon-v2 u-icon-size--sm g-font-size-default g-color-white g-color-black--hover g-brd-white g-bg-white--hover rounded-circle"
                                                           href="#!">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item align-middle g-mx-3">
                                                        <a className="u-icon-v2 u-icon-size--sm g-font-size-default g-color-white g-color-black--hover g-brd-white g-bg-white--hover rounded-circle"
                                                           href="#!">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item align-middle g-mx-3">
                                                        <a className="u-icon-v2 u-icon-size--sm g-font-size-default g-color-white g-color-black--hover g-brd-white g-bg-white--hover rounded-circle"
                                                           href="#!">
                                                            <i className="fa fa-google-plus"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figcaption>

                                    </figure>

                                    <div className="g-bg-white g-pa-25">
                                        <div className="g-mb-15">
                                            <h4 className="h5 g-color-black g-mb-5">Abraham Nwoke</h4>
                                            <em className="d-block u-info-v6-1__item g-font-style-normal g-font-size-11 text-uppercase green-color">Web
                                                Developer</em>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-3 col-sm-6 g-mb-30">

                                <div className="u-info-v6-1">

                                    <figure className="u-block-hover">

                                        <img className="w-100" src="/img/1.jpg"
                                             alt="Image Description"/>


                                        <figcaption
                                            className="u-block-hover__additional--fade green-bg-opacity-0_9 g-pa-30">
                                            <div
                                                className="u-block-hover__additional--fade u-block-hover__additional--fade-down g-flex-middle">
                                                <ul className="list-inline text-center g-flex-middle-item">
                                                    <li className="list-inline-item align-middle g-mx-3">
                                                        <a className="u-icon-v2 u-icon-size--sm g-font-size-default g-color-white g-color-black--hover g-brd-white g-bg-white--hover rounded-circle"
                                                           href="#!">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item align-middle g-mx-3">
                                                        <a className="u-icon-v2 u-icon-size--sm g-font-size-default g-color-white g-color-black--hover g-brd-white g-bg-white--hover rounded-circle"
                                                           href="#!">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item align-middle g-mx-3">
                                                        <a className="u-icon-v2 u-icon-size--sm g-font-size-default g-color-white g-color-black--hover g-brd-white g-bg-white--hover rounded-circle"
                                                           href="#!">
                                                            <i className="fa fa-google-plus"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figcaption>

                                    </figure>

                                    <div className="g-bg-white g-pa-25">
                                        <div className="g-mb-15">
                                            <h4 className="h5 g-color-black g-mb-5">Abraham Nwoke</h4>
                                            <em className="d-block u-info-v6-1__item g-font-style-normal g-font-size-11 text-uppercase green-color">Web
                                                Developer</em>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 g-mb-30">

                                <div className="u-info-v6-1">

                                    <figure className="u-block-hover">

                                        <img className="w-100" src="/img/5.jpg"
                                             alt="Image Description"/>

                                        <figcaption
                                            className="u-block-hover__additional--fade green-bg-opacity-0_9 g-pa-30">
                                            <div
                                                className="u-block-hover__additional--fade u-block-hover__additional--fade-down g-flex-middle">
                                                <ul className="list-inline text-center g-flex-middle-item">
                                                    <li className="list-inline-item align-middle g-mx-3">
                                                        <a className="u-icon-v2 u-icon-size--sm g-font-size-default g-color-white g-color-black--hover g-brd-white g-bg-white--hover rounded-circle"
                                                           href="#!">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item align-middle g-mx-3">
                                                        <a className="u-icon-v2 u-icon-size--sm g-font-size-default g-color-white g-color-black--hover g-brd-white g-bg-white--hover rounded-circle"
                                                           href="#!">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item align-middle g-mx-3">
                                                        <a className="u-icon-v2 u-icon-size--sm g-font-size-default g-color-white g-color-black--hover g-brd-white g-bg-white--hover rounded-circle"
                                                           href="#!">
                                                            <i className="fa fa-google-plus"></i>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                        </figcaption>
                                    </figure>

                                    <div className="g-bg-white g-pa-25">
                                        <div className="g-mb-15">
                                            <h4 className="h5 g-color-black g-mb-5">Abraham Nwoke</h4>
                                            <em className="d-block u-info-v6-1__item g-font-style-normal g-font-size-11 text-uppercase green-color">Web
                                                Developer</em>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 g-mb-30">
                                <div className="u-info-v6-1">
                                    <figure className="u-block-hover">
                                        <img className="w-100" src="/img/6.jpg"
                                             alt="Image Description"/>
                                        <figcaption
                                            className="u-block-hover__additional--fade green-bg-opacity-0_9 g-pa-30">
                                            <div
                                                className="u-block-hover__additional--fade u-block-hover__additional--fade-down g-flex-middle">

                                                <ul className="list-inline text-center g-flex-middle-item">
                                                    <li className="list-inline-item align-middle g-mx-3">
                                                        <a className="u-icon-v2 u-icon-size--sm g-font-size-default g-color-white g-color-black--hover g-brd-white g-bg-white--hover rounded-circle"
                                                           href="#!">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item align-middle g-mx-3">
                                                        <a className="u-icon-v2 u-icon-size--sm g-font-size-default g-color-white g-color-black--hover g-brd-white g-bg-white--hover rounded-circle"
                                                           href="#!">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item align-middle g-mx-3">
                                                        <a className="u-icon-v2 u-icon-size--sm g-font-size-default g-color-white g-color-black--hover g-brd-white g-bg-white--hover rounded-circle"
                                                           href="#!">
                                                            <i className="fa fa-google-plus"></i>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                        </figcaption>

                                    </figure>


                                    <div className="g-bg-white g-pa-25">
                                        <div className="g-mb-15">
                                            <h4 className="h5 g-color-black g-mb-5">Abraham Nwoke</h4>
                                            <em className="d-block u-info-v6-1__item g-font-style-normal g-font-size-11 text-uppercase green-color">Web
                                                Developer</em>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>

                </div>


                <div className="sponsors-and-partners" id="sponsors-and-partners">
                    <section
                        class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall"
                        data-options='{direction: "fromtop", animation_duration: 25, direction: "reverse"}'>
                        <div
                            className="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-pos-center g-bg-black-opacity-0_2--after"
                            style={{height: '140%', backgroundImage: 'url(/img/backgrounds/wall.bmp)'}}>
                        </div>
                        <div className="container g-color-white text-center g-py-150">
                            <h3 className="h1 text-uppercase mb-0">Sponsors & partners</h3>
                            <span className="d-block g-font-weight-300 g-font-size-25 mb-3">Agrishared is an agricultural and sharing app</span>
                        </div>
                    </section>


                    <div class="row justify-content-center g-mb-60">
                        <div class="col-lg-7">
                            <div class="shortcode-html">
                                <div class="g-overflow-hidden">
                                    <div class="row text-center mx-0 g-ml-minus-1 g-mb-minus-1">
                                        <div class="col-md-3 col-sm-6 col-6 px-0">
                                            <div class="g-brd-left g-brd-bottom g-brd-gray-light-v4 g-py-40">
                                                <img
                                                    class="img-fluid g-width-120 g-opacity-0_8 g-opacity-1--hover g-transition-0_2"
                                                    src="/img/img1.png" alt="Image Description"/>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-6 px-0">
                                            <div class="g-brd-left g-brd-bottom g-brd-gray-light-v4 g-py-40">
                                                <img
                                                    class="img-fluid g-width-120 g-opacity-0_8 g-opacity-1--hover g-transition-0_2"
                                                    src="/img/img2.png" alt="Image Description"/>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-6 px-0">
                                            <div class="g-brd-left g-brd-bottom g-brd-gray-light-v4 g-py-40">
                                                <img
                                                    class="img-fluid g-width-120 g-opacity-0_8 g-opacity-1--hover g-transition-0_2"
                                                    src="/img/img3.png" alt="Image Description"/>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-6 px-0">
                                            <div class="g-brd-left g-brd-bottom g-brd-gray-light-v4 g-py-40">
                                                <img
                                                    class="img-fluid g-width-120 g-opacity-0_8 g-opacity-1--hover g-transition-0_2"
                                                    src="/img/img4.png" alt="Image Description"/>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-6 px-0">
                                            <div class="g-brd-left g-brd-bottom g-brd-gray-light-v4 g-py-40">
                                                <img
                                                    class="img-fluid g-width-120 g-opacity-0_8 g-opacity-1--hover g-transition-0_2"
                                                    src="/img/img5.png" alt="Image Description"/>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-6 px-0">
                                            <div class="g-brd-left g-brd-bottom g-brd-gray-light-v4 g-py-40">
                                                <img
                                                    class="img-fluid g-width-120 g-opacity-0_8 g-opacity-1--hover g-transition-0_2"
                                                    src="/img/img6.png" alt="Image Description"/>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-6 px-0">
                                            <div class="g-brd-left g-brd-bottom g-brd-gray-light-v4 g-py-40">
                                                <img
                                                    class="img-fluid g-width-120 g-opacity-0_8 g-opacity-1--hover g-transition-0_2"
                                                    src="/img/img7.png" alt="Image Description"/>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-6 px-0">
                                            <div class="g-brd-left g-brd-bottom g-brd-gray-light-v4 g-py-40">
                                                <img
                                                    class="img-fluid g-width-120 g-opacity-0_8 g-opacity-1--hover g-transition-0_2"
                                                    src="/img/img8.png" alt="Image Description"/>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-6 px-0">
                                            <div class="g-brd-left g-brd-bottom g-brd-gray-light-v4 g-py-40">
                                                <img
                                                    class="img-fluid g-width-120 g-opacity-0_8 g-opacity-1--hover g-transition-0_2"
                                                    src="/img/img3.png" alt="Image Description"/>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-6 px-0">
                                            <div class="g-brd-left g-brd-bottom g-brd-gray-light-v4 g-py-40">
                                                <img
                                                    class="img-fluid g-width-120 g-opacity-0_8 g-opacity-1--hover g-transition-0_2"
                                                    src="/img/img4.png" alt="Image Description"/>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-6 px-0">
                                            <div class="g-brd-left g-brd-bottom g-brd-gray-light-v4 g-py-40">
                                                <img
                                                    class="img-fluid g-width-120 g-opacity-0_8 g-opacity-1--hover g-transition-0_2"
                                                    src="/img/img5.png" alt="Image Description"/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="our-blog" id="our-blog">


                    <div className="row justify-content-center text-center g-mb-50 g-mt-40">
                        <div className="col-lg-9">
                            <h2 className="h3 g-color-black g-font-weight-600 text-uppercase mb-2">Our Blog</h2>
                            <div className="d-inline-block g-width-35 g-height-2 g-bg-primary mb-2"></div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="shortcode-html">
                            <div class="row g-mb-10">
                                <div class="col-md-5">
                                    <img class="img-fluid w-100 g-mb-20 g-mb-0--md" src="/img/5e09feeac38b0.png"
                                         alt="Image Description"/>
                                </div>

                                <div class="col-md-7 align-self-center">

                                    <h3 class="h3 g-mb-15">

                                        <a class="u-link-v5 g-color-gray-dark-v2 g-color-primary--hover" href="#!">10
                                            Best Tips for UX/UI Design</a>

                                    </h3>

                                    <div class="media g-font-size-12 g-color-gray-dark-v4 g-mb-20">
                                        <img class="d-flex rounded-circle g-width-30 g-height-30 g-mr-10"
                                             src="/img/4.jpg" alt="Image Description"/>
                                        <div class="media-body align-self-center">
                                            <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">John
                                                Doe</a>
                                            <span class="g-mx-5">/</span>
                                            <span>July 20, 2016</span>
                                            <span class="g-mx-5">/</span>
                                            <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                                                <i class="icon-bubbles align-middle g-mr-2"></i>
                                                18
                                            </a>
                                        </div>
                                    </div>

                                    <p>Pellentesque turpis lacus, tempus et fermentum vitae, dignissim ornare purus.
                                        Nulla facilisi. Suspendisse potenti. Aenean vitae lacus lobortis lacus finibus
                                        volutpat eu nec sem. Sed ultrices velit vitae tortor posuere ultrices. Aliquam
                                        laoreet lorem et vulputate porta.</p>

                                    <p>Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla
                                        lectus tellusimp imperdiet molestie est volutpat at. Sed viverra cursus
                                        nibh.</p>


                                    <ul class="list-inline mb-2 mt-2">
                                        <li class="list-inline-item g-mr-15">
                                            <a class="u-icon-v3 u-icon-size--sm g-bg-facebook g-bg-gray-light-v5 g-bg-gray-light-v3--hover g-color-main rounded"
                                               href="#!">
                                                <span
                                                    class="u-badge-v1--sm g-bg-primary g-color-white g-brd-around g-brd-white g-brd-2 rounded-circle">12</span>
                                                <i class="icon-speech"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item g-mr-15">
                                            <a class="u-icon-v3 u-icon-size--sm g-bg-facebook g-bg-gray-light-v5 g-bg-gray-light-v3--hover g-color-main rounded"
                                               href="#!">
                                                <span
                                                    class="u-badge-v1--sm g-bg-primary g-color-white g-brd-around g-brd-white g-brd-2 rounded-circle">32</span>
                                                <i class="icon-share"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item g-mr-15">
                                            <a class="u-icon-v3 u-icon-size--sm g-bg-facebook g-bg-gray-light-v5 g-bg-gray-light-v3--hover g-color-main rounded"
                                               href="#!">
                                                <span
                                                    class="u-badge-v1--sm g-bg-primary g-color-white g-brd-around g-brd-white g-brd-2 rounded-circle">62</span>
                                                <i class="icon-heart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <a class="font-italic u-link-v1" href="#!">Read More</a>
                                </div>
                            </div>
                        </div>

                        <BlogPosts/>

                    </div>
                    <div className="text-center mb-5">
                        <a href="#!"
                           className="btn btn-md u-btn-inset u-btn-inset--rounded u-btn-teal g-font-weight-600 g-letter-spacing-0_5 text-uppercase g-brd-2 g-rounded-50 g-mr-10 g-mb-15">

                            View More
                        </a>
                    </div>
                </div>


                <div className="career" id="career">
                    <section
                        className="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall"
                        data-options='{direction: "fromtop", animation_duration: 25, direction: "reverse"}'>
                        <div
                            className="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-pos-center g-bg-black-opacity-0_2--after"
                            style={{height: '140%', backgroundImage: 'url(/img/backgrounds/tn.jpg)'}}>
                        </div>
                        <div className="container g-color-white text-center g-py-150">
                            <h3 className="h1 text-uppercase mb-0">Career</h3>
                            <span className="d-block g-font-weight-300 g-font-size-25 mb-3">Discover Your Dream Job On Agrishared</span>

                            <div className="container u-bg-overlay__inner text-center g-pt-40">
                                <form>
                                    <div className="row justify-content-center g-mb-20 g-mb-0--lg">
                                        <div className="col-lg-4">
                                            <div id="form-icon-magnifier"
                                                 className="input-group u-shadow-v21 g-bg-white rounded g-mb-15">
                                                <div className="input-group-append">
                                                    <span
                                                        className="input-group-text rounded-0 border-0 g-font-size-16 g-color-gray-light-v1"><i
                                                        className="icon-magnifier g-pos-rel g-top-1 g-px-1"></i></span>
                                                </div>
                                                <input
                                                    className="form-control form-control-md g-font-size-16 border-0 g-pl-2 g-py-10"
                                                    type="text" placeholder="Job Title or Skills"
                                                    aria-label="Job Title or Skills"
                                                    aria-describedby="form-icon-magnifier"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="input-group u-shadow-v21 g-bg-white rounded g-mb-10">
                                                <div id="form-icon-location-pin" className="input-group-append">
                                                    <span
                                                        className="input-group-text rounded-0 border-0 g-font-size-16 g-color-gray-light-v1"><i
                                                        className="icon-location-pin g-pos-rel g-top-1 g-px-1"></i></span>
                                                </div>
                                                <input
                                                    className="form-control form-control-md g-font-size-16 border-0 g-pl-2 g-py-10"
                                                    type="text" placeholder="City, Zip or Country"
                                                    aria-label="City, Zip or Country"
                                                    aria-describedby="form-icon-location-pin"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-2">
                                            <button
                                                className="btn btn-md btn-block green-btn u-shadow-v21 text-uppercase g-py-10"
                                                type="submit">Search
                                            </button>
                                        </div>
                                    </div>

                                    <small className="form-text g-font-size-default">Search any type of work and much
                                        more..</small>
                                </form>
                            </div>

                        </div>
                    </section>

                    <section className="g-py-100">
                        <div className="container">
                            <header className="text-center g-width-60x--md mx-auto g-mb-50">
                                <h2 className="h1 g-color-gray-dark-v1 g-font-weight-300">Recent Jobs</h2>
                                <p className="lead">Ut fringilla lectus tellusimp imperdiet molestie. Nullam elementum
                                    tincidunt massa, a pulvinar leo ultricies ut.</p>
                            </header>

                            <RecentJobs/>

                            <div className="text-center">
                                <a className="btn btn-xl green-btn-outline text-uppercase g-font-weight-600 g-font-size-12"
                                   href="#!">View More Jobs</a>
                            </div>
                        </div>
                    </section>

                </div>


                <div className="location" id="location">
                    <section
                        className="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall"
                        data-options='{direction: "fromtop", animation_duration: 25, direction: "reverse"}'>
                        <div
                            className="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-pos-center g-bg-black-opacity-0_2--after"
                            style={{height: '140%', backgroundImage: 'url(/img/backgrounds/woods.jpg)'}}>
                        </div>
                        <div className="container g-color-white text-center g-py-150">
                            <h3 className="h1 text-uppercase mb-0">Location</h3>
                            <span className="d-block g-font-weight-300 g-font-size-25 mb-3">Agrishared is an agricultural and sharing app</span>
                        </div>

                    </section>


                </div>


                <div className="contact" id="contact">

                    <div className="row justify-content-center text-center g-mb-50 g-mt-40">
                        <div className="col-lg-9">
                            <div className="text-uppercase  g-brd-primary g-mb-20">
                                <h4 className="h6 g-font-weight-800 g-font-size-12 g-letter-spacing-2 g-color-primary g-mb-20">Contact</h4>
                                <h2 className="h1 u-heading-v2__title g-line-height-1_3 g-font-weight-600 g-font-size-40 g-color-black -light-v2 g-mb-minus-10">Our contacts</h2>
                                <span className="d-block g-font-weight-300 g-font-size-20 mt-3">Got a question? We'd love to hear from you!</span>
                            </div>
                            <div className="d-inline-block g-width-35 g-height-2 g-bg-primary mb-2"></div>
                        </div>
                    </div>




                    <section className="clearfix g-brd-bottom g-brd-gray-light-v3">
                        <div className="row no-gutters g-py-30">
                            <div className="col-md-6 col-lg-4 g-brd-right--md g-brd-gray-light-v4">

                                <div className="text-center g-py-20">
            <span className="u-icon-v1 u-icon-size--xl g-color-black g-mb-10">

                <i className="icon-real-estate-027 u-line-icon-pro"></i>

              </span>
                                    <h4 className="h5 g-font-weight-600 g-mb-5">Address</h4>
                                    <span className="d-block">Pantang, Blolar road, Madina.</span>
                                </div>

                            </div>

                            <div className="col-md-6 col-lg-4 g-brd-right--md g-brd-gray-light-v4">

                                <div className="text-center g-py-20">
            <span className="u-icon-v1 u-icon-size--xl g-color-black g-mb-10">

                <i className="icon-phone u-line-icon-pro"></i>

              </span>
                                    <h4 className="h5 g-font-weight-600 g-mb-5">Phone Number</h4>
                                    <span className="d-block">+233244491485</span>
                                </div>

                            </div>

                            <div className="col-md-6 col-lg-4 g-brd-right--md g-brd-gray-light-v4">
                                <div className="text-center g-py-20">
            <span className="u-icon-v1 u-icon-size--xl g-color-black g-mb-10">

                <i className="icon-envelope-letter u-line-icon-pro"></i>

              </span>
                                    <h4 className="h5 g-font-weight-600 g-mb-5">Email</h4>
                                    <span className="d-block">abrahamnwoke@gmail.com</span>
                                </div>
                            </div>

                        </div>
                    </section>

                    <ul className="row no-gutters list-inline g-mb-0 g-brd-bottom g-brd-gray-light-v3">
                        <li className="col list-inline-item g-mr-0">
                            <a className="d-block g-theme-bg-blue-dark-v3 g-color-gray-dark-v5 g-bg-primary--hover g-color-white--hover g-font-size-default text-center g-pa-15"
                               href="#!">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li className="col list-inline-item g-mr-0">
                            <a className="d-block g-theme-bg-blue-dark-v2 g-color-gray-dark-v5 g-bg-primary--hover g-color-white--hover g-font-size-default text-center g-pa-15"
                               href="#!">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="col list-inline-item g-mr-0">
                            <a className="d-block g-theme-bg-blue-dark-v3 g-color-gray-dark-v5 g-bg-primary--hover g-color-white--hover g-font-size-default text-center g-pa-15"
                               href="#!">
                                <i className="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li className="col list-inline-item g-mr-0">
                            <a className="d-block g-theme-bg-blue-dark-v2 g-color-gray-dark-v5 g-bg-primary--hover g-color-white--hover g-font-size-default text-center g-pa-15"
                               href="#!">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </li>
                        <li className="col list-inline-item">
                            <a className="d-block g-theme-bg-blue-dark-v3 g-color-gray-dark-v5 g-bg-primary--hover g-color-white--hover g-font-size-default text-center g-pa-15"
                               href="#!">
                                <i className="fa fa-telegram"></i>
                            </a>
                        </li>
                    </ul>


                    <section className="container g-py-100">
                        <div className="row justify-content-center g-mb-70">
                            <div className="col-lg-7">
                                <div className="text-center">
                                    <h2 className="h2 g-color-black g-font-weight-700 text-uppercase mb-4">Send
                                        Agrishared a messaged</h2>
                                    <div className="d-inline-block g-width-70 g-height-2 g-bg-black mb-4"></div>
                                    <p className="g-font-size-18 mb-0">Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry.
                                        Lorem Ipsum has been the industry's.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 form-group g-mb-20">
                                            <input
                                                className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v3 g-brd-primary--hover rounded-3 g-py-13 g-px-15"
                                                type="text" placeholder="Name"/>
                                        </div>

                                        <div className="col-md-6 form-group g-mb-20">
                                            <input
                                                className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v3 g-brd-primary--hover rounded-3 g-py-13 g-px-15"
                                                type="email" placeholder="Email"/>
                                        </div>

                                        <div className="col-md-6 form-group g-mb-20">
                                            <input
                                                className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v3 g-brd-primary--hover rounded-3 g-py-13 g-px-15"
                                                type="text" placeholder="Subject"/>
                                        </div>

                                        <div className="col-md-6 form-group g-mb-20">
                                            <input
                                                className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v3 g-brd-primary--hover rounded-3 g-py-13 g-px-15"
                                                type="tel" placeholder="Phone"/>
                                        </div>

                                        <div className="col-md-12 form-group g-mb-40">
                                            <textarea
                                                className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v3 g-brd-primary--hover g-resize-none rounded-3 g-py-13 g-px-15"
                                                rows="7" placeholder="Message"></textarea>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            className="btn green-bg g-font-weight-600 g-font-size-13 text-uppercase g-rounded-25 g-py-15 g-px-30"
                                            type="submit" role="button">Send Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>


                </div>


                <section className="container">
                    <div className="g-bg-secondary g-py-70 g-px-20 g-mb-20">
                        <div className="row justify-content-center">
                            <div className="col-sm-10 col-md-7 col-lg-5">
                                <div className="text-center g-mb-50">
                                    <h2 className="g-color-black g-font-weight-600 mb-3">Newsletter</h2>
                                    <p>Subscribe to our newsletter for the latest news, promotions and deals.</p>
                                </div>

                                <div className="input-group u-shadow-v19 g-rounded-50">
                                    <input
                                        className="form-control g-color-gray-dark-v4 g-placeholder-gray-dark-v3 border-0 g-rounded-left-50 g-px-20"
                                        type="email" placeholder="Enter email" aria-label="Enter email"/>
                                    <div className="input-group-append g-bg-white border-0 g-rounded-right-50">
                                        <button className="btn yellow-bg g-width-40 g-height-40 rounded-circle"
                                                type="submit">
                                            <i className="fa fa-send"></i>
                                        </button>
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


export default Company
