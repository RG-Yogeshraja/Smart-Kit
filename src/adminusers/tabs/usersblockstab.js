import React, { useEffect, useState } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
// import "../../@core/scss/base/adminDashboard/analytics.scss"
import BlockedByUser from './blockedbyuser'
import UserBlockedBy from './userblockedby'
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import blockitem from '../../assets/images/dashboardimg/closeblock.png'
import deleteitem from '../../assets/images/dashboardimg/deleteitem.png'

function UsersBlocksTab(props) {
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
    const removeItem = () => {
        // alert('removeItem')
    }
    const blockItem = () => {
        // alert('blockItem')
    }
  
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
                            <div className="col-10 d-flex justify-content-flex-start flex-row ">
                                <NavItem>
                                    <NavLink className="subtabheading1-active" active={active === "1"} onClick={() => { toggle("1") }}>
                                        Blocked By User (4)
                                    </NavLink>
                                </NavItem>

                                <NavItem className="px-4" style={{ borderRadius: "30px" }}>
                                    <NavLink className="subtabheading1-active" active={active === "2"} onClick={() => { toggle("2") }}>
                                        User Blocked By (2)
                                    </NavLink>
                                </NavItem>
                            </div>
                        </div>
                    </div>
                </Nav>

                <TabContent className="tab-content report-tabcontent" activeTab={active}>
                    <TabPane tabId="1">
                        <BlockedByUser data={current} userid={props.userid}></BlockedByUser>
                    </TabPane>
                    <TabPane tabId="2">
                        <UserBlockedBy data={current} userid={props.userid}></UserBlockedBy>
                    </TabPane>
                </TabContent>
            </React.Fragment>
        </>
    )
}
export default UsersBlocksTab