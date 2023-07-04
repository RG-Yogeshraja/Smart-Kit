import profile from '../assets/images/dashboardimg/userprofiles.png'
import dot from '../assets/images/dashboardimg/Ellipse11.png'
import socialapple from '../assets/images/dashboardimg/social-apple.png'
import socialfacebook from '../assets/images/dashboardimg/social-facebook.png'
import socialgoogle from '../assets/images/dashboardimg/social-google.png'
import location from '../assets/images/dashboardimg/location.png'
import morehorizontal from '../assets/images/dashboardimg/morehorizontal.png'
import '../@core/scss/base/adminDashboard/usersmenu.scss'
import "../@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import CodeRegistrationDialog from './coderegistrationdialog'
import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Loaders from '../enableloader'
import loading from '../assets/images/dashboardimg/loadersimg.gif'
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
import "../@core/scss/base/adminDashboard/analyticsmenu/analytics.scss"
import UsersFriendsTab from './tabs/usersfriendstab'
import UsersGroupsTab from './tabs/usersgroupstab'
import UsersEventsTab from './tabs/userseventstab'
import UsersPostsTab from './tabs/userspoststab'
import UsersBlocksTab from './tabs/usersblockstab'
import UsersReportsTab from './tabs/usersreportstab'
import search from '../assets/images/dashboardimg/searchbar.png'
import defaultuserprofilepicture from '../assets/images/dashboardimg/defaultuserprofilepicture.png'
import { getUsersLists_APIcall } from './slice-adminusers/slice-userslist-details'
import { getUsersFriendsLists_APIcall } from './slice-adminusers/splice-userfriendslist'
import { getUsersGroupsList_APIcall } from './slice-adminusers/slice-usergroupslist'
import { getUsersEventsList_APIcall } from './slice-adminusers/slice-usereventslist'
import { getUsersPostsList_APIcall } from './slice-adminusers/slice-userpostslist'
import { GetUsersBlockList_APIcall } from './slice-adminusers/slice-userblocklist'
import { useLocation } from "react-router-dom"
import moment from 'moment'
import { individualUserRegCode_APIcall } from '../adminusers/slice-adminusers/slice-individualuserCodeReg'


