import Link from "next/link";
import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import $ from 'jquery';

import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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

function NewPostWidget(props) {




    const [state, setState] = useState({
        show: false
    });

    useEffect(() => {

    });

    const onCloseLoginModal = (e) => {
        e.preventDefault();
        $('body').removeClass('app-modal-show');
        setState(state => ({
            ...state,
            show: false
        }))
    };

    const onWritePost = () => {
        $('body').addClass('app-modal-show');
        setState(state => ({
            ...state,
            show: true
        }))
    };

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

    const [name, setName] = React.useState('Composed TextField');
    const classes = useStyles();

    const handleChange = event => {
        setName(event.target.value);
    };


    return (
        <div>

            <div className={`app-modal ${ state.show? "show" : "hide"}`}>
                <div onClick={onCloseLoginModal} className="app-modal-Overlay"></div>
                <a href="#" onClick={onCloseLoginModal} className="close-btn"><i className="fa fa-times"></i></a>
                <div className="app-modal-content create-post-modal">
                    <div className="user-section">
                        <img src="/img/4.jpg" alt=""/> <h4>Abraham Nwoke</h4>
                    </div>

                    <ul class="nav nav-justified u-nav-v5-1 u-nav-primary g-brd-bottom--md g-brd-gray-light-v4" role="tablist" data-target="nav-5-1-primary-hor-justified-border-bottom" data-tabs-mobile-type="slide-up-down" data-btn-classes="btn btn-md btn-block u-btn-outline-primary">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#tap1" role="tab">Sell</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tap2" role="tab">Buy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tap3" role="tab">Find</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tap4" role="tab">Share</a>
                        </li>
                    </ul>

                    <div id="nav-5-1-primary-hor-justified-border-bottom" class="tab-content g-pt-20">
                        <div className="tab-pane fade show active" id="tap1" role="tabpanel">
                            <div  className={`row ${classes.root}`}>
                                <div  className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                       // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                            </div>
                           <div className="text-center">
                               <button className="btn submit-post-btn">Submit Post</button>
                           </div>
                        </div>
                        <div className="tab-pane fade  " id="tap2" role="tabpanel">
                            <div  className={`row ${classes.root}`}>
                                <div  className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn submit-post-btn">Submit Post</button>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="tap3" role="tabpanel">
                            <div  className={`row ${classes.root}`}>
                                <div  className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn submit-post-btn">Submit Post</button>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tap4" role="tabpanel">
                            <div  className={`row ${classes.root}`}>
                                <div  className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="standard-full-width"
                                        // label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Name"
                                        helperText="Some important helper text!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn submit-post-btn">Submit Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="post-container ">

                <a onClick={(e) => {
                    e.preventDefault();
                    onWritePost()
                }} className="camera" href=""><i className="fa fa-camera"></i></a>
                <img className="img" src="/img/12818936.png" alt=""/>

                <div className="card">
                    <div className="card-header">
                        <img src="/user.png" alt=""/>
                    </div>
                    <div className="card-body">
                                         <textarea onClick={onWritePost} className="form-control" id="message" rows="3"
                                                   placeholder="What have you been up to?"></textarea>
                        <div className="btn-toolbar justify-content-end">
                            <button type="submit" className="btn  ">Tag A Farmer</button>
                            <button type="submit" className="btn  ">Add Attachment</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewPostWidget
