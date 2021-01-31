import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class User extends Component {
    Logout=()=>{
        // localStorage.removeItem("user");
        this.props.history.push("/login");
    }
    render() {
        const data = JSON.parse(localStorage.getItem('user'));
        const pass = data.password.replace(/./g, "*");
        return (
            <div className="container mt-5">
                <div className="col-md-3 p-4">
                    <div className="row p-2">
                        <div className="col-md-6">Username :</div>
                        <div className="col-md-6">{data.uname}</div>
                    </div>
                    <div className="row p-2">
                        <div className="col-md-6">Password :</div>
                        <div className="col-md-6">{pass}</div>
                    </div>
                </div> 
                <div>
                    <Link type="button" className="btn btn-outline-secondary m-4" to="/newPass">
                        Change Password
                    </Link>
                    <Link type="button" className="btn btn-outline-secondary m-4" to="/login" onClick={this.Logout}>
                        Logout
                    </Link>
                </div>        
            </div>
        )
    }
}
