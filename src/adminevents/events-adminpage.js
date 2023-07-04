import '../../src/@core/scss/base/adminDashboard/adminmenu/adminusersdetail.css'
import ManageInterestTags from '../adminusers/manageinteresttags'
import React, { useState } from "react"
import EventsMainPanel from './events-mainpanel/events-maintab'
import { connect, useDispatch, useSelector } from 'react-redux'
import profilephoto from '../assets/images/dashboardimg/profile_pic.png'
import profilephotos from '../assets/images/dashboardimg/profile_poc1.png'
import '../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmenu.css'
import ControlGroupSettings from './events-popup/events-controlsettings'
import FilterGrppopup from './events-popup/events-filterpoppup'
import Profile_sidepanel from './events-sideprofile'
import ControlEventsSettings from './events-popup/events-controlsettings'
import search from '../assets/images/dashboardimg/searchbar.png'
import { getEvent_filter_APICall } from '../adminevents/slice-adminevents/geteventfilter-detail-splice'

const EventsPage = (props) => {
    const [active, setactive] = useState(false)
    const [past, setpast] = useState(false)
    const dispatch = useDispatch()
    const [deleted, setdelete] = useState(false)
    const [dat, valdat] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [geteventtype, seteventtype] = useState('')
    const [gettargets, settargets] = useState('')
    const [readonly, setreadonly] = useState(false)
    const [setfal, getfal] = useState(false)
    const [jsonget, jsonset] = useState([])
    console.log(props)
    const clickfunction = (props) => {
        console.log(props)
        setdelete(true)
        setpast(false)
        setactive(false)
        setjsonset()
    }

    const setsearchname_edit = (targete) => {
        
        getfal(true)

        
        if (targete === '') {
            setreadonly(true)
            settargets(targete)
            seteventtype(geteventtype)

            const payloads = {
                admin_id: localStorage.getItem("loggedIn_userId"),
                search_key: gettargets,
                location: "",
                event_type: targete
            }
            
            dispatch(getEvent_filter_APICall(payloads, setfal))

        } else {

            setreadonly(true)
            settargets('')
            const val = ['Private Events', 'Public Events', 'Limited spots Events', 'Open Events', 'Sponsored Events', 'Hint Social Events Only', 'Non-Hint Social Events Only']
            seteventtype(val)
            setreadonly(true)
            const payloads = {
                admin_id: localStorage.getItem("loggedIn_userId"),
                search_key: targete,
                location: "",
                event_type: val
            }

            dispatch(getEvent_filter_APICall(payloads))
        }
        console.log(targete)

    }

    const clickno = (props) => {
        console.log(props)
        setpast(true)
        setdelete(false)
        setactive(false)
    }
    const clickfunc1 = (props) => {
        console.log(props)
        setactive(true)
        setpast(false)
        setdelete(false)
    }
    const setsearch_val = (val) => {
        console.log(val)
        seteventtype(val)
    }
    const val1 = (v, m) => {
        jsonset(m)
        console.log(m)
        setreadonly(v)
    }

    return (
        <div className='row'>
            <div className='col-2 d-flex '>
                <span className="topbar mt-1">Events</span>
            </div>

            <div className='col-10 d-flex justify-content-end '>
                <div className='d-flex align-items-center border_size' style={{ height: "58%" }}>
                    <img className='search ms-1' src={search} width="16px" height="16px"></img>
                    <input className='w-100 usernameSearch ms-75 me-25 text_search' placeholder='Search by name...'
                        onChange={e => setsearchname_edit(e.target.value)} ></input>
                </div>
                <div className='mx-2'>
                    <FilterGrppopup handlechange={setsearch_val} data={gettargets} />&nbsp;&nbsp;&nbsp;
                </div>
                <button className='btn_green d-flex flex-row justify-content-center align-items-center'>
                    <span className='text_color text-center'><ManageInterestTags data={dat} /></span>
                </button>&nbsp;&nbsp;&nbsp;


                <button className='btn_emptycolor1 d-flex flex-row justify-content-center align-items-center'>
                    <span className='text_color_change text-center'><ControlEventsSettings /></span>
                </button>

            </div>
            {/* <div className='col-8 d-flex justify-content-end'>
                <FilterGrppopup />&nbsp;&nbsp;&nbsp;
                <button className='btn_green d-flex flex-row justify-content-center align-items-center'>
                    <span className='text_color text-center'><ManageInterestTags data={dat} /></span>
                </button>&nbsp;&nbsp;&nbsp;
                <button className='btn_emptycolor d-flex flex-row justify-content-center align-items-center'>
                    <span className='text_color_change text-center'><ControlEventsSettings /></span>
                </button>
            </div> */}
            <div className='bodycenter-panel'>
                <EventsMainPanel handle={clickfunction} unhandle={clickno} handle_change={val1} past={clickfunc1} searchValue={searchValue}></EventsMainPanel>
            </div>
            <div className='bodyright-panel'>
                <Profile_sidepanel active={active} past={past} delete={deleted} datas={jsonget} handle={clickfunction}></Profile_sidepanel>
            </div>
        </div>
    )
}

export default EventsPage
