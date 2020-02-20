import Link from "next/link";
import React from "react";

function ProductWidget() {


    return (
        <figure className="u-block-hover u-shadow-v24 productWidget">
            <div className="g-pos-rel">

                <img className="w-100 product-img" src="/img/983d284a-2212-40e2-8215-be2c864c7cc1.png" alt="Image Description"/>

                <figcaption>
                    <span className="product-tag u-ribbon-v1 g-bg-black ">New</span>

                    <div className="g-z-index-2 g-pos-abs g-top-15 g-right-15">
                        <a className=" g-color-black g-color-primary--hover g-font-size-16 g-text-underline--none--hover rounded"
                           href="#!">
                            <i className="  fa  fa-heart-o"></i>
                        </a>
                    </div>
                    <div className="u-block-hover__additional--fade g-flex-middle g-pa-15">
                        <div className="g-flex-middle-item--bottom">
                            <a className="d-inline-block g-bg-primary-opacity-0_8 g-bg-primary--hover g-color-white g-font-size-default g-text-underline--none--hover rounded g-py-5 g-px-10"
                               href="#!">
                                <i className="g-mr-5  fa fa-cart-plus u-line-icon-pro"></i>
                            </a>
                        </div>
                    </div>
                </figcaption>

            </div>


            <div className="g-px-10 g-py-20">
                <ul className="stars">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul>
                <header className="">
                    <h4 className="product-title">
                        <Link href="/b2c/product">
                            <a className="g-color-main g-color-primary--hover g-text-underline--none--hover"  >German combine  </a>
                        </Link>
                    </h4>
                    <div className="d-block">
                        <div className="d-flex justify-content-between">
                            <span className="g-color-black g-font-size-14 g-line-height-1">GHS92.00</span>
                            <button className="btn buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                </header>
                <ul className="list-unstyled g-color-gray-dark-v4 g-font-size-12 g-mb-5">
                    <li className="g-mb-5">
                        <a className="g-color-gray-dark-v4 g-color-black--hover g-font-style-normal text-uppercase" href="#!">Category here</a>
                    </li>
                    <li>Owner's Details</li>
                </ul>
                <div className="js-rating g-color-primary g-font-size-11" data-rating="3" data-spacing="2"
                     data-backward-icons-classes="fa fa-star g-opacity-0_5"></div>
            </div>

        </figure>
    )
}

export default ProductWidget
