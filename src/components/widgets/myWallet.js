import Link from "next/link";
import React from "react";

function MyWallet() {

    
    return (
        <div className="widget mywallet card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <h3>My Wallet</h3>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-cc-visa"></i></a>
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
                    <button className="green-bg btn"><i className="fa fa-wrench"></i> Manage Wallet</button>
                </div>
            </div>
        </div>
    )
}

export default MyWallet