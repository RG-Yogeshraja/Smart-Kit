import React, { useState } from 'react'
import Groupsfilterpopup from '../adminSponsorships/sponsorshipgroups/groupsfilterpopup';
import GroupsSideprofile from '../adminSponsorships/sponsorshipgroups/groupssidepanel';
import SponsorshipGroupsMaintab from '../adminSponsorships/sponsorshipgroups/sponsorship-groups-maintab';
import '../@core/scss/base/adminDashboard/reportsmenu/reportsmenu.scss'
import ReportsMaintab from './reports-resolvedmaintab';
import Reportsfilterpopup from './reports-filterpopup';
import ReportsSidePanel from './reports-sidepanel';

const ReportsMainPage = () => {


    return (
        <div className='row'>
            <div className='reports-centerPanel'>
                <div className="d-flex justify-content-between">
                    <span className="textspanbold31 mt-1">Reports</span>
                    <Reportsfilterpopup></Reportsfilterpopup>
                </div>
                <div>
                    <ReportsMaintab></ReportsMaintab>
                </div>
            </div>
            <div className='reports-rightPanel'>
                <ReportsSidePanel/>
            </div>
        </div>
    )
}

export default ReportsMainPage;
