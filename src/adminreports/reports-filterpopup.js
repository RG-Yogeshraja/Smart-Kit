import { UncontrolledPopover } from 'reactstrap'
import sortby from '../../src/assets/images/dashboardimg/sorts.png'
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown"
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp"
import React, { useState } from 'react'
import checktickboxes from '../../src/assets/images/dashboardimg/checktickbox.png';
import checkblankboxes from '../../src/assets/images/dashboardimg/checkblankbox.png';
import '../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import '../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
import '../../src/@core/scss/base/adminDashboard/reportsmenu/reportsmenu.scss'
import Calendar from "react-calendar"
import moment from 'moment'
import calendar from '@src/assets/images/dashboardimg/CalendarButton.png'



const Reportsfilterpopup = (props) => {
  const [show, setShow] = useState(true);
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [showLess, setshowLess] = useState(true);
  const [min, setmin] = useState('')
  const [gender, setgender] = useState('')
  const [look, setlooks] = useState('')
  const [max, setmax] = useState('')
  const [toDate, setToDate] = useState('')
  const [showCalendar, setShowCalendar] = useState(false)
  const [fromDate, setFromDate] = useState('')
  const [showCalendardetail, setShowCalendardetail] = useState(false)





  const checktoggle = () => {
    if (alldays === false) {
      setalldays(true)
    } else {
      setalldays(false)
    }

  }

  const changeShow = () => {
    setshowLess(!showLess);
    console.log(props.data)
  };

  const applyFilter = () => {
    setPopoverOpen(!popoverOpen)
    setshowLess(!showLess);
    console.log(min, max, gender, look)
    props.sendData({ minval: min, maxval: max, gend: gender, looks: look })
  }
  const choosegenders = (messages) => {
    setgender(messages)
    console.log(messages)
  }
  const chooselooks = (messages) => {
    setlooks(messages)
    console.log(messages)
  }
  const chooseMessage = (message) => {
    setmin(message.val)
    setmax(message.val1)
    console.log(message)
  };
  const [tags, setTags] = useState([
    { id: "1", naming: 'Inappropriate Behavior', checked: true },
    { id: "2", naming: 'Inappropriate Content', checked: false },
    { id: "1", naming: 'Fake/Spam/Scam Account', checked: false },
    { id: "2", naming: 'Spam/Scam Content', checked: true },
    { id: "1", naming: 'Offline Behavior', checked: false },
    { id: "2", naming: 'Someone Is In Danger', checked: false },
  ])

  const [tags1, setTags1] = useState([
    { id: "1", naming: 'Resolved', checked: true },
    { id: "2", naming: 'Unresolved', checked: false },
  ])

  const [tags2, setTags2] = useState([
    { id: "1", naming: 'Groups', checked: true },
    { id: "2", naming: 'Events', checked: false },
    { id: "1", naming: 'Posts', checked: false },
    { id: "2", naming: 'Users', checked: true },
    { id: "1", naming: 'Comments', checked: false },
    { id: "2", naming: 'Message', checked: false },
  ])

  const [tags3, setTags3] = useState([
    { id: "1", naming: 'Lifetime', checked: false },
    { id: "2", naming: 'Custom', checked: true },
  ])


  const handlechange = (index) => {
    const newTags = [...tags];
    if (newTags[index].checked === true) {
      newTags[index].checked = false
    }
    else {
      newTags[index].checked = true
    }
    setTags(newTags);
  };

  const handlechange1 = (index) => {
    const newTags1 = [...tags1];
    if (newTags1[index].checked === true) {
      newTags1[index].checked = false
    }
    else {
      newTags1[index].checked = true
    }
    setTags1(newTags1);
  };


  const handlechange2 = (index) => {
    const newTags2 = [...tags2];
    if (newTags2[index].checked === true) {
      newTags2[index].checked = false
    }
    else {
      newTags2[index].checked = true
    }
    setTags2(newTags2);
  };


  const handlechange3 = (index) => {
    const newTags3 = [...tags3];
    if (newTags3[index].checked === true) {
      newTags3[index].checked = false
    }
    else {
      newTags3[index].checked = true
    }
    setTags3(newTags3);
  };

  const pickFromDate = () => {

    if (showCalendar == false) {
      setShowCalendar(true)
    } else {
      setShowCalendar(false)
    }

  }

  const pickToDate = () => {
    if (showCalendardetail === false) {
      setShowCalendardetail(true)
    } else {
      setShowCalendardetail(false)
    }

  }

  return (
    <>
      <div>
        <button className='btn_filter d-flex flex-row justify-content-flex-start align-items-center' style={{ border: "1px solid  #95E1BF", borderRadius: "10px", cursor: 'pointer' }} onClick={() => changeShow(true)} id='popBottom'>
          <div className='col-10 d-flex justify-content-center'
          >
            <img src={sortby} width="18px" height="18px" /><span className='textalgn'>&nbsp;&nbsp;&nbsp;Filter By</span></div>
          <div className='col-1'>
            {showLess ? <div><IoIosArrowDown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><IoIosArrowUp style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}
            {/* <IoIosArrowDown style={{width:"22px",height:"22px",color:"#003B4A"}}/> */}
          </div>
        </button>&nbsp;&nbsp;&nbsp;
        <UncontrolledPopover isOpen={popoverOpen} toggle={() => setPopoverOpen(!popoverOpen)} placement='bottom' target='popBottom'   >
          <div className={`card p-2 d-block ${props.data == true ? 'width_size1' : 'width_size'}`} style={{ border: "1px solid  #95E1BF", borderRadius: "2px" }}>
            <div className='d-flex justify-content-between flex-row align-items-center  mb-3'>
              <span className='textspanbold30'>Filter By</span>
              <span className='sponsor-textspanbold10'>Clear Filters</span>
            </div>
            <div className='mb-2'>
              <span className='sponser-textspanbold4'>Reason</span>
            </div>
            <form className="row">
              {tags.map((items, index) => <div key={index} className="col-6">
                <div className='mb-2 d-flex align-items-center' >
                  <img onClick={() => { handlechange(index) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                  <span style={items.css} className='font-reporting col-9'>{items.naming} </span><br></br>
                </div>
              </div>)}
            </form>
            <hr className='mt-0' style={{ color: "#CCD8DB" }}></hr>

            <div className='mb-2'>
              <span className='sponser-textspanbold4'>Report Type</span>
            </div>
            <form className="row">
              {tags1.map((items, index) => <div key={index} className="col-6">
                <div className='mb-2 d-flex align-items-center' >
                  <img onClick={() => { handlechange1(index) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                  <span style={items.css} className='font-reporting col-9'>{items.naming} </span><br></br>
                </div>
              </div>)}
            </form>
            <hr className='mt-0' style={{ color: "#CCD8DB" }}></hr>

            <div className='mb-2'>
              <span className='sponser-textspanbold4'>Content Type</span>
            </div>
            <form className="row">
              {tags2.map((items, index) => <div key={index} className="col-6">
                <div className='mb-2 d-flex align-items-center' >
                  <img onClick={() => { handlechange2(index) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                  <span style={items.css} className='font-reporting col-9'>{items.naming} </span><br></br>
                </div>
              </div>)}
            </form>
            <hr className='mt-0' style={{ color: "#CCD8DB" }}></hr>

            <div className='mb-2'>
              <span className='sponser-textspanbold4'>Sort by</span>
            </div>
            <form className="row">
              {tags3.map((items, index) => <div key={index} className="col-6">
                <div className='mb-2 d-flex align-items-center' >
                  <img onClick={() => { handlechange3(index) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                  <span style={items.css} className='font-reporting col-9'>{items.naming} </span><br></br>
                </div>
              </div>)}
            </form>
{/* calender- choose From Date */}
            <div className="mt-50">
              <span className='textspanlight31'>Start Date</span>
              <div className='formControl calender1-section d-flex justify-content-flex-end align-items-center mt-50'>
                <input className={`form_box ${fromDate === '' ? "calender_text_placeholder" : ''}`} value={fromDate !== '' ? moment(fromDate).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                <img src={calendar} width="34px" height="34px" onClick={pickFromDate}></img>

              </div>
              <div>
                <Calendar className={showCalendar ? "" : "hide"}
                  onChange={setFromDate} value={fromDate} />
              </div>
            </div>
{/* calender- choose To Date */}
            <div className=" mt-2 pt-50">
              <span className='textspanlight31'>End Date</span>
              <div className='formControl calender1-section d-flex justify-content-flex-end align-items-center mt-50'>
                <input className={`form_box ${toDate === '' ? "calender_text_placeholder" : ""}`} value={toDate !== '' ? moment(toDate).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                <img src={calendar} width="34px" height="34px" onClick={pickToDate}></img>
              </div>
              <div>
                <Calendar className={showCalendardetail ? "" : "hide"}
                  onChange={setToDate} value={toDate} />
              </div>
            </div>

            <div className='d-flex align-items-center justify-content-center mt-2 pt-50 pb-75'>
              <button className='btn5 py-1 px-5' onClick={applyFilter}>
                <span className='textspanbold32'>Apply</span>
              </button>
            </div>
          </div>
        </UncontrolledPopover>
      </div>
    </>
  )
}
export default Reportsfilterpopup