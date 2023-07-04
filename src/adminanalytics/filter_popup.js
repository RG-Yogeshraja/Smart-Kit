import React, { Fragment, useState, useEffect } from 'react'
import checkbox from '@src/assets/images/dashboardimg/fieldbox.png'
import checked from '@src/assets/images/dashboardimg/checktickbox.png'
import calendar from '@src/assets/images/dashboardimg/CalendarButton.png'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import sortval from '@src/assets/images/dashboardimg/Sortables.png'
import moment from 'moment'
import * as Icon from 'react-feather'
import load from '../assets/images/dashboardimg/loadersimg.gif'
import { Button, Popover, PopoverHeader, PopoverBody, UncontrolledPopover } from 'reactstrap'
import checkedbox from '../assets/images/dashboardimg/checktickbox.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import { admin_analytics_filter_value_APICall } from './slice-adminanalytics/filteradmin-getsplice'
import { admin_analytics_Childfilter_value_APICall } from './slice-adminanalytics/filteradmin-getsplice'
import { analyticsParentFilter_APIcall, analyticsParentFilter_payloadDataPass } from "../adminanalytics/slice-adminanalytics/slice-parentFilter"
import '../@core/scss/base/adminDashboard/custom_scrollbar.css'
import { Surface } from 'recharts'
import { clearChildFilterData } from './slice-adminanalytics/slice-childFilter'
// import { clearChildFilterData } from './slice-adminanalytics/slice-childFilter'


