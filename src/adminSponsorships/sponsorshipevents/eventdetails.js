import React, { useState, useRef, useCallback, useEffect } from "react"
import FilterPopularInterests from '../../adminusers/filterpopularinterests'
import closecircle from '../../assets/images/dashboardimg/close-circle.png'
import search from '../../assets/images/dashboardimg/searchbar.png'
import off from '../../assets/images/dashboardimg/offtoggle.png'
import on from '../../assets/images/dashboardimg/ontoggle.png'
import calendar from '@src/assets/images/dashboardimg/CalendarButton.png'
import addnews from '../../assets/images/dashboardimg/addnew.png'
import Calendar from "react-calendar"
import moment from 'moment'
import sidepanel from '../../assets/images/dashboardimg/image_sidepanel.png'
import dances from '../../assets/images/dashboardimg/dancerss.png'
import yoga from '../../assets/images/dashboardimg/yogas.png'
import deletes from '../../assets/images/dashboardimg/Deleteradius.png'
import Cropper from "react-easy-crop"
import bgimage from '../../assets/images/dashboardimg/fillimage.png'
import InviteMember from '../../admingroups/invitemembers'
import docs from '../../assets/images/dashboardimg/uploaddocs.png'
import bgcamera from '../../assets/images/dashboardimg/camera.png'
import imgs1 from '../../assets/images/dashboardimg/fillimagearray.png'
import imgreorder from '../../assets/images/dashboardimg/Reorderimages.png'
import 'react-calendar/dist/Calendar.css'
import 'react-time-picker/dist/entry.nostyle'
import SponsorsEventsAddcropDemo from "./sponsors-events-addcropprofile"
import SponsorsEventsEditcropDemo1 from "./sponsors-events-cropeditprofile"
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
const Event_details = (props) => {

  const Options = [{ value: '', label: 'Comedy Crew' }]
  const [selected1, setSelected1] = useState(Options[0].value)
  const [imgss1, setimg1] = useState(null)
  const [value2, onChange2] = useState('10:00')
  const [min, setmin] = useState([])
  const [hrs, sethrs] = useState([])
  const [value, onChange] = useState('')
  const [eventname, seteventname] = useState('')
  const [eventfee, seteventfee] = useState('')
  const [Cancellation, setcancellation] = useState('')
  const [City, setcity] = useState('')
  const [Code, setcode] = useState('')
  const [text, settext] = useState('')
  const [Venue, setVenue] = useState('')
  const [address, setaddress] = useState('')
  const [txt, defaulttxt] = useState('YES')
  const [levent, setevent] = useState(true)
  const [value1, onChange1] = useState('')
  const [showCalendardetail, setShowCalendardetail] = useState(false)
  const [showCalendardetail1, setShowCalendardetail1] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showCalendar1, setShowCalendar1] = useState(false)
  const [mom, setmom] = useState('')
  const [mom1, setmom1] = useState('')
  const [url, seturl] = useState(null)
  const [multiple, setmultipleurl] = useState(null)
  const [alldays, setalldays] = useState(false)
  const [alldaysmultiple, setalldaysmultiple] = useState(false)
  const stateoption = [{ value: '', label: 'Boston' }]
  const [images1234] = useState([{ name: "img1", img123: imgs1 }, { name: "img2", img123: imgs1 }, { name: "img3", img123: imgs1 }])
  const [datemultiple, setmultiple] = useState([{ name: 'Nov. 16, 2022 from 3 - 4:30 pm' }, { name: 'Nov. 18, 2022 from 2 - 4:30 pm' }])
  const [intersetarr1] = useState([{ name: 'Pets' }, { name: 'Sports', css: { marginLeft: "-8px" } }, { name: 'Travel', css: { marginLeft: "-1px" } }, { name: 'Music', css: { marginLeft: "5px" } }, { name: 'Painting', css: { marginLeft: "10px" } }, { name: 'Outdoors', css: { marginLeft: "10px" } }])
  const [intersetarr] = useState([{ name: 'Comedy' }])
  const [textareas, setarea] = useState('')
  const [selected, setSelected] = useState(null)
  const [selectedoption, setSelectedoption] = useState(Options[0].value)
  const inputRef = useRef(null)
  const inputRef1 = useRef(null)
  const [selectedImage, setSelectedImage] = useState()
  const [imageSrc, setImageSrc] = React.useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)
  const [uploadedFileName, setUploadedFileName] = useState(null)
  const inputRef3 = useRef(null)
  const [file, setfiles] = useState('')
  const [files, setfiless] = useState('')

  const handleUpload2 = () => {

    inputRef3.current?.click()
  }
  const handleDisplayFileDetails2 = (event) => {
    const file = event.target.files[0]
    const url = URL.createObjectURL(file)

    console.log(file, url, event.target.result)
    const reader = new FileReader()
    reader.onload = async (event) => {

      const text = (event.target.result)
      console.log(text)
      settext(text)


    }

    reader.readAsText(event.target.files[0])


  }

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])

  console.log(hrs)
  const [Options2, setoption2] = useState([])
  const handleChange = event => {

    console.log(event.target.value)
    setSelected(event.target.value)

  }
  const handleChange1 = event => {

    console.log(event.target.value)


  }
  useEffect(() => {

    const options = []
    const obj = {}
    const test = 12
    for (let i = 0; i <= 12; i++) {
      for (let j = 0; j <= 59; j++) {
        const obj = {}
        if ((i < 10)) {
          obj['value'] = `0${i}`
          obj['label'] = `0${i}`
        } else {
          obj['value'] = `${i}`
          obj['label'] = `${i}`
        }
        if (j < 10) {
          obj['value1'] = `0${j}`

        } else {
          obj['value1'] = `${j}`
        }

        options.push(obj)
        setoption2(options)
      }
    }
    for (let j = 0; j <= 59; j++) {
      // setmin(push(j))
    }

    setimg1(props.im)
    if (props.im === "secret") {
      seturl(sidepanel)
      seteventname('Secret Comedy Show')
      seteventfee('$0.00')
      setcancellation('$5.00')
      setcity('Dorchester')
      setcode('33244')
      setVenue('TBA')
      setaddress('TBA')
      defaulttxt('YES')
      setarea('Hint Social has partnered with Don’t Tell Comedy to bring you this secret stand-up comedy show. Venue and comedians to be announced day of event.')
      setSelected(Options[0].value)
    } else {
      setSelected()
    }


  }, [])

  const trash1 = () => {
    seturl(null)
    setimg1(null)
  }
  const handleUpload = () => {
    inputRef.current?.click()
  }
  const handleUpload1 = () => {
    inputRef1.current?.click()
  }
  const valueclick1 = () => {

    if (showCalendar1 === false) {
      setShowCalendar1(true)
    } else {
      setShowCalendar1(false)
    }

  }
  const changes1 = () => {
    if (showCalendardetail1 === false) {
      setShowCalendardetail1(true)
    } else {
      setShowCalendardetail1(false)
    }

  }
  const valueclick = () => {

    if (showCalendar == false) {
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
  const checktoggle = () => {
    if (alldays === false) {
      setalldays(true)
    } else {
      setalldays(false)
    }

  }
  const checktogglemultiple = () => {
    if (alldaysmultiple === false) {
      setalldaysmultiple(true)
    } else {
      setalldaysmultiple(false)
    }

  }
  const checktoggleevent = () => {

    if (levent === false) {
      setevent(true)
      defaulttxt('Yes')
    } else {
      setevent(false)
      defaulttxt('No')
    }

  }
  const handleChanges1 = event => {
    console.log(event.target.value)
    setSelectedoption(event.target.value)

  }
  const handleDisplayFileDetails = (event) => {

    const file = event.target.files[0]

    seturl(URL.createObjectURL(file))

    console.log(file, url, event.target.result)
  }
  const handleDisplayFileDetails1 = (event) => {


    const file = event.target.files[0]

    setmultipleurl(URL.createObjectURL(file))

    console.log(file, url, event.target.result)
  }
  const multipleval = (index) => {

    const tags12 = [...images1234]
    tags12[index].img123 = multiple
    //  setvalimages(tags12[index].img123)
    console.log(index, tags12, multiple)
  }
  const handlecrop = (v) => {
    console.log(v)
    setfiles(v)
  }
  const resetval = (v) => {
    setfiles('')
  }

  const handlecrops = (v) => {
    console.log(v)
    setfiless(v)
  }
  const resetvals = (v) => {
    setfiless('')
  }

  const numberInputOnWheelPreventChange = (e) => {
    e.target.blur()
    e.stopPropagation()
    setTimeout(() => {
      e.target.focus()
    }, 0)
  }


  return (
    <div>
      <div>
        <div className="row">
          <div className="col-12">
            {/* <div style={{ position: "relative" }} >

              <img src={url ? url : bgimage} width="359px" height="398px"></img>

              <div className="col-6  justify-content-center " style={{ display: url === null ? 'flex' : 'none' }} onClick={handleUpload}>
                <input className="d-none" type="file" accept='.jpg,.png' ref={inputRef} onChange={handleDisplayFileDetails}></input>
                <img style={{ position: "absolute", top: 0, marginTop: "139px" }} className="me-3 " width="66px" height="66px" src={bgcamera} ></img>

              </div>

              <div className="col-6   justify-content-center " style={{ display: url === null ? 'flex' : 'none' }}>
                <img style={{ position: "absolute", top: 0, marginTop: "220px" }} className="me-3 " width="219px" src={subheader}></img>
              </div>
              <div className="col-6  justify-content-center " style={{ display: url === null ? 'none' : 'flex' }}>

                <img style={{ position: "absolute", bottom: -17, left: "280px" }} className="me-3 " width="44px" height="44px" src={deletes} onClick={trash1}></img>

              </div>
              </div> */}

            <span style={{ display: props.data === '' ? '' : 'none' }}>
              <SponsorsEventsAddcropDemo crop={handlecrop} handle={resetval} ></SponsorsEventsAddcropDemo></span>
            <span style={{ display: props.data === 'edit' ? '' : 'none' }}>
              <SponsorsEventsEditcropDemo1 crop={handlecrops} handle={resetvals}></SponsorsEventsEditcropDemo1></span>
          </div>

        </div>
        {/* ****** PLEASE DON'T REMOVE THE CODE-the commented code are no need for current sprint ****** */}
        {/* <div className="d-flex flex-row justify-content-end" style={{ marginTop: "-120px" }}>
          {images1234.map((val, index) => <>
          
            <div className="d-flex flex-row justify-content-end me-1">
              <div className="mt-2 d-flex justify-content-end" style={{ position: "relative" }}>
                <img key={index} src={imgs1} width="120px" height="100px"></img>

                <div className="d-flex justify-content-end" style={{
                  position: "absolute",
                  top: "-10px",
                  marginLeft: "82px"
                }} >
                  <img src={imgreorder} width="30px"></img>

                </div>
                <div className="d-flex justify-content-center col-4  " style={{
                  position: "absolute", bottom: "0px", marginBottom: "30px", marginLeft: "40px"
                }}>
                  <img src={bgcamera} style={{ marginBottom: "-10px", marginRight: "77px" }} width="60px" onClick={handleUpload1}></img>
                  <input className="d-none" type="file" accept='.jpg,.png' ref={inputRef1} onChange={handleDisplayFileDetails1} onclick={multipleval(index)}></input>
                </div>
              </div>
            </div>
          </>

          )}
        </div> */}
        <div className="row mt-3">
          <div className="col-6 d-flex flex-column">
            <span className="eventdetail_smaller ms-50 mt-75">Event Name</span>
            <input className="formControl sponsorship_inputText" placeholder="Add event name..." defaultValue={eventname}></input>
          </div>
          <div className="col-6 d-flex flex-column">
            <span className="eventdetail_smaller ms-50 mt-75">Associated Group</span>

            <select id="category" value={selected} onChange={handleChange} placeholder="Select One..."
              className={`formControl  sponsorship_aligns ${selected === null ? "sponshorship_text_placeholder" : "sponsorship_inputText"}`}   >

              {Options.map((res) => {
                return (
                  <> <option className="text" style={{ display: props.im !== 'secret' ? 'none' : '' }} >Select one...</option>
                    <option
                      value={res.value}>{res.label}</option>
                  </>
                )
              })}
            </select>


          </div>

        </div>
        <div className="col-12 mt-2 d-flex flex-column ">
          <span className="eventdetail_smaller  ms-50 " >Description</span>

        </div>
        <div className="col-12 mt-50">
          <textarea defaultValue={textareas} className="w-100 formControl pt-1 sponsorship_inputText " placeholder="Add a description" style={{ height: "104px" }}>

          </textarea>
        </div>
        <div className="row mt-2">
          <div className="col-6 d-flex flex-column">
            <span className="eventdetail_smaller ms-50 mt-75">Event Fee</span>
            <input className="formControl sponsorship_inputText" placeholder="$0.00" defaultValue={eventfee}></input>
          </div>
          <div className="col-6 d-flex flex-column">
            <span className="eventdetail_smaller ms-50 mt-75" >Cancellation Fee</span>

            <input className="formControl sponsorship_inputText" placeholder="$0.00" defaultValue={Cancellation}></input>


          </div>

        </div>
        <div className="row mt-2">
          <div className="col-6 d-flex flex-column">
            <span className="eventdetail_smaller ms-50 mt-75">Venue</span>
            <input className="formControl sponsorship_inputText" placeholder="Add venue name..." defaultValue={Venue}></input>
          </div>
          <div className="col-6 d-flex flex-column">
            <span className="eventdetail_smaller ms-50 mt-75">Address</span>

            <input className="formControl sponsorship_inputText" placeholder="Add venue address..." defaultValue={address}></input>


          </div>

        </div>
        <div className="row mt-2">
          <div className="col-4 d-flex flex-column mt-75">
            <span className="eventdetail_smaller ms-50 ">City</span>
            <input className="formControl sponsorship_inputText" placeholder="Add city..." defaultValue={City}></input>
          </div>
          <div className="col-4 d-flex flex-column mt-75">
            <span className="eventdetail_smaller ms-50 ">State</span>

            <select value={selectedoption} onChange={handleChanges1} placeholder="Select one..."
              className="formControl sponsorship_inputText sponsorship_aligns"   >

              {stateoption.map((res) => {
                return (

                  <option
                    value={res.value}>{res.label}</option>
                )
              })}
            </select>


          </div>
          <div className="col-4 d-flex flex-column">
            <span className="eventdetail_smaller ms-50 mt-75">Zip Code</span>

            <input className="formControl sponsorship_inputText" placeholder="Add zip code..." defaultValue={Code}></input>


          </div>

        </div>
        <hr style={{ border: "1px solid #CCD8DB" }} className="mt-2"></hr>
        <div className='d-flex justify-content-between flex-row mb-1'>
          <span className='loc'>Interests</span>

        </div>
        <div className='d-flex mb-1'>
          {intersetarr.map((items, index) => <div key={index} className="d-flex flex-row">

            <button className='btn-btn-green d-flex justify-content-center align-items-center'>
              <span className='btn-fonty'>{items.name}</span>&nbsp;<img src={closecircle} width="25px"></img>
            </button>
          </div>

          )}
        </div>


        <div className='col-12 mb-1'>
          <div className='d-flex align-items-center border_size'>
            <img className='search ms-2' src={search} width="20px" height="20px"></img>

            <input className='w-100 height-range ms-1 text_search ' placeholder='Search interests...'></input>

          </div>
        </div>
        <div className="d-flex flex-column">
          <div className='mb-1 d-flex flex-column'>
            <span className='loc1' style={{ textAlign: "left" }}>Popular Interests</span>
          </div>

          <div className='d-flex'>
            {intersetarr1.map((items, index) => <div key={index} className="d-flex flex-row">

              <button className='btn-btn-green1 me-75 d-flex flex-row align-items-center justify-content-center p-1'>
                <span className='btn-fonty1'>{items.name}</span>
              </button>
            </div>

            )}
          </div>

        </div>
        <hr style={{ border: "1px solid #CCD8DB" }} className="mt-2"></hr>
        <div className="col-12 mt-1 d-flex">
          <span className="eventdetails_bolderheading" style={{ textAlign: "left" }}>Date & Time</span>
        </div>
        <div className="row mt-2">
          <div className="col-6  d-flex">
            <span className="eventdetail_smaller" style={{ textAlign: "left" }}>&nbsp;From</span>
          </div>
          <div className="col-3  d-flex">
            <span className="eventdetail_smaller">&nbsp;To</span>
          </div>
          <div className="col-3  d-flex align-items-center justify-content-end ">
            <span className="eventdetail_smaller">All Day</span>
            <img className="ms-50" onClick={checktoggle} src={alldays === true ? on : off} width="48px" height="27px"></img>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className='formControl calen d-flex justify-content-flex-end align-items-center'>
              <input className={`form_box ${value === '' ? "sponshorship_text_placeholder" : ""}`} value={value !== '' ? moment(value).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
              <img src={calendar} width="34px" height="34px" onClick={valueclick}></img>

            </div>
            <div>
              <Calendar className={showCalendar ? "" : "hide"}
                onChange={onChange} value={value} />
            </div>
          </div>
          <div className="col-6">
            <div className='formControl calen d-flex justify-content-flex-end align-items-center'>
              <input className={`form_box ${mom === '' ? "sponshorship_text_placeholder" : ""}`} value={mom !== '' ? moment(mom).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
              <img src={calendar} width="34px" height="34px" onClick={changes}></img>

            </div>
            <div>
              <Calendar className={showCalendardetail ? "" : "hide"}
                onChange={setmom} value={mom} />
            </div>

          </div>
        </div>
        <div className="row mt-1">
          <div className="col-6 d-flex flex-column ">
            <span className="eventdetail_smaller ms-50 mt-75">Start Time</span>
          </div>
          <div className="col-6 d-flex flex-column">
            <span className="eventdetail_smaller ms-50 mt-75">End Time</span>
          </div>
        </div>
        <div className="row  d-flex flex-row justify-content-between">
          <div className="col-6 d-flex flex-row justify-content-between formControl ms-1" style={{ width: "45%" }} >


            <select className="col-4 event_test event_align">

              {Options2.map((res) => {
                return (
                  <option value={res.value}>{res.label}:{res.value1}</option>
                )

              })}
            </select>

            <select className="col-2 event_test sponsorship_aligns">


              <option>PM</option>
              <option>AM</option>

            </select>

          </div>
          <div className="col-6 d-flex flex-row justify-content-between formControl me-1" style={{ width: "45%" }} >


            <select className="col-4 event_test event_align">

              {Options2.map((res) => {
                return (
                  <option value={res.value}>{res.label}:{res.value1}</option>
                )

              })}
            </select>

            <select className="col-2 event_test sponsorship_aligns">

              <option>PM</option>
              <option>AM</option>
            </select>

          </div>
        </div>

        {/* ****** PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint **** */}

        {/* <div className="d-flex flex-row justify-content-between align-items-center">
          <hr className="mt-2" style={{ border: "1px solid #CCD8DB", width: "100%" }}></hr>

        

          <span className="" style={{fontFamily: 'Asap', fontStyle: 'normal', fontWeight: '500', fontSize: '14px', lineHeight: '16px', color:'#003B4A'}}>&nbsp;&nbsp;OR&nbsp;&nbsp;</span>
          <hr className="mt-2" style={{ border: "1px solid #CCD8DB", width: "100%" }}></hr>

        </div>
        <div className="mt-1 d-flex justify-content-between">
          <span className="eventdetails_bolderheading" style={{ textAlign: "left" }}>Multiple Dates</span>
          <img src={addnews} width="35px" height="35px"></img>
        </div>
        <div className='d-flex mb-1'>
          {datemultiple.map((items, index) => <div key={index} className="d-flex flex-row">

            <button className='btn-btn-green_sponsorship  d-flex justify-content-center align-items-center me-1'>
              <span className='btn-fonty'>{items.name}</span>&nbsp;<img src={closecircle} width="25px"></img>
            </button>
          </div>

          )}
        </div>
        <div className="row mt-2">
          <div className="col-6  d-flex">
            <span className="eventdetail_smaller" style={{ textAlign: "left" }}>&nbsp;From</span>
          </div>
          <div className="col-3  d-flex">
            <span className="eventdetail_smaller">&nbsp;To</span>
          </div>
          <div className="col-3  d-flex align-items-center justify-content-end ">
            <span className="eventdetail_smaller">All Day</span>
            <img className="ms-50" onClick={checktogglemultiple} src={alldaysmultiple === true ? on : off} width="48px" height="27px"></img>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className='formControl calen d-flex justify-content-flex-end align-items-center'>
              <input className={`form_boxText ${value1 === '' ? "sponshorship_text_placeholder" : ""}`} value={value1 !== '' ? moment(value1).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
              <img src={calendar} width="34px" height="34px" onClick={valueclick1}></img>

            </div>
            <div>
              <Calendar className={showCalendar1 ? "" : "hide"}
                onChange={onChange1} value={value1} />
            </div>
          </div>
          <div className="col-6">
            <div className='formControl calen d-flex justify-content-flex-end align-items-center'>
              <input className={`form_boxText ${mom1 === '' ? "sponshorship_text_placeholder" : ""}`} value={mom1 !== '' ? moment(mom1).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
              <img src={calendar} width="34px" height="34px" onClick={changes1}></img>

            </div>
            <div>
              <Calendar className={showCalendardetail1 ? "" : "hide"}
                onChange={setmom1} value={mom1} />
            </div>

          </div>
        </div>
        <div className="row mt-1">
          <div className="col-6 d-flex flex-column ">
            <span className="eventdetail_smaller ms-50 mt-75">Start Time</span>
          </div>
          <div className="col-6 d-flex flex-column">
            <span className="eventdetail_smaller ms-50 mt-75">End Time</span>
          </div>
        </div>
        <div className="row  d-flex flex-row justify-content-between">
          <div className="col-6 d-flex flex-row justify-content-between formControl ms-1" style={{ width: "45%" }} >


            <select className="col-4 event_test event_align">

              {Options2.map((res) => {
                return (
                  <option value={res.value}>{res.label}:{res.value1}</option>
                )

              })}
            </select>

            <select className="col-2 event_test sponsorship_aligns">


              <option>PM</option>
              <option>AM</option>

            </select>

          </div>
          <div className="col-6 d-flex flex-row justify-content-between formControl me-1" style={{ width: "45%" }} >


            <select className="col-4 event_test event_align">

              {Options2.map((res) => {
                return (
                  <option value={res.value}>{res.label}:{res.value1}</option>
                )

              })}
            </select>

            <select className="col-2 event_test sponsorship_aligns">

              <option>PM</option>
              <option>AM</option>
            </select>

          </div>
        </div> */}

        <div className="d-flex flex-row justify-content-between align-items-center">
          <hr className="mt-2" style={{ border: "1px solid #CCD8DB", width: "100%" }}></hr>


        </div>
        <div className="row">
          <div className="col-6 d-flex justify-content-between">
            <span className="eventdetails_bolderheading">&nbsp;Limited Spots</span>
            <span className="eventdetail_placeholder">
              {txt} &nbsp;
              <img src={levent === true ? on : off} width="48px" height="27px" onClick={checktoggleevent}></img>
            </span>
          </div>
          <div className="col-6 d-flex justify-content-between align-items-center">
            <span className="eventdetails_bolderheading ">&nbsp;Link for the Event</span>
          </div>
        </div>
        <div className="row d-flex justify-content-between">

          <div className="col-6 d-flex flex-row " >

          <div className="mt-0 mb-1">
                        <span className="eventdetail_smaller ms-50 mt-75">Add Number of Spots</span>
                        <input onWheel={numberInputOnWheelPreventChange} type="number" className="formControl editEventInput" placeholder="Add Number of Spots" ></input>
                       
                      </div>
           

          </div>
          <div className="col-6">
            <input className="formControl sponsorship_inputText" placeholder="Enter Url"></input>
          </div>
        </div>

        <div className="col-12 mt-2 d-flex justify-content-between align-items-center">
          <span className="eventdetails_bolderheading">Add Waiver Language</span>
          <input className="d-none " type="file" accept='.txt' ref={inputRef3} onChange={handleDisplayFileDetails2}></input>
          <span className="sponsorship_dark ms-50 " onClick={handleUpload2}><img src={docs} width="28px" height="28px" ></img>Upload Docs</span>
        </div>
        <div className="col-12 ">

          <textarea placeholder="Add waiver language here..." defaultValue={text} className="w-100 formControl sponsorship_inputText " style={{ height: "104px" }}>

          </textarea>
        </div>
        <hr className="mt-2" style={{ border: "1px solid #CCD8DB", width: "100%" }}></hr>
        <InviteMember></InviteMember>

      </div>

    </div>
  )
}
export default Event_details
