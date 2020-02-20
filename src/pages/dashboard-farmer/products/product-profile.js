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
        <DashboardLayout activeDashboard="farmer">
            <div className="dashboard-register">
                <div className="container">

                    <div className="d-title-header">
                        <h1>Products</h1>
                    </div>

                    <div className="row">

                        <div className="col-lg-3">
                            <div className="nav-btn">
                                <Link activeClassName="" href="/dashboard/products/product-profile">
                                    <button className={`btn active`}>
                                        Product Profile
                                        <i className="fa fa-chevron-right"></i>
                                    </button>
                                </Link>
                                <Link activeClassName="" href="/dashboard/products/post-for-offtakers">
                                    <button className={`btn   `}>
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
                                            label="Product Name"
                                            style={{ marginBottom: 10 }}
                                            placeholder="Abraham"
                                            helperText="Enter product specific name"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Product Category"
                                            style={{ marginBottom: 10 }}
                                            placeholder="Nwoke"
                                            helperText="Select product category "
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Product Sub-Category"
                                            style={{ marginBottom: 10 }}
                                            placeholder="abraham@gmail.com"
                                            helperText="Select product sub-category"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Select Farming Type"
                                            style={{ marginBottom: 10 }}
                                            placeholder="0244491485"
                                            helperText="Select farming type"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Select Price Range"
                                            style={{ marginBottom: 10 }}
                                            placeholder="sdsds"
                                            helperText="Select product price range"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Location"
                                            style={{ marginBottom: 10 }}
                                            placeholder="sdsdsd"
                                            helperText="Enter your location"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="GPS"
                                            style={{ marginBottom: 10 }}
                                            placeholder="sdsdsds"
                                            helperText="Pin point your current position"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Size of Product"
                                            style={{ marginBottom: 10 }}
                                            placeholder="sdsdsds"
                                            helperText="Specific size of product"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Specific size of product"
                                            style={{ marginBottom: 10 }}
                                            placeholder="sdsdsds"
                                            helperText=" jpg, png."
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-action-btn">
                                            <button className="btn w-100">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>



                </div>
            </div>
        </DashboardLayout>
    )

}


export default DashboardIndex
