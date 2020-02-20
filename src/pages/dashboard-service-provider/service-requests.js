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
                       <h1>Registration</h1>
                   </div>

                     <h1>Service request</h1>

                   <div className="d-action-btn">
                       <button className="btn">Save</button>
                   </div>

               </div>
           </div>
        </DashboardLayout>
    )

}


export default DashboardIndex
