import React, {useEffect, useState, useRef } from 'react'
import LandingPageLayout from "../../components/layouts/LandingPageLayout";
import FindUserClientSlider from "../../components/widgets/landing-page/FindUserClientSlider";

import $ from 'jquery';
import Link from "next/link";
import Modal from 'react-modal';

import Slider from "react-slick";

import { Collapse, Form, Button, Select, Input, Icon, Progress } from 'antd';
const InputGroup = Input.Group;
const { Panel } = Collapse;
const { Option } = Select;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};

function Home(props) {

    const [state, setState] = useState({
        show: false
    });


    const onCloseLoginModal = (e) => {
        e.preventDefault();
        setState(state => ({
            ...state,
            show: false
        }))
    }

    const onWritePost = () => {
        setState(state => ({
            ...state,
            show: true
        }))
    }

    function onChange(value) {
        console.log(`selected ${value}`);
    }


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    let slider = useRef()
    const  next = () => {
        slider.slickNext();
    };

    const previous = () => {
        slider.slickPrev();
    };
    const settings = {
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 4000,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <LandingPageLayout>
             <div className="quick-find">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <h3 className="heading">Connect. Share. <br/> Resources & Information</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                            <div className="progressing">
                                <Progress strokeColor="#eea90e" type="circle" percent={20} format={percent => `${percent} Buyers`} />
                                <Progress strokeColor="#eea90e" type="circle"   percent={50} format={percent => `${percent} Farmers`} />
                                <Progress strokeColor="#eea90e" type="circle" percent={75} format={percent => `${percent} Products`} />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6 find">
                           <div>
                               <h3 className="heading">Quick Find</h3>

                               <Form
                                   // onSubmit={this.handleSubmit}
                                   className="login-form">
                                   <Form.Item
                                       //style={{ width: 250 }}
                                   >
                                       <InputGroup compact>
                                           <Icon className="icon" style={{ width: '10%' }} type="user" />
                                           <Select
                                               showSearch
                                               style={{ width: '90%' }}
                                               placeholder="Finder Buyer/Farmer"
                                               optionFilterProp="children"
                                               onChange={onChange}
                                               filterOption={(input, option) =>
                                                   option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                               }
                                           >
                                               <Option value="jack">Jack</Option>
                                               <Option value="lucy">Lucy</Option>
                                               <Option value="tom">Tom</Option>
                                           </Select>
                                       </InputGroup>
                                   </Form.Item>
                                   <Form.Item>
                                       <InputGroup compact>
                                           <Icon className="icon" style={{ width: '10%' }} type="environment" />
                                           <Select
                                               showSearch
                                               style={{ width: '90%' }}
                                               placeholder="Finder Buyer/Farmer"
                                               optionFilterProp="children"
                                               onChange={onChange}
                                               filterOption={(input, option) =>
                                                   option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                               }
                                           >
                                               <Option value="jack">Jack</Option>
                                               <Option value="lucy">Lucy</Option>
                                               <Option value="tom">Tom</Option>
                                           </Select>
                                       </InputGroup>
                                   </Form.Item>
                                   <Form.Item>
                                       <Button
                                           style={{ width: '100%' }}
                                           type="primary" htmlType="submit" className="find-button">
                                          Find Now
                                       </Button>
                                   </Form.Item>
                               </Form>

                               <FindUserClientSlider />

                           </div>
                        </div>
                    </div>
                </div>
             </div>


             <div className="connect">
                 <h3 className="heading">JOIN TO CONNECT, <br/> SHARE & EARN</h3>
                 <div className="container d-flex justify-content-center ">
                    <div className="col-md-9 col-sm-11">
                        <div className="service">
                            <div className="row">
                                <div className="col-md-4 col-lg-4 service-title">
                                    <i className="fa fa-bell"></i>
                                    <h4>PROVIDE <br/> SERVICES</h4>
                                </div>
                                <div className="col-md-8 col-lg-8 service-desc">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries,
                                        but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <button className="btn">Button</button>
                                </div>
                            </div>
                        </div>
                        <div className="service">
                            <div className="row">
                                <div className="col-md-4 col-lg-4 service-title">
                                    <i className="fa fa-briefcase"></i>
                                    <h4>PROVIDE <br/> SERVICES</h4>
                                </div>
                                <div className="col-md-8 col-lg-8 service-desc">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries,
                                        but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <button className="btn">Button</button>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <button className="btn explore-btn">EXPLORE   <i className="fa fa-long-arrow-right"></i></button>
             </div>


             <div className="faqs">

                 <div className="heading-block">
                     <h3 className="heading">FAQS</h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                 </div>

                     <div className="container d-flex justify-content-center ">
                         <div className="col-md-9">

                             <div id="accordion">

                                 <div className="row">

                                     <div className="col-md-6 col-lg-6">
                                         <div className="card">
                                                 <a className="card-header d-flex justify-content-between"
                                                    data-toggle="collapse"
                                                    href="#menu1"
                                                    aria-expanded="true"
                                                    aria-controls="menu1">
                                                      <span> Menu 1</span>
                                                     <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                     <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                                 </a>
                                             <div id="menu1" className="collapse">
                                                 <div className="card-body">
                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                     when an unknown printer took a galley of type and scrambled it
                                                     to make a type specimen book. It has survived not only five centuries,
                                                     but also the leap into
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-lg-6">
                                         <div className="card">
                                             <a className="card-header d-flex justify-content-between"
                                                data-toggle="collapse"
                                                href="#menu2"
                                                aria-expanded="true"
                                                aria-controls="menu2">
                                                 <span> Menu 2</span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu2" className="collapse">
                                                 <div className="card-body">
                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                     when an unknown printer took a galley of type and scrambled it
                                                     to make a type specimen book. It has survived not only five centuries,
                                                     but also the leap into
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-lg-6">
                                         <div className="card">
                                             <a className="card-header d-flex justify-content-between"
                                                data-toggle="collapse"
                                                href="#menu3"
                                                aria-expanded="true"
                                                aria-controls="menu3">
                                                 <span> Menu 3</span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu3" className="collapse">
                                                 <div className="card-body">
                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                     when an unknown printer took a galley of type and scrambled it
                                                     to make a type specimen book. It has survived not only five centuries,
                                                     but also the leap into
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-lg-6">
                                         <div className="card">
                                             <a className="card-header d-flex justify-content-between"
                                                data-toggle="collapse"
                                                href="#menu4"
                                                aria-expanded="true"
                                                aria-controls="menu4">
                                                 <span> Menu 4</span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu4" className="collapse">
                                                 <div className="card-body">
                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                     when an unknown printer took a galley of type and scrambled it
                                                     to make a type specimen book. It has survived not only five centuries,
                                                     but also the leap into
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-lg-6">
                                         <div className="card">
                                             <a className="card-header d-flex justify-content-between"
                                                data-toggle="collapse"
                                                href="#menu5"
                                                aria-expanded="true"
                                                aria-controls="menu5">
                                                 <span> Menu 5</span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu5" className="collapse">
                                                 <div className="card-body">
                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                     when an unknown printer took a galley of type and scrambled it
                                                     to make a type specimen book. It has survived not only five centuries,
                                                     but also the leap into
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-lg-6">
                                         <div className="card">
                                             <a className="card-header d-flex justify-content-between"
                                                data-toggle="collapse"
                                                href="#menu6"
                                                aria-expanded="true"
                                                aria-controls="menu6">
                                                 <span> Menu 6</span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu6" className="collapse">
                                                 <div className="card-body">
                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                     when an unknown printer took a galley of type and scrambled it
                                                     to make a type specimen book. It has survived not only five centuries,
                                                     but also the leap into
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-lg-6">
                                         <div className="card">
                                             <a className="card-header d-flex justify-content-between"
                                                data-toggle="collapse"
                                                href="#menu7"
                                                aria-expanded="true"
                                                aria-controls="menu7">
                                                 <span> Menu 7</span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu7" className="collapse">
                                                 <div className="card-body">
                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                     when an unknown printer took a galley of type and scrambled it
                                                     to make a type specimen book. It has survived not only five centuries,
                                                     but also the leap into
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-lg-6">
                                         <div className="card">
                                             <a className="card-header d-flex justify-content-between"
                                                data-toggle="collapse"
                                                href="#menu8"
                                                aria-expanded="true"
                                                aria-controls="menu8">
                                                 <span> Menu 8</span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu8" className="collapse">
                                                 <div className="card-body">
                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                     when an unknown printer took a galley of type and scrambled it
                                                     to make a type specimen book. It has survived not only five centuries,
                                                     but also the leap into
                                                 </div>
                                             </div>
                                         </div>
                                     </div>

                                 </div>




                             </div>

                         </div>
                     </div>

             </div>


             <div className="stay-in-touch">
                 <div className="heading-block">
                     <h3 className="heading">STAY IN TOUCH</h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                 </div>
                 <div className="container d-flex justify-content-center ">
                     <div className="col-md-5">
                         <Input addonBefore={<Icon type="mail" />}
                                addonAfter={<Icon type="edit" />}
                                placeholder="enter your email address"
                         />
                     </div>
                 </div>
             </div>


        </LandingPageLayout>
    )

}


export default Home
