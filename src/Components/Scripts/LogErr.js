import React, { Component } from 'react';

export default class LogErr extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="errMod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-danger">
                                <h5 className="modal-title text-white">Error</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="text-white" aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">
                                <p>{this.props.data}</p>
                            </div>
                            <div className="modal-footer justify-content-center text-center">
                                <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
