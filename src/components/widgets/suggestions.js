import Link from "next/link";
import React from "react";

function AgroBusinesses() {


    return (
        <div className="widget suggestions card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <h3>Suggestions</h3>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-plus"></i></a>
                    </div>
                </div>

            </div>
            <div className="card-body">

                <div className="row">
                    <div className="col-lg-2">
                        <img src="/img/4.jpg" alt=""/>
                    </div>
                    <div className="col-lg-7">
                        <h4>Abraham Nwoke</h4>
                    </div>
                    <div className="col-lg-3">
                        <button className="btn green-btn">Add</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2">
                        <img src="/img/4.jpg" alt=""/>
                    </div>
                    <div className="col-lg-7">
                        <h4>Abraham Nwoke</h4>
                    </div>
                    <div className="col-lg-3">
                        <button className="btn green-btn">Add</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2">
                        <img src="/img/4.jpg" alt=""/>
                    </div>
                    <div className="col-lg-7">
                        <h4>Abraham Nwoke</h4>
                    </div>
                    <div className="col-lg-3">
                        <button className="btn green-btn">Add</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2">
                        <img src="/img/4.jpg" alt=""/>
                    </div>
                    <div className="col-lg-7">
                        <h4>Abraham Nwoke</h4>
                    </div>
                    <div className="col-lg-3">
                        <button className="btn green-btn">Add</button>
                    </div>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center">
                <div className="">
                    <button className="green-bg btn view-all">  View All</button>
                </div>
            </div>
        </div>
    )
}

export default AgroBusinesses
