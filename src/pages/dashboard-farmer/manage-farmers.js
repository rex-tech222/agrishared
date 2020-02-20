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
        <DashboardLayout activeDashboard="farmer">
            <div className="dashboard-register">
                <div className="container">

                    <div className="d-title-header  ">
                        <h1>Manage Farmers</h1>
                        <button className="btn">VIEW FARMERS</button>
                    </div>

                    <form >
                        <div className={`row ${classes.root}`} >
                            <div className="col-lg-6">
                                <TextField
                                    label="First Name"
                                    style={{ marginBottom: 10 }}
                                    placeholder="Abraham"
                                    helperText="Enter first name"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Last Name"
                                    style={{ marginBottom: 10 }}
                                    placeholder="Nwoke"
                                    helperText="Enter last name"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Email Address "
                                    style={{ marginBottom: 10 }}
                                    placeholder="abraham@gmail.com"
                                    helperText="Enter email address "
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Mobile Number"
                                    style={{ marginBottom: 10 }}
                                    placeholder="0244491485"
                                    helperText="Enter mobile number"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Location"
                                    style={{ marginBottom: 10 }}
                                    placeholder="5"
                                    helperText="Enter location"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Farm SIze"
                                    style={{ marginBottom: 10 }}
                                    placeholder="3333"
                                    helperText="Enter farm size"
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
