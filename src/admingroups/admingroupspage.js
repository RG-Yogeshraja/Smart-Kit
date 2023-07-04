import '../../src/@core/scss/base/adminDashboard/adminmenu/adminusersdetail.css'
import ManageInterestTags from '../adminusers/manageinteresttags'
import React, { useEffect, useState } from "react"
import GroupsMainPanel from './groupspanel/groupsmaintab'
import profilephoto from '../assets/images/dashboardimg/profile_pic.png'
import profilephotos from '../assets/images/dashboardimg/profile_poc1.png'
import '../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmenu.css'
import ControlGroupSettings from './groupspopup/controlgroupsettings'
import FilterGrppopup from './groupspopup/filtergrppoppup'
import Profile_sidepanel from './profileside'
import search from '../assets/images/dashboardimg/searchbar.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import { activeGroups_APIcall } from '../admingroups/groupspanel/getactive-splice'
import { groupsFilter_APIcall } from '../admingroups/slice-admingroups/slice-groupfilter'
import { getpendingGroups_APIcall } from '../admingroups/groupspending_splice'
import load from '../assets/images/dashboardimg/loadersimg.gif'


const UserPage = (props) => {
    const [val, setval] = useState(false)
    const [pending, setpending] = useState(false)
    const [dat, valdat] = useState(true)
    const [searchs, setsearches] = useState('')
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(false)
    const [searchname_edit, setsearchname_edit] = useState('')
    console.log(props)
    const authStat_groupSearchResult = useSelector((state) => state.groupsFilterData)

    const clickfunction = (props) => {
        console.log(props)
        setval(true)
        setpending(false)
    }

    const clickno = (props) => {
        console.log(props)
        setval(false)
        //   alert('dd', pending)
        setpending(true)
    }

    const searchfn = (targete) => {
        
        if (targete != '') {
            setsearches(targete)
            const payload = {
                admin_id: localStorage.getItem('loggedIn_userId'),
                location: '',
                search_key: targete,
                group_type: []
            }
            console.log(payload)
            dispatch(groupsFilter_APIcall(payload))
        }
        else if (targete == '') {
            if (pending === false) {
                
                // dispatch(activeGroups_APIcall(payload))
                const payload = {
                    admin_id: localStorage.getItem('loggedIn_userId'),
                    location: '',
                    search_key: '',
                    group_type: ['Active Groups']
                }
                console.log(payload)
                dispatch(groupsFilter_APIcall(payload))
            }
            // else {
            //     const payload = {
            //         admin_id: localStorage.getItem("loggedIn_userId")
            //     }
            //     dispatch(getpendingGroups_APIcall(payload))
            // }
        }
    }

    useEffect(() => {
        
        if (searchname_edit != '') {
            setsearches(searchname_edit)
            setLoader(true)
            const payload = {
                admin_id: localStorage.getItem('loggedIn_userId'),
                location: '',
                search_key: searchname_edit,
                group_type: []
            }
            console.log(payload)
            dispatch(groupsFilter_APIcall(payload))
        }
        else if (searchname_edit == '') {
            if (pending === false) {
                const payload = {
                    admin_id: localStorage.getItem('loggedIn_userId'),
                    location: '',
                    search_key: '',
                    group_type: ['Active Groups']
                }
                console.log(payload)
                dispatch(groupsFilter_APIcall(payload))
            } 
            // else {
            //     const payload = {
            //         admin_id: localStorage.getItem("loggedIn_userId")
            //     }
            //     dispatch(getpendingGroups_APIcall(payload))
            // }
        }
    }, [searchname_edit])

    useEffect(() => {
        if (authStat_groupSearchResult.data.responseBody != undefined && authStat_groupSearchResult.data.responseCode == 200) {
            setLoader(false)
        }
        else {
            setLoader(true)
        }
    }, [authStat_groupSearchResult.data])

    return (
        <div className='row'>
            <div style={{ display: loader !== false ? '' : 'none' }}>
                <div className='enable-loader1'>
                    <img src={load} width="80px" height="80px"></img>
                </div>
            </div>
            <div className='col-2 d-flex '>
                <span className="topbar mt-1">Groups</span>
            </div>
            <div className='col-10 d-flex justify-content-end ' >
                <div className='d-flex align-items-center border_size' style={{ height: "58%" }} >
                    <img className='search ms-1' src={search} width="16px" height="16px"></img>
                    <input className='w-100 usernameSearch ms-75 me-25 text_search ' onChange={e => setsearchname_edit(e.target.value)} placeholder='Search by name,...'
                    ></input>
                </div>
                <div className='mx-2'>
                    <FilterGrppopup data={searchs} />&nbsp;&nbsp;&nbsp;
                </div>
                <button className='btn_green d-flex flex-row justify-content-center align-items-center'>
                    <span className='text_color text-center'><ManageInterestTags data={dat} /></span>
                </button>&nbsp;&nbsp;&nbsp;


                <button className='btn_emptycolor1 d-flex flex-row justify-content-center align-items-center'>
                    <span className='text_color_change text-center'><ControlGroupSettings /></span>
                </button>

            </div>
            {/* <div className='col-8 d-flex justify-content-end'>
                <FilterGrppopup />&nbsp;&nbsp;&nbsp;
                <button className='btn_green d-flex flex-row justify-content-center align-items-center'>
                    <span className='text_color text-center'><ManageInterestTags data={dat} /></span>
                </button>&nbsp;&nbsp;&nbsp;
                <button className='btn_emptycolor d-flex flex-row justify-content-center align-items-center'>
                    <span className='text_color_change text-center'><ControlGroupSettings /></span>
                </button>
            </div> */}
            <div className='bodycenter-panel'>
                {/* <p style={{ border: "1px solid green" }}>Groups main panel</p> */}
                <GroupsMainPanel handle={clickfunction} unhandle={clickno}></GroupsMainPanel>
            </div>
            <div className='bodyright-panel'>
                <Profile_sidepanel data={val} datas1={pending} handle={clickfunction} unhandle={clickno}></Profile_sidepanel>

            </div>
        </div>
    )
}

export default UserPage