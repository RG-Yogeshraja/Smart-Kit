import React, { useState } from "react"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import activepostimg from "../../../src/assets/images/dashboardimg/activepostimg.png"
import activepostimging from "../../../src/assets/images/dashboardimg/chewyss.png"

import morehorizontal from "../../../src/assets/images/dashboardimg/morehorizontal.png"


const SponsorshipPostsDeletedTab = () => {

    const [analyticsCollectedData] = useState([

    ])


    return (
        <>
            <div>
                <div className="card mb-2 p-1 flex-column cards sponsor-deletedpostmain-selected">
                    <div className="d-flex col-12">
                        <div className='col-1'>
                            <img src={activepostimg} width="86px" height="86px"></img>
                        </div>

                        <div className='col-11 top-contentSection ps-3'>
                            <div className='d-flex justify-content-between align-items-center ps-1'>
                                <div>
                                    <span className='sponsor-textspanbold23'>Barry's</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="sponsor-textspanlight11" style={{ fontWeight: "500" }}>Duration:</span>&nbsp;
                                    <span className="sponsor-textspanlight11" style={{ fontWeight: "600" }}>June 10-14</span>
                                    <img className="ms-75" src={morehorizontal} width="24px" height="24px" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-between px-1 pt-75'>
                                <div className="d-flex flex-column">
                                    <div>
                                        <span className='sponsor-textspanbold24' style={{ fontWeight: "700" }}>Get 50% off for 2 weeks of Barry Workouts on Us! </span>
                                        <span className='sponsor-textspanbold24' style={{ fontWeight: "400" }}>Click to learn more and redeem the offer.</span>
                                        </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="card p-1  flex-column cards sponsor-deletedpostmain">
                    <div className="d-flex col-12">
                        <div className='col-1'>
                            <img src={activepostimging} width="86px" height="86px"></img>
                        </div>

                        <div className='col-11 top-contentSection ps-3'>
                            <div className='d-flex justify-content-between align-items-center ps-1'>
                                <div>
                                    <span className='sponsor-textspanbold23'>Chewy</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="sponsor-textspanlight11" style={{ fontWeight: "500" }}>Duration:</span>&nbsp;
                                    <span className="sponsor-textspanlight11" style={{ fontWeight: "600" }}>June 10-14</span>
                                    <img className="ms-75" src={morehorizontal} width="24px" height="24px" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-between px-1 pt-75'>
                                <div className="d-flex flex-column">
                                    <div>
                                        <span className='sponsor-textspanbold24' style={{ fontWeight: "700" }}>Get 50% off our dog food items when you buy one at normal price!. </span>
                                        <span className='sponsor-textspanbold24' style={{ fontWeight: "400" }}>Click to learn more and redeem the offer.</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SponsorshipPostsDeletedTab