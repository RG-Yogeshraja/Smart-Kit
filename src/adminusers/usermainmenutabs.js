import React, { useState } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
import "../@core/scss/base/adminDashboard/analyticsmenu/analytics.scss"
// import link from '../assets/images/dashboardimg/link.png'
import UsersFriendsTab from './tabs/usersfriendstab'
import UsersGroupsTab from './tabs/usersgroupstab'
import UsersEventsTab from './tabs/userseventstab'
import UsersPostsTab from './tabs/userspoststab'
import UsersBlocksTab from './tabs/usersblockstab'
import UsersReportsTab from './tabs/usersreportstab'
// import '../@core/scss/base/adminDashboard/usersmenu.scss';
import search from '../assets/images/dashboardimg/searchbar.png'
import "../@core/scss/base/adminDashboard/usermenu/userfriends.scss"


function UserMainMenuTabs(props) {
    const [active, setActive] = useState("1")

    const [searchValue, setSearchValue] = useState("")
    if (active === "1") {
        props.handleclick()
    }
    const toggle = (tab) => {
        if (active !== tab) {
            setActive(tab)
        }
        if (tab === "1") {
            props.handleclick()
        } else {
            props.noclick()
        }
    }
    return (
        <>
            <React.Fragment>
                <div className='col-12 mt-1' style={{ display: active === '4' ? 'none' : '' }}>
                    <div className='d-flex align-items-center border_size '>
                        <img className='search ms-1' src={search} width="20px" height="20px"></img>
                        <input className='w-100 height-range ms-1 text_search ' placeholder='Search by name' value={searchValue}

                            onChange={e => setSearchValue(e.target.value)}></input>
                    </div>
                </div>
                <hr />
                <Nav
                    tabs
                    style={{
                        borderBottom: "1px solid #BFBFBF",
                        borderLeft: "none",
                        borderRight: "none",
                        borderTop: "none",
                        borderRadius: "0px",
                        width: "100%"
                    }} >


                    <NavItem className="col-2">
                        <NavLink className="tabheading-active1 " active={active === "1"} onClick={() => { toggle("1") }}>
                            Friends&nbsp;(32)
                        </NavLink>
                    </NavItem>

                    <NavItem className="col-2" style={{ borderRadius: "30px" }}>
                        <NavLink className="tabheading-active1" active={active === "2"} onClick={() => { toggle("2") }}>
                            Groups&nbsp;(2)
                        </NavLink>
                    </NavItem>

                    <NavItem className="col-2" style={{ borderRadius: "30px" }}>
                        <NavLink className="tabheading-active1" active={active === "3"} onClick={() => { toggle("3") }}>
                            Events&nbsp;(2)
                        </NavLink>
                    </NavItem>

                    <NavItem className="col-2" style={{ borderRadius: "30px" }}>
                        <NavLink className="tabheading-active1" active={active === "4"} onClick={() => { toggle("4") }}>
                            Posts&nbsp;(4)
                        </NavLink>
                    </NavItem>

                    <NavItem className="col-2" style={{ borderRadius: "30px" }}>
                        <NavLink className="tabheading-active1" active={active === "5"} onClick={() => { toggle("5") }}>
                            Blocks&nbsp;(6)
                        </NavLink>
                    </NavItem>

                    <NavItem className="col-2" style={{ borderRadius: "30px" }}>
                        <NavLink className="tabheading-active1" active={active === "6"} onClick={() => { toggle("6") }}>
                            Reports&nbsp;(0)
                        </NavLink>
                    </NavItem>


                </Nav>

                <TabContent className="mb-2" activeTab={active}>
                    <TabPane tabId="1">
                        <UsersFriendsTab data={searchValue}></UsersFriendsTab>
                    </TabPane>
                    <TabPane tabId="2">
                        <UsersGroupsTab data={searchValue}></UsersGroupsTab>
                    </TabPane>
                    <TabPane tabId="3">
                        <UsersEventsTab data={searchValue}></UsersEventsTab>
                    </TabPane>
                    <TabPane tabId="4">
                        <UsersPostsTab data={searchValue}></UsersPostsTab>
                    </TabPane>
                    <TabPane tabId="5">
                        <UsersBlocksTab data={searchValue}></UsersBlocksTab>
                    </TabPane>
                    <TabPane tabId="6">
                        <UsersReportsTab data={searchValue}></UsersReportsTab>
                    </TabPane>
                </TabContent>
            </React.Fragment>
        </>
    )
}
export default UserMainMenuTabs