import React, {useEffect, useState} from 'react'
import DashboardLayout from "../../components/layouts/DashboardLayout";

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';


function DashboardIndex(props) {


    return (
        <DashboardLayout activeDashboard="service-provider">
            <div className="dashboard-index">
                           <div className="d-breadcrumb">
                               <h4>Overview</h4> <span>Dashboard</span>
                           </div>

                            <div className="row stats d-flex justify-content-between">
                                <div className="col-lg-4">
                                    <div className="stat">
                                        <h4>Total Transactions</h4>
                                        <div className="row d-flex justify-content-between">
                                            <div className="col-lg-6">
                                                <h5>246K</h5>
                                                <span><i className="fa fa-arrow-down">13.8%</i></span>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src="/img/icons/Bar_ Chart1.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="stat">
                                        <h4>Products Sold</h4>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h5>246K</h5>
                                                <span><i className="fa fa-arrow-up">13.8%</i></span>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src="/img/icons/Bar_Chart2.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="stat">
                                            <h4>Total Earnings</h4>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h5>246K</h5>
                                                <span><i className="fa fa-arrow-down">13.8%</i></span>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src="/img/icons/Bar_Chart3.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                           <div className="row d-chart d-flex justify-content-between">
                               <div className="col-lg-7">
                                   <img src="/img/Statistics.png" alt=""/>
                               </div>
                               <div className="col-lg-4">
                                   <img src="/img/Group-77.png" alt=""/>
                               </div>
                           </div>


                           <div className="row d-chart d-flex justify-content-between">
                               <div className="col-lg-7">
                                   <img src="/img/Referrer.png" alt=""/>
                               </div>
                               <div className="col-lg-4">
                                   <img src="/img/Quick-Details.png" alt=""/>
                               </div>
                           </div>


            </div>
        </DashboardLayout>
    )

}


export default DashboardIndex
