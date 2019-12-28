import React,  { useEffect, useState } from 'react'
import Layout from "../components/Layout";
import PostItemText from "../components/widgets/postItemText";
import '../public/static/styles.css'
import $ from 'jquery';
import Link from "next/link";

function LandLord(props) {


    useEffect(() => {
         let text = ['home owner', 'vacating tenant'];
         let counter = 0;
         let Iam = $('#iam')

        setInterval(changIAm, 3000)
         function changIAm(){
             Iam.fadeOut(()=>{
                 Iam.html(text[counter]);
                 counter++
                 if(counter >= text.length){
                     counter = 0
                 }
                 Iam.fadeIn()
             })
         }
    });

        return (
            <Layout>
                <div className="main-content page">
                   <div className="container content">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-11">

                            <div className="heading">
                                <h1>Create your Account</h1>
                                <p>Landlords Registration</p>
                            </div>

                            <div className="form">
                                <div className="row d-flex justify-content-center">

                                    <div className="col-md-6 field">
                                        <label className="required"> First Name</label>
                                        <input className="form-control" type="text"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <label className="required"> Other Name</label>
                                        <input className="form-control" type="text"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <label className="required"> Email Address</label>
                                        <input className="form-control" type="text"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <label className="required"> Gender</label>
                                        <input className="form-control" type="text"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <label className="required"> Password</label>
                                        <input className="form-control" type="password"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <label className="required"> Confirm Password</label>
                                        <input className="form-control" type="password"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <button className="btn">JOIN NOW</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                </div>
                <PostItemText/>
            </Layout>
        )

}



export default LandLord
