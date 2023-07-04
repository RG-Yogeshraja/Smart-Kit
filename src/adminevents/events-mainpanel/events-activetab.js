/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap"
import morehorizontal from '../../../src/assets/images/dashboardimg/morehorizontal.png'
import dot from '../../../src/assets/images/dashboardimg/Ellipse11.png'
import location from '../../../src/assets/images/dashboardimg/location.png'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import EventsActiveAttendingTab from './events-activeattendingtab'
import EventsActivePendingTab from './events-activependingtab'
import EventsActiveWaitlistTab from './events-activewaitlisttab'
import calender from '../../assets/images/dashboardimg/Tab_bar_calendar.png'
import calendars from '../../assets/images/dashboardimg/backgroundcalendar.png'
import { PieChart } from "react-minimal-pie-chart"
import { connect, useDispatch, useSelector } from 'react-redux'
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import { getEventAttendingMember_APIcall } from '../slice-adminevents/slice-geteventattendingmember'
import { clearEventDetails, getEventDetails_APIcall } from '../slice-adminevents/slice-geteventdetails'
import moment from 'moment'
import { getEvent_filter_APICall } from '../slice-adminevents/geteventfilter-detail-splice'
import calendardark from '../../assets/images/dashboardimg/calendardark.png'
import { clearActiveEventsData, getAllActiveEvents_APIcall } from '../slice-adminevents/slice-getallactiveevents'
import hintsociallogo_bgblue from '../../assets/images/dashboardimg/hintsociallogo_bgblue.png'
import hintsociallogo_whitebg from '../../assets/images/dashboardimg/hintsociallogo_whitebg.png'

