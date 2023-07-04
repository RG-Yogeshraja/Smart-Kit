import React, { useState, useRef, useEffect } from "react";
import dropdowncap from '../../../src/assets/images/dashboardimg/dropdowncap.png';
import verticalmore from '../../../src/assets/images/dashboardimg/verticalmore.png';
import location from '../../../src/assets/images/dashboardimg/location.png';
import dot from '../../assets/images/dashboardimg/Ellipse11.png'
import birthdaycakefire from '../../../src/assets/images/dashboardimg/birthdaycakefire.png';
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss";
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import blockitem from '../../../src/assets/images/dashboardimg/closeblock.png';
import closeblock from '../../../src/assets/images/dashboardimg/closeblock.png';
import vectorplus from '../../../src/assets/images/dashboardimg/vectorplus.png';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../@core/scss/base/adminDashboard/custom_dropdownmenu.scss'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getEventAttendingMember_APIcall } from "../slice-adminevents/slice-geteventattendingmember";
import { addToEventAttending_APIcall } from "../slice-adminevents/slice-addToEventAttending";
import defaultuserprofilepicture from '../../../src/assets/images/dashboardimg/defaultuserprofilepicture.png'

const EventsActiveWaitlistTab = () => {
    const [usersFriendsListt] = useState([])
    const authStat_getEventAttendingMembers = useSelector((state) => state.getEventAttendingMemberData)
    const target = useRef(null)
    const dispatch = useDispatch()
    const [data, setData] = useState(false)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const [waitlistMembers, setWaitlistMembers] = useState([])

    //1 store the result of waiting members list after get response from event members details api call
    useEffect(() => {
        // 
        if (authStat_getEventAttendingMembers.data.responseBody !== undefined && authStat_getEventAttendingMembers.data.responseCode == 200) {
            setWaitlistMembers(authStat_getEventAttendingMembers.data.responseBody.is_waiting)
        }
    }, [authStat_getEventAttendingMembers.data])

    //2 add the member to add the event from waitlist- api call
    const addToEventAttendingCall = (eventId, memberId) => {
        // 
        setCurrentEventId(eventId)
        const payload = {
            user_id: localStorage.getItem("loggedIn_userId"),
            event_id: eventId,
            member_id: memberId,
        }
        dispatch(addToEventAttending_APIcall(payload))
        getEventAllMembersList(eventId)
    }

    //3 after get response from add the member to attend the event from waitlist, reload the waitlist
    const getEventAllMembersList = (eventId) => {
        // 
        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId"),
            event_id: eventId
        }
        dispatch(getEventAttendingMember_APIcall(payload))
    }


    return (
        <>
            <div className="groupactiveMembersscrollbar" id="groupactiveMembers-style">
                <div className="row groupactiveMembers-force-overflow">
                    {usersFriendsListt.map((data, index) => {
                        return (
                            <div className='col-6'>
                                <div className='row  pb-2'>
                                    <div className='col-2 d-flex align-items-center'>
                                        {data.imageName != "" ?
                                            <img src={data.imageName} width="54px" height="54px" /> :
                                            <img src={defaultuserprofilepicture} width="54px" height="54px"></img>}
                                    </div>
                                    <div className='col-8 groups-memberslist d-flex align-items-center'>
                                        <div className='d-flex flex-column '>
                                            <div className="d-flex align-items-center">
                                                <span className='textspan1 userfriendname ps-1'>{data.name}</span>
                                                <span className="ps-1">{data.isAdmin != "" ? <button className="group-btnspan1 d-flex align-items-center justify-content-center">{data.isAdmin}</button> : null}</span>&nbsp;&nbsp;
                                            </div>
                                            <div className=' biodatasection'>
                                                <img src={location} width="16px" height="16px"></img>
                                                <span className='textspanlight1'>{data.location}</span>
                                                <img className="ms-25" src={dot} width="5px" height="5px"></img>
                                                <img className="ms-25" src={birthdaycakefire} width="16px" height="16px"></img>
                                                <span className='textspanlight1 ms-25 mt-25'>{data.birthDate}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 p-0 userfriend-verticalmore">
                                        {(index % 2) == 0 ?
                                            <Dropdown className="customDropdown custompositionw5" >
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="customDropdownmenu customDropdownmenup5">
                                                    <Dropdown.Item href="#" className="ps-50 pt-25 pb-50 customDropdownitem d-flex align-items-center" onClick={() => { addToEventAttendingCall(event_id, member_id) }}>
                                                        <img className="me-25" src={vectorplus} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Add to Attending</span>
                                                    </Dropdown.Item>
                                                    {/* *** block menu option commented due to option not needed in sprint 1 */}
                                                    {/* <Dropdown.Item href="#" className="ps-50 py-25 customDropdownitem d-flex align-items-center">
                                                        <img className="me-25" src={closeblock} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Block</span>
                                                    </Dropdown.Item> */}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            :
                                            <Dropdown className="customDropdown custompositionw5even" >
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="customDropdownmenu customDropdownmenup5">
                                                    <Dropdown.Item href="#" className="ps-50 pt-25 pb-50 customDropdownitem d-flex align-items-center">
                                                        <img className="me-25" src={vectorplus} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Add to Attending</span>
                                                    </Dropdown.Item>
                                                    {/* <Dropdown.Item href="#" className="ps-50 py-25 customDropdownitem d-flex align-items-center">
                                                        <img className="me-25" src={closeblock} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Block</span>
                                                    </Dropdown.Item> */}
                                                </Dropdown.Menu>
                                            </Dropdown>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        getEventAttendingMemberData: state.getEventAttendingMemberData
    }
}
export default connect(mapStateToProps, {})(EventsActiveWaitlistTab)
