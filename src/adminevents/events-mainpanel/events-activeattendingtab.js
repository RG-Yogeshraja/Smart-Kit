import React, { useState, useEffect, useRef } from "react"
import userfriend1 from '../../../src/assets/images/dashboardimg/userfriend1.png'
import userfriend2 from '../../../src/assets/images/dashboardimg/userfriend2.png'
import userfriend3 from '../../../src/assets/images/dashboardimg/userfriend3.png'
import userfriend4 from '../../../src/assets/images/dashboardimg/userfriend4.png'
import userfriend5 from '../../../src/assets/images/dashboardimg/userfriend5.png'
import userfriend7 from '../../../src/assets/images/dashboardimg/userfriend7.png'
import dropdowncap from '../../../src/assets/images/dashboardimg/dropdowncap.png'
import verticalmore from '../../../src/assets/images/dashboardimg/verticalmore.png'
import location from '../../../src/assets/images/dashboardimg/location.png'
import dot from '../../assets/images/dashboardimg/Ellipse11.png'
import birthdaycakefire from '../../../src/assets/images/dashboardimg/birthdaycakefire.png'
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import blockitem from '../../../src/assets/images/dashboardimg/closeblock.png'
import deleteitem from '../../../src/assets/images/dashboardimg/deleteitem.png'
import closeblock from '../../../src/assets/images/dashboardimg/closeblock.png'
import reportflagicon from '../../../src/assets/images/dashboardimg/reportflagicon.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown'
import { removeMemberFromAttending_APIcall } from "../slice-adminevents/slice-removememberfromattending"
import { getEventAttendingMember_APIcall } from "../slice-adminevents/slice-geteventattendingmember"
import { blockMemberFromAttending_APIcall } from "../slice-adminevents/slice-blockmemberfromattending"
import loadingSpin from '../../assets/images/dashboardimg/loadersimg.gif'
import defaultuserprofilepicture from '../../../src/assets/images/dashboardimg/defaultuserprofilepicture.png'

