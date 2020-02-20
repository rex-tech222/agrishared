import React, {useEffect, useState} from 'react'
import DashboardLayout from "../../../components/layouts/DashboardLayout";

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
            <div className="dashboard-register">
                <div className="container">

                    <div className="d-title-header">
                        <h1>Products</h1>
                    </div>

                    <div className="row">
                        <div className="col-lg-3">
                            <div className="nav-btn">
                                <Link activeClassName="active" href="/dashboard/products/product-profile">
                                <button className={`btn active`}>
                                    Product Profile
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                                </Link>
                                <Link activeClassName="active" href="/dashboard/products/post-for-offtakers">
                                <button className={`btn `}>
                                    Post For Offtakers
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                                </Link>
                            </div>
                        </div>


                        <div className="col-lg-9">
                            <form >
                                <div className={`row ${classes.root}`} >
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Request for Finance"
                                            style={{ marginBottom: 10 }}
                                            placeholder="Abraham"
                                           // helperText="Enter product specific name"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Farm Inputs"
                                            style={{ marginBottom: 10 }}
                                            placeholder="Nwoke"
                                          //  helperText="Select product category "
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Reason for Funds"
                                            style={{ marginBottom: 10 }}
                                            placeholder="abraham@gmail.com"
                                            helperText="Tell why you need the funds"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Pay Back Time"
                                            style={{ marginBottom: 10 }}
                                            placeholder="0244491485"
                                            helperText="When will you pay back?"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Fund Type"
                                            style={{ marginBottom: 10 }}
                                            placeholder="sdsds"
                                            helperText="Select Fund Type"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Amount"
                                            style={{ marginBottom: 10 }}
                                            placeholder="sdsdsd"
                                            helperText="Enter the amount you need "
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Attach Contract"
                                            style={{ marginBottom: 10 }}
                                            placeholder="sdsdsds"
                                            helperText="Attach loan and payment term contract"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Attach Proposal"
                                            style={{ marginBottom: 10 }}
                                            placeholder="sdsdsds"
                                            helperText="Attach funding proposal"
                                            fullWidth
                                        />
                                    </div>
                                </div>
                            </form>

                            <div className="d-action-btn">
                                <button className="btn">SUBMIT</button>
                            </div>


                        </div>
                    </div>



                </div>
            </div>
        </DashboardLayout>
    )

}


export default DashboardIndex
