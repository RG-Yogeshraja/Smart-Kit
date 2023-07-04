import React, { useState, useEffect } from "react"
import reportsbyuser1 from '../../assets/images/dashboardimg/reportsbyuser1.png'
import blockedbyuser1 from '../../assets/images/dashboardimg/blockedbyuser1.png'
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import usersgroup1 from '../../assets/images/dashboardimg/usersgroup1.png'
import usersgroup2 from '../../assets/images/dashboardimg/usersgroup2.png'
import usersgroup1_sideimg from '../../assets/images/dashboardimg/usergroup1-sideimg.png'
import usersgroup2_sideimg from '../../assets/images/dashboardimg/usergroup2-sideimg.png'
import verticalmore2 from '../../assets/images/dashboardimg/verticalmore2.png'
import closeblock from '../../assets/images/dashboardimg/closeblock.png'
import deleteitem from '../../assets/images/dashboardimg/deleteitem.png'
import Removing from './userfriendremove'
import Dropdown from 'react-bootstrap/Dropdown'
import { connect, useDispatch, useSelector } from "react-redux"
import { removeUsersGroup_APIcall } from "../slice-adminusers/slice-removeusersgroup"
import { getUsersGroupsList_APIcall } from "../slice-adminusers/slice-usergroupslist"
import loading from '../../assets/images/dashboardimg/loadersimg.gif'
import blankimages from '../../assets/images/dashboardimg/blank-image.png'
import twousers from '../../assets/images/dashboardimg/twousersgroup.png'

