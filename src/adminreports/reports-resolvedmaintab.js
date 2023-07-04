import React, { useState } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
import SponsorshipGroupsActiveTab from "../adminSponsorships/sponsorshipgroups/sponsorship-groups-activetab"
import ReportsUnresolved from "./reports-unresolvedtab"
import ReportsResolved from "./reports-resolvedtab"



function ReportsMaintab() {
    const [active, setActive] = useState("1")

    const toggle = (tab) => {
        if (active !== tab) {
            setActive(tab)

        }
    }


    return (
        <>
            <React.Fragment>
                <div className="row">
                    <div>
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
                                                    Unresolved
                                                </NavLink>
                                            </NavItem>

                                            <NavItem className="" style={{ borderRadius: "30px" }}>
                                                <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink" active={active === "2"} onClick={() => { toggle("2") }}>
                                                    Resolved
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
                        <ReportsUnresolved></ReportsUnresolved>
                    </TabPane>
                    <TabPane tabId="2">
                        <ReportsResolved></ReportsResolved>
                    </TabPane>
                </TabContent>
            </React.Fragment>
        </>
    )
}
export default ReportsMaintab