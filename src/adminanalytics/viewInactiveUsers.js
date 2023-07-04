import React, { useState, useEffect } from "react"
import Modal from "react-bootstrap/Modal"
import { ChevronLeft, ChevronRight } from "react-feather"
import calendar from '../assets/images/dashboardimg/CalendarButton.png'
import Calendar from "react-calendar"
import '../@core/scss/base/adminDashboard/analyticsmenu/analytics.scss'
import moment from 'moment'
import CSV from '../assets/images/dashboardimg/csvs.png'
import user1 from '../assets/images/dashboardimg/users1.png'
import user2 from '../assets/images/dashboardimg/users2.png'
import user3 from '../assets/images/dashboardimg/users3.png'
import user4 from '../assets/images/dashboardimg/users4.png'
import user5 from '../assets/images/dashboardimg/users5.png'
import user6 from '../assets/images/dashboardimg/users6.png'
import user7 from '../assets/images/dashboardimg/users7.png'
import left from '../assets/images/dashboardimg/ra.png'
import filter from '../assets/images/dashboardimg/SortBy.png'
import filterdown from '../assets/images/dashboardimg/dropdownn.png'
import filterup from '../assets/images/dashboardimg/dropupp.png'
import checkbox from '../assets/images/dashboardimg/fieldbox.png'
import checkedbox from '../assets/images/dashboardimg/checktickbox.png'
import { ModalBody, PopoverBody, UncontrolledPopover } from "reactstrap"
import search from '../assets/images/dashboardimg/searchbar.png'
import Exportcsv from "./Exportcsv"
import { admin_analytics_viewactiveuser_APIcall } from './slice-adminanalytics/viewactiveusers-splice'
import { connect, useDispatch, useSelector } from 'react-redux'
import load from '../assets/images/dashboardimg/loadersimg.gif'
import { getUsersListofInvitedCodeReg_APIcall } from "./slice-adminanalytics/getUserslistofInvitedCodeReg"
import defaultuserprofilepicture from '../assets/images/dashboardimg/defaultuserprofilepicture.png'
import { useNavigate } from 'react-router-dom'
import { getInactiveUsersList_APIcall } from "./slice-adminanalytics/slice-getInactiveUsers"
import '../@core/scss/base/adminDashboard/custom_scrollbar.css'
import { getCustomChildFilter_APIcall } from "./slice-adminanalytics/slice-analyticsCustomChildFilter"




