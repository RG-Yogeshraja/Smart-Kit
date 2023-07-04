import React, { useState } from 'react'
import Postfilter from './postfilterpopup'
import Sponsormanagesettingtagpopup from '../../adminSponsorships/sponsorshipevents/sponsorshipeventsmanagesettingtags'
import ManageInterestTags from '../../adminusers/manageinteresttags'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmenu.css'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsoreventsmenu/sponsoreventsfilterpopup.scss'
import PostsMainPanel from './sponsorship-post-maintab'
import SidePostpanel from './sidepostpanel'
import SponsorPostControlSettings from './sponsorship-postcontrolsettings'

const SponsorshipPostsMain = () => {
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
            <div className='row'>
                <div className='col-4 d-flex '>
                    <span className="font-eventssponsor mt-1">Post Sponsorships</span>
                </div>
                <div className='col-8 d-flex justify-content-end'>
                    <div className='mx-2'>
                        <Postfilter></Postfilter>
                    </div>
                    <ManageInterestTags data={dat} val="Boating"></ManageInterestTags>
                    &nbsp;&nbsp;&nbsp;
                    <SponsorPostControlSettings></SponsorPostControlSettings>
                </div>
                <div className='sponsershipPost-bodycenter-panel'>
                    <PostsMainPanel actives={friendsactivetab} pendings={friendspendingtab} deleteds={friendsdeletedtab}></PostsMainPanel>
                </div>
                <div className='sponsershipPost-bodyright-panel'>
                    <SidePostpanel data1={active} data2={pending} data3={deleted}></SidePostpanel>
                    {/* <Sideprofile data1={active} data2={pending} data3={deleted}></Sideprofile>  */}
                </div>
            </div>
        </>
    )
}


export default SponsorshipPostsMain
