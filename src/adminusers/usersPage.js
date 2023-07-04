import '../@core/scss/base/adminDashboard/adminmenu/adminusersdetail.css'
import ManageInterestTags from './manageinteresttags'
import SideProfile from './sideprofile'
import React, { useState } from "react"
import Filterpopup from './filterpopup'
import ManageUserSettings from './manageusersettings'
import UserMainMenu from './usermainmenu'
import UserprofileBottom1 from './userprofilebottom1'
import '../@core/scss/base/adminDashboard/usersmenu.scss'
import search from '../assets/images/dashboardimg/searchbar.png'
import { useEffect } from 'react'
import { useLocation } from "react-router-dom";




const UserPage = (props) => {
    const [friends, setfriends] = useState(false)
    const [seletedUserDetails, setSeletedUserDetails] = useState()
    const location = useLocation()
    const [searchValue, setSearchValue] = useState('')
    const clickfriend = () => {
        setfriends(true)
    }
    const otherclick = () => {
        setfriends(false)
        props.handle()
    }
    const getindivudual = (userData) => {
        console.log(userData)
        setSeletedUserDetails(userData)
        // setSeletedUserIndex(userData)
    }

    return (
        <div className='row'>
            <div className='col-3 d-flex '>
                <span className="topbar mt-1">Users</span>
            </div>
            <div className='col-9 d-flex justify-content-end '>
                <div className='d-flex align-items-center border_size' style={{ height: "72%" }}>
                    <img className='search ms-75' src={search} width="16px" height="16px"></img>
                    <input className='w-100 usernameSearch ms-25 me-25 text_search ' placeholder='Search by user name...' value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}></input>
                </div>
                <div className='mx-2'>
                    <Filterpopup></Filterpopup>
                </div>
                <ManageInterestTags handle={clickfriend} data={friends} />
                &nbsp;&nbsp;&nbsp;
                <ManageUserSettings handle={clickfriend} data={friends} />
            </div>
            <div className='usersbody-centersection'>
                <UserMainMenu searchValue={searchValue} getvalue={getindivudual} handle={clickfriend} data={friends} nofriends={otherclick}></UserMainMenu>
            </div>
            <div className='usersbody-rightsection'>
                <SideProfile userVal={seletedUserDetails}></SideProfile>
            </div>
        </div>
    )
}

export default UserPage