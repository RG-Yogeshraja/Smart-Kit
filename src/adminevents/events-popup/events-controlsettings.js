import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
// import '../@core/scss/base/adminDashboard/controlusersettings.scss';
import '../../@core/scss/base/adminDashboard/eventsmenu/controleventsettings.scss'
import keys from '../../assets/images/dashboardimg/key.png'
// import {Rearrange} from '../../assets/images/dashboardimg/group-rearrange.png'
import Rearranging from '../../assets/images/dashboardimg/grouprearrange.png'
import checkblankboxes from '../../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../../assets/images/dashboardimg/checktickbox.png'
import ontoggle from '../../assets/images/dashboardimg/toggleonactive.png'
import offf from '../../assets/images/dashboardimg/off.png'
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown"
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp"
import { Activity } from 'react-feather'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getEventExplorerAlgorithmData_APIcall, updateEventExplorerAlgorithmData_APIcall } from "../slice-adminevents/slice-eventControlSettings"
import loadingSpin from '../../assets/images/dashboardimg/loadersimg.gif'
// import { Draggable } from 'react-drag-reorder'
// import RowOrderingGrid from './dragtest'


function ControlEventsSettings() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const [showLess3, setshowLess3] = useState(true)
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(false)
    const [getDragdata, setDragdata] = useState(["Hello", "Hi", "How are you", "Cool"])
    const authStat_EventExplorerAlgorithmData = useSelector((state) => state.eventExplorerAlgorithmData)

    const [eventExplorerAlgorithmJson, setEventExplorerAlgorithmJson] = useState([
        { id: 0, img: Rearranging, number: "1", name: "Mileage from Primary Location", name2: "Events closer to a user's primary location are ranked higher than events farther from a user's primary location", checked: false },
        { id: 1, img: Rearranging, number: "2", name: "Number of Friends Attending", name2: "More friends attending ranked higher than fewer", checked: false },
        { id: 2, name: "Number of Common Interests with Event Interests", name2: "More user interests in common with event interests ranked higher than fewer", css: { marginLeft: "38px" }, checked: false },
        { id: 3, name: "Has Video", name2: "If event has a video uploaded it is ranked higher than events that don't have a video uploaded", css: { marginLeft: "38px" }, checked: false },
        { id: 4, name: "Has Picture", values: "1", name2: "Events with a picture are ranked higher than events without a picture", css: { marginLeft: "38px" }, checked: false },
        { id: 5, img: Rearranging, number: "3", name: "Sponsored Event", values: "3", name2: "Sponsored Events are ranked higher than non-Sponsored Events", checked: false },
        { id: 6, name: "Time Until Event", name2: "Events occurring sooner ranked higher than events occurring later", css: { marginLeft: "38px" }, checked: false },
        { id: 7, name: "No Reports", name2: "Events without reports ranked higher than events with reports", css: { marginLeft: "38px" }, checked: false },
        { id: 8, img: Rearranging, number: "4", name: "Hint Social Event", name2: "Hint Social Events are ranked higher than non-Hint Social events", checked: true },
        { id: 9, name: "Live Event", name2: "Events occurring right now ranked higher than events not occurring right now", css: { marginLeft: "38px" }, checked: false },
        { id: 10, name: "Number of Members Attending", name2: "Events with more members attending ranked higher than events with fewer attending", css: { marginLeft: "38px" }, checked: false },
        { id: 11, name: "Has Attended an Event by the Sponsor in the Past", name2: "Events sponsored by a sponsor for which the user has attended prior events ranked higher than those that are not", css: { marginLeft: "38px" }, checked: false },
    ])
    const [manageuser2, setManageuser2] = useState([
        { id: 1, name: "Miles or Fewer from Primary Location", values: "2", checking: true },
        { id: 2, name: "Friends Attending", values: "0", checking: true },
        { id: 3, name: "Interest Matching Event Interests", values: "2", checking: true },
        { id: 4, name: "Members Attending or Requested to Attend", values: "0", checking: true },

    ])
    const [manageuser1, setManageuser1] = useState([
        { id: 1, name: "Miles or Fewer from Primary Location ", values: "50", checking: true },
        { id: 2, name: "Friends Attending", values: "0", checking: true },
        { id: 3, name: "Interest Matching Event Interests ", values: "50", checking: true },
        { id: 4, name: "Members Attending or Requested to Attend", values: "0", checking: true },
    ])

    const dialogOpen = () => {
        setShow(true)
        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId"),
            event_algorithm_id: "1"
        }
        dispatch(getEventExplorerAlgorithmData_APIcall(payload))
        setLoader(true)
    }

    const handleControlEvent = (index) => {
        
        const newObject = [...eventExplorerAlgorithmJson]
        if (newObject[index].checked == false) {
            newObject[index].checked = true
        }
        else {
            newObject[index].checked = false
        }
        setEventExplorerAlgorithmJson(newObject)
    }

    const handlechange1 = (index) => {
        const newUsers1 = [...manageuser1]
        if (newUsers1[index].checking === true) {
            newUsers1[index].checking = false
        }
        else {
            newUsers1[index].checking = true
        }
        setManageuser1(newUsers1)
    }

    const handlechange2 = (index) => {
        const newUsers2 = [...manageuser2]
        if (newUsers2[index].checking === true) {
            newUsers2[index].checking = false
        }
        else {
            newUsers2[index].checking = true
        }
        setManageuser2(newUsers2)
    }

    const handlechange3 = (index) => {
        const newUsers3 = [...manageuser3]
        if (newUsers3[index].checking === true) {
            newUsers3[index].checking = false
        }
        else {
            newUsers3[index].checking = true
        }
        setManageuser3(newUsers3)
    }

    const changeShow = () => {
        setshowLess(!showLess)
    }

    const [showLess, setshowLess] = useState(true)
    const changeShow1 = () => {
        setshowLess1(!showLess1)
    }

    const [showLess1, setshowLess1] = useState(true)
    const changeShow2 = () => {
        setshowLess2(!showLess2)
    }

    const [showLess2, setshowLess2] = useState(true)
    const changeShow3 = () => {
        setshowLess3(!showLess3)
    }

    useEffect(() => {
        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId"),
            event_algorithm_id: "1"
        }
        dispatch(getEventExplorerAlgorithmData_APIcall(payload))
    }, [])

    useEffect(() => {

        if (authStat_EventExplorerAlgorithmData.data.responseCode == 200 && authStat_EventExplorerAlgorithmData.data.responseBody != undefined) {
            const responseData = authStat_EventExplorerAlgorithmData.data.responseBody[0]
            const newObject = [...eventExplorerAlgorithmJson]
            newObject[0].checked = responseData.mileage_from_primary_location
            newObject[1].checked = responseData.number_of_friends_attending
            newObject[2].checked = responseData.common_interest_with_event_interests
            newObject[3].checked = responseData.has_video
            newObject[4].checked = responseData.has_picture
            newObject[5].checked = responseData.sponsored_event
            newObject[6].checked = responseData.time_until_event
            newObject[7].checked = responseData.no_reports
            newObject[8].checked = responseData.hint_social_events
            newObject[9].checked = responseData.live_event
            newObject[10].checked = responseData.number_of_members_attending
            newObject[11].checked = responseData.attend_event_by_sponsor_in_past
            setEventExplorerAlgorithmJson(newObject)
            setLoader(false)
        }
        else {
            setLoader(true)
        }
    }, [authStat_EventExplorerAlgorithmData.data])


    const handleUpdate = () => {
        setLoader(true)
        const newObject = [...eventExplorerAlgorithmJson]
        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId"),
            event_algorithm_id: "1",
            neighborhood_city_state: "0",
            third_part_link: "0",
            multiple_dates: "0",
            video_uploads: "0",

            mileage_from_primary_location: newObject[0].checked,
            mileage_from_primary_location_order: "1",

            number_of_friends_attending: newObject[1].checked,
            number_of_friends_attending_order: "2",

            common_interest_with_event_interests: newObject[2].checked,
            common_interest_with_event_interests_order: "3",

            has_video: newObject[3].checked,
            has_video_order: "4",

            has_picture: newObject[4].checked,
            has_picture_order: "5",

            sponsored_event: newObject[5].checked,
            sponsored_event_order: "6",

            time_until_event: newObject[6].checked,
            time_until_event_order: "7",

            no_reports: newObject[7].checked,
            no_reports_order: "8",

            hint_social_events: newObject[8].checked,
            hint_social_events_order: "9",

            live_event: newObject[9].checked,
            live_event_order: "10",

            number_of_members_attending: newObject[10].checked,
            number_of_members_attending_order: "11",

            attend_event_by_sponsor_in_past: newObject[11].checked,
            attend_event_by_sponsor_in_past_order: "12",

            existing_users_miles_or_fewer_from_primary_location: "0",
            is_existing_users_miles_or_fewer_from_primary_location: "0",
            existing_users_friends_attending: "0",
            is_existing_users_friends_attending: "0",
            existsing_users_interest_matching_event_interest: "0",
            is_existsing_users_interest_matching_event_interest: "0",
            existing_users_members_attending_or_requested_to_attend: "0",
            is_existing_users_members_attending_or_requested_to_attend: "0",
            new_users_miles_or_fewer_from_primary_location: "0",
            is_new_users_miles_or_fewer_from_primary_location: "0",
            new_users_friends_attending: "0",
            is_new_users_friends_attending: "0",
            new_users_interest_matching_event_interests: "0",
            is_new_users_interest_matching_event_interests: "0",
            new_users_members_attending_or_requested_to_attend: "0",
            is_new_users_members_attending_or_requested_to_attend: "0"
        }

        dispatch(updateEventExplorerAlgorithmData_APIcall(payload))
    }


    useEffect(() => {
        if (authStat_EventExplorerAlgorithmData.updatedata.responseBody != undefined && authStat_EventExplorerAlgorithmData.updatedata.responseCode == 200) {
            setLoader(false)
            handleClose()
        }
        else {
            setLoader(false)
        }

    }, [authStat_EventExplorerAlgorithmData.updatedata])




    return (
        <>
            <span onClick={() => dialogOpen()}>Control Event Settings</span>
            {/* <Button onClick={() => setShow(true)}>Manage Interest Tags</Button> */}
            <div className='sizinggg'>
                <Modal
                    show={show} onHide={() => setShow(false)}
                // aria-labelledby="example-modal-sizes-title"
                >
                    <Modal.Body>

                        <div style={{ display: loader !== false ? '' : 'none' }}>
                            <div className='enable-loader1'>
                                <img src={loadingSpin} width="80px" height="80px"></img>
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='px-0'>
                                <form>
                                    <div className='mb-3'>
                                        <span className='font-controls'>Control Event Settings</span>
                                    </div>

                                    {/* ****** PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint ****** */}

                                    {/* <div className='mb-1'>
                                        <span className='font-creation'>Event Creation Settings</span>
                                    </div>
                                    <div className='mb-50'>
                                        <span className='font-shows'>Show Neighborhood, City, and State in Event Preview</span>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-between'>
                                        <div>
                                            <span className='font-defaults'>Default is to show Neighborhood and City</span>
                                        </div>

                                        <div onClick={changeShow}>
                                            {showLess ? <div><span className='font-offs'>OFF</span>&nbsp; <img src={offf} width="48px" height="26px"></img></div> : <div><span className='font-offs'>ON</span>&nbsp;&nbsp;<img src={ontoggle} width="48px" height="26px"></img></div>}
                                        </div>
                                    </div>
                                    <hr className="mb-2" style={{ color: '#CCD8DB' }}></hr>

                                    <div className=' mb-1 d-flex justify-content-between align-items-between'>
                                        <div>
                                            <span className='font-allows'>Allow third-party links</span>
                                        </div>

                                        <div onClick={changeShow1}>
                                            {showLess1 ? <div><span className='font-offs'>OFF</span>&nbsp; <img src={offf} width="48px" height="26px"></img></div> : <div><span className='font-offs'>ON</span>&nbsp;&nbsp;<img src={ontoggle} width="48px" height="26px"></img></div>}
                                        </div>
                                    </div>

                                    <hr className="mb-2" style={{ color: '#CCD8DB' }}></hr>

                                    <div className=' mb-1 d-flex justify-content-between align-items-between'>
                                        <div>
                                            <span className='font-allows'>Allow multiple dates</span>
                                        </div>

                                        <div onClick={changeShow2}>
                                            {showLess2 ? <div><span className='font-offs'>OFF</span>&nbsp; <img src={offf} width="48px" height="26px"></img></div> : <div><span className='font-offs'>ON</span>&nbsp;&nbsp;<img src={ontoggle} width="48px" height="26px"></img></div>}
                                        </div>
                                    </div>

                                    <hr className="mb-2" style={{ color: '#CCD8DB' }}></hr>

                                    <div className=' mb-1 d-flex justify-content-between align-items-between'>
                                        <div>
                                            <span className='font-allows'>Allow video uploads</span>
                                        </div>

                                        <div onClick={changeShow3}>
                                            {showLess3 ? <div><span className='font-offs'>YES</span>&nbsp; <img src={ontoggle} width="48px" height="26px"></img></div> : <div><span className='font-offs'>NO</span>&nbsp;&nbsp;<img src={offf} width="48px" height="26px"></img></div>}
                                        </div>
                                    </div>
                                    <hr className="mb-2" style={{ color: '#CCD8DB' }}></hr> */}

                                    <div className='mb-2'>
                                        <span className='font-explporers1'>Event Explorer Algorithm</span>
                                    </div>

                                    <div className='mb-25'>
                                        <span className='font-explporers11'>Prioritize these types of events in event explorer in this specific order:</span>
                                    </div>
                                    {/* <Draggable> */}
                                        {eventExplorerAlgorithmJson.map((items, index) => {
                                            return(
                                                <>
                                                    <div key={index} >
                                                        <div className='row py-1 d-flex align-items-center justify-content-center'>
                                                            {/* <div className='col-12'> */}
                                                            <div className='col-2' style={{ padding: '0px', display: 'flex', justifyContent: 'end' }}>
                                                                {/* {index == 0 || index == 1 || index == 5 || index == 8 ?
                                                    <img src={items.img} className="mb-25" width="30px" height="30px" ></img> : ""}&nbsp;&nbsp; */}
                                                                {items.checked == true ? <img src={Rearranging} className="mb-25" width="30px" height="30px" /> : null}
                                                                <span className=' font-numbers mt-25'>{items.number}</span>&nbsp;&nbsp;
                                                                <img onClick={() => { handleControlEvent(index) }} src={items.checked ? checktickboxes : checkblankboxes} width="25px" height="25px"></img>
                                                            </div>

                                                            <div className='col-10' >
                                                                <span className='font-primarys mt-0'>{items.name}</span><br></br>
                                                                <span className='font-closers' style={{ padding: '0px' }}>{items.name2}</span>
                                                            </div>

                                                            {/* </div> */}
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }

                                        )}
                                    {/* </Draggable> */}
                                    {/* ****** PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint ****** */}

                                    {/* <hr style={{ color: '#CCD8DB' }}></hr> */}

                                    {/* <div className='mb-2'>
                                        <span className='font-hints'>Hint Recommended Events Algorithm</span>
                                    </div>
                                    <div className='mb-1'>
                                        <span className='font-requires'>Requirements for Hint Recommended events for existing users:</span>
                                    </div>

                                    <div className='heloooo12'>
                                        <div className="row">
                                            {manageuser2.map((items, index) => <div key={index} className="col-6">


                                                <div className='mb-2 d-flex align-items-center' >

                                                    <img onClick={() => { handlechange2(index) }} src={items.checking ? checkblankboxes : checktickboxes} width="25px" height="25px"></img>&nbsp;&nbsp;&nbsp;
                                                    <input type="text" className={`formControl`} style={{ width: "55px", height: "36px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>&nbsp;&nbsp;&nbsp;
                                                    <span className='fonting-stylesss col-7'>{items.name}  </span><br></br>
                                                </div>
                                            </div>)}
                                        </div>
                                        <div className='mb-1'>
                                            <span className='font-requires'>Requirements for Hint Recommended events for new users:</span>
                                        </div>

                                        <div className="row">
                                            {manageuser1.map((items, index) => <div key={index} className="col-6">
                                                <div className='mb-2 d-flex align-items-center' >
                                                    <img onClick={() => { handlechange1(index) }} src={items.checking ? checkblankboxes : checktickboxes} width="25px" height="25px"></img>&nbsp;&nbsp;&nbsp;
                                                    <input type="text" className={`formControl`} style={{ width: "55px", height: "36px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>&nbsp;&nbsp;&nbsp;
                                                    <span className='fonting-style col-7'>{items.name}  </span><br></br>
                                                </div>
                                            </div>)}
                                        </div>
                                    </div> */}
                                    <div className='col-12 d-flex justify-content-center align-items-center mt-2 mb-1'>
                                        <button className='btnstyless' type="button" onClick={handleClose}>Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button className='btnstyledetailss' type="button" onClick={handleUpdate}>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* <hr />
                        <div className="row">
                            <div className="col-12">
                                <Draggable>
                                    {eventExplorerAlgorithmJson.map((data, idx) => {
                                        return (
                                            <div key={idx} className="row">
                                                <span>{data.name}</span>
                                            </div>
                                        )
                                    })}
                                </Draggable>
                            </div>
                        </div> */}

                        {/* <RowOrdringGrid></RowOrdringGrid> */}
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        eventExplorerAlgorithmData: state.eventExplorerAlgorithmData
    }
}

export default connect(mapStateToProps, [])(ControlEventsSettings)