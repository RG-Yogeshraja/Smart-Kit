import '../../src/@core/scss/base/adminDashboard/adminmenu/adminusersdetail.css'
import React, { useEffect, useState } from "react"
import '../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmenu.css'
import ControlGroupSettings from './groupspopup/controlgroupsettings'
import FilterGrppopup from './groupspopup/filtergrppoppup'
import location from '../assets/images/dashboardimg/location.png'
import edit from '../assets/images/dashboardimg/editmenu.png'
import defaultuser from '../assets/images/dashboardimg/Group-2.png'
import EditgroupPopup from "./editGroupDialog"
import dot from '../assets/images/dashboardimg/Ellipse11.png'
import load from '../assets/images/dashboardimg/loadersimg.gif'
import birthdaycakefire from '../assets/images/dashboardimg/birthdaycakefire.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import blankimages from '../assets/images/dashboardimg/blank-image.png'
import twousers from '../assets/images/dashboardimg/twousersgroup.png';

const Profile_sidepanel = (props) => {
    console.log(props)
    const [started, setstarted] = useState(false)
    const [show1, setShow1] = useState(false)
    const authStat = useSelector((state) => state.getIndivudualGroupdata)
    const [getindeviduallist, pushindividual] = useState([])

    useEffect(() => {
        setstarted(true)
        console.log("auth respomse success")
        if (authStat.getIndivudualGroupsValue.responseCode === 200 && authStat.getIndivudualGroupsValue.responseBody != undefined) {
            pushindividual(authStat.getIndivudualGroupsValue.responseBody)
            setTimeout(() => {
                setstarted(false)
            }, 1000)
        }
        else  {
            pushindividual([])
            setTimeout(() => {
                setstarted(false)
            }, 300)
        }
    }, [authStat.getIndivudualGroupsValue])

    const changefunction = (val) => {
        let datas
        if (val.is_member === 1) {
            datas = 'Accepted'
        } else if (val.is_declined === 1) {
            datas = 'Declined'
        } else if (val.is_pending === 1) {
            datas = 'Pending'
        } else if (val.is_invited === 1) {
            datas = 'Invited'
        }
        return datas
    }
    const changebirth = (val) => {
        if (val !== undefined) {
            const today = new Date()
            const birthDate = new Date(val)
            console.log("get bod-->", birthDate) // create a date object directly from `dob1` argument
            let age_now = today.getFullYear() - birthDate.getFullYear()
            const m = today.getMonth() - birthDate.getMonth()
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age_now--
            }
            return age_now
        }

    }

    return (
        <div>
            <div style={{ display: started !== false ? '' : 'none' }}>
                <div className='enable-loader1'>

                    <img src={load} width="80px" height="80px"></img>
                </div>
            </div>
            {getindeviduallist?.map((data) => {
                return (
                    <div className='card col-12 p-2 d-flex flex-column'>
                        <div className='col-12 d-flex flex-column justify-content-center'>

                            {data.image_url != '' ?
                                <img style={{ position: "relative", borderRadius: "10px" }} height="250px" src={data.image_url}></img> :
                                <>
                                    <img style={{ position: "relative" }} height="250px" src={blankimages}></img>
                                    <img src={twousers} width="150px" style={{ position: 'absolute', marginLeft: '75px', marginTop: '12px' }}></img>
                                </>
                            }
                            <div >
                                <EditgroupPopup data="dogs" data1={data} active={props.data} pending={props.datas1}></EditgroupPopup>
                            </div>

                            <div style={{ position: "absolute", marginBottom: "-200px" }} className=' col-10  d-flex  justify-content-between align-items-center'>
                                <span className='mx-50' style={{ fontWeight: "bolder", fontSize: "25px", color: 'white', marginTop: "-25px" }}  >{data.group_name}</span>
                                <button className='btns_txts'><span className='text_aligned'>{data.group_privacy} </span></button>
                            </div>
                            <div className='d-flex'>
                            </div>
                        </div>
                        <div className='col-12 d-flex flex-column mt-1'>
                            <span className='span_text'>{data.description}</span>
                        </div>
                        <hr style={{ marginTop: "14px", marginBottom: "14px" }}></hr>
                        <div className='row'>
                            <div className='col-5'>
                                <span className="small_span">Location</span>
                            </div>
                            <div className='col-6 d-flex justify-content-end small_span'>
                                <span>{data.location}</span>
                            </div>
                        </div>
                        <hr style={{ marginTop: "14px", marginBottom: "14px" }}></hr>
                        <div className='col-12'>
                            <span className='Admins'>Admins ({data.admin})</span>
                        </div>
                        <div className='col-12 mt-1'>
                            {data.adminDetails?.map((res, index) => {

                                return (
                                    <div className='col-12'>
                                        <div className='row align-items-center pb-2'>
                                            <div className='col-2'>
                                                {res.admin_image_url != "" ?
                                                    <img src={res.admin_image_url} width="54px" height="54px" style={{ borderRadius: "15px" }} /> :
                                                    <img src={defaultuser} width="54px" height="54px" />}
                                            </div>
                                            <div className='col-8 users-friendslist'>
                                                <div className='d-flex flex-column justify-content-start ms-25'>
                                                    <span className='textspan1 userfriendname'>{res.admin_name}</span>
                                                    <div className='d-flex align-items-center biodatasection'>
                                                        {res.admin_location != "" ?
                                                            <>
                                                                <img src={location} width="16px" height="16px"></img>&nbsp;
                                                                <span className='textspanlight1'>{res.admin_location}</span>&nbsp;
                                                                <img className="" src={dot} width="5px" height="5px"></img>&nbsp;
                                                            </>
                                                            : null}
                                                        {res.admin_birth_date != "" ?
                                                            <>
                                                                <img className="" src={birthdaycakefire} width="16px" height="16px"></img>&nbsp;
                                                                <span className='textspanlight1 '>{changebirth(res.admin_birth_date)}</span>
                                                            </> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <hr style={{ marginTop: "5px", marginBottom: "5px" }}></hr>

                        </div>
                        <div className='col-12 mt-1'>
                            <span className='Admins'>Interest Tags</span>
                        </div>
                        <div className='col-12 d-flex flex-row mt-1 flex-wrap'>

                            {data.interest?.map((res) => {
                                return (

                                    <button className='btn_txt me-1 mb-1' style={{ display: res !== '' ? '' : 'none' }}><span className='tx'>{res}</span></button>

                                )
                            })}
                        </div>
                        <hr style={{ marginTop: "10px", marginBottom: "10px" }}></hr>
                        <div className='col-12 mt-50'>
                            <span className='Admins'>Invited Members ({data.invited_member_details.length})</span>
                        </div>
                        <div className='col-12 mt-1 scrollbar ' id="style-2">
                            {data.invited_member_details?.map((res) => {
                                return (
                                    <div className='col-12'>
                                        <div className='row align-items-center pb-2'>
                                            <div className='col-2'>
                                                {res.member_image != "" ?
                                                    <img src={res.member_image} width="54px" height="54px" style={{ borderRadius: "15px" }} /> :
                                                    <img src={defaultuser} width="54px" height="54px" />}
                                                {/* <img src={res.member_image} style={{borderRadius:"12px"}} width="54px" height="54px" /> */}
                                            </div>
                                            <div className='col-8 users-friendslist'>
                                                <div className='d-flex flex-column'>
                                                    <span className='textspan1 userfriendname'>{res.member_full_name} &nbsp;
                                                        <span className='act_text txtss'>{changefunction(res)}</span></span>

                                                    <div className='d-flex align-items-center biodatasection'>
                                                        <img src={location} width="16px" height="16px"></img>&nbsp;
                                                        <span className='textspanlight1'>{res.member_location}</span>&nbsp;
                                                        <img className="" src={dot} width="5px" height="5px"></img>&nbsp;
                                                        <img className="" src={birthdaycakefire} width="16px" height="16px"></img>&nbsp;
                                                        <span className='textspanlight1 '>{changebirth(res.member_birth_date)}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )

}


const mapStateToProps = (state) => {
    return {
        getIndivudualGroupsValue: state.getIndivudualGroupsValue
    }
}
export default connect(mapStateToProps, {})(Profile_sidepanel)