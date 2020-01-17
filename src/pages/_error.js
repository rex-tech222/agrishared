import React, {useEffect, useState} from 'react'
import MainLayout from "../components/layouts/MainLayout";

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';



function Error(props) {


    return (
        <MainLayout>

                <h1>Page Not Found 404</h1>
            <br/><br/><br/><br/>
        </MainLayout>
    )

}


export default Error
