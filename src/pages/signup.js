import React, {useEffect, useState, useRef} from 'react'
import LandingPageLayout from "../components/layouts/LandingPageLayout";

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';

import Slider from "react-slick";

import {Collapse, Form, Button, Select, Input, Icon, Progress} from 'antd';

const InputGroup = Input.Group;

const {Option} = Select;


function Signup(props) {

    return (
        <LandingPageLayout noMenu={true} noFooter={true}>
         <div className="auth-page g-bg-white">

             <img className="right-img" src="/img/backgrounds/Group2.png" alt=""/>
             <img className="left-img" src="/img/backgrounds/7-bg-shape.png" alt=""/>

             <div className="container d-flex justify-content-center ">
                 <div className="col-md-5">

                     <form className="form">


                          <h3>REGISTER</h3>
                         
                         <div className="field input-group u-shadow-v19">
                             <div className="input-icon input-group-append ">
                                     <i className="fa fa-user"></i>
                             </div>
                             <input className="input form-control" type="text" placeholder="Full name" aria-label="Full name"/>
                         </div>

                         <div className="field input-group u-shadow-v19">
                             <div className="input-icon input-group-append ">
                                     <i className="fa fa-envelope"></i>
                             </div>
                             <input className="input form-control" type="text" placeholder="Email" aria-label="Enter email"/>
                         </div>

                         <div className="field input-group u-shadow-v19">
                             <div className="input-icon input-group-append ">
                                     <i className="fa fa-mobile"></i>
                             </div>
                             <input className="input form-control" type="text" placeholder="mobile number" aria-label="mobile number"/>
                         </div>


                         <div className="field input-group u-shadow-v19">
                             <div className="input-icon input-group-append ">
                                     <i className="fa fa-key"></i>
                             </div>
                             <input className="input form-control" type="text" placeholder="password" aria-label="Enter email"/>
                         </div>


                         <div className="field">
                            <button className="btn submit-btn">
                                    <span>SIGN UP</span>
                                    <i className="fa fa-long-arrow-right"></i>
                            </button>
                         </div>

                         <div className="field action-btn">
                             <i className="fa fa-lock "></i>
                             Already  have an account?
                             <Link href="/login">
                             <a>  sign in</a>
                             </Link>
                         </div>


                         <div className="field action-btn">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                                    <button className="btn facebook-btn">
                                        <i className="fa fa-facebook"></i>
                                        <span>SIGN UP</span>
                                    </button>
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-6 col-6 d-flex justify-content-end">
                                    <button className="btn google-btn">
                                        <img src="/img/icons/icons8_Google_48px_1.png" alt=""/>
                                        <span>SIGN IN</span>
                                    </button>
                                </div>
                            </div>
                         </div>
                     </form>

                 </div>
             </div>


         </div>
        </LandingPageLayout>
    )

}


export default Signup
