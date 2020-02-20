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
    };

    const classes = useStyles();

    return (
        <DashboardLayout activeDashboard="buyer">
           <div className="">
                 <h1>Settings</h1>
           </div>

            <div className="d-flex justify-content-center">
                <div className="col-lg-10">

                    <div className="shortcode-html">

                        <ul className="nav text-center nav-justified u-nav-v2-2 g-mb-20" role="tablist"
                            data-target="nav-2-2-accordion-default-hor-left-big-icons" data-tabs-mobile-type="accordion"
                            data-btn-classes="btn btn-md btn-block rounded-0 u-btn-outline-lightgray g-mb-20">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab"
                                   href="#nav-2-2-accordion-default-hor-left-big-icons--1" role="tab">
                                    <i className="ti-settings d-block g-font-size-25 u-tab-line-icon-pro mb-1"></i>
                                    Settings
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab"
                                   href="#nav-2-2-accordion-default-hor-left-big-icons--2" role="tab">
                                    <i className="fa fa-building d-block g-font-size-25 u-tab-line-icon-pro mb-1"></i>
                                    Agri business Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab"
                                   href="#nav-2-2-accordion-default-hor-left-big-icons--3" role="tab">
                                    <i className="fa fa-upload d-block g-font-size-25 u-tab-line-icon-pro mb-1"></i>
                                    Upload Certificates
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab"
                                   href="#nav-2-2-accordion-default-hor-left-big-icons--4" role="tab">
                                    <i className="fa fa-user-plus d-block g-font-size-25 u-tab-line-icon-pro mb-1"></i>
                                    Add Team
                                </a>
                            </li>
                        </ul>

                        <div id="nav-2-2-accordion-default-hor-left-big-icons" className="tab-content">
                            <div className={`tab-pane fade show active`} id="nav-2-2-accordion-default-hor-left-big-icons--1" role="tabpanel">
                                <form>
                                    <div className={`row ${classes.root}`}>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Company Name"
                                                style={{marginBottom: 10}}
                                                placeholder="Abraham"
                                                helperText="Company Name"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Email Address "
                                                style={{marginBottom: 10}}
                                                placeholder="Nwoke"
                                                helperText="Enter email address"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Select Category"
                                                style={{marginBottom: 10}}
                                                placeholder="abraham@gmail.com"
                                                helperText="Select Produce type"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="User Type"
                                                style={{marginBottom: 10}}
                                                placeholder="0244491485"
                                                helperText="Select user type"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Country"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsds"
                                                helperText="Select your country"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Region"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsdsd"
                                                helperText="Select region"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="City"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsdsds"
                                                helperText="Enter your city"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Geolocation"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsdsds"
                                                helperText="Select your geolocation"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="About"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsdsds"
                                                helperText="Tell us something about yourself"
                                                fullWidth
                                            />
                                        </div>
                                    </div>

                                    <div className="d-action-btn">
                                        <button className="btn">SAVE</button>
                                    </div>

                                </form>
                            </div>
                            <div className={`tab-pane fade`}  id="nav-2-2-accordion-default-hor-left-big-icons--2" role="tabpanel">
                                <form>
                                    <div className={`row ${classes.root}`}>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Company Name"
                                                style={{marginBottom: 10}}
                                                placeholder="Abraham"
                                                helperText="Company Name"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Email Address "
                                                style={{marginBottom: 10}}
                                                placeholder="Nwoke"
                                                helperText="Enter email address"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Select Category"
                                                style={{marginBottom: 10}}
                                                placeholder="abraham@gmail.com"
                                                helperText="Select Produce type"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="User Type"
                                                style={{marginBottom: 10}}
                                                placeholder="0244491485"
                                                helperText="Select user type"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Country"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsds"
                                                helperText="Select your country"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Region"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsdsd"
                                                helperText="Select region"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="City"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsdsds"
                                                helperText="Enter your city"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Geolocation"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsdsds"
                                                helperText="Select your geolocation"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="About"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsdsds"
                                                helperText="Tell us something about yourself"
                                                fullWidth
                                            />
                                        </div>
                                    </div>

                                    <div className="d-action-btn">
                                        <button className="btn">SAVE</button>
                                    </div>

                                </form>
                            </div>
                            <div className={`tab-pane fade`}  id="nav-2-2-accordion-default-hor-left-big-icons--3" role="tabpanel">
                                <form>
                                    <div className={`row ${classes.root}`}>
                                        <div className="col-lg-6">
                                            <TextField
                                                label="Enter Title Here"
                                                style={{marginBottom: 10}}
                                                placeholder="Abraham"
                                                helperText="Caption of your certificate"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <TextField
                                                label="Attach File Here"
                                                style={{marginBottom: 10}}
                                                placeholder="Nwoke"
                                                helperText="pdf, word, jpg, png."
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <TextField
                                                label="Enter Description Here"
                                                style={{marginBottom: 10}}
                                                placeholder="abraham@gmail.com"
                                                helperText="Detailed but not more than 200 words"
                                                fullWidth
                                            />
                                        </div>
                                    </div>

                                    <div className="d-action-btn">
                                        <button className="btn">SUBMIT</button>
                                    </div>

                                </form>
                            </div>
                            <div className={`tab-pane fade`}  id="nav-2-2-accordion-default-hor-left-big-icons--4" role="tabpanel">
                                <form>
                                    <div className={`row ${classes.root}`}>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Company Name"
                                                style={{marginBottom: 10}}
                                                placeholder="Abraham"
                                                helperText="Company Name"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Email Address "
                                                style={{marginBottom: 10}}
                                                placeholder="Nwoke"
                                                helperText="Enter email address"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Select Category"
                                                style={{marginBottom: 10}}
                                                placeholder="abraham@gmail.com"
                                                helperText="Select Produce type"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="User Type"
                                                style={{marginBottom: 10}}
                                                placeholder="0244491485"
                                                helperText="Select user type"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Country"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsds"
                                                helperText="Select your country"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Region"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsdsd"
                                                helperText="Select region"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="City"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsdsds"
                                                helperText="Enter your city"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="Geolocation"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsdsds"
                                                helperText="Select your geolocation"
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <TextField
                                                label="About"
                                                style={{marginBottom: 10}}
                                                placeholder="sdsdsds"
                                                helperText="Tell us something about yourself"
                                                fullWidth
                                            />
                                        </div>
                                    </div>

                                    <div className="d-action-btn">
                                        <button className="btn">SAVE</button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        </DashboardLayout>
    )

}


export default DashboardIndex
