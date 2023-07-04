import React, { useState } from "react"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsorgroupsmain.scss'
import morehorizontal from "../../../src/assets/images/dashboardimg/morehorizontal.png"
import pastgroupimg1 from "../../../src/assets/images/dashboardimg/imgdeltab1.png"
import pastgroupimg2 from "../../../src/assets/images/dashboardimg/imgseltab2.png"
import pastgroupimg3 from "../../../src/assets/images/dashboardimg/pastgroupimg3.png"
import location from "../../../src/assets/images/dashboardimg/location.png"
import user from "../../../src/assets/images/dashboardimg/1.png"



const SponsorshipGroupsdeteledTab = () => {
    const [activeGroupData] = useState([
        { id: 1, groupName: "Open Mike Crew", imageName: pastgroupimg1, groupStatus: "Private", location: "South Boston/Dorchester, MA", membersCount: "42 Members", duration: "June 10-14", sponsoredPosts: "13", sponsoredEvents: "3" },
        { id: 2, groupName: "Hike and Camp", imageName: pastgroupimg2, groupStatus: "Public", location: "South Boston/Dorchester, MA", membersCount: "38 Members", duration: "June 10-14", sponsoredPosts: "13", sponsoredEvents: "3" },
    ])
    return (
        <>
            <div>
                {activeGroupData.map((data, index) => {
                    return (
                        <> <div className="card mb-2 p-1 flex-column cards activegroup-selectedsection" style={{ border: data.id == 1? '1px solid #95E1BF': null }}>
                            <div className="d-flex col-12">
                                <div className='col-1 ps-50'>
                                    <img src={data.imageName} width="86px" height="86px"></img>
                                </div>

                                <div className='col-11 top-contentSection ps-3'>
                                    <div className='d-flex justify-content-between align-items-center ps-1'>
                                        <div>
                                            <span className='sponser-textspanbold4'>{data.groupName}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="sponsor-textspanbold5">{data.groupStatus}</span>
                                            <img className="ms-50" src={morehorizontal} width="24px" height="24px" />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center ps-1 pt-50'>
                                        <div className="d-flex align-items-center">
                                            <img className="" src={location} width="18px" height="18px" />
                                            <span className='sponser-textspanlight1'>{data.location}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <img className="" src={user} width="20px" height="20px" />
                                            <span className='sponsor-textspanbold5 pe-25'>{data.membersCount}</span>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center ps-1 pt-50'>
                                        <div className="d-flex flex-column ">
                                            <div className="align-items-center d-flex">
                                                <span className='sponsor-textspanlight13 pe-25' style={{ fontWeight: "500" }}>Duration:</span>
                                                <span className='sponsor-textspanlight13' style={{ fontWeight: "600" }}>{data.duration}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row justify-content-start align-items-center ps-1 pt-50">
                                        <div className="activegroup-sponsoredsection py-50 px-1 me-2">
                                            <span className="sponsor-textspanlight10">Sponsored Posts: </span>
                                            <span className="sponsor-textspanlight10" style={{ fontWeight: "600" }}>{data.sponsoredPosts}</span>
                                        </div>
                                        <div className="activegroup-sponsoredsection py-50 px-1">
                                            <span className="sponsor-textspanlight10">Sponsored Events: </span>
                                            <span className="sponsor-textspanlight10" style={{ fontWeight: "600" }}>{data.sponsoredEvents}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></>
                    )
                })}
            </div>
        </>
    )
}

export default SponsorshipGroupsdeteledTab