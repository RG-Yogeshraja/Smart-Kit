/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from "react"
import verticalmore2 from '../../assets/images/dashboardimg/verticalmore2.png'
import message from '../../assets/images/dashboardimg/message.png'
import smilingeyes from '../../assets/images/dashboardimg/smilingeyes.png'
import thumpsup from '../../assets/images/dashboardimg/thumpsup.png'
import redheart from '../../assets/images/dashboardimg/redheart.png'
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import closeblock from '../../assets/images/dashboardimg/closeblock.png'
import deleteitem from '../../assets/images/dashboardimg/deleteitem.png'
import Dropdown from 'react-bootstrap/Dropdown'
import { connect, useDispatch, useSelector } from "react-redux"
import { removeUsersPost_APIcall } from "../slice-adminusers/slice-removeuserspost"
import { getUsersPostsList_APIcall } from "../slice-adminusers/slice-userpostslist"
import loading from '../../assets/images/dashboardimg/loadersimg.gif'
import UsersCommentsDialog from './userspostcomments'
import PostComments from "./postcomments"
import moment from "moment"
import defaultpostimg from '../../assets/images/dashboardimg/defaultpostimage.png'
import defaultuserprofilepicture from '../../assets/images/dashboardimg/defaultuserprofilepicture.png'

const UsersPostsTab = (props) => {

    const time = (updated,time) => {


        let v
        if (updated !== null) {
            v = new Date(updated)
        } else {
            v = new Date(time)
        }
        const today = new Date()
        console.log(v, today,"times")
        let vals = moment.utc(v).local().startOf('seconds').fromNow()
        if (vals === 0) {
            vals = 1
        }
        console.log(vals,"timing")
        return vals
    }

    const [usersPostsList, setUsersPostsList] = useState([])
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(false)

    const authStat_getUsersPosts = useSelector((state) => state.getUsersPostsData)
    const authStat_removeUsersPost = useSelector((state) => state.removeUsersPostData)

    //1 store the result from get users all posts api call
    useEffect(() => {
        
        if (authStat_getUsersPosts.data.responseCode == 200 && authStat_getUsersPosts.data.responseBody != undefined) {
            setUsersPostsList(authStat_getUsersPosts.data.responseBody)
            setLoader(false)
        }
        else if (authStat_getUsersPosts.data.responseCode == 201 && authStat_getUsersPosts.data.responseBody != undefined) {
            console.log("failed")
        }
    }, [authStat_getUsersPosts.data])

    //2 remove post api call
    const removePostcall = (data) => {
        setLoader(true)
        const payload = {
            user_id: props.userid,
            post_id: data.post_id
        }
        dispatch(removeUsersPost_APIcall(payload))
    }

    //3 after any update(remove post) in the events list, need to reload the posts list(api call)
    useEffect(() => {
        // 
        if (authStat_removeUsersPost.data.responseCode == 200 && authStat_removeUsersPost.data.responseBody != undefined) {
            setLoader(false)
            const payload = {
                user_id: props.userid,
            }
            dispatch(getUsersPostsList_APIcall(payload))
        }
        else if (authStat_removeUsersPost.data.responseCode == 201 && authStat_removeUsersPost.data.responseBody != undefined) {
            console.log('failed')
        }
    }, [authStat_removeUsersPost.data])



    return (
        <>
            <div>
                <div style={{ display: loader !== false ? '' : 'none' }}>
                    <div className='enable-loader1'>
                        <img src={loading} width="80px" height="80px"></img>
                    </div>
                </div>
                <div className="userFriendsList_scrollbar mt-2" id="style-2">
                {usersPostsList.length > 0 ?
                    <div className="row" style={{minHeight:"210px"}}>
                        {usersPostsList.filter(items => items.post_description.match(new RegExp(props.data, "i"))).map((data, index) => {
                            return (
                                <div className='col-6 post-item pb-1'>
                                    <div className='row d-flex align-items-center'>
                                        <div className="col-11 d-flex justify-content-start p-0">
                                            <span className="textspan5">Posted {time(data.date_time_created, data.date_time_updated)}</span>
                                        </div>
                                        <div className="col-1 d-flex p-0">
                                            <span className="dropdown-section">
                                                <Dropdown className="poststab-dropdown">
                                                    <Dropdown.Toggle>
                                                        <img src={verticalmore2} width="28px" height="28px" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="poststab-dropdownmenu">
                                                        <Dropdown.Item href="#" className="poststab-dropdownitem d-flex align-items-center" onClick={() => removePostcall(data)}>
                                                            <span>
                                                                <img className="poststab-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                            </span>
                                                            <span style={{ paddingTop: "2px" }} className="poststab-dropdownitemName">Remove</span>
                                                        </Dropdown.Item>
                                                        {/* <Dropdown.Item href="#" className="poststab-dropdownitem d-flex align-items-center pb-50 pt-25">
                                                    <span>
                                                        <img className="poststab-dropdownitemIcon" src={closeblock} width="16px" height="16px"></img>
                                                    </span>
                                                    <span style={{ paddingTop: "2px" }} className="poststab-dropdownitemName">Block</span>
                                                </Dropdown.Item> */}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row post-description">
                                        <span className="d-flex align-items-center spanlight1 " style={{wordBreak:"break-all"}}>{data.post_description}</span>
                                    </div>
                                    <div className="row">
                                        {data.post_image !== "" ?
                                            <img className="my-1 p-0" src={data.post_image} width="255px" height="154px" style={{ borderRadius: "15px" }} /> :
                                            <img className="my-1 p-0" src={defaultpostimg} width="150px" height="154px" />
                                         }
                                    </div>
                                    <div className="row">
                                        <div className="col-9 p-0 d-flex align-items-center justify-content-start">
                                        </div>
                                        {/* ****DON'T REMOVE THE CODE -commented due to no need of emojis in this sprint */}

                                        {/* <div className="col-9 p-0 d-flex align-items-center justify-content-start">
                                    <span className="postreaction"><button className="postreaction-btn">
                                        <span className=""><img className="" src={smilingeyes} height="15" width="15" /> </span>
                                        <span className="postreaction-count d-flex align-items-center justify-content-center">4</span>
                                    </button></span>
                                    <span className="postreaction"><button className="postreaction-btn">
                                        <span className=""><img className="" src={thumpsup} height="16" width="16" /> </span>
                                        <span className="postreaction-count d-flex align-items-center justify-content-center">3</span>
                                    </button></span>
                                    <span className="postreaction"><button className="postreaction-btn">
                                        <span className=""><img className="" src={redheart} height="17" width="17" /> </span>
                                        <span className="postreaction-count d-flex align-items-center justify-content-center">1</span>
                                    </button></span>
                                </div> */}
                                        <div className="col-3 p-0 d-flex align-items-center justify-content-end">
                                            <img className="message-img" src={message} width="16px" height="16px" />
                                            <PostComments data1={data}></PostComments> 
                                            {/* <span className="textspan6">{data.comment_member_lenth}</span> */}
                                            {/* {data.comment_member_lenth != "" ?
                                                <span className="textspan6">{data.comment_member_lenth}</span> :
                                                <span className="textspan6">0</span>} */}
                                        </div>

                                        {/* <div>{JSON.stringify(data)}</div> */}

                                        {/* <UsersCommentsDialog groupId={data.group_id} postId={data.post_id}></UsersCommentsDialog> */}
                                      
                                    </div>
                                </div>
                            )
                        })}
                    </div> :
                    <div className="row d-flex align-items-center">
                        <div className="col-12 d-flex flex-column align-items-center">
                            {/* noEventSection */}
                            <div className=" ">
                                <img className="pt-1" src={defaultpostimg} width="100px" height="100px" />
                            </div>
                            <span className="span-texting pt-2">{props.username} does not have any posts to display</span>
                        </div>
                    </div>
                }
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        getUsersPostsData: state.getUsersPostsData,
        removeUsersPostData: state.removeUsersPostData
    }
}
export default connect(mapStateToProps, {})(UsersPostsTab)