const EventsActivetab = (props) => {
    const [active, setActive] = useState("1")
    const [tabhide, settabhide] = useState("1")
    const [editBtnShow, seteditBtnShow] = useState("1")
    const authvals = useSelector((state) => state.getEvent_filterDetail)
    const authStat_getEventAttendingMembers = useSelector((state) => state.getEventAttendingMemberData)
    const authStat_getEventDetails = useSelector((state) => state.getEventDetailsData)
    const authStat_eventsOverAllSearch = useSelector((state) => state.eventsOverAllSearchData)
    const authStat_uploadEventBannerImage = useSelector((state) => state.uploadEventBannerImageData)
    const authStat_getAllActiveEventsData = useSelector((state) => state.getAllActiveEventsData)



    const dispatch = useDispatch()
    const [defaulttab, setdefault] = useState(false)
    const [ind, setindex] = useState("")
    const [getAllActiveEventsList, setAllActiveEventsList] = useState([])
    const [loader, setLoader] = useState(false)
    const [dataLoadingStatus] = useState(false)
    const [selectedEventId, setSelectedEventId] = useState('')
    const [eventAttendingMemberList, setEventAttendingMemberList] = useState([])
    const [editBtnDisplay, seteditBtnDisplay] = useState("Edit")
    const [eventAttendingMemberCount, setEventAttendingMemberCount] = useState('')
    const [eventPendingMemberCount, setEventPendingMemberCount] = useState('')
    const [eventWaitlistMemberCount, setEventWaitlistMemberCount] = useState('')
    const authStat_removedBannerImageData = useSelector((state) => state.defaultimageget)
    const [noDataFoundData, setNoDataFoundData] = useState(false)

    const toggle = (tab) => {
        if (active !== tab) {
            setActive(tab)
        }
        if (tab === "1") {
            seteditBtnShow("")
        }
        if (tab === "2") {
            seteditBtnShow("editbtn")
            //get pending call
        }
        if (tab === "3") {
            seteditBtnShow("")
            //get waitlist call
        }
    }

    const data1 = [
        { title: "Yes", value: 100, color: "#d7f2e6" },
        { title: "No", value: 104, color: "#95E1BF" }
    ]

    //1st- get all active events list- api call
    useEffect(() => {
        setLoader(true)
        setNoDataFoundData(false)
        dispatch(clearActiveEventsData())
        const payloads = {
            admin_id: localStorage.getItem("loggedIn_userId"),
        }
        dispatch(getAllActiveEvents_APIcall(payloads))
    }, [])

    //2 get all active events response
    useEffect(() => {
        
        if (authStat_getAllActiveEventsData.data.responseBody != undefined && authStat_getAllActiveEventsData.data.responseCode == 200) {
            const responseData = [...authStat_getAllActiveEventsData.data.responseBody]
            const filteredData = responseData.sort((a, b) => a.event_title.localeCompare(b.event_title))
            setAllActiveEventsList(filteredData)
            eventsDetail(filteredData[0], filteredData[0].event_id, 0)
            setNoDataFoundData(false)
        }
        else {
            setAllActiveEventsList([])
            setNoDataFoundData(false)
            dispatch(clearEventDetails())
            setLoader(false)
        }
    }, [authStat_getAllActiveEventsData.data])

    //3 get individual event details api call
    const eventsDetail = (item, eventId, index1) => {
        setLoader(true)
        {
            const payload = {
                admin_id: localStorage.getItem("loggedIn_userId"),
                event_id: eventId
            }
            dispatch(getEventDetails_APIcall(payload))
            setindex(index1)
            setdefault(true)
        }
    }

    //3.1 get event details api call when switching from Past tab
    useEffect(() => {
        if (props.datas === "1") {
            
            if (getAllActiveEventsList != undefined && getAllActiveEventsList.length !== 0) {
                const payload = {
                    admin_id: localStorage.getItem("loggedIn_userId"),
                    event_id: getAllActiveEventsList[0].event_id
                }
                setLoader(true)
                dispatch(getEventDetails_APIcall(payload))
                setindex(0)
            }
            else if (getAllActiveEventsList != undefined && getAllActiveEventsList.length === 0) {
                
                dispatch(clearEventDetails())
            }
        }
    }, [props.datas])

    //4 get individual event details response and get event attending members api call
    useEffect(() => {
        if (authStat_getEventDetails.data.responseBody !== undefined && authStat_getEventDetails.data.responseCode === 200 && props.datas === "1") {
            const payload = {
                admin_id: localStorage.getItem("loggedIn_userId"),
                event_id: authStat_getEventDetails.data.responseBody[0].event_id
            }
            dispatch(getEventAttendingMember_APIcall(payload))
        }
    }, [authStat_getEventDetails.data])


    //5  get event attending members list response
    useEffect(() => {
        if (authStat_getEventAttendingMembers.data.responseCode === 200 && authStat_getEventAttendingMembers.data.responseBody !== undefined) {
            setLoader(false)
            setEventAttendingMemberCount((authStat_getEventAttendingMembers.data.responseBody.is_member).length)
            setEventPendingMemberCount((authStat_getEventAttendingMembers.data.responseBody.is_pending).length)
            setEventWaitlistMemberCount((authStat_getEventAttendingMembers.data.responseBody.is_waiting).length)
        }
        else {
            setEventAttendingMemberCount('0')
            setEventPendingMemberCount('0')
            setEventWaitlistMemberCount('0')
            setLoader(false)
        }
    }, [authStat_getEventAttendingMembers.data])

    //6 apply event filter response
    useEffect(() => {
        // props.handles_active(true, getAllActiveEventsList)
        if (authvals.getEvent_dataval.responseCode === 200) {
            
            const responseData = [...authvals.getEvent_dataval.responseBody]
            if (responseData.length !== 0) {
                const filterActiveEventsOnly = responseData.filter((item) => item.is_active != undefined)
                props.activeEventsCount(filterActiveEventsOnly.length)
                if (filterActiveEventsOnly.length !== 0) {
                    setNoDataFoundData(false)
                    setLoader(false)
                    const filteredData = filterActiveEventsOnly.sort((a, b) => a.event_title.localeCompare(b.event_title))
                    setAllActiveEventsList(filteredData)
                    const payload = {
                        admin_id: localStorage.getItem("loggedIn_userId"),
                        event_id: filteredData[0].event_id
                    }
                    dispatch(getEventDetails_APIcall(payload))
                    setindex(0)
                }
                else if (filterActiveEventsOnly.length === 0) {
                    
                    setNoDataFoundData(true)
                    setAllActiveEventsList([])
                    props.activeEventsCount('0')
                    dispatch(clearEventDetails())
                    setLoader(false)
                }
            }
            else {
                setAllActiveEventsList([])
                setNoDataFoundData(true)
                props.activeEventsCount('0')
                dispatch(clearEventDetails())
                setLoader(false)
            }
        }
        else {
            setLoader(false)
        }
    }, [authvals.getEvent_dataval])

    // 7 search by event name/ interest/ description response
    useEffect(() => {
        if (authStat_eventsOverAllSearch.data.responseCode === 200) {
            console.log(authStat_eventsOverAllSearch.data.responseBody)
            setAllActiveEventsList(authStat_eventsOverAllSearch.data.responseBody)
            setLoader(false)
        }
        else {
            setAllActiveEventsList([])
            setLoader(false)
        }
    }, [authStat_eventsOverAllSearch.data])

    //8 remove event banner image response
    useEffect(() => {
        // props.handles_active(true, getAllActiveEventsList)

        if (authStat_removedBannerImageData.defaultgroup != undefined) {
            if (authvals.getEvent_dataval.responseCode === 200) {
                const responseData = [...authvals.getEvent_dataval.responseBody]
                if (responseData.length !== 0) {
                    const filteredData = responseData.sort((a, b) => a.event_title.localeCompare(b.event_title))
                    setLoader(false)
                    setAllActiveEventsList(filteredData)
                    const payload = {
                        admin_id: localStorage.getItem("loggedIn_userId"),
                        event_id: filteredData[0].event_id
                    }
                    dispatch(getEventDetails_APIcall(payload))
                    // props.handles_active(false, getAllActiveEventsList)
                    setindex(0)

                } else {
                    // props.handles_active(false, getAllActiveEventsList)
                    setLoader(false)
                    setAllActiveEventsList([])
                }
            }
        }
    }, [authStat_removedBannerImageData.defaultgroup])

    //9 upload/ update event banner image resonse
    useEffect(() => {
        // props.handles_active(true, getAllActiveEventsList)

        if (authStat_uploadEventBannerImage.data.responseCode == 200) {
            if (authvals.getEvent_dataval.responseCode === 200) {
                const responseData = [...authvals.getEvent_dataval.responseBody]
                if (responseData.length !== 0) {
                    const filteredData = responseData.sort((a, b) => a.event_title.localeCompare(b.event_title))
                    setLoader(false)
                    setAllActiveEventsList(filteredData)
                    const payload = {
                        admin_id: localStorage.getItem("loggedIn_userId"),
                        event_id: filteredData[0].event_id
                    }
                    dispatch(getEventDetails_APIcall(payload))
                    // props.handles_active(false, getAllActiveEventsList)
                    setindex(0)

                } else {
                    // props.handles_active(false, getAllActiveEventsList)
                    setLoader(false)
                    setAllActiveEventsList([])
                }
            }
        }
    }, [authStat_uploadEventBannerImage.data])



    const datetime = (data) => {

        const monthValue = moment(data).format('MMM')
        const dateValue = moment(data).format('DD')
        return (<span>{`${monthValue}. ${dateValue}`}</span>)
    }

    const startTimeFormat = (data) => {

        const localDateTimeConversion = new Date(data)
        const UTCTimePick = moment(localDateTimeConversion, "h:mmA").format("HH:mm")
        const localTimeConversion = moment(UTCTimePick, ["HH:mm"]).format("hh:mm A")
        return (<span>{localTimeConversion}</span>)
    }

    const endTimeFormat = (data) => {

        const localDateTimeConversion = new Date(data)
        const UTCTimePick = moment(localDateTimeConversion, "h:mmA").format("HH:mm")
        const localTimeConversion = moment(UTCTimePick, ["HH:mm"]).format("hh:mm A")
        return (<span>{localTimeConversion}</span>)
    }

    const editmembers = () => {
        if (editBtnDisplay === "Edit") {
            seteditBtnDisplay("Save")
        } else {
            seteditBtnDisplay("Edit")
        }
    }

    return (
        // <React.Fragment>

        <div>
            <div style={{ display: loader === true ? '' : 'none' }}>
                <div className='enable-loader1'>
                    <img src={load} width="80px" height="80px"></img>
                </div>
            </div>
            {getAllActiveEventsList?.map((item, index) => {
                return (
                    <>
                        <div className="card p-1 flex-column cards activegroup-mainsection" onClick={() => eventsDetail(item, item.event_id, index)} style={{ border: index === ind ? '1px solid #95E1BF' : 'none' }}>
                            <div className="d-flex col-12 pb-50" >
                                <div className="col-1 ps-3 ">
                                    {/* {item.event_image_details !== "" ? <img src={item.event_image_details} width="86px" height="86px" style={{ borderRadius: "15px", position:'relative' }} /> :
                                        
                                        <img style={{width:"46px", height:'46px',}} src={calendars}  />
                                        } */}
                                    <div className="parent mt-50" style={{ position: "relative" }}>
                                        {item.event_image_details.image_url != "" ?
                                            <img src={item.event_image_details.image_url} width="86px" height="86px" style={{ borderRadius: "15px" }} /> :
                                            <div className="noEventSection p-2">
                                                <img className="noeventimg" src={calendardark} width="40px" height="41px" />
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="col-11 ps-4 pe-75">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className='d-flex align-items-center'>

                                                {/* <div>
                                                    <button href='www.google.com'>storeLink</button>
                                                    <a href='www.google.com'>anchor tag</a>
                                                </div> */}
                                                <span className='sponser-textspanbold8'>{item.event_title}</span>
                                                {item.is_hint_social_event == '1' ?
                                                    <div className='ishintSocialEventLogo ms-50 d-flex justify-content-center align-items-center'>
                                                        <img src={hintsociallogo_whitebg} width='55px' height='29px' />
                                                    </div> : null}
                                            </div>
                                            <div className="d-flex align-items-center">
                                                {/* <span className='sponsor-textspanbold5 pe-50'>{alert(JSON.stringify(item))}</span> */}
                                                <span className='sponsor-textspanbold5 pe-50'>{item.group_name}</span>
                                                {/* <span className='pe-50'>{item.event_id}</span> */}

                                                {/* <img className="" src={dot} width="4px" height="4px" />
                                                    <span className='sponsor-textspanbold5 ps-50 pe-50'>
                                                        {item.event_report_lenth === "" ? <span>0 </span> : <span>{item.event_report_lenth}</span>
                                                        }
                                                        <span>Report</span>
                                                    </span> */}
                                                <img className="" src={morehorizontal} width="24px" height="24px" />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between pt-25 pb-25">
                                            <div className="d-flex align-items-center ">
                                                {/* <span className="sponser-textspanbold6 pe-50">{datetime(item.start_date)}</span> */}
                                                <span className="sponser-textspanbold6 pe-50" style={{ fontSize: "17px" }}>{datetime(item.start_date)}</span>

                                                {item.start_time !== "" ? <img src={dot} width="4px" height="4px" /> : null}
                                                <span className="sponser-textspanbold6 ps-50" style={{ fontSize: "17px" }}>
                                                    {item.start_time !== "" ? <span>{startTimeFormat(item.start_date)}</span> : null}
                                                    {item.start_time !== "" ? <span> to {endTimeFormat(item.end_date)}</span> : null}
                                                </span>
                                            </div>

                                            {item.is_limited_spots_enable == 'limited spot events' || item.is_limited_spots_enable == 1 ?
                                                <div className="d-flex align-items-center sponsor-spotSection">
                                                    <span className="sponsor-spotremaining">
                                                        <PieChart
                                                            animate
                                                            animationDuration={40}
                                                            animationEasing="ease-in"
                                                            data={data1}
                                                            lineWidth={20}
                                                            lengthAngle={360}
                                                            paddingAngle={0}
                                                            radius={38}
                                                            // rounded
                                                            startAngle={90}
                                                            endAngle={150} />
                                                    </span>
                                                    <span className="sponser-textspanlight3 d-flex align-items-center justify-content-center">{item.no_of_spots}</span>
                                                    <div>
                                                        <span className="sponser-textspanlight2">Limited Spots: </span>
                                                        <span className="sponsor-textspanbold7" style={{ paddingRight: "8px" }}>{item.remaining_spots} Spots Remaining</span>
                                                    </div>
                                                </div> : null}
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center p-0">
                                            <img src={location} width="18px" height="18px" />
                                            <span className='sponser-textspanlight1 ps-25'>{item.address}</span>
                                        </div>
                                        <div className="d-flex justify-content-start pt-50">
                                            <span className='sponser-textspanlight1' style={{ textDecoration: "underline", textUnderlineOffset: "2.85px" }}>Created by {item.created_by} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {index === ind ?
                                // eslint-disable-next-line multiline-ternary
                                <div className='col-12'>
                                    <div className=''>
                                        <div className='group-navtabs'>
                                            <React.Fragment>
                                                <Nav tabs style={{ borderBottom: "1px solid #CCD8DB", borderLeft: "none", borderRight: "none", borderTop: "none", borderRadius: "0px", width: "98%" }} >
                                                    <div className=" maintab-section d-flex" style={{ wordSpacing: "2px" }}>
                                                        <div className="">
                                                            <div className="d-flex justify-content between align-items-between">
                                                                <NavItem>
                                                                    <NavLink className="tabheading-active1 activegroup-navLink" active={active === "1"} onClick={() => { toggle("1", item.event_id) }}>
                                                                        Attending&nbsp;({eventAttendingMemberCount})
                                                                    </NavLink>
                                                                </NavItem>

                                                                <NavItem className="" style={{ borderRadius: "30px" }}>
                                                                    <NavLink className="tabheading-active1 activegroup-navLink" active={active === "2"} onClick={() => { toggle("2", item.event_id) }}>
                                                                        Pending&nbsp;({eventPendingMemberCount})
                                                                    </NavLink>
                                                                </NavItem>&nbsp;

                                                                <NavItem className="" style={{ borderRadius: "30px" }}>
                                                                    <NavLink className="tabheading-active1 activegroup-navLink" active={active === "3"} onClick={() => { toggle("3", item.event_id) }}>
                                                                        Waitlist&nbsp;({eventWaitlistMemberCount})
                                                                    </NavLink>
                                                                </NavItem>&nbsp;
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className='assignbtn-section '>
                                                            {editBtnShow === "editbtn" ? <button onClick={() => { editmembers("edit") }} className='d-flex align-items-center justify-content-center group-editBtn'>Edit</button> : null}
                                                        </div> */}

                                                    <div className='assignbtn-section' style={{ display: active === "2" ? '' : 'none' }}>
                                                        <button onClick={() => { editmembers() }} className='d-flex align-items-center justify-content-center group-editBtn'>{editBtnDisplay}</button>
                                                    </div>
                                                </Nav>
                                                <TabContent className="mb-2" activeTab={active}>
                                                    <TabPane tabId="1">
                                                        <EventsActiveAttendingTab selectedEventId={selectedEventId} dataLoadingStatus={dataLoadingStatus}></EventsActiveAttendingTab>
                                                    </TabPane>
                                                    <TabPane tabId="2">
                                                        <EventsActivePendingTab data2={editBtnDisplay}></EventsActivePendingTab>
                                                    </TabPane>
                                                    <TabPane tabId="3">
                                                        <EventsActiveWaitlistTab></EventsActiveWaitlistTab>
                                                    </TabPane>
                                                </TabContent>
                                            </React.Fragment>
                                        </div>
                                    </div>
                                </div>
                                : ''}
                        </div>

                    </>
                )
            }
            )}
            {noDataFoundData == true ?
                <div className='row mt-5 pt-5'>
                    <span className='sponsor-textspanbold5 d-flex align-items-center justify-content-center'>No Data Found in Current Filter</span>
                </div> : null}



            {/* <div className='justify-content-center text-danger' style={{ display: getAllActiveEventsList.length === 0 ? 'flex' : 'none' }}>No Events Found</div> */}
            {/* <div className="card p-1 flex-column cards activegroup-mainsection" style={{ border: "none" }}>
                    <div className="d-flex col-12">
                        <div className="col-1 ps-50 pe-4">
                            <img src={eventprofileimg3} width="86px" height="86px" />
                        </div>
                        <div className="col-11 ps-4 pe-75">
                            <div className="d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className='sponser-textspanbold8'>Secret Comedy Show</span>
                                    <div className="d-flex align-items-center">
                                        <span className='sponsor-textspanbold5 pe-50'>Comedy Crew</span>
                                        <img className="" src={dot} width="4px" height="4px" />
                                        <span className='sponsor-textspanbold5 ps-50 pe-50'>1 Report</span>
                                        <img className="" src={morehorizontal} width="24px" height="24px" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between pt-25 pb-25">
                                    <div className="d-flex align-items-center ">
                                        <span className="sponser-textspanbold6 pe-50">Jun. 8</span>
                                        <img src={dot} width="4px" height="4px" />
                                        <span className="sponser-textspanbold6 ps-50">8:00PM to 9:00 PM</span>
                                    </div>
                                    <div className="d-flex align-items-center sponsor-spotSection">
                                        <span className="sponsor-spotremaining">
                                            <PieChart
                                                animate
                                                animationDuration={40}
                                                animationEasing="ease-in"
                                                data={data1}
                                                lineWidth={20}
                                                lengthAngle={360}
                                                paddingAngle={0}
                                                radius={38}
                                                // rounded
                                                startAngle={90}
                                                endAngle={150} />
                                        </span>
                                        <span className="sponser-textspanlight3">60</span>
                                        <div>
                                            <span className="sponser-textspanlight2">Limited Spots: </span>
                                            <span className="sponsor-textspanbold7" style={{ paddingRight: "8px" }}>28 Spots Remaining</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start align-items-center pt-50">
                                    <img src={location} width="18px" height="18px" />
                                    <span className='sponser-textspanlight1 ps-25'>Venue TBA - South Boston/Dorchester, MA</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className='sponser-textspanlight1 pt-75' style={{ textDecoration: "underline" }}>Created by Hint Social</span>
                                    <SponsorshipEventManageAttendingDialog />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


            {/* <div className="card p-1 flex-column cards activegroup-mainsection" style={{ border: "none" }}>

                    <div className="d-flex col-12 pb-50">
                        <div className="col-1 ps-50 pe-4">
                            <img src={eventprofileimg2} width="86px" height="86px" />
                        </div>
                        <div className="col-11 ps-4 pe-75">
                            <div className="d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className='sponser-textspanbold8'>Pre Flume Meet-Up</span>
                                    <div className="d-flex align-items-center">
                                        <span className='sponsor-textspanbold5 pe-50'>EDM Crew</span>
                                        <img className="" src={dot} width="4px" height="4px" />
                                        <span className='sponsor-textspanbold5 ps-50 pe-50'>0 Reports</span>
                                        <img className="" src={morehorizontal} width="24px" height="24px" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between pt-25 pb-25">
                                    <div className="d-flex align-items-center ">
                                        <span className="sponser-textspanbold6 pe-50">Jun. 27</span>
                                        <img src={dot} width="4px" height="4px" />
                                        <span className="sponser-textspanbold6 ps-50">5:30 PM to 6:30 PM</span>
                                    </div>
                                    <div className="d-flex align-items-center pt-50">
                                        <img src={userlogo} width="20px" height="20px" />
                                        <span className="event-textspanbold5 ps-50">20 People Attending</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start align-items-center pt-25">
                                    <img src={location} width="18px" height="18px" />
                                    <span className='sponser-textspanlight1 ps-25'>Venue TBA - South Boston/Dorchester, MA</span>
                                </div>
                                <div className="d-flex justify-content-start pt-75">
                                    <span className='sponser-textspanlight1' style={{ textDecoration: "underline" }}>Created by John Smith</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


            {/* <div className="card p-1 flex-column cards activegroup-mainsection" style={{ border: "none" }}>

                    <div className="d-flex col-12 pb-50">
                        <div className="col-1 ps-50 pe-4">
                            <img src={eventprofileimg1} width="86px" height="86px" />
                        </div>
                        <div className="col-11 ps-4 pe-75">
                            <div className="d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className='sponser-textspanbold8'>Barry's Private Class</span>
                                    <div className="d-flex align-items-center">
                                        <span className='sponsor-textspanbold5 pe-50'>EDM Crew</span>
                                        <img className="" src={dot} width="4px" height="4px" />
                                        <span className='sponsor-textspanbold5 ps-50 pe-50'>0 Reports</span>
                                        <img className="" src={morehorizontal} width="24px" height="24px" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between pt-25 pb-25">
                                    <div className="d-flex align-items-center ">
                                        <span className="sponser-textspanbold6 pe-50">Jun. 15</span>
                                        <img src={dot} width="4px" height="4px" />
                                        <span className="sponser-textspanbold6 ps-50">6:30 PM to 7:30 PM</span>
                                    </div>
                                    <div className="d-flex align-items-center pt-50">
                                        <img src={userlogo} width="20px" height="20px" />
                                        <span className="event-textspanbold5 ps-50">42 People Attending</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start align-items-center pt-25">
                                    <img src={location} width="18px" height="18px" />
                                    <span className='sponser-textspanlight1 ps-25'>Venue TBA - South Boston/Dorchester, MA</span>
                                </div>
                                <div className="d-flex justify-content-start pt-75">
                                    <span className='sponser-textspanlight1' style={{ textDecoration: "underline" }}>Created by John Smith</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            {/* <div className="card p-1 flex-column cards activegroup-mainsection" style={{ border: "none" }}>

                    <div className="d-flex col-12 pb-50">
                        <div className="col-1 ps-50 pe-4">
                            <img src={eventprofileimg2} width="86px" height="86px" />
                        </div>
                        <div className="col-11 ps-4 pe-75">
                            <div className="d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className='sponser-textspanbold8'>Pre Flume Meet-Up</span>
                                    <div className="d-flex align-items-center">
                                        <span className='sponsor-textspanbold5 pe-50'>EDM Crew</span>
                                        <img className="" src={dot} width="4px" height="4px" />
                                        <span className='sponsor-textspanbold5 ps-50 pe-50'>0 Reports</span>
                                        <img className="" src={morehorizontal} width="24px" height="24px" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between pt-25 pb-25">
                                    <div className="d-flex align-items-center ">
                                        <span className="sponser-textspanbold6 pe-50">Jun. 27</span>
                                        <img src={dot} width="4px" height="4px" />
                                        <span className="sponser-textspanbold6 ps-50">5:30 PM to 6:30 PM</span>
                                    </div>
                                    <div className="d-flex align-items-center pt-50">
                                        <img src={userlogo} width="20px" height="20px" />
                                        <span className="event-textspanbold5 ps-50">20 People Attending</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start align-items-center pt-25">
                                    <img src={location} width="18px" height="18px" />
                                    <span className='sponser-textspanlight1 ps-25'>Venue TBA - South Boston/Dorchester, MA</span>
                                </div>
                                <div className="d-flex justify-content-start pt-75">
                                    <span className='sponser-textspanlight1' style={{ textDecoration: "underline" }}>Created by John Smith</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


            {/* <div className="card p-1 flex-column cards activegroup-mainsection" style={{ border: "none" }}>

                    <div className="d-flex col-12 pb-50">
                        <div className="col-1 ps-50 pe-4">
                            <img src={eventprofileimg1} width="86px" height="86px" />
                        </div>
                        <div className="col-11 ps-4 pe-75">
                            <div className="d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className='sponser-textspanbold8'>Barry's Private Class</span>
                                    <div className="d-flex align-items-center">
                                        <span className='sponsor-textspanbold5 pe-50'>EDM Crew</span>
                                        <img className="" src={dot} width="4px" height="4px" />
                                        <span className='sponsor-textspanbold5 ps-50 pe-50'>0 Reports</span>
                                        <img className="" src={morehorizontal} width="24px" height="24px" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between pt-25 pb-25">
                                    <div className="d-flex align-items-center ">
                                        <span className="sponser-textspanbold6 pe-50">Jun. 15</span>
                                        <img src={dot} width="4px" height="4px" />
                                        <span className="sponser-textspanbold6 ps-50">6:30 PM to 7:30 PM</span>
                                    </div>
                                    <div className="d-flex align-items-center pt-50">
                                        <img src={userlogo} width="20px" height="20px" />
                                        <span className="event-textspanbold5 ps-50">42 People Attending</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start align-items-center pt-25">
                                    <img src={location} width="18px" height="18px" />
                                    <span className='sponser-textspanlight1 ps-25'>Venue TBA - South Boston/Dorchester, MA</span>
                                </div>
                                <div className="d-flex justify-content-start pt-75">
                                    <span className='sponser-textspanlight1' style={{ textDecoration: "underline" }}>Created by John Smith</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        </div>
        // </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        defaultimageget: state.defaultimageget,
        authStat_uploadEventBannerImage: state.authStat_uploadEventBannerImage
    }
}
export default connect(mapStateToProps, {})(EventsActivetab)