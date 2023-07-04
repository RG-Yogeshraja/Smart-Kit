
import React, { useState } from 'react'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsoreventsmenu/sponsoreventsfilterpopup.scss'
// import SponsorFilterpopup from "./sponsoreventsfilterpopupmain"
// import Sponsormanagesettingtagpopup from './sponsorshipeventsmanagesettingtags's'
// import GroupsMainPanel from './sponsorshipeventmaintab'
// import Sideprofile from './sideprofile'
import Groupsfilterpopup from '../sponsorshipgroups/groupsfilterpopup'

const SponsorshipGroupsMain = () => {
    const [dat, valdat] = useState(true)
    const [active, setactive] = useState(false)
    const [pending, setpending] = useState(false)
    const [deleted, setdeleted] = useState(false)
    const friendsactivetab = () => {
        setactive(true)
        setpending(false)
        setdeleted(false)
    }
    const friendspendingtab = () => {
        setdeleted(false)
        setactive(false)
        setpending(true)
       
    }
    const friendsdeletedtab = () => {
        setactive(false)
        setpending(false)
        setdeleted(true)
       
    }
    
    return (
    <>
            {/* <div className='row'>

                <div className='col-5 d-flex '>
                    <span className="font-eventssponsor mt-1">Post Sponsorships</span>
                </div>
                <div className='col-7 d-flex justify-content-end '>
                    <div className='mx-2'>
                 {/* <Postfilter></Postfilter> */}
{/* <Groupsfilterpopup></Groupsfilterpopup>
                    </div> */} 
                 
                <div className='sponsership-bodycenter-panel'>
<div className="d-flex justify-content-between">
<span className="font-eventssponsor mt-1">Group Sponsorships</span>
<Groupsfilterpopup></Groupsfilterpopup>
    </div>
                </div>
                <div className='sponsership-bodyright-panel'>
                    {/* <postfil */}
                    {/* <SideProfile ></SideProfile> */}
                    {/* <Sideprofile data1={active} data2={pending} data3={deleted}></Sideprofile> */}

                </div>



    
        </>
    )
    
}

export default SponsorshipGroupsMain;



// import '../@core/scss/base/adminDashboard/adminusersdetail.css'
// import ManageInterestTags from './manageinteresttags'
// import SideProfile from './sideprofile'
// import React, { useState } from "react"
// import Filterpopup from './filterpopup'
// import ManageUserSettings from './manageusersettings'
// import UserMainMenu from './usermainmenu'
// import UserprofileBottom1 from './userprofilebottom1'
