import grp from '../assets/images/dashboardimg/groups.png'
import calendar from '../assets/images/dashboardimg/calender.png'
import dots from '../assets/images/dashboardimg/point.png'
import home from '../assets/images/dashboardimg/venue.png'
import loc from '../assets/images/dashboardimg/location.png'
import '../@core/scss/base/adminDashboard/sponsorshipsmenu/sideprofile.scss'
import AdminInfo from '../adminSponsorships/sponsorshipevents/admininfo'
import SponsorPop from '../adminSponsorships/sponsorshipevents/sponsoreventspopup'
import Invitememberses from '../adminSponsorships/sponsorshipevents/invitemembers'
import Reports from '../adminSponsorships/sponsorshipevents/reports'
import React, { useState, useEffect } from "react"
import EditprofilePopup from './events-editpopup'
import { connect, useDispatch, useSelector } from 'react-redux'
import defaultuserprofilepicture from '../assets/images/dashboardimg/defaultuserprofilepicture.png'
import dot from '../assets/images/dashboardimg/Ellipse11.png'
import birthdaycakefire from '../assets/images/dashboardimg/birthdaycakefire.png'
import moment from 'moment'
import calendardark from '../assets/images/dashboardimg/calendardark.png'
import calendars from '../assets/images/dashboardimg/backgroundcalendar.png'
import blankimages from '../assets/images/dashboardimg/blank-image.png'
import { clearEventDetails, tabSwitchingCall } from './slice-adminevents/slice-geteventdetails'

