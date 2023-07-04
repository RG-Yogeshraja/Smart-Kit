import React, { useState } from "react"
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import barryeventimagesmall from "../../../src/assets/images/dashboardimg/barryeventimagesmall.png"
import morehorizontal from "../../../src/assets/images/dashboardimg/morehorizontal.png"
import dot from "../../../src/assets/images/dashboardimg/Ellipse11.png"
import location from "../../../src/assets/images/dashboardimg/location.png"
import barryeventlogo from "../../../src/assets/images/dashboardimg/barryeventlogo.png"
import deletedeventimg from "../../../src/assets/images/dashboardimg/deletedeventimg.png"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import closeblock from '../../assets/images/dashboardimg/closeblock.png';
import deleteitem from '../../assets/images/dashboardimg/deleteitem.png';
import SplitButton from 'react-bootstrap/SplitButton';
const SponsorshipEventDeletedTab = () => {


    return (
        <>
            <div>
                <div className="card mb-1 p-1 flex-column cards sponsor-deletedgroupmain1">
                    <div className="d-flex col-12">
                        <div className='col-1'>
                            <img src={deletedeventimg} width="86px" height="86px"></img>
                        </div> &nbsp;&nbsp;&nbsp;

                        <div className='col-11 top-contentSection'>
                            <div className='d-flex justify-content-between align-items-between ps-1 event-detailsection'>
                                <div>
                                    <span className='sponser-textspanbold4'>Yoga for Beginners</span>&nbsp;&nbsp;
                                    <img src={dot} width="6px" height="6px" />&nbsp;&nbsp;
                                    <span style={{ paddingBottom: "2px" }}><img src={barryeventlogo} width="19px" height="19px" /></span>&nbsp;
                                    <span className="barryPrivateEventname">Barry's</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className='sponsor-textspanbold5'>Comedy Crew</span>&nbsp;&nbsp;
                                    <img src={dot} width="4px" height="4px" />&nbsp;&nbsp;
                                    <span className='sponsor-textspanbold5'>1 Report</span>&nbsp;&nbsp;
                                    <img src={morehorizontal} style={{ cursor: "pointer" }} width="24px" height="24px"></img>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-between ps-1 event-detailsection'>
                                <div className="d-flex align-items-center">
                                    <span className='sponser-textspanbold6'>Jul 8</span>&nbsp;&nbsp;
                                    <img src={dot} width="4px" height="4px" />&nbsp;&nbsp;
                                    <span className='sponser-textspanbold6'>8:00 PM to 9:00 PM</span>&nbsp;&nbsp;
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center  px-1 event-detailsection'>
                                <div>
                                    <span><img src={location} width="18" height="18" /></span>
                                    <span className='sponser-textspanlight1 ms-25' style={{ cursor: "pointer" }}>TBA - South Boston/Dorchester, MA</span> &nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card p-1 flex-column cards sponsor-deletedgroupmain2">
                    <div className="d-flex col-12">
                        <div className='col-1'>
                            <img src={deletedeventimg} width="86px" height="86px"></img>
                        </div> &nbsp;&nbsp;&nbsp;

                        <div className='col-11 top-contentSection'>
                            <div className='d-flex justify-content-between align-items-between ps-1 event-detailsection'>
                                <div>
                                    <span className='sponser-textspanbold4'>Yoga for Beginners</span>&nbsp;&nbsp;
                                    <img src={dot} width="6px" height="6px" />&nbsp;&nbsp;
                                    <span style={{ paddingBottom: "2px" }}><img src={barryeventlogo} width="19px" height="19px" /></span>&nbsp;
                                    <span className="barryPrivateEventname">Barry's</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className='sponsor-textspanbold5'>Comedy Crew</span>&nbsp;&nbsp;
                                    <img src={dot} width="4px" height="4px" />&nbsp;&nbsp;
                                    <span className='sponsor-textspanbold5'>1 Report</span>&nbsp;&nbsp;
                                    <img src={morehorizontal} style={{ cursor: "pointer" }} width="24px" height="24px"></img>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-between px-1 event-detailsection'>
                                <div className="d-flex align-items-center">
                                    <span className='sponser-textspanbold6'>Jul. 8</span>&nbsp;&nbsp;
                                    <img src={dot} width="4px" height="4px" />&nbsp;&nbsp;
                                    <span className='sponser-textspanbold6'>8:00 PM to 9:00 PM</span>&nbsp;&nbsp;
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center  px-1 event-detailsection'>
                                <div>
                                    <span><img src={location} width="18" height="18" /></span>
                                    <span className='sponser-textspanlight1 ms-25' style={{ cursor: "pointer" }}>TBA - South Boston/Dorchester, MA</span> &nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div> */}
            {/* 
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div> */}
            {/* <div>
                <DropdownButton
                    align="end"
                    title="Dropdown end"
                    id="dropdown-menu-align-end"
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
            </div> */}

            <div>
                <div>
                    <DropdownButton
                        align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end"
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>

        </>
    )

}

export default SponsorshipEventDeletedTab