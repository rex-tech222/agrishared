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
                title="B2C Cart - Agrishared"
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

            <section className="g-mb-20 g-mt-15">
                <div className="g-bg-cover__inner">
                    <ul className="u-list-inline g-mb-20">
                        <li className="list-inline-item g-mr-7">
                            <a className="u-link-v5 g-color-main" href="#!">Home</a>
                            <i className="fa fa-angle-right g-ml-7"></i>
                        </li>
                        <li className="list-inline-item g-mr-7">
                            <a className="u-link-v5 g-color-main" href="#!">Shop</a>
                            <i className="fa fa-angle-right g-ml-7"></i>
                        </li>
                        <li className="list-inline-item g-color-primary">
                            <span>Cart</span>
                        </li>
                    </ul>
                    <header className="">
                        <h2 className="h1 g-font-size-23 g-font-weight-300 text-uppercase">
                            Shopping Cart
                        </h2>
                    </header>
                </div>
            </section>


            <div className="container">
               <div className="cart">






                   <div className="card g-brd-primary rounded-0">
                       <div className="table-responsive">
                           <table className="table u-table--v1 mb-0">
                               <thead>
                               <tr className="g-bg-primary g-color-white">
                                   <th className="g-brd-top-none">Item(s) </th>
                                   <th className="g-brd-top-none">Price</th>
                                   <th className="g-brd-top-none">Quantity</th>
                                   <th className="g-brd-top-none">Total</th>
                                   <th className="g-brd-top-none"> </th>
                               </tr>
                               </thead>

                               <tbody>
                               <tr>
                                   <td>
                                       <img style={{float: 'left', marginRight: '10px'}} className="g-width-100 left" src="/img/983d284a-2212-40e2-8215-be2c864c7cc1.png" alt=""/>
                                       <h4>Stuffed Ball Maker</h4>
                                       <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.in ipsum id orci porta dapibus. <br/>
                                           Quisque velit nisi, pretium </p>
                                   </td>
                                   <td className="hidden-sm">GH 59</td>
                                   <td className="hidden-sm">59</td>
                                   <td>GH 59</td>
                                   <td>
                                       <span className="u-label u-label-warning g-color-white"><i className="fa fa-times"></i></span>
                                   </td>
                               </tr>
                               <tr>
                                   <td>
                                       <img style={{float: 'left', marginRight: '10px'}} className="g-width-100 left" src="/img/983d284a-2212-40e2-8215-be2c864c7cc1.png" alt=""/>
                                       <h4>Stuffed Ball Maker</h4>
                                       <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.in ipsum id orci porta dapibus. <br/>
                                           Quisque velit nisi, pretium </p>
                                   </td>
                                   <td className="hidden-sm">GH 59</td>
                                   <td className="hidden-sm">59</td>
                                   <td>GH 59</td>
                                   <td>
                                       <span className="u-label u-label-warning g-color-white"><i className="fa fa-times"></i></span>
                                   </td>
                               </tr>
                               <tr>
                                   <td>
                                       <img style={{float: 'left', marginRight: '10px'}} className="g-width-100 left" src="/img/983d284a-2212-40e2-8215-be2c864c7cc1.png" alt=""/>
                                       <h4>Stuffed Ball Maker</h4>
                                       <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.in ipsum id orci porta dapibus. <br/>
                                           Quisque velit nisi, pretium </p>
                                   </td>
                                   <td className="hidden-sm">GH 59</td>
                                   <td className="hidden-sm">59</td>
                                   <td>GH 59</td>
                                   <td>
                                       <span className="u-label u-label-warning g-color-white"><i className="fa fa-times"></i></span>
                                   </td>
                               </tr>
                               </tbody>
                           </table>
                       </div>
                   </div>

                   <br/><br/><br/><br/>
                   <h5>What would you like to do next?</h5>
                   <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>

                   <div className="row">
                       <div className="col-md-6">
                           <div className="check-box">

                               <ul>
                                   <li>
                                       <label className="custom-control custom-checkbox mb-0">
                                       <input type="checkbox" className="custom-control-input"/>
                                           <span className="custom-control-label">Use Coupon Code</span>
                                   </label>
                                       </li>
                                   <li>
                                       <label className="custom-control custom-checkbox mb-0">
                                       <input type="checkbox" className="custom-control-input"/>
                                           <span className="custom-control-label">Use Gift Voucher</span>
                                   </label>
                                       </li>
                                   <li>
                                       <label className="custom-control custom-checkbox mb-0">
                                       <input type="checkbox" className="custom-control-input"/>
                                           <span className="custom-control-label">Estimate Shipping & Taxes</span>
                                   </label>
                                       </li>
                               </ul>

                               <div className="form-group row g-mb-25">
                                   <div className="col-md-4">
                                       <label htmlFor="inputHorizontalDnger" className="  col-form-label g-pa-0">Country :</label>
                                       <select className="form-control  form-control-sm rounded-0">
                                           <option>Select</option>
                                           <option value="1">Value One</option>
                                           <option value="3">Value Two</option>
                                           <option value="3">Value Three</option>
                                       </select>
                                   </div>

                                   <div className="col-md-4">
                                       <label htmlFor="inputHorizontalDnger" className=" col-form-label g-pa-0">Region / State :</label>
                                       <select className="form-control   form-control-sm rounded-0">
                                           <option>Select</option>
                                           <option value="1">Value One</option>
                                           <option value="3">Value Two</option>
                                           <option value="3">Value Three</option>
                                       </select>
                                   </div>

                                   <div className="col-md-4">
                                       <label htmlFor="inputHorizontalDnger" className=" col-form-label g-pa-0">Zip Code</label>
                                       <input id="inputGroup10_3" className="form-control rounded-0 form-control-sm  "
                                              type="text" placeholder=" "/>
                                   </div>
                               </div>


                               <button className="btn ">Get Quotes</button>
                               <button className="btn ">Continue</button>
                           </div>
                       </div>
                       <div className="col-md-6">
                           <div className="check-box">
                               <div className="stats">
                                   <div className="stat d-flex justify-content-between">
                                       <div><span>Cart Sub Total</span></div>
                                       <div><span>GH 59</span></div>
                                   </div>
                                   <div className="stat d-flex justify-content-between">
                                       <div><span>Cart Sub Total</span></div>
                                       <div><span>GH 59</span></div>
                                   </div>
                                   <div className="stat d-flex justify-content-between">
                                       <div><span>Cart Sub Total</span></div>
                                       <div><span>GH 59</span></div>
                                   </div>
                                   <div className="stat d-flex justify-content-between">
                                       <div><span>Cart Sub Total</span></div>
                                       <div><span>GH 59</span></div>
                                   </div>
                               </div>
                               <button className="btn">Updates</button>
                               <button className="btn">Check out</button>
                           </div>
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
