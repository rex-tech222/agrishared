import Link from "next/link";
import React from "react";

function Awards() {

    
    return (
        <div className="widget awards card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <h3>Awards</h3>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-plus"></i></a>
                    </div>
                </div>

            </div>
            <div className="card-body">
                <div className="files">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                            <div className="file blue-bg"><i className="fa fa-hourglass-end"></i></div>
                        </div>
                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                            <div className="file green-bg"><i className="fa fa-hourglass-end"></i></div>
                        </div>
                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                            <div className="file blue-bg"><i className="fa fa-hourglass-end"></i></div>
                        </div>
                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                            <div className="file green-bg"><i className="fa fa-hourglass-end"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center">
                <div className="">
                    <button className="green-bg btn">  View All</button>
                </div>
            </div>
        </div>
    )
}

export default Awards