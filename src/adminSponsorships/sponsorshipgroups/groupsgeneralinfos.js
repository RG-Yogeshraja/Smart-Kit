import grp from '../../assets/images/dashboardimg/groups.png'
import calendar from '../../assets/images/dashboardimg/calender.png'
import dots from '../../assets/images/dashboardimg/point.png'
import home from '../../assets/images/dashboardimg/venue.png'
import loc from '../../assets/images/dashboardimg/location.png'
import deletes from '../../assets/images/dashboardimg/trash.png'
import AdminInfo from '../sponsorshipevents/admininfo.js'
import SponsorPop from '../sponsorshipevents/sponsoreventspopup'
import Invitememberses from '../sponsorshipevents/invitemembers.js'
import Reports from '../sponsorshipevents/reports'
import React, { useState } from "react"
const General_info_Groups = (props) => {
    const [button] =  useState([{id:"11", name:"Comedy"}])    
return (
    <div>
        <span className="generalinfo_normaltext">{props.data}</span>
<hr style={{border: "1px solid #CCD8DB"}} className="mb-2"></hr>


<div className='d-flex justify-content-between mt-1'>
    <span className=''>
    <span className='generalinfo_associategrp'>Location</span> </span>
    <span className='generalinfo_righttext'>South Boston, MA</span>
 
</div>
<hr style={{border: "1px solid #CCD8DB"}} className='mb-2 mt-2'></hr>
<div>
    <span className='generalinfo_admins'>Admins (2)</span>
    <AdminInfo></AdminInfo>
</div>
<div className='mt-1'>
    <span className='generalinfo_associategrp'>Interest Tags</span>
<div className='col-12'>
{button.map((res) => {
    return (
        <div className='col-12 mt-1'>
            <button className='generalinfo_buttons p-75'><span className='generalinfo_buttonsstyle'>{res.name}</span></button>
            </div>
     )
    })}
</div>
<hr style={{border: "1px solid #CCD8DB"}} className='mt-2'></hr>
<div className='col-12 mt-1'>
    <span className='generalinfo_admins'>Invited Members (10)</span>
  <Invitememberses></Invitememberses>
</div>

</div>

{/* <div className='d-flex justify-content-center align-items-center mt-3 mb-1'>
    <img src={deletes} width="24px" height="24px" className='me-25'></img><span className='generalinfo_bottomtext'>End Sponsorship</span>
</div> */}

</div>

   
)
}
export default General_info_Groups