import React, {useEffect, useState, useRef } from 'react'

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';
import Slider from "react-slick";

function BlogPost(props) {

    const [state, setState] = useState({
        show: false
    });

  

    return (
        <article className="u-shadow-v11 rounded g-pa-25">
            <h2 className="h4 g-mb-15">

                <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover"
                   href="#!">Graphic Designer</a>

            </h2>

            <ul className="list-inline d-flex justify-content-between g-mb-15">
                <li className="list-inline-item g-mr-20">
                    <img className="g-height-25 g-width-25 d-inline rounded-circle g-mr-5"
                         src="/img/1.jpg"
                         alt="Image Description" /> <a
                    className="u-link-v5 g-color-main g-color-primary--hover"
                    href="#!">Agrishared</a>
                </li>
                <li className="list-inline-item">

                </li>
            </ul>

            <p className="g-mb-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

            <ul className="list-unstyled">
                <li className="media g-mb-10">
                  <span className="d-block g-color-gray-dark-v5 g-width-110">

                      <i className="icon-wallet g-pos-rel g-top-1 g-mr-5"></i> Sallery:

                    </span>
                    <span className="media-body">GHS500 - GHS1000</span>
                </li>
                <li className="media g-mb-10">
                  <span className="d-block g-color-gray-dark-v5 g-width-110">

                      <i className="icon-calendar g-pos-rel g-top-1 g-mr-5"></i> Date:

                    </span>
                    <span className="media-body">24 Jan, 2020</span>
                </li>
                <li className="media g-mb-10">
                  <span className="d-block g-color-gray-dark-v5 g-width-110">

                      <i className="icon-user g-pos-rel g-top-1 g-mr-5"></i> Skills:

                    </span>
                    <span className="media-body">Photoshop, Sketch</span>
                </li>
                <li className="media">
                  <span className="d-block g-color-gray-dark-v5 g-width-110">

                      <i className="icon-location-pin g-pos-rel g-top-1 g-mr-5"></i> Location:

                    </span>
                    <span className="media-body">Accra, Ghana</span>
                </li>
            </ul>

            <hr className="g-brd-gray-light-v4"/>

            <ul className="list-inline d-flex justify-content-between mb-0">
                <li className="list-inline-item">
                    <a className="u-tags-v1 g-font-size-12 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-3 g-px-8"
                       href="#!">Part-Time</a>
                </li>
                <li className="list-inline-item">
                    <a href="#!">See Details</a>
                </li>
            </ul>
        </article>
    )

}


export default BlogPost
