import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import SponsorshipManageAttendingAttend from './sponsorshipmanageattendingattend';
import SponsorshipManageAttendingPending from './sponsorshipmanageattendingpending';
import SponsorshipManageAttendingWaitlist from './sponsorshipmanageattendingwaitlist';

const SponsorshipEventManageAttendingDialog = () => {
    const [show1, setShow1] = useState(false)
    const handleClose = () => setShow1(false)
    const [active, setActive] = useState("1")

    const toggle = (tab) => {
        if (active !== tab) {
            setActive(tab)
            //   if(tab=="3"){ 

            //     props.handle()
            //   }
            // else{
            //     props.unhandle()
            //   }
        }
    }




    return (
        <>
            <button onClick={() => setShow1(true)} className="sponsor-btntextbold2 sponsor-btn2 me-1">Manage Attending</button>
            <Modal show={show1} centered
                dialogClassName="manageattending-custommodal" onHide={() => setShow1(false)}>


                <div className="attending-dialog">
                    <div className=" pb-1">
                        <span className="sponsor-textspanbold13">Manage Attending</span>
                        {/* <button className="col-6">Rearrange Waitlist</button> */}
                    </div>

                    <div>
                        <React.Fragment>
                            <div className="row">
                                <div className="col-11">
                                    <Nav
                                        tabs
                                        style={{
                                            borderBottom: "1px solid #CCD8DB",
                                            borderLeft: "none",
                                            borderRight: "none",
                                            borderTop: "none",
                                            borderRadius: "0px",
                                            width: "100%"
                                        }} >

                                        <div className=" p-0">
                                            <div className="row maintab-section" style={{ wordSpacing: "2px" }}>
                                                <div className="col-2">
                                                    <div className="d-flex justify-content between align-items-between">
                                                        <NavItem>
                                                            <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink" active={active === "1"} onClick={() => { toggle("1") }}>
                                                                Attending&nbsp;(23)
                                                            </NavLink>
                                                        </NavItem>

                                                        <NavItem className="" style={{ borderRadius: "30px" }}>
                                                            <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink" active={active === "2"} onClick={() => { toggle("2") }}>
                                                                Pending&nbsp;(12)
                                                            </NavLink>
                                                        </NavItem>&nbsp;

                                                        <NavItem className="" style={{ borderRadius: "30px" }}>
                                                            <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink" active={active === "3"} onClick={() => { toggle("3") }}>
                                                                Waitlist&nbsp;(12)
                                                            </NavLink>
                                                        </NavItem>&nbsp;
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Nav>
                                </div>


                            </div>
                            <TabContent className="mb-2" activeTab={active}>
                                <TabPane tabId="1">
                                    <SponsorshipManageAttendingAttend data="active"></SponsorshipManageAttendingAttend>
                                    {/* <div className="col-12 d-flex justify-content-between">
                                        <button className="sponsor-btn3 col-6" onClick={handleClose}>Close</button>
                                        <button className="sponsor-btn4 col-6">Export</button>
                                    </div> */}
                                    <div className=" col-12 ">
                                        <button className=' closebuttonuser col-5 m-0' style={{ width: "45%" }} onClick={handleClose}>Close</button>
                                        <span className='col-2'></span>
                                        <button className=' Exportbuttonuser col-5 me-2' style={{ width: "45%" }}>Export</button>
                                    </div>
                                </TabPane>
                                <TabPane tabId="2">
                                    <SponsorshipManageAttendingPending data="pending"></SponsorshipManageAttendingPending>
                                    {/* <div className="row d-flex justify-content-center">
                                        <button className="sponsor-btn3 col-6" onClick={handleClose}>Close</button>
                                        <button className="sponsor-btn4 col-6">Export</button>
                                    </div> */}
                                    <div className="col-12 ">
                                        <button className=' closebuttonuser col-5 m-0' style={{ width: "45%" }} onClick={handleClose}>Close</button>
                                        <span className='col-2'></span>
                                        <button className=' Exportbuttonuser col-5 me-2' style={{ width: "45%" }}>Export</button>
                                    </div>
                                </TabPane>
                                <TabPane tabId="3">
                                    <SponsorshipManageAttendingWaitlist data="delete"></SponsorshipManageAttendingWaitlist>
                                    {/* <div className="col-12 d-flex justify-content-between">
                                        <button className="sponsor-btn3" onClick={handleClose}>Close</button>
                                        <button className="sponsor-btn4">Export</button>
                                    </div> */}
                                    <div className="col-12 ">
                                        <button className=' closebuttonuser col-5 m-0' style={{ width: "45%" }} onClick={handleClose}>Close</button>
                                        <span className='col-2'></span>
                                        <button className=' Exportbuttonuser col-5 me-2' style={{ width: "45%" }}>Export</button>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </React.Fragment>
                    </div>
                </div>


            </Modal>
        </>

    )

}

export default SponsorshipEventManageAttendingDialog