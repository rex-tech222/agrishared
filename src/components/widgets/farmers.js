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
                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                        <img className="small-img" src="/img/1.png" alt=""/>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                        <img className="small-img" src="/img/7.png" alt=""/>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                        <img className="small-img" src="/img/sss3.png" alt=""/>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                        <img className="small-img" src="/img/8.png" alt=""/>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                        <img className="small-img" src="/img/3.png" alt=""/>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                        <img className="small-img" src="/img/5.png" alt=""/>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                        <img className="small-img" src="/img/23234.png" alt=""/>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                        <img className="small-img" src="/img/23235.png" alt=""/>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                        <img className="small-img" src="/img/232.png" alt=""/>
                    </div>
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
    )
}

export default Farmers
