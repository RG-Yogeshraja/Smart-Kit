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



const UsersCommentsDialog = (props) => {
    //
    console.log(props)
    const dispatch = useDispatch()
    const [show1, setShow1] = useState(false)
    const [userPostComments, setUserPostComments] = useState([])
    const authStat_getUsersPostComments = useSelector((state) => state.getUsersPostCommentsData)
    const authStat_removeUserPostComments = useSelector((state) => state.removeUserspostCommentsData)
    const [loader, setLoader] = useState(false)


    const handleClose = () => {
        setShow1(false)
    }

    const handleshow = () => {
        setShow1(true)
    }

    //1 get users post comments api call
    useEffect(() => {
        // setLoader(true)
        const payload = {
            user_id: localStorage.getItem("loggedIn_userId"),
            group_id: props.groupId,
            post_id: props.postId
        }
        dispatch(getUserPostComments_APIcall(payload))
    })

    //2 after getting response from get users post comments api call, store the result
    useEffect(() => {
        if (authStat_getUsersPostComments.data.responseCode == 200 && authStat_getUsersPostComments.data.responseBody != undefined) {
            setUserPostComments(authStat_getUsersPostComments.data.responseBody)
            console.log(authStat_getUsersPostComments.data.responseBody)
            // setLoader(false)
        }
        else {
            // setLoader(false)
            console.log('get comments FAILED')
        }
    }, [authStat_getUsersPostComments.data])

    //3 remove comments call
    // const removeCommentsCall = () => {
    //     const payload = {
    //         user_id: localStorage.getItem("loggedIn_userId"),
    //         comment_id: "",
    //         post_id: ""
    //     }
    //     dispatch(removeUsersPostComments_APIcall(payload))
    // }

    //4 after get response from remove comments api call, need to reload the comments list(get all comments)
    // useEffect(() => {
    //     if (authStat_removeUserPostComments.data.responseCode == 200 && authStat_removeUserPostComments.data.responseBody != undefined) {
    //         getAllPostcomments()
    //     }
    //     else {
    //         console.log('get all comments FAILED')
    //     }
    // }, [authStat_removeUserPostComments.data])

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
            <span className="textspan6" style={{ cursor: 'pointer' }} onClick={handleshow}>total comm</span>

            <Modal show={show1} centered dialogClassName="postcomments-custommodal" backdrop="static" onHide={() => setShow1(false)}>

                {loader == true ? <div className='enable-loader1'>
                    <img src={loading} width="80px" height="80px"></img>
                </div> : null}

                <div className="p-1">
                    <div className="pb-2 ps-2 pt-2">
                        <span className="sponsor-textspanbold14">Post Comments</span>
                    </div>
                    <div className="postcomments-scrollbar" id="postcomments-style">
                        <div className="postcomments-force-overflow">
                            <div className="ms-5 pe-3">
                                <div className="row postcomments-header p-1">
                                    <div className="col-3 px-0">
                                        <img src={postcommentsprofile1} width="172px" height="124px" />
                                    </div>
                                    <div className="col-9 d-flex flex-column ps-2">
                                        <div className="pt-25 pb-1 ps-1">
                                            <span className="sponsor-textspanlight14" style={{ fontWeight: "500" }}>dessss</span>

                                        </div>
                                        <span className="sponsor-textspanbold20 ps-1">Posted time hour ago</span>
                                    </div>
                                </div>
                            </div>


                            <div className="ps-3 pt-2">
                                <div className="pb-1">
                                    <span className="sponser-textspanbold4">Comments 5</span>
                                </div>

                                {userPostComments?.map((data, index) => {
                                    return (
                                        <div>
                                            <div>
                                                <div className="col-12 d-flex">
                                                    <div className="col-1">
                                                        <img className="" src={data.user_image_url} width="42px" height="42px" />
                                                    </div>
                                                    <div className="col-10 d-flex flex-column pe-1">
                                                        <div className="">
                                                            <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>user name </span>
                                                            {/* <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "500" }}> Wow! </span>
                                                <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>@John Doe</span> */}
                                                            <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "400" }}>comment_description</span>
                                                        </div>

                                                        {/* <div>{JSON.stringify(data)}</div> */}


                                                    </div>
                                                    <div className="col-1">

                                                        {/* <Dropdown className="postcomments-dropdown ">
                                                            <Dropdown.Toggle>
                                                                <img src={verticalmore} width="28" height="28" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="postcomments-dropdownmenu">
                                                                <Dropdown.Item onClick={() => removecomments(data.user_id, data.group_id, data.comment_id)} className="postcomments-dropdownitem d-flex align-items-center">
                                                                    <span>
                                                                        <img className="postcomments-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                                    </span>
                                                                    <span style={{ paddingTop: "2px" }} className="postcomments-dropdownitemName">Remove</span>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown> */}
                                                    </div>
                                                </div>

                                                {/* <div className="ms-5">
                                                    <span className="sponsor-textspanlight15 pe-50">{timecoment(data.date_time_created, data.date_time_updated)} mins ago</span>
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

                    <div className="col-12 mt-2 d-flex justify-content-center">
                        <button className=' closebuttonuser' style={{ width: "38%" }} onClick={handleClose}>Close</button>
                    </div>
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
export default connect(mapStateToProps, {})(UsersCommentsDialog)
