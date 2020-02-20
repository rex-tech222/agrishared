import React, {useEffect, useState} from 'react'
import B2CLayout from "../../components/layouts/B2CLayout";
import {NextSeo} from 'next-seo';
import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';

import ProductWidget from '../../components/widgets/productWidget'
import BuyerChoiceProductSlider from '../../components/widgets/product/BuyerChoiceProductSlider'


function Home(props) {

    const [state, setState] = useState({
        show: false
    });

    useEffect(() => {

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


    return (
        <B2CLayout>
            <NextSeo
                title="B2C Categories - Agrishared"
                description="This example uses more of the available config options."
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Open Graph Title',
                    description: 'Open Graph Description',
                    images: [
                        {
                            url: 'https://www.example.ie/og-image-01.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                        },
                        {
                            url: 'https://www.example.ie/og-image-02.jpg',
                            width: 900,
                            height: 800,
                            alt: 'Og Image Alt Second',
                        },
                        {url: 'https://www.example.ie/og-image-03.jpg'},
                        {url: 'https://www.example.ie/og-image-04.jpg'},
                    ],
                    site_name: 'SiteName',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

            <div className="categories">


                <section className="g-mb-20">
                    <div className="g-bg-cover__inner">
                        <ul className="u-list-inline g-mb-20">
                            <li className="list-inline-item g-mr-7">
                                <a className="u-link-v5 g-color-main" href="#!">Home</a>
                                <i className="fa fa-angle-right g-ml-7"></i>
                            </li>
                            <li className="list-inline-item g-mr-7">
                                <a className="u-link-v5 g-color-main" href="#!">Category</a>
                                <i className="fa fa-angle-right g-ml-7"></i>
                            </li>
                            <li className="list-inline-item g-color-primary">
                                <span>Farm Tools & Accessories</span>
                            </li>
                        </ul>
                        <header className="">
                            <h2 className="h1 g-font-size-23 g-font-weight-300 text-uppercase">
                                Farm Tools & Accessories
                            </h2>
                        </header>
                    </div>
                </section>



                <div className="row">
                    <div className="col-lg-3 sidebar">

                        <div id="accordion-1" className="u-accordion " role="tablist" aria-multiselectable="true">
                            <div className="card g-brd-none  g-mb-15">
                                <div id="accordion-11-heading-01" className="u-accordion__header g-pa-0" role="tab">
                                    <h5 className="mb-0">
                                        <a className="d-flex g-color-main g-text-underline--none--hover g-brd-around g-brd-gray-light-v4  g-pa-10-15"
                                           href="#accordion-01" aria-expanded="true"
                                           aria-controls="accordion-11-body-01" data-toggle="collapse"
                                           data-parent="#accordion-11">
                                              <span className="u-accordion__control-icon g-mr-10">
                                                <i className="fa fa-angle-down"></i>
                                                <i className="fa fa-angle-up"></i>
                                             </span>
                                            Related Categories
                                        </a>
                                    </h5>
                                </div>
                                <div id="accordion-01" className="collapse show" role="tabpanel"
                                     aria-labelledby="accordion-11-heading-01" data-parent="#accordion-1">
                                    <div className="u-accordion__body g-color-gray-dark-v5">
                                        Farm Tools & Accessories  ✔
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="accordion-1" className="u-accordion " role="tablist" aria-multiselectable="true">
                            <div className="card g-brd-none  g-mb-15">
                                <div id="accordion-11-heading-01" className="u-accordion__header g-pa-0" role="tab">
                                    <h5 className="mb-0">
                                        <a className="d-flex g-color-main g-text-underline--none--hover g-brd-around g-brd-gray-light-v4  g-pa-10-15"
                                           href="#accordion-01" aria-expanded="true"
                                           aria-controls="accordion-11-body-01" data-toggle="collapse"
                                           data-parent="#accordion-11">
                                              <span className="u-accordion__control-icon g-mr-10">
                                                <i className="fa fa-angle-down"></i>
                                                <i className="fa fa-angle-up"></i>
                                             </span>
                                            Refine by
                                        </a>
                                    </h5>
                                </div>
                                <div id="accordion-01" className="collapse show" role="tabpanel"
                                     aria-labelledby="accordion-11-heading-01" data-parent="#accordion-1">
                                    <div className="u-accordion__body g-color-gray-dark-v5">
                                        Content ✔
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="accordion-1" className="u-accordion " role="tablist" aria-multiselectable="true">
                            <div className="card g-brd-none  g-mb-15">
                                <div id="accordion-11-heading-01" className="u-accordion__header g-pa-0" role="tab">
                                    <h5 className="mb-0">
                                        <a className="d-flex g-color-main g-text-underline--none--hover g-brd-around g-brd-gray-light-v4  g-pa-10-15"
                                           href="#accordion-01" aria-expanded="true"
                                           aria-controls="accordion-11-body-01" data-toggle="collapse"
                                           data-parent="#accordion-11">
                                              <span className="u-accordion__control-icon g-mr-10">
                                                <i className="fa fa-angle-down"></i>
                                                <i className="fa fa-angle-up"></i>
                                             </span>
                                            Price
                                        </a>
                                    </h5>
                                </div>
                                <div id="accordion-01" className="collapse show" role="tabpanel"
                                     aria-labelledby="accordion-11-heading-01" data-parent="#accordion-1">
                                    <div className="u-accordion__body g-color-gray-dark-v5">
                                        Content ✔
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="accordion-1" className="u-accordion " role="tablist" aria-multiselectable="true">
                            <div className="card g-brd-none  g-mb-15">
                                <div id="accordion-11-heading-01" className="u-accordion__header g-pa-0" role="tab">
                                    <h5 className="mb-0">
                                        <a className="d-flex g-color-main g-text-underline--none--hover g-brd-around g-brd-gray-light-v4  g-pa-10-15"
                                           href="#accordion-01" aria-expanded="true"
                                           aria-controls="accordion-11-body-01" data-toggle="collapse"
                                           data-parent="#accordion-11">
                                              <span className="u-accordion__control-icon g-mr-10">
                                                <i className="fa fa-angle-down"></i>
                                                <i className="fa fa-angle-up"></i>
                                             </span>
                                            Equipment Size
                                        </a>
                                    </h5>
                                </div>
                                <div id="accordion-01" className="collapse show" role="tabpanel"
                                     aria-labelledby="accordion-11-heading-01" data-parent="#accordion-1">
                                    <div className="u-accordion__body g-color-gray-dark-v5">
                                        Content ✔
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="accordion-1" className="u-accordion " role="tablist" aria-multiselectable="true">
                            <div className="card g-brd-none  g-mb-15">
                                <div id="accordion-11-heading-01" className="u-accordion__header g-pa-0" role="tab">
                                    <h5 className="mb-0">
                                        <a className="d-flex g-color-main g-text-underline--none--hover g-brd-around g-brd-gray-light-v4  g-pa-10-15"
                                           href="#accordion-01" aria-expanded="true"
                                           aria-controls="accordion-11-body-01" data-toggle="collapse"
                                           data-parent="#accordion-11">
                                              <span className="u-accordion__control-icon g-mr-10">
                                                <i className="fa fa-angle-down"></i>
                                                <i className="fa fa-angle-up"></i>
                                             </span>
                                            Tool Color
                                        </a>
                                    </h5>
                                </div>
                                <div id="accordion-01" className="collapse show" role="tabpanel"
                                     aria-labelledby="accordion-11-heading-01" data-parent="#accordion-1">
                                    <div className="u-accordion__body g-color-gray-dark-v5">
                                        Content ✔
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="accordion-1" className="u-accordion " role="tablist" aria-multiselectable="true">
                            <div className="card g-brd-none  g-mb-15">
                                <div id="accordion-11-heading-01" className="u-accordion__header g-pa-0" role="tab">
                                    <h5 className="mb-0">
                                        <a className="d-flex g-color-main g-text-underline--none--hover g-brd-around g-brd-gray-light-v4  g-pa-10-15"
                                           href="#accordion-01" aria-expanded="true"
                                           aria-controls="accordion-11-body-01" data-toggle="collapse"
                                           data-parent="#accordion-11">
                                              <span className="u-accordion__control-icon g-mr-10">
                                                <i className="fa fa-angle-down"></i>
                                                <i className="fa fa-angle-up"></i>
                                             </span>
                                            Tool Capacity
                                        </a>
                                    </h5>
                                </div>
                                <div id="accordion-01" className="collapse show" role="tabpanel"
                                     aria-labelledby="accordion-11-heading-01" data-parent="#accordion-1">
                                    <div className="u-accordion__body g-color-gray-dark-v5">
                                        Content ✔
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="accordion-1" className="u-accordion " role="tablist" aria-multiselectable="true">
                            <div className="card g-brd-none  g-mb-15">
                                <div id="accordion-11-heading-01" className="u-accordion__header g-pa-0" role="tab">
                                    <h5 className="mb-0">
                                        <a className="d-flex g-color-main g-text-underline--none--hover g-brd-around g-brd-gray-light-v4  g-pa-10-15"
                                           href="#accordion-01" aria-expanded="true"
                                           aria-controls="accordion-11-body-01" data-toggle="collapse"
                                           data-parent="#accordion-11">
                                              <span className="u-accordion__control-icon g-mr-10">
                                                <i className="fa fa-angle-down"></i>
                                                <i className="fa fa-angle-up"></i>
                                             </span>
                                            Tool Efficiency
                                        </a>
                                    </h5>
                                </div>
                                <div id="accordion-01" className="collapse show" role="tabpanel"
                                     aria-labelledby="accordion-11-heading-01" data-parent="#accordion-1">
                                    <div className="u-accordion__body g-color-gray-dark-v5">
                                        Content ✔
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="accordion-1" className="u-accordion " role="tablist" aria-multiselectable="true">
                            <div className="card g-brd-none  g-mb-15">
                                <div id="accordion-11-heading-01" className="u-accordion__header g-pa-0" role="tab">
                                    <h5 className="mb-0">
                                        <a className="d-flex g-color-main g-text-underline--none--hover g-brd-around g-brd-gray-light-v4  g-pa-10-15"
                                           href="#accordion-01" aria-expanded="true"
                                           aria-controls="accordion-11-body-01" data-toggle="collapse"
                                           data-parent="#accordion-11">
                                              <span className="u-accordion__control-icon g-mr-10">
                                                <i className="fa fa-angle-down"></i>
                                                <i className="fa fa-angle-up"></i>
                                             </span>
                                            Tool Manufacturer
                                        </a>
                                    </h5>
                                </div>
                                <div id="accordion-01" className="collapse show" role="tabpanel"
                                     aria-labelledby="accordion-11-heading-01" data-parent="#accordion-1">
                                    <div className="u-accordion__body g-color-gray-dark-v5">
                                        Content ✔
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="accordion-1" className="u-accordion " role="tablist" aria-multiselectable="true">
                            <div className="card g-brd-none  g-mb-15">
                                <div id="accordion-11-heading-01" className="u-accordion__header g-pa-0" role="tab">
                                    <h5 className="mb-0">
                                        <a className="d-flex g-color-main g-text-underline--none--hover g-brd-around g-brd-gray-light-v4  g-pa-10-15"
                                           href="#accordion-01" aria-expanded="true"
                                           aria-controls="accordion-11-body-01" data-toggle="collapse"
                                           data-parent="#accordion-11">
                                              <span className="u-accordion__control-icon g-mr-10">
                                                <i className="fa fa-angle-down"></i>
                                                <i className="fa fa-angle-up"></i>
                                             </span>
                                            Product tag
                                        </a>
                                    </h5>
                                </div>
                                <div id="accordion-01" className="collapse show" role="tabpanel"
                                     aria-labelledby="accordion-11-heading-01" data-parent="#accordion-1">
                                    <div className="u-accordion__body g-color-gray-dark-v5">
                                        <ul class="u-list-inline">
                                            <li class="list-inline-item g-mb-10">
                                                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#!">
                                                    Vegetable</a>
                                            </li>
                                            <li class="list-inline-item g-mb-10">
                                                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#!">
                                                    pepper</a>
                                            </li>
                                            <li class="list-inline-item g-mb-10">
                                                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#!">
                                                    Fish</a>
                                            </li>
                                            <li class="list-inline-item g-mb-10">
                                                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#!">
                                                    Yam</a>
                                            </li>
                                            <li class="list-inline-item g-mb-10">
                                                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#!">
                                                    Orange</a>
                                            </li>
                                            <li class="list-inline-item g-mb-10">
                                                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#!">
                                                    Mango</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="col-lg-9">

                        <div className="d-flex justify-content-between sort-section">
                            <ul className="layout-btn">
                               <li><i className="ti-view-grid"></i></li>
                               <li><i className="ti-view-list-alt"></i></li>
                            </ul>
                            <div className="">
                                <div className="btn-group g-mr-10 g-mb-15 sort-btn">
                                    <button className="btn  btn-sm dropdown-toggle" type="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sort by: price low to high
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#!">Separated link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30">
                                <ProductWidget/>
                            </div>
                        </div>

                        <div className="text-center">
                            <button className="btn product-loading">
                                <i className=" ti-reload"></i>
                                Load More
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>

        </B2CLayout>
    )

}


export default Home
