import React, {useEffect, useState} from 'react'
import Layout from "../components/Layout";
import '../public/static/styles.css'
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

function Home(props) {

    const [state, setState] = useState({
        show: false
    });

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
        <Layout>

            <Modal
                isOpen={state.show}
                /* onAfterOpen={afterOpenModal}*/
                onRequestClose={onCloseLoginModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                {/*<h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>*/}

                <div className="create-post-modal">
                    <div className="header">
                        <div className="d-flex justify-content-center  ">
                            <div className=" ">
                                <h1>Create Post</h1>
                            </div>
                            <div onClick={onCloseLoginModal} className="close-btn">
                                <i className="fa fa-close"></i>
                            </div>
                        </div>
                    </div>
                    <div className="body">
                         <div className="privacy-btn d-flex justify-content-start">
                              <h3>Sharing to</h3>
                             <button className="btn"><i className="fa fa-globe"></i> Public</button>
                         </div>
                        <div className="user d-flex justify-content-start">
                            <div className="mr-2">
                                <img className="rounded-circle" width="45"
                                     src="/user.png" alt=""/>
                            </div>
                            <div className="ml-2 user-name">
                                <div className="name">Abraham Nwoke</div>
                            </div>
                        </div>
                        <textarea  className="form-control post-text" id="message" rows="3"
                                  placeholder="What have you been up to, Abraham?"></textarea>
                    </div>
                    <div className="footer">
                        <button className="post-btn btn">Post</button>
                    </div>
                </div>
            </Modal>


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
                            <Profile/>
                            <FarmMedia/>
                            <Farmers/>
                        </div>


                        <div className="col-lg-7">

                            <div className="post-container">
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    onWritePost()
                                }} className="camera" href=""><i className="fa fa-camera"></i></a>
                                <img className="img" src="/2.jpg" alt=""/>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="/user.png" alt=""/>
                                    </div>
                                    <div className="card-body">
                                         <textarea onClick={onWritePost} className="form-control" id="message" rows="3"
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


                                <PostItemImg/>
                                <PostItemText/>
                                <PostItemImg/>


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
