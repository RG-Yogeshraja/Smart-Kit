import React, { useState } from "react"
import grp from '../../assets/images/dashboardimg/groups.png'
import logos from '../../assets/images/dashboardimg/imgsss.png'
import calendar from '../../assets/images/dashboardimg/calender.png'
import infocircle from '../../assets/images/dashboardimg/info-circle1.png'
import birthdaycakefire from '../../assets/images/dashboardimg/birthdaycakefire.png'
import dots from '../../assets/images/dashboardimg/point.png'
import gender from '../../assets/images/dashboardimg/edit-logo13.png'
import location from '../../assets/images/dashboardimg/location.png'
import SponsorPop from '../sponsorshipevents/sponsoreventspopup'

const Sponsor_InfoGroups = () => {
    const [button] =  useState([{id:"11", name:"Comedy Crew"}])
    const [json] =  useState([{id:"11", name:"Miami"}, {id:"12", name:"Texas"}, {id:"13", name:"Boston"}])
    return (
        <div>
<div className='d-flex justify-content-between '>
    <span className=''>
    <img src={grp} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'>Sponsor’s Name</span> </span>
    <span className='generalinfo_righttext'>chewy</span>
 
</div>

<hr style={{border: "1px solid #CCD8DB"}} className="mt-1"></hr>
<div className='d-flex justify-content-between' style={{marginBottom:"-15px"}}>
     <span className='generalinfo_associategrp'>Sponsor’s Logo or Image<div className="mt-1"></div></span>
    <span className='generalinfo_righttext card p-2'> <img src={logos}  height="70px" ></img></span>
 
</div>
<hr style={{border: "1px solid #CCD8DB"}} className="mt-25"></hr>



 <div className='d-flex justify-content-between mt-1'>
    <span className=''>
    <img src={calendar} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'>Start Date</span> </span>
    <span className='generalinfo_righttext'>June 10, 2022</span>
 
</div>
<div className='d-flex justify-content-between mt-1'>
    <span className=''>
    <img src={calendar} width="22px" height="22px" className='mb-25'></img> <span className='generalinfo_associategrp'>End Date</span> </span>
    <span className='generalinfo_righttext'>June 14, 2022</span>
 
</div>
<hr style={{border: "1px solid #CCD8DB"}} className="mt-75"></hr>

<div className='d-flex justify-content-between mt-1 mb-5'>
 <span className='generalinfo_associategrp'>Sponsorship Cost</span> 
    <span className='generalinfo_righttext'>$20 per sponsorship</span>
 
</div>

        </div>
    )
}
export default Sponsor_InfoGroups