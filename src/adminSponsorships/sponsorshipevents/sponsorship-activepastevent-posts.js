import React, { useState } from "react"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import morehorizontal from "../../../src/assets/images/dashboardimg/morehorizontal.png"
import pasteventpostimg from "../../../src/assets/images/dashboardimg/pasteventpostimg.png"

const SponsorshipPasteventPosts = () => {

    return (
        <>
            <div>
                <div className="d-flex col-12 pastevents-eventsection p-1 mt-1">
                    <div className='col-1'>
                        <img src={pasteventpostimg} width="86px" height="86px"></img>
                    </div>

                    <div className='col-11 top-contentSection ps-5'>
                        <div className='d-flex justify-content-between align-items-between' style={{ paddingTop: "2px" }}>
                            <span className='sponser-textspanbold4'>Barry's</span>

                            <div className="d-flex align-items-center">
                                <span className="sponsor-textspanlight8">Duration:</span>&nbsp;
                                <span className="sponsor-textspanlightbold8">June 10-14</span>
                                <img src={morehorizontal} style={{ cursor: "pointer", marginLeft:"10px" }} width="24px" height="24px"></img>
                            </div>
                        </div>

                        <div className='sponsorevent-postinnersection'>
                            <span className="sponsor-textspanbold15">The Barry’s SUMMER 6 PACK SALE is BACK - 7/6 to 7/10 ONLY.</span>
                            <span className="sponsor-textspanboldlight15"> Click to learn more and grab your pack!</span>
                        </div>
                        <div className="d-flex">
                            <span className="sponsor-textspanlight9">#summersale</span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default SponsorshipPasteventPosts









