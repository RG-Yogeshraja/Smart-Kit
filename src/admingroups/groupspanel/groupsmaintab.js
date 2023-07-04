import React, { useState, useEffect } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
import ActiveGroupTab from './activegrouptab'
import PendingGroupTab from './pendinggrouptab'
import DeletedGroupTab from './deletedgrouptab'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmenu.css'
import addicon1 from '../../../src/assets/images/dashboardimg/addicon1.png'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import AddoreditgroupPopup from "./createGroupDialog"
import { connect, useDispatch, useSelector } from 'react-redux'
import { groupsFilter_APIcall } from "../slice-admingroups/slice-groupfilter"



function GroupsMainPanel(props) {
    const [active, setActive] = useState("1")
    const [activecount, setActivecount] = useState('')
    const [pendingcount, setpendingcount] = useState('')
    const dispatch = useDispatch()
    const authStat1 = useSelector((state) => state.activeGroupsdata)
    const authStat_getPendingGroups = useSelector((state) => state.pendinglist_groupsdatainfo)
    const authStat_groupFilterExceptInactive = useSelector((state) => state.groupsFilterData)

    useEffect(() => {
        const payload = {
            admin_id: localStorage.getItem('loggedIn_userId'),
            location: '',
            search_key: '',
            // group_type: ["Active Groups", "Private Groups", "Public Groups", "Hint Social Groups", "Non-Hint Social Groups"]
            group_type: ["Active Groups"]
        }
        console.log(payload)
        dispatch(groupsFilter_APIcall(payload))
    }, [])

    useEffect(() => {
        
        if (authStat_groupFilterExceptInactive.data.responseBody != undefined && authStat_groupFilterExceptInactive.data.responseCode == 200) {
            console.log('qqqqqqqqqqqqqqqqqqq', authStat_groupFilterExceptInactive.data.responseBody)
            setActivecount((authStat_groupFilterExceptInactive.data.responseBody).length)
        }
    }, [authStat_groupFilterExceptInactive.data])

    // useEffect(() => {
    //     
    //     if (authStat_groupFilterExceptInactive.data.responseBody != undefined && authStat_groupFilterExceptInactive.data.responseCode == 200) {
    //         
    //         if (authStat_getPendingGroups.data.responseCode !== 200) {
    //             
    //             setpendingcount((authStat1.activeGroupsValue.responseBody).length)
    //         }
    //     }
    //     else if (authStat1.activeGroupsValue.responseCode === 201) {
    //         setActivecount(0)
    //     }
    // }, [authStat1.activeGroupsValue])

    useEffect(() => {
            if (authStat_getPendingGroups.data.responseCode ==200 && authStat_getPendingGroups.data.responseBody != undefined) {
                setpendingcount((authStat_getPendingGroups.data.responseBody).length)
            }
             else if (authStat_getPendingGroups.data.responseCode === 201) {
                setpendingcount(0)
            }
    }, [authStat_getPendingGroups.data])

    const toggle = (tab) => {
        if (active !== tab) {
            setActive(tab)
            if (tab === "1") {
                props.handle()
            } else {
                props.unhandle()
            }
        }
    }

    const clickfunc = () => {
        console.log('func')
    }

    const clickfuncs = () => {
        console.log('func')
    }

    return (
        <>
            <React.Fragment>
                <div className="row">
                    <div className="col-11">
                        <Nav tabs style={{ borderBottom: "1px solid #CCD8DB", borderLeft: "none", borderRight: "none", borderTop: "none", borderRadius: "0px", width: "100%" }} >
                            {authStat_groupFilterExceptInactive.data.responseCode == 200 ?
                                <div className=" p-0">
                                    <div className="row maintab-section" style={{ wordSpacing: "2px" }}>
                                        <div className="col-2">
                                            <div className="d-flex justify-content between align-items-between">
                                                <NavItem>
                                                    <NavLink className="grouptabheading-active1 group-mainTab" active={active === "1"} onClick={() => { toggle("1") }}>
                                                        Active&nbsp;({activecount})
                                                    </NavLink>
                                                </NavItem>

                                                <NavItem className="" style={{ borderRadius: "30px" }}>
                                                    <NavLink className="grouptabheading-active1 group-mainTab" active={active === "2"} onClick={() => { toggle("2") }}>
                                                        Pending&nbsp;({pendingcount})
                                                    </NavLink>
                                                </NavItem>&nbsp;

                                                {/* <NavItem className="" style={{ borderRadius: "30px" }}>
                                                <NavLink className="grouptabheading-active1 group-mainTab" active={active === "3"} onClick={() => { toggle("3") }}>
                                                    Deleted&nbsp;(2)
                                                </NavLink> */}
                                                {/* </NavItem>&nbsp; */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : ''}
                        </Nav>
                    </div>

                    <div className="col-1 add-infobtn d-flex justify-content between align-items-center addEventBtn" style={{cursor: "pointer"}}>
                        {/* <img src={addicon1} width="16" height="16"/> */}
                        <AddoreditgroupPopup></AddoreditgroupPopup>
                    </div>
                </div>
                <TabContent className="mb-2" activeTab={active}>
                    <TabPane tabId="1">
                        <ActiveGroupTab datas={active} handles_active={clickfuncs} data="active"></ActiveGroupTab>
                    </TabPane>
                    <TabPane tabId="2">
                        <PendingGroupTab datas={active} handles={clickfunc} data="pending"></PendingGroupTab>
                    </TabPane>
                    {/* <TabPane tabId="3">
                     <DeletedGroupTab data="delete"></DeletedGroupTab>
                    </TabPane> */}
                </TabContent>
            </React.Fragment>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log("*****", state)
    return {
        activeGroupsdata: state.activeGroupsdata,
        groupsFilterData: state.groupsFilterData
    }
}
export default connect(mapStateToProps, {})(GroupsMainPanel)
