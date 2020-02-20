import React, {useEffect, useState} from 'react'
import DashboardLayout from "../../components/layouts/DashboardLayout";

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';

import {makeStyles} from '@material-ui/core/styles';
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
        <DashboardLayout activeDashboard="service-provider" >
            <div className="dashboard-certifications">
                <div className="container">

                    <div className="d-title-header">
                        <h1>Certifications</h1>
                    </div>


                    <div className="d-flex justify-content-center">
                        <div className={`board col-md-8`}>

                            <div className={`d-flex justify-content-center ${classes.root}`}>
                                <ul className="nav nav-tabs" id="myTab">
                                    <div className="liner"></div>
                                    <li className="active">
                                        <a href="#1" data-toggle="tab">
                                                  <span className="round-tabs one">
                                                          <i className="glyphicon glyphicon-home">1</i>
                                                  </span>
                                        </a>
                                        <h5>Ceertification</h5>
                                    </li>

                                    <li><a href="#2" data-toggle="tab">
                                                     <span className="round-tabs two">
                                                         <i className="glyphicon glyphicon-user">2</i>
                                                     </span>
                                    </a>
                                        <h5>Standard Certification</h5>
                                    </li>
                                    <li><a href="#3" data-toggle="tab">
                                                     <span className="round-tabs three">
                                                          <i className="glyphicon glyphicon-gift">3</i>
                                                     </span> </a>
                                        <h5>Other Certification</h5>
                                    </li>


                                </ul>
                            </div>

                            <div className="tab-content">
                                <div className="tab-pane fade in active show" id="1">
                                    <h3 className="">Post for or request for supply 1</h3>
                                    <div className="content">
                                        <TextField
                                            id="standard-full-width"
                                            label="Business Number"
                                            style={{ margin: 8 }}
                                            placeholder="Name"
                                            helperText="Enter business number"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            id="standard-full-width"
                                            label="Certificate Image"
                                            style={{ margin: 8 }}
                                            placeholder="Name"
                                            helperText="Attach Certificate png, jpg"
                                            fullWidth
                                            margin="normal"
                                        />

                                        <div className="d-action-btn">
                                            <button className="btn">Next</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade show" id="2">
                                    <h3 className="">Post for or request for supply 2 </h3>
                                    <div className="content">
                                        <TextField
                                            id="standard-full-width"
                                            label="Standard Certificate Number"
                                            style={{ margin: 8 }}
                                            placeholder="Name"
                                            helperText="Enter business number"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            id="standard-full-width"
                                            label="Awarding Institution"
                                            style={{ margin: 8 }}
                                            placeholder="Name"
                                            helperText="Enter company address"
                                            fullWidth
                                            margin="normal"
                                        />

                                        <div className="d-action-btn">
                                            <button className="btn">Next</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade show" id="3">
                                    <h3 className="">Post for or request for supply 3</h3>
                                    <div className="content">
                                        <TextField
                                            id="standard-full-width"
                                            label="Attach Certificate"
                                            style={{ margin: 8 }}
                                            placeholder="Name"
                                            helperText="Attach Certificate png, jpg"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            id="standard-full-width"
                                            label="Attach Certificate"
                                            style={{ margin: 8 }}
                                            placeholder="Name"
                                            helperText="Attach Certificate png, jpg"
                                            fullWidth
                                            margin="normal"
                                        />

                                        <div className="d-action-btn">
                                            <button className="btn">Save</button>
                                        </div>

                                    </div>
                                </div>

                                <div className="clearfix"></div>
                            </div>

                        </div>
                    </div>




                </div>
            </div>
        </DashboardLayout>
    )

}


export default DashboardIndex
