import Link from "next/link";
import React from "react";

function Profile() {


    return (
        <div className="widget profile card">
            <div className="card-body">
                <div className="img">
                    <img src="/user.png"/>
                </div>
                 <Link href="/profile">
                     <h2 className="user-name"><a>Abraham Nwoke</a></h2>
                 </Link>
                <span className="user-position">Agronomist</span>
                <p className="user-desc">We are the first and the only agri-social platform enabling you to help finance and improve agri-business.</p>

                 <div className="files">
                     <h3>Certificates</h3>
                     <div className="row">
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4 col-4">
                             <div className="file orange-bg">
                                 <img src="/img/icons/icons8_PDF_48px.png" alt=""/>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4 col-4">
                             <div className="file blue-bg">
                                 <img src="/img/icons/icons8_Word_48px.png" alt=""/>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4 col-4">
                             <div className="file green-bg">
                                 <img src="/img/icons/icons8_XLS_48px.png" alt=""/>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4 col-4">
                             <div className="file blue-bg">
                                 <img src="/img/icons/icons8_Word_48px.png" alt=""/>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4 col-4">
                             <div className="file green-bg">
                                 <img src="/img/icons/icons8_XLS_48px.png" alt=""/>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4 col-4">
                             <div className="file gray-bg">
                                 <img src="/img/icons/icons8_Plus_Math_24px.png" alt=""/>
                             </div>
                         </div>
                     </div>
                 </div>

                <button className="edit-btn btn"><i className="fa fa-pencil"></i> Edit Profile</button>
            </div>
        </div>
    )
}

export default Profile
