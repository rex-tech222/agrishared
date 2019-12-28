import React, {useEffect, useState} from 'react'
import Layout from "../components/Layout";
import '../public/static/styles.css'
import $ from 'jquery';
import Link from "next/link";

import PostItemText from "../components/widgets/postItemText"
import PostItemImg from "../components/widgets/postItemImg"
import Profile from "../components/widgets/profile"
import FarmMedia from "../components/widgets/farmMedia"
import Farmers from "../components/widgets/farmers"
import MyWallet from "../components/widgets/myWallet"
import Agronmers from "../components/widgets/agronmers"
import Awards from "../components/widgets/awards"
import AgroBussinesses from "../components/widgets/agroBussinesses"

function Home(props) {


    useEffect(() => {
        let text = ['home owner', 'vacating tenant'];
        let counter = 0;
        let Iam = $('#iam')

        setInterval(changIAm, 3000)

        function changIAm() {
            Iam.fadeOut(() => {
                Iam.html(text[counter]);
                counter++
                if (counter >= text.length) {
                    counter = 0
                }
                Iam.fadeIn()
            })
        }
    });

    return (
        <Layout>
            <div className="main-content">


                <div className="top-header">
                    <div className="row">
                        <div className="col"><i className="fa fa-line-chart pink"></i> Menu1</div>
                        <div className="col"><i className="fa fa-comment green"></i> Menu2</div>
                        <div className="col"><i className="fa fa-firefox orange"></i> Menu3</div>
                        <div className="col"><i className="fa fa-ellipsis-v"></i> More</div>
                    </div>
                </div>

                <div className="container-fluid content">

                    <div className="row">

                        <div className="col-lg-3">
                           <Profile />
                           <FarmMedia />
                           <Farmers />
                        </div>


                        <div className="col-lg-7">

                            <div className="post-container">
                                <a className="camera" href=""><i className="fa fa-camera"></i></a>
                                <img className="img" src="/2.jpg" alt=""/>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="/user.png" alt=""/>
                                    </div>
                                    <div className="card-body">
                                         <textarea className="form-control" id="message" rows="3"
                                                   placeholder="What have you been up to?"></textarea>
                                        <div className="btn-toolbar justify-content-end">
                                                <button type="submit" className="btn  ">Tag A Farmer</button>
                                                <button type="submit" className="btn  ">Add Attachment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="posts">

                                <h1 className="title">Posts</h1>


                                <PostItemImg />
                                <PostItemText />
                                <PostItemImg />


                            </div>

                        </div>


                        <div className="col-lg-2">
                            <MyWallet/>
                            <Agronmers/>
                            <Awards/>
                            <AgroBussinesses/>
                        </div>
                    </div>

                </div>
            </div>
            <br/><br/><br/><br/>
        </Layout>
    )

}


export default Home