const UsersGroupsTab = (props) => {
console.log(props,"gggg")
    const authStat_getUsersGroups = useSelector((state) => state.getUsersGroupsData)
    const authStat_removeUsersGroup = useSelector((state) => state.removeUsersGroupData)
    const [usersGroupsList, setUsersGroupsList] = useState([])
    const [loader, setLoader] = useState(false)
    const [friendsname, setfriendsname] = useState('')
    const dispatch = useDispatch()
    const [usersGroupsListt] = useState([
        { id: '1', groupName: "Fitness  Crew", sideimg: usersgroup1_sideimg, membersCount: "42", imageName: usersgroup1, isAdmin: "Admin", membersCountColor: "#003B4A", itembg_color: "#e4f7ef", groupNameColor: "#003B4A" },
        { id: '2', groupName: "Dog Lovers", sideimg: usersgroup2_sideimg, membersCount: "32", imageName: usersgroup2, isAdmin: "Admin", membersCountColor: "#FFFFFF", itembg_color: "#156579", groupNameColor: "#FFFFFF" }
    ])


    //1 store the result after get response from get all user groups
    useEffect(() => {
        //
        
        setLoader(true)
        if (authStat_getUsersGroups.data.responseBody != undefined && authStat_getUsersGroups.data.responseCode == 200) {
            
            const responseData = [...authStat_getUsersGroups.data.responseBody]
            const sortingArray = responseData.sort((a, b) => a.group_name.localeCompare(b.group_name))
            if (sortingArray.length !== 0) {
                setUsersGroupsList(sortingArray)
              
            } else {
                setfriendsname(props.username)
                setUsersGroupsList([])
            }
            setLoader(false)
        } else {
            setfriendsname(props.username)
            setLoader(false)
        }
    }, [authStat_getUsersGroups.data])

    //2 remove group api call
    const removeGroupcall = (data) => {
       
        setLoader(true)
        const payload = {
            user_id:props.userid,
            admin_id: localStorage.getItem("loggedIn_userId"),
            group_id: data.group_id
        }
        dispatch(removeUsersGroup_APIcall(payload))
        console.log(payload,"bbbb")
    }

    //3 after remove the group, get all user group list api call to reload the list
    useEffect(() => {
      
        console.log(props.userid,"aaaa")
        if (authStat_removeUsersGroup.data.responseBody != undefined && authStat_removeUsersGroup.data.responseCode == 200) {
            setLoader(false)
            const payload = {
                user_id: props.userid
            }
            dispatch(getUsersGroupsList_APIcall(payload))
        }
        else if (authStat_removeUsersGroup.data.responseCode === 201) {
            
            console.log('remove group failed')
        }
    }, [authStat_removeUsersGroup.data])


    return (
        // <div className="usergroups-scrollbar" id="usergroups-style-2">
        //     <div className="row usergroups-force-overflow">
        <div>
            <div style={{ display: loader !== false ? '' : 'none' }}>
                <div className='enable-loader1'>
                    <img src={loading} width="80px" height="80px"></img>
                </div>
            </div>

            {
                <div className="row" style={{ minHeight: "217px" }}>
                    {usersGroupsList.length > 0 ?
                        <div className="row">
                            {usersGroupsList.filter(items => items.group_name.match(new RegExp(props.data, "i"))).map((data, index) => {
                                return (
                                    <>
                                        <div className='col-6'>
                                            <div className='row align-items-center pb-2 px-1'>
                                                <div className="col-10 userGroupSec">
                                                    <div className="row p-0">
                                                        <div className='col-9 ps-75 pe-25'>
                                                            <div className="pt-50">
                                                                <span className='textspan9 userGroupName'>{data.group_name}</span>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <span className='textspan13 userGroupLength pe-50'>{data.group_member_length  !== null ? data.group_member_length : "0"} Members</span>
                                                                {data.user_member_status == "1" ? <span className="adminbtnspan1 d-flex align-items-center justify-content-center p-25">Admin</span> : <span className="adminbtnspan1 d-flex align-items-center justify-content-center p-25">Super Admin</span>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className='col-3 ps-25  pe-0 d-flex align-items-end'>
                                                            {data.image_url != "" ?
                                                                <img className="group-image" src={data.image_url} width="60px" height="60px" /> :
                                                                <>
                                                                <img className="group-image" src={blankimages} width="60px" height="60px" />
                                                                <img className="" src={twousers} width="35px" height="35px" style={{position:'absolute', marginLeft:"10px", marginBottom:'10px'}}/>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-2'>
                                                    {(index % 2) == 0 ? <Dropdown className="customDropdown custompositionw7" >
                                                            <Dropdown.Toggle>
                                                                <img src={verticalmore2} width="28px" height="28px" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="customDropdownmenu customDropdownmenup7" >
                                                                <Dropdown.Item href="#" className="ps-75 pt-25 pb-25 customDropdownitem d-flex align-items-center" onClick={() => removeGroupcall(data,data.userid)}>
                                                                    <img className="me-25" src={deleteitem} width="16px" height="16px"></img>
                                                                    <span className="textspanlight37">Remove User</span>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown> : <Dropdown className="customDropdown custompositionw7even">
                                                            <Dropdown.Toggle>
                                                                <img src={verticalmore2} width="28" height="28" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="customDropdownmenu customDropdownmenup7" >
                                                                <Dropdown.Item href="#" className="ps-75 pt-25 pb-25 customDropdownitem d-flex align-items-center" onClick={() => removeGroupcall(data,data.useri)}>
                                                                    <img className="me-25" src={deleteitem} width="16px" height="16px"></img>
                                                                    <span className="textspanlight37">Remove User</span>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div> :
                        <div className="row d-flex align-items-center">
                            <div className="col-12 d-flex flex-column align-items-center">
                                {/* noEventSection */}
                                {/* <div className="p-2"> */}
                                {/* <img className="noeventimg" src={calendardark} width="40px" height="41px" /> */}
                                {/* </div> */}
                                <span className="span-texting ">{friendsname} does not have any groups to display</span>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        getUsersGroupsData: state.getUsersGroupsData,
        removeUsersGroupData: state.removeUsersGroupData
    }
}
export default connect(mapStateToProps, {})(UsersGroupsTab)
