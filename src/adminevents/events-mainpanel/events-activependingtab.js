
import React, { useState, useRef, useEffect } from "react";
import userfriend1 from '../../../src/assets/images/dashboardimg/userfriend1.png';
import userfriend2 from '../../../src/assets/images/dashboardimg/userfriend2.png';
import userfriend3 from '../../../src/assets/images/dashboardimg/userfriend3.png';
import userfriend4 from '../../../src/assets/images/dashboardimg/userfriend4.png';
import userfriend5 from '../../../src/assets/images/dashboardimg/userfriend5.png';
import userfriend7 from '../../../src/assets/images/dashboardimg/userfriend7.png';
import dropdowncap from '../../../src/assets/images/dashboardimg/dropdowncap.png';
import verticalmore from '../../../src/assets/images/dashboardimg/verticalmore.png';
import location from '../../../src/assets/images/dashboardimg/location.png';
import dot from '../../assets/images/dashboardimg/Ellipse11.png'
import birthdaycakefire from '../../../src/assets/images/dashboardimg/birthdaycakefire.png';
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss";
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import blockitem from '../../../src/assets/images/dashboardimg/closeblock.png';
import deleteitem from '../../../src/assets/images/dashboardimg/deleteitem.png';
import closeblock from '../../../src/assets/images/dashboardimg/closeblock.png';
import reportflagicon from '../../../src/assets/images/dashboardimg/reportflagicon.png';
import Dropdown from 'react-bootstrap/Dropdown'
import '../../@core/scss/base/adminDashboard/custom_dropdownmenu.scss'
import tickboxpending from '../../../src/assets/images/dashboardimg/tickbox-pending.png'
import deletedpending from '../../../src/assets/images/dashboardimg/delete-pending.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import { acceptRejectMemberFromPending_APIcall } from '../slice-adminevents/slice-acceptreject-memberfrompending'
import { getEventAttendingMember_APIcall } from "../slice-adminevents/slice-geteventattendingmember";
import defaultuserprofilepicture from '../../../src/assets/images/dashboardimg/defaultuserprofilepicture.png'

