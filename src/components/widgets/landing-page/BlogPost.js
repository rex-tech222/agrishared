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
        <article class="g-bg-white">
        <figure class="g-pos-rel">
          <img class="img-fluid w-100" src="/img/5e09feeac38b0.png" alt="Image Description"/>

          <figcaption class="g-pos-abs g-bottom-20 g-left-20">
            <a class="btn btn-sm u-btn-black rounded-0" href="#!">July 07, 2017</a>
          </figcaption>
        </figure>

        <div class="g-pa-30">
          <h3 class="g-font-weight-300 g-mb-15">

            <a class="u-link-v5 g-color-main g-color-primary--hover" href="#!">Focused on helping our clients to build a great business</a>

          </h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
        </div>

        <div class="media g-font-size-12 g-brd-top g-brd-gray-light-v4 g-pa-15-30">
          <img class="d-flex mr-2 rounded-circle g-width-20 g-height-20" src="/img/4.jpg" alt="Image Description"/>
          <div class="media-body align-self-center">
            <a class="u-link-v5 g-color-main g-color-primary--hover" href="#!">Kathy Reyes</a>
          </div>

          <div class="align-self-center">
            <a class="u-link-v5 g-color-main g-color-primary--hover g-mr-10" href="#!">
              <i class="icon-bubbles align-middle g-mr-2"></i>
24
            </a>
            <a class="u-link-v5 g-color-main g-color-primary--hover" href="#!">
              <i class="icon-eye align-middle g-mr-2"></i>
108
            </a>
          </div>
        </div>
      </article>
    )

}


export default BlogPost
