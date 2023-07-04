import React, { useState } from "react"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import barryeventimagesmall from "../../../src/assets/images/dashboardimg/barryeventimagesmall.png"
import dot from "../../../src/assets/images/dashboardimg/Ellipse11.png"
import morehorizontal from "../../../src/assets/images/dashboardimg/morehorizontal.png"
// import location from "../../../src/assets/images/dashboardimg/location.png"



const SponsorshipPasteventEvents = () => {

    return (
        <>
            <div>
                <div className="d-flex col-12 pastevents-eventsection p-1 mt-1">
                    <div className='col-1'>
                        <img src={barryeventimagesmall} width="86px" height="86px"></img>
                    </div>

                    <div className='col-11 top-contentSection ps-5'>
                        <div className='d-flex justify-content-between align-items-between pastevent-innercontent' style={{paddingTop:"2px"}}>
                            <span className='sponser-textspanbold4'>Barry's Private Class Event</span>
                            <img src={morehorizontal} style={{ cursor: "pointer" }} width="20px" height="20px"></img>
                        </div>
                        <div className='d-flex justify-content-between align-items-between pastevent-innercontent'>
                            <div className="d-flex align-items-center">
                                <span className='sponser-textspanbold6'>Jul. 15</span>&nbsp;&nbsp;
                                <img src={dot} width="4px" height="4px" />&nbsp;&nbsp;
                                <span className='sponser-textspanbold6'>6:40 PM to 7:40 PM</span>&nbsp;&nbsp;
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center pastevent-innercontent'>
                            <span className="sponser-textspanlight1">Barry's Back Bay - Back Bay, Boston, MA</span>
                        </div>
                        <div className="d-flex pastevent-innercontent">
                            <span className="sponser-textspanlight1">Duration: June 10-14</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SponsorshipPasteventEvents