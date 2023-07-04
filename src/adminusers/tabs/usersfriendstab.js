import React, { useState, useEffect, useRef } from "react"
import userfriend1 from '../../assets/images/dashboardimg/userfriend1.png'
import userfriend2 from '../../assets/images/dashboardimg/userfriend2.png'
import userfriend3 from '../../assets/images/dashboardimg/userfriend3.png'
import userfriend4 from '../../assets/images/dashboardimg/userfriend4.png'
import userfriend5 from '../../assets/images/dashboardimg/userfriend5.png'
import userfriend6 from '../../assets/images/dashboardimg/userfriend6.png'
import location from '../../assets/images/dashboardimg/location.png'
import verticalmore from '../../assets/images/dashboardimg/verticalmore.png'
import dot from '../../assets/images/dashboardimg/Ellipse11.png'
import birthdaycakefire from '../../assets/images/dashboardimg/birthdaycakefire.png'
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import closeblock from '../../assets/images/dashboardimg/closeblock.png'
import deleteitem from '../../assets/images/dashboardimg/deleteitem.png'
import { NavItem, NavLink, UncontrolledButtonDropdown } from 'reactstrap'
import { connect, useDispatch, useSelector } from "react-redux"
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import { removeUsersFriend_APIcall } from "../slice-adminusers/slice-removefriend"
import { getUsersFriendsLists_APIcall } from "../slice-adminusers/splice-userfriendslist"
import '../../@core/scss/base/adminDashboard/custom_dropdownmenu.scss'
import defaultuserprofilepicture from '../../assets/images/dashboardimg/defaultuserprofilepicture.png'
import '../../@core/scss/base/adminDashboard/custom_scrollbar.css'


