import React, { useState, useEffect } from "react"
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import usersevents01 from '../../assets/images/dashboardimg/usersevents01.png'
import usersevents02 from '../../assets/images/dashboardimg/usersevents02.png'
import calendardark from '../../assets/images/dashboardimg/calendardark.png'
import verticalmore2 from '../../assets/images/dashboardimg/verticalmore2.png'
import deleteitem from '../../assets/images/dashboardimg/deleteitem.png'
import location from '../../assets/images/dashboardimg/location.png'
import hintSocialLogoBrown from '../../assets/images/dashboardimg/hintSocialLogoBrown.png'
import calender1 from '../../assets/images/dashboardimg/calender1.png'
import eventsponserlogo from '../../assets/images/dashboardimg/eventsponserlogo.png'
import dot from '../../assets/images/dashboardimg/Ellipse11.png'
import hintsocial_whiteimg from '../../assets/images/dashboardimg/hintsocial_whiteimg.png'
import Dropdown from 'react-bootstrap/Dropdown'
import { PieChart } from "react-minimal-pie-chart"
import { connect, useDispatch, useSelector } from "react-redux"
import { removeUsersEvent_APIcall } from "../slice-adminusers/slice-removeusersevent"
import { getUsersEventsList_APIcall } from "../slice-adminusers/slice-usereventslist"
import loading from '../../assets/images/dashboardimg/loadersimg.gif'
import moment from 'moment'
import calender from '../../../src/assets/images/dashboardimg/Tab_bar_calendar.png'

