import React,  { useEffect, useState } from 'react'
import Layout from "../components/Layout";
import PostItemText from "../components/widgets/postItemText";
import '../public/static/styles.css'
import $ from 'jquery';
import Link from "next/link";

function LandLord(props) {

    const [state, setState] = useState({

        showFrom: false,

    });

    useEffect(() => {
         let text = ['home owner', 'vacating tenant'];
         let counter = 0;
         let Iam = $('#iam')

        setInterval(changIAm, 3000)
         function changIAm(){
             Iam.fadeOut(()=>{
                 Iam.html(text[counter]);
                 counter++
                 if(counter >= text.length){
                     counter = 0
                 }
                 Iam.fadeIn()
             })
         }
    });

    const onChangeAdd = (value, e) =>{
        e.persist()

        setState(state => ({
            ...state,
            showFrom: value
        }))
      console.log(value)
    }

        return (
            <Layout>
                <div className="main-content page">
                   <div className="container content">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-11">

                            <div className="heading">
                                <h1>Create your Account</h1>
                                <p>Accommodation Seekers and Tenants Registration</p>
                            </div>

                            <div className="form">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-6 field">
                                        <label className="required"> First Name</label>
                                        <input className="form-control" type="text"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <label className="required"> Other Name</label>
                                        <input className="form-control" type="text"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <label className="required"> Email Address</label>
                                        <input className="form-control" type="text"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <label className="required"> Gender</label>
                                        <input className="form-control" type="text"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <label className="required"> Password</label>
                                        <input className="form-control" type="password"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <label className="required"> Confirm Password</label>
                                        <input className="form-control" type="password"/>
                                    </div>

                                    <div className="col-md-12 field d-flex justify-content-between">
                                        <label className="label required"> Where to now?</label>
                                        <div className="radio-btns">
                                            <div className="radio d-inline-block">
                                                <input id="yes" value="yes" onClick={onChangeAdd.bind(this, true)} name="radio" type="radio"   />
                                                <label htmlFor="yes" className="radio-label">Yes</label>
                                            </div>
                                            <div className="radio d-inline-block">
                                                <input id="no" value="no" onClick={onChangeAdd.bind(this, false)} name="radio" type="radio"   />
                                                <label htmlFor="no" className="radio-label">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { state.showFrom &&
                                <div className="row d-flex justify-content-center ">
                                    <div className="col-md-6 field">
                                        <label className="required"> A</label>
                                        <input className="form-control" type="text"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <label className="required"> B</label>
                                        <input className="form-control" type="text"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <label className="required"> C </label>
                                        <input className="form-control" type="text"/>
                                    </div>

                                    <div className="col-md-6 field">
                                        <label className="required"> D </label>
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>
                                }
                                <div className="row d-flex justify-content-center">
                                <div className="col-md-6 field t">
                                    <button className="btn">JOIN NOW</button>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                </div>
                <PostItemText/>
            </Layout>
        )

}



export default LandLord
