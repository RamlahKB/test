import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="dropdown">
                    <button className="btn btn-outline-secondary btn-lg  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="text-left">Dropdown</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="col">
                        <div className="nav text-center flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#pills-sec1" role="tab" aria-controls="v-pills-home" aria-selected="true">Section1</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#pills-sec2" role="tab" aria-controls="v-pills-profile" aria-selected="false">Section2</a>
                            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#pills-sec3" role="tab" aria-controls="v-pills-messages" aria-selected="false">Section3</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="tab-content mt-4" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-sec1" role="tabpanel" aria-labelledby="pills-home-tab">
                        <h5>Section 1</h5>
                        <p>Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.</p>
                    </div>
                    <div className="tab-pane fade" id="pills-sec2" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <h5>Section 2</h5>
                        <p>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.</p>
                    </div>
                    <div className="tab-pane fade" id="pills-sec3" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <h5>Section 3</h5>
                        <p>Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem.</p>
                    </div>
                </div>
            </div>
        );
    }
}
