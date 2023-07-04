import React, { useState } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
import SponsorshipGroupsActiveTab from './sponsorship-groups-activetab'
import SponsorshipGroupsPastTab from './sponsorship-groups-pasttab'
import SponsorshipGroupsDeletedTab from './sponsorship-groups-deletedtab'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmenu.css'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import addicon1 from '../../../src/assets/images/dashboardimg/addicon1.png'
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import SponsorshipGroupsInfoDialog from "./sponsorship-groups-infodialog"

function SponsorshipGroupsMaintab(props) {
    const [active, setActive] = useState("1")
    if (active === "1") {
        props.actives()
    } else if (active === "2") {
        props.pendings()
    } else if (active === "3") {
        props.deleteds()
    }

    const toggle = (tab) => {
        if (active !== tab) {
            setActive(tab)

        }
        if (tab === "1") {
            props.actives()
        } else if (tab === "2") {
            props.pendings()
        } else if (tab === "3") {
            props.deleteds()
        }
    }


    return (
        <>
            <React.Fragment>

                <div className="row">
                    <div className="col-11" style={{marginRight:"-3px"}}>
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
                                                    Active&nbsp;(23)
                                                </NavLink>
                                            </NavItem>

                                            <NavItem className="" style={{ borderRadius: "30px" }}>
                                                <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink" active={active === "2"} onClick={() => { toggle("2") }}>
                                                    Past&nbsp;(3)
                                                </NavLink>
                                            </NavItem>&nbsp;

                                            <NavItem className="" style={{ borderRadius: "30px" }}>
                                                <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink" active={active === "3"} onClick={() => { toggle("3") }}>
                                                    Deleted&nbsp;(2)
                                                </NavLink>
                                            </NavItem>&nbsp;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Nav>
                    </div>

                    <div className="col-1 add-infobtn d-flex justify-content-center align-items-center " style={{cursor:"pointer"}}>
                        {/* <img src={addicon1} width="16px" height="16px" /> */}
                        <SponsorshipGroupsInfoDialog></SponsorshipGroupsInfoDialog>
                    </div>
                </div>
                <TabContent className="mb-2" activeTab={active}>
                    <TabPane tabId="1">
                        <SponsorshipGroupsActiveTab data="active"></SponsorshipGroupsActiveTab>
                    </TabPane>
                    <TabPane tabId="2">
                        <SponsorshipGroupsPastTab data="pending"></SponsorshipGroupsPastTab>
                    </TabPane>
                    <TabPane tabId="3">
                        <SponsorshipGroupsDeletedTab data="delete"></SponsorshipGroupsDeletedTab>
                    </TabPane>
                </TabContent>
            </React.Fragment>
        </>
    )
}
export default SponsorshipGroupsMaintab