const UserMainMenu = (props) => {
    const [active, setActive] = useState("1")
    const [searchValue, setSearchValue] = useState("")
    const dispatch = useDispatch()
    const location = useLocation()
    const [userListVal, setUsersListVal] = useState([])
    const [userListIndex, setindex] = useState("")
    const [defaulttab, setdefault] = useState(false)
    const [loader, setLoader] = useState(false)
    const [userNavigation, setUserNavigation] = useState(false)
    const [usersListSuccess, setUsersListSuccess] = useState(false)
    const [selectedUserId, setSelectedUserId] = useState('')
    const [getival, setival] = useState('')
    const [selectedUsername, setSelectedUsername] = useState('')
    const [userFriendsCount, setUserFriendsCount] = useState('')
    const [userGroupsCount, setUserGroupsCount] = useState('')
    const [userPostsCount, setUserPostsCount] = useState('')
    const [userEventsCount, setUserEventsCount] = useState('')
    const [individualUserCodeRegData, setIndividualUserCodeRegData] = useState([])
    const authStat_getUsersList = useSelector((state) => state.getUsersListsData)
    const authStat_getUsersFriends = useSelector((state) => state.getUsersFriendsListsData)
    const authStat_getUsersGroups = useSelector((state) => state.getUsersGroupsData)
    const authStat_getUsersEvents = useSelector((state) => state.getUsersEventsData)
    const authStat_getUsersPosts = useSelector((state) => state.getUsersPostsData)
    const authStat_individualUserCodeReg = useSelector((state) => state.individualUserRegCodeData)



    const toggle = (tab, userId) => {

        if (active !== tab) {
            setActive(tab)
        }
        const payload = {
            user_id: userId
        }
        if (tab === "2") {

            dispatch(getUsersGroupsList_APIcall(payload))
        }
        if (tab === "3") {
            dispatch(getUsersEventsList_APIcall(payload))
        }
        if (tab === "4") {

            dispatch(getUsersPostsList_APIcall(payload))
        }
    }

    const creationDate = (data) => {
        const localDateTimeConversion = new Date(data)
        const monthValue = moment(localDateTimeConversion).format('MMM')
        const dateValue = moment(localDateTimeConversion).format('DD')
        const yearValue = moment(localDateTimeConversion).format('YYYY')
        return (<span>{`${monthValue} ${dateValue}, ${yearValue}`}</span>)
    }

    //1st when page load
    useEffect(() => {
        setLoader(true)
        const loggedIn_userID = localStorage.getItem("loggedIn_userId")
        const payload = {
            user_id: loggedIn_userID
        }
        dispatch(getUsersLists_APIcall(payload))
    }, [])

    //2 check this screen is direct or navite from analytics
    useEffect(() => {
        setLoader(true)
        setUserNavigation(true)
    }, [location.state])

    //3 store the result afte getting response from get all users list api call
    useEffect(() => {


        if (authStat_getUsersList.usersListsData.responseCode === 200) {
            console.log('1111111', authStat_getUsersList.usersListsData.responseBody)
            const responseData = [...authStat_getUsersList.usersListsData.responseBody]
            const filterName = responseData.filter(data => data.User_details.email_address !== null || data.User_details.email_address !== undefined)
            const sortByName = filterName.sort((a, b) => a.User_details.full_name?.localeCompare(b.User_details.full_name))
            setUsersListVal(sortByName)

            if (sortByName !== undefined && sortByName !== null && location.state === null) {
                props.getvalue(sortByName[0])
                setSelectedUsername(sortByName[0].User_details.full_name)
                const payload = {
                    user_id: sortByName[0].User_details.user_id
                }
                dispatch(getUsersFriendsLists_APIcall(payload))
                dispatch(getUsersGroupsList_APIcall(payload))
                dispatch(getUsersEventsList_APIcall(payload))
                dispatch(getUsersPostsList_APIcall(payload))
                setindex(0)
                location.state = null
                setLoader(false)
            }

            if (sortByName != undefined && sortByName != null && location.state != null) {
                const accessData_userId = location.state.userId
                const accessData_userName = location.state.userName
                // const findindex = sortByName.findIndex(item => item.User_details.user_id == accessData_userId)
                const newUserData = [...sortByName]
                const filterArray = newUserData.filter(item => item.User_details.user_id != accessData_userId)
                const filterArrayforCodeReg = newUserData.filter(item => item.User_details.user_id == accessData_userId)
                const consolidateArray = [...filterArrayforCodeReg, ...filterArray]
                setUsersListVal(consolidateArray)
                // location.state = null

                userDetails(consolidateArray[0], consolidateArray[0].User_details.user_id, consolidateArray[0].User_details.full_name, 0)
            }
            setLoader(true)
        } else if (authStat_getUsersList.usersListsData.responseCode === 201) {
            setUsersListVal([])
            setLoader(false)
        }
    }, [authStat_getUsersList.usersListsData])

    useEffect(() => {
        // setLoader(true)
    }, [userListVal])

    useEffect(() => {
        if (authStat_individualUserCodeReg.data.responseBody !== undefined && authStat_individualUserCodeReg.data.responseCode == 200) {
            const responseData = [...authStat_individualUserCodeReg.data.responseBody]
            const sortDataAtoZ = responseData.sort((a, b) => a.full_name?.localeCompare(b.full_name))
            setIndividualUserCodeRegData(sortDataAtoZ)
            setLoader(false)
        }
        else {
            setLoader(true)
            setIndividualUserCodeRegData([])
        }
    }, [authStat_individualUserCodeReg.data])

    const userDetails = (item, userId, fullName, i) => {
        console.log(i)
        setindex()
        setLoader(true)
        props.getvalue(item)
        setUserNavigation(false)
        {
            const payload = {
                user_id: userId
            }
            const invitepayload = {
                user_id: userId,
                admin_id: localStorage.getItem('loggedIn_userId')
            }
            setUsersListSuccess(false)
            dispatch(individualUserRegCode_APIcall(invitepayload))
            dispatch(getUsersFriendsLists_APIcall(payload))
            dispatch(getUsersGroupsList_APIcall(payload))
            dispatch(getUsersEventsList_APIcall(payload))
            dispatch(getUsersPostsList_APIcall(payload))
            setdefault(true)
            setTimeout(() => {
                setSelectedUserId(userId)
                setSelectedUsername(fullName)
                setindex(i)
            }, 1000);

            if (authStat_getUsersFriends.data.responseCode == 200 &&
                authStat_getUsersGroups.data.responseCode == 200 &&
                authStat_getUsersEvents.data.responseCode == 200 &&
                authStat_getUsersPosts.data.responseCode == 200) {




            }
        }
    }

    //get the users friends list if any update in the friends list 
    useEffect(() => {
        if (authStat_getUsersFriends.data.responseBody != undefined && authStat_getUsersFriends.data.responseCode == 200) {
            setTimeout(() => {

                setLoader(false)
                setUserFriendsCount((authStat_getUsersFriends.data.responseBody).length)

            }, 1000);
        }
    }, [authStat_getUsersFriends.data])

    //get the users groups list if any update in the groups list 
    useEffect(() => {
        if (authStat_getUsersGroups.data.responseBody != undefined && authStat_getUsersGroups.data.responseCode == 200) {

            setTimeout(() => {
                setUserGroupsCount((authStat_getUsersGroups.data.responseBody).length)
            }, 1000)
        }
    }, [authStat_getUsersGroups.data])

    //get the users events list if any update in the event list 
    useEffect(() => {
        if (authStat_getUsersEvents.data.responseBody != undefined && authStat_getUsersEvents.data.responseCode == 200) {
            setTimeout(() => {
                setUserEventsCount((authStat_getUsersEvents.data.responseBody).length)
            }, 1000)
        }
    }, [authStat_getUsersEvents.data])

    //get the users posts list if any update in the posts list 
    useEffect(() => {
        if (authStat_getUsersPosts.data.responseBody != undefined && authStat_getUsersPosts.data.responseCode == 200) {
            setTimeout(() => {
                setUserPostsCount((authStat_getUsersPosts.data.responseBody).length)
            }, 1000)
        }
    }, [authStat_getUsersPosts])


    return (
        <>
            <div>
                <div style={{ display: loader !== false ? '' : 'none' }}>
                    <div className='enable-loader1'>
                        <img src={loading} width="80px" height="80px"></img>
                    </div>
                </div>

                {/* {userListVal?.map((item, index) => {
                    return ( */}
                {userListVal?.filter(item => item.User_details.full_name?.match(new RegExp(props.searchValue, "i"))).map((item, index) => {
                    return (
                        <>
                            <div className="card p-1 flex-column cards users-mainsection" style={{ border: index === userListIndex ? '1px solid #95E1BF' : 'none' }}>
                                <div onClick={() => userDetails(item, item.User_details.user_id, item.User_details.full_name, index)}>
                                    <div className="d-flex col-12 mb-1">
                                        <div className='col-1'>
                                            {item.user_profile_picture[0] == null ? <img src={defaultuserprofilepicture} width="60px" height="60px" style={{ borderRadius: "15px" }}></img> : null
                                            }
                                            {item.user_profile_picture.map((data, index) => {
                                                return (
                                                    <>
                                                        {data.image_url != "" ? <img src={data.image_url} width="60px" height="60px" style={{ borderRadius: "15px" }}></img> : null}
                                                    </>
                                                )
                                            })}
                                            {/* {item.user_profile_picture[0] === null ? <img src={defaultuserprofilepicture} width="60px" height="60px" style={{ borderRadius: "15px" }}></img> : null
                                            }
                                            {item.user_profile_picture.map((data, index) => {
                                                return (
                                                    <>
                                                        {data.image_url !== "" ? <img src={data.image_url} width="60px" height="60px" style={{ borderRadius: "15px" }}></img> : null}
                                                    </>
                                                )
                                            })}
                                            {item.user_profile_picture === undefined ? <img src={profile} width="60px" height="60px"></img> : null} */}
                                        </div> &nbsp;&nbsp;&nbsp;
                                        <div className='col-11'>
                                            <div className='d-flex justify-content-between align-items-between px-1'>
                                                <div className='d-flex align-items-center'>
                                                    <span className='spanprofile1 pe-50'>{item.User_details.full_name}</span>
                                                    {/* <span className=' pe-50'>{item.User_details.user_id}</span> */}
                                                </div>
                                                <div>
                                                    <CodeRegistrationDialog name={item.User_details.full_name} inviteCount={item.code_registration} inviteDetails={individualUserCodeRegData}></CodeRegistrationDialog>
                                                    {/* alert(JSON.stringify(item.addition_info[0])) */}
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-start align-items-start flex-column ps-1'>
                                                <div className='d-flex align-items-center'>
                                                    <span className='spanlight1' style={{ cursor: "pointer" }}>{item.User_details.email_address}</span> &nbsp;&nbsp;
                                                    <img src={dot} width="5px" height="5px"></img>&nbsp;&nbsp;
                                                    <span className='spansemilight1' style={{ cursor: "pointer" }}>{item.User_details.mobile_number}</span>
                                                </div>
                                                <div className='d-flex align-items-center pt-25'>
                                                    {/* <img src={location} width="16px" height="16px" /> */}
                                                    {/* <span className='spanlight1'>{item.User_details.location}</span> */}

                                                    {item.addition_info[0].current_location != ''?
                                                    <span className='spanlight1'>{item.addition_info[0].current_location}</span>:
                                                    <span className='spanlight1'>{item.User_details.location}</span>
                                                    }
                                                </div>
                                                <div className='d-flex align-items-center pt-25'>
                                                    <span className='spanlight1'>Account Creation Date: {creationDate(item.User_details.date_created)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='d-flex justify-content-start align-items-between'>
                                            <div>
                                                <span className='connect-fontt pe-1 me-25'>Connected to</span>
                                                {item.User_details.user_login_mode === "2" ? <img className='me-1' src={socialapple} style={{ cursor: "pointer" }} width="44px" height="44px"></img> : null}
                                                {item.User_details.user_login_mode === "3" ? <img className='me-1' src={socialfacebook} style={{ cursor: "pointer" }} width="44px" height="44px"></img> : null}
                                                {item.User_details.user_login_mode === "4" ? <img src={socialgoogle} style={{ cursor: "pointer" }} width="44px" height="44px"></img> : null}
                                            </div>
                                            {/* <div>
                                                <button style={{ cursor: "pointer" }} className='btn_greenss1 d-flex flex-row justify-content-center align-items-center'>
                                                    <span className='texts_colorss1 text-center'>
                                                        Trigger Password Reset
                                                    </span>
                                                </button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                {/* tabs section start */}
                                {/* <UserMainMenuTabs handleclick={clickval} noclick={otherclick} data={data1}></UserMainMenuTabs> */}
                                {index == userListIndex ?
                                    <div className='col-12'>

                                        <React.Fragment>
                                            {/* <div className='col-12 mt-1  ' style={{ display: active === '4' ? 'none' : '' }}> */}
                                            <div className='col-12 mt-1'>
                                                <div className='d-flex align-items-center border_size '>
                                                    <img className='search ms-1' src={search} width="20px" height="20px"></img>
                                                    <input className='w-100 height-range ms-1 text_search ' placeholder='Search by name' value={searchValue}
                                                        onChange={e => setSearchValue(e.target.value)}></input>
                                                </div>
                                            </div>
                                            <hr />
                                            <Nav
                                                tabs
                                                style={{
                                                    borderBottom: "1px solid #BFBFBF",
                                                    borderLeft: "none",
                                                    borderRight: "none",
                                                    borderTop: "none",
                                                    borderRadius: "0px",
                                                    width: "100%"
                                                }}>


                                                <NavItem className="col-3">
                                                    <NavLink className="tabheading-active1 " active={active === "1"} onClick={() => { toggle("1", item.User_details.user_id) }}>
                                                        Friends&nbsp;<span>(</span>{userFriendsCount}<span>)</span>
                                                    </NavLink>
                                                </NavItem>

                                                <NavItem className="col-3" >
                                                    <NavLink className="tabheading-active1" active={active === "2"} onClick={() => { toggle("2", item.User_details.user_id) }}>
                                                        Groups&nbsp;<span>({userGroupsCount})</span>
                                                    </NavLink>
                                                </NavItem>

                                                <NavItem className="col-3">
                                                    <NavLink className="tabheading-active1" active={active === "3"} onClick={() => { toggle("3", item.User_details.user_id) }}>
                                                        Events&nbsp;<span>(</span>{userEventsCount}<span>)</span>
                                                    </NavLink>
                                                </NavItem>

                                                <NavItem className="col-3" >
                                                    <NavLink className="tabheading-active1" active={active === "4"} onClick={() => { toggle("4", item.User_details.user_id) }}>
                                                        Posts&nbsp;<span>(</span>{userPostsCount}<span>)</span>
                                                    </NavLink>
                                                </NavItem>

                                                {/* DON'T DELETE- Commented due to no need of this in Sprint-1 */}
                                                {/* <NavItem className="col-2" style={{ borderRadius: "30px" }}>
                                                    <NavLink className="tabheading-active1" active={active === "5"} onClick={() => { toggle("5", item.User_details.user_id) }}>
                                                        Blocks&nbsp;<span>(</span>{item.block_count}<span>)</span>
                                                    </NavLink>
                                                </NavItem> */}

                                                {/* <NavItem className="col-2" style={{ borderRadius: "30px" }}>
                                                <NavLink className="tabheading-active1" active={active === "6"} onClick={() => { toggle("6", item.User_details.user_id) }}>
                                                    Reports&nbsp;(0)
                                                </NavLink>
                                            </NavItem> */}
                                            </Nav>

                                            <TabContent className="mb-2" activeTab={active}>
                                                <TabPane tabId="1">
                                                    <UsersFriendsTab data={searchValue} userid={selectedUserId} username={selectedUsername}></UsersFriendsTab>
                                                </TabPane>
                                                <TabPane tabId="2">
                                                    <UsersGroupsTab data={searchValue} userid={item.User_details.user_id} username={selectedUsername}></UsersGroupsTab>
                                                </TabPane>
                                                <TabPane tabId="3">
                                                    <UsersEventsTab data={searchValue} userid={selectedUserId} username={selectedUsername}></UsersEventsTab>
                                                </TabPane>
                                                <TabPane tabId="4">
                                                    <UsersPostsTab data={searchValue} userid={selectedUserId} username={selectedUsername}></UsersPostsTab>
                                                </TabPane>
                                                {/* <TabPane tabId="5">
                                                    <UsersBlocksTab data={searchValue} userid={selectedUserId}></UsersBlocksTab>
                                                </TabPane> */}
                                                {/* <TabPane tabId="6">
                                                <UsersReportsTab data={searchValue}></UsersReportsTab>
                                            </TabPane> */}
                                            </TabContent>
                                        </React.Fragment>
                                    </div> : ''}
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        getUsersListsData: state.adminLoginData,
        getUsersFriendsListsData: state.getUsersFriendsListsData,
        getUsersGroupsData: state.getUsersGroupsData,
        getUsersEventsData: state.getUsersEventsData,
        getUsersPostsData: state.getUsersPostsData,
        individualUserRegCodeData: state.individualUserRegCodeData

    }
}

export default connect(mapStateToProps, {})(UserMainMenu)