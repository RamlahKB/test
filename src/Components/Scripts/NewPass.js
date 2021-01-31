import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {onNewPass} from './../Redux/Auth/authAct';

export default class NewPass extends Component {
    constructor()
    {
        super();
        this.state = { newPass : "", err1 : "", err2 : "" };
    }
    Handle=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    Valid=()=>{
        const {newPass} = this.state;
        let err1="", err2="", passRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,20}$/;
        if (newPass === "")
        {
            err1 = "*Please Enter Password";
        }
        if (newPass !== "" && !newPass.match(passRE))
        {
            err2 = "*Password should contain at least 8 characters and at most 20, at least one digit, one upper case alphabet, one lower case alphabet and no white spaces."
        }
        if (err1 || err2)
        {
            this.setState({
                err1, err2
            });     
            return false;       
        }
        return true;
    }
    Pass=()=>{
        const isValid = this.Valid();
        if (isValid)
        {
            const data = JSON.parse(localStorage.getItem('user'));
            data.password = this.state.newPass;
            localStorage.setItem('user',JSON.stringify(data));
        }      
        this.setState({ newPass : "", err1 : "", err2 : "" }); 
    }
    Logout=()=>{
        // localStorage.removeItem("user");
        this.props.history.push("/login");
    }
    render() {
        const data = JSON.parse(localStorage.getItem('user'));
        console.log(data.uname);
        const {newPass, err1, err2} = this.state;
        return (
            <div className="container mt-5">
                <div className="col-md-5 p-4">
                    <div className="row p-2">
                        <div className="col-md-6">Username :</div>
                        <div className="col-md-6">{data.uname}</div>
                    </div>
                    <div className="row p-2">
                        <div className="col-md-6">New Password :</div>
                        <div className="col-md-6">
                            <input type="password" className="form-control" value={newPass} name="newPass" onChange={this.Handle} />
                            <div className="validate">{err1}{err2}</div>
                        </div>
                    </div>
                </div> 
                <div>
                    <button type="button" className="btn btn-outline-secondary m-4" onClick={this.Pass} data-toggle="modal" data-target="#passChn">
                        Save Password
                    </button>
                    <Link type="button" className="btn btn-outline-secondary m-4" to="/login" onClick={this.Logout}>
                        Logout
                    </Link>
                </div>   
                <div className="modal fade" id="passChn" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-primary">
                                <h5 className="modal-title text-white">Delete</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="text-white" aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">
                                <p>Your Password has been Successfully Updated.</p>
                            </div>
                            <div className="modal-footer justify-content-center text-center">
                                <Link className="btn btn-sm btn-primary" data-dismiss="modal">Close</Link>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        )
    }
}