const Global_Popup = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const ref = React.useRef(null)
  const dispatch = useDispatch()
  const [icon, seticon] = useState(false)
  const auths = useSelector((state) => state.admin_analytics_filter_global)
  const authStat_parentFilterData = useSelector((state) => state.analyticsParentFilterData)
  const [showCalendardetail, setShowCalendardetail] = useState(false)
  const [LastninetyDays, setLastninetyDays] = useState(false)
  const [LastDay, setLastDay] = useState(false)
  const [Last180Day, setLast180Day] = useState(false)
  const [Last7Days, setLast7Days] = useState(false)
  const [Last30Days, setLast30Days] = useState(false)
  const [LastYear, setLastYear] = useState(false)
  const [Lifetime, setLifetime] = useState(false)
  const [Custom] = useState(false)
  const [getvalue, setvalues] = useState([])
  const [started, getstarted] = useState(false)
  const [getcustom, setcustom] = useState(false)
  const [fromDatePick, setFromDatePick] = useState('')
  const [showCalendar, setShowCalendar] = useState(false)
  const [endDatePick, setEndDatePick] = useState('')
  const [filtershow, filterhide] = useState(false)


  const [json, setjson] = useState([
    { id: "0", name: "Current", checked: false },
    { id: "4", name: "Last 90 Days", checked: false },
    { id: "1", name: "Last Day", checked: false },
    { id: "5", name: "Last 180 Days", checked: false },
    { id: "2", name: "Last 7 Days", checked: true },
    { id: "6", name: "Last Year", checked: false },
    { id: "3", name: "Last 30 Days", checked: false },
    { id: "7", name: "Lifetime", checked: false },
    { id: "8", name: "Custom", checked: false }
  ])

  const clearfilter = () => {
    setjson([
      { id: "0", name: "Current", checked: false },
      { id: "4", name: "Last 90 Days", checked: false },
      { id: "1", name: "Last Day", checked: false },
      { id: "5", name: "Last 180 Days", checked: false },
      { id: "2", name: "Last 7 Days", checked: false },
      { id: "6", name: "Last Year", checked: false },
      { id: "4", name: "Last 30 Days", checked: false },
      { id: "7", name: "Lifetime", checked: false },
      { id: "8", name: "Custom", checked: false }
    ])
    setEndDatePick('')
    setFromDatePick('')
  }

  const ParentFilterDialogOpen = () => {
    console.log("ParentFilterDialogOpen")
    if (icon === false) {
      seticon(true)
    } else {
      seticon(false)
    }
  }

  useEffect(() => {
    if (props.data !== '/admin/Analytics') {
      setPopoverOpen(false)
      seticon(false)
    }
    const defaultFilter = [
      { id: "0", name: "Current", checked: false },
      { id: "4", name: "Last 90 Days", checked: false },
      { id: "1", name: "Last Day", checked: false },
      { id: "5", name: "Last 180 Days", checked: false },
      { id: "2", name: "Last 7 Days", checked: true },
      { id: "6", name: "Last Year", checked: false },
      { id: "3", name: "Last 30 Days", checked: false },
      { id: "7", name: "Lifetime", checked: false },
      { id: "8", name: "Custom", checked: false }
    ]
    setjson(defaultFilter)
    setEndDatePick('')
    setFromDatePick('')
  }, [props.data])

  useEffect(() => {
    setcustom(false)
  }, [])

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
    
    console.log(getvalue)
    const filters = [...json]
    const val = filters.filter(res => res.checked === true)
    const startDatePickValue = []
    const endDatePickValue = []
    const previousStartDateTime = []
    const previousEndDateTime = []

    if (fromDatePick != "") {
      console.log(fromDatePick)
      const startDate = fromDatePick
      startDate.setHours('00')
      startDate.setMinutes('00')
      startDate.setSeconds(10)
      const setTimeResult = new Date(startDate)
      const utcConversion = new Date(setTimeResult).toUTCString()
      var dateObject = new Date(utcConversion)
      var formattedDate = dateObject.toISOString().slice(0, 10)
      const splitTime = utcConversion.slice(17, 25)
      const startDateResult = formattedDate + 'T' + splitTime + '.000Z'
      startDatePickValue.push(startDateResult)
    }

    if (endDatePick != "") {
      console.log(endDatePick)
      const endDate = endDatePick
      endDate.setHours('23')
      endDate.setMinutes('59')
      endDate.setSeconds(59)
      const setTimeResult = new Date(endDate)
      const utcConversion = new Date(setTimeResult).toUTCString()
      var dateObject = new Date(utcConversion)
      var formattedDate = dateObject.toISOString().slice(0, 10)
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
    if ((val[0].name != 'Current') && (val[0].name != 'Last Day')) {
      const payload = {
        admin_id: localStorage.getItem('loggedIn_userId'),
        sort_by_date: val[0].name == "Custom" ? "Custom" : val[0].name,
        start_date: startDatePickValue[0] == undefined ? "" : startDatePickValue[0],
        end_date: endDatePickValue[0] == undefined ? "" : endDatePickValue[0]
      }
      dispatch(analyticsParentFilter_APIcall(payload))
      dispatch(analyticsParentFilter_payloadDataPass(payload))
      dispatch(clearChildFilterData())
    }
    else if (val[0].name === 'Current' || 'Last Day') {
      const payload = {
        admin_id: localStorage.getItem('loggedIn_userId'),
        sort_by_date: val[0].name == "Custom" ? "Custom" : val[0].name,
        start_date: previousStartDateTime[0],
        end_date: previousEndDateTime[0]
      }
      dispatch(analyticsParentFilter_APIcall(payload))
      dispatch(analyticsParentFilter_payloadDataPass(payload))
      
      dispatch(clearChildFilterData())
    }
    filterhide(false)
    seticon(false)
  }

  useEffect(() => {
    if (authStat_parentFilterData.data.responseCode == 200 && authStat_parentFilterData.data.responseBody != undefined) {
      setPopoverOpen(false)
      // dispatch(clearChildFilterData())
    }
    else {
      setPopoverOpen(false)
    }
  }, [authStat_parentFilterData])

  const valueclick = () => {
    if (showCalendar === false) {
      setShowCalendar(true)
    } else {
      setShowCalendar(false)
    }
  }

  const changes = () => {
    if (showCalendardetail === false) {
      setShowCalendardetail(true)
    } else {
      setShowCalendardetail(false)
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
      setFromDatePick('')
      setEndDatePick('')
    }

    for (let i = 0; i < newTags.length; i++) {
      if (newTags[i].name === name && newTags[i].checked === false) {
        newTags[i].checked = true
      }
      else if (newTags[i].checked === true) {
        if (newTags[i].name != name) {
          newTags[i].checked = false
        }
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


  return (
    <React.Fragment>
      <button onClick={ParentFilterDialogOpen} className='buttonalign p-1 d-flex align-items-center' id="uncontrolledPopover">
        <img width="18px" height="16px" src={sortval}></img> &nbsp;&nbsp;
        <span className="filteralign">Filter By</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Icon.ChevronDown className='filteralign' style={{ display: icon === true ? 'none' : 'block' }}>
        </Icon.ChevronDown><Icon.ChevronUp className='filteralign' style={{ display: icon === false ? 'none' : 'block' }}></Icon.ChevronUp>
      </button>
      <Popover isOpen={popoverOpen} placement='bottom' target="uncontrolledPopover" toggle={() => setPopoverOpen(!popoverOpen)}>

        <div style={{ display: started !== false ? '' : 'none' }}>
          <div className='enable-loader1'>

            <img src={load} width="80px" height="80px"></img>
          </div>
        </div>


        <div style={{ display: props.data === '/admin/Analytics' ? 'flex' : 'none' }}>
          <div className='p-1 card d-flex flex-column testval' style={{
            width: "380px",
            marginTop: "20px",
            // height: "520px",
            marginLeft: "-109px",
            border: "2px solid #95E1BF",
            overflow: 'scroll',
            borderRadius: "15px"
          }}>
            <div className="analyticsParentFilter_scrollbar mt-2" id="style-2">
              <div className="row">
                <div className='d-flex justify-content-between align-items-center ' >
                  <span className='filtertext'>Sort By Date</span>
                  {/* <span className='smalls' onClick={clearfilter} style={{ cursor: "pointer" }}>Clear Filter</span> */}
                </div>
                {/* <div className='col-12  mt-2'>
              <img src={social === true ? checked : checkbox} width="25px" height="25px" onClick={socialgroup}></img>&nbsp;&nbsp;<span className="val">Hint Social Admin Activity Only</span>
            </div>
            <div className='col-12  mt-2'>
              <img src={Extension === true ? checked : checkbox} width="25px" height="25px" onClick={extensiongroup}></img>&nbsp;&nbsp;<span className="val">Exclude Hint Social Admin Activity</span>
            </div> */}

                {/* <div className='col-12  mt-2'>
              <span className='filtertext'>Filter Groups By</span>
            </div>
            <div className='col-12 d-flex flex-row align-items-center mt-2'>
              <img src={publicgroup === true ? checked : checkbox} width="25px" height="25px" onClick={publicfilter}></img>&nbsp;&nbsp;<span className="val ">Public</span></div>
            <div className='col-12 d-flex flex-row align-items-center mt-2'>
              <img src={privategroup === true ? checked : checkbox} width="25px" height="25px" onClick={privatefilter}></img>&nbsp;&nbsp;<span className="val">Private</span>
            </div> */}

                {/* <div className='col-12  mt-2'>
              <span className='filtertext'>Filter Events By</span>
            </div>
            <div className='row mt-2'>
              <div className='col-6'>
                <img src={publicevent === true ? checked : checkbox} width="25px" height="25px" onClick={publicevents}></img>&nbsp;&nbsp;<span className="val">Public</span>

              </div>
              <div className='col-6'>
                <img src={privateevent === true ? checked : checkbox} width="25px" height="25px" onClick={privateevents}></img>&nbsp;&nbsp;<span className="val">Open</span>

              </div>
            </div> */}
                {/* <div className='row mt-2'>
               <div className='col-6'>
                <img src={openevent === true ? checked : checkbox} width="25px" height="25px" onClick={openevents}></img>&nbsp;&nbsp;<span className="val">Private</span>

              </div>
              <div className='col-6'>
                <img src={limitedevent === true ? checked : checkbox} width="25px" height="25px" onClick={limittedevents}></img>&nbsp;&nbsp;<span className="val">Limited Spots</span>
              </div> 
              <div className='col-12  mt-2'>
                <span className='filtertext'>Sort By Date</span>
              </div> 
              <div className='row mt-2'>
                <div className='col-6'>
                  <img src={current === true ? checked : checkbox} width="25px" height="25px" onClick={currentevents}></img>&nbsp;&nbsp;<span className="val">Current</span>

                </div>
                <div className='col-6'>
                  <img src={LastninetyDays === true ? checked : checkbox} width="25px" height="25px" onClick={LastninetyDaysevents}></img>&nbsp;&nbsp;<span className="val">Last 90 Days</span>

                </div>
              </div>
              <div className='row mt-2'>
                <div className='col-6'>
                  <img src={LastDay === true ? checked : checkbox} width="25px" height="25px" onClick={LastDayevents}></img>&nbsp;&nbsp;<span className="val">Last Day</span>

                </div>
                <div className='col-6'>
                  <img src={Last180Day === true ? checked : checkbox} width="25px" height="25px" onClick={Last180Dayevents}></img>&nbsp;&nbsp;<span className="val">Last 180 Days</span>

                </div>
              </div>
              <div className='row mt-2'>
                <div className='col-6'>
                  <img src={Last7Days === true ? checked : checkbox} width="25px" height="25px" onClick={Last7Daysevents}></img>&nbsp;&nbsp;<span className="val">Last 7 Days</span>

                </div>
                <div className='col-6'>
                  <img src={LastYear === true ? checked : checkbox} width="25px" height="25px" onClick={LastYearevents}></img>&nbsp;&nbsp;<span className="val">Last Year</span>

                </div>
              </div>
              <div className='row mt-2'>
                <div className='col-6'>
                  <img src={Last30Days === true ? checked : checkbox} width="25px" height="25px" onClick={Last30Daysevents}></img>&nbsp;&nbsp;<span className="val">Last 30 Days</span>

                </div>
                <div className='col-6'>
                  <img src={Lifetime === true ? checked : checkbox} width="25px" height="25px" onClick={Lifetimeevents}></img>&nbsp;&nbsp;<span className="val">Lifetime</span>

                </div>
              </div>
              <div className='col-12  mt-2'>
                <img src={Custom === true ? checked : checkbox} width="25px" height="25px" onClick={customevents}></img>&nbsp;&nbsp;<span className="val">Custom</span>
              </div>
              <div className='col-12  mt-2'>
                <span className='start_date'>Start Date</span>
              </div>
              <div className='col-12  mt-50'>
                <div className='formControl d-flex justify-content-flex-end align-items-center'>
                  <input className='form_box' value={moment(value).format("MM/DD/YYYY")}></input>
                  <img src={calendar} width="34px" height="34px" onClick={valueclick}></img>

                </div>
                <div>
                  <Calendar className={showCalendar ? "" : "hide"}
                    onChange={onChange} value={value} />
                </div>

              </div>
              <div className='col-12  mt-2'>
                <span className='start_date'>End Date</span>
              </div>
              <div className='col-12  mt-50'>
                <div className='formControl d-flex justify-content-flex-end align-items-center'>
                  <input className='form_box' value={moment(endDatePick).format("MM/DD/YYYY")}></input>
                  <img src={calendar} width="34px" height="34px" onClick={changes}></img>

                </div>
                <div>
                  <Calendar className={showCalendardetail ? "" : "hide"}
                    onChange={setEndDatePick} value={endDatePick} />
                </div>

              </div>
            </div> */}


                <div className="row">
                  {json.map((val, index) => {
                    return (
                      <div className="col-6 mt-2 d-flex align-items-center" >
                        <img src={val.checked === false ? checkbox : checkedbox} onClick={() => checktrigger(val, val.name)} width="20px" height="20px" className="me-50" ></img><span className="small_texted">{val.name}</span>
                      </div>)
                  }
                  )}
                </div>

                <div style={{ display: getcustom === true ? '' : 'none' }}>
                  <div className='col-12  mt-2'>
                    <span className='start_date'>Start Date</span>
                  </div>
                  <div className='col-11  mt-50'>
                    <div className='formControl d-flex justify-content-flex-end align-items-center'>
                      <input className={`form_box ${fromDatePick === '' ? "sponshorship_text_placeholder" : ''}`} value={fromDatePick !== '' ? moment(fromDatePick).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                      <img src={calendar} width="34px" height="34px" onClick={valueclick}></img>

                    </div>
                    <div>
                      <Calendar className={showCalendar ? "" : "hide"}
                        onChange={setFromDatePick} value={fromDatePick} />
                    </div>

                  </div>
                  <div className='col-12  mt-2'>
                    <span className='start_date'>End Date</span>
                  </div>
                  <div className='col-11 mt-50'>
                    <div className='formControl d-flex justify-content-flex-end align-items-center'>
                      <input className={`form_box ${endDatePick === '' ? "sponshorship_text_placeholder" : ""}`} value={endDatePick !== '' ? moment(endDatePick).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                      <img src={calendar} width="34px" height="34px" onClick={changes}></img>

                    </div>
                    <div>
                      <Calendar className={showCalendardetail ? "" : "hide"}
                        onChange={setEndDatePick} value={endDatePick} />
                    </div>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-center mt-2 mb-1'>
                  <button className='btn-applyy ' onClick={applyFilter} >
                    <span className='font-applyy'>Apply</span>
                  </button>
                </div>

                {/* <div className='col-12 mt-1 d-flex justify-content-center'>
              <button className='col-5 btn_values w-50 p-2 mb-4' onClick={popoversss}><span className='font_details'>Apply</span></button>
            </div> */}
              </div>
            </div>
          </div>
        </div>


      </Popover>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    analyticsParentFilterData: state.analyticsParentFilterData
  }
}

export default connect(mapStateToProps, {})(Global_Popup)