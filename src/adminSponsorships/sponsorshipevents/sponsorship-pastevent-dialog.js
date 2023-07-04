import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import SponsorshipPasteventPosts from "./sponsorship-activepastevent-posts"
import SponsorshipPasteventEvents from "./sponsorship-activepastevent-event"
import SponsorshipPasteventGroups from "./sponsorship-activepastevent-groups"

const SponsorshipPasteventDialog = () => {
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
            <button onClick={() => setShow1(true)} className="barryPrivateEventname p-0">Barry's</button>
            <Modal show={show1} centered dialogClassName="custom-modal-pastevent" onHide={() => setShow1(false)}>
                <div className="pe-2 ps-3 pt-4">
                <div className="" style={{paddingBottom:"6px"}}>
                    <span className="sponsor-textspanbold14">Barry's Sponsorships</span>
                </div>
                    <div>
                        <React.Fragment>
                            <div className="row">
                            {/* padding: 40px 20px 0px 30px; */}
                                <div className="col-12">
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
                                                                Events&nbsp;(1)
                                                            </NavLink>
                                                        </NavItem>

                                                        <NavItem className="" style={{ borderRadius: "30px" }}>
                                                            <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink" active={active === "2"} onClick={() => { toggle("2") }}>
                                                                Groups&nbsp;(1)
                                                            </NavLink>
                                                        </NavItem>&nbsp;

                                                        <NavItem className="" style={{ borderRadius: "30px" }}>
                                                            <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink" active={active === "3"} onClick={() => { toggle("3") }}>
                                                                Posts&nbsp;(1)
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
                                    <SponsorshipPasteventEvents data="active"></SponsorshipPasteventEvents>
                                    <div className=" col-12 d-flex justify-content-center">
                                        <button className='closebuttonuser my-3' style={{ width: "45%" }} onClick={handleClose}>Close</button>
                                    </div>
                                </TabPane>
                                <TabPane tabId="2">
                                    <SponsorshipPasteventGroups data="groups"></SponsorshipPasteventGroups>
                                    <div className="col-12 d-flex justify-content-center" style={{marginTop:"18px"}}>
                                        <button className='closebuttonuser mb-3 mt-5' style={{ width: "45%" }} onClick={handleClose}>Close</button>
                                    </div>
                                </TabPane>
                                <TabPane tabId="3">
                                    <SponsorshipPasteventPosts data="posts"></SponsorshipPasteventPosts>
                                    <div className="col-12 d-flex justify-content-center" style={{marginTop:"4px"}}>
                                        <button className='closebuttonuser mb-3 mt-4' style={{ width: "45%" }} onClick={handleClose}>Close</button>
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

export default SponsorshipPasteventDialog