import Link from "../../../lib/ActiveLink";
import $ from 'jquery'
import React, {useEffect} from "react";

function DashboardSidebar() {


    return (
        <ul className="sidebar-nav">

            <Link activeClassName="active" href="/dashboard-buyer">
                <li className="menu">
                    <a>
                        <i className="ti-bar-chart"></i>
                        Dashboard
                    </a>
                </li>
            </Link>

            <Link activeClassName="active" href="/dashboard-buyer/register">
                <li className="menu">
                    <a>
                        <i className="fa fa-dashboard"></i>
                        Register
                    </a>
                </li>
            </Link>

            <Link activeClassName="active" href="/dashboard-buyer/company-info">
                <li className="menu">
                    <a>
                        <i className="fa fa-building"></i>
                        Company Info
                    </a>
                </li>
            </Link>

            <Link activeClassName="active" href="/dashboard-buyer/certification">
                <li className="menu">
                    <a>
                        <i className="fa fa-certificate"></i>
                        Certification
                    </a>
                </li>
            </Link>

            <Link activeClassName="active" href="/dashboard-buyer/manage-farmers">
                <li className="menu">
                    <a>
                        <i className="ti-wallet"></i>
                        Manage Farmers
                    </a>
                </li>
            </Link>

            <li className="menu">
                <a href="#" data-toggle="collapse" data-target="#products" className="collapsed active">
                    <i className="fa fa-product-hunt"></i>
                    Products
                    <span className="fa fa-chevron-left pull-right dropdown-icon"></span>
                </a>
                <ul className="sub-menu collapse" id="products">
                    <Link activeClassName="active" href="/dashboard-buyer/products">
                        <li><a>View Products</a></li>
                    </Link>
                    <Link activeClassName="active" href="/dashboard-buyer/products/product-profile">
                        <li><a>Product Profile</a></li>
                    </Link>
                    <Link activeClassName="active" href="/dashboard-buyer/products/post-for-offtakers">
                        <li><a>Post For Offtakers</a></li>
                    </Link>

                </ul>
            </li>

            <Link activeClassName="active" activeClassName="active" href="/dashboard-buyer/finance">
                <li className="menu">
                    <a>
                        <i className="fa fa-dashboard"></i>
                        Finance
                    </a>
                </li>
            </Link>

            <Link activeClassName="active" href="/dashboard-buyer/agribusiness-support">
                <li className="menu">
                    <a>
                        <i className="fa fa-life-ring"></i>
                        Agribusiness Support
                    </a>
                </li>
            </Link>

            <Link activeClassName="active" href="/dashboard-buyer/settings">
                <li className="menu">
                    <a>
                        <i className="ti-settings"></i>
                        Settings
                    </a>
                </li>
            </Link>

        </ul>
    )
}

export default DashboardSidebar
