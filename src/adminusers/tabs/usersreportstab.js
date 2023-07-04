import React, { useState, useEffect } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
// import "../../@core/scss/base/adminDashboard/analytics.scss"
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss";
import ReportsByUser from './reportsbyuser';
import ReportsAgainstUser from './reportsagainstuser';


function UsersReportsTab(props) {
    const [active, setActive] = useState("1")
    const [current, setcurrent] = useState('')
    const toggle = (tab) => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    useEffect(() => {
        setcurrent(props.data)
    })
    return (
        <>
            <React.Fragment>
                <Nav tabs style={{
                        borderBottom: "1px solid #BFBFBF",
                        borderLeft: "none",
                        borderRight: "none",
                        borderTop: "none",
                        borderRadius: "0px",
                        width: "100%"
                    }} >

                    <div className="container p-0">
                        <div className="row subtab-section">
                            <div className="col-8 d-flex justify-content-flex-start flex-row ">
                                <NavItem>
                                    <NavLink className="subtabheading1-active" active={active === "1"} onClick={() => { toggle("1") }}>
                                        Reports By User
                                    </NavLink>
                                </NavItem>

                                <NavItem className="px-2" style={{ borderRadius: "30px" }}>
                                    <NavLink className="subtabheading1-active" active={active === "2"} onClick={() => { toggle("2") }}>
                                        Reports Against User
                                    </NavLink>
                                </NavItem>
                            </div>
                        </div>
                    </div>
                </Nav>
                <TabContent className="mb-0 px-2 pt-1" activeTab={active}>
                    <TabPane tabId="1">
                        <ReportsByUser data={current}></ReportsByUser>
                    </TabPane>
                    <TabPane tabId="2">
                        <ReportsAgainstUser data={current}></ReportsAgainstUser>
                    </TabPane>
                </TabContent>
            </React.Fragment>
        </>
    )
}
export default UsersReportsTab