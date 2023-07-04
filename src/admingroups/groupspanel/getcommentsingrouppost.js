import React, { useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
import message from '../../../src/assets/images/dashboardimg/message.png'
import postcommentsprofile1 from '../../../src/assets/images/dashboardimg/postcommentsprofile1.png'
import dot from '../../../src/assets/images/dashboardimg/Ellipse11.png'
import verticalmore from '../../../src/assets/images/dashboardimg/verticalmore.png'
import deleteitem from '../../../src/assets/images/dashboardimg/deleteitem.png'
import { getcommentlist_APIcall } from '../getcomment-splice'
import { connect, useDispatch, useSelector } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown'
import moment from 'moment'
import { removecommentlist_APIcall } from '../removecomment-splice'
import { postGroups_APIcall } from '../groupspanel/postmembers-splice'
import defaultimages from '../../assets/images/dashboardimg/defaultuserprofilepicture.png'
import twousers from '../../assets/images/dashboardimg/twousersgroup.png'

const Grouppostcomments = (props) => {
    //
    console.log(props)
    const dispatch = useDispatch()
    const [show1, setShow1] = useState(false)
    const [setcomment, getcomment] = useState([])
    const [started, setstarted] = useState(false)
    const [startpost, setposts] = useState(false)
    const handleClose = () => {
        setposts(false)
        const payload1 = {
            user_id: localStorage.getItem("loggedIn_userId"),
            group_id: props.data.group_id
        }

        dispatch(postGroups_APIcall(payload1))
        setShow1(false)
    }
    const authStat = useSelector((state) => state.removecommentlistdata)
    const authStat1 = useSelector((state) => state.getcommentlistdata)
    useEffect(() => {
        const payload = {
            user_id: localStorage.getItem('loggedIn_userId'),
            group_id: props.data.group_id,
            post_id: props.data.post_id
        }
        //
        dispatch(getcommentlist_APIcall(payload))

    }, [startpost])
    const time = (time, updated) => {

        let v
        if (updated !== null) {
            v = new Date(updated)
        } else {
            v = new Date(time)
        }
        const today = new Date()
        console.log(v, today)
        const vals = moment.utc(moment(v)).format("DD MMM YYYY")
        const times = moment.utc(moment(v)).format("hh:mm a")
        console.log(vals)
        return `${vals} at ${times}`
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
    useEffect(() => {
        const { removecommentvalues } = authStat
        //
        console.log("data", removecommentvalues)
        const { responseBody } = removecommentvalues
        console.log("login responseBody", responseBody)
        console.log("auth respomse success")
        if (authStat.removecommentvalues.responseCode === 200) {
            //
            const payload = {
                user_id: localStorage.getItem('loggedIn_userId'),
                group_id: props.data.group_id,
                post_id: props.data.post_id
            }
            //
            dispatch(getcommentlist_APIcall(payload))


            const timeId = setTimeout(() => {
                setstarted(false)
            }, 1000)

        } else if (authStat.removecommentvalues.responseCode === 201) {
            setShow1(false)
            const timeId = setTimeout(() => {
                setstarted(false)
            }, 1000)
        }


        console.log(authStat.removecommentvalues.responseCode)
    }, [authStat.removecommentvalues])
    useEffect(() => {
        const { getcommentlistvalues } = authStat1
        //
        console.log("data", getcommentlistvalues)
        const { responseBody } = getcommentlistvalues
        console.log("login responseBody", responseBody)
        console.log("auth respomse success")
        if (authStat1.getcommentlistvalues.responseCode === 200) {


            console.log(responseBody)
            getcomment(responseBody)
            const timeId = setTimeout(() => {
                setstarted(false)
            }, 1000)

        } else if (authStat1.getcommentlistvalues.responseCode === 201) {

            getcomment([])
            console.log(responseBody)
            const timeId = setTimeout(() => {
                setstarted(false)
            }, 1000)
        }


        console.log(authStat1.getcommentlistvalues.responseCode)
    }, [authStat1.getcommentlistvalues])

    const removecomments = (userid, groupid, commentid) => {
        const payload = {
            user_id: localStorage.getItem('loggedIn_userId'),
            group_id: groupid,
            member_id: userid,
            comment_id: commentid
        }

        dispatch(removecommentlist_APIcall(payload))

    }
    const handleshow = () => {
        
        setposts(true)
        
        if (props.data.total_comments !== 0) {
            setShow1(true)
        }
        //     const payload = {
        //         user_id: localStorage.getItem('loggedIn_userId'),
        //         group_id: props.data.group_id,
        //         post_id: props.data.post_id
        //     }
        // //
        //     dispatch(getcommentlist_APIcall(payload))

    }
    return (
        <>
            {/* <button onClick={() => setShow1(true)} className="sponsor-btntextbold1" style={{ outline: "none" }}>View  Report</button> */}
            <span className="textspan6" style={{ cursor: 'pointer' }} onClick={handleshow}>{props.data.total_comments}</span>

            <Modal show={show1} centered dialogClassName="postcomments-custommodal" backdrop="static" onHide={() => setShow1(false)}>
                <div className="p-1">
                    <div className="pb-2 ps-2 pt-2">
                        <span className="sponsor-textspanbold14">Post Comments</span>
                    </div>
                    <div className="postcomments-scrollbar" id="postcomments-style">
                        <div className="postcomments-force-overflow">
                            <div className="ms-5 pe-3">
                                <div className="row postcomments-header p-1">
                                    <div className="col-3 px-0">
                                        <img src={props.data.user_image_url != "" ? props.data.user_image_url : twousers} width="124px" height="124px" style={{borderRadius:"12px"}} />
                                    </div>
                                    <div className="col-9 d-flex flex-column ps-2">
                                        <div className="pt-25 pb-1 ps-1">
                                            <span className="sponsor-textspanlight14" style={{ fontWeight: "500" }}>{props.data.post_description}</span>

                                        </div>
                                        <span className="sponsor-textspanbold20 ps-1">{time(props.data.date_time_created, props.data.date_time_updated)}</span>
                                    </div>
                                </div>
                            </div>


                            <div className="ps-3 pt-2">
                                <div className="pb-1">
                                    <span className="sponser-textspanbold4">Comments ({setcomment.length})</span>
                                </div>
                                {setcomment?.map((data, index) => {
                                    return (
                                        <div>
                                            <div>
                                                <div className="col-12 d-flex">
                                                    <div className="col-1">
                                                        {data.user_image_url != "" ?  <img className="" src={data.user_image_url} width="42px" height="42px" style={{borderRadius:"12px"}}/> : <img className="" src={defaultimages} width="42px" height="42px" />
                                                        }
                                                       
                                                    </div>
                                                    <div className="col-10 d-flex flex-column pe-1">
                                                        <div className="">
                                                            <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>{data.user_name} </span>
                                                            {/* <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "500" }}> Wow! </span>
                                                <span className="postcomments-textspan" style={{ color: "#003B4A", fontWeight: "600" }}>@John Doe</span> */}
                                                            <span className="postcomments-textspan" style={{ color: "#677E84", fontWeight: "400" }}>{data.comment_description}</span>
                                                            <div className="sponsor-textspanlight15 pe-50 mt-25">{timecoment(data.date_time_created, data.date_time_updated)}</div>
                                                        </div>


                                                    </div>
                                                    <div className="col-1">
                                                        <Dropdown className="postcomments-dropdown ">
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
                                                        </Dropdown>
                                                    </div>
                                                </div>

                                                <div className="ms-5">
                                                 
                                                    <img className="" src={dot} width="4px" height="4px" style={{ color: "#95E1BF", display: data.date_time_updated === null ? "none" : '' }} />
                                                    <span className="sponser-textspanlight2 ps-50" style={{ color: "#95E1BF", display: data.date_time_updated === null ? "none" : '' }} >Edited</span>
                                                </div>

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
    console.log("map state to props**:", state)
    return {
        state
    }
}
export default connect(mapStateToProps, {})(Grouppostcomments)
