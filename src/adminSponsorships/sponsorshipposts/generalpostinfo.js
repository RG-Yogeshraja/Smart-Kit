import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sidepostprofile.scss'
import description from '../../assets/images/dashboardimg/documenttext.png'
import tick from '../../assets/images/dashboardimg/verifytick.png'
import blockuser from '../../assets/images/dashboardimg/blockedbyuser1.png'
import usersdetail from '../../assets/images/dashboardimg/users5.png'
import SponsorPop from '../sponsorshipevents/sponsoreventspopup'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import defaultpostimage from '../../../src/assets/images/dashboardimg/defaultpostimage.png'



const SidePostPanel = (props) => {

    return (
        <>
            <div>
                {props.postDetails?.map((data) => {
                    return (
                        <div>
                            <div className='d-flex  align-items-center'>
                                <img src={description} width="22px" height="22px" className='me-25'></img>
                                <span className='post_innertext'>Description</span>

                            </div>
                            <div className='d-flex flex-column mt-1'>
                                <span>
                                    {/* <span className='post_bold'>{props.data}</span><span className='post_light'>{props.bold}</span></span> */}
                                    <span className='post_light' style={{ wordBreak: "break-all" }}>{data.description}</span>
                                </span>
                            </div>
                            {/* <hr className='mt-1' style={{ border: "1px solid #CCD8DB" }}></hr>
            <div className='d-flex justify-content-between align-items-center'>
                <span>
                    <img src={tick} width="22px" height="22px" className='me-25'></img>
                    <span className='post_innertext'>Include Coupon Code</span></span>
                <span className='post_weightage'>Yes</span>

            </div> */}
                            {/* <div style={{ display: props.other === false ? '' : 'none' }} > */}
                            {/* ****** PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint ***** */}

                            {/* <hr className='mt-1' style={{ border: "1px solid #CCD8DB" }}></hr>
                <div className='d-flex  align-items-center mt-1'>
                    <span className='post_innertext'>Reports (2)</span>

                </div>
                <div className='d-flex justify-content-center flex-column mt-1'>
                    <div className='reports_style col-12 d-flex align-items-center p-50'>
                        <div className='col-2'>
                            <img src={blockuser} width="54px" height="54px"></img>
                        </div>
                        <div className='col-10 ms-1'>
                            <span className='post_smalltext'>Reported by Amy Delacruz</span>
                            <div>
                                <span className='postvs'>Reason: Innapropriate Content</span>
                            </div>
                        </div>
                    </div>
                    <div className='reports_style col-12 d-flex align-items-center p-50 mt-1'>
                        <div className='col-2'>
                            <img src={usersdetail} width="54px" height="54px"></img>
                        </div>
                        <div className='col-10 ms-1 '>
                            <span className='post_smalltext'>Reported by Giana Reed</span>
                            <div>
                                <span className='postvs'>Reason: Innapropriate Content</span>
                            </div>
                        </div>
                    </div>
                </div> */}
                            {/* <SponsorPop></SponsorPop> */}
                            {/* </div> */}
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default SidePostPanel