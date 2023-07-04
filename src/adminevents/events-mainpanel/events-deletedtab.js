import React, { useState, useEffect } from "react";
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
import { getAllDeletedEvents_APIcall } from '../slice-adminevents/slice-getalldeletedevents'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getEventDetails_APIcall } from "../slice-adminevents/slice-geteventdetails"
import moment from 'moment'


const EventsDeletedTab = (props) => {

    const [pastEventsList, setPastEventsList] = useState([
        { id: 1, imageName: eventprofileimg2, eventName: "Pre Flume Meet-Up", crewName: "EDM Crew", reportsCount: 0, eventDate: "Jun. 27", eventTime: "5:30 PM to 6:30 PM", peopleAttended: 20, locationName: "Venue TBA - South Boston/Dorchester, MA", createdBy: "Created by Jason Smith" },
        { id: 2, imageName: eventprofileimg1, eventName: "Barry's Private Class", crewName: "EDM Crew", reportsCount: 0, eventDate: "Jun. 15", eventTime: "6:30 PM to 7:30 PM", peopleAttended: 42, locationName: "Venue TBA - South Boston/Dorchester, MA", createdBy: "Created by Jason Smith" },
    ])
    const authStat_getAllDeletedEvents = useSelector((state) => state.getAllDeletedEventsData)
    const dispatch = useDispatch()
    const [ind, setindex] = useState("")
    const [allDeletedEvents, setAllDeletedEvents] = useState([])


    // 1st- get all deleted events- api call
    useEffect(() => {
        
        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId")
        }
        // dispatch(getAllDeletedEvents_APIcall(payload))
    }, [])

    // 2nd- after getting response 200 from get all deleted events api call, store the result
    useEffect(() => {
        
        if (authStat_getAllDeletedEvents.data.responseBody != undefined && authStat_getAllDeletedEvents.data.responseCode == 200) {
            setAllDeletedEvents(authStat_getAllDeletedEvents.data.responseBody)
            console.log(authStat_getAllDeletedEvents.data.responseBody)
        }
        else if (authStat_getAllDeletedEvents.data.responseCode == 201) {
            console.log('get all deleted events FAILED')
        }
    }, [authStat_getAllDeletedEvents.data])

    // 3rd- after getting response 200 and store the result, call the event details api call
    useEffect(() => {
        
        if (props.datas === "3") {
            if (authStat_getAllDeletedEvents.data.responseCode == 200) {
                const payload = {
                    admin_id: localStorage.getItem("loggedIn_userId"),
                    event_id: authStat_getAllDeletedEvents.data.responseBody[0].event_id
                }
                dispatch(getEventDetails_APIcall(payload))
                setindex(0)
            }
            else {
                console.log('deleted events details- fetch FAILED')
            }
        }
    }, [props.datas])

    //4th- get indivudual event details api call from the second item
    const deletedEventDetails = (eventId, index) => {
        
        {
            // allDeletedEvents?.map((item, index) => {
                
                if (eventId !="") {
                    const payload = {
                        admin_id: localStorage.getItem("loggedIn_userId"),
                        event_id: eventId
                    }
                    
                    console.log(payload)
                    dispatch(getEventDetails_APIcall(payload))
                    setindex(index)
                    console.log(payload)

                }
            // })
        }
    }

    const datetime = (data) => {
        const monthValue = moment(data).format('MMM')
        const dateValue = moment(data).format('DD')
        return (<span>{monthValue + '. ' + dateValue}</span>)
    }

    

    return (
        <>
            <div className="pt-50">
                {allDeletedEvents.map((data, index) => <div key={index} >
                    <div className="p-1 flex-column itemssection-border1 mb-2" onClick={()=>{deletedEventDetails(data.event_id, index)}} style={{ border: index === ind ? '1px solid #95E1BF' : 'none' }}>
                        <div className="d-flex col-12">
                            <div className="col-1 ps-50 pe-4">
{data.event_image_details.image_url!=""?
<img src={data.event_image_details.image_url} width="86px" height="86px" />:
<img src={eventprofileimg2} width="86px" height="86px" />}
                                
                            </div>
                            <div className="col-11 ps-4 pe-75">
                                <div className="d-flex flex-column">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className='sponser-textspanbold8'>{data.event_title}</span>
                                        <span className=''>{data.event_id}</span>
                                        <div className="d-flex align-items-center">
                                            <span className='sponsor-textspanbold5 pe-50'>{data.group_name}</span>
                                            <img className="" src={dot} width="4px" height="4px" />
                                            {data.event_report_length!=0?
                                            <span className='sponsor-textspanbold5 ps-50 pe-50'>{data.event_report_length} Reports</span>:
                                            <span className='sponsor-textspanbold5 ps-50 pe-50'>0 Reports</span>}
                                            <img className="" src={morehorizontal} width="24px" height="24px" />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center pt-25">
                                            <span className="sponser-textspanbold6 pe-50" style={{fontSize:"17px"}}>{datetime(data.start_date)}</span>
                                            {data.start_time != "" ?
                                                < img src={dot} width="4px" height="4px" /> : null}
                                            <span className="sponser-textspanbold6 ps-50" style={{fontSize:"17px"}}>
                                                {data.start_time != "" ? <span>{data.start_time}</span> : null}
                                                {data.start_time != "" ? <span> to {data.end_time}</span> : null}
                                            </span>

                                        </div>
                                        <div className="d-flex align-items-center pt-1 ">
                                            <img src={userprofile} width="20px" height="20px" />
                                            <span className="sponsor-textspanbold5 ps-50 pe-25">{data.attending_member_length} People Attended</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center pt-50">
                                        <img src={location} width="18px" height="18px" />
                                        <span className='sponser-textspanlight1 ps-25'>{data.location}</span>
                                    </div>
                                    <div className="d-flex justify-content-start pt-75">
                                        <span className='sponser-textspanlight1' style={{ textDecoration: "underline" }}>Created by {data.created_by}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        getAllDeletedEventsData: state.getAllDeletedEventsData
    }
}

export default connect(mapStateToProps, {})(EventsDeletedTab)