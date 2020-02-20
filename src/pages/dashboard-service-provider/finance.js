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

    const [state, setState] = useState({
        show: '0',
    });

    const onChangeView = (view) => {
        setState(state => ({
            ...state,
            show: view
        }))
    }

    const classes = useStyles();

    return (
        <DashboardLayout activeDashboard="service-provider">
            <div className="dashboard-register">
                <div className="container">

                    <div className="d-title-header">
                        <h1>Finance</h1>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="nav-btn">
                                <button onClick={onChangeView.bind(this, "0")} className={`btn ${state.show === "0" ? "active" : ""}`}>
                                    Request for value chain financing
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                                <button onClick={onChangeView.bind(this, "1")} className={`btn ${state.show === "1" ? "active" : ""}`}>
                                    Request Agribusiness Investment
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8">

                            {
                                state.show === "0" ?
                                    <div className="animated fadeIn">

                                        <h2>Request for Investment</h2>

                                        <form>
                                            <div className={`row ${classes.root}`}>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Request Agribusiness Investment"
                                                        style={{marginBottom: 10}}
                                                        placeholder="Abraham"
                                                         helperText="Enter product specific name"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Investment Title"
                                                        style={{marginBottom: 10}}
                                                        placeholder="Nwoke"
                                                        helperText="Enter title of investment "
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Investment Type"
                                                        style={{marginBottom: 10}}
                                                        placeholder="abraham@gmail.com"
                                                        helperText="Select type of investment"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Product Type"
                                                        style={{marginBottom: 10}}
                                                        placeholder="0244491485"
                                                        helperText="Select product type"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Amount"
                                                        style={{marginBottom: 10}}
                                                        placeholder="sdsds"
                                                        helperText="Enter how much funds you need"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Use of Funds"
                                                        style={{marginBottom: 10}}
                                                        placeholder="sdsdsd"
                                                        helperText="Use of Funds"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Return On Investment (%)"
                                                        style={{marginBottom: 10}}
                                                        placeholder="sdsdsds"
                                                        helperText="What is the specific interest amount"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Attach images or video"
                                                        style={{marginBottom: 10}}
                                                        placeholder="sdsdsds"
                                                        helperText=" jpg, png, mp4, avi etc"
                                                        fullWidth
                                                    />
                                                </div>
                                            </div>
                                        </form>

                                        <div className="d-action-btn">
                                            <button className="btn">SUBMIT</button>
                                        </div>
                                    </div>
                                    : null
                            }


                            {
                                state.show === "1" ?
                                    <div className="animated fadeIn">

                                        <h2>Request Agribusiness Investment</h2>

                                        <form>
                                            <div className={`row ${classes.root}`}>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Investment Title"
                                                        style={{marginBottom: 10}}
                                                        placeholder="Abraham"
                                                        helperText="Tell why you need the funds"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Investment Type"
                                                        style={{marginBottom: 10}}
                                                        placeholder="Nwoke"
                                                         helperText="Select type of investment "
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Amount"
                                                        style={{marginBottom: 10}}
                                                        placeholder="abraham@gmail.com"
                                                        helperText="Enter the amount you need "
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Purpose of Investment"
                                                        style={{marginBottom: 10}}
                                                        placeholder="0244491485"
                                                        helperText="What are you using the money for"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Period"
                                                        style={{marginBottom: 10}}
                                                        placeholder="sdsds"
                                                        helperText="Specify investment period"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Return On Investment (%)"
                                                        style={{marginBottom: 10}}
                                                        placeholder="sdsdsd"
                                                        helperText="What is the specific interest amount"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <TextField
                                                        label="Attach Image"
                                                        style={{marginBottom: 10}}
                                                        placeholder="sdsdsds"
                                                        helperText="jpg, png"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="d-action-btn">
                                                        <button className="btn">SUBMIT</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>


                                    </div>
                                    : null
                            }


                        </div>
                    </div>


                </div>
            </div>
        </DashboardLayout>
    )

}


export default DashboardIndex
