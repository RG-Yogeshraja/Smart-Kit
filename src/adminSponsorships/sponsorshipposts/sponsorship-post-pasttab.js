import React, { useState } from "react"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import activepostimg from "../../../src/assets/images/dashboardimg/activepostimg.png"
import morehorizontal from "../../../src/assets/images/dashboardimg/morehorizontal.png"
import message from '../../../src/assets/images/dashboardimg/message.png';
import smilingeyes from '../../../src/assets/images/dashboardimg/smilingeyes.png';
import thumpsup from '../../../src/assets/images/dashboardimg/thumpsup.png';
import redheart from '../../../src/assets/images/dashboardimg/redheart.png';
import SponsorshipPostEventSendReport from "./sponsorship-post-viewreport"
import SponsorshipPostEventViewReport from "./sponsorship-post-sendreport"
import SponsorshipActiveEventSendReport from "../sponsorshipevents/sponsorship-activeevent-sendreport.js"

const SponsorshipPostsPastTab = () => {

    const [analyticsCollectedData] = useState([
        { id: '1', value: "354", dataName: "Unique Viewers" },
        { id: '2', value: "354", dataName: "Impressions" },
        { id: '3', value: "443", dataName: "Post Clicks" },
        { id: '4', value: "$3.54", dataName: "Cost per Unique Viewer" },
        { id: '5', value: "354", dataName: "Cost per Impression" },
        { id: '6', value: "$5.50", dataName: "Cost Per Post Click" },
        { id: '7', value: "443", dataName: "Sponsor Link Clicks" },
        { id: '8', value: "$5.50", dataName: "Cost Per Sponsor Link Click" },
        { id: '9', value: "$554", dataName: "Total Spent" }
    ])


    return (
        <>
            <div>
             
            </div>
        </>
    )

}

export default SponsorshipPostsPastTab