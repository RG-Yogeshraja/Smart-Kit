import React, { useState, useEffect } from "react"
import userfriend1 from '../../assets/images/dashboardimg/userfriend1.png'
import userfriend2 from '../../assets/images/dashboardimg/userfriend2.png'
import userfriend3 from '../../assets/images/dashboardimg/userfriend3.png'
import blockedbyuser1 from '../../assets/images/dashboardimg/blockedbyuser1.png'
import location from '../../assets/images/dashboardimg/location.png'
import verticalmore from '../../assets/images/dashboardimg/verticalmore.png'
import dot from '../../assets/images/dashboardimg/Ellipse11.png'
import birthdaycakefire from '../../assets/images/dashboardimg/birthdaycakefire.png'
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import closeblock from '../../assets/images/dashboardimg/closeblock.png'
import deleteitem from '../../assets/images/dashboardimg/deleteitem.png'
import Dropdown from 'react-bootstrap/Dropdown'
import { connect, useDispatch, useSelector } from "react-redux"
import { GetUsersBlockList_APIcall } from "../slice-adminusers/slice-userblocklist"




const BlockedByUser = (props) => {
    const [blockedByUserList] = useState([
        { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30" },
        { id: '2', name: "Giana Bergson", location: "Worcester", imageName: userfriend3, birthDate: "25" },
        { id: '3', name: "Alex Hardy", location: "Abington", imageName: userfriend2, birthDate: "34" },
        { id: '4', name: "Amy Delacruz", location: "Worcester", imageName: blockedbyuser1, birthDate: "25" },
    ])
    const dispatch = useDispatch()
    const authStat_getUsersBlockList = useSelector((state) => state.getUsersBlockListData)
    const [blockedByUser, setBlockedByUser] = useState([])
    const [userBlockedBy, setUserBlockedBy] = useState([])


    const removeItem = () => {
        // alert('removeItem')
    }
    const blockItem = () => {
        // alert('blockItem')
    }

    useEffect(() => {
        // 
        const payload = {
            user_id: localStorage.getItem("loggedIn_userId")
        }
        dispatch(GetUsersBlockList_APIcall(payload))
    }, [])

    useEffect(() => {
        // 
        if (authStat_getUsersBlockList.data.responseBody != undefined && authStat_getUsersBlockList.data.responseCode == 200) {
            setBlockedByUser(authStat_getUsersBlockList.data.responseBody.blocked_by_user)
            setUserBlockedBy(authStat_getUsersBlockList.data.responseBody.user_blocked_by)
            console.log(blockedByUser)
            console.log(userBlockedBy)
        }
        else if (authStat_getUsersBlockList.data.responseBody != undefined && authStat_getUsersBlockList.data.responseCode == 201) {
            console.log('fail')
        }
    }, [authStat_getUsersBlockList.data])



    return (
        <div>
            {blockedByUserList.length > 0 ?
                <div className="row">
                    {blockedByUserList.filter(items => items.name.match(new RegExp(props.data, "i"))).map((data) => {
                        return (
                            <div className='col-6'>
                                <div className='row align-items-center pb-2'>
                                    <div className='col-2'>
                                        <img src={data.imageName} width="54px" height="54px" />
                                    </div>
                                    <div className='col-8 users-friendslist'>
                                        <div className='d-flex flex-column'>
                                            <span className='textspan1 userfriendname'>{data.name}</span>
                                            <div className='d-flex align-items-center biodatasection'>
                                                <img src={location} width="16px" height="16px"></img>&nbsp;
                                                <span className='textspanlight1 ms1'>{data.location}</span>
                                                <img className="ms1" src={dot} width="5px" height="5px"></img>
                                                <img className="ms1" src={birthdaycakefire} width="16px" height="16px"></img>
                                                <span className='textspanlight1 ms1'>{data.birthDate}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 userfriend-verticalmore d-flex justify-content-end">
                                        <span className="dropdown-section">

                                            {/* new one */}
                                            <Dropdown className="blockedbyusertab-dropdown">
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28px" height="28px" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="blockedbyusertab-dropdownmenu">
                                                    <Dropdown.Item href="#" className="blockedbyusertab-dropdownitem d-flex align-items-center">
                                                        <span>
                                                            <img className="blockedbyusertab-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="blockedbyusertab-dropdownitemName">Remove</span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#" className="blockedbyusertab-dropdownitem d-flex align-items-center pb-50 pt-25">
                                                        <span>
                                                            <img className="blockedbyusertab-dropdownitemIcon" src={closeblock} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="blockedbyusertab-dropdownitemName">Unblock</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div> :
                <div className="row">
                    <span className="d-flex justify-content-center align-items-center">No Blocked by User found</span>
                </div>}
        </div>
    )
}



const mapStateToProps = (state) => {
    console.log("map state to props**:", state)
    return {
        getUsersBlockListData: state.getUsersBlockListData,
    }
}
export default connect(mapStateToProps, {})(BlockedByUser)
