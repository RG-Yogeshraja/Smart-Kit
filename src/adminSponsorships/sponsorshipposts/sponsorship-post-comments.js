import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
import postcommentsimg from "../../../src/assets/images/dashboardimg/postcommentsimg.png"
import message from '../../../src/assets/images/dashboardimg/message.png';

import postcommentsprofile1 from '../../../src/assets/images/dashboardimg/postcommentsprofile1.png';
import postcommentsprofile2 from '../../../src/assets/images/dashboardimg/postcommentsprofile2.png';
import postcommentsprofile3 from '../../../src/assets/images/dashboardimg/postcommentsprofile3.png';
import dot from '../../../src/assets/images/dashboardimg/Ellipse11.png';
import verticalmore from '../../../src/assets/images/dashboardimg/verticalmore.png';
import deleteitem from '../../../src/assets/images/dashboardimg/deleteitem.png';



import Dropdown from 'react-bootstrap/Dropdown';


const SponsorPostActiveComments = () => {
    const [show1, setShow1] = useState(false)
    const handleClose = () => setShow1(false)




    return (
        <>
            {/* <button onClick={() => setShow1(true)} className="sponsor-btntextbold1" style={{ outline: "none" }}>View  Report</button> */}
            <img onClick={() => setShow1(true)} className="me-50 ms-25" src={message} width="16px" height="16px" style={{ cursor: "pointer" }} />

            <Modal show={show1} centered dialogClassName="postcomments-custommodal" onHide={() => setShow1(false)}>
                <div className="p-1">
                    <div className="pb-2 ps-2 pt-2">
                        <span className="sponsor-textspanbold14">Post Comments</span>
                    </div>
                    <div className="postcomments-scrollbar" id="postcomments-style">
                        <div className="postcomments-force-overflow">
                            <div className="ms-5 pe-3">
                                <div className="row postcomments-header p-1">
                                    <div className="col-3 px-0">
                                        <img src={postcommentsimg} width="172px" height="124px" />
                                    </div>
                                    <div className="col-9 d-flex flex-column ps-2">
                                        <div className="pt-25 pb-1 ps-1">
                                            <span className="sponsor-textspanlight14" style={{ fontWeight: "700" }}>The Barry’s SUMMER 6 PACK SALE is BACK - 7/6 to 7/10 ONLY.</span>
                                            <span className="sponsor-textspanlight14" style={{ fontWeight: "400" }}>Click to learn more and grab your pack! </span>
                                        </div>
                                        <span className="sponsor-textspanbold20 ps-1">Posted 1hr ago</span>
                                    </div>
                                </div>
                            </div>


                            <div className="ps-3 pt-2">
                                <div className="pb-1">
                                    <span className="sponser-textspanbold4">Comments (22)</span>
                                </div>

                                <div>
                                    <div>
                                    <div className="col-12 d-flex">
                                        <div className="col-1">
                                        <img className="" src={postcommentsprofile3} width="42px" height="42px" />
                                        </div>
                                        <div className="col-10 d-flex flex-column pe-1">
                                            <div className="">
                                                <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>Liyah Baker </span>
                                                <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "500" }}> Wow! </span>
                                                <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>@John Doe</span>
                                                <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "400" }}>,we should check that hike out this weekend. You and the pup in?</span>
                                            </div>
                                           

                                        </div>
                                        <div className="col-1">
                                            <Dropdown className="postcomments-dropdown ">
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="postcomments-dropdownmenu">
                                                    <Dropdown.Item href="#" className="postcomments-dropdownitem d-flex align-items-center">
                                                        <span>
                                                            <img className="postcomments-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="postcomments-dropdownitemName">Remove</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                      
                                    <div className="ms-5">
                                                <span className="sponsor-textspanlight15 pe-50">15 mins ago</span>
                                                <img className="" src={dot} width="4px" height="4px" />
                                                <span className="sponser-textspanlight2 ps-50" style={{ color: "#95E1BF" }}>Edited</span>
                                            </div>

                                    <hr className="ms-2 w-50" style={{ border: "1px solid #EDEDED" }} />

                                    <div className="col-12 d-flex">
                                        <div className="col-1">
                                        <img className="" src={postcommentsprofile2} width="42px" height="42px" />
                                        </div>
                                        <div className="col-10 d-flex flex-column pe-1">
                                            <div className="">
                                                <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>Justin Rosser</span>
                                                <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "400" }}>That looks awesome. How long did it take you? I have been looking for a hike to go on with </span>
                                                <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>@Silvia Dorsey.</span>
                                            </div>
                                           

                                        </div>
                                        <div className="col-1">
                                            <Dropdown className="postcomments-dropdown ">
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="postcomments-dropdownmenu">
                                                    <Dropdown.Item href="#" className="postcomments-dropdownitem d-flex align-items-center">
                                                        <span>
                                                            <img className="postcomments-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="postcomments-dropdownitemName">Remove</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="ms-5">
                                                <span className="sponsor-textspanlight15 pe-50">15 mins ago</span>
                                            </div>
                                    <hr className="ms-2 w-50" style={{ border: "1px solid #EDEDED" }} />

                                    <div className="col-12 d-flex">
                                        <div className="col-1">
                                        <img className="" src={postcommentsprofile1} width="42px" height="42px" />
                                        </div>
                                        <div className="col-10 d-flex flex-column">
                                            <div className="">
                                                <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>Casey Doe</span>
                                                <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "400" }}> Was it a tough hike? I need some new boots, so trying to keep to less difficult hikes for the moment.</span>
                                            </div>
                                            

                                        </div>
                                        <div className="col-1">
                                            <Dropdown className="postcomments-dropdown ">
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="postcomments-dropdownmenu">
                                                    <Dropdown.Item href="#" className="postcomments-dropdownitem d-flex align-items-center">
                                                        <span>
                                                            <img className="postcomments-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="postcomments-dropdownitemName">Remove</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="ms-5">
                                                <span className="sponsor-textspanlight15">15 mins ago</span>
                                            </div>
                                            </div>
                                    <hr className="ms-2 w-50" style={{ border: "1px solid #EDEDED" }} />
                                    <div>
                                    <div className="col-12 d-flex">
                                        <div className="col-1">
                                        <img className="" src={postcommentsprofile3} width="42px" height="42px" />
                                        </div>
                                        <div className="col-10 d-flex flex-column pe-1">
                                            <div className="">
                                                <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>Liyah Baker </span>
                                                <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "500" }}> Wow! </span>
                                                <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>@John Doe</span>
                                                <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "400" }}>,we should check that hike out this weekend. You and the pup in?</span>
                                            </div>
                                           

                                        </div>
                                        <div className="col-1">
                                            <Dropdown className="postcomments-dropdown ">
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="postcomments-dropdownmenu">
                                                    <Dropdown.Item href="#" className="postcomments-dropdownitem d-flex align-items-center">
                                                        <span>
                                                            <img className="postcomments-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="postcomments-dropdownitemName">Remove</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                      
                                    <div className="ms-5">
                                                <span className="sponsor-textspanlight15 pe-50">15 mins ago</span>
                                                <img className="" src={dot} width="4px" height="4px" />
                                                <span className="sponser-textspanlight2 ps-50" style={{ color: "#95E1BF" }}>Edited</span>
                                            </div>

                                    <hr className="ms-2 w-50" style={{ border: "1px solid #EDEDED" }} />

                                    <div className="col-12 d-flex">
                                        <div className="col-1">
                                        <img className="" src={postcommentsprofile2} width="42px" height="42px" />
                                        </div>
                                        <div className="col-10 d-flex flex-column pe-1">
                                            <div className="">
                                                <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>Justin Rosser</span>
                                                <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "400" }}>That looks awesome. How long did it take you? I have been looking for a hike to go on with </span>
                                                <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>@Silvia Dorsey.</span>
                                            </div>
                                           

                                        </div>
                                        <div className="col-1">
                                            <Dropdown className="postcomments-dropdown ">
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="postcomments-dropdownmenu">
                                                    <Dropdown.Item href="#" className="postcomments-dropdownitem d-flex align-items-center">
                                                        <span>
                                                            <img className="postcomments-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="postcomments-dropdownitemName">Remove</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="ms-5">
                                                <span className="sponsor-textspanlight15 pe-50">15 mins ago</span>
                                            </div>
                                    <hr className="ms-2 w-50" style={{ border: "1px solid #EDEDED" }} />

                                    <div className="col-12 d-flex">
                                        <div className="col-1">
                                        <img className="" src={postcommentsprofile1} width="42px" height="42px" />
                                        </div>
                                        <div className="col-10 d-flex flex-column">
                                            <div className="">
                                                <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>Casey Doe</span>
                                                <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "400" }}> Was it a tough hike? I need some new boots, so trying to keep to less difficult hikes for the moment.</span>
                                            </div>
                                            

                                        </div>
                                        <div className="col-1">
                                            <Dropdown className="postcomments-dropdown ">
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="postcomments-dropdownmenu">
                                                    <Dropdown.Item href="#" className="postcomments-dropdownitem d-flex align-items-center">
                                                        <span>
                                                            <img className="postcomments-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="postcomments-dropdownitemName">Remove</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="ms-5">
                                                <span className="sponsor-textspanlight15">15 mins ago</span>
                                            </div>
                                            </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-2 d-flex justify-content-center">
                        <button className=' closebuttonuser' style={{ width: "38%" }} onClick={handleClose}>Close</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default SponsorPostActiveComments