const UsersEventsTab = (props) => {

    const authStat_getUsersEvents = useSelector((state) => state.getUsersEventsData)
    const authStat_removeUsersEvents = useSelector((state) => state.removeUserseventData)
    const [usersEventsList, setUsersEventsList] = useState([])
    const [geteventstabsdet, seteventstabsdetail] = useState('')
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()

    const [usersFriendsListt] = useState([
        { id: '1', eventImageName: usersevents01, hintSocialImg: "hintsocial_whiteimg", sponserLogo: eventsponserlogo, isSponser: "", hintSocialLogo: "", eventsName: "Yoga for Beginners", eventLocation: "The Studio - South End, Boston, MA", eventDate: "July 8, 2022", eventTime: "8PM - 10PM", isAdmin: "", addendingCount: "32 Attending", limitedSpotsCount: "", spotsRemaing: "", setHeight: "52px" },
        { id: '2', eventImageName: usersevents02, hintSocialImg: "", sponserLogo: "", isSponser: "sponser", hintSocialLogo: hintSocialLogoBrown, eventsName: "Barry's Private Event", eventLocation: "South Boston/Dorchester, MA", eventDate: "July 8, 2022", eventTime: "8PM - 10PM", isAdmin: "Admin", addendingCount: "", limitedSpotsCount: "32", spotsRemaing: "60", setHeight: "" }
    ])
    const data1 = [
        { title: "Yes", value: 42, color: "#d7f2e6" },
        { title: "No", value: 104, color: "#95E1BF" }
    ]

    const datetime = (data) => {
        const monthValue = moment(data).format('MMM')
        const dateValue = moment(data).format('DD')
        const yearValue = moment(data).format('YYYY')
        return (<span>{`${monthValue  } ${  dateValue  }, ${  yearValue}`}</span>)
    }

    const startTimeFormat = (data) => {
        
        const localDateTimeConversion = new Date(data)
        const UTCTimePick = moment(localDateTimeConversion, "h:mmA").format("HH:mm")
        const localTimeConversion = moment(UTCTimePick, ["HH:mm"]).format("hh:mm A")
        console.log(localTimeConversion)
        return (<span>{localTimeConversion}</span>)
    }

    const endTimeFormat = (data) => {
        
        const localDateTimeConversion = new Date(data)
        const UTCTimePick = moment(localDateTimeConversion, "h:mmA").format("HH:mm")
        const localTimeConversion = moment(UTCTimePick, ["HH:mm"]).format("hh:mm A")
        console.log(localTimeConversion)
        return (<span>{localTimeConversion}</span>)
    }


    //1 store the result from get users all events list api call
    useEffect(() => {
        
        // setstarted(true)
        if (authStat_getUsersEvents.data.responseBody != undefined && authStat_getUsersEvents.data.responseCode == 200) {
            const responseData = [...authStat_getUsersEvents.data.responseBody]
            const sortingArray = responseData.sort((a, b) => a.event_title.localeCompare(b.event_title))
            if (sortingArray.length !== 0) {
                seteventstabsdetail('')
                setUsersEventsList(sortingArray)
            } else {
                setUsersEventsList([])
                seteventstabsdetail(props.username)
            }
           
        }
    }, [authStat_getUsersEvents.data])

    //2 remove event api call
    const removeEventsCall = (data) => {
        ///
        setLoader(true)
        const payload = {
            user_id: localStorage.getItem("loggedIn_userId"),
            event_id: data.event_id,
            member_id:props.userid
        }
        dispatch(removeUsersEvent_APIcall(payload))
    }

    //3 after any update in the users events list, need to reload the list(api call)
    useEffect(() => {
        ///
       
        console.log(props.userid)
        if (authStat_removeUsersEvents.data.responseCode === 200) {
            setLoader(false)
            const payload = {
                user_id: props.userid
            }
            dispatch(getUsersEventsList_APIcall(payload))
        } else if (authStat_removeUsersEvents.data.responseCode === 201) {
            console.log('remove event failed')
        }
    }, [authStat_removeUsersEvents.data])

    return (
        <div style={{ minHeight: "217px" }}>
            <div style={{ display: loader !== false ? '' : 'none' }}>
                <div className='enable-loader1'>
                    <img src={loading} width="80px" height="80px"></img>
                </div>
            </div>
            <div className="userFriendsList_scrollbar mt-2" id="style-2">
            {usersEventsList.length > 0 ?
                <div className="row" >
                    {usersEventsList.filter(items => items.event_title.match(new RegExp(props.data, "i"))).map((data, index) => {
                        return (
                            <div className='col-6' style={{marginRight:"-6px"}}>
                                <div className="card d-flex align-items-center justify-content-center single-eventSection">
                                    <div className="d-flex flex-column">
                                        <div className="parent mt-50" style={{ position: "relative" }}>
                                            {data.event_image.image_url != "" ? <img src={data.event_image.image_url} width="255px" height="220px" style={{ borderRadius: "15px" }} /> :
                                              <div className="noEventSection p-2">
                                              <img className="noeventimg" src={calendardark} width="220px" height="180px" />
                                          </div>
                                            }
                                        </div>
                                        <div className="row" style={{ position: "" }}>
                                            <div className="col-6 d-flex align-items-center justify-content-center ">
                                                {/* <span className="hintsocial-whiteimg">{data.hintSocialImg != "" ? <img className="" src={hintsocial_whiteimg} width="58px" height="30px" /> : null}</span> */}
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-end">
                                                <div className="userevent-verticalmoreBtn">
                                                    <div className="dropdown-section">
                                                        <Dropdown className="eventstab-dropdown">
                                                            <Dropdown.Toggle>
                                                                <img src={verticalmore2} className="mt-4" width="28px" height="28px" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="eventstab-dropdownmenu">
                                                                <Dropdown.Item href="#" className="eventstab-dropdownitem d-flex align-items-center" onClick={() => removeEventsCall(data)}>
                                                                    <span>
                                                                        <img className="eventstab-dropdownitemIcon"  src={deleteitem} width="16px" height="16px"></img>
                                                                    </span>
                                                                    <span style={{ paddingTop: "12px" }} className="eventstab-dropdownitemName">Remove Event</span>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* {data.isSponser !== "" ? <img className="sponsersection" src={eventsponserlogo} width="33%" height="19%" /> : null} */}
                                        <div className=" ms-25 ps-25 pt-50">
                                            <span className='textspan2 pb2'>{data.event_title}</span>
                                            <div className='d-flex flex-row align-items-center mt-50'>
                                                <img src={location} width="16px" height="16px"></img>&nbsp;
                                                <span className='eventlocationtext'>{data.event_location}</span>
                                            </div>
                                            <div className='d-flex flex-row align-items-center mt-50'>
                                                <span className="d-flex align-items-center justify-content-start col-11">
                                                    <img className="" src={calender1} width="16px" height="16px"></img>
                                                    <span className="textspan3 ms-25 me-25">{datetime(data.start_date)}</span>

{data.start_time !== "" ? <img src={dot} width="4px" height="4px" /> : null}
<span className="textspan4  ms-25 align-items-center justify-content-start" >
    {data.start_time !== "" ? <span>{startTimeFormat(data.start_date)}</span> : null}
    {data.start_time !== "" ? <span> to {endTimeFormat(data.end_date)}</span> : null}
</span>
                                                </span>
                                            </div>
                                            <span className="justify-content-start d-flex mt-50">
                                                {data.user_admin_status == "1" ? <button className=" btnspan1 d-flex align-items-center justify-content-center">Admin</button> : null}
                                            </span>

                                            <div className="row d-flex  flex-column">
                                                <div className='mt-25 mb-50'>
                                                    {data.user_admin_status != "1" ? <span className='textspan3 event-attendingcount ps-25'>{data.event_member_lenth} Attending</span> : null}
                                                </div>

                                                <div>
                                                    {data.is_limited_spots_enable == 1 ? <div className="row">
                                                            <div className="chart-section">
                                                                {data.spotsRemaing !== "" ? <div className="spotremaining-section mt-75 mb-75">
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="piechart-value">{data.total_spots}</span>
                                                                        <span className="piechartt">
                                                                            <PieChart
                                                                                animate
                                                                                animationDuration={40}
                                                                                animationEasing="ease-in"
                                                                                data={data1}
                                                                                lineWidth={20}
                                                                                lengthAngle={360}
                                                                                paddingAngle={0}
                                                                                radius={30}
                                                                                rounded
                                                                                startAngle={175}
                                                                                endAngle={150} />
                                                                        </span>
                                                                        <div>
                                                                            <span className="textspan12">Limited Spots:</span>
                                                                            <span className="textspan3">{data.remaining_spots} Spots Remaining</span>
                                                                        </div>
                                                                    </div>
                                                                </div> : null}
                                                            </div>
                                                        </div> : null}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div> :
                <div className="row d-flex align-items-center">
                    <div className="col-12 d-flex flex-column align-items-center pt-3">
                        <div className="noEventSection p-2">
                            <img className="noeventimg" src={calendardark} width="40px" height="41px" />
                        </div>
                        <span className="span-texting pt-2">{geteventstabsdet} does not have any events to display</span>
                    </div>
                </div>
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        getUsersEventsData: state.getUsersEventsData,
        removeUserseventData: state.removeUserseventData
    }
}
export default connect(mapStateToProps, {})(UsersEventsTab)
