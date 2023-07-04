import React, { useEffect, useState } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
import SponsorshipEventPastTab from './sponsorshipeventpasttab'
import SponsorshipEventDeletedTab from './sponsorshipeventdeletedtab'
// import SponsorshipEventInfoDialog from './sponsorshipeventinfodialog'
import SponsorshipEventActiveTab from './sponsorshipeventactivetab'
import Sponsor_Add from './sponsoradd'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmenu.css'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import addicon1 from '../../../src/assets/images/dashboardimg/addicon1.png'
// import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import { useSelector } from "react-redux"


function GroupsMainPanel(props) {
    const [active, setActive] = useState("1")
    const [activeEventsCount, setActiveEventsCount] = useState('')
    const [pastEventsCount, setPastEventsCount] = useState('')
    const authStat_getAllSponsorEvents = useSelector((state) => state.getAllSponsorEventsData)

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

    useEffect(() => {
        if (authStat_getAllSponsorEvents.data.responseCode == 200 && authStat_getAllSponsorEvents.data.responseBody != undefined) {
            setActiveEventsCount((authStat_getAllSponsorEvents.data.responseBody.active_events).length)
            setPastEventsCount((authStat_getAllSponsorEvents.data.responseBody.past_events).length)
        }
        else {
            setActiveEventsCount('')
            setPastEventsCount('')
        }
    }, [authStat_getAllSponsorEvents.data])



    return (
        <>
            <React.Fragment>
                <div className="row">
                    <div className="col-11" style={{ marginRight: "-3px" }}>
                        <Nav tabs style={{ borderBottom: "1px solid #CCD8DB", borderLeft: "none", borderRight: "none", borderTop: "none", borderRadius: "0px", width: "100%" }} >
                            <div className=" p-0">
                                <div className="row maintab-section" style={{ wordSpacing: "2px" }}>
                                    <div className="col-2">
                                        <div className="d-flex justify-content between align-items-between">
                                            <NavItem>
                                                <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink" active={active === "1"} onClick={() => { toggle("1") }}>
                                                    Active&nbsp;({activeEventsCount})
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="" style={{ borderRadius: "30px" }}>
                                                <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink" active={active === "2"} onClick={() => { toggle("2") }}>
                                                    Past&nbsp;({pastEventsCount})
                                                </NavLink>
                                            </NavItem>&nbsp;
                                            {/* ****** PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint ****** */}
                                            {/* <NavItem className="" style={{ borderRadius: "30px" }}>
                                                <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink" active={active === "3"} onClick={() => { toggle("3") }}>
                                                    Deleted&nbsp;(2)
                                                </NavLink>
                                            </NavItem>&nbsp; */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Nav>
                    </div>
                    <div className="col-1 add-infobtn d-flex justify-content-center align-items-center">
                        <Sponsor_Add data='' ></Sponsor_Add>
                    </div>
                </div>
                <TabContent className="mb-2" activeTab={active}>
                    <TabPane tabId="1">
                        <SponsorshipEventActiveTab data="active"></SponsorshipEventActiveTab>
                    </TabPane>
                    <TabPane tabId="2">
                        <SponsorshipEventPastTab data="pending"></SponsorshipEventPastTab>
                    </TabPane>
                    {/* ****** PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint ****** */}
                    {/* <TabPane tabId="3">
                        <SponsorshipEventDeletedTab data="delete"></SponsorshipEventDeletedTab>
                    </TabPane> */}
                </TabContent>
            </React.Fragment>
        </>
    )
}
export default GroupsMainPanel