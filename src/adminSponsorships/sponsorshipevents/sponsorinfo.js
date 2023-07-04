import React, { useState } from "react"
import grp from '../../assets/images/dashboardimg/groups.png'
import logos from '../../assets/images/dashboardimg/logo.png'
import calendar from '../../assets/images/dashboardimg/calender.png'
import infocircle from '../../assets/images/dashboardimg/info-circle1.png'
import birthdaycakefire from '../../assets/images/dashboardimg/birthdaycakefire.png'
import dots from '../../assets/images/dashboardimg/point.png'
import gender from '../../assets/images/dashboardimg/edit-logo13.png'
import location from '../../assets/images/dashboardimg/location.png'
import SponsorPop from './sponsoreventspopup'

const Sponsor_Info = () => {
    const [button] = useState([])
    const [json] = useState([])
    return (
        <div>
            <div className='d-flex justify-content-between '>
                <span className=''>
                    <img src={grp} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'>Sponsor’s Name</span> </span>
                <span className='generalinfo_righttext'></span>

            </div>

            <hr style={{ border: "1px solid #CCD8DB" }} className="mt-1"></hr>
            <div className='d-flex justify-content-between' style={{ marginBottom: "" }}>
                <span className='generalinfo_associategrp'>Sponsor’s Logo or Image<div className="mt-1">
                    <span className=" sponsorship_style">Hint Social Event</span>
                    <img src={infocircle} width="22px" height="22px" className=''></img>
                </div>
                </span>
                {/* <span className='generalinfo_righttext card p-2'>
                    <img src={logos} height="70px" ></img>
                </span> */}

            </div>
            <hr style={{ border: "1px solid #CCD8DB" }} className="mt-50"></hr>
            <div className='d-flex justify-content-between mt-1'>
                <span className='generalinfo_associategrp'>Sponsor Link</span>
                <span className='generalinfo_righttext'></span>

            </div>
            <div className='d-flex justify-content-between mt-1'>
                <span className='generalinfo_associategrp'>Sponsorship Cost</span>
                <span className='generalinfo_righttext'></span>

            </div>
            <div className='d-flex flex-column  mt-1'>
                <span className='generalinfo_associategrp'>Notes</span>


            </div>
            <div className='d-flex flex-column  mt-1'>
                <span className='generalinfo_righttext' style={{ textAlign: "left" }}>
                    {/* High Noon will be bringing drinks to the event to sponsor their new drink */}
                </span>
            </div>
            <hr style={{ border: "1px solid #CCD8DB" }} className="mt-75"></hr>
            <div className='d-flex justify-content-between mt-1'>
                <span className=''>
                    <img src={calendar} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'>Start Date</span> </span>
                <span className='generalinfo_righttext'></span>

            </div>
            <div className='d-flex justify-content-between mt-1'>
                <span className=''>
                    <img src={calendar} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'>End Date</span> </span>
                <span className='generalinfo_righttext'></span>

            </div>
            <hr style={{ border: "1px solid #CCD8DB" }} className="mt-75"></hr>
            <div className="col-12">
                <span className='generalinfo_associategrp'>Targeted Groups</span>
            </div>
            <div className='col-12'>
                {button.map((res) => {
                    return (
                        <div className='col-12 mt-1'>
                            <button className='generalinfo_buttons p-75'><span className='generalinfo_buttonsstyle'>{res.name}</span></button>
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
                    {/* 20-35 <img src={dots} width="4px" height="4px" className='me-50 mb-25 ms-25'></img>40-55 */}
                </span>

            </div>
            <div className='d-flex justify-content-between  mt-1'>
                <span className=''>
                    <img src={location} width="22px" height="22px" className='mb-25 me-25'></img> <span className='generalinfo_associategrp'>Location</span> </span>


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

                <span className='generalinfo_righttext'>
                    {/* <img src={dots} width="4px" height="4px" className='me-50 mb-25 ms-25'></img>
                    <img src={dots} width="4px" height="4px" className='me-50 mb-25 ms-50 '></img> */}
                </span>

            </div>
            {/* <SponsorPop></SponsorPop> */}
            {/* <div className='d-flex justify-content-center align-items-center mt-3 mb-1'>
    <img src={deletes} width="24px" height="24px" className='me-25'></img><span className='generalinfo_bottomtext'>End Sponsorship</span>
</div> */}
        </div>
    )
}
export default Sponsor_Info