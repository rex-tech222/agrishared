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
            <div className="dashboard-register">
                <div className="container">

                    <div className="d-title-header">
                        <h1>Agribusiness Support</h1>
                    </div>

                    <form >
                        <div className={`row ${classes.root}`} >
                            <div className="col-lg-6">
                                <TextField
                                    label="Problem Title"
                                    style={{ marginBottom: 10 }}
                                    placeholder="Abraham"
                                    helperText="Enter caption of your problem"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Problem Category"
                                    style={{ marginBottom: 10 }}
                                    placeholder="Nwoke"
                                    helperText="Select type of problem"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Problem Sub- Category"
                                    style={{ marginBottom: 10 }}
                                    placeholder="abraham@gmail.com"
                                    helperText="Specify problem sub-category"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Attach Picture or Video"
                                    style={{ marginBottom: 10 }}
                                    placeholder="0244491485"
                                    helperText="jpg, png"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Description"
                                    style={{ marginBottom: 10 }}
                                    placeholder="dsd"
                                    helperText="Enter problem description"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextField
                                    label="Location"
                                    style={{ marginBottom: 10 }}
                                    placeholder="dsdsdsd"
                                    helperText="Enter your specific location"
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
        </DashboardLayout>
    )

}


export default DashboardIndex
