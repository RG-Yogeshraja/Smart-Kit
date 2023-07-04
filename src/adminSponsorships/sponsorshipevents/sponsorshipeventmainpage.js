import React, { useState, useEffect } from 'react'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsoreventsmenu/sponsoreventsfilterpopup.scss'
import SponsorFilterpopup from "./sponsoreventsfilterpopupmain"
import Sponsormanagesettingtagpopup from './sponsorshipeventsmanagesettingtags'
import ManageInterestTags from '../../adminusers/manageinteresttags'
import GroupsMainPanel from './sponsorshipeventmaintab'
import Sideprofile from './sideprofile'
const SponsorshipEventsMain = () => {
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

    useEffect(() => {
        friendsactivetab()
        // friendspendingtab()
        // friendsdeletedtab()
    }, [])


    return (
        <>
            <div className='row'>

                <div className='col-4 d-flex '>
                    <span className="font-eventssponsor mt-1">Event Sponsorships</span>
                </div>
                <div className='col-8 d-flex justify-content-end '>
                    <div className='mx-2'>
                        <SponsorFilterpopup></SponsorFilterpopup>
                    </div>
                    <ManageInterestTags data={dat} val=""></ManageInterestTags>
                    &nbsp;&nbsp;&nbsp;

                <Sponsormanagesettingtagpopup data="Event" value="event"></Sponsormanagesettingtagpopup>
                </div>
                <div className='sponsership-bodycenter-panel'>
                    {/* <UserMainMenu ></UserMainMenu>
    <UserprofileBottom1 ></UserprofileBottom1> */}
                    <GroupsMainPanel actives={friendsactivetab} pendings={friendspendingtab} deleteds={friendsdeletedtab}></GroupsMainPanel>
                </div>  
                <div className='sponsership-bodyright-panel'>
                    {/* <SideProfile ></SideProfile> */}
                    <Sideprofile data1={active} data2={pending} data3={deleted}></Sideprofile>
                </div>
            </div>
        </>
    )
}

export default SponsorshipEventsMain

