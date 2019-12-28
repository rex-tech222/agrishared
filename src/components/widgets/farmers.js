import Link from "next/link";
import React from "react";

function Farmers() {

    
    return (
        <div className="widget farmers card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <h3>Farmers</h3>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-plus"></i></a>
                    </div>
                </div>

            </div>
            <div className="card-body">
                <div className="row media">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                        <img src="/img/1.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                        <img src="/img/3.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                        <img src="/img/4.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                        <img src="/img/5.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                        <img src="/img/5.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                        <img src="/img/4.jpg" alt=""/>
                    </div>
                </div>

                <form className="search-form  " role="search">
                    <div className="input-group">
                        <button type="submit" className="btn"><span className="fa fa-search"></span>
                        </button>
                        <input type="text" className="search-box" placeholder="Search"/>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Farmers