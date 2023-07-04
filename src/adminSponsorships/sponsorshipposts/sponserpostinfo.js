import React, { useEffect, useState } from "react"
import grp from '../../assets/images/dashboardimg/groups.png'
import logos from '../../assets/images/dashboardimg/logo.png'
import calendar from '../../assets/images/dashboardimg/calender.png'
import infocircle from '../../assets/images/dashboardimg/info-circle1.png'
import birthdaycakefire from '../../assets/images/dashboardimg/birthdaycakefire.png'
import dots from '../../assets/images/dashboardimg/point.png'
import gender from '../../assets/images/dashboardimg/edit-logo13.png'
import location from '../../assets/images/dashboardimg/location.png'
import SponsorPop from '../sponsorshipevents/sponsoreventspopup'
import start from '../../assets/images/dashboardimg/starshs.png'
import { useSelector } from "react-redux"

const SponsorPost_Info = (props) => {
    const [button] = useState([])
    const [json] = useState([])
    const authStat_getSponsorEventDetails = useSelector((state) => state.getAllSponsorPostsData)
    const [sponsorPostDetails, setSponsorPostDetails] = useState([])

    useEffect(() => {
        if (authStat_getSponsorEventDetails.sponsorPostDetailsData != undefined && authStat_getSponsorEventDetails.sponsorPostDetailsData.post_id !== undefined) {
            console.log(authStat_getSponsorEventDetails.sponsorPostDetailsData)
            setSponsorPostDetails([authStat_getSponsorEventDetails.sponsorPostDetailsData])
        }
    }, [authStat_getSponsorEventDetails.sponsorPostDetailsData])

    return (
        <div>
            <div className='d-flex justify-content-between '>
                <span className=''>
                    <img src={grp} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'>Sponsor’s Name</span> </span>
                <span className='generalinfo_righttext'></span>

            </div>

            <hr style={{ border: "1px solid #CCD8DB" }} className="mt-1"></hr>
            <div className='d-flex justify-content-between' style={{ marginBottom: "-15px" }}>
                <span className='generalinfo_associategrp'>Sponsor’s Logo or Image<div className="mt-1"></div></span>
                {/* <span className='generalinfo_righttext card p-2'> <img src={start} height="70px" ></img></span> */}

            </div>
            <hr style={{ border: "1px solid #CCD8DB" }} className="mt-25"></hr>
            <div className='d-flex justify-content-between mt-1'>
                <span className='generalinfo_associategrp'>Sponsor URL</span>
                <span className='generalinfo_righttext'></span>

            </div>

            <hr style={{ border: "1px solid #CCD8DB" }} className="mt-75"></hr>
            <div className='d-flex justify-content-between mt-1'>
                <span className=''>
                    <img src={calendar} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'>Start Date</span> </span>
                <span className='generalinfo_righttext'>
                    {/* <img src={dots} width="4px" height="4px" className='me-50 mb-25 ms-50'></img> */}
                </span>

            </div>
            <div className='d-flex justify-content-between mt-1'>
                <span className=''>
                    <img src={calendar} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'>End Date</span> </span>
                <span className='generalinfo_righttext'>
                    {/* <img src={dots} width="4px" height="4px" className='me-50 mb-25 ms-50'></img> */}
                </span>

            </div>
            <hr style={{ border: "1px solid #CCD8DB" }} className="mt-75"></hr>
            <div className="col-12">
                <span className='generalinfo_associategrp'>Targeted Groups</span>
            </div>
            <div className='col-12'>
                {button.map((res) => {
                    return (
                        <div className='col-12 mt-1'>
                            <button className='generalinfo_buttons p-75'><span className='generalinfo_buttonsstyle'></span></button>
                        </div>
                    )
                })}
            </div>
            <hr style={{ border: "1px solid #CCD8DB" }} className="mt-2"></hr>
            <div className="col-12 mt-1">
                <span className='generalinfo_associategrp'>Target Audience</span>
            </div>
            <div className='d-flex justify-content-between  mt-1'>
                <span className=''>
                    <img src={birthdaycakefire} width="22px" height="22px" className='mb-25 me-25'></img> <span className='generalinfo_associategrp'>Age Range</span> </span>
                <span className='generalinfo_righttext'>
                    {/* <img src={dots} width="4px" height="4px" className='me-50 mb-25 ms-25'></img> */}
                </span>

            </div>
            <div className='d-flex justify-content-between  mt-1'>
                <span className=''>
                    <img src={location} width="22px" height="22px" className='mb-25 me-25'></img>
                    <span className='generalinfo_associategrp'>Location</span> </span>


            </div>
            <div className='d-flex'>
                {json.map((res) => {
                    return (
                        <div className='d-flex flex-row mt-1 me-1 '>
                            <button className='generalinfo_buttons  p-75' style={{ width: "85px", height: "40px" }}><span className='generalinfo_buttonsstyle'>{res.name}</span></button>
                        </div>
                    )
                })}
            </div>
            <div className='d-flex justify-content-between  mt-2'>
                <span className=''>
                    <img src={gender} width="19px" height="22px" className='mb-25 me-25'></img> <span className='generalinfo_associategrp'>Gender Identity</span> </span>


            </div>
            <div className='d-flex  mt-1 '>

                {/* <span className='generalinfo_righttext'>Male 
                <img src={dots} width="4px" height="4px" className='me-50 mb-25 ms-25'></img>Intersex Men
                <img src={dots} width="4px" height="4px" className='me-50 mb-25 ms-50 '></img>Female</span> */}

            </div>
            <SponsorPop></SponsorPop>
            {/* <div className='d-flex justify-content-center align-items-center mt-3 mb-1'>
    <img src={deletes} width="24px" height="24px" className='me-25'></img><span className='generalinfo_bottomtext'>End Sponsorship</span>
</div> */}
        </div>
    )
}
export default SponsorPost_Info