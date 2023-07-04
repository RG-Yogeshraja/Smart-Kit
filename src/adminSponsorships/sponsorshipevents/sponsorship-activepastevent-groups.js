import React, { useState } from "react"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import barryeventimagesmall from "../../../src/assets/images/dashboardimg/barryeventimagesmall.png"
import dot from "../../../src/assets/images/dashboardimg/Ellipse11.png"
import morehorizontal from "../../../src/assets/images/dashboardimg/morehorizontal.png"
import pasteventgroupimg from "../../../src/assets/images/dashboardimg/pasteventgroupimg.png"

const SponsorshipPasteventGroups = () => {

    return (
        <>
            <div>
                <div className="d-flex col-12 pastevents-eventsection p-1 mt-1">
                    <div className='col-1'>
                        <img src={pasteventgroupimg} width="60px" height="60px"></img>
                    </div>

                    <div className='col-11 top-contentSection ps-3'>
                        <div className='d-flex justify-content-between align-items-between pastevent-groupsinnercontent' style={{ paddingTop: "2px" }}>
                            <span className='sponser-textspanbold4'>Barry's Fitness Crew</span>

                            <div>
                                <span className="sponsor-textspanbold5" style={{ paddingRight: "10px" }}>Private Group</span>
                                <img src={morehorizontal} style={{ cursor: "pointer" }} width="20px" height="20px"></img>
                            </div>
                        </div>
                        
                        <div className='d-flex justify-content-between align-items-center pastevent-groupsinnercontent'>
                            <span className="sponser-textspanlight1">Barry's Back Bay - Back Bay, Boston, MA</span>
                        </div>
                        <div className="d-flex pastevent-groupsinnercontent">
                            <span className="sponsor-textspanlight7">Created by Hint Social</span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default SponsorshipPasteventGroups





