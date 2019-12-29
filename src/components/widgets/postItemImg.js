import Link from "next/link";
import React from "react";

function PostItemImg() {

    
    return (
        <div className="card post-item">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mr-2">
                            <img className="rounded-circle" width="45"
                                 src="/user.png" alt=""/>
                        </div>
                        <div className="ml-2 user-name">
                            <div className="name">Abraham Nwoke</div>
                            <div className="time"><i className="fa fa-clock-o"></i>10 min ago
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="dropdown">
                            <button className="btn btn-link dropdown-toggle" type="button"
                                    id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right"
                                 aria-labelledby="gedf-drop1">
                                <div className="h6 dropdown-header">Configuration</div>
                                <a className="dropdown-item" href="#">Save</a>
                                <a className="dropdown-item" href="#">Hide</a>
                                <a className="dropdown-item" href="#">Report</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="row post-imgs">
                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                                <img src="/img/1.jpg" alt=""/>
                            </div>
                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                                <img src="/img/3.jpg" alt=""/>
                            </div>
                            <div className="col-lg-12">
                                <img src="/img/2.jpg" alt=""/>
                            </div>
                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                                <img src="/img/5.jpg" alt=""/>
                            </div>
                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                                <img src="/img/4.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae
                                nulla rem eos ipsa praesentium esse magnam nemo dolor
                                sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste
                                voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae
                                nulla rem eos ipsa praesentium esse magnam nemo dolor
                                sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste
                                voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae
                                nulla rem eos ipsa praesentium esse magnam nemo dolor
                                sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste
                                voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae
                                nulla rem eos ipsa praesentium esse magnam nemo dolor
                                sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste
                                voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae
                                nulla rem eos ipsa praesentium esse magnam nemo dolor
                                sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste
                                voluptates.
                            </p>
                            <button className="btn tag-btn ">Hello Button</button>
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center">
                            <div className="actions">
                                <a href="#" className="card-link"><i className="fa fa-heart orange"></i> Like 100</a>
                                <a href="#" className="card-link"><i className="fa fa-comment pink"></i> Comment</a>
                                <a href="#" className="card-link"><i className="fa fa-share-alt blue"></i> Share</a>
                            </div>
                            <div className="">
                                <ul>

                                    <li><a href="#"><img
                                        src="/users/1.jpg"
                                        className="img-fluid rounded-circle" alt="User"/></a></li>
                                    <li><a href="#"><img
                                        src="/users/5.jpg"
                                        className="img-fluid rounded-circle" alt="User"/></a></li>
                                    <li><a href="#"><img
                                        src="/users/2.jpg"
                                        className="img-fluid rounded-circle" alt="User"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostItemImg