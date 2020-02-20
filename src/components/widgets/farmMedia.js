import Link from "next/link";
import React from "react";

function FarmMedia() {


    return (
        <div className="widget farm-media card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                         <h3>Farm Media</h3>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-plus"></i></a>
                    </div>
                </div>

            </div>
            <div className="card-body">
                <div className="row media">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6 ">
                         <div className="widget-content widget-video">
                             <img className="small-img" src="/img/6.png" alt=""/>
                         </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                        <div className="widget-content widget-video">
                            <img className="small-img" src="/img/dffd7.png" alt=""/>
                            <img className="overlay-img" src="/img/backgrounds/Rectangle 44.png" alt=""/>
                            <img className="play-btn-img" src="/img/icons/icons8_Play_48px.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="widget-content widget-video">
                            <img src="/img/4ww.png" alt=""/>
                            <img className="overlay-img" src="/img/backgrounds/Rectangle 44.png" alt=""/>
                            <img className="play-btn-img" src="/img/icons/icons8_Play_48px.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                        <img className="small-img" src="/img/8.png" alt=""/>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                        <img className="small-img" src="/img/2.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FarmMedia