function ViewInactiveUsers(props) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [value, setFromDate] = useState('')
  const [exports, setexport] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [valueset, setval] = useState([])
  const [getcustom, setcustom] = useState(false)
  const [getToDate, setToDate] = useState('')
  const [setid, getid] = useState('')
  const [loader, setLoader] = useState(false)
  const [noResultFound, setNoResultFound] = useState(false)
  const [getvalue, setvalues] = useState([])
  const [inactiveUsersList, setInactiveUsersList] = useState([])
  const view_users = useSelector((state) => state.admin_analytics_viewactiveusers_data)
  const authStat_getInactiveUsersList = useSelector((state) => state.getInactiveUsersListData)
  const authStat_parentFilterPayloadData = useSelector((state) => state.analyticsParentFilterData)
  const authStat_parentFilterData = useSelector((state) => state.analyticsParentFilterData)
  const authStat_childFilterData = useSelector((state) => state.analyticsChildFilterData)
  const authStat_customChildFilterData = useSelector((state) => state.getCustomChildFilterData)
  const [showCalendardetail, setShowCalendardetail] = useState(false)
  const navigate = useNavigate()
  const [getEmailAddressUsers, setEmailAddressUsers] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [filtershow, filterhide] = useState(false)
  const [changeval, setchangeval] = useState(false)
  const [inActiveUserModule, setinActiveUserModule] = useState('inActiveUserModule')
  const [getAppliedChildFilterInput, setAppliedChildFilterInput] = useState({})


  const [json, setjson] = useState([
    { id: "0", value: "0", name: "Current", checked: false },
    { id: "1", value: "1", name: "Last 90 Days", checked: false },
    { id: "2", value: "2", name: "Last Day", checked: false },
    { id: "3", value: "3", name: "Last 180 Days", checked: false },
    { id: "4", value: "4", name: "Last 7 Days", checked: false },
    { id: "5", value: "5", name: "Last Year", checked: false },
    { id: "6", value: "6", name: "Last 30 Days", checked: false },
    { id: "7", value: "7", name: "Lifetime", checked: false },
    { id: "8", value: "8", name: "Custom", checked: false }
  ])
  const clearfilter = () => {
    setjson([
      { id: "0", value: "0", name: "Current", checked: false },
      { id: "1", value: "1", name: "Last 90 Days", checked: false },
      { id: "2", value: "2", name: "Last Day", checked: false },
      { id: "3", value: "3", name: "Last 180 Days", checked: false },
      { id: "4", value: "4", name: "Last 7 Days", checked: false },
      { id: "5", value: "5", name: "Last Year", checked: false },
      { id: "6", value: "6", name: "Last 30 Days", checked: false },
      { id: "7", value: "7", name: "Lifetime", checked: false },
      { id: "8", value: "8", name: "Custom", checked: false }
    ])
    setToDate('')
    setFromDate('')
  }

  const handleClose = () => {
    setShow(false)
    clearfilter()
    setcustom(false)
    setexport(false)
    setNoResultFound(false)

  }

  const handleShow = () => {

    setLoader(true)
    setFromDate('')
    setToDate('')
    setNoResultFound(false)
    setInactiveUsersList([])
    if (authStat_parentFilterData.data.responseBody != undefined && authStat_parentFilterData.data.responseCode == 200) {
      setShow(true)
      const getFilterTypeVal = [authStat_parentFilterPayloadData.parentFilterPayload]
      console.log(getFilterTypeVal)
      const newJson = [...json]
      if (getFilterTypeVal[0].sort_by_date == 'Custom') {
        newJson[8].checked = true
        setcustom(true)
        setjson(newJson)
        setFromDate(new Date(getFilterTypeVal[0].start_date))
        setToDate(new Date(getFilterTypeVal[0].end_date))
      }
      else if (getFilterTypeVal[0].sort_by_date != 'Custom') {
        for (let i = 0; i < newJson.length; i++) {
          if (newJson[i].name == getFilterTypeVal[0].sort_by_date) {
            newJson[i].checked = true
          }
        }
        setjson(newJson)
      }

      if (authStat_childFilterData.data.responseCode == 200 && authStat_childFilterData.data.responseBody != undefined) {
        const responseData = [...authStat_childFilterData.data.responseBody.inactive_user_details]
        if (responseData.length !== 0) {
          setNoResultFound(false)
          const allUsersSortList = responseData.sort((a, b) => a.full_name?.localeCompare(b.full_name))
          setInactiveUsersList(allUsersSortList)
          setLoader(false)
        }
        else if (responseData.length === 0) {
          setNoResultFound(true)
          setInactiveUsersList([])
          setLoader(false)
        }
      }

      else if (authStat_childFilterData.data.responseBody == undefined) {
        const payload = {
          user_id: localStorage.getItem('loggedIn_userId'),
          type: getFilterTypeVal[0].sort_by_date == 'Custom' ? 'Custom' : getFilterTypeVal[0].sort_by_date,
          user_type: '2',
          datetime1: getFilterTypeVal[0].start_date,
          datetime2: getFilterTypeVal[0].end_date
        }
        dispatch(getInactiveUsersList_APIcall(payload))
      }
    }
    else {
      setShow(false)
    }
    setchangeval(false)
    filterhide(false)
  }

  useEffect(() => {
    //1 when no child filter applied
    debugger
    if (authStat_getInactiveUsersList.data.responseBody != undefined && authStat_getInactiveUsersList.data.responseCode == 200 && inActiveUserModule == "inActiveUserModule") {
      const responseData = [...authStat_getInactiveUsersList.data.responseBody]
      const filterData = responseData.filter((item => item.full_name != null))
      const sortList = filterData.sort((a, b) => a.full_name?.localeCompare(b.full_name))
      if (sortList.length == 0) {
        const filterData = responseData.filter((item => item.email_address != null))
        const sortList = filterData.sort((a, b) => a.email_address?.localeCompare(b.email_address))
        setInactiveUsersList(sortList)
        setEmailAddressUsers(true)
      }
      else if (sortList.length !== 0) {
        setInactiveUsersList(sortList)
        setEmailAddressUsers(false)
      }
      setLoader(false)
      setNoResultFound(false)
    }
    //2 when applied child filter
    else if (authStat_customChildFilterData.data.responseCode == 200 && authStat_customChildFilterData.data.responseBody != undefined) {
      debugger
      const responseData = [...authStat_customChildFilterData.data.responseBody.active_user_details]
      if (responseData.length !== 0) {
        const allUsersSortList = responseData.sort((a, b) => a.full_name?.localeCompare(b.full_name))
        setInactiveUsersList(allUsersSortList)
        setLoader(false)
      }
      else if (responseData.length === 0) {
        setNoResultFound(true)
        setInactiveUsersList([])
        setLoader(false)
      }
    }
    else {
      setLoader(false)
    }
  }, [authStat_getInactiveUsersList.data, authStat_customChildFilterData.data])

  const handleExport = () => {
    if (exports === true) {
      setexport(false)
    } else {
      setexport(true)
    }
  }

  const changes = () => {
    if (showCalendardetail === false) {
      setShowCalendardetail(true)
    } else {
      setShowCalendardetail(false)
    }
  }

  useEffect(() => {
    setAppliedChildFilterInput(authStat_childFilterData.childFilterPayload)
}, [authStat_childFilterData.childFilterPayload])

  const dateTimeConversion = (hrs, mins, secs, dateCount) => {
    if (dateCount == '') {
      let todayDate = new Date()
      todayDate.setHours(hrs)
      todayDate.setMinutes(mins)
      todayDate.setSeconds(secs)
      const setTimeResult = new Date(todayDate)
      const utcConversion = new Date(setTimeResult).toUTCString()
      var dateObject = new Date(utcConversion)
      var formattedDate = dateObject.toISOString().slice(0, 10)
      const splitTime = utcConversion.slice(17, 25)
      const utcResult = formattedDate + 'T' + splitTime + '.000Z'
      return utcResult
    }
    else if (dateCount != '') {
      let previousDate = new Date()
      previousDate.setDate(previousDate.getDate() - dateCount)
      previousDate.setHours(hrs)
      previousDate.setMinutes(mins)
      previousDate.setSeconds(secs)
      const setTimeResult = new Date(previousDate)
      const utcConversion = new Date(setTimeResult).toUTCString()
      var dateObject = new Date(utcConversion)
      var formattedDate = dateObject.toISOString().slice(0, 10)
      const splitTime = utcConversion.slice(17, 25)
      const utcResult = formattedDate + 'T' + splitTime + '.000Z'
      return utcResult
    }
  }

  const applyFilter = () => {
    setLoader(true)
    console.log(getvalue)
    setNoResultFound(false)
    const filters = [...json]
    const val = filters.filter(res => res.checked === true)
    const startDatePickValue = []
    const endDatePickValue = []
    const previousStartDateTime = []
    const previousEndDateTime = []

    if (value != "") {
      const startDateTime = value
      startDateTime.setHours('00')
      startDateTime.setMinutes('00')
      startDateTime.setSeconds(10)
      const setTimeResult = new Date(startDateTime)
      const utcConversion = new Date(setTimeResult).toUTCString()
      const dateObject = new Date(utcConversion)
      const formattedDate = dateObject.toISOString().slice(0, 10)
      const splitTime = utcConversion.slice(17, 25)
      const startDateResult = formattedDate + 'T' + splitTime + '.000Z'
      startDatePickValue.push(startDateResult)
    }

    if (getToDate != "") {
      const endDate = getToDate
      endDate.setHours('23')
      endDate.setMinutes('59')
      endDate.setSeconds(59)
      const setTimeResult = new Date(endDate)
      const utcConversion = new Date(setTimeResult).toUTCString()
      const dateObject = new Date(utcConversion)
      const formattedDate = dateObject.toISOString().slice(0, 10)
      const splitTime = utcConversion.slice(17, 25)
      const startDateResult = formattedDate + 'T' + splitTime + '.000Z'
      endDatePickValue.push(startDateResult)
    }

    if (val[0].name === 'Current') {
      const startDateResult = dateTimeConversion('00', '00', 10, '')
      previousStartDateTime.push(startDateResult)
      const endDateResult = dateTimeConversion('23', '59', 59, '')
      previousEndDateTime.push(endDateResult)
    }

    else if (val[0].name === 'Last Day') {
      const startDateResult = dateTimeConversion('00', '00', 10, '1')
      previousStartDateTime.push(startDateResult)
      const endDateResult = dateTimeConversion('23', '59', 59, '1')
      previousEndDateTime.push(endDateResult)
    }
    //1 when no child filter apply
    debugger
    if (authStat_childFilterData.data.responseBody == undefined) {
      if ((val[0].name != 'Current') && (val[0].name != 'Last Day')) {
        const payload = {
          user_id: localStorage.getItem('loggedIn_userId'),
          type: val[0].name == "Custom" ? "Custom" : val[0].name,
          user_type: '2',
          datetime1: startDatePickValue[0] == undefined ? "" : startDatePickValue[0],
          datetime2: endDatePickValue[0] == undefined ? "" : endDatePickValue[0]
        }
        dispatch(getInactiveUsersList_APIcall(payload))
      }
      else if (val[0].name === 'Current' || 'Last Day') {
        const payload = {
          user_id: localStorage.getItem('loggedIn_userId'),
          type: val[0].name,
          user_type: '2',
          datetime1: previousStartDateTime[0],
          datetime2: previousEndDateTime[0]
        }
        dispatch(getInactiveUsersList_APIcall(payload))
      }
    }
    //2 when applyied child filter
    debugger
    if (authStat_childFilterData.data.responseCode == 200 && authStat_childFilterData.data.responseBody != undefined) {
      if ((val[0].name === 'Current') || (val[0].name === 'Last Day')) {
        const payload = {
          admin_id: getAppliedChildFilterInput.admin_id,
          attracted_to: getAppliedChildFilterInput.attracted_to,
          end_age: getAppliedChildFilterInput.end_age,
          end_date: previousEndDateTime[0],
          gender_identity: getAppliedChildFilterInput.gender_identity,
          latitude: getAppliedChildFilterInput.latitude,
          location: getAppliedChildFilterInput.location,
          longitude: getAppliedChildFilterInput.longitude,
          looking_for: getAppliedChildFilterInput.looking_for,
          miles: getAppliedChildFilterInput.miles,
          relationship_status: getAppliedChildFilterInput.relationship_status,
          sort_by_date: val[0].name,
          start_age: getAppliedChildFilterInput.start_age,
          start_date: previousStartDateTime[0]
        }
        dispatch(getCustomChildFilter_APIcall(payload))
      }
      else if (val[0].name === 'Custom') {
        const payload = {
          admin_id: getAppliedChildFilterInput.admin_id,
          attracted_to: getAppliedChildFilterInput.attracted_to,
          end_age: getAppliedChildFilterInput.end_age,
          end_date: endDatePickValue[0],
          gender_identity: getAppliedChildFilterInput.gender_identity,
          latitude: getAppliedChildFilterInput.latitude,
          location: getAppliedChildFilterInput.location,
          longitude: getAppliedChildFilterInput.longitude,
          looking_for: getAppliedChildFilterInput.looking_for,
          miles: getAppliedChildFilterInput.miles,
          relationship_status: getAppliedChildFilterInput.relationship_status,
          sort_by_date: val[0].name,
          start_age: getAppliedChildFilterInput.start_age,
          start_date: startDatePickValue[0]
        }
        dispatch(getCustomChildFilter_APIcall(payload))
      }
      else if ((val[0].name != 'Current') && (val[0].name != 'Last Day') && (val[0].name != 'Custom')) {
        const payload = {
          admin_id: getAppliedChildFilterInput.admin_id,
          attracted_to: getAppliedChildFilterInput.attracted_to,
          end_age: getAppliedChildFilterInput.end_age,
          end_date: '',
          gender_identity: getAppliedChildFilterInput.gender_identity,
          latitude: getAppliedChildFilterInput.latitude,
          location: getAppliedChildFilterInput.location,
          longitude: getAppliedChildFilterInput.longitude,
          looking_for: getAppliedChildFilterInput.looking_for,
          miles: getAppliedChildFilterInput.miles,
          relationship_status: getAppliedChildFilterInput.relationship_status,
          sort_by_date: val[0].name,
          start_age: getAppliedChildFilterInput.start_age,
          start_date: ''
        }
        dispatch(getCustomChildFilter_APIcall(payload))
      }
    }
    filterhide(false)
  }

  const click_filter = () => {
    if (filtershow === false) {
      filterhide(true)
    } else {
      filterhide(false)
    }
  }
  const popoversss = () => {
    setexport(false)
    setchangeval(true)
  }

  const valueclick = () => {
    if (showCalendar === false) {
      setShowCalendar(true)
    } else {
      setShowCalendar(false)
    }
  }


  const checktrigger = (item, name) => {
    const items = []
    const newTags = [...json]
    if (item.id === '8' && item.checked === false) {
      setcustom(true)
    }
    else if (item.id === '8' && item.checked === true) {
      if (name != "Custom") {
        setcustom(false)
      }
    }
    else if (item.id != '8' && item.checked === false) {
      setcustom(false)
      setFromDate('')
      setToDate('')
    }
    for (let i = 0; i < newTags.length; i++) {
      if (item.id === newTags[i].id && newTags[i].checked === false) {
        newTags[i].checked = true
      }
      else if (newTags[i].checked === true) {
        if (newTags[i].name != name) {
          newTags[i].checked = false
        }
      }
      else if (item.id != '8' && item.checked === false) {
        setcustom(false)
        setFromDate('')
        setToDate('')
      }
    }
    setjson(newTags)
    const checkval = newTags.filter(res => res.checked === true)
    if (checkval.length !== 0) {
      for (let i = 0; i < checkval.length; i++) {
        items.push(checkval[i].name)
      }
      setvalues(items)
    }
  }

  const userDetails = (values) => {
    const data = { userId: values.user_id }
    navigate('/admin/users', { state: data })
  }

  return (
    <>
      <div className="col-11 mx-75 mb-1">
        <button className="btnss" onClick={handleShow}><span className="txtt_alignss" style={{ cursor: "pointer" }}>View Inactive Users</span></button>
      </div>
      <Modal classname="ajai"
        show={show}
        onHide={() => setShow(false)}
        centered
        backdrop="static"
        keyboard={false}
        // size='lg'
        dialogClassName="flx">

        <Modal.Body >
          <div style={{ display: loader !== false ? '' : 'none' }}>
            <div className='enable-loader1'>
              <img src={load} width="80px" height="80px"></img>
            </div>
          </div>
          <div className="p-1 ">
            <span className="active-user ms-1">Inactive Users</span>
            <button className="filterbutton" style={{ display: props.data === 'coderegistration' ? '' : 'none' }} >
              <img src={filter} style={{ marginRight: "10px" }}></img>Filter by<img src={filterdown} width="12px" height="8px" className="filterdown"></img>
            </button>
            <button className="filterbutton" onClick={click_filter} id="poppval"><img src={filter} style={{ marginRight: "10px" }}></img>Filter by<img src={filtershow === false ? filterdown : filterup} width="12px" height="8px" className="filterdown"></img></button>
            <div className="row" style={{ display: filtershow === true ? 'flex' : 'none' }}>
              <div placement='bottom' target='active' className="col-7 " style={{ position: "absolute", marginLeft: "225px", marginTop: "25px" }} >
                <div className='card p-2 d-block' style={{ border: "1px solid  #95E1BF", borderRadius: "2px" }}>
                  <div className="d-flex justify-content-between">
                    <span className='filter_by'>Filter by Date</span>
                    <span className='clear_filter' style={{ cursor: "pointer" }}>Clear Filters</span>
                  </div>
                  <div className="row">
                    {json.map((val, index) => {
                      return (
                        <div className="col-6 mt-2 d-flex align-items-center" >
                          <img src={val.checked === false ? checkbox : checkedbox} onClick={() => checktrigger(val, val.name)} width="20px" height="20px" className="me-50" ></img>
                          <span className="small_texted">{val.name}</span>
                        </div>)
                    }
                    )}
                  </div>
                  <div style={{ display: getcustom === true ? '' : 'none' }}>
                    <div className='col-12  mt-2'>
                      <span className='start_date'>Start Date</span>
                    </div>
                    <div className='col-12  mt-50'>
                      <div className='formControl d-flex justify-content-flex-end align-items-center'>
                        <input className={`form_box ${value === '' ? "sponshorship_text_placeholder" : ''}`} value={value !== '' ? moment(value).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                        <img src={calendar} width="34px" height="34px" onClick={valueclick}></img>

                      </div>
                      <div>
                        <Calendar className={showCalendar ? "" : "hide"}
                          onChange={setFromDate} value={value} />
                      </div>

                    </div>
                    <div className='col-12  mt-2'>
                      <span className='start_date'>End Date</span>
                    </div>
                    <div className='col-12  mt-50'>
                      <div className='formControl d-flex justify-content-flex-end align-items-center'>
                        <input className={`form_box ${getToDate === '' ? "sponshorship_text_placeholder" : ""}`} value={getToDate !== '' ? moment(getToDate).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                        <img src={calendar} width="34px" height="34px" onClick={changes}></img>

                      </div>
                      <div>
                        <Calendar className={showCalendardetail ? "" : "hide"}
                          onChange={setToDate} value={getToDate} />
                      </div>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-center mt-3 mb-1'>
                    <button className='btn-applyy ' onClick={applyFilter} >
                      <span className='font-applyy'>Apply</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div className="p-1 mt-50 " >
            <div className='col-12  mb-1 '>
              <div className='d-flex align-items-center border_size ms-1'>
                <img className='search ms-1' src={search} width="20px" height="20px"></img>
                <input className='w-100 height-range ms-1 text_search ' placeholder='Search ' value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}></input>
              </div>
            </div>

            {/* users list of invited code registrations section */}
            <div className="inActiveUserList_scrollbar mt-2" id="style-2">
              {getEmailAddressUsers == true ?
                <div className="row">
                  {inactiveUsersList?.filter(items => items.email_address.match(new RegExp(searchValue, "i"))).map((data, index) => {
                    return (
                      <div className="col-6 active_user_img mb-2 " onClick={() => userDetails(data)}>
                        {data.user_image != "" ?
                          <img width="60px" height="60px" src={data.user_image} style={{ borderRadius: "15px" }}></img> :
                          <img src={defaultuserprofilepicture} width="60px" height="60px" style={{ borderRadius: "15px" }}></img>
                        }
                        <div className='d-flex flex-column'>
                          <spam className="user_name mx-50 ps-25">{data.email_address}</spam>
                        </div>
                      </div>)
                  })}
                </div> :
                <div className="row">
                  {inactiveUsersList?.filter(items => items.full_name.match(new RegExp(searchValue, "i"))).map((data, index) => {
                    return (
                      <div className="col-6 active_user_img mb-2 " onClick={() => userDetails(data)}>
                        {data.user_image != "" ?
                          <img width="60px" height="60px" src={data.user_image} style={{ borderRadius: "15px" }}></img> :
                          <img src={defaultuserprofilepicture} width="60px" height="60px" style={{ borderRadius: "15px" }}></img>
                        }
                        <div className='d-flex flex-column'>
                          <spam className="user_name mx-50 ps-25">{data.full_name}</spam>
                        </div>
                      </div>)
                  })}
                </div>
              }

              {(inactiveUsersList.length == 0) && (noResultFound == true) ?
                <div className="row pt-5 mt-5">
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <span className="user_name">No Data Found in the Current filter</span>
                  </div>
                </div>
                : null}
            </div>
          </div>
          <div className="my-1 col-12">
            <div style={{ display: exports === true ? '' : 'none' }} >
              <div class="popover  " placement='top' target='pops' style={{
                marginLeft: "-1px !important",
                position: "absolute",
                right: "62px",
                bottom: "66px"
              }}>
                <div >
                  <div className="card d-flex flex-column" style={{
                    border: "2px solid #95E1BF",
                    borderRadius: "15px",
                    width: "94%",
                    marginLeft: "40px"
                  }}>
                    <div class="col-12 d-flex justify-content-center align-items-center">
                      {/* <button class="csvbutton">CSV</button> */}
                      <button class="csvbutton" onClick={popoversss}>CSV</button>

                    </div>
                    <div class="col-12 d-flex justify-content-center align-items-center">
                      <button class="excelbutton">Excel</button></div>
                    <div class="col-12 d-flex justify-content-center align-items-center">
                      <button class="csvbutton">PDF</button></div>
                  </div>
                </div>

              </div>
            </div>
            <button onClick={handleClose} className=' closebuttonuser ms-3 col-5' style={{ width: "40%" }}>Close</button>
            <span className='col-1'></span>

            <button className=' Exportbuttonuser me-3' onClick={handleExport} id='pops' style={{ width: "40%" }} disabled="true">Export as</button>

          </div>


        </Modal.Body>
        <Modal.Body className="" style={{ display: changeval === true ? '' : 'none' }}>
          <div className="col-12 d-flex justify-content-center  imgbg  ">
            <img className="mt-4 mb-2 ml-2 mr-2 csv-img" src={CSV}></img>
          </div>

          <div className="col-12 d-flex justify-content-center my-4">
            <h1 className="csvpop my-2">The analytics report has been exported as CSV.<br></br> Please check your mail.</h1>
          </div>

          <div className='text-center '>
            <button className=' closebuttoncsv' onClick={handleClose}>Close</button>
          </div>
        </Modal.Body>
      </Modal>
    </>

  )
}


const mapStateToProps = (state) => {
  return {
    getInactiveUsersListData: state.getInactiveUsersListData,
  }
}

export default connect(mapStateToProps, {})(ViewInactiveUsers)
