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




function Invitecoderegistration(props) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [value, onChange] = useState('')
  const [exports, setexport] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [valueset, setval] = useState([])
  const [getcustom, setcustom] = useState(false)
  const [mom, setmom] = useState('')
  const [setid, getid] = useState('')
  const [started, setstart] = useState(false)
  const view_users = useSelector((state) => state.admin_analytics_viewactiveusers_data)
  const authStat_getUsersListofInviteCodeReg = useSelector((state) => state.getUsersListofInvitedCodeRegData)
  const [showCalendardetail, setShowCalendardetail] = useState(false)
  const navigate = useNavigate()
  const [valinvite, setvalinvite] = useState([
    { id: "1", name: "Justin Rosser", img: user1, register: "46 registrations" },
    { id: "2", name: "Amy Delacruz", img: user2, register: "38 registrations" },
    { id: "3", name: "Alex Hardy", img: user3, register: "32 registrations" },
    { id: "4", name: "Steven Smith", img: user4, register: "32 registrations" },
    { id: "5", name: "Giana Bergson", img: user5, register: "31 registrations" },
    { id: "7", name: "Ayisha Baker", img: user6, register: "31 registrations" },
    { id: "8", name: "Justin Rosser", img: user1, register: "30 registrations" },
    { id: "9", name: "Ashley Bern", img: user7, register: "29 registrations" },
    { id: "10", name: "Alex Hardy", img: user3, register: "29 registrations" },
    { id: "11", name: "Alex Hardy", img: user3, register: "28 registrations" }

  ])

  const handleClose = () => {
    setShow(false)
    setexport(false)
  }
  const [searchValue, setSearchValue] = useState("")
  const [filtershow, filterhide] = useState(false)
  const [changeval, setchangeval] = useState(false)
  const handleShow = () => {
    //
    const payload = {
      user_id: localStorage.getItem('loggedIn_userId'),
      type: "1",
      user_type: "1",
      datetime1: "",
      datetime2: ""
    }
    dispatch(admin_analytics_viewactiveuser_APIcall(payload))
    setShow(true)
    setchangeval(false)
    filterhide(false)
  }


  useEffect(() => {
    setstart(true)
    if (view_users !== undefined) {
      if (view_users.admin_analytics_view_userslisting.responseCode === 200) {

        setval(view_users.admin_analytics_view_userslisting.responseBody)
        setstart(false)
        console.log(view_users.admin_analytics_view_userslisting.responseBody)
      } else if (view_users.admin_analytics_view_userslisting.responseCode === 201) {
        setval([])
        setstart(false)
      }
    }
  }, [view_users.admin_analytics_view_userslisting])
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
  const [json, setjson] = useState([
    { id: "0", name: "Current", checked: false },
    { id: "4", name: "Last 90 Days", checked: false },
    { id: "1", name: "Last Day", checked: false },
    { id: "5", name: "Last 180 Days", checked: false },
    { id: "2", name: "Last 7 Days", checked: false },
    { id: "6", name: "Last Year", checked: false },
    { id: "3", name: "Last 30 Days", checked: false },
    { id: "7", name: "Lifetime", checked: false },
    { id: "8", name: "Custom", checked: false }
  ])
  const popovers = () => {
    const filters = [...json]
    const val = filters.filter(res => res.checked === true)
    getid(val[0].id)
    //
    const payload = {
      user_id: localStorage.getItem('loggedIn_userId'),
      type: val[0].id,
      datetime1: value,
      datetime2: mom
    }
    dispatch(admin_analytics_viewactiveuser_APIcall(payload))
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
    setmom('')
    onChange('')
  }
  const checktrigger = (item) => {
    const newTags = [...json]
    //
    if (item.id === '8' && item.checked === false) {

      setcustom(true)
    } else {
      setcustom(false)
    }
    for (let i = 0; i < newTags.length; i++) {
      //

      if (item.id === newTags[i].id && newTags[i].checked === false) {


        newTags[i].checked = true
      } else {

        newTags[i].checked = false
      }
    }
    setjson(newTags)

  }

  const userDetails = (values) => {
    const data = { userId: values.user_id, userName: values.full_name }
    navigate('/admin/users', { state: data })
  }

  const activeUserDetails = (values) => {
    

    const data = { userId: values.user_id }
    navigate('/admin/users', { state: data })
  }

  return (
    <>

      <div className="col-11 mx-75 mb-1" style={{ display: props.data === 'active' ? '' : 'none' }}>


        <button className="btnss" onClick={handleShow}><span className="txtt_alignss" style={{ cursor: "pointer" }}>View Active Users</span></button>
      </div>
      {/* <button className="invite-code" onClick={handleShow}><span className="invite-number">120</span><spam style={{marginLeft:"100px"}}>Users with invite code registration</spam><img src={rightarrow} style={{marginLeft:"30px"}}></img></button>  */}
      <button style={{ display: props.data === 'coderegistration' ? '' : 'none' }} className="w-100 outline_but" onClick={handleShow} >
        <div className="row">
          <div className="col-2">
            <span className="big_txt">{props.usersListofInvitedCodeReg?.length}</span>
          </div>
          <div className="col-8 d-flex justify-content-end  align-items-center" style={{ position: "relative", left: "12px" }} >
            <span className="small_txy">Users with Invite Code Registrations</span></div>
          <div className="col-2 d-flex justify-content-end align-items-center"  >

            <img src={left} width="10px" height="15px"></img>
          </div>
        </div>
      </button>
      <button style={{ display: props.data === 'viewblock' ? '' : 'none' }} onClick={handleShow} className="btnss"><span className="txtt_alignss">View Blocked Users</span></button>

      <Modal classname="ajai"
        show={show}
        onHide={() => setShow(false)}
        centered
        // size='lg'
        dialogClassName="flx"


      >

        <Modal.Body className="" style={{ display: changeval === false ? '' : 'none' }}>
          <div style={{ display: started !== false ? '' : 'none' }}>
            <div className='enable-loader1'>

              <img src={load} width="80px" height="80px"></img>
            </div>
          </div>
          <div className="p-1 ">
            <span className="active-user" style={{ display: props.data === 'coderegistration' ? '' : 'none' }}>Invite Code Registration</span>
            <span className="active-user ms-1" style={{ display: props.data === 'viewblock' ? '' : 'none' }}>Blocked Users</span>
            <span className="active-user ms-1" style={{ display: props.data === 'active' ? '' : 'none' }}>Active Users</span>

            <button className="filterbutton" style={{ display: props.data === 'coderegistration' ? '' : 'none' }} ><img src={filter} style={{ marginRight: "10px" }}></img>Filter by<img src={filterdown} width="12px" height="8px" className="filterdown"></img></button>
            <button className="filterbutton" style={{ display: props.data === 'active' || props.data === 'viewblock' ? '' : 'none' }} onClick={click_filter} id="poppval"><img src={filter} style={{ marginRight: "10px" }}></img>Filter by<img src={filtershow === false ? filterdown : filterup} width="12px" height="8px" className="filterdown"></img></button>
            <div className="row" style={{ display: filtershow === true ? 'flex' : 'none' }}>

              <div placement='bottom' target='active' className="col-7 " style={{ position: "absolute", marginLeft: "180px", marginTop: "20px" }} >
                <div className='card p-2 d-block' style={{ border: "1px solid  #95E1BF", borderRadius: "2px" }}>
                  <div className="d-flex justify-content-between">
                    <span className='filter_by'>Filter by Date</span>
                    <span className='clear_filter' onClick={clearfilter}>Clear Filters</span>
                  </div>
                  <div className="row">
                    {json.map((val, index) => {
                      return (
                        <div className="col-6 mt-2 d-flex align-items-center" >
                          <img src={val.checked === false ? checkbox : checkedbox} onClick={() => checktrigger(val)} width="20px" height="20px" className="me-50" ></img>
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
                          onChange={onChange} value={value} />
                      </div>

                    </div>
                    <div className='col-12  mt-2'>
                      <span className='start_date'>End Date</span>
                    </div>
                    <div className='col-12  mt-50'>
                      <div className='formControl d-flex justify-content-flex-end align-items-center'>
                        <input className={`form_box ${mom === '' ? "sponshorship_text_placeholder" : ""}`} value={mom !== '' ? moment(mom).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                        <img src={calendar} width="34px" height="34px" onClick={changes}></img>

                      </div>
                      <div>
                        <Calendar className={showCalendardetail ? "" : "hide"}
                          onChange={setmom} value={mom} />
                      </div>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-center mt-3 mb-1'>
                    <button className='btn-applyy ' onClick={popovers} >
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
            <div className="overflow overflow_scroll" id="style-2" style={{ display: props.data !== 'coderegistration' ? '' : 'none' }}>
              <div className="container ">
                <div className="row ">
                  {valueset.filter(items => items.full_name?.match(new RegExp(searchValue, "i"))).map((val, index) => {
                    return (
                      <div className="col-6 active_user_img mb-2" onClick={() => activeUserDetails(val)}>
                        <img src={val.user_image != "" ? val.user_image : defaultuserprofilepicture} width="70px" height="70px" style={{ borderRadius: "10px" }}></img>
                        <spam className="user_name mx-1">{val.full_name}</spam>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* users list of invited code registrations section */}

            <div className="overflow overflow_scroll" id="style-2" style={{ display: props.data === 'coderegistration' ? '' : 'none' }}>
              <div className="container ">
                <div className="row ">
                  {props.usersListofInvitedCodeReg?.filter(items => items.full_name.match(new RegExp(searchValue, "i"))).map((data, index) => {
                    return (
                      <div className="col-6 active_user_img mb-2 " onClick={() => userDetails(data)}>
                        {data.image_url != "" ?
                          <img width="60px" height="60px" src={data.image_url} style={{ borderRadius: "15px" }}></img> :
                          <img src={defaultuserprofilepicture} width="60px" height="60px" style={{ borderRadius: "15px" }}></img>
                        }
                        <div className='d-flex flex-column'>
                          <spam className="user_name mx-50">{data.full_name}</spam>
                          {/* <spam className="user_name mx-50">{data.user_id}</spam> */}
                          <spam className="flex_det  mx-50">{data.registration_length}</spam>

                        </div>
                      </div>
                    )
                  }
                  )
                  }
                  {props.usersListofInvitedCodeReg?.length == 0 ?
                    <div className="d-flex align-items-center justify-content-center">
                      <span>No Data Found</span>
                    </div> : null}
                </div>
              </div>
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


export default Invitecoderegistration