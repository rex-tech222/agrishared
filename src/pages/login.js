import React, {useEffect, useState, useRef} from 'react'
import LandingPageLayout from "../components/layouts/LandingPageLayout";

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';

import Slider from "react-slick";

import {Collapse, Form, Button, Select, Input, Icon, Progress} from 'antd';
import MainLayout from "../components/layouts/MainLayout";

const InputGroup = Input.Group;

const {Option} = Select;


function Login(props) {

    const [state, setState] = useState({
        resetPasswordModal: false,
        resetConfirmModal: false,
    });

    useEffect(() => {

    });

    const onClosePasswordModal = (e) => {
        e.preventDefault();
        setState(state => ({
            ...state,
            resetPasswordModal: false
        }))
    }

    const onResetPassword = () => {
       // $('body').addClass('no-scroll')
        setState(state => ({
            ...state,
            resetPasswordModal: true
        }))
    }

    const onSendRequest = (e) => {
       // $('body').addClass('no-scroll')
        e.preventDefault();
        setState(state => ({
            ...state,
            resetPasswordModal: false,
            resetConfirmModal: true,
        }))
    }

    const onCloseModal = (e) => {
       // $('body').removeClass('no-scroll');
        e.preventDefault();
        setState(state => ({
            ...state,
            resetPasswordModal: false,
            resetConfirmModal: false,
        }))
    }

    const onCloseConfirmModal = (e) => {
       // $('body').removeClass('no-scroll');
        e.preventDefault();
        setState(state => ({
            ...state,
            resetConfirmModal: false
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
        <LandingPageLayout>
            <div className="auth-page g-bg-white">

                <img className="right-img" src="/img/backgrounds/Group2.png" alt=""/>
                <img className="left-img" src="/img/backgrounds/7-bg-shape.png" alt=""/>


                    <div className={`reset-modal ${state.resetPasswordModal ? 'show' : 'hide'}`}>
                        <div onClick={onClosePasswordModal} className="close-btn">
                            <i className="fa fa-close"></i>
                        </div>
                        <img className="left-img" src="/img/backgrounds/asset-1.png" alt=""/>

                                <form className="form">

                                    <h3>RECOVER PASSWORD</h3>

                                    <div className="field input-group u-shadow-v19">
                                        <div className="input-icon input-group-append ">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <input className="input form-control" type="text" placeholder="Email"
                                               aria-label="Enter email"/>
                                    </div>

                                    <div className="field">
                                        <button onClick={onSendRequest} className="btn recover-btn">
                                            <i className="fa fa-refresh"></i>
                                            <span>Recover</span>
                                        </button>
                                    </div>

                                </form>
                    </div>
                <div className={`reset-modal ${state.resetConfirmModal ? 'show' : 'hide'}`}>
                    <div onClick={onCloseConfirmModal} className="close-btn">
                        <i className="fa fa-close"></i>
                    </div>
                    <img className="left-img" src="/img/backgrounds/asset-1.png" alt=""/>

                    <form className="form">

                        <h3>EMAIL SENT!</h3>

                        <div className="field input-group u-shadow-v19">
                            Iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.
                        </div>

                        <div className="field d-flex justify-content-center">
                           <div className="confirm-check">
                               <i className="fa fa-check"></i>
                           </div>
                        </div>

                    </form>
                </div>

             <img onClick={onCloseModal}
                     className={`reset-modal-img-overlay ${state.resetPasswordModal ||  state.resetConfirmModal? 'show' : 'hide'}`}
                     src="/img/backgrounds/Rectangle67.png"/>


                <div className="container d-flex justify-content-center ">
                    <div className="col-md-6 col-12 ">

                        <form className="form">


                            <h3>LOG IN</h3>

                            <div className="field input-group u-shadow-v19">
                                <div className="input-icon input-group-append ">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <input className="input form-control" type="text" placeholder="Email"
                                       aria-label="Enter email"/>
                            </div>

                            <div className="field input-group u-shadow-v19">
                                <div className="input-icon input-group-append ">
                                    <i className="fa fa-key"></i>
                                </div>
                                <input className="input form-control" type="text" placeholder="password"
                                       aria-label="Enter email"/>
                            </div>

                            <div className="field action-btn">
                                <i className="fa fa-lock "></i>
                                <a onClick={onResetPassword} href="#">forgot Email or Password?</a>
                            </div>

                            <div className="field">
                                <button className="btn submit-btn">
                                    <span>SIGN IN</span>
                                    <i className="fa fa-long-arrow-right"></i>
                                </button>
                            </div>

                            <div className="field action-btn">
                                <i className="fa fa-lock "></i>
                                Don't have an account
                                <Link href="/signup">
                                    <a> register here</a>
                                </Link>
                            </div>


                            <div className="field action-btn">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                                        <button className="btn facebook-btn">
                                            <i className="fa fa-facebook"></i>
                                            <span>SIGN IN</span>
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


export default Login