const Profile_sidepanel = (props) => {
    const dispatch = useDispatch()
    const [sub, setsubtext] = useState('Fitness Crew')
    const [getlen, setlen] = useState([])
    const [act, setact] = useState(true)
    const authStat_getEventDetails = useSelector((state) => state.getEventDetailsData)
    const [individualEventDetails, setIndividualEventDetails] = useState([])
    const authStat_getEventDetailsFromFilter = useSelector((state) => state.getEvent_filterDetail)
    // const authvals = useSelector((state) => state.getEvent_filterDetail)
    // const authStat_getAllActiveEventsData = useSelector((state) => state.getAllActiveEventsData)

    // useEffect(() => {
    //     if ((authvals.getEvent_dataval.responseCode == 200) ||  (authStat_getAllActiveEventsData.data.responseCode == 200)) {
    //         setIndividualEventDetails([])
    //     }
    // }, [authvals.getEvent_dataval, authStat_getAllActiveEventsData.data])

    // useEffect(() => {
    //     
    //     if (authStat_getEventDetails.tabSwitchingdata != undefined && authStat_getEventDetails.tabSwitchingloading == 'idle') {
    //         console.log(authStat_getEventDetails.tabSwitchingdata)
            // alert(authStat_getEventDetails.tabSwitchingdata.tabId)
            // setIndividualEventDetails([])
            // dispatch(clearEventDetails())
        // }
    // }, [authStat_getEventDetails.tabSwitchingdata])


    // useEffect(() => {
    //     if (authvals.getEvent_dataval.responseCode === 200) {
    //         
    //         const responseData = [...authvals.getEvent_dataval.responseBody]
    //         if (responseData.length !== 0) {
    //             const filterActiveEventsOnly = responseData.filter((item) => item.is_active != undefined)
    //             if (filterActiveEventsOnly.length === 0) {
    //                 console.log('pass')   
    //                 // setIndividualEventDetails([])
    //                 // dispatch(clearEventDetails())
    //             } 
    //             // const filterPastEventsOnly = responseData.filter((item) => item.is_past != undefined)
    //             // if (filterPastEventsOnly.length === 0) {
    //             //     setIndividualEventDetails([])
    //             // }
    //         }
    //     }
    // }, [authvals.getEvent_dataval])

    //1 get event details when no filter apply
    useEffect(() => {
        // setIndividualEventDetails([])
        if (authStat_getEventDetails.data.responseBody != undefined && authStat_getEventDetails.data.responseCode == 200) {
            setIndividualEventDetails(authStat_getEventDetails.data.responseBody)
            console.log('detailsssss:', authStat_getEventDetails.data)
        }
        else {
            setIndividualEventDetails([])
        }
    }, [authStat_getEventDetails.data])


    //2 get event details when apply the filter
    useEffect(() => {
        // setIndividualEventDetails([])
        if (authStat_getEventDetailsFromFilter.getEvent_dataval.responseCode === 200) {
            const responseData = [...authStat_getEventDetailsFromFilter.getEvent_dataval.responseBody]
            if (responseData.length !== 0) {
                setlen(responseData)
                setIndividualEventDetails(responseData)
            }
            else {
                setIndividualEventDetails([])
                setlen([])
            }
        }
        else {
            setIndividualEventDetails([])
        }
    }, [authStat_getEventDetailsFromFilter.getEvent_dataval])


    const changebirth = (val) => {
        if (val !== undefined) {
            const datas = val
            const today = new Date()
            const birthDate = new Date(datas)
            let age_now = today.getFullYear() - birthDate.getFullYear()
            const m = today.getMonth() - birthDate.getMonth()
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age_now--
            }
            return <>{age_now}</>
        }
    }

    const datetime = (data) => {
        const monthValue = moment(data).format('MMM')
        const dateValue = moment(data).format('DD')
        return (<span>{`${monthValue}. ${dateValue}`}</span>)
    }

    const startTimeFormat = (data) => {

        const localDateTimeConversion = new Date(data)
        const UTCTimePick = moment(localDateTimeConversion, "h:mmA").format("HH:mm")
        const localTimeConversion = moment(UTCTimePick, ["HH:mm"]).format("hh:mm A")
        console.log(localTimeConversion, "aaaa")
        return (<span>{localTimeConversion}</span>)
    }

    const endTimeFormat = (data) => {

        const localDateTimeConversion = new Date(data)
        const UTCTimePick = moment(localDateTimeConversion, "h:mmA").format("HH:mm")
        const localTimeConversion = moment(UTCTimePick, ["HH:mm"]).format("hh:mm A")
        console.log(localTimeConversion)
        return (<span>{localTimeConversion}</span>)
    }

    return (
        <>
            <div className='card col-12 p-2 d-flex flex-column' style={{ display: getlen.length !== 0 ? '' : 'none' }}>
                {individualEventDetails?.map((data) => {
                    return (
                        <div>
                            <div className='col-12 d-flex flex-column justify-content-center'>
                                {data.event_image_details.image_url != '' ?
                                    <img style={{ position: "relative", borderRadius: "10px" }} height="300px" src={data.event_image_details.image_url}></img> :
                                    <>
                                        <img style={{ position: "relative" }} height="300px" src={blankimages}></img>
                                        <img src={calendardark} width="150px" style={{ position: 'absolute', marginLeft: '72px', marginTop: '12px' }}></img>
                                    </>
                                }
                                <div style={{ position: "absolute", marginBottom: "-175px" }} className=' col-10  d-flex  justify-content-between align-items-center'>
                                    <span className='mx-50' style={{ fontWeight: "bolder", fontSize: "25px", color: 'white', marginTop: "50px" }}  >{data.event_title}</span>

                                </div>
                                <EditprofilePopup data={act} individualEventDetailsEdit={data} value='edit' ></EditprofilePopup>
                                <div className='sideprofile-timesection d-flex justify-content-center flex-column align-items-center  pt-25 w-25' style={{ position: "absolute", top: "50px", left: "40px" }}>


                                    <span className='sideprofile-eventdate'>{datetime(data.start_date)}</span>
                                    {data.start_time != "" ? <span className='sideprofile-eventtime'>{startTimeFormat(data.start_date)}</span> : <span className='sideprofile-eventtime pb-2'></span>
                                    }
                                    {/*                                     
{data.start_time !== "" ? <img src={dot} width="4px" height="4px" /> : null}
<span className="sponser-textspanbold6 ps-50" style={{ fontSize: "17px" }}>
    {data.start_time !== "" ? <span>{startTimeFormat(item.start_date)}</span> : null}
    {data.start_time !== "" ? <span> to {endTimeFormat(data.end_date)}</span> : null}
</span> */}
                                </div>
                                {/* <Sponsor_Edit data={imgsdes} data1={valueset} value="edit"></Sponsor_Edit> */}
                                {/* <div className="d-flex align-items-center">
                                    <img src={text} width={imgswidth}
                                        className='' style={{ position: "absolute", left: "0px", marginLeft: "30px", marginBottom: "50px" }}></img>
                                </div> */}
                            </div>
                            <div className='mt-1' style={{ position: "relative" }} >
                                <div className=''>
                                    <span className="generalinfo_normaltext">{data.description}</span>
                                </div>
                                <hr style={{ border: "1px solid #CCD8DB" }} className="mb-1"></hr>
                                <div className='d-flex justify-content-between'>
                                    <span className=''>
                                        <img src={grp} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'> Associated Group</span> </span>
                                    <span className='generalinfo_righttext'>{data.group_name}</span>
                                </div>
                                <hr style={{ border: "1px solid #CCD8DB" }} className='mb-1'></hr>
                                <div className='d-flex justify-content-between align-items-center mt-1'>
                                    <div className=''>
                                        <img src={calendar} width="22px" height="22px" className='mb-25'></img>
                                        <span className='generalinfo_associategrp'>Date</span>
                                    </div>
                                    <div>
                                        <span className='generalinfo_righttext pe-50'>{datetime(data.start_date)}</span>
                                        {/* <img src={dots} width="5px" height="5px" className='me-25'></img>5:30 PM to 6:30 PM</span> */}
                                        {data.start_time != "" ? <img src={dots} width="5px" height="5px" /> : null}
                                        <span className="generalinfo_righttext ps-25">
                                            {data.start_time != "" ? <span>{startTimeFormat(data.start_date)}</span> : null}
                                            {data.start_time != "" ? <span> to {endTimeFormat(data.end_date)}</span> : null}
                                        </span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between mt-1'>
                                    <span className=''>
                                        <img src={home} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'>Venue</span> </span>
                                    <span className='generalinfo_righttext'>{data.location}</span>

                                </div>
                                <div className='d-flex justify-content-between mt-1 row'>
                                    <div className='col-5 pe-0'>
                                        <img src={loc} width="22px" height="22px" className='mb-25'></img>
                                        <span className='generalinfo_associategrp'>Address</span>
                                    </div>
                                    <span className='generalinfo_righttext col-7'>{data.event_address}</span>

                                </div>
                                <hr style={{ border: "1px solid #CCD8DB" }} className='mb-1'></hr>
                                <div className='d-flex justify-content-between '>
                                    <span className='generalinfo_associategrp'>Limited Spots</span>
                                    {data.is_limited_spots_enable == '1' ? <div>
                                        <span className='generalinfo_righttext'>Yes</span>
                                        <img src={dots} width="5px" height="5px" className='ms-50 me-75'></img>
                                        <span className='generalinfo_righttext'>{data.no_of_spots} spots</span>
                                    </div> : <span className='generalinfo_righttext'>No</span>}
                                </div>
                                <hr style={{ border: "1px solid #CCD8DB" }} className='mb-1 mt-1'></hr>
                                <div className='d-flex justify-content-between '>
                                    <span className='generalinfo_associategrp'>Event Link</span>
                                    <span className='generalinfo_righttext'>{data.event_url}</span>

                                </div>
                                <hr style={{ border: "1px solid #CCD8DB" }} className='mb-1 mt-1'></hr>
                                <div>
                                    {/* {((data.event_admin_details).length) == 1 ? <span className='generalinfo_admins'>Admin </span> : <span className='generalinfo_admins'>Admins </span>} */}
                                    <span className='generalinfo_admins'>Admins(1)</span>
                                    {/* <span className='generalinfo_admins'>({(data.event_admin_details).length})</span> */}
                                    <AdminInfo eventDetailsData={data.event_admin_details} createdBy={data.created_by}></AdminInfo>
                                </div>
                                <div className='mt-1'>
                                    <span className='generalinfo_associategrp'>Interest Tags</span>
                                    <div className='row'>
                                        {/* <div className='row' style={{ display: ((data.event_interest).length) !== 0 ? '' : 'none' }}> */}

                                        <div className='col-12'>
                                            {data.event_interest?.map((item) => {
                                                return (
                                                    <button className='generalinfo_buttons p-50 me-1 mt-1' style={{ display: item === "" ? 'none' : '' }}>
                                                        <span className='generalinfo_buttonsstyle' >{item}</span>
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <hr style={{ border: "1px solid #CCD8DB" }} className='mt-1'></hr>
                                    <div className='col-12 mt-1'>
                                        {/* <span className='generalinfo_admins'>Invited Members ({data.invited_member_details})</span> */}
                                        <span className='generalinfo_admins'>Invited Members</span>


                                        <div className='sonsor_scrollbars' id="style-2">
                                            <div className='col-12 mt-2' id="style-2">
                                                {data.invited_member_details?.map((data) => {
                                                    return (
                                                        <div className='col-12'>
                                                            <div className='row align-items-center pb-2'>
                                                                <div className='col-1 me-2'>
                                                                    {data.user_image != "" ? <img src={data.user_image} width="54px" height="54px" style={{ borderRadius: "15px" }} /> : <img src={defaultuserprofilepicture} width="54px" height="54px" style={{ borderRadius: "15px" }} />
                                                                    }
                                                                </div>
                                                                <div className='col-8 users-friendslist'>
                                                                    <div className='d-flex flex-column'>
                                                                        <div className=''>
                                                                            <span className='textspan1 userfriendname pe-1 ps-1'>{data.full_name}</span>
                                                                            {data.is_declined == 0 && data.is_member == 0 && data.is_pending && data.is_waiting == 0 ? <span className='act_text txtss'>Pending</span> : null
                                                                            }
                                                                            {data.is_declined == 0 ? <span className='act_text txtss'>Pending</span> : null}
                                                                            {data.is_member == 1 ? <span className='act_text txtss'>Accepted</span> : null}
                                                                            {data.is_pending == 1 ? <span className='act_text txtss'>Pending</span> : null}
                                                                        </div>

                                                                        <div className='d-flex align-items-center biodatasection mt-25'>
                                                                            {data.location != "" ?
                                                                                <>
                                                                                    <img src={loc} width="16px" height="16px"></img>&nbsp;
                                                                                    <span className='textspanlight1'>{data.location}</span>
                                                                                </> : null}
                                                                            {data.birth_date != "" ?
                                                                                <>
                                                                                    <img className="ms-25 me-25" src={dot} width="4px" height="4px" ></img>
                                                                                    <img className="" src={birthdaycakefire} width="16px" height="16px"></img>&nbsp;
                                                                                    <span className='textspanlight1 '>{changebirth(data.birth_date)}</span>
                                                                                </> : null
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>


                                    </div>
                                    {/* <hr style={{ border: "1px solid #CCD8DB" }} className='mt-1'></hr> */}
                                </div>

                                {/* Commented cause of No need of Event report section in this version ******* */}
                                {/* <div className='col-12 mt-1'>
                                    <span className='generalinfo_admins'>Reports (1)</span>
                                    <div className='d-flex justify-content-center mt-1'>
                                        <div className='reports_style col-12 d-flex align-items-center p-50'>
                                            <div className='col-2'>
                                                <img src={profilepic} width="54px" height="54px" className=''></img>
                                            </div>
                                            <div className='col-10 ms-2'>
                                                <span className='event_smallertextes'>Yoga for Beginners Event</span>
                                                <div>
                                                    <span className='event_smallertextes_smallsizes'>Reported by Amy Delacruz</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {})(Profile_sidepanel)