import React, { Component } from 'react';
import {onFetchTodo} from './../Redux/Todo/todoAct';
import {Link,withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { MDBDataTableV5 } from 'mdbreact';
import $ from 'jquery';

class Tasks extends Component {
    constructor()
    {
        super();
        this.state = { todos : [], id : "", title : "", completed : false };
    }
    componentDidMount=()=>{
        this.FetchTask();
    }
    FetchTask=async()=>{
        var res=await this.props.onFetchTodo();
        this.setState({ todos : res });
    }
    Handle=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    Valid=()=>{
        if (this.state.title === "")
        {
            this.setState({ err1 : "*Please Enter Task Title" });     
            return false;       
        }
        else if (this.state.title !== "")
        {
            this.setState({ err1 : "" });     
            return true;       
        }
    }
    Add=()=>{
        const isValid = this.Valid();
        if (isValid)
        {
            let data = {
                id : this.state.todos.length+1,
                title : this.state.title,
                completed : this.state.completed
            };
            this.state.todos.push(data);
        }     
        $("#check").prop("checked", false);
        this.setState({ title : "", completed : false });  
    }
    Delete=async(id)=>{
        let todo = this.state.todos.filter(
            items => items.id !== id
        );
        this.setState({ todos: todo });
    }
    render() {
        const {title, err1} = this.state;
        var data = {
            columns : [
                { field: 'index' },
                { field: 'title' },
                { field: 'completed' },
                { field: 'action' },
            ],
            rows : this.state.todos.map((el,i)=>{
                return {
                    index : i+1,
                    title : el.title,
                    completed : el.completed?"True":"False",
                    action : 
                        <div>
                            <button className="btn btn-danger rounded btn-sm" data-toggle="modal" data-target="#delMod" onClick={()=>this.setState({id : el.id})}>Delete</button>
                        </div>
                }
            }) 
        }
        return (
            <div className="container mt-5 home">
                <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={data} searching={false} />
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addMod">
                    Add Task
                </button>
                <div className="modal fade" id="addMod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header bg-secondary">
                            <h5 className="modal-title text-white">New Task</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span className="text-white" aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body px-5">
                            <div className="validate">{err1}</div>
                            <div className="form-group">
                                <input type="text" name="title" className="form-control form-control-sm"value={title} onChange={this.Handle} placeholder="Title"/>
                            </div>
                            <div className="form-group">
                                <input id="check" type="checkbox" className="m-1" onChange={()=>{this.setState({ completed : !this.state.completed })}}/>Completed
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center text-center">
                            <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-sm btn-primary" onClick={this.Add}>Save</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="delMod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header bg-danger">
                            <h5 className="modal-title text-white">Delete</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span className="text-white" aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this item ?</p>
                        </div>
                        <div className="modal-footer justify-content-center text-center">
                            <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-sm btn-danger" data-dismiss="modal" onClick={()=>this.Delete(this.state.id)}>Delete</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    task : state.task
})

export default connect(mapStateToProps,{onFetchTodo})(withRouter(Tasks));

