

import React, { useState, useEffect } from "react"

// import "../../@core/scss/base/adminDashboard/usersmenu.scss";
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import verticalmore2 from '../../../src/assets/images/dashboardimg/verticalmore2.png'
import closeblock from '../../../src/assets/images/dashboardimg/closeblock.png'
import location from '../../../src/assets/images/dashboardimg/location.png'
import hintSocialLogoBrown from '../../../src/assets/images/dashboardimg/hintSocialLogoBrown.png'
import calender1 from '../../../src/assets/images/dashboardimg/calender1.png'
import eventsponserlogo from '../../../src/assets/images/dashboardimg/eventsponserlogo.png'
import dot from '../../../src/assets/images/dashboardimg/Ellipse11.png'
import hintsocial_whiteimg from '../../../src/assets/images/dashboardimg/hintsocial_whiteimg.png'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import Dropdown from 'react-bootstrap/Dropdown'
import '../../@core/scss/base/adminDashboard/custom_dropdownmenu.scss'
import { PieChart } from "react-minimal-pie-chart"
import deleteitem from '../../../src/assets/images/dashboardimg/deleteitem.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import load from '../../../src/assets/images/dashboardimg/loadersimg.gif'
import calender from '../../../src/assets/images/dashboardimg/Tab_bar_calendar.png'
import moment from 'moment'
import { deleteeventsGroups_APIcall } from './deletegroupevent-splice'
import { eventsGroups_APIcall } from './getevents-splice'
const ActiveEventsTab = (props) => {

    const [groupsEventsList, setGroupsEventsList] = useState([
        // { id: '1', eventImageName: grouppost1, hintSocialImg: "hintsocial_whiteimg", hintSocialLogo: "", eventsName: "Dog Hiking Adventure", eventLocation: "East Park - South End, Boston, MA", eventDate: "July 8, 2022", eventTime: "8PM - 10PM", addendingCount: "32 Attending", limitedSpotsCount: "", spotsRemaing: "", setHeight: "52px" },
        // { id: '2', eventImageName: grouppost2, hintSocialImg: "", hintSocialLogo: hintSocialLogoBrown, eventsName: "Park Day with the Pups", eventLocation: "South Boston/Dorchester, MA", eventDate: "July 8, 2022", eventTime: "8PM - 10PM", addendingCount: "", limitedSpotsCount: "32", spotsRemaing: "60", setHeight: "" },
        // { id: '2', eventImageName: grouppost2, hintSocialImg: "", hintSocialLogo: hintSocialLogoBrown, eventsName: "Park Day with the Pups", eventLocation: "South Boston/Dorchester, MA", eventDate: "July 8, 2022", eventTime: "8PM - 10PM", addendingCount: "", limitedSpotsCount: "32", spotsRemaing: "60", setHeight: "" },
        // { id: '1', eventImageName: grouppost1, hintSocialImg: "hintsocial_whiteimg", hintSocialLogo: "", eventsName: "Dog Hiking Adventure", eventLocation: "East Park - South End, Boston, MA", eventDate: "July 8, 2022", eventTime: "8PM - 10PM", addendingCount: "32 Attending", limitedSpotsCount: "", spotsRemaing: "", setHeight: "52px" }

    ])
    const deleteevents = useSelector((state) => state.deleteeventsGroupsdata)
    const dispatch = useDispatch()
    const data2 = [{ title: "Yes", value: 100, color: "#d7f2e6" }]
    const [started, setstarted] = useState(false)
    const [split, setsplit] = useState('')
    const [split1, setsplit1] = useState('')
    const authStat = useSelector((state) => state.eventsGroupsdata)
    const [data1, setdata] = useState([])
    const [groupid, setgroupid] = useState('')
    const [setchange, getchange] = useState(false)
    const deleteevent = (eventid, groupid) => {
        //
        setgroupid(groupid)
        const payload = {
            user_id: localStorage.getItem('loggedIn_userId'),
            event_id: eventid
        }
        dispatch(deleteeventsGroups_APIcall(payload))
    }
    useEffect(() => {
        setstarted(false)
        // setstarted(true)
        if (deleteevents.deleteeventsGroupsValue.responseCode === 200) {
            const payload1 = {
                admin_id: localStorage.getItem("loggedIn_userId"),
                group_id: groupid
            }
            //

            dispatch(eventsGroups_APIcall(payload1))


        } else if (deleteevents.deleteeventsGroupsValue.responseCode === 201) {

        }
    }, [deleteevents.deleteeventsGroupsValue])
    useEffect(() => {

        // setstarted(true)
        setstarted(false)
        const { eventsGroupsValue } = authStat
        console.log("data", eventsGroupsValue)
        const { responseBody } = eventsGroupsValue
        console.log("login responseBody", responseBody)
        console.log("auth respomse success")
        if (authStat.eventsGroupsValue.responseCode === 200) {
            const responseData=[...responseBody]
            const sortingData= responseData.sort((a,b)=>a.event_title.localeCompare(b.event_title))
            setGroupsEventsList(sortingData)
            getchange(true)
            // props.geeventcount(1)
            console.log(responseBody)
            const timeId = setTimeout(() => {
                setstarted(false)
            }, 1000)

        } else if (authStat.eventsGroupsValue.responseCode === 201) {

            setGroupsEventsList([])
            console.log(responseBody)
            const timeId = setTimeout(() => {
                setstarted(false)
            }, 1000)
        }


        console.log(authStat.eventsGroupsValue.responseCode)
    }, [authStat])
    const test = (test) => {
        const data1 = []

        const test1 = Number(test)
        const cloors = "#d7f2e6"
        const titles = 'yes'
        data1.push({ title: titles, value: test1, color: cloors })
        return data1
    }
  
    const datetime = (data) => {
        
        const monthValue = moment(data).format('MMM')
        const dateValue = moment(data).format('DD')
        const yearValue = moment(data).format('YYYY')
        return (<span>{`${monthValue} ${dateValue}, ${yearValue}`}</span>)
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



    useEffect(() => {
        setstarted(false)
        props.handle(groupsEventsList.length, groupsEventsList, setchange)
    }, [groupsEventsList])

    return (
        <div className="event-scrollbar" id="event-style">
            <div className="row event-force-overflow me-25" >
                <div style={{ display: started !== false ? '' : 'none' }}>
                    <div className='enable-loader1'>

                        <img src={load} width="80px" height="80px"></img>
                    </div>
                </div>
                {groupsEventsList?.map((data, index) => {
                    return (
                        <div className='col-6 group-activeeventitem' >
                            <div className="card d-flex align-items-center  single-eventSection">
                                <div className="d-flex flex-column">
                                    <div className="parent" style={{ position: "relative" }}>
                                        <div className="d-imagedefault" style={{ display: data.event_image.image_url !== '' ? 'none' : 'flex' }}> <img src={calender} width="20%"></img></div>
                                        <div style={{ margin: "5px" }}>
                                            <img className=" m-auto group-eventimg" style={{ display: data.event_image.image_url === '' ? 'none' : 'flex' }} src={data.event_image.image_url} width="96%" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ position: "" }}>
                                        {/* <div className="col-6 d-flex align-items-center justify-content-start">
                                            <span className="group-hintsocial-whiteimg">{data.hintSocialImg != "" ? <img className="" src={hintsocial_whiteimg} width="58px" height="30px" /> : null}</span>
                                        </div> */}
                                        <div className="col-6 d-flex align-items-center justify-content-end">
                                            <span className="group-userevent-verticalmoreBtn">
                                                {/* <img src={verticalmore2} width="28px" height="28px" /> */}
                                                {(index % 2) == 0 ? <Dropdown className="customDropdown custompositionw3" >
                                                    <Dropdown.Toggle>
                                                        <img src={verticalmore2} width="28" height="28" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="customDropdownmenu customDropdownmenup3">
                                                        <Dropdown.Item onClick={() => deleteevent(data.event_id, data.group_id)} className="ps-50 pt-25 pb-50 customDropdownitem d-flex align-items-center">
                                                            <img className="me-25" src={deleteitem} width="16px" height="16px"></img>
                                                            <span className="textspanlight37">Delete</span>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown> : <Dropdown className="customDropdown custompositionw3 custompositionw3even" >
                                                    <Dropdown.Toggle>
                                                        <img src={verticalmore2} width="28" height="28" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="customDropdownmenu customDropdownmenup3">
                                                        <Dropdown.Item onClick={() => deleteevent(data.event_id, data.group_id)} className="ps-50 pt-25 pb-50 customDropdownitem d-flex align-items-center">
                                                            <img className="me-25" src={deleteitem} width="16px" height="16px"></img>
                                                            <span className="textspanlight37">Delete</span>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>}

                                            </span>

                                        </div>
                                    </div>
                                    {/* {data.isSponser != "" ? <img className="sponsersection" src={eventsponserlogo} width="33%" height="19%" /> : null} */}
                                    <div className=" style_margin">
                                        <span className='textspan2 pb2 ms-75'>{data.event_title}</span>
                                        <div className='d-flex flex-row align-items-center mt-50'>
                                            <img src={location} className="ms-75" width="16px" height="16px"></img>&nbsp;
                                            <span className='textspanlight2'>{data.location}</span>
                                        </div>
                                        <div className='d-flex flex-row align-items-center mt-50 mb-75'>
                                            <span className="d-flex align-items-center justify-content-start col-12">
                                                <img src={calender1} className="ms-75" width="16px" height="16px"></img>
                                                {/* <span className='textspan3 ms-25 me-25' >{datetime(data.start_date)}</span>
                                                <img className="" src={dot} width="5px" height="5px" style={{ display: data.start_time === '' && data.end_time === '' ? 'none' : 'flex' }}></img>&nbsp;&nbsp;
                                                <span className='textspan4  align-items-center justify-content-start' style={{ display: data.start_time === '' && data.end_time === '' ? 'none' : 'flex' }}>{data.start_time} - {data.end_time}</span> */}
                                                 <span className="textspan3 ms-25 me-25">{datetime(data.start_date)}</span>

{data.start_time !== "" ? <img src={dot} width="4px" height="4px" /> : null}
<span className="textspan4  ms-25 align-items-center justify-content-start" >
    {data.start_time !== "" ? <span>{startTimeFormat(data.start_date)}</span> : null}
    {data.start_time !== "" ? <span> to {endTimeFormat(data.end_date)}</span> : null}
</span>
                                            </span>
                                            {/* <span className="col-3 justify-content-center">
                                                {data.isAdmin != "" ? <button className=" btnspan1 d-flex align-items-center justify-content-center">{data.isAdmin}</button> : null}
                                            </span> */}
                                        </div>
                                        <div>
                                            {/* <div className='d-flex flex-row align-items-center mt-50 ' style={{display:}}>
                                                 <span className='textspan3 groupevent-attendingcount'>{data.addendingCount}</span> 
                                            </div> */}
                                            <div className="row" >
                                                <div className="chart-section" >
                                                    {data.no_of_spots !== "" && data.no_of_spots !== "0" ? <div className="spotremaining-section ms-75  mb-75">
                                                        <div className="d-flex align-items-center ">
                                                            <span className="piechart-value ms-75">{data.no_of_spots}</span>
                                                            <span className="piechartt">
                                                                <PieChart
                                                                    animate
                                                                    animationDuration={40}
                                                                    animationEasing="ease-in"
                                                                    data={test(data.no_of_spots)}
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
                                                                {data.remaining_spots_details?.map((datas, index) => {
                                                                    return (
                                                                        <span className="textspan3">&nbsp;{datas.remaining_spots} Spots Remaining</span>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div> : null}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
                <div style={{ display: groupsEventsList.length === 0 ? 'flex' : 'none' }} className=" justify-content-center mt-5">
                    <span className="text-danger">Events Not Found</span>
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    console.log("map state to props**:", state)
    return {
        eventsGroupsdata: state.eventsGroupsdata
    }
}
export default connect(mapStateToProps, {})(ActiveEventsTab)
