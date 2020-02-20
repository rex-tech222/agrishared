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
            <div className="dashboard-company-info">
                <div className="container">

                    <div className="d-title-header">
                        <h1>Company Information</h1>
                    </div>

                    <form >
                        <div className={`row ${classes.root}`} >
                            <div className="col-lg-6">
                                <TextField
                                    label="Company Name"
                                    style={{ marginBottom: 10 }}
                                    placeholder="Abraham"
                                    helperText="Enter company name or farm name"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Agribusiness Type"
                                    style={{ marginBottom: 10 }}
                                    placeholder="Nwoke"
                                    helperText="Select agribusiness type"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Business Email Address "
                                    style={{ marginBottom: 10 }}
                                    placeholder="abraham@gmail.com"
                                    helperText="Enter email address "
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Tel / Mobile Number "
                                    style={{ marginBottom: 10 }}
                                    placeholder="0244491485"
                                    helperText="Enter mobile number"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Address "
                                    style={{ marginBottom: 10 }}
                                    placeholder="ab"
                                    helperText="Enter company address"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Locality"
                                    style={{ marginBottom: 10 }}
                                    placeholder="ab"
                                    helperText="enter your locality"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Country "
                                    style={{ marginBottom: 10 }}
                                    placeholder="ab"
                                    helperText="Select your country"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Products "
                                    style={{ marginBottom: 10 }}
                                    placeholder="ab"
                                    helperText="Select products "
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Farm / Land Size "
                                    style={{ marginBottom: 10 }}
                                    placeholder="ab"
                                    helperText="Enter size of farm or land "
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Logo"
                                    style={{ marginBottom: 10 }}
                                    placeholder="ab"
                                    helperText="Select company logo"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Socials (Optional)"
                                    style={{ marginBottom: 10 }}
                                    placeholder="ab"
                                    helperText="Add social media links"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Farming Types"
                                    style={{ marginBottom: 10 }}
                                    placeholder="ab"
                                    helperText="Select farming types "
                                    fullWidth
                                />
                            </div>
                        </div>
                    </form>

                    <div className="d-action-btn">
                        <button className="btn">Save</button>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    )

}


export default DashboardIndex
