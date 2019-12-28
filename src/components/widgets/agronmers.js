import Link from "next/link";
import React from "react";

function Agronmers() {

    
    return (
        <div className="widget agronmers card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <h3>Agronmers</h3>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-plus"></i></a>
                    </div>
                </div>

            </div>
            <div className="card-body">
                <div className="row media">
                    <div className="col-lg-6">
                        <img src="/img/1.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/3.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/4.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/5.jpg" alt=""/>
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

export default Agronmers