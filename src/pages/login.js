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
                                <h1>Login into your Account</h1>
                                <p> </p>
                            </div>

                            <br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/>

                        </div>
                    </div>

                </div>
                </div>
                <PostItemText/>
            </Layout>
        )

}



export default LandLord
