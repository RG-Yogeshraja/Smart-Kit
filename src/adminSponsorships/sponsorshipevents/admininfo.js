import profilephoto from '../../assets/images/dashboardimg/profile_pic.png'
import profilephotos from '../../assets/images/dashboardimg/profile_poc1.png'
import location from '../../assets/images/dashboardimg/location.png'
import dot from '../../assets/images/dashboardimg/Ellipse11.png'
import birthdaycakefire from '../../assets/images/dashboardimg/birthdaycakefire.png'
import defaultuserprofilepicture from '../../assets/images/dashboardimg/defaultuserprofilepicture.png'
import React, { useState } from "react"
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmenu.css'


const AdminInfo = (props) => {
    const changebirth = (val) => {
        if (val !== undefined) {
            const datas = val
            const today = new Date()
            const birthDate = new Date(datas)
            let age_now = today.getFullYear() - birthDate.getFullYear()
            const m = today.getMonth() - birthDate.getMonth()
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age_now--
            }
            return <>{age_now}</>
        }
    }

    return (
        <>
            <div className='col-12 mt-1'>
                {props.eventDetailsData?.map((data) => {
                    return (
                        <div className='col-12'>
                            <div className='row align-items-center pb-2'>
                                <div className='col-2'>
                                    {data.user_image != "" ?
                                        <img src={data.user_image} width="54px" height="54px" style={{ borderRadius: "15px" }} /> :
                                        <img src={defaultuserprofilepicture} width="54px" height="54px" style={{ borderRadius: "15px" }} />}
                                </div>
                                <div className='col-8 users-friendslist'>
                                    <div className='d-flex flex-column ps-25 justify-content-start'>
                                        {data.full_name!=''?
                                         <span className='textspan1 '>&nbsp;&nbsp;&nbsp;{data.full_name}</span>: 
                                         <span className='textspan1 '>&nbsp;&nbsp;&nbsp;{props.createdBy}</span>
                                        }
                                       
                                        <div className='d-flex align-items-center mt-25 ms-50'>
                                            {data.location != "" ?
                                                <>
                                                    <img src={location} width="16px" height="16px" className=''></img>
                                                    <span className='textspanlight1 ms-25'>{data.location}</span>
                                                    <img className="ms-25" src={dot} width="4px" height="4px"></img>
                                                </>
                                                : null}

                                            {data.birth_date != "" ?
                                                <>
                                                    <img className="ms-25" src={birthdaycakefire} width="16px" height="16px"></img>
                                                    <span className='textspanlight1 ms-25'>{changebirth(data.birth_date)}</span>
                                                </>
                                                : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <hr style={{ border: "1px solid #CCD8DB" }} className="m-0"></hr>
            </div>
        </>
    )
}
export default AdminInfo