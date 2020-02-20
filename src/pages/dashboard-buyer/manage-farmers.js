import React, {useEffect, useState} from 'react'
import DashboardLayout from "../../components/layouts/DashboardLayout";

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

function DashboardIndex(props) {


    const classes = useStyles();

    return (
        <DashboardLayout activeDashboard="buyer">
            <div className="dashboard-manage-farmers">
                <div className="container">

                    <div className="d-title-header  ">
                        <h1>List of Offers</h1>

                    </div>

                    <form >
                        <div className={`row ${classes.root}`} >

                            <div className="col-lg-6 farmer-offers-box">
                               <div className="farmer-offers">
                                   <div className="row">
                                       <div className="col-lg-3">
                                           <img src="/img/icons/icons8_Corn_96px.png" alt=""/>
                                       </div>
                                       <div className="col-lg-9 info">
                                           <h4>Agrishared</h4>
                                           <span>Ghana</span>
                                           <span>Mobile : 021 456 987</span>
                                           <ul className="action">
                                               <li><i className="fa fa-pencil"></i></li>
                                               <li><i className="fa fa-times"></i></li>
                                           </ul>
                                       </div>
                                   </div>
                                   <hr/>
                                   <ul className="social">
                                       <li><i className="fa fa-instagram"></i></li>
                                       <li><i className="fa fa-twitter"></i></li>
                                       <li><i className="fa fa-facebook"></i></li>
                                       <li><i className="fa fa-envelope"></i></li>
                                   </ul>
                               </div>
                            </div>
                            <div className="col-lg-6 farmer-offers-box">
                                <div className="farmer-offers">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src="/img/icons/icons8_Corn_96px.png" alt=""/>
                                        </div>
                                        <div className="col-lg-9 info">
                                            <h4>Agrishared</h4>
                                            <span>Ghana</span>
                                            <span>Mobile : 021 456 987</span>
                                            <ul className="action">
                                                <li><i className="fa fa-pencil"></i></li>
                                                <li><i className="fa fa-times"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr/>
                                    <ul className="social">
                                        <li><i className="fa fa-instagram"></i></li>
                                        <li><i className="fa fa-twitter"></i></li>
                                        <li><i className="fa fa-facebook"></i></li>
                                        <li><i className="fa fa-envelope"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 farmer-offers-box">
                                <div className="farmer-offers">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src="/img/icons/icons8_Corn_96px.png" alt=""/>
                                        </div>
                                        <div className="col-lg-9 info">
                                            <h4>Agrishared</h4>
                                            <span>Ghana</span>
                                            <span>Mobile : 021 456 987</span>
                                            <ul className="action">
                                                <li><i className="fa fa-pencil"></i></li>
                                                <li><i className="fa fa-times"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr/>
                                    <ul className="social">
                                        <li><i className="fa fa-instagram"></i></li>
                                        <li><i className="fa fa-twitter"></i></li>
                                        <li><i className="fa fa-facebook"></i></li>
                                        <li><i className="fa fa-envelope"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 farmer-offers-box">
                                <div className="farmer-offers">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src="/img/icons/icons8_Corn_96px.png" alt=""/>
                                        </div>
                                        <div className="col-lg-9 info">
                                            <h4>Agrishared</h4>
                                            <span>Ghana</span>
                                            <span>Mobile : 021 456 987</span>
                                            <ul className="action">
                                                <li><i className="fa fa-pencil"></i></li>
                                                <li><i className="fa fa-times"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr/>
                                    <ul className="social">
                                        <li><i className="fa fa-instagram"></i></li>
                                        <li><i className="fa fa-twitter"></i></li>
                                        <li><i className="fa fa-facebook"></i></li>
                                        <li><i className="fa fa-envelope"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 farmer-offers-box">
                                <div className="farmer-offers">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src="/img/icons/icons8_Corn_96px.png" alt=""/>
                                        </div>
                                        <div className="col-lg-9 info">
                                            <h4>Agrishared</h4>
                                            <span>Ghana</span>
                                            <span>Mobile : 021 456 987</span>
                                            <ul className="action">
                                                <li><i className="fa fa-pencil"></i></li>
                                                <li><i className="fa fa-times"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr/>
                                    <ul className="social">
                                        <li><i className="fa fa-instagram"></i></li>
                                        <li><i className="fa fa-twitter"></i></li>
                                        <li><i className="fa fa-facebook"></i></li>
                                        <li><i className="fa fa-envelope"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 farmer-offers-box">
                                <div className="farmer-offers">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src="/img/icons/icons8_Corn_96px.png" alt=""/>
                                        </div>
                                        <div className="col-lg-9 info">
                                            <h4>Agrishared</h4>
                                            <span>Ghana</span>
                                            <span>Mobile : 021 456 987</span>
                                            <ul className="action">
                                                <li><i className="fa fa-pencil"></i></li>
                                                <li><i className="fa fa-times"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr/>
                                    <ul className="social">
                                        <li><i className="fa fa-instagram"></i></li>
                                        <li><i className="fa fa-twitter"></i></li>
                                        <li><i className="fa fa-facebook"></i></li>
                                        <li><i className="fa fa-envelope"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 farmer-offers-box">
                                <div className="farmer-offers">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src="/img/icons/icons8_Corn_96px.png" alt=""/>
                                        </div>
                                        <div className="col-lg-9 info">
                                            <h4>Agrishared</h4>
                                            <span>Ghana</span>
                                            <span>Mobile : 021 456 987</span>
                                            <ul className="action">
                                                <li><i className="fa fa-pencil"></i></li>
                                                <li><i className="fa fa-times"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr/>
                                    <ul className="social">
                                        <li><i className="fa fa-instagram"></i></li>
                                        <li><i className="fa fa-twitter"></i></li>
                                        <li><i className="fa fa-facebook"></i></li>
                                        <li><i className="fa fa-envelope"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 farmer-offers-box">
                                <div className="farmer-offers">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src="/img/icons/icons8_Corn_96px.png" alt=""/>
                                        </div>
                                        <div className="col-lg-9 info">
                                            <h4>Agrishared</h4>
                                            <span>Ghana</span>
                                            <span>Mobile : 021 456 987</span>
                                            <ul className="action">
                                                <li><i className="fa fa-pencil"></i></li>
                                                <li><i className="fa fa-times"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr/>
                                    <ul className="social">
                                        <li><i className="fa fa-instagram"></i></li>
                                        <li><i className="fa fa-twitter"></i></li>
                                        <li><i className="fa fa-facebook"></i></li>
                                        <li><i className="fa fa-envelope"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 farmer-offers-box">
                                <div className="farmer-offers">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src="/img/icons/icons8_Corn_96px.png" alt=""/>
                                        </div>
                                        <div className="col-lg-9 info">
                                            <h4>Agrishared</h4>
                                            <span>Ghana</span>
                                            <span>Mobile : 021 456 987</span>
                                            <ul className="action">
                                                <li><i className="fa fa-pencil"></i></li>
                                                <li><i className="fa fa-times"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr/>
                                    <ul className="social">
                                        <li><i className="fa fa-instagram"></i></li>
                                        <li><i className="fa fa-twitter"></i></li>
                                        <li><i className="fa fa-facebook"></i></li>
                                        <li><i className="fa fa-envelope"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 farmer-offers-box">
                                <div className="farmer-offers">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src="/img/icons/icons8_Corn_96px.png" alt=""/>
                                        </div>
                                        <div className="col-lg-9 info">
                                            <h4>Agrishared</h4>
                                            <span>Ghana</span>
                                            <span>Mobile : 021 456 987</span>
                                            <ul className="action">
                                                <li><i className="fa fa-pencil"></i></li>
                                                <li><i className="fa fa-times"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr/>
                                    <ul className="social">
                                        <li><i className="fa fa-instagram"></i></li>
                                        <li><i className="fa fa-twitter"></i></li>
                                        <li><i className="fa fa-facebook"></i></li>
                                        <li><i className="fa fa-envelope"></i></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </form>


                    <div className="shortcode-html d-flex justify-content-center mt-4 mb-4">
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#!" tabIndex="-1" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#!">1

                                        <span className="sr-only">(current)</span>

                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#!">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#!">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#!">4</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#!">5</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#!" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>


                </div>
            </div>
        </DashboardLayout>
    )

}


export default DashboardIndex
