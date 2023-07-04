import React, { useState } from 'react'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsoreventsmenu/sponsoreventsfilterpopup.scss'
import Groupsfilterpopup from './groupsfilterpopup'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmenu.css'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import GroupsSideprofile from './groupssidepanel'
import SponsorshipGroupsMaintab from './sponsorship-groups-maintab'
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsorgroupsmain.scss'

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
        <div className='row'>
            <div className='sponsership-groupscenter-panel'>
                <div className="d-flex justify-content-between">
                    <span className="font-eventssponsor mt-1">Group Sponsorships</span>
                    <Groupsfilterpopup></Groupsfilterpopup>
                </div>
                <div>
                    {/* <SponsorshipGroupsMaintab actives={friendsactivetab} pendings={friendspendingtab} deleteds={friendsdeletedtab}></SponsorshipGroupsMaintab> */}
                </div>
            </div>
            <div className='sponsership-groupsright-panel'>
               
            {/* <GroupsSideprofile data1={active} data2={pending} data3={deleted}></GroupsSideprofile> */}
                {/* <SideProfile ></SideProfile> */}
                {/* <Sideprofile data1={active} data2={pending} data3={deleted}></Sideprofile> */}
            </div>
        </div>
    )
}

export default SponsorshipGroupsMain;
