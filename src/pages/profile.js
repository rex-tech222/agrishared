import React, {useEffect, useState} from 'react'
import MainLayout from "../components/layouts/MainLayout";
import {NextSeo} from 'next-seo';
import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';

import PostItemText from "../components/widgets/postItemText"
import PostItemImg from "../components/widgets/postItemImg"
import Profile from "../components/widgets/profile"
import FarmMedia from "../components/widgets/farmMedia"
import Farmers from "../components/widgets/farmers"
import MyWallet from "../components/widgets/myWallet"
import Agronmers from "../components/widgets/agronmers"
import Awards from "../components/widgets/awards"
import AgroBussinesses from "../components/widgets/agroBussinesses"
import Suggestions from "../components/widgets/suggestions"
import ProfileNewPostWidget from "../components/widgets/socialWidgets/ProfileNewPostWidget"

function Home(props) {

    const [state, setState] = useState({
        show: false
    });

    useEffect(() => {

    });

    const onCloseLoginModal = (e) => {
        e.preventDefault();
        setState(state => ({
            ...state,
            show: false
        }))
    }

    const onWritePost = () => {
        setState(state => ({
            ...state,
            show: true
        }))
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };


    return (
        <MainLayout>

            <NextSeo
                title="Time Feeds - Agrishared"
                description="This example uses more of the available config options."
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Open Graph Title',
                    description: 'Open Graph Description',
                    images: [
                        {
                            url: 'https://www.example.ie/og-image-01.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                        },
                        {
                            url: 'https://www.example.ie/og-image-02.jpg',
                            width: 900,
                            height: 800,
                            alt: 'Og Image Alt Second',
                        },
                        {url: 'https://www.example.ie/og-image-03.jpg'},
                        {url: 'https://www.example.ie/og-image-04.jpg'},
                    ],
                    site_name: 'SiteName',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

            <div className="main-content">

                <div className="top-header">
                    <div className="row">
                        <div className="col">
                           <Link href="/">
                               <a>
                                   <i className="fa fa-line-chart pink"></i>Time feeds
                               </a>
                           </Link>
                        </div>
                        <div className="col">
                            <Link href="/about">
                                <a>
                                    <i className="fa fa-comment green"></i>About
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="/mange-farmers">
                                <a>
                                    <i className="fa fa-firefox orange"></i>Manage farmers
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="/more">
                                <a>
                                    <i className="fa fa-ellipsis-v"></i>More
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid content">

                    <div className="row">

                        <div className="col-lg-3">
                            <Profile/>
                            <FarmMedia/>
                            <Farmers/>
                            <Suggestions/>
                        </div>


                        <div className="col-lg-7">

                            {/*  This the section where a user submits a new post on the home page*/}
                            <ProfileNewPostWidget active="profile" />


                            <div className="posts">

                                <h1 className="title">Posts</h1>

                                <PostItemImg/>
                                <PostItemText/>
                                <PostItemImg/>
                                <PostItemText/>

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
        </MainLayout>
    )

}


export default Home
