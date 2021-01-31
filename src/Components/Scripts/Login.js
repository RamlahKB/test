import React, { Component } from 'react';
import {onLogin} from './../Redux/Auth/authAct';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import LogErr from './LogErr';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={ uname : "", password : "", err1 : "", err2 : "", err3 : ""}
    }
    Handle=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    Valid=()=>{
        const {uname, password} = this.state;
        let err1="", err2="", err3 = "", passRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,20}$/;
        if (uname === "")
        {
            err1 = "*Please Enter Name";
        }
        if (password === "")
        {
            err2 = "*Please Enter Password";
        }
        if (password !== "" && !password.match(passRE))
        {
            err3 = "*Password should contain at least 8 characters and at most 20, at least one digit, one upper case alphabet, one lower case alphabet and no white spaces."
        }
        if (err1 || err2 || err3)
        {
            this.setState({
                err1, err2, err3
            });     
            return false;       
        }
        return true;
    }
    Login=()=>{
        const isValid = this.Valid();
        if (isValid)
        {
            const {uname,password}=this.state;
            const data={uname,password};
            this.props.onLogin(data,this.props.history);
        }       
    }
    render() {
        const {uname, password, err1, err2, err3} = this.state;
        return (
            <div className="container-fluid mt-5">
                <div className="row justify-content-center" data-aos="zoom-in-up">
                    <div className="col-md-4 card py-3 px-5">
                        <h2 className="text-center text-secondary mb-4">Login</h2>
                        <div className="text-danger font-weight-bold text-center mb-2">{this.props.auth.err}</div>
                        <div className="validate">{err1}</div>
                        <div className="form-group">
                            <input type="text" name="uname" className="form-control form-control-sm"value={uname} onChange={this.Handle} placeholder="User Name"/>
                        </div>
                        <div className="validate">{err2}{err3}</div>
                        <div className="form-group">
                            <input type="password" name="password" className="form-control form-control-sm" value={password} onChange={this.Handle} placeholder="Password"/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-secondary mb-3" data-toggle="modal" data-target="#errMod" onClick={this.Login}>Login</button><br></br>
                        </div>
                     </div>
                </div>
                {/* <LogErr data={this.props.auth.err} /> */}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    auth : state.auth
});

export default connect(mapStateToProps,{onLogin})(withRouter(Login));