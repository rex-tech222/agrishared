import Link from "next/link";
import React from "react";

function Profile() {

    
    return (
        <div className="widget profile card">
            <div className="card-body">
                <div className="img">
                    <img src="/user.png"/>
                </div>
                <h2 className="user-name">Abraham Nwoke</h2>
                <span className="user-position">Agronmer</span>
                <p className="user-desc"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt  </p>

                 <div className="files">
                     <h3>Title</h3>
                     <div className="row">
                         <div className="col-lg-4">
                             <div className="file orange-bg"><i className="fa fa-file-pdf-o"></i></div>
                         </div>
                         <div className="col-lg-4">
                             <div className="file blue-bg"><i className="fa fa-file-word-o"></i></div>
                         </div>
                         <div className="col-lg-4">
                             <div className="file green-bg"><i className="fa fa-file-excel-o"></i></div>
                         </div>
                         <div className="col-lg-4">
                             <div className="file blue-bg"><i className="fa fa-file-word-o"></i></div>
                         </div>
                         <div className="col-lg-4">
                             <div className="file green-bg"><i className="fa fa-file-excel-o"></i></div>
                         </div>
                         <div className="col-lg-4">
                             <div className="file gray-bg"><i className="fa fa-plus"></i></div>
                         </div>
                     </div>
                 </div>

                <button className="edit-btn btn"><i className="fa fa-pencil"></i> Edit Profile</button>
            </div>
        </div>
    )
}

export default Profile