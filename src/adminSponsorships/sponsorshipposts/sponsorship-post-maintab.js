import React, { useEffect, useState } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
import boxes from '../../assets/images/dashboardimg/boxer.png'
import SponsorshipPostsDeletedTab from './sponsorship-post-deletedtab'
import SponsorshipPostsActiveTab from './sponsorship-post-activetab'
import SponsorshipPostsPastTab from './sponsorship-post-pasttab'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmenu.css'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import addicon1 from '../../../src/assets/images/dashboardimg/addicon1.png'
import Sponsor_AddPost from './sponsorpostadd'
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import { useSelector } from "react-redux"

function PostsMainPanel(props) {
    const [active, setActive] = useState("1")
    const authStat_getAllSponsorPosts = useSelector((state) => state.getAllSponsorPostsData)
    const [getActivePostCount, setActivePostCount] = useState('')
    const [getPastPostCount, setPastPostCount] = useState('')
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
        if (authStat_getAllSponsorPosts.data.responseCode == 200 && authStat_getAllSponsorPosts.data.responseBody != undefined) {
            setActivePostCount((authStat_getAllSponsorPosts.data.responseBody).length)
            setPastPostCount('0')
        }
        else {
            setActivePostCount()
            setPastPostCount('0')
        }
    }, [authStat_getAllSponsorPosts.data])


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
                                                    Active&nbsp;({getActivePostCount})
                                                </NavLink>
                                            </NavItem>

                                            <NavItem className="" style={{ borderRadius: "30px" }}>
                                                <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink" active={active === "2"} onClick={() => { toggle("2") }}>
                                                    Past&nbsp;({getPastPostCount})
                                                </NavLink>
                                            </NavItem>&nbsp;
                                            {/* ****** PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint ******** */}
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

                    <div className="col-1 add-infobtn d-flex justify-content-center align-items-center sectionShadow">
                        {/* <img src={addicon1} width="16" height="16" /> */}
                        <Sponsor_AddPost></Sponsor_AddPost>
                    </div>
                </div>
                <TabContent className="mb-2" activeTab={active}>
                    <TabPane tabId="1">
                        <SponsorshipPostsActiveTab data="active"></SponsorshipPostsActiveTab>
                    </TabPane>
                    <TabPane tabId="2">
                        <SponsorshipPostsPastTab data="pending"></SponsorshipPostsPastTab>
                    </TabPane>
                    {/* ****** PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint ***** */}
                    {/* <TabPane tabId="3">
                        <SponsorshipPostsDeletedTab data="delete"></SponsorshipPostsDeletedTab>
                    </TabPane> */}
                </TabContent>
            </React.Fragment>
        </>
    )
}
export default PostsMainPanel