import Link from "next/link";
import MainHeader from "./../sections/headers/MainHeader";
import DashboardFarmerSidebar from "../sections/sidebars/DashboardFarmerSidebar";
import DashboardBuyerSidebar from "../sections/sidebars/DashboardBuyerSidebar";
import DashboardServiceProviderSidebar from "../sections/sidebars/DashboardServiceProviderSidebar";
import React from "react";

function DashboardLayout(props) {

    return (
        <div className="layout">
            <MainHeader/>
            <div className="wrapper">
                <div className="dashboard toggled">
                    <div className="dashboard-sidebar">
                        {
                            props.activeDashboard === "farmer" ?
                                <DashboardFarmerSidebar />
                                : null
                        }

                        {
                            props.activeDashboard === "buyer" ?
                                <DashboardBuyerSidebar />
                                : null
                        }

                        {
                            props.activeDashboard === "service-provider" ?
                                <DashboardServiceProviderSidebar />
                                : null
                        }

                    </div>
                    <div className="dashboard-content">
                        <div className="container-fluid">
                            {props.children}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboardLayout
