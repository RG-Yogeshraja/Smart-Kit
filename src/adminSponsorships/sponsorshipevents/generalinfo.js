import grp from '../../assets/images/dashboardimg/groups.png'
import calendar from '../../assets/images/dashboardimg/calender.png'
import dots from '../../assets/images/dashboardimg/point.png'
import home from '../../assets/images/dashboardimg/venue.png'
import loc from '../../assets/images/dashboardimg/location.png'
import deletes from '../../assets/images/dashboardimg/trash.png'
import AdminInfo from './admininfo.js'
import SponsorPop from './sponsoreventspopup'
import Invitememberses from './invitemembers.js'
import Reports from './reports'
import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import moment from 'moment'


const General_info = (props) => {
    const [button] = useState([{ id: "11", name: "Comedy" }])
    const [getSonsorEventDetails, setSponsorEventDetails] = useState([])
    const authStat_getSponsorEventDetails = useSelector((state) => state.getAllSponsorEventsData)


    const datetime = (data) => {
        const monthValue = moment(data).format('MMM')
        const dateValue = moment(data).format('DD')
        return (<span>{`${monthValue}. ${dateValue}`}</span>)
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
        
        if (authStat_getSponsorEventDetails.sponsorEventDetailsData != undefined && authStat_getSponsorEventDetails.sponsorEventDetailsData.event_id !== undefined) {
                 
          console.log(authStat_getSponsorEventDetails.sponsorEventDetailsData)
          setSponsorEventDetails([authStat_getSponsorEventDetails.sponsorEventDetailsData])
        }
      }, [authStat_getSponsorEventDetails.sponsorEventDetailsData])

    return (
        <div>
            {getSonsorEventDetails?.map((data) => {
                return (
                    <div>
                        <span className="generalinfo_normaltext">{data.description}</span>
                        <hr style={{ border: "1px solid #CCD8DB" }} className="mb-2"></hr>
                        <div className='d-flex justify-content-between align-items-between'>
                            <div className='col-7'>
                                <span className=''>
                                    <img src={grp} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'> Associated Group</span> </span></div>
                            <div className=''>
                                <span className='generalinfo_righttext'>{data.group_name}</span></div>
                        </div>
                        {/* <div className='d-flex justify-content-between'>
                            <span className=''>
                                <img src={grp} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'> Associated Group</span> </span>
                            <span className='generalinfo_righttext'>{data.general_info.group_name}</span>

                        </div> */}
                        <hr style={{ border: "1px solid #CCD8DB" }} className='mb-2'></hr>
                        <div className='d-flex justify-content-between mt-2'>
                            <div className='col-4'>
                                <span className=''>
                                    <img src={calendar} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'>Date</span> </span></div>
                            <div>
                                <span className='generalinfo_righttext pe-50'>{datetime(data.start_date)}</span>
                                {/* <img src={dots} width="5px" height="5px" className='me-25'></img>5:30 PM to 6:30 PM</span> */}
                                {data.start_date != "" ? <img src={dots} width="5px" height="5px" /> : null}
                                <span className="generalinfo_righttext ps-25">
                                    {data.start_date != "" ? <span>{startTimeFormat(data.start_date)}</span> : null}
                                    {data.start_date != "" ? <span> to {endTimeFormat(data.end_date)}</span> : null}
                                </span>
                            </div>

                        </div>
                        <div className='d-flex justify-content-between mt-2'>
                            <div className='col-4'>
                                <span className=''>
                                    <img src={home} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'>Venue</span> </span></div>
                            <div className=''>
                                <span className='generalinfo_righttext'>{data.location}</span></div>

                        </div>
                        <div className='d-flex justify-content-between mt-2'>
                            <div className='col-4'>
                                <span className=''>
                                    <img src={loc} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'>Address</span> </span></div>
                            <div className=''>
                                <span className='generalinfo_righttext'>{data.address}</span></div>

                        </div>
                        <hr style={{ border: "1px solid #CCD8DB" }} className='mb-2'></hr>
                        <div className='d-flex justify-content-between mt-1'>
                            <span className='generalinfo_associategrp'>Limited Spots</span>

                            {data.is_limited_spots_enable == 0 ?
                                <span className='generalinfo_righttext'>No</span> :
                                <div>
                                    <span className='generalinfo_righttext'>No</span>
                                    {/* <img src={dots} width="5px" height="5px" className='ms-50 me-75'></img> */}
                                    <span className='generalinfo_righttext'></span>
                                </div>
                            }
                            {/* <span className='generalinfo_righttext'>Yes <img src={dots} width="5px" height="5px" className='ms-50 me-75'></img>60 spots</span> */}

                        </div>
                        <hr style={{ border: "1px solid #CCD8DB" }} className='mb-2 mt-2'></hr>
                        <div className='d-flex justify-content-between mt-1'>
                            <span className='generalinfo_associategrp'>Event Link</span>
                            <span className='generalinfo_righttext'>{ }</span>

                        </div>
                        <hr style={{ border: "1px solid #CCD8DB" }} className='mb-2 mt-2'></hr>
                        <div>
                            <span className='generalinfo_admins'>Admins (1)</span>
                            <AdminInfo adminDetails={data.admin_details}></AdminInfo>
                        </div>
                        <div className='mt-1'>
                            <span className='generalinfo_associategrp'>Interest Tags</span>


                            <div className='row' >

                                <div className='col-12'>
                                    {data.interest?.map((res) => {
                                        return (
                                            <button className='generalinfo_buttons p-50 me-1 mt-1' style={{ display: res === "" ? 'none' : '' }}>
                                                <span className='generalinfo_buttonsstyle' >{res}</span>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>


                            <hr style={{ border: "1px solid #CCD8DB" }} className='mt-2'></hr>
                            <div className='col-12 mt-1'>
                                <span className='generalinfo_admins'>Invited Members (0)</span>
                                {/* <Invitememberses></Invitememberses> */}
                            </div>
                        </div>
                        {/* ****** PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint **** */}
                        {/* <hr style={{border: "1px solid #CCD8DB"}} className='mt-2'></hr>
<div className='col-12 mt-1'>
    <span className='generalinfo_admins'>Reports (1)</span>
 <Reports></Reports>
</div> */}
                        {/* <div className='d-flex justify-content-center align-items-center mt-3 mb-1'>
    <img src={deletes} width="24px" height="24px" className='me-25'></img><span className='generalinfo_bottomtext'>End Sponsorship</span>
</div> */}
                        <SponsorPop></SponsorPop>
                    </div>
                )
            })}
        </div>


    )
}
export default General_info