const EventsActiveAttendingTab = (props) => {
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
        { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30", isAdmin: "" }
    ])
    const target = useRef(null)
    const [data, setData] = useState(false)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const dispatch = useDispatch()
    const [dataLoad, setDataLoad] = useState(props.dataLoadingStatus)
    const [loader, setLoader] = useState(false)
    const [attendingMembers, setAttendingMembers] = useState([])
    const [pendingMembers, setPendingMembers] = useState([])
    const [waitingMembers, setWaitingMembers] = useState([])
    const [individualEventDetails, setIndividualEventDetails] = useState([])
    const authStat_getEventAttendingMembers = useSelector((state) => state.getEventAttendingMemberData)
    const authStat_removeMemberfromAttending = useSelector((state) => state.removeMemberFromAttendingData)
    const authStat_blockMemberfromAttending = useSelector((state) => state.blockMemberFromAttendingData)
    const authStat_getAllActiveEvents = useSelector((state) => state.getAllActiveEventsData)
    const authStat_getEventDetails = useSelector((state) => state.getEventDetailsData)


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


    //1 after getting response 200 from get event attending api call, store the result
    useEffect(() => {

        if (authStat_getEventAttendingMembers.data.responseBody !== undefined && authStat_getEventAttendingMembers.data.responseCode == 200) {
            // setAttendingMembers(authStat_getEventAttendingMembers.data.responseBody.is_member)
            setPendingMembers(authStat_getEventAttendingMembers.data.responseBody.is_pending)
            setWaitingMembers(authStat_getEventAttendingMembers.data.responseBody.is_waiting)
            const responseData = authStat_getEventAttendingMembers.data.responseBody.is_member
            const data = [...responseData]
            const adminFilter = data.filter(item => item.is_admin == 1)
            const memberFilter = data.filter(item => item.is_admin == 0)
            const sortingAdminFilter = adminFilter.sort((a, b) => a.member_details.full_name.localeCompare(b.member_details.full_name))
            const sortingMemmberFilter = memberFilter.sort((a, b) => a.member_details.full_name.localeCompare(b.member_details.full_name))
            const consolidateSortingData = [...sortingAdminFilter, ...sortingMemmberFilter]
            setAttendingMembers(consolidateSortingData)
            setLoader(false)

            setDataLoad(true)
            console.log(dataLoad)
            console.log(attendingMembers)
        } else if (authStat_getEventAttendingMembers.data.responseBody !== undefined || authStat_getEventAttendingMembers.data.responseCode == 201) {
            console.log('Get attending member list FAILED')
        }
    }, [authStat_getEventAttendingMembers.data])

    //2 remove member from event attending- api call
    const removeMemberFromEventCall = (eventId, memberId) => {
        // 
        const payload = {
            user_id: localStorage.getItem("loggedIn_userId"),
            event_id: eventId,
            member_id: memberId
        }
        dispatch(removeMemberFromAttending_APIcall(payload))
    }

    //4 remove member from event attending- api response
    useEffect(() => {
        // 
        if (authStat_removeMemberfromAttending.data.responseBody !== undefined && authStat_removeMemberfromAttending.data.responseCode == 200) {
            getAllEventAttendingMembersList()
        } else if (authStat_removeMemberfromAttending.data.responseCode == 201) {
            console.log('remove member from attending list FAILED')
        }
    }, [authStat_removeMemberfromAttending.data])

    //5 after remove member from event attending list, reload the list to get the updated list
    const getAllEventAttendingMembersList = () => {
        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId"),
            event_id: props.selectedEventId
        }
        dispatch(getEventAttendingMember_APIcall(payload))
    }

    return (
        <>
            <div style={{ display: loader !== false ? '' : 'none' }}>
                <div className='enable-loader1'>
                    <img src={loadingSpin} width="80px" height="80px"></img>
                </div>
            </div>
            <div className="groupactiveMembersscrollbar" id="groupactiveMembers-style">
                <div className="row groupactiveMembers-force-overflow">
                    {attendingMembers?.map((data, index) => {
                        return (
                            <div className='col-6'>
                                <div className='row  pb-2'>
                                    <div className='col-2 d-flex align-items-center'>
                                        {data.member_details.image_url != "" ? <img src={data.member_details.image_url} width="54px" height="54px" style={{ borderRadius: "15px" }} /> :

                                            <img src={defaultuserprofilepicture} width="54px" height="54px" />

                                        }
                                    </div>
                                    <div className='col-8 groups-memberslist d-flex align-items-center'>
                                        <div className='d-flex flex-column '>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span className='textspan1 userfriendname ps-1'>{data.member_details.full_name}</span>
                                                {/* <span className='ps-1'>{data.user_id}</span> */}
                                                {data.is_admin == '1' ? <button className="eventAdminBtn py-25 me-25 d-flex align-items-center justify-content-center">Admin</button> : null}
                                            </div>
                                            <div className='biodatasection d-flex align-items-center'>
                                                {data.member_details.location != "" ?
                                                    <>
                                                        <img src={location} width="16px" height="16px"></img>
                                                        <span className='textspanlight1'>{data.member_details.location}</span>
                                                        <img className="ms-25" src={dot} width="5px" height="5px"></img>
                                                    </> : null}
                                                {data.member_details.birth_date != "" ?
                                                    <>
                                                        <img className="ms-25" src={birthdaycakefire} width="16px" height="16px"></img>
                                                        <span className='textspanlight1 ms-25 mt-25'>{changebirth(data.member_details.birth_date)}</span>
                                                    </> : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 p-0 userfriend-verticalmore">
                                        {/* <img src={verticalmore} width="28" height="28" /> */}
                                        {(index % 2) == 0 ?
                                            <Dropdown className="friendstab-dropdown friendslistOddd">
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="friendstab-dropdownmenu">
                                                    <Dropdown.Item href="#" className="friendstab-dropdownitem d-flex align-items-center" onClick={() => { removeMemberFromEventCall(data.event_id, data.member_details.user_id) }}>
                                                        <span>
                                                            <img className="friendstab-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="friendstab-dropdownitemName">Remove</span>
                                                    </Dropdown.Item>
                                                    {/* <Dropdown.Item href="#" className="friendstab-dropdownitem d-flex align-items-center" onClick={() => { blockMemberFromEventCall(data.event_id, data.member_details.user_id) }}>
                                                        <span>
                                                            <img className="friendstab-dropdownitemIcon" src={closeblock} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="friendstab-dropdownitemName">Block</span>
                                                    </Dropdown.Item> */}
                                                </Dropdown.Menu>
                                            </Dropdown> :
                                            <Dropdown className="friendstab-dropdown friendslistEvenn">
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="friendstab-dropdownmenu">
                                                    <Dropdown.Item href="#" className="friendstab-dropdownitem d-flex align-items-center" onClick={() => { removeMemberFromEventCall(data.event_id, data.member_details.user_id) }}>
                                                        <span>
                                                            <img className="friendstab-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="friendstab-dropdownitemName">Remove</span>
                                                    </Dropdown.Item>
                                                    {/* <Dropdown.Item href="#" className="friendstab-dropdownitem d-flex align-items-center" onClick={() => { blockMemberFromEventCall(data.event_id, data.member_details.user_id) }}>
                                                        <span>
                                                            <img className="friendstab-dropdownitemIcon" src={closeblock} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="friendstab-dropdownitemName">Block</span>
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
        getAllActiveEventsData: state.getAllActiveEventsData,
        getEventAttendingMemberData: state.getEventAttendingMemberData,
        removeMemberFromAttendingData: state.removeMemberFromAttendingData,
        getEventDetailsData: state.getEventDetailsData,
        blockMemberFromAttendingData: state.blockMemberFromAttendingData
    }
}
export default connect(mapStateToProps, {})(EventsActiveAttendingTab)
