import React, {useEffect, useState} from 'react'
import DashboardLayout from "../../components/layouts/DashboardLayout";

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

function DashboardIndex(props) {


    const classes = useStyles();

    return (
        <DashboardLayout activeDashboard="service-provider">
           <div className="dashboard-register">
               <div className="container">

                   <div className="d-title-header">
                       <h1>Problem Posts</h1>
                   </div>

                   <div className="media g-brd-around widget question">
                       <div className="d-flex">
                           <div className="text-center">
                               <img className="d-block user-img  g-width-50 rounded-circle mCS_img_loaded g-height-50  " src="/img/1.jpg" alt="Image Description"/>
                               <br/>

                           </div>
                       </div>
                       <div className="media-body">
                           <div className=" header d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                               <div className="left">
                                   <h5 className="user-name h4 g-mr-10 g-mb-5 g-mb-0--sm">Abraham Nwoke</h5>
                                   <span className="loc">Accra, Ghana</span>
                                   <span className="date">23.05.2019</span>
                               </div>
                               <div className="right text-nowrap">
                                   <a className="btn green-bg" href="#!">Answer</a>
                               </div>
                           </div>
                           <h4 className="title">Skate Prevention</h4>
                           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel
                               metus scelerisque ante sollicitudin. Cras purus odio,
                               vestibulum in vulputate at, tempus viverra turpis. Fusce
                               condimentum nunc ac nisi vulputate fringilla.
                           </p>

                           <div className="d-flex justify-content-sm-between">
                               <ul className="rating">
                                   <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_Half_Empty_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_30px.png" alt=""/></li>
                               </ul>
                               <ul className="list-inline my-0 reactions">
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Banana_48px.png" alt=""/></li> Like 15
                                       </a>
                                   </li>
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Comments_30px.png" alt=""/></li> Responds 14
                                       </a>
                                   </li>
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Chili_Pepper_48px.png" alt=""/></li> Dislikes 0
                                       </a>
                                   </li>
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Detective_24px.png" alt=""/></li> viewss 1
                                       </a>
                                   </li>
                               </ul>
                           </div>

                       </div>
                   </div>

                   <div className="media g-brd-around widget question">
                       <div className="d-flex">
                           <div className="text-center">
                               <img className="d-block user-img  g-width-50 rounded-circle mCS_img_loaded g-height-50  " src="/img/1.jpg" alt="Image Description"/>
                               <br/>

                           </div>
                       </div>
                       <div className="media-body">
                           <div className=" header d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                               <div className="left">
                                   <h5 className="user-name h4 g-mr-10 g-mb-5 g-mb-0--sm">Abraham Nwoke</h5>
                                   <span className="loc">Accra, Ghana</span>
                                   <span className="date">23.05.2019</span>
                               </div>
                               <div className="right text-nowrap">
                                   <a className="btn green-bg" href="#!">Answer</a>
                               </div>
                           </div>
                           <h4 className="title">Skate Prevention</h4>
                           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel
                               metus scelerisque ante sollicitudin. Cras purus odio,
                               vestibulum in vulputate at, tempus viverra turpis. Fusce
                               condimentum nunc ac nisi vulputate fringilla.
                           </p>

                           <div className="d-flex justify-content-sm-between">
                               <ul className="rating">
                                   <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_Half_Empty_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_30px.png" alt=""/></li>
                               </ul>
                               <ul className="list-inline my-0 reactions">
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Banana_48px.png" alt=""/></li> Like 15
                                       </a>
                                   </li>
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Comments_30px.png" alt=""/></li> Responds 14
                                       </a>
                                   </li>
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Chili_Pepper_48px.png" alt=""/></li> Dislikes 0
                                       </a>
                                   </li>
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Detective_24px.png" alt=""/></li> viewss 1
                                       </a>
                                   </li>
                               </ul>
                           </div>

                       </div>
                   </div>

                   <div className="media g-brd-around widget question">
                       <div className="d-flex">
                           <div className="text-center">
                               <img className="d-block user-img  g-width-50 rounded-circle mCS_img_loaded g-height-50  " src="/img/1.jpg" alt="Image Description"/>
                               <br/>

                           </div>
                       </div>
                       <div className="media-body">
                           <div className=" header d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                               <div className="left">
                                   <h5 className="user-name h4 g-mr-10 g-mb-5 g-mb-0--sm">Abraham Nwoke</h5>
                                   <span className="loc">Accra, Ghana</span>
                                   <span className="date">23.05.2019</span>
                               </div>
                               <div className="right text-nowrap">
                                   <a className="btn green-bg" href="#!">Answer</a>
                               </div>
                           </div>
                           <h4 className="title">Skate Prevention</h4>
                           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel
                               metus scelerisque ante sollicitudin. Cras purus odio,
                               vestibulum in vulputate at, tempus viverra turpis. Fusce
                               condimentum nunc ac nisi vulputate fringilla.
                           </p>

                           <div className="d-flex justify-content-sm-between">
                               <ul className="rating">
                                   <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_Half_Empty_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_30px.png" alt=""/></li>
                               </ul>
                               <ul className="list-inline my-0 reactions">
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Banana_48px.png" alt=""/></li> Like 15
                                       </a>
                                   </li>
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Comments_30px.png" alt=""/></li> Responds 14
                                       </a>
                                   </li>
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Chili_Pepper_48px.png" alt=""/></li> Dislikes 0
                                       </a>
                                   </li>
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Detective_24px.png" alt=""/></li> viewss 1
                                       </a>
                                   </li>
                               </ul>
                           </div>

                       </div>
                   </div>

                   <div className="media g-brd-around widget question">
                       <div className="d-flex">
                           <div className="text-center">
                               <img className="d-block user-img  g-width-50 rounded-circle mCS_img_loaded g-height-50  " src="/img/1.jpg" alt="Image Description"/>
                               <br/>

                           </div>
                       </div>
                       <div className="media-body">
                           <div className=" header d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                               <div className="left">
                                   <h5 className="user-name h4 g-mr-10 g-mb-5 g-mb-0--sm">Abraham Nwoke</h5>
                                   <span className="loc">Accra, Ghana</span>
                                   <span className="date">23.05.2019</span>
                               </div>
                               <div className="right text-nowrap">
                                   <a className="btn green-bg" href="#!">Answer</a>
                               </div>
                           </div>
                           <h4 className="title">Skate Prevention</h4>
                           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel
                               metus scelerisque ante sollicitudin. Cras purus odio,
                               vestibulum in vulputate at, tempus viverra turpis. Fusce
                               condimentum nunc ac nisi vulputate fringilla.
                           </p>

                           <div className="d-flex justify-content-sm-between">
                               <ul className="rating">
                                   <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_Filled_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_Half_Empty_30px.png" alt=""/></li>
                                   <li><img src="/img/icons/icons8_Star_30px.png" alt=""/></li>
                               </ul>
                               <ul className="list-inline my-0 reactions">
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Banana_48px.png" alt=""/></li> Like 15
                                       </a>
                                   </li>
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Comments_30px.png" alt=""/></li> Responds 14
                                       </a>
                                   </li>
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Chili_Pepper_48px.png" alt=""/></li> Dislikes 0
                                       </a>
                                   </li>
                                   <li className="list-inline-item g-mr-20">
                                       <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                                           <li><img src="/img/icons/icons8_Detective_24px.png" alt=""/></li> viewss 1
                                       </a>
                                   </li>
                               </ul>
                           </div>

                       </div>
                   </div>


               </div>
           </div>
        </DashboardLayout>
    )

}


export default DashboardIndex
