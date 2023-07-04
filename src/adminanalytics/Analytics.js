import React, { useState, useEffect } from "react"
import '../@core/scss/base/adminDashboard/analyticsmenu/analytics.scss'
import sort from '../assets/images/dashboardimg/SortBy.png'
import deletes from '../assets/images/dashboardimg/close-circle.png'
import { Button, Popover, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import ShowOthers from './seeotheranswerspopup'
import { Dropdown } from 'react-bootstrap'
import Exportcsv from "./Exportcsv"
import Activeusers from "./Activeusers"
import Blockedusers from "./Blockedusers"
import Invitecoderegistration from "./Invitecoderegistration"
import { I18nContext } from "react-i18next"
import { ChevronDown } from "react-feather"
import Dialogs1 from "./popovers"
import Analytics_graph from './comparisionAnalytics'
import load from '../assets/images/dashboardimg/loadersimg.gif'
import AnswerGenerated from "./answergenerated"
import SponsershipAnalytics from "./sponsershipAnalytics"
import Filterpopup from "../adminusers/filterpopup"
import { admin_analytics_getactiveuser_APIcall } from './slice-adminanalytics/getactiveuserdetails-splice'
import { connect, useDispatch, useSelector } from 'react-redux'
import '../@core/scss/base/adminDashboard/adminmenu/adminusersdetail.css'
import Global_Popup from "./filter_popup"
import { admin_analytics_filter_value_APICall } from "./slice-adminanalytics/filteradmin-getsplice"
import AnalyticsChildFilterDialog from "./analyticsChildFilter"
import { analyticsParentFilter_APIcall, analyticsParentFilter_payloadDataPass } from "./slice-adminanalytics/slice-parentFilter"

const Analytics = () => {
  const authStat_filterByDateData = useSelector((state) => state.admin_analytics_filter_global)
  const authStat_parentFilterData = useSelector((state) => state.analyticsParentFilterData)
  const authStat_childFilterData = useSelector((state) => state.analyticsChildFilterData)
  const dispatch = useDispatch()
  const [started, getstarted] = useState(false)
  const [val, setval] = useState(true)
  const [min, setmin] = useState("")
  const [max, setmax] = useState("")
  const [gender, setgender] = useState("")
  const [loooks, setlooks] = useState("")
  const [defaultFilterCall, setDefaultFilterCall] = useState(true)
  const [registeredUsers, registereddetails] = useState("")
  const [dailyactuser, setdailyactusers] = useState("")
  const [monthly_active_users, setmonthusers] = useState("")
  const [registered_user_growth, registered_user_growths_val] = useState(0)
  console.log(min)

  const sendData = (data) => {
    console.log(data)
    setmax(data.maxval)
    setmin(data.minval)
    console.log(min)

    if (data.gend !== '') {
      setgender(data.gend[0].naming)
    }
    if (data.looks !== '') {
      setlooks(data.looks[0].naming)
    }
  }

  const removeage = (data) => {
    setmin("")
  }
  const removegender = (data) => {
    setgender("")
  }
  const removelooks = (data) => {
    setlooks("")
  }

  useEffect(() => {
    getstarted(true)
    if (defaultFilterCall == true) {
      getstarted(true)
      const payload = {
        admin_id: localStorage.getItem('loggedIn_userId'),
        sort_by_date: "Last 7 Days",
        start_date: "",
        end_date: ""
      }
      dispatch(analyticsParentFilter_APIcall(payload))
      dispatch(analyticsParentFilter_payloadDataPass(payload))
      setDefaultFilterCall(false)
    }
  }, [])

  useEffect(() => {
    getstarted(true)
  }, [authStat_parentFilterData.parentFilterPayload])

  useEffect(() => {
    if (authStat_parentFilterData.data.responseBody != undefined && authStat_parentFilterData.data.responseCode == 200) {
      registereddetails(authStat_parentFilterData.data.responseBody.registered_users)
      registered_user_growths_val(authStat_parentFilterData.data.responseBody.registered_user_growth.toFixed(2))
      setdailyactusers(authStat_parentFilterData.data.responseBody.daily_active_users)
      setmonthusers(authStat_parentFilterData.data.responseBody.monthly_active_users)
      getstarted(false)
    }
    else {
      registereddetails('0')
      registered_user_growths_val('0')
      setdailyactusers('0')
      setmonthusers('0')
      getstarted(false)
    }
  }, [authStat_parentFilterData.data])


  useEffect(() => {
    if (authStat_childFilterData.data.responseBody != undefined && authStat_childFilterData.data.responseCode == 200) {
      registereddetails(authStat_childFilterData.data.responseBody.registered_users)
      registered_user_growths_val(authStat_childFilterData.data.responseBody.registered_user_growth.toFixed(2))
      setdailyactusers(authStat_childFilterData.data.responseBody.daily_active_users)
      setmonthusers(authStat_childFilterData.data.responseBody.monthly_active_users)
      getstarted(false)
    }
    else {
      registereddetails('')
      registered_user_growths_val('')
      setdailyactusers('')
      setmonthusers('')
      getstarted(false)
    }
  }, [authStat_childFilterData.data])

  useEffect(() => {
    debugger
    if (authStat_childFilterData.childFilterPayload != undefined) {
      // getstarted(true)
    }
  }, [authStat_childFilterData.childFilterPayload])


  return (
    <React.Fragment>
      {/* <Global_Popup></Global_Popup> */}
      <div style={{ display: started !== false ? '' : 'none' }}>
        <div className='enable-loader1'>
          <img src={load} width="80px" height="80px"></img>
        </div>
      </div>
      <div class='col-12 d-flex justify-content-between '>
        <span class="analyticsfontstyle">Analytics & Performance</span>
        <Dialogs1></Dialogs1>
      </div>
      <div className=" d-flex mt-25">
        <AnalyticsChildFilterDialog data={val} sendData={sendData}></AnalyticsChildFilterDialog>

        {/* <Filterpopup data={val} sendData={sendData}></Filterpopup> &nbsp;&nbsp;&nbsp; */}
        <button className={`bts btn_filters ${min != '' ? 'display' : 'displays'}`} onClick={() => changeShow(true)}>
          <span style={{ fontWeight: "500" }} className="bolders"><span className="bolders" style={{ fontWeight: "600" }}>Age:</span>{min} - {max} </span>&nbsp;&nbsp;&nbsp;<img width="20px" height="20px" onClick={removeage} src={deletes}></img>

        </button> &nbsp;&nbsp;&nbsp;
        <button className={`bts btn_filters ${gender != '' ? 'display' : 'displays'}`} onClick={() => changeShow(true)}>
          <span style={{ fontWeight: "500" }} className="bolders"><span style={{ fontWeight: "600" }}>Gender:</span>{gender} </span>&nbsp;&nbsp;&nbsp;<img width="20px" height="20px" src={deletes} onClick={removegender}></img>

        </button> &nbsp;&nbsp;&nbsp;
        <button className={`bts btn_filters ${loooks != '' ? 'display' : 'displays'}`} onClick={() => changeShow(true)}>
          <span style={{ fontWeight: "500" }} className="bolders"><span className="bolders" style={{ fontWeight: "600" }}>RelationShips:</span>{loooks} </span>&nbsp;&nbsp;&nbsp;<img width="20px" height="20px" src={deletes} onClick={removelooks}></img>
        </button>
      </div>

      <div class="row mt-1 ">
        <div class="col-lg-3 col-md-3 col-sm-5 col-xs-5 ">
          <div class="card paddings ">
            <div className="col-12 background d-flex justify-content-center align-center">
              <span className="an_font_style ">{registeredUsers}</span></div>
            <div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="font_styles_header">Registered Users</span></div>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-5 col-xs-5">
          <div class="card paddings">
            <div className="col-12 background d-flex justify-content-center align-center ">
              <span className="an_font_style ">{registered_user_growth}%</span></div>
            <div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="font_styles_text">Registered<br></br>
              User Growth</span></div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-5 col-xs-5">
          <div class="card paddings">
            <div className="col-12 background d-flex justify-content-center align-center">
              <span className="an_font_style ">{dailyactuser}</span></div>
            <div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="font_styles_text">Daily Active<br></br> Users</span></div>
          </div></div>

        <div class="col-lg-3 col-md-3 col-sm-5 col-xs-5">
          <div class="card paddings">
            <div className="col-12 background d-flex justify-content-center align-center">
              <span className="an_font_style ">{monthly_active_users}</span></div>
            <div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="font_styles_text">Monthly<br></br> Active Users</span></div>
          </div>
        </div>
      </div>

      <Analytics_graph></Analytics_graph>
      {/* <AnswerGenerated></AnswerGenerated>
<SponsershipAnalytics></SponsershipAnalytics> */}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    admin_analytics_filter_global: state.admin_analytics_filter_global,
    analyticsParentFilterData: state.analyticsParentFilterData,
    analyticsChildFilterData: state.analyticsChildFilterData
  }
}

export default connect(mapStateToProps, {})(Analytics)