const rawData = [
    { id: 1, name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30" },
    { id: 2, name: "Haylie Gouse", location: "South End, Boston", imageName: userfriend4, birthDate: "30" },
    { id: 3, name: "Alex Hardy", location: "Abington", imageName: userfriend2, birthDate: "34" },
    { id: 4, name: "Skylar Curtis", location: "Abington", imageName: userfriend5, birthDate: "34" },
    { id: 5, name: "Giana Bergson", location: "Worcester", imageName: userfriend3, birthDate: "25" },
    { id: 6, name: "Jaydon Geidt", location: "Worcester", imageName: userfriend6, birthDate: "25" },
    { id: 7, name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30" },
    { id: 8, name: "Haylie Gouse", location: "South End, Boston", imageName: userfriend4, birthDate: "30" },
    { id: 9, name: "Alex Hardy", location: "Abington", imageName: userfriend2, birthDate: "34" },
    { id: 10, name: "Skylar Curtis", location: "Abington", imageName: userfriend5, birthDate: "34" },
    { id: 11, name: "Giana Bergson", location: "Worcester", imageName: userfriend3, birthDate: "25" },
    { id: 12, name: "Jaydon Geidt", location: "Worcester", imageName: userfriend6, birthDate: "25" },
    { id: 13, name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30" }
]

const UsersFriendsTab = (props) => {
    // console.log(props)

    const [array, usersFriendsList] = useState([rawData])
    const [friendsname,setfriendsname] = useState('')
    const [usersFriendsListt, setUsersFriendsList] = useState([])
    const [loader, setLoader] = useState(false)
    // const defaultOption = options[0]
    const [data, setData] = useState(false)
    const [show, setShow] = useState(false)
    const [popoverOpen, setPopoverOpen] = useState(false)
    const [showLess, setshowLess] = useState(true)
    const dispatch = useDispatch()
    const authStat_getUsersFriends = useSelector((state) => state.getUsersFriendsListsData)
    const authStat_removeUsersFriend = useSelector((state) => state.removeUsersFriendData)


    const changebirth = (val) => {
        if (val !== undefined) {
            const datas = val
            const today = new Date()
            const birthDate = new Date(datas.birth_date)
            let age_now = today.getFullYear() - birthDate.getFullYear()
            const m = today.getMonth() - birthDate.getMonth()
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age_now--
            }
            return <>{age_now}</>
        }
    }


    useEffect(() => {
        //
        // setstarted(true)
        
        if (authStat_getUsersFriends.data.responseBody !== undefined && authStat_getUsersFriends.data.responseCode === 200) {
            // setLoader(true)
          
                
         
         
            if (authStat_getUsersFriends.data.responseBody.length !== 0) {
            const responseData = [...authStat_getUsersFriends.data.responseBody]
            const sortingArray = responseData.sort((a, b) => a.full_name?.localeCompare(b.full_name))
            setUsersFriendsList(sortingArray)
        
        }
         else {
            setfriendsname(props.username)
            setUsersFriendsList([])
        }
    } else {
        setfriendsname(props.username)
            setUsersFriendsList([])
        }
  
    }, [authStat_getUsersFriends.data])


    const removeFriendcall = (data) => {
        setLoader(true)
        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId"),
            user_id: props.userid,
            friend_id: data.user_id
        }
        dispatch(removeUsersFriend_APIcall(payload))
    }

    useEffect(() => {
        if (authStat_removeUsersFriend.data.responseBody != undefined && authStat_removeUsersFriend.data.responseCode == 200) {
            setLoader(false)
            console.log(authStat_removeUsersFriend.data.responseBody)
            const payload = {
                user_id: props.userid
            }
            dispatch(getUsersFriendsLists_APIcall(payload))
        } else if (authStat_removeUsersFriend.data.responseBody != undefined && authStat_removeUsersFriend.data.responseCode == 201) {
            console.log('remove user failed')
        }
    }, [authStat_removeUsersFriend.data])


    return (
        <>
            <div>
                {loader == true ? <div>
                        <div className='enable-loader1'>
                            <img src={load} width="80px" height="80px"></img>
                        </div>
                    </div> : null}
                <div className="userFriendsList_scrollbar mt-2" id="style-2">
                    <div className="row" style={{ display: usersFriendsListt?.length !== 0 ? '' : 'none' }}>
                        {usersFriendsListt?.filter(data => data.full_name?.match(new RegExp(props.data, "i"))).map((data, index) => {
                            return (
                                <div className='col-6'>
                                    <div className='row align-items-center pb-2'>
                                        <div className='col-2'>
                                            {data.imageUrl.image_url != '' ? <img src={data.imageUrl.image_url} width="54px" height="54px" style={{ borderRadius: "15px" }} /> : <img src={defaultuserprofilepicture} width="54px" height="54px" style={{ borderRadius: "15px" }} />}
                                        </div>
                                        <div className='col-8 users-friendslist '>
                                            <div className='d-flex flex-column '>
                                                <span className='textspan1 userfriendname'>{data.full_name}</span>
                                                <div className='d-flex align-items-center biodatasection mt-25'>
                                                    <img src={location} width="16px" height="16px"></img>
                                                    <span className='textspanlight1'>{data.location}</span>
                                                    <img className="ms-25" src={dot} width="5px" height="5px"></img>
                                                    <img className="ms-25" src={birthdaycakefire} width="16px" height="16px"></img>
                                                    <span className='textspanlight1 ms-25 mt-25'>{changebirth(data)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-2 p-0 userfriend-verticalmore">
                                            {(index % 2) == 0 ? <Dropdown className="customDropdown custompositionw6" >
                                                    <Dropdown.Toggle>
                                                        <img src={verticalmore} width="28" height="28" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="customDropdownmenu customDropdownmenup6">
                                                        <Dropdown.Item href="#" className="ps-75 pt-25 pb-25 customDropdownitem d-flex align-items-center" onClick={() => removeFriendcall(data)}>
                                                            <img className="me-25" src={deleteitem} width="16px" height="16px"></img>
                                                            <span className="textspanlight37">Remove</span>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown> : <Dropdown className="customDropdown custompositionw6even">
                                                    <Dropdown.Toggle>
                                                        <img src={verticalmore} width="28" height="28" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="customDropdownmenu customDropdownmenup6">
                                                        <Dropdown.Item href="#" className="ps-75 pt-25 pb-25 customDropdownitem d-flex align-items-center" onClick={() => removeFriendcall(data)}>
                                                            <img className="me-25" src={deleteitem} width="16px" height="16px"></img>
                                                            <span className="textspanlight37">Remove</span>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {usersFriendsListt.length == 0 ?
                        <div className="row d-flex align-items-center">
                            <div className="col-12 d-flex flex-column align-items-center">
                                {/* noEventSection */}
                                <div className="p-2">
                                    {/* <img className="noeventimg" src={calendardark} width="40px" height="41px" /> */}
                                </div>
                                <span className="span-texting pt-2">{friendsname} does not have any friends to display</span>
                            </div>
                        </div> : null}

                </div>
            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        getUsersFriendsListsData: state.getUsersFriendsListsData,
        removeUsersFriendData: state.removeUsersFriendData
    }
}
export default connect(mapStateToProps, {})(UsersFriendsTab)