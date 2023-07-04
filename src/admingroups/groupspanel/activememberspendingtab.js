import React, { useState, useRef, useEffect } from "react"
import userfriend1 from '../../../src/assets/images/dashboardimg/userfriend1.png'
import userfriend2 from '../../../src/assets/images/dashboardimg/userfriend2.png'
import userfriend3 from '../../../src/assets/images/dashboardimg/userfriend3.png'
import userfriend4 from '../../../src/assets/images/dashboardimg/userfriend4.png'
import userfriend5 from '../../../src/assets/images/dashboardimg/userfriend5.png'
import userfriend6 from '../../../src/assets/images/dashboardimg/userfriend6.png'
import userfriend7 from '../../../src/assets/images/dashboardimg/userfriend7.png'
import reportflagicon from '../../../src/assets/images/dashboardimg/reportflagicon.png'
import location from '../../../src/assets/images/dashboardimg/location.png'
import verticalmore from '../../../src/assets/images/dashboardimg/verticalmore.png'
import dot from '../../assets/images/dashboardimg/Ellipse11.png'
import { accept_pendingGroups_APIcall } from '../acceptpendinggroupmembers-splice'
import birthdaycakefire from '../../../src/assets/images/dashboardimg/birthdaycakefire.png'
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import blockitem from '../../../src/assets/images/dashboardimg/closeblock.png'
import load from '../../../src/assets/images/dashboardimg/loadersimg.gif'
import { connect, useDispatch, useSelector } from 'react-redux'
import deleteitem from '../../../src/assets/images/dashboardimg/deleteitem.png'
import Dropdown from 'react-bootstrap/Dropdown'
import tickboxpending from '../../../src/assets/images/dashboardimg/tickbox-pending.png'
import closeitem1 from '../../../src/assets/images/dashboardimg/closeitem1.png'
import deletedpending from '../../../src/assets/images/dashboardimg/delete-pending.png'
import { getactivemember_APIcall } from './getmemberlistsplice'
import defaultuser from '../../../src/assets/images/dashboardimg/Group-2.png'
import { reject_pendingGroups_APIcall } from '../rejectgroup-splice'
const ActiveMembersPendingTab = (props) => {
    const [setpropsval, getpropsval] = useState(props.data2)
    const [usersFriendsList, getlist] = useState([])
    // const [show, setShow] = useState(false);
    const target = useRef(null)
    const dispatch = useDispatch()
    const getmembers = useSelector((state) => state.adminmemberInfo)
    const rejectval = useSelector((state) => state.rejectpendinggroupdata)
    const acceptmember = useSelector((state) => state.acceptpendinggroupdata)
    const [started, setstarted] = useState(true)
    const [setgroup, getgroup] = useState(true)
    const [data, setData] = useState(false)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const [checkAdminn, setCheckAdminnn] = useState("")
    useEffect(() => {

        getpropsval(props.data2)
    }, [props.data2])
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
            return <>{age_now}</>
        }

    }

    useEffect(() => {

        getlist([])
        setstarted(true)

        if (getmembers !== undefined) {

            const { addmembers } = getmembers
            console.log("data", addmembers)
            const { responseBody } = addmembers
            console.log("login responseBody", responseBody)
            console.log("auth respomse success")
            if (getmembers.addmembers.responseCode === 200) {


                const timeId = setTimeout(() => {
                    setstarted(false)
                }, 1000)

                console.log(responseBody)
                const val = [...responseBody]
                const set = val.filter(data => data.is_pending === 1)
                getlist(set)


            } else if (getmembers.addmembers.responseCode === 201) {

                setstarted(false)
                console.log(responseBody)
            }
        }
        console.log(getmembers.addmembers.responseCode)
    }, [getmembers])
    const reject = (userid, groupid) => {

        console.log(userid, groupid)
        const payload = {
            admin_id: localStorage.getItem('loggedIn_userId'),
            group_id: groupid,
            user_id: userid
        }
        getgroup(groupid)
        dispatch(reject_pendingGroups_APIcall(payload))
    }

    const accept = (userid, groupid) => {
        //
        getgroup(groupid)
        console.log(userid, groupid)
        const payload = {
            admin_id: localStorage.getItem('loggedIn_userId'),
            group_id: groupid,
            user_id: userid
        }
        dispatch(accept_pendingGroups_APIcall(payload))
    }
    useEffect(() => {
        if (rejectval !== undefined) {

            const { rejectpendinggroupvalue } = rejectval
            console.log("data", rejectpendinggroupvalue)
            const { responseBody } = rejectpendinggroupvalue
            console.log("login responseBody", responseBody)
            console.log("auth respomse success")
            if (rejectval.rejectpendinggroupvalue.responseCode === 200) {

                const payload = {
                    user_id: localStorage.getItem("loggedIn_userId"),
                    group_id: setgroup
                }
                dispatch(getactivemember_APIcall(payload))
                const timeId = setTimeout(() => {
                    setstarted(false)
                }, 1000)

            } else if (rejectval.rejectpendinggroupvalue.responseCode === 201) {

                setstarted(false)
                console.log(responseBody)
            }
        }
        console.log(rejectval.rejectpendinggroupvalue.responseCode)

    }, [rejectval.rejectpendinggroupvalue])
    useEffect(() => {
        if (acceptmember !== undefined) {

            const { acceptpendinggroupvalue } = acceptmember
            console.log("data", acceptpendinggroupvalue)
            const { responseBody } = acceptpendinggroupvalue
            console.log("login responseBody", responseBody)
            console.log("auth respomse success")
            if (acceptmember.acceptpendinggroupvalue.responseCode === 200) {

                const payload = {
                    user_id: localStorage.getItem("loggedIn_userId"),
                    group_id: setgroup
                }
                dispatch(getactivemember_APIcall(payload))
                const timeId = setTimeout(() => {
                    setstarted(false)
                }, 1000)

            } else if (acceptmember.acceptpendinggroupvalue.responseCode === 201) {

                setstarted(false)
                console.log(responseBody)
            }
        }
        console.log(acceptmember.acceptpendinggroupvalue.responseCode)

    }, [acceptmember.acceptpendinggroupvalue])
  
    return (
        <>

            <div className="groupactiveMembersscrollbar" id="groupactiveMembers-style">
                <div style={{ display: started !== false ? '' : 'none' }}>
                    <div className='enable-loader1'>

                        <img src={load} width="80px" height="80px"></img>
                    </div>
                </div>
                <div className="row groupactiveMembers-force-overflow">

                    {usersFriendsList?.filter(data => data.is_member === 0)?.map((data, index) => {
                        return (
                            <div className='col-6'>
                                <div className='row  pb-2'>
                                    <div className='col-2 d-flex align-items-center'>
                                        <img src={data.image_url !== '' ? data.image_url : defaultuser} style={{ borderRadius: "8px" }} width="54px" height="54px" />
                                    </div>
                                    <div className='col-8 groups-memberslist d-flex align-items-center'>
                                        <div className='d-flex flex-column '>
                                            <div className="d-flex flex-row align-items-center">

                                                <div className='d-flex flex-row '>
                                                    <div className="d-flex justify-content-between col-12">
                                                        <span className='textspan1 userfriendname ps-1 mt-50'>{data.full_name}</span>
                                                        <div className="d-flex justify-content-end align-items-center" >
                                                            <img src={deletedpending} width="35px" height="35px" style={{ display: setpropsval === "Edit" ? 'none' : '' }} onClick={() => reject(data.user_id, data.group_id)}></img>&nbsp;&nbsp;&nbsp;
                                                            <img src={tickboxpending} width="35px" height="35px" style={{ display: setpropsval === "Edit" ? 'none' : '' }} onClick={() => accept(data.user_id, data.group_id)}   ></img>
                                                        </div>
                                                    </div>
                                                    <span className="ps-1">{data.is_admin === 1 ? <button className="group-btnspan1 d-flex align-items-center justify-content-center">Admin</button> : null}</span>&nbsp;&nbsp;
                                                </div>
                                                {/* {checkAdminn == undefined ? <span>he is super admin</span> : null} */}
                                            </div>
                                            <div className=' biodatasection'>
                                                <img src={location} width="16px" height="16px"></img>
                                                <span className='textspanlight1'>{data.location}</span>
                                                <img className="ms-25" src={dot} width="5px" height="5px"></img>
                                                <img className="ms-25" src={birthdaycakefire} width="16px" height="16px"></img>
                                                <span className='textspanlight1 ms-25 mt-25'>{changebirth(data.birth_date)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-2 p-0 userfriend-verticalmore">
                                      
                                        {(index % 2) == 0 ? <Dropdown className="customDropdown custompositionw1" >
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="customDropdownmenu customDropdownmenup1">
                                                    <Dropdown.Item href="#" className="ps-50 pt-25 pb-50 customDropdownitem d-flex align-items-center">
                                                        <img className="me-25" src={reportflagicon} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Report</span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#" className="ps-50 py-25 customDropdownitem d-flex align-items-center">
                                                        <img className="me-25" src={blockitem} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Block</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown> : <Dropdown className="customDropdown custompositionw1even" >
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="customDropdownmenu customDropdownmenup1">
                                                    <Dropdown.Item href="#" className="ps-50 pt-25 pb-50 customDropdownitem d-flex align-items-center">
                                                        <img className="me-25" src={reportflagicon} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Report</span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#" className="ps-50 py-25 customDropdownitem d-flex align-items-center">
                                                        <img className="me-25" src={blockitem} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Block</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>}
                                    </div> */}
                                </div>
                            </div>
                        )
                    })}

                    <div className='justify-content-center mt-5' style={{ display: usersFriendsList?.length < 1 ? 'flex' : 'none' }}>
                        <div className="text-danger">No Data Found</div>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    console.log("*****", state)
    return {
        state
    }
}

export default connect(mapStateToProps, {})(ActiveMembersPendingTab)

