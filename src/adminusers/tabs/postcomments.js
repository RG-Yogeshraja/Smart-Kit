import React, { useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
import message from '../../../src/assets/images/dashboardimg/message.png'

import postcommentsprofile1 from '../../../src/assets/images/dashboardimg/postcommentsprofile1.png'
import postcommentsprofile2 from '../../../src/assets/images/dashboardimg/postcommentsprofile2.png'
import postcommentsprofile3 from '../../../src/assets/images/dashboardimg/postcommentsprofile3.png'
import dot from '../../../src/assets/images/dashboardimg/Ellipse11.png'
import verticalmore from '../../../src/assets/images/dashboardimg/verticalmore.png'
import deleteitem from '../../../src/assets/images/dashboardimg/deleteitem.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown'
import moment from 'moment'
import { getUserPostComments_APIcall } from "../slice-adminusers/slice-getuserpostcomments"
import { removeUsersPostComments_APIcall } from "../slice-adminusers/slice-removeuserspostcomments"
import loading from '../../assets/images/dashboardimg/loadersimg.gif'
import defaultuserprofilepicture from '../../../src/assets/images/dashboardimg/defaultuserprofilepicture.png'


const PostComments = (props) => {
    
    console.log(props,"fffff")
    const dispatch = useDispatch()
    const [show1, setShow1] = useState(false)
    const [userPostComments, setUserPostComments] = useState([])
    const authStat_getUsersPostComments = useSelector((state) => state.getUsersPostCommentsData)
    const authStat_removeUserPostComments = useSelector((state) => state.removeUserspostCommentsData)
    const [loader, setLoader] = useState(false)
    const time = (time) => {

        // let v
        // if (updated !== null) {
        //     v = new Date(updated)
        // } else {
        //     v = new Date(time)
        // }
        const vals = moment.utc(moment(time)).format("DD MMM YYYY")

        const localDateTimeConversion = new Date(time)
        const UTCTimePick = moment(localDateTimeConversion, "h:mmA").format("HH:mm")
        const localTimeConversion = moment(UTCTimePick, ["HH:mm"]).format("hh:mm A")
        console.log(localTimeConversion)
        // return (<span>{localTimeConversion}</span>)
         return `${vals} at ${localTimeConversion}`
        // const today = new Date()
        // console.log(v, today)
        // const vals = moment.utc(moment(v)).format("DD MMM YYYY")
        // const times = moment.utc(moment(v)).format("hh:mm a")
        // console.log(vals)
        // return `${vals} at ${times}`
    }
    const timecoment = (time, updated) => {

        let v
        if (updated !== null) {
            v = new Date(updated)
        } else {
            v = new Date(time)
        }
        const today1 = moment()
const yesterday = moment().subtract(1, 'day')
const tomorrow = moment().add(1, 'days')


        const today = new Date()
        console.log(v, today)
       const dt = (moment(v)).format("hh:mm a")
        let vals 
        
        if (moment(v).isSame(today1, 'day')) {
vals = "Today"
        } else if (moment(v).isSame(yesterday, 'day')) {
  vals = 'Yesterday'
} else if (moment(v).isSame(tomorrow, 'day')) {
    vals = 'Tomorrow' 
} else {
    const week = moment(v).day()
    if (week === 1) {
vals = "Monday"
    } else if (week === 2) {
        vals = "Tuesday"   
    } else if (week === 3) {
        vals = "Wednesday"   
    } else if (week === 4) {
        vals = "Thursday"   
    } else if (week === 5) {
        vals = "Friday"   
    } else if (week === 6) {
        vals = "Saturday"   
    } else if (week === 7) {
        vals = "Sunday"   
    }
}
    
        return `${vals} at ${dt} `
    }
    const handleClose = () => {
        
        setShow1(false)
    }

    const handleshow = () => {
        setShow1(true)
    }

    //1 get users post comments api call
    useEffect(() => {
         setLoader(true)
        const payload = {
            user_id: localStorage.getItem("loggedIn_userId"),
            group_id: props.data1.group_id,
            post_id: props.data1.post_id
        }
        dispatch(getUserPostComments_APIcall(payload))
    }, [])

    //2 after getting response from get users post comments api call, store the result
    useEffect(() => {
        
        if (authStat_getUsersPostComments.data.responseCode === 200 && authStat_getUsersPostComments.data.responseBody != undefined) {
            setUserPostComments(authStat_getUsersPostComments.data.responseBody)
            console.log(authStat_getUsersPostComments.data.responseBody)
             setLoader(false)
        } else {
             setLoader(false)
            console.log('get comments FAILED')
        }
    }, [authStat_getUsersPostComments.data])

    //3 remove comments call
    const removeCommentsCall = (userId, comment_ids, groupsid) => {
        
        // setLoader(true)
        const payload = {
            user_id: localStorage.getItem('loggedIn_userId'),
            group_id: groupsid,
            member_id: userId,
            comment_id: comment_ids
        }
        dispatch(removeUsersPostComments_APIcall(payload))
    }

  
    useEffect(() => {
        
        if (authStat_removeUserPostComments.data.responseCode === 200 && authStat_removeUserPostComments.data.responseBody !== undefined) {
            const payload = {
                user_id: localStorage.getItem("loggedIn_userId"),
                group_id: props.data1.group_id,
                post_id: props.data1.post_id
            }
            dispatch(getUserPostComments_APIcall(payload))
        } else {
            console.log('get all comments FAILED')
        }
    }, [authStat_removeUserPostComments.data])

    //5 get all comments api call to reload the comments list after call the remove comments api 
    // const getAllPostcomments = () => {
    //     const payload = {
    //         user_id: localStorage.getItem("loggedIn_userId"),
    //         group_id: props.groupId,
    //         post_id: props.postId
    //     }
    //     dispatch(getUserPostComments_APIcall(payload))
    // }


    return (
        <>
            {/* <button onClick={() => setShow1(true)} className="sponsor-btntextbold1" style={{ outline: "none" }}>View  Report</button> */}
            <span className="textspan6" style={{ cursor: 'pointer' }} onClick={handleshow}>{userPostComments.length}</span>

            <Modal show={show1} centered dialogClassName="postcomments-custommodal" backdrop="static" onHide={() => setShow1(false)}>

                {loader == true ? <div className='enable-loader1'>
                    <img src={loading} width="80px" height="80px"></img>
                </div> : null}

                <div className="p-1">
                    <div className="pb-2 ps-2 pt-2">
                        <span className="sponsor-textspanbold14">Post Comments</span>
                    </div>
                    {/* {userPostComments.length > 0 ?
                    <> */}
                    <div className="postcomments-scrollbar" id="postcomments-style">
                        <div className="postcomments-force-overflow">
                            <div className="ms-5 pe-3">
                                <div className="row postcomments-header p-1">
                                    <div className="col-3 px-0">
                                        {props.data1.post_image !="" ?  <img src={props.data1.post_image} width="172px" height="124px" /> : 
                                        <img src={defaultuserprofilepicture} width="172px" height="124px" />
                                        }
                                       
                                    </div>
                                    <div className="col-9 d-flex flex-column ps-2">
                                        <div className="pt-25 pb-1 ps-1">
                                            <span className="sponsor-textspanlight14" style={{ fontWeight: "500" }}>{props.data1.post_description}</span>

                                        </div>
                                        <span className="sponsor-textspanbold20 ps-1">{time(props.data1.date_time_created, props.data1.date_time_updated)}</span>
                                    </div>
                                </div>
                            </div>


                            <div className="ps-3 pt-2">
                                <div className="pb-1">
                                    <span className="sponser-textspanbold4">Comments ({userPostComments.length})</span>
                                </div>

                                {userPostComments?.map((data, index) => {
                                    return (
                                        <div  style={{ display: userPostComments?.length !== 0 ? '' : 'none' }}>
                                            <div>
                                                <div className="col-12 d-flex">
                                                    <div className="col-1">
                                                        <img className="" style={{borderRadius:"8px"}} src={data.user_image_url} width="42px" height="42px" />
                                                    </div>
                                                    <div className="col-10 d-flex flex-column pe-1">
                                                        <div className="">
                                                            <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>{data.user_name} </span>
                                                            {/* <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "500" }}> Wow! </span>
                                                <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>@John Doe</span> */}
                                                            <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "400" }}>{data.comment_description}</span>
                                                            <div className="sponsor-textspanlight15 pe-50 mt-50">{timecoment(data.date_time_created, data.date_time_updated)}</div>
                                                        </div>

                                                        {/* <div>{JSON.stringify(data)}</div> */}


                                                    </div>
                                                    <div className="col-1">

                                                        <Dropdown className="postcomments-dropdown ">
                                                            <Dropdown.Toggle>
                                                                <img src={verticalmore} width="28" height="28" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="postcomments-dropdownmenu">
                                                                <Dropdown.Item onClick={() => removeCommentsCall(data.user_id, data.comment_id, data.group_id)} className="postcomments-dropdownitem d-flex align-items-center">
                                                                    <span>
                                                                        <img className="postcomments-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                                    </span>
                                                                    <span style={{ paddingTop: "2px" }} className="postcomments-dropdownitemName">Remove</span>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                               
                                                {/* <div className="ms-5">
                                                    
                                                    <img className="" src={dot} width="4px" height="4px" style={{ color: "#95E1BF", display: data.date_time_updated === null ? "none" : '' }} />
                                                    <span className="sponser-textspanlight2 ps-50" style={{ color: "#95E1BF", display: data.date_time_updated === null ? "none" : '' }} >Edited</span>
                                                </div> */}

                                                <hr className="ms-2 w-50" style={{ border: "1px solid #EDEDED" }} />

                                            </div>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                        </div>
                    </div>
                    
                                    
                    <div className="col-12  d-flex justify-content-center" >
                        <button className=' closebuttonuser' style={{ width: "38%" }} onClick={handleClose}>Close</button>
                    </div> 
                    

                    {userPostComments.length == 0 ?
                    <div className="">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            
                                <span className="span-texting " style={{marginTop:"-450px", fontSize:"16px"}}>No Post Comments</span>
                                </div>
                                </div>
                           : null}
                    {/* </> 
                    : 'hsfldo'} */}
                </div>
            </Modal>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        getUsersPostCommentsData: state.getUsersPostCommentsData,
        removeUserspostCommentsData: state.removeUserspostCommentsData
    }
}
export default connect(mapStateToProps, {})(PostComments)
