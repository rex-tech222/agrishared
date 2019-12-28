import Link from "next/link";
import React from "react";

function AgroBusinesses() {

    
    return (
        <div className="widget agrobusinesses card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <h3>Agro Businesses</h3>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-plus"></i></a>
                    </div>
                </div>

            </div>
            <div className="card-body">
                <br/><br/><br/>
                <br/><br/><br/>
                <br/><br/><br/>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center">
                <div className="">
                    <button className="green-bg btn">  View All</button>
                </div>
            </div>
        </div>
    )
}

export default AgroBusinesses