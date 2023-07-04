import React, { useState, useEffect } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
import EventsActiveTab from './events-activetab'
import EventsPastTab from './events-pasttab'
import EventsDeletedTab from './events-deletedtab'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmenu.css'
import addicon1 from '../../../src/assets/images/dashboardimg/addicon1.png'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import AddoreditgroupPopup from "./events-createEventDialog"
import EditgroupPopup from '../events-editpopup'
import { connect, useSelector, useDispatch } from "react-redux"
import { getAllPastEvents_APIcall } from "../slice-adminevents/slice-getallpastevents"
import { getAllDeletedEvents_APIcall } from "../slice-adminevents/slice-getalldeletedevents"
import { activeGroups_APIcall } from "../../admingroups/groupspanel/getactive-splice"
import { tabSwitchingCall } from "../slice-adminevents/slice-geteventdetails"

// import { eventFilterSelectionData } from "../slice-adminevents/geteventfilter-detail-splice"
function EventsMainPanel(props) {
    const [active, setActive] = useState("1")
    const authStat_getAllActiveEvents = useSelector((state) => state.getAllActiveEventsData)
    const authStat_getAllPastEvents = useSelector((state) => state.getAllPastEventsData)
    const authStat_getAllDeletedEvents = useSelector((state) => state.getAllDeletedEventsData)

    const [activeEventsCount, setActiveEventsCount] = useState('')
    const [deletedEventsCount, setDeletedEventsCount] = useState('')
    const [assoGroupsData, setGroupsData] = useState([])
    const [pastEventsCount, setPastEventCount] = useState('')
    const [setval, getval] = useState(false)
    const [eventFilterItems, setEventFilterItems] = useState(undefined)
    const authStat_getEventFilterItems = useSelector((state) => state.getEvent_filterDetail)
    const dispatch = useDispatch()
    const [gettabsShow, setTabsShow] = useState('1')
    const [counttest, setcounttest] = useState('')
    const authvals = useSelector((state) => state.getEvent_filterDetail)
    const authStat_getAllActiveEventsData = useSelector((state) => state.getAllActiveEventsData)




    // const toggle = (tab) => {
    //     if (active !== tab) {
    //         setActive(tab)
    //         if (tab === "3") {

    //             props.handle()
    //         } else if (tab === "2")  {
    //             props.unhandle()
    //         }
    //         else if (tab === "1")  {
    //             props.past()
    //         }
    //     }
    // }
    const toggle = (tab) => {
        if (active !== tab) {
            setActive(tab)
            if (tab === "1") {
                const payload = {
                    tabId: tab
                }
                dispatch(tabSwitchingCall(payload))
                props.handle()
            }
            else if (tab === "2") {
                const payload = {
                    tabId: tab
                }
                dispatch(tabSwitchingCall(payload))
                props.handle()
            }
            else if (tab === "3") {
                props.handle()
            }
        }
    }

    // useEffect(() => {
    //     if ((authStat_getAllActiveEventsData.data.responseCode === 200) || (authvals.getEvent_dataval.responseCode === 200)) {
    //         toggle('1') 
    //     }
    // }, authStat_getAllActiveEventsData.data, authvals.getEvent_dataval)


    const clickfunc = () => {
        console.log('func')
    }
    const clickfuncs = (v, m) => {
        props.handle_change(v, m)
        getval(v)
    }
    const clickfuncc = () => {
        console.log('func')
    }

    //get all past  event api call
    // useEffect(() => {
    //     const payload = {
    //         admin_id: localStorage.getItem("loggedIn_userId")
    //     }
    //     dispatch(getAllPastEvents_APIcall(payload))
    // }, [])

    //get all deleted events api call
    // useEffect(() => {
    //     const payload = {
    //         admin_id: localStorage.getItem("loggedIn_userId")
    //     }
    //     dispatch(getAllDeletedEvents_APIcall(payload))
    // }, [])

    useEffect(() => {
        //get active events count
        if (authStat_getAllActiveEvents.data.responseCode === 200 && authStat_getAllActiveEvents.data.responseBody !== undefined) {
            setActiveEventsCount((authStat_getAllActiveEvents.data.responseBody).length)
        }
        else if (authStat_getAllActiveEvents.data.responseCode === 201) {
            setActiveEventsCount('')
        }
    }, [authStat_getAllActiveEvents.data])

    useEffect(() => {
        if (authvals.getEvent_dataval.responseCode === 200) {

            const responseData = [...authvals.getEvent_dataval.responseBody]
            if (responseData.length !== 0) {

                const filterPastEventsOnly = responseData.filter((item) => item.is_past != undefined)
                const filterActiveEventsOnly = responseData.filter((item) => item.is_active != undefined)
                setActiveEventsCount(filterActiveEventsOnly.length)
                setPastEventCount(filterPastEventsOnly.length)


                console.log(filterPastEventsOnly)
            }
            else {
                setActiveEventsCount()
                setPastEventCount()
            }
        }
    }, [authvals.getEvent_dataval])


    // useEffect(() => {

    //     if (authStat_getEventFilterItems.eventFilterSelectionList.event_type != undefined) {
    //         setEventFilterItems(authStat_getEventFilterItems.eventFilterSelectionList.event_type)
    //         const filterTypes = authStat_getEventFilterItems.eventFilterSelectionList.event_type

    //         setcounttest(filterTypes.length)
    //         if (filterTypes.length > 0 || (authStat_getEventFilterItems.eventFilterSelectionList.latitude != '' &&
    //             authStat_getEventFilterItems.eventFilterSelectionList.longitude != '')) {
    //             setTabsShow('0')
    //         }
    //         else if (filterTypes.length == 0 && (authStat_getEventFilterItems.eventFilterSelectionList.latitude == '' &&
    //         authStat_getEventFilterItems.eventFilterSelectionList.longitude == '')) {
    //             setTabsShow('1')
    //         }
    //         console.log(eventFilterItems)
    //     }
    // }, [authStat_getEventFilterItems.eventFilterSelectionList])


    // useEffect(() => {
    //     //get past events count
    //     if (authStat_getAllPastEvents.data.responseCode === 200 && authStat_getAllPastEvents.data.responseBody !== undefined) {
    //         setPastEventsCount((authStat_getAllPastEvents.data.responseBody).length)
    //     }
    //     else if (authStat_getAllPastEvents.data.responseCode === 201) {
    //         setPastEventsCount('')
    //     }
    // }, [authStat_getAllPastEvents.data])

    // useEffect(() => {
    //     //get deleted events count
    //     if (authStat_getAllDeletedEvents.data.responseCode === 200 && authStat_getAllDeletedEvents.data.responseBody !== undefined) {
    //         setDeletedEventsCount((authStat_getAllDeletedEvents.data.responseBody).length)
    //     }
    //     else if (authStat_getAllDeletedEvents.data.responseCode === 201) {
    //         setDeletedEventsCount('')
    //     }
    // }, [authStat_getAllDeletedEvents.data])

    // useEffect(() => {
    //     const payload = {
    //       user_id: localStorage.getItem('loggedIn_userId')
    //     }
    //     dispatch(activeGroups_APIcall(payload))
    //   }, [])

    // useEffect(() => {

    //     if (authStat_getAllActiveGroups.activeGroupsValue.responseBody !== undefined && authStat_getAllActiveGroups.activeGroupsValue.responseCode == 200) {
    //         const responseData = [...authStat_getAllActiveGroups.activeGroupsValue.responseBody]
    //         const groupsData = []
    //         for (let i = 0; i < responseData.length; i++) {
    //             groupsData.push({ value: responseData[i].group_id, label: responseData[i].group_name })
    //         }
    //         const filterVal = groupsData.filter(item => item.label !== null || item.label !== undefined)
    //         const filterByGroupName = filterVal.sort((a, b) => a.label.localeCompare(b.label))
    //         setGroupsData(filterByGroupName)
    //     }
    // }, [authStat_getAllActiveGroups.activeGroupsValue.responseCode])

    return (
        <>
            <React.Fragment>
                <div className="d-flex justify-content-end">
                    {/* {gettabsShow == '1' ? */}
                    <div className="col-11" style={{ marginRight: "-3px" }}>
                        <Nav tabs style={{ borderBottom: "1px solid #CCD8DB", borderLeft: "none", borderRight: "none", borderTop: "none", borderRadius: "0px", width: "100%", marginBottom: '24px' }} className="mb-2">
                            <div className="p-0">
                                <div className="row maintab-section" style={{ wordSpacing: "2px" }}>
                                    <div className="col-2">
                                        <div className="d-flex justify-content between align-items-between">
                                            <NavItem>
                                                <NavLink className="grouptabheading-active1 group-mainTab" active={active === "1"} onClick={() => { toggle("1") }}>
                                                    Active&nbsp;({activeEventsCount})
                                                </NavLink>
                                            </NavItem>

                                            <NavItem className="" style={{ borderRadius: "30px" }}>
                                                <NavLink className="grouptabheading-active1 group-mainTab" active={active === "2"} onClick={() => { toggle("2") }}>
                                                    Past&nbsp;({pastEventsCount})
                                                </NavLink>
                                            </NavItem>&nbsp;

                                            {/* <NavItem className="" style={{ borderRadius: "30px" }}>
                                                <NavLink className="grouptabheading-active1 group-mainTab" active={active === "3"} onClick={() => { toggle("3") }}>
                                                    Deleted&nbsp;({deletedEventsCount})
                                                </NavLink>
                                            </NavItem> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Nav>
                    </div>
                    {/* : null} */}

                    <div className="col-1 add-infobtn d-flex justify-content-center align-items-center" style={{ marginBottom: gettabsShow == '1' ? '8px' : 'none' }}>
                        {/* <EditgroupPopup value="add"></EditgroupPopup> */}
                        <AddoreditgroupPopup value="add" assoGroupsData={assoGroupsData}></AddoreditgroupPopup>
                    </div>
                </div>
                <TabContent className="" activeTab={active}>
                    <TabPane tabId="1">
                        <EventsActiveTab datas={active} handles_active={clickfuncs} data="active" searchValue={props.searchValue} activeEventsCount={setActiveEventsCount}></EventsActiveTab>
                    </TabPane>
                    <TabPane tabId="2">
                        <EventsPastTab datas={active} handles={clickfunc} data="pending" pastEventCount={setPastEventCount}></EventsPastTab>
                    </TabPane>
                    {/* <TabPane tabId="3">
                        <EventsDeletedTab datas={active} handles={clickfuncc} data="delete"></EventsDeletedTab>
                    </TabPane> */}
                </TabContent>
            </React.Fragment>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        getAllActiveEventsData: state.getAllActiveEventsData,
        getAllPastEventsData: state.getAllPastEventsData,
        getAllDeletedEventsData: state.getAllDeletedEventsData,
        // getEvent_filterDetail: data.getEvent_filterDetail
    }
}

export default connect(mapStateToProps, {})(EventsMainPanel)