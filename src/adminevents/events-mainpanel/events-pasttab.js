import React, { useEffect, useState } from "react";
import moreimagee from '../../assets/images/dashboardimg/morehorizontal.png';
import '../../@core/scss/base/adminDashboard/groupsmenu/pendinganddeltedtab.scss';
import morehorizontal from '../../assets/images/dashboardimg/morehorizontal.png'
import dot from '../../assets/images/dashboardimg/Ellipse11.png'
import userprofile from '../../assets/images/dashboardimg/1.png'
import location from '../../assets/images/dashboardimg/location.png'
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../../src/@core/scss/base/adminDashboard/eventsmenu/eventsmenu.scss'
import { getAllPastEvents_APIcall } from '../slice-adminevents/slice-getallpastevents'
import { connect, useDispatch, useSelector } from 'react-redux'
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import { clearEventDetails, getEventDetails_APIcall } from "../slice-adminevents/slice-geteventdetails"
import moment from 'moment'
import calendardark from '../../assets/images/dashboardimg/calendardark.png'


const EventsPastTab = (props) => {
    const authStat_getAllPastEvents = useSelector((state) => state.getAllPastEventsData)
    const authStat_getEventDetails = useSelector((state) => state.getEventDetailsData)
    const authvals = useSelector((state) => state.getEvent_filterDetail)
    const dispatch = useDispatch()
    const [allPastEvents, setAllPastEvents] = useState([])
    const [ind, setindex] = useState("")
    const [loader, setLoader] = useState(false)
    const [noDataFoundData, setNoDataFoundData] = useState(false)
    const [noPastEvents, setNoPastEvents] = useState(false)



    //1 get all past events- api call
    useEffect(() => {
        setNoPastEvents(false)
        setNoDataFoundData(false)
        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId")
        }
        dispatch(getAllPastEvents_APIcall(payload))
    }, [])

    //2 get all past events response
    useEffect(() => {

        if (authStat_getAllPastEvents.data.responseBody != undefined && authStat_getAllPastEvents.data.responseCode == 200) {
            const responseData = [...authStat_getAllPastEvents.data.responseBody]
            const filteredData = responseData.sort((a, b) => a.event_title.localeCompare(b.event_title))
            setAllPastEvents(filteredData)
            console.log(authStat_getAllPastEvents.data.responseBody)
            props.pastEventCount((authStat_getAllPastEvents.data.responseBody).length)
            if (filteredData.length === 0) {
                setNoPastEvents(true)
                setNoDataFoundData(false)
                setAllPastEvents([])
            }
        }
        else if (authStat_getAllPastEvents.data.responseCode == 201) {
            setNoPastEvents(true)
            setNoDataFoundData(false)
            setAllPastEvents([])
        }
    }, [authStat_getAllPastEvents.data])

    //3 get event details api call when switching from active tab
    useEffect(() => {

        if (props.datas === "2") {
            if (allPastEvents != undefined && allPastEvents.length !== 0) {
                const responseData = [...allPastEvents]
                setLoader(false)
                setNoPastEvents(false)
                setNoDataFoundData(false)
                const payload = {
                    admin_id: localStorage.getItem("loggedIn_userId"),
                    event_id: responseData[0].event_id
                }
                dispatch(getEventDetails_APIcall(payload))
                // setLoader(true)
                setindex(0)
            }
            else {
                setNoPastEvents(true)
                setNoDataFoundData(false)
                console.log('past events details- fetch FAILED')
            }
        }
    }, [props.datas])

    //3.1 get event details api response
    useEffect(() => {
        
        if (authStat_getEventDetails.data.responseBody != undefined && authStat_getEventDetails.data.responseCode == 200) {
            setLoader(false)
        }
        else {
            setLoader(false)
        }
    }, [authStat_getEventDetails.data])

    //4th- get indivudual event details api call from the second item
    const pastEventDetails = (eventId, index) => {
        
        setLoader(true)
        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId"),
            event_id: eventId
        }
        dispatch(getEventDetails_APIcall(payload))
        setindex(index)
    }

    useEffect(() => {
        if (authvals.getEvent_dataval.responseCode === 200) {
            
            const responseData = [...authvals.getEvent_dataval.responseBody]
            if (responseData.length !== 0) {
                const filterPastEventsOnly = responseData.filter((item) => item.is_past != undefined)
                props.pastEventCount(filterPastEventsOnly.length)
                if (filterPastEventsOnly.length !== 0) {
                    setNoDataFoundData(false)
                    setNoPastEvents(false)
                    const filteredData = filterPastEventsOnly.sort((a, b) => a.event_title.localeCompare(b.event_title))
                    setAllPastEvents(filteredData)
                    setLoader(false)
                    const payload = {
                        admin_id: localStorage.getItem("loggedIn_userId"),
                        event_id: filteredData[0].event_id
                    }
                    // dispatch(getEventDetails_APIcall(payload))
                    setindex(0)
                }
                else if (filterPastEventsOnly.length === 0) {
                    setAllPastEvents([])
                    setNoPastEvents(false)
                    setNoDataFoundData(true)
                    dispatch(clearEventDetails())
                    props.pastEventCount('0')
                    setLoader(false)
                }
            }
            else {
                setNoPastEvents(false)
                setNoDataFoundData(true)
                setLoader(false)
                setAllPastEvents([])
                props.pastEventCount('0')
                dispatch(clearEventDetails())
            }
        }
    }, [authvals.getEvent_dataval])


    const datetime = (data) => {
        const monthValue = moment(data).format('MMM')
        const dateValue = moment(data).format('DD')
        return (<span>{monthValue + '. ' + dateValue}</span>)
    }

    return (
        <>
            <div className="">
                <div style={{ display: loader !== false ? '' : 'none' }}>
                    <div className='enable-loader1'>
                        <img src={load} width="80px" height="80px"></img>
                    </div>
                </div>
                {noDataFoundData == true ?
                    <div className='row mt-5 pt-5'>
                        <span className='sponsor-textspanbold5 d-flex align-items-center justify-content-center'>No Data Found in Current Filter</span>
                    </div> : null}

                {allPastEvents.map((items, index) => {
                    return (
                        <div key={index} >
                            <div className="p-1 flex-column itemssection-border1 mb-2" onClick={() => { pastEventDetails(items.event_id, index) }} style={{ border: index === ind ? '1px solid #95E1BF' : 'none' }}>
                                <div className="d-flex col-12">
                                    <div className="col-1 ps-4 pe-4">
                                        {/* {items.event_image_details.image_url != "" ?
                                            <img src={items.event_image_details.image_url} width="86px" height="86px" style={{ borderRadius: "15px" }} /> :
                                            // <img className="noeventimg" src={calendardark} width="40px" height="41px" />

                                            <div className="noEventSection p-2">
                                                <img className="noeventimg" src={calendardark} width="40px" height="41px" />
                                            </div>
                                        } */}

                                        <div className="parent mt-50" style={{ position: "relative" }}>
                                            {items.event_image_details.image_url != "" ?
                                                <img src={items.event_image_details.image_url} width="86px" height="86px" style={{ borderRadius: "15px" }} /> :
                                                <div className="noEventSection p-2">
                                                    <img className="noeventimg" src={calendardark} width="40px" height="41px" />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-11 pe-3">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className='sponser-textspanbold8'>{items.event_title}</span>
                                                {/* <span className=''>{items.event_id}</span> */}
                                                <div className="d-flex align-items-center">
                                                    <span className='sponsor-textspanbold5 pe-50'>{items.group_name}</span>
                                                    {/* <img className="me-25" src={dot} width="4px" height="4px" /> */}
                                                    {/* 
                                                    {items.event_report_length != 0 ?
                                                        <span className='sponsor-textspanbold5 ps-50 pe-50'>
                                                            <span>{items.event_report_length}</span>
                                                        </span> : <span></span>} */}
                                                    <img className="ms-25" src={morehorizontal} width="24px" height="24px" />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center pt-25">
                                                    <span className="sponser-textspanbold6 pe-50" style={{ fontSize: "17px" }}>{datetime(items.start_date)}</span>
                                                    {items.start_time != "" ?
                                                        <img src={dot} width="4px" height="4px" /> : null}
                                                    <span className="sponser-textspanbold6 ps-50" style={{ fontSize: "17px" }}>
                                                        {items.start_time != "" ? <span>{items.start_time}</span> : null}
                                                        {items.end_time != "" ? <span> to {items.end_time}</span> : null}
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center pt-1 ">
                                                    <img src={userprofile} width="20px" height="20px" />
                                                    {/* <span className="sponsor-textspanbold5 ps-50 pe-25">{items.attending_member_length} People Attended</span> */}
                                                    <span className="sponsor-textspanbold5 ps-50 pe-25">{items.member_count} People Attended</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start align-items-center pt-50">
                                                <img src={location} width="18px" height="18px" />
                                                <span className='sponser-textspanlight1 ps-25'>{items.address}</span>
                                            </div>
                                            <div className="d-flex justify-content-start pt-75">
                                                <span className='sponser-textspanlight1' style={{ textDecoration: "underline", textUnderlineOffset: "2.85px" }}>{items.created_by}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
                {noPastEvents == true ?
                    <div className="d-flex justify-content-center pt-5 mt-5">
                        <span className="sponser-textspanbold6">No results found</span>
                    </div> : null}
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        getAllPastEventsData: state.getAllPastEventsData,
        getEventDetailsData: state.getEventDetailsData

    }
}

export default connect(mapStateToProps, {})(EventsPastTab)