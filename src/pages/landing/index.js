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
        <LandingPageLayout >
             <div className="quick-find">
            <img className="quick-find-bg" src="/img/find-bg.png" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <h3 className="heading">Connect. Buy. Share. Resources & Information.</h3>
                            <p className="desc">
                                Agrishared is multi-stakeholders’ platform inspired by farmers. It enables farmers,
                                agribusinesses, agritechs and other stakeholders
                                in the agricultural value chain to connect, transact and share resources &
                                information with over 200 million farmers in Africa.
                            </p>

                            <div className="text-left mb-3 ">
                                <a className="u-link-v5 g-brd-around   green-bg g-font-size-12 rounded g-px-10 g-py-5" href="#!">Sign Up for free</a>
                            </div>

                            <div className="progressing">
                                <Progress strokeColor="#eea90e" type="circle" percent={20} format={percent => `${percent} Buyers`} />
                                <Progress strokeColor="#eea90e" type="circle"   percent={50} format={percent => `${percent} Farmers`} />
                                <Progress strokeColor="#eea90e" type="circle" percent={75} format={percent => `${percent} Products`} />
                            </div>
                        </div>

                        <div className="push-md-2 pull-right col-md-6 col-lg-6 find ">
                               <div className="g-pl-100--lg">
                                   <div className="">
                                       <h3 className="heading">Quick Find</h3>
                                       <Form
                                           // onSubmit={this.handleSubmit}
                                           className="find-form">
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
                                   </div>
                               </div>
                            <FindUserClientSlider />
                        </div>
                    </div>
                </div>
             </div>


             <div className="connect">
                 <h3 className="heading">Don’t miss out, connect, share and earn.</h3>
                 <div className="container d-flex justify-content-center ">
                    <div className="col-md-9 col-sm-12">
                        <div className="service">
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-4 service-title">
                                     <img src="/img/icons8_Service_Bell_96px.png" />
                                    <h4>INVEST IN AGRICULTURE</h4>
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-8 service-desc">
                                    <p>
                                        Farm like a <b>BOSS</b>. Keep your hands off the dirt and let’s get it done for you.
                                    </p>
                                    <button className="btn">Invest now</button>
                                </div>
                            </div>
                        </div>
                        <div className="service">
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-4 service-title">
                                <img src="/img/icons8_Knowledge_Sharing_96px.png" />
                                    <h4>  BUY COMMODITIES </h4>
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-8 service-desc">
                                    <p>Get consistent supply that meets your standard. Engage over 200 million well
                                        trained and organized professional farmers across Africa</p>
                                    <button className="btn">Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <img className={`connect-left-img `}  src="/img/7-bg-shapes.png" />
                 <button className="btn explore-btn">EXPLORE   <i className="fa fa-long-arrow-right"></i></button>
             </div>


             <div className="faqs">

                 <div className="heading-block">
                     <h3 className="heading">FAQS</h3>
                     <p>Hello, how can we help you?</p>
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
                                                      <span>What is the meaning of Agrishared? </span>
                                                     <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                     <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                                 </a>
                                             <div id="menu1" className="collapse">
                                                 <div className="card-body">
                                                     Agrishared means sharing and collaborative platform for agriculture
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
                                                 <span>What is the main aim of Agrishared? </span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu2" className="collapse">
                                                 <div className="card-body">
                                                     Our aim is to empower African farmers to feed the world and encourage youth into agriculture.
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
                                                 <span>How do I join Agrishared platform?</span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu3" className="collapse">
                                                 <div className="card-body">
                                                     Log on to <a href="www.agrishared.com">www.agrishared.com</a> and click on signup. Fill the form, verify your email/phone number and then login to join.
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
                                                 <span> How do I publish a post on Agrishared?  </span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu4" className="collapse">
                                                 <div className="card-body">
                                                     Login to the Agrishared platform, then click on publish or create a post.
                                                     A popup will appear, enter your post, attach image, document, video, etc. if you like and then click submit.
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
                                                 <span> How to I post to sell/buy or share information on Agrishared?  </span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu5" className="collapse">
                                                 <div className="card-body">
                                                     When publishing / creating a post, you select whether to post to sell/buy/share/find.
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
                                                 <span>  When do I use sell/buy/share/ find when posting on Agrishared platform?  </span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu6" className="collapse">
                                                 <div className="card-body">
                                                     We use sell when we want to sell something on the platform, buy when we are looking
                                                     for something to buy, share when we want to share information and find when we want to find information.
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
                                                 <span>  Is it free to join Agrishared platform?  </span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu7" className="collapse">
                                                 <div className="card-body">
                                                     Its free to join but charges may apply depending on what you want to do.
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
                                                 <span>How do I contact Agrishared? </span>
                                                 <span className="collapsed"> <i className="fa fa-angle-down"></i></span>
                                                 <span className="expanded"> <i className="fa fa-angle-up"></i></span>
                                             </a>
                                             <div id="menu8" className="collapse">
                                                 <div className="card-body">
                                                     You can contact Agrishared via email: info@agrishared.com, phone: +233 54 683 1162 / +233 54 238 6156 or via social media @agrishared.
                                                 </div>
                                             </div>
                                         </div>
                                     </div>

                                 </div>




                             </div>

                         </div>
                     </div>
                 <Link href="/landing/faqs">
                     <button className="btn more-btn">VIEW MORE   <i className="fa fa-long-arrow-right"></i></button>
                 </Link>
             </div>


             <div className="stay-in-touch">
             <img className="stay-in-touch-bg" src="/img/4.png" />
                 <div className="stay-in-touch-bg-overlay" ></div>
                 <div className="heading-block">
                     <h3 className="heading">STAY IN TOUCH</h3>
                     <p>Don’t miss out anything from us. Subscribe Now.</p>
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