const EventsActivePendingTab = (props) => {
    const [usersFriendsList] = useState([
        { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30", isAdmin: "Admin" },
        { id: '2', name: "Haylie Gouse", location: "South End, Boston", imageName: userfriend4, birthDate: "30", isAdmin: "" },
        { id: '3', name: "Alex Hardy", location: "Abington", imageName: userfriend2, birthDate: "34", isAdmin: "" },
        { id: '4', name: "Skylar Curtis", location: "Abington", imageName: userfriend5, birthDate: "34", isAdmin: "" },
        { id: '5', name: "Giana Bergson", location: "Worcester", imageName: userfriend3, birthDate: "25", isAdmin: "" },
        { id: '6', name: "Jaydon Geidt", location: "Worcester", imageName: userfriend7, birthDate: "25", isAdmin: "" },
        { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30", isAdmin: "" },
        { id: '2', name: "Haylie Gouse", location: "South End, Boston", imageName: userfriend4, birthDate: "30", isAdmin: "" },
        { id: '3', name: "Alex Hardy", location: "Abington", imageName: userfriend2, birthDate: "34", isAdmin: "" },
        { id: '4', name: "Skylar Curtis", location: "Abington", imageName: userfriend5, birthDate: "34", isAdmin: "" },
        { id: '5', name: "Giana Bergson", location: "Worcester", imageName: userfriend3, birthDate: "25", isAdmin: "" },
        { id: '6', name: "Jaydon Geidt", location: "Worcester", imageName: userfriend7, birthDate: "25", isAdmin: "" },
        { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30", isAdmin: "" },
    ])
    const target = useRef(null);
    const [data, setData] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [pendingMembers, setPendingMembers] = useState([])
    const dispatch = useDispatch()
    const authStat_getEventAttendingMembers = useSelector((state) => state.getEventAttendingMemberData)
    const [setpropsval, getpropsval] = useState(props.data2)
    const [currentEventId, setCurrentEventId] = useState('')

    const changebirth = (val) => {
        if (val !== undefined) {
            const datas = val
            // console.log(datas)
            const today = new Date()
            const birthDate = new Date(datas)
            // console.log("get bod-->", birthDate) // create a date object directly from `dob1` argument
            let age_now = today.getFullYear() - birthDate.getFullYear()
            const m = today.getMonth() - birthDate.getMonth()
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age_now--
            }
            return <>{age_now}</>
        }
    }

    useEffect(() => {
        getpropsval(props.data2)
    }, [props.data2])

    useEffect(() => {
        // 
        if (authStat_getEventAttendingMembers.data.responseBody !== undefined && authStat_getEventAttendingMembers.data.responseCode == 200) {
            setPendingMembers(authStat_getEventAttendingMembers.data.responseBody.is_pending)
        }
    }, [authStat_getEventAttendingMembers.data])

    const acceptRejectCall = (eventId, memberId, type) => {
        
        setCurrentEventId(eventId)
        const payload = {
            user_id: localStorage.getItem("loggedIn_userId"),
            event_id: eventId,
            member_id: memberId,
            is_type: type
        }
        dispatch(acceptRejectMemberFromPending_APIcall(payload))
        getEventAllMembersList(eventId)
    }

    const getEventAllMembersList = (eventId) => {
        // 
        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId"),
            event_id: eventId
        }
        dispatch(getEventAttendingMember_APIcall(payload))
    }

    // useEffect(()=>{

    // },[])

    return (
        <>
            <div className="groupactiveMembersscrollbar" id="groupactiveMembers-style">
                <div className="row groupactiveMembers-force-overflow">
                    {pendingMembers?.map((data, index) => {
                        return (
                            <div className='col-6'>
                                <div className='row pb-1'>
                                    <div className='col-2 d-flex align-items-center pt-50'>
                                        {data.member_details.image_url != "" ?
                                            <img src={data.member_details.image_url} width="54px" height="54px" style={{ borderRadius: "15px" }} />
                                            : <img src={defaultuserprofilepicture} width="54px" height="54px" />}
                                    </div>

                                    <div className='col-9'>
                                        <div className="d-flex flex-column">
                                            <div className="row d-flex align-items-center">
                                                <div className="col-8 d-flex">
                                                    <span className='textspan1 userfriendname ps-1 pt-50 d-flex justify-content-start'>{data.member_details.full_name}</span>
                                                    {/* {data.isAdmin != "" ?
                                                        <span className="ps-75 pt-50 d-flex justify-content-end"><button className="group-btnspan1 d-flex align-items-center justify-content-center">{data.isAdmin}</button></span>
                                                        : null} */}

                                                    {data.is_admin == 1 ?
                                                        <span className="d-flex justify-content-center align-items-center group-btnspan1">Admin</span>
                                                        : null}
                                                </div>
                                                <div className="col-4 d-flex">
                                                    <img src={deletedpending} width="26px" height="26px" style={{ cursor: "pointer", display: setpropsval === "Edit" ? 'none' : '' }} onClick={() => acceptRejectCall(data.event_id, data.member_details.user_id, '0')}></img>&nbsp;&nbsp;&nbsp;
                                                    <img src={tickboxpending} width="26px" height="26px" style={{ cursor: "pointer", display: setpropsval === "Edit" ? 'none' : '' }} onClick={() => acceptRejectCall(data.event_id, data.member_details.user_id, '1')}></img>
                                                </div>
                                            </div>
                                            <div className='ps-1'>
                                                <img src={location} width="16px" height="16px"></img>
                                                <span className='textspanlight1'>{data.member_details.location}</span>
                                                <img className="ms-25" src={dot} width="5px" height="5px"></img>
                                                <img className="ms-25" src={birthdaycakefire} width="16px" height="16px"></img>
                                                <span className='textspanlight1 ms-25 mt-25'>{changebirth(data.member_details.birth_date)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ********** three dot button commented due to no need of block option in sprint 1  */}
                                    {/* <div className="col-2 p-0 userfriend-verticalmore">
                                        {(index % 2) == 0 ?
                                            <Dropdown className="customDropdown custompositionw4" >
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="customDropdownmenu customDropdownmenup4">
                                                    <Dropdown.Item href="#" className="ps-75 pt-25 pb-25 customDropdownitem d-flex align-items-center">
                                                        <img className="me-25" src={closeblock} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Block</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            :
                                            <Dropdown className="customDropdown custompositionw4even" >
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="customDropdownmenu customDropdownmenup4">
                                                    <Dropdown.Item href="#" className="ps-75 pt-25 pb-25 customDropdownitem d-flex align-items-center">
                                                        <img className="me-25" src={closeblock} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Block</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>}
                                    </div> */}
                                </div>
                            </div>
                        )
                    })}

                    <div className='justify-content-center mt-5' style={{ display: pendingMembers?.length < 1 ? 'flex' : 'none' }}>
                        <div className="text-danger">No Pending members</div>
                    </div>
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
export default connect(mapStateToProps, {})(EventsActivePendingTab)
