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
        <DashboardLayout activeDashboard="service-provider">
           <div className="dashboard-company-details">
               <div className="container">

                   <div className="d-title-header">
                       <h1>Company Details</h1>
                   </div>

                      <div className="row mt-5">
                          <div className="col-lg-4">
                              <div className="user-info">
                                  <img src="/img/4.jpg" alt=""/>
                                  <h4>Abraham Nwoke</h4>
                                  <span className="pos">Agronomist</span>

                                   <span className="email">info@something.com</span>
                                    <span>023 365 47 892</span>
                              </div>
                          </div>
                          <div className="col-lg-8 company-info">
                              <div className="row">
                                  <div className="col-lg-4 detail">
                                      <h4>Company name</h4>
                                      <span>ThemePixels, Inc.</span>
                                  </div>
                                  <div className="col-lg-4 detail">
                                      <h4>Business Type</h4>
                                      <span>Bank</span>
                                  </div>
                                  <div className="col-lg-4 detail">
                                      <h4>Email Address</h4>
                                      <span>info@agrishare.com</span>
                                  </div>
                                  <div className="col-lg-4 detail">
                                      <h4>Telephone</h4>
                                      <span>233 214 547 896</span>
                                  </div>
                                  <div className="col-lg-4 detail">
                                      <h4>Address</h4>
                                      <span>819 Waldeck Street, <br/>
                                          tx ME 75244, Ghana</span>
                                  </div>
                                  <div className="col-lg-4 detail">
                                      <h4>Location</h4>
                                      <span>Accra, Ghana</span>
                                  </div>
                                  <div className="col-lg-4 detail">
                                      <h4>Services</h4>
                                      <span>Saving & Loans</span>
                                  </div>
                                  <div className="col-lg-4 detail">
                                      <h4>Company Socials</h4>
                                      <ul>
                                          <li><i className="fa fa-instagram"></i></li>
                                          <li><i className="fa fa-twitter"></i></li>
                                          <li><i className="fa fa-facebook"></i></li>
                                          <li><i className="fa fa-envelope"></i></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>

               </div>
           </div>
        </DashboardLayout>
    )

}


export default DashboardIndex
