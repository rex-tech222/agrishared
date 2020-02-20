import React, {useEffect, useState} from 'react'
import DashboardLayout from "../../../components/layouts/DashboardLayout";

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';


function DashboardIndex(props) {


    return (
        <DashboardLayout  activeDashboard = "service-provider" >
           <div className="">
                 <h1>List of Products From Input Dealers</h1>
           </div>

            <img src="/img/sdsdsd.PNG" alt=""/>

        </DashboardLayout>
    )

}


export default DashboardIndex
