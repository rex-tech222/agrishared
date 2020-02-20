import React, {useEffect, useRef, useState} from 'react'
import B2CLayout from "../../components/layouts/B2CLayout";
import {NextSeo} from 'next-seo';
import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';



import ProductWidget from '../../components/widgets/productWidget'
import BuyerChoiceProductSlider from '../../components/widgets/product/BuyerChoiceProductSlider'
import HomeSlider from '../../components/widgets/product/HomeSlider'


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
                title="B2C - Agrishared"
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


            <div className="">
                <div className="row">
                    <div className="col-md-3">
                        <div className="block-content">
                            <ul className="ui-categori">
                                <li>
                                    <Link href="/b2c/categories">
                                        <a>Irrigation Tools</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/b2c/categories">
                                    <a>Ploughs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/b2c/categories">
                                    <a >Weedicides & Pesticides</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/b2c/categories">
                                    <a >Fertilizers</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/b2c/categories">
                                    <a >Seeds</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/b2c/categories">
                                    <a >Flowers</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/b2c/categories">
                                    <a >Harvesters</a>
                                    </Link>
                                </li>
                                <li className="cat-link-orther">
                                    <Link href="/b2c/categories">
                                    <a >Fishing Tools</a>
                                    </Link>
                                </li>
                                <li className="cat-link-orther">
                                    <Link href="/b2c/categories">
                                    <a >Poultry feeds</a>
                                    </Link>
                                </li>
                            </ul>

                            <div className="view-all-categori">
                                <a className="open-cate btn-view-all">All Categories</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <HomeSlider />
                    </div>
                </div>
            </div>


            <div className="feature">
                <div className="row">
                    <div className="col-lg-3">
                        <img src="/img/icons/icons8_Free_Shipping_96px.png" alt=""/>
                        <h1>Free Delivery</h1>
                        <span className="">Free delivery for all orders</span>
                    </div>
                    <div className="col-lg-3">
                        <img src="/img/icons/icons8_Receive_Cash_70px.png" alt=""/>
                        <h1>100% Money Guarantee</h1>
                        <span className="">30 days money back</span>
                    </div>
                    <div className="col-lg-3">
                        <img src="/img/icons/icons8_Online_Support_96px.png" alt=""/>
                        <h1>Help Center</h1>
                        <span className="">24/7 Support System</span>
                    </div>
                    <div className="col-lg-3">
                        <img src="img/icons/icons8_Money_96px.png" alt=""/>
                        <h1>Payment Method</h1>
                        <span className="">Secure payment</span>
                    </div>
                </div>
            </div>


            <h3 className="section-title">Buyers Choice</h3>
            <ul class="nav u-nav-v1-1 u-nav-primary u-nav-rounded-5 g-brd-bottom--md g-brd-primary g-mb-20"
                role="tablist" data-target="nav-1-1-default-hor-left-rounded-underline"
                data-tabs-mobile-type="slide-up-down"
                data-btn-classes="btn btn-md btn-block u-btn-outline-primary g-mb-20">
                <li class="nav-item">
                    <a class="nav-link active g-rounded-bottom-0" data-toggle="tab"
                       href="#nav-1-1-default-hor-left-rounded-underline--1" role="tab">Trending products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link g-rounded-bottom-0" data-toggle="tab"
                       href="#nav-1-1-default-hor-left-rounded-underline--2" role="tab">New Arrivals</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link g-rounded-bottom-0" data-toggle="tab"
                       href="#nav-1-1-default-hor-left-rounded-underline--3" role="tab">Best Sale</a>
                </li>
            </ul>

            <div id="nav-1-1-default-hor-left-rounded-underline" class="tab-content">
                <div class="tab-pane fade show active" id="nav-1-1-default-hor-left-rounded-underline--1"
                     role="tabpanel">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="product-display-lg">
                                <img src="/img/Munro_IrrigationPump_0219.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="product-display-lg2">
                                        <img src="/img/tractor-2682650_1280.png" alt=""/>
                                    </div>

                                </div>
                            </div>
                            <BuyerChoiceProductSlider />
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="nav-1-1-default-hor-left-rounded-underline--2" role="tabpanel">

                </div>

                <div class="tab-pane fade" id="nav-1-1-default-hor-left-rounded-underline--3" role="tabpanel">

                </div>
            </div>


            <br/><br/><br/><br/>

            <h3 className="section-title">Featured Products</h3>
            <ul className="nav u-nav-v1-1 u-nav-primary u-nav-rounded-5 g-brd-bottom--md g-brd-primary g-mb-20"
                role="tablist" data-target="nav-1-1-default-hor-left-rounded-underline"
                data-tabs-mobile-type="slide-up-down"
                data-btn-classes="btn btn-md btn-block u-btn-outline-primary g-mb-20">
                <li className="nav-item">
                    <a className="nav-link active g-rounded-bottom-0" data-toggle="tab"
                       href="#nav-1-1-default-hor-left-rounded-underline--1" role="tab">Trending products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link g-rounded-bottom-0" data-toggle="tab"
                       href="#nav-1-1-default-hor-left-rounded-underline--2" role="tab">New Arrivals</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link g-rounded-bottom-0" data-toggle="tab"
                       href="#nav-1-1-default-hor-left-rounded-underline--3" role="tab">Best Sale</a>
                </li>
            </ul>

            <div id="nav-1-1-default-hor-left-rounded-underline" className="tab-content">
                <div className="tab-pane fade show active" id="nav-1-1-default-hor-left-rounded-underline--1" role="tabpanel">

                    <div class="row">
                        <div class="col-sm-6 col-lg-2 g-mb-30">
                            <ProductWidget />
                        </div>
                        <div className="col-sm-6 col-lg-2 g-mb-30">
                            <ProductWidget/>
                        </div>
                        <div className="col-sm-6 col-lg-2 g-mb-30">
                            <ProductWidget/>
                        </div>
                        <div className="col-sm-6 col-lg-2 g-mb-30">
                            <ProductWidget/>
                        </div>
                        <div className="col-sm-6 col-lg-2 g-mb-30">
                            <ProductWidget/>
                        </div>
                        <div className="col-sm-6 col-lg-2 g-mb-30">
                            <ProductWidget/>
                        </div>
                        <div className="col-sm-6 col-lg-2 g-mb-30">
                            <ProductWidget/>
                        </div>
                        <div className="col-sm-6 col-lg-2 g-mb-30">
                            <ProductWidget/>
                        </div>
                        <div className="col-sm-6 col-lg-2 g-mb-30">
                            <ProductWidget/>
                        </div>
                        <div className="col-sm-6 col-lg-2 g-mb-30">
                            <ProductWidget/>
                        </div>
                        <div className="col-sm-6 col-lg-2 g-mb-30">
                            <ProductWidget/>
                        </div>
                        <div className="col-sm-6 col-lg-2 g-mb-30">
                            <ProductWidget/>
                        </div>
                    </div>

                </div>

                <div className="tab-pane fade" id="nav-1-1-default-hor-left-rounded-underline--2" role="tabpanel">

                </div>

                <div className="tab-pane fade" id="nav-1-1-default-hor-left-rounded-underline--3" role="tabpanel">

                </div>
            </div>


            <div className="text-center">
                <button className="btn product-loading">
                    <i className=" ti-reload"></i>
                    Load More
                </button>
            </div>



            <br/><br/><br/><br/>

        </B2CLayout>
    )

}


export default Home
