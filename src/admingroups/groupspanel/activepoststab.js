import React, { useState, useEffect } from "react"
import Dropdown from 'react-bootstrap/Dropdown'
import verticalmore2 from '../../../src/assets/images/dashboardimg/verticalmore2.png'
import message from '../../../src/assets/images/dashboardimg/message.png'
import smilingeyes from '../../../src/assets/images/dashboardimg/smilingeyes.png'
import thumpsup from '../../../src/assets/images/dashboardimg/thumpsup.png'
import redheart from '../../../src/assets/images/dashboardimg/redheart.png'
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import closeblock from '../../assets/images/dashboardimg/closeblock.png'
import deleteitem from '../../assets/images/dashboardimg/deleteitem.png'
import '../../@core/scss/base/adminDashboard/custom_dropdownmenu.scss'
import { connect, useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
// import RemovepostGroups_APIcall from '../groupspanel/removepost-splice'
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import {postGroups_APIcall} from '../groupspanel/postmembers-splice'
import { RemovepostGroups_APIcall } from "./removepost-splice"
import Grouppostcomments from './getcommentsingrouppost'
import defaultimage from '../../assets/images/dashboardimg/defaultuserprofilepicture.png'
const ActivePostsTab = (props) => {
    const dispatch = useDispatch()
    const [started, setstarted] = useState(false)
    const [setid, getid] = useState('')
    const [usersPostsList, setpost] = useState([])
const [setchange, getchange] = useState(false)
    const time = (time, updated) => {

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
    const authStat = useSelector((state) => state.postGroupsdata)
    const statval = useSelector((state) => state.removepostGroupsdata)
    useEffect(() => {
        setstarted(false)
        const { postGroupsValue } = authStat
        console.log("data", postGroupsValue)
        const { responseBody } = postGroupsValue
        console.log("login responseBody", responseBody)
        console.log("auth respomse success")
        if (authStat.postGroupsValue.responseCode === 200) {

            setpost(responseBody)
            getchange(true)
            console.log(responseBody)
            const timeId = setTimeout(() => {
                setstarted(false)
            }, 1000)

        } else if (authStat.postGroupsValue.responseCode === 201) {

            setpost([])
            console.log(responseBody)
            const timeId = setTimeout(() => {
                setstarted(false)
            }, 1000)
        }


        console.log(authStat.postGroupsValue.responseCode)
    }, [authStat.postGroupsValue])
    useEffect(() => {

    }, [authStat])
    useEffect(() => {
        setstarted(false)
        props.handles(usersPostsList.length, usersPostsList, setchange)
    }, [usersPostsList])
    const removes = (groupid, postid) => {
        const payload = {
            user_id: localStorage.getItem('loggedIn_userId'),
            group_id: groupid,
            post_id: postid
        }
        getid(groupid)
        //
        dispatch(RemovepostGroups_APIcall(payload))

    }
    useEffect(() => {
        setstarted(true)
        const { removepostGroupsValue } = statval
        console.log("data", removepostGroupsValue)
        const { responseBody } = removepostGroupsValue
        console.log("login responseBody", responseBody)
        console.log("auth respomse success")
        if (statval.removepostGroupsValue.responseCode === 200) {
            const payload1 = {
                user_id: localStorage.getItem("loggedIn_userId"),
                group_id: setid
            }
                setstarted(false)
           //
                dispatch(postGroups_APIcall(payload1))
                
        } else if (statval.removepostGroupsValue.responseCode === 201) {
        
                setstarted(false)
          
        }


    }, [statval.removepostGroupsValue])
    return (
        <div className="post-scrollbar" id="post-style">
            <div style={{ display: started !== false ? '' : 'none' }}>
                <div className='enable-loader1'>

                    <img src={load} width="80px" height="80px"></img>
                </div>
            </div>
            <div className="row post-force-overflow">
                {usersPostsList?.map((data, index) => {
                    return (
                        <div className='col-6 group-postitem'>
                            <div className='row d-flex align-items-center'>
                                <div className="col-2 grouppost-userprofile d-flex justify-content-start">
                                    <img className="" style={{ borderRadius: "8px" }} src={data.user_image_url != '' ? data.user_image_url : defaultimage} width="48px" height="48px" />
                                </div>

                                <div className="col-8 d-flex justify-content-start p-0">
                                    <div className="d-flex flex-column grouppost-profilesection">
                                        <span className="group-textspanbold3 grouppost-username">{data.user_name}</span>
                                        <span className="group-textspanlight3 group-posttime">{time(data.date_time_created, data.date_time_updated)}</span>
                                    </div>
                                </div>

                                <div className="col-2 d-flex justify-content-end p-0">
                                    {/* <img className="" src={verticalmore2} width="28px" height="28px" /> */}
                                    {/* <span className="dropdown-section">
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <img src={verticalmore2} width="28" height="28" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="">
                                                <Dropdown.Item href="#" className="d-flex align-items-center dropdowntoggle-item pb-0">
                                                    <span className=""><img src={deleteitem} width="16px" height="16px" /></span>&nbsp;&nbsp;
                                                    <span className="">Remove</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#" className="d-flex align-items-center dropdowntoggle-item">
                                                    <span className=""><img src={closeblock} width="16px" height="16px" /></span>&nbsp;&nbsp;
                                                    <span className="">Block</span>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </span> */}

                                    {/* {(index % 2) == 0 ?
                                        <Dropdown className="friendstab-dropdown friendslistOdd">
                                            <Dropdown.Toggle>
                                                <img src={verticalmore2} width="28" height="28" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="friendstab-dropdownmenu">
                                                <Dropdown.Item href="#" className="friendstab-dropdownitem d-flex align-items-center">
                                                    <span>
                                                        <img className="friendstab-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                    </span>
                                                    <span style={{ paddingTop: "2px" }} className="friendstab-dropdownitemName">Remove</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#" className="friendstab-dropdownitem d-flex align-items-center">
                                                    <span>
                                                        <img className="friendstab-dropdownitemIcon" src={closeblock} width="16px" height="16px"></img>
                                                    </span>
                                                    <span style={{ paddingTop: "2px" }} className="friendstab-dropdownitemName">Block</span>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown> :
                                        <Dropdown className="friendstab-dropdown friendslistEven">
                                            <Dropdown.Toggle>
                                                <img src={verticalmore2} width="28" height="28" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="friendstab-dropdownmenu">
                                                <Dropdown.Item href="#" className="friendstab-dropdownitem d-flex align-items-center">
                                                    <span>
                                                        <img className="friendstab-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                    </span>
                                                    <span style={{ paddingTop: "2px" }} className="friendstab-dropdownitemName">Remove</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#" className="friendstab-dropdownitem d-flex align-items-center">
                                                    <span>
                                                        <img className="friendstab-dropdownitemIcon" src={closeblock} width="16px" height="16px"></img>
                                                    </span>
                                                    <span style={{ paddingTop: "2px" }} className="friendstab-dropdownitemName">Block</span>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>} */}

                                    {(index % 2) === 0 ? <Dropdown className="customDropdown custompositionw2" >
                                        <Dropdown.Toggle>
                                            <img src={verticalmore2} width="28" height="28" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="customDropdownmenu customDropdownmenup2">
                                            <Dropdown.Item className="ps-50 pt-25 pb-50 customDropdownitem d-flex align-items-center" onClick={() => removes(data.group_id, data.post_id)}>
                                                <img className="me-25" src={deleteitem} width="16px" height="16px"></img>
                                                <span className="textspanlight37">Remove</span>
                                            </Dropdown.Item>
                                            {/* <Dropdown.Item href="#" className="ps-50 py-25 customDropdownitem d-flex align-items-center">
                                                    <img className="me-25" src={closeblock} width="16px" height="16px"></img>
                                                    <span className="textspanlight37">Block</span>
                                                </Dropdown.Item> */}
                                        </Dropdown.Menu>
                                    </Dropdown> : <Dropdown className="customDropdown custompositionw2even" >
                                        <Dropdown.Toggle>
                                            <img src={verticalmore2} width="28" height="28" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="customDropdownmenu customDropdownmenup2">
                                            <Dropdown.Item onClick={() => removes(data.group_id, data.post_id)} className="ps-50 pt-25 pb-50 customDropdownitem d-flex align-items-center" >
                                                <img className="me-25" src={deleteitem} width="16px" height="16px"></img>
                                                <span className="textspanlight37">Remove</span>
                                            </Dropdown.Item>
                                            {/* <Dropdown.Item href="#" className="ps-50 py-25 customDropdownitem d-flex align-items-center">
                                                    <img className="me-25" src={closeblock} width="16px" height="16px"></img>
                                                    <span className="textspanlight37">Block</span>
                                                </Dropdown.Item> */}
                                        </Dropdown.Menu>
                                    </Dropdown>}
                                </div>
                            </div>

                            <div className="row post-description">
                                {/* <div className="d-flex align-items-center p-0"> */}
                                <span className="d-flex align-items-center textspanlight3 p-0" style={{color:'#677E84'}}>{data.post_description}</span>
                                {/* </div> */}
                            </div>
                            {data.image_url?.map((data1, index) => {
                                return (

                                    <div className="row" >

                                        <img className="my-1 p-0" style={{ borderRadius: "8px" }} src={data1.image_url } width="255px" height="154px" />
                                    </div>
                                )
                            })}
                             {/* <div className="row"> */}
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
                                <div className=" d-flex align-items-center justify-content-end">
                                    <img className="message-img" src={message} width="16px" height="16px" />
                                  
                                    <Grouppostcomments data={data}></Grouppostcomments>
                                </div>

                            </div> 

                           
                    )
                })}
                <div style={{ display: usersPostsList?.length === 0 ? 'flex' : 'none' }} className=" justify-content-center mt-5">
                    <span className="text-danger">Post Not Found</span>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log("map state to props**:", state)
    return {
       state
    }
}
export default connect(mapStateToProps, {})(ActivePostsTab)

