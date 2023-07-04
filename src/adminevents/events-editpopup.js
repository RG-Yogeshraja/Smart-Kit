import React, { useState, useRef, useCallback, useEffect } from 'react'
import Editprof from "../adminusers/editprofilepopup"
import whitebox from '../assets/images/dashboardimg/fieldbox.png'
import infocircle from '../assets/images/dashboardimg/info-circle1.png'
import checked from '../assets/images/dashboardimg/checktickbox.png'
import deletes from '../assets/images/dashboardimg/editdelete.png'
import '../@core/scss/base/adminDashboard/editprofilepopup.scss'
import EditprofilePopup from './events-editpopupprofile'
import EditPopularInterests from '../adminusers/editpopularinterests'
import edit from '../assets/images/dashboardimg/editmenu.png'
import InviteMember from './events-invitemembers'
import Modal from 'react-bootstrap/Modal'
import Removepopupuser from '../adminusers/removeuser'
import closecircle from '../assets/images/dashboardimg/close-circle.png'
import search from '../assets/images/dashboardimg/searchbar.png'
import off from '../assets/images/dashboardimg/offtoggle.png'
import on from '../assets/images/dashboardimg/ontoggle.png'
import { getUUID } from '../@core/assets/UUID'
import calendar from '@src/assets/images/dashboardimg/CalendarButton.png'
import addnews from '../assets/images/dashboardimg/addnew.png'
import Calendar from "react-calendar"
import yoga from '../assets/images/dashboardimg/yogas.png'
import moment from 'moment'
import '../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsoredit.scss'
import EditEventInterest from './events-editinterest'
import EditEventPopularInterest from './events-editpopularinterest'
import '../@core/scss/base/adminDashboard/editprofilepopup.scss'
import { connect, useDispatch, useSelector } from 'react-redux'
import default_userprofile from '../assets/images/dashboardimg/userprofiledefault.jpg'
import load from '../assets/images/dashboardimg/loadersimg.gif'
import { getMembersToInvite_APIcall } from './slice-adminevents/slice-getmemberstoinvite'
import { inviteMembersToAttendEvent_APIcall } from './slice-adminevents/slice-invitememberstoattendevent'
import CropEventProfileImage from './events-mainpanel/events-cropprofileimage'
import { uploadEventBannerImage_APIcall } from './slice-adminevents/slice-uploadeventbannerimage'
import { getAllActiveEvents_APIcall } from './slice-adminevents/slice-getallactiveevents'
import { updateEvent_APIcall } from './slice-adminevents/slice-updateevent'
import { defaultimage_APICall } from '../admingroups/resetfile-splice'
import { deleteEvent_APIcall } from './slice-adminevents/slice-delete-event'
import calendardark from '../assets/images/dashboardimg/calendardark.png'
import { getEvent_filter_APICall } from './slice-adminevents/geteventfilter-detail-splice'
import calendars from '../assets/images/dashboardimg/backgroundcalendar.png'
import { useForm } from 'react-hook-form'

const EditgroupPopup = (props) => {
  const [assoGroupOptions, setAssoGroupOptions] = useState([{ value: '', label: '' }])
  const [hrs, sethrs] = useState([])
  const [eventFromDate, setEventFromDate] = useState()
  const [eventToDate, setEventToDate] = useState()
  const [spoterror, showspoterror] = useState('')
  const [txt, defaulttxt] = useState('YES')
  const [limitedSpotsToggleEdit, setLimitedSpotsToggleEdit] = useState(false)
  const [limitedSpotsVal, setLimitedSpotsVal] = useState('0')
  const [value1, onChange1] = useState('')
  const [showCalendardetail, setShowCalendardetail] = useState(false)
  const [showCalendardetail1, setShowCalendardetail1] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showCalendar1, setShowCalendar1] = useState(false)
  const [mom1, setmom1] = useState('')
  const [url, seturl] = useState(null)
  const [multiple, setmultipleurl] = useState(null)
  const [allDayEnable, setAllDayEnable] = useState(false)
  const stateoption = [{ value: '', label: 'Boston' }]
  const [hs, seths] = useState(false)
  const [img1, setimg1] = useState('')
  const [textareas, setarea] = useState('')
  const [selected, setSelected] = useState(null)
  const [selected1, setSelected1] = useState(null)
  const [selectedoption, setSelectedoption] = useState(assoGroupOptions[0].value)
  const inputRef3 = useRef(null)
  const [setresetimage, getresetimage] = useState('')
  const [interest, setinterests] = useState([])
  const { register, handleSubmit, setValue, reset, clearErrors, setError, formState: { errors }, watch } = useForm()
  const [associatedGroupOption, setAssociatedGroupOption] = useState('')
  const [show1, setShow1] = useState(false)
  const [loader, setLoader] = useState(false)
  const [show, setShow] = useState(false)
  const [deletesgroups, setdeletesgroups] = useState(false)
  const dispatch = useDispatch()
  const authStat_getMembersToInvite = useSelector((state) => state.getMembersToInviteData)
  const authStat_uploadEventBannerImage = useSelector((state) => state.uploadEventBannerImageData)
  const authStat_inviteMembersToAttendEvent = useSelector((state) => state.inviteMembersToAttendEventData)
  const authStat_getAllActiveEvents = useSelector((state) => state.getAllActiveEventsData)
  const authStat_updateEventDetails = useSelector((state) => state.updateEventData)
  const authStat_deleteEvent = useSelector((state) => state.deleteEventData)
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [userIdListToInvite, setUserIdToInvite] = useState([])
  const [file, setfiles] = useState('')
  const [states, getstates] = useState('')
  const [isHintSocialEvent_edit, setIsHintSocialEvent_edit] = useState('0')
  const [eventName_edit, setEventname_edit] = useState('')
  const [eventGroupname_edit, setGroupname_edit] = useState('')
  const [eventDesctiption_edit, setDescription_edit] = useState('')
  const [eventLocation_edit, setLocation_edit] = useState('')
  const [eventAddress_edit, setEventAddress_edit] = useState('')
  const [eventCity_edit, setEventCity_edit] = useState('')
  const [eventState_edit, setEventState_edit] = useState('')
  const [eventZipCode_edit, setEventZipCode_edit] = useState('')
  const [isAllDayEnable_edit, setIsAllDayEnable_edit] = useState('')
  const [eventStartdate_edit, setStartdate_edit] = useState('')
  const [eventEnddate_edit, setEnddate_edit] = useState('')
  const [eventStarttime_edit, setStarttime_edit] = useState('')
  const [eventEndtime_edit, setEndtime_edit] = useState('')
  const [eventInterest_edit, setEventinterest_edit] = useState([])
  const [eventUrl_edit, setEventurl_edit] = useState('')
  const [eventImageurl_edit, setEventImageurl_edit] = useState('')
  const [numberofSpots_edit, setNumberofspots_edit] = useState('')
  const [isLimitedSpotsEnable_edit, setIsLimitedSpotsEnable_edit] = useState('')
  const [eventerrortrue, seterror] = useState(false)
  const [eventStartDateError, setEventStartDateError] = useState('')
  const [eventEndDateError, setEventEndDateError] = useState('')
  const [eventStarttimeError, setEventStarttimeError] = useState('')
  const [eventEndtimeError, setEventEndtimeError] = useState('')
  const [Options2, setoption2] = useState([])
  const defaultimg = useSelector((state) => state.defaultimageget)

  const imagetrigger = () => {

    if (isHintSocialEvent_edit == '0') {
      setIsHintSocialEvent_edit('1')
    } else if (isHintSocialEvent_edit == '1') {
      setIsHintSocialEvent_edit('0')
    }
  }

  const handleChange = event => {
    setSelected(event.target.value)
  }

  const geteventval = (v1) => {
    getresetimage(v1)
    setfiles('')
  }

  const numberInputOnWheelPreventChange = (e) => {
    e.target.blur()
    e.stopPropagation()
    setTimeout(() => {
      e.target.focus()
    }, 0)
  }

  const cancelHandle = () => {
    setShow1(false)
  }

  useEffect(() => {
    const options = []
    const obj = {}
    const test = 12
    for (let i = 1; i <= 12; i++) {
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
        obj['id'] = getUUID()
        options.push(obj)
        setoption2(options)
      }
    }
    for (let j = 0; j <= 59; j++) {
      // setmin(push(j))
    }
    setimg1(props.im)
  }, [])


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
    if (allDayEnable === false) {
      setAllDayEnable(true)
    } else {
      setAllDayEnable(false)
    }
  }

  const handleLimitedSpots = () => {

    if (limitedSpotsToggleEdit === false) {
      setLimitedSpotsToggleEdit(true)
      setLimitedSpotsVal('1')
      defaulttxt('Yes')
      if (numberofSpots_edit === '' || numberofSpots_edit === undefined) {
        showspoterror('Limited Spot is Required')
      } else {
        showspoterror('')
      }
    } else {
      showspoterror('')
      setLimitedSpotsToggleEdit(false)
      defaulttxt('No')
    }
    if (limitedSpotsToggleEdit === true) {
      setLimitedSpotsToggleEdit(false)
      setLimitedSpotsVal('0')
    }
  }

  // useEffect(() => {
  //   
  //   console.log(limitedSpotsVal);
  //   if (limitedSpotsToggleEdit == false) {
  //     setLimitedSpotsVal('1')
  //   } else if (limitedSpotsToggleEdit == true) {
  //     const data = numberofSpots_edit
  //     setLimitedSpotsVal('0')
  //   }
  // }, [limitedSpotsVal])

  useEffect(() => {
    if (limitedSpotsToggleEdit === true) {
      if (numberofSpots_edit === '' || numberofSpots_edit === undefined) {
        showspoterror('Limited Spot is Required')
      } else {
        showspoterror('')
      }
    }
  }, [numberofSpots_edit])

  const clickvalue = (v) => {
    console.log(v)
    if (v.length !== 0) {
      const text = []
      const int = [...v]
      for (let i = 0; i < int.length; i++) {
        text.push(int[i].name)
        setinterests(text)
      }
    } else {
      setinterests([])
    }
  }

  const deletEventDialog = () => {
    setdeletesgroups(true)
  }

  const getUserIdFromMembersList = (pusheduserid, id) => {
    if (pusheduserid !== '') {
      setUserIdToInvite(current => [...current, pusheduserid])
    }
    if (id !== '') {
      const val = [...userIdListToInvite]
      val.splice(id, 1)
      setUserIdToInvite(val)
    }
  }

  const handlecrop = (v) => {
    setfiles(v)
  }

  const handleStartTime = (event) => {
    setStarttime_edit(event.target.value)
    console.log(eventStarttime_edit)
    const setIndex = Options2.findIndex(res => res.id === event.target.value)
    console.log(setIndex)
    console.log(Options2[setIndex].value1, Options2[setIndex].label)
    setStartTime(`${Options2[setIndex].label}:${Options2[setIndex].value1}`)
    const svaltime = `${Options2[setIndex].label}:${Options2[setIndex].value1}`
    console.log(event.target.value)
  }

  const handleEndTime = (event) => {
    console.log()
    setEndtime_edit(event.target.value)
    const setIndex = Options2.findIndex(res => res.id === event.target.value)
    console.log(setIndex)
    console.log(Options2[setIndex].value1, Options2[setIndex].label)
    setEndTime(`${Options2[setIndex].label}:${Options2[setIndex].value1}`)
    const evaltime = `${Options2[setIndex].label}:${Options2[setIndex].value1}`
    console.log(event.target.value)
  }

  // const handle_autofillspots = (checkVal, index) => {  *****next sprint(don't remove)******
  //   const newAutofillSpots = [...autofillSpots]
  //   if (index == 0 && checkVal == false) {
  //     newAutofillSpots[0].checked = true
  //   }
  //   else if (index == 0 && checkVal == true) {
  //     newAutofillSpots[0].checked = false
  //   }
  //   else if (index == 1 && checkVal == false) {
  //     newAutofillSpots[1].checked = true
  //   }
  //   else if (index == 1 && checkVal == true) {
  //     newAutofillSpots[1].checked = false
  //   }
  //   setAutofillspots(newAutofillSpots)
  // }

  //   useEffect(() => {
  // if (eventerrortrue === true) {
  //     if (eventFromDate === '' && eventFromDate === 'MM/DD/YYYY') {
  //       setEventStartDateError('Start Date is Required')
  //     } else if (eventFromDate != '' && eventFromDate != 'MM/DD/YYYY') {
  //       setEventStartDateError('')
  //     }
  //     if (eventToDate === '' && eventToDate == 'MM/DD/YYYY') {
  //       setEventEndDateError('End Date is Required')
  //     } else if (eventToDate != '' && eventToDate != 'MM/DD/YYYY') {
  //       setEventEndDateError('')
  //     }
  //   }
  //   }, [eventFromDate, eventToDate])

  const deleteEventCall = () => {
    setdeletesgroups(true)
    setLoader(false)
    const payload = {
      user_id: localStorage.getItem('loggedIn_userId'),
      event_id: props.individualEventDetailsEdit.event_id
    }
    dispatch(deleteEvent_APIcall(payload))
  }

  useEffect(() => {
    if (authStat_deleteEvent.data.responseBody != undefined && authStat_deleteEvent.data.responseCode == 200) {
      const payload = {
        admin_id: localStorage.getItem("loggedIn_userId"),
        search_key: "",
        location: "",
        event_type: ['Private Events', 'Public Events', 'Limited Spot Events', 'Open Events', 'Sponsored Events', 'Hint Social Events', 'Non-Hint Social Events']
      }
      dispatch(getEvent_filter_APICall(payload))
      setLoader(false)
      setShow1(false)
      const payloads = {
        admin_id: localStorage.getItem("loggedIn_userId"),
        search_key: "",
        location: "",
        event_type: ['Private Events', 'Public Events', 'Limited Spot Events', 'Open Events', 'Sponsored Events', 'Hint Social Events', 'Non-Hint Social Events']
      }
      dispatch(getEvent_filter_APICall(payloads))
    } else {
      setShow1(false)
      setLoader(false)
    }
  }, [authStat_deleteEvent.data])


  useEffect(() => {
    
    if (authStat_updateEventDetails.data.responseCode == 200) {
      if (file !== "" && file !== undefined) {
        if (authStat_uploadEventBannerImage.data.responseCode == 200 && authStat_uploadEventBannerImage.data.responseBody != undefined) {
          setLoader(false)
          setShow1(false)
        }
      }
      if (setresetimage !== "") {
        if (defaultimg.defaultgroup.responseCode === 200 && defaultimg.defaultgroup.responseBody !== undefined) {
          setLoader(false)
        }
      }
      if (authStat_inviteMembersToAttendEvent.data.responseCode == 200 && authStat_inviteMembersToAttendEvent.data.responseBody != undefined) {
        setLoader(false)
      }
      setLoader(false)
      
      const payloads = {
        admin_id: localStorage.getItem("loggedIn_userId"),
      }
      dispatch(getAllActiveEvents_APIcall(payloads))
    }
  }, [authStat_updateEventDetails])

  useEffect(() => {
    if (authStat_getMembersToInvite.data.responseBody != undefined && authStat_getMembersToInvite.data.responseCode == 200) {
      setLoader(false)
    }
  }, [authStat_getMembersToInvite.data])

  const handleshow = () => {

    setdeletesgroups(false)
    setShow1(true)
    setLoader(true)
    const payload = {
      admin_id: localStorage.getItem('loggedIn_userId'),
      event_id: props.individualEventDetailsEdit.event_id
    }
    dispatch(getMembersToInvite_APIcall(payload))

    setEventImageurl_edit(props.individualEventDetailsEdit.event_image_details.image_url) // profile image
    if (props.individualEventDetailsEdit.is_hint_social_event == '0') {
      setIsHintSocialEvent_edit('0')
    }
    else {
      setIsHintSocialEvent_edit('1')
    } //0
    setValue("eventName_edit", props.individualEventDetailsEdit.event_title) //1
    const newOption = [...assoGroupOptions]
    newOption[0].label = props.individualEventDetailsEdit.group_name
    setAssoGroupOptions(newOption) //2
    setValue("eventDesctiption_edit", props.individualEventDetailsEdit.description) //3
    setValue("eventLocation_edit", props.individualEventDetailsEdit.location) //4
    setEventAddress_edit(props.individualEventDetailsEdit.event_address) //5
    setEventCity_edit(props.individualEventDetailsEdit.city) //6
    setEventState_edit(props.individualEventDetailsEdit.state) //7
    setEventZipCode_edit(props.individualEventDetailsEdit.zip_code)
    setEventurl_edit(props.individualEventDetailsEdit.event_url)
    //8
    // ****Date and time start*****
    if (props.individualEventDetailsEdit.is_all_day_enable == 0) {
      setAllDayEnable(true)
      setIsAllDayEnable_edit('0')
    } else {
      setAllDayEnable(false)
      setIsAllDayEnable_edit('1')
    }

    setEventFromDate(new Date(props.individualEventDetailsEdit.start_date))
    setEventToDate(new Date(props.individualEventDetailsEdit.end_date))

    const localStartDateTimeConversion = new Date(props.individualEventDetailsEdit.start_date)
    const UTCStartTimePick = moment(localStartDateTimeConversion, "h:mmA").format("HH:mm")
    const localStartTimeConversion = moment(UTCStartTimePick, ["HH:mm"]).format("hh:mm A")

    const localEndDateTimeConversion = new Date(props.individualEventDetailsEdit.end_date)
    const UTCEndTimePick = moment(localEndDateTimeConversion, "h:mmA").format("HH:mm")
    const localEndTimeConversion = moment(UTCEndTimePick, ["HH:mm"]).format("hh:mm A")

    if (props.individualEventDetailsEdit.start_time != "") {
      const dataSplit1 = localStartTimeConversion.split(' ')
      const startTimeVal = dataSplit1[0].toString()
      const dateval = startTimeVal.split(':')
      let valhalf
      if (dateval[0].length === 1) {
        valhalf = `0${dateval[0]}`
      } else {
        valhalf = dateval[0]
      }
      const m = Options2.filter(res => res.label === valhalf)
      const val = m.filter(res => res.value1 === dateval[1])
      if (val.length > 0) {
        setStarttime_edit(val[0].id)
      }
      const dataSplit2 = localEndTimeConversion.split(' ')
      const endTimeVal = dataSplit2[0].toString()
      const dateval1 = endTimeVal.split(':')
      let valhalf1
      if (dateval1[0].length === 1) {
        valhalf1 = `0${dateval1[0]}`
      } else {
        valhalf1 = dateval1[0]
      }
      const m1 = Options2.filter(res => res.label === valhalf1)
      const val1 = m1.filter(res => res.value1 === dateval1[1])
      if (val1.length > 0) {
        setEndtime_edit(val1[0].id)
      }
    } //9, 10, 11, 12
    // ****Date and time ends*****
    setEventinterest_edit(props.individualEventDetailsEdit.event_interest) //13
    // ****limited spots start*****
    setLimitedSpotsToggleEdit(props.individualEventDetailsEdit.is_limited_spots_enable)

    if (props.individualEventDetailsEdit.is_limited_spots_enable == 0) {
      setLimitedSpotsToggleEdit(false)
      setLimitedSpotsVal('0')
    }
    else if (props.individualEventDetailsEdit.is_limited_spots_enable == 1) {
      setLimitedSpotsToggleEdit(true)
      setLimitedSpotsVal('1')
    }

    setNumberofspots_edit(props.individualEventDetailsEdit.no_of_spots)
    // ****limited spots ends***** //14
    setEventurl_edit(props.individualEventDetailsEdit.event_url) //15
  }

  const onSubmit = (data) => {

    setLoader(false)
    console.log(eventFromDate)
    console.log(eventToDate)
    //all day enable disable
    if (setAllDayEnable == true) {
      setIsAllDayEnable_edit('1')
    }
    else if (setAllDayEnable == false) {
      setIsAllDayEnable_edit('0')
    }
    //limited spots enable diable
    if (props.individualEventDetailsEdit.is_limited_spots_enable == 1) {
      setLimitedSpotsToggleEdit(true)
      if (numberofSpots_edit === '' || numberofSpots_edit === undefined) {
        showspoterror('Limited Spot is Required')
      } else {
        showspoterror('')
      }
    } else if (props.individualEventDetailsEdit.is_limited_spots_enable == 0) {
      setLimitedSpotsToggleEdit(false)
      showspoterror('')
    }
    
    const limitedSpotsToggleVal = []
    if (limitedSpotsToggleEdit == true) {
      setIsLimitedSpotsEnable_edit('1')
      limitedSpotsToggleVal.push('1')
    } else {
      setIsLimitedSpotsEnable_edit('0')
      limitedSpotsToggleVal.push('0')
    }
    //event url
    // const URLdata = []
    // if (eventUrl_edit.startsWith("https://") == true) {
    //   URLdata.push(eventUrl_edit)
    // }
    // else if (eventUrl_edit.startsWith("https://") == false) {
    //   URLdata.push("https://" + eventUrl_edit)
    // }

    //start date and time- convert local to UTC format
    // eventFromDate
    // const convertLocalDate=new Date(eventFromDate)


    const startconsolidateUTCStartDateTime = []
    const startconsolidateUTCEndDateTime = []
    if (isAllDayEnable_edit == '0') {
      console.log(eventFromDate)
      const convertToUTCStartDate = eventFromDate.toUTCString()
      console.log(convertToUTCStartDate)
      const startUTCStartDate = moment(eventFromDate).format("YYYY-MM-DD")
      console.log(startUTCStartDate)
      const startUTCStartTime = `${startTime} ${'pm'}`
      const startUTCStartTimeConversion = moment(startUTCStartTime, "h:mmA").format("HH:mm")
      console.log(startUTCStartTimeConversion)
      const startDateResult = startUTCStartDate + 'T' + startUTCStartTimeConversion + ':00.000Z'
      console.log(startDateResult)
      startconsolidateUTCStartDateTime.push(startDateResult)

      console.log(eventToDate)
      const convertToUTCEndDate = eventToDate.toUTCString()
      console.log(convertToUTCEndDate)
      const startUTCSEndDate = moment(eventToDate).format("YYYY-MM-DD")
      console.log(startUTCSEndDate)
      const startUTCEndTime = `${endTime} ${'pm'}`
      const startUTCEndTimeConversion = moment(startUTCEndTime, "h:mmA").format("HH:mm")
      console.log(startUTCEndTimeConversion)
      const endDateResult = startUTCSEndDate + 'T' + startUTCEndTimeConversion + ':00.000Z'
      console.log(endDateResult)
      startconsolidateUTCEndDateTime.push(endDateResult)
    }
    if (isAllDayEnable_edit == '1') {
      console.log(eventFromDate)
      const convertToUTCStartDate = eventFromDate.toUTCString()
      console.log(convertToUTCStartDate)
      const startUTCStartDate = moment(eventFromDate).format("YYYY-MM-DD")
      console.log(startUTCStartDate)
      const startDateResult = startUTCStartDate + 'T00:00:00.000Z'
      startconsolidateUTCStartDateTime.push(startDateResult)

      console.log(eventToDate)
      const convertToUTCEndDate = eventToDate.toUTCString()
      console.log(convertToUTCEndDate)
      const startUTCSEndDate = moment(eventToDate).format("YYYY-MM-DD")
      console.log(startUTCSEndDate)
      const endDateResult = startUTCSEndDate + 'T00:00:00.000Z'
      startconsolidateUTCEndDateTime.push(endDateResult)
    }


    const payloadd = {
      user_id: localStorage.getItem("loggedIn_userId"),
      event_id: props.individualEventDetailsEdit.event_id,
      is_hint_social_event: isHintSocialEvent_edit, //0 or 1 string
      event_title: data.eventName_edit,
      group_id: props.individualEventDetailsEdit.group_id,
      group_name: props.individualEventDetailsEdit.group_name,
      description: data.eventDesctiption_edit,

      //address key-values
      location: data.eventLocation_edit,
      longitude: props.individualEventDetailsEdit.longitude.toString(),
      lattitude: props.individualEventDetailsEdit.lattitude.toString(),
      address: props.individualEventDetailsEdit.event_address,
      city: props.individualEventDetailsEdit.city,
      state: props.individualEventDetailsEdit.state,
      zip_code: props.individualEventDetailsEdit.zip_code,

      //date and time key-values
      is_all_day_enable: isAllDayEnable_edit,
      start_date: startconsolidateUTCStartDateTime[0], // string utc format
      end_date: startconsolidateUTCEndDateTime[0], //string utc format
      start_time: startTime + "PM", //eg., 12.20pm
      end_time: endTime + "PM", //eg., 12.20pm
      is_add_multiple_dates_enable: "0",
      additional_date_time: [], //start date, end date, start time, end time(array of objects)

      interest: props.individualEventDetailsEdit.event_interest,
      // is_limited_spots_enable: isLimitedSpotsEnable_edit, // 0 or 1 (string) //limitedSpotsVal  
      is_limited_spots_enable: limitedSpotsToggleVal[0], // 0 or 1 (string) //limitedSpotsVal  
      no_of_spots: limitedSpotsVal, //numberofSpots_edit  
      autofill_spots_from_waitlist: '0', // 0 or 1 (string)
      autofill_spots_from_signups: '0', // 0 or 1 (string)
      event_url: props.individualEventDetailsEdit.event_url,
    }

    console.log("aaaaa", payloadd)
    if (spoterror === '') {
      setLoader(false)
      
      dispatch(updateEvent_APIcall(payloadd))
      setShow1(false)
    }
    else {
      setShow1(true)
      setLoader(true)
    }

    //upload event banner api call
    if (file != "" && file != undefined) {
      const payload = new FormData()
      payload.append('user_id', localStorage.getItem("loggedIn_userId"))
      payload.append("event_id", props.individualEventDetailsEdit.event_id)
      payload.append("file_data", file)
      // dispatch(uploadEventBannerImage_APIcall(payload))
    }

    //invite members to attend the event api call
    const payload = {
      user_id: localStorage.getItem("loggedIn_userId"),
      group_id: props.individualEventDetailsEdit.group_id,
      event_id: props.individualEventDetailsEdit.event_id,
      userArray: userIdListToInvite
    }
    if (setresetimage !== '') {
      const payload_user = {
        type: '3',
        uuid: props.individualEventDetailsEdit.event_id
      }
      dispatch(defaultimage_APICall(payload_user))
    }
  }



  return (
    <>
      {/* <span style={{ display: props.data == false ? '' : 'none' }}>
        <img onClick={() => setshow1(true)} src={edit} style={{ position: "absolute", top: 33, right: 34 }} width="44px" height="44px" ></img>
      </span> */}

      <img onClick={() => handleshow(true)} src={edit} width="44px" height="44px" style={{ position: "absolute", top: '45px', right: 34 }}></img>
      <Modal show={show1} onHide={() => setShow1(false)} centered className={`${deletesgroups === true ? 'modal1' : 'modal'}`}>


        {loader == true ? <div className='enable-loader1'>
          <img src={load} width="80px" height="80px"></img>
        </div> : null}

        <form onSubmit={handleSubmit(onSubmit)} >
          {/* <Modal show={show1} dialogClassName="custom-modal"> */}
          <div className='p-2' style={{ display: deletesgroups === false ? '' : 'none' }}>
            <div >
              <div className="p-2">
                <div className='d-flex justify-content-between'>
                  <span className='edit_profile'>Edit Event Info
                  </span>
                  <div className='d-flex align-items-center' onClick={deletEventDialog} >
                    {/* <Removepopupuser data="Event" name="yoga"></Removepopupuser> */}
                    <img src={deletes} width="20px" height="20px"></img>
                    <span className='edit_delete ms-25' style={{ cursor: "pointer" }}>Delete Event</span>
                  </div>
                </div>
                <div className='col-12 borders mb-2'>
                  <span className=' mb-1 mx-1'></span>
                </div>
                {/* <EditprofilePopup></EditprofilePopup> */}
                <CropEventProfileImage data={eventImageurl_edit != "" ? eventImageurl_edit : calendardark} crop={handlecrop} handle1={geteventval}></CropEventProfileImage>
                <div className='mt-1' >
                  <img src={isHintSocialEvent_edit === '0' ? whitebox : checked} defaultValue={isHintSocialEvent_edit} width="20px" height="20px" className='me-50' onClick={imagetrigger}></img>
                  <span className='sponsorpopup-textheader'>Hint Social Event</span>&nbsp;<img src={infocircle} width="20px" height="20px"></img>
                </div>
                <div className="row mt-1">
                  <div className='col-6'>
                    <div className=" d-flex flex-column">
                      <span className="eventdetail_smaller ms-50 mt-75">Event Name</span>
                      <input className="formControl editevent-inputtext editEventInput" placeholder="Add event name..." defaultValue={eventName_edit} onChange={e => setEventname_edit(e.target.value)}
                        {...register("eventName_edit", { required: "Event Name is required" })}
                      ></input>
                    </div>
                    {errors.eventName_edit && (<span className="text-danger">{errors.eventName_edit.message}</span>)}
                  </div>
                  {/* old */}
                  {/* <div className="col-6 d-flex flex-column">
                  <span className="eventdetail_smaller ms-50 mt-75">Associated Group</span>

                  <select id="category" value={selected} onChange={handleChange} placeholder="Select One..."
                    className={`formControl  sponsorship_aligns ${selected === null ? "sponshorship_text_placeholder" : "sponsorship_innertext"}`}   >

                    {Options.map((res) => {
                      return (
                        <> <option className="text" style={{ display: props.im !== 'secret' ? 'none' : '' }} >Select one...</option>
                          <option value={res.value}>{res.label}</option>
                        </>
                      )
                    })}
                  </select>
                </div> */}

                  {/* new */}
                  <div className="col-6 d-flex flex-column">
                    <span className="eventdetail_smaller ms-50 mt-75">Associated Group</span>
                    <select id="category" value={selected} onChange={handleChange}
                      className='formControl  sponsorship_aligns editevent-inputtext'>
                      {assoGroupOptions.map((res) => {
                        return (
                          <>
                            {/* <option className="text"  >Select one...</option> */}
                            <option value={res.value} className='editevent-inputtext'>{res.label}</option>
                            <option value={res.value} className='editevent-inputtext'>{res.label}</option>
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
                  <textarea defaultValue={eventDesctiption_edit} maxLength="3001" onChange={e => setDescription_edit(e.target.value)} className="w-100 formControl pt-1 editevent-inputtext " placeholder="Add a description" style={{ height: "104px", fontWeight: "400" }}
                    {...register("eventDesctiption_edit", { required: "Description is required", maxLength: { value: 3000, message: "Description Character Limit Exceeded" } })}>
                  </textarea>

                </div>
                {errors.eventDesctiption_edit && (<span className="text-danger">{errors.eventDesctiption_edit.message}</span>)}
                <div className="row mt-2">
                  <div className="col-6 d-flex flex-column">
                    <span className="eventdetail_smaller ms-50 mt-75">Venue</span>
                    <input className="formControl editevent-inputtext editEventInput" placeholder="Add venue name..." defaultValue={eventLocation_edit} onChange={e => setLocation_edit(e.target.value)}
                      {...register("eventLocation_edit", { required: "Venue is required" })}></input>
                    {errors.eventLocation_edit && (<span className="text-danger">{errors.eventLocation_edit.message}</span>)}
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <span className="eventdetail_smaller ms-50 mt-75">Address</span>
                    <input className="formControl editevent-inputtext editEventInput" readOnly placeholder="Add venue address..." defaultValue={eventAddress_edit} onChange={e => setEventAddress_edit(e.target.value)}></input>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-4 d-flex flex-column mt-75">
                    <span className="eventdetail_smaller ms-50 ">City</span>
                    <input className="formControl editevent-inputtext editEventInput" readOnly placeholder="Add city..." defaultValue={eventCity_edit}></input>
                  </div>
                  <div className="col-4 d-flex flex-column mt-75">
                    <span className="eventdetail_smaller ms-50 ">State</span>
                    <input className="formControl editevent-inputtext editEventInput" readOnly placeholder="Add State..." defaultValue={eventState_edit}></input>
                  </div>

                  <div className="col-4 d-flex flex-column">
                    <span className="eventdetail_smaller ms-50 mt-75">Zip Code</span>
                    <input className="formControl editevent-inputtext editEventInput" readOnly placeholder="Add zip code..." defaultValue={eventZipCode_edit}></input>
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
                  <div className="col-3  d-flex  justify-content-end ">
                    <span className="eventdetail_smaller">All Day</span>
                    <img className="ms-50" onClick={checktoggle} src={allDayEnable === false ? on : off} width="48px" height="27px" style={{ position: "relative", top: "-7px" }}></img>
                  </div>
                </div>

                <div className="row">
                  {/* start date */}
                  <div className="col-6">
                    <div className='formControl calen d-flex justify-content-flex-end align-items-center'>
                      <input className={`form_box ${eventFromDate === '' ? "sponshorship_text_placeholder" : ''}`} value={eventFromDate !== '' ? moment(eventFromDate).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                      <img src={calendar} width="34px" height="34px" onClick={valueclick}></img>
                    </div>
                    <span className='ps-25 text-danger'>{eventStartDateError}</span>
                    <div>
                      <Calendar className={showCalendar ? "" : "hide"} minDate={new Date()}
                        onChange={setEventFromDate} value={eventFromDate} />
                    </div>
                  </div>

                  {/* end date */}
                  <div className="col-6">
                    <div className='formControl calen d-flex justify-content-flex-end align-items-center'>
                      <input className={`form_box ${eventToDate === '' ? "sponshorship_text_placeholder" : ""}`} value={eventToDate !== '' ? moment(eventToDate).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                      <img src={calendar} width="34px" height="34px" onClick={changes}></img>
                    </div>
                    <div>
                      <Calendar className={showCalendardetail ? "" : "hide"} minDate={new Date()}
                        onChange={setEventToDate} value={eventToDate} />
                    </div>
                  </div>
                </div>

                {allDayEnable == true ?
                  <div>
                    <div className="row mt-1">
                      <div className="col-6 d-flex flex-column ">
                        <span className="eventdetail_smaller ms-50 mt-75">Start Time</span>
                      </div>
                      <div className="col-6 d-flex flex-column">
                        <span className="eventdetail_smaller ms-50 mt-75">End Time</span>
                      </div>
                    </div>

                    <div className="row  d-flex  justify-content-between">
                      <div className='col-6'>
                        <div className=" d-flex flex-row justify-content-between formControl" >
                          <select value={eventStarttime_edit} onChange={handleStartTime} className="col-4 event_test event_align">
                            {Options2.map((res) => {
                              return (
                                <>
                                  <option value={res.id}>{res.label}:{res.value1}</option>
                                  {/* <option value={res.value}>{eventStarttime_edit}</option> */}
                                </>
                              )
                            })}

                          </select>
                          <select className="col-2 event_test sponsorship_aligns">
                            <option>AM</option>
                            <option>PM</option>
                          </select>
                        </div>
                        <span className='ps-25 text-danger'>{eventStarttimeError}</span>
                      </div>
                      <div className='col-6'>
                        <div className="d-flex flex-row justify-content-between formControl" >
                          <select className="col-4 event_test event_align" value={eventEndtime_edit} onChange={handleEndTime} >
                            {Options2.map((res) => {
                              return (
                                <option value={res.id}>{res.label}:{res.value1}</option>
                                // <option value={res.value}>{eventEndtime_edit}</option>
                              )
                            })}
                          </select>

                          <select className="col-2 event_test sponsorship_aligns">
                            <option>PM</option>
                            <option>AM</option>
                          </select>
                        </div>
                        <span className='ps-25 text-danger'>{eventEndtimeError}</span>
                      </div>
                    </div>
                  </div> : null}


                <hr style={{ border: "1px solid #CCD8DB" }} className="mt-2"></hr>


                <EditEventInterest data={props.individualEventDetailsEdit.event_interest} handle={clickvalue}></EditEventInterest>
                {/* <EditEventPopularInterest></EditEventPopularInterest> */}
                <hr style={{ border: "1px solid #CCD8DB" }} className="mt-2"></hr>

                <div className='row pt-25'>
                  <div className='col-6'>
                    <div className='d-flex justify-content-between'>
                      <span className='eventdetails_bolderheading pb-1'>Limited Spots</span>
                      <div>
                        <span className="eventdetail_placeholder">
                          {txt} &nbsp;
                          <img src={limitedSpotsToggleEdit === true ? on : off} width="48px" height="27px" onClick={handleLimitedSpots}></img>
                        </span>
                      </div>
                    </div>

                    <div style={{ display: limitedSpotsToggleEdit == true ? "" : "none" }}>
                      <div className="mt-0 mb-1">
                        <span className="eventdetail_smaller ms-50 mt-75">Add Number of Spots</span>
                        <input onWheel={numberInputOnWheelPreventChange} type="number" className="formControl editEventInput" placeholder="Add Number of Spots" defaultValue={numberofSpots_edit} onChange={e => setNumberofspots_edit(e.target.value)}></input>
                        {(<span className="text-danger">{spoterror}</span>)}
                      </div>

                    </div>
                  </div>


                  {/* <div className="d-flex flex-row justify-content-between formControl">
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
                  </div> */}


                  {/* {autofillSpots.map((data, index) => {  ***next sprint***
                      return (
                        <div className='mb-75 d-flex align-items-center' >
                          <img onClick={() => { handle_autofillspots(data.checked, index) }} src={data.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                          <span className='fonting-style'>{data.name} </span><br></br>
                        </div>
                      )
                    })} */}


                  <div className='col-6 d-flex flex-column'>
                    <span className='eventdetails_bolderheading pb-1'>URL of the Event</span>
                    <input className="formControl editEventInput eventURL" name="urlevent" defaultValue={eventUrl_edit} onChange={e => setEventurl_edit(e.target.value)} placeholder="Enter Url"
                      {...register("urlevent", {
                        optional: "",
                        pattern: {
                          value: /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/,
                          message: "URL must begin with https://",
                        },
                      })} />
                    {errors.urlevent && (<small className="text-danger">{errors.urlevent.message}</small>)}
                  </div>
                </div>

                <hr style={{ border: "1px solid #CCD8DB" }} className="mt-2"></hr>
                <InviteMember handleDataToInviteMembers={getUserIdFromMembersList} eventId={props.individualEventDetailsEdit.event_id}></InviteMember>

                <div className='col-12 d-flex justify-content-center mt-3 mb-2 pt-50'>
                  <button className='btn1-style' onClick={() => cancelHandle(false)}><span className="text-cancel" >Cancel</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className='btn2-style'><span className="text-update">Update</span></button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div style={{ display: deletesgroups === true ? '' : 'none' }}>
          <div className='col-12 justify-content-center align-items-center d-flex'>

            {eventImageurl_edit != "" ? <img className="mt-4 mb-2 ml-2 mr-2" src={eventImageurl_edit} width="107px" height="107px" style={{ borderRadius: "15px" }}></img> : <div className="noEventSection p-2 mt-4 mb-2 ">
              <img className="noeventimg" src={calendardark} width="40px" height="41px" />
            </div>}
          </div>

          <div className='col-12  justify-content-center bodypopup'>Are you sure you want to delete<br></br></div>
          <div className='col-12  justify-content-center bodypopup pt-25'>{eventName_edit} </div>
          <div className='col-12  justify-content-center bodypopuptwo1 mt-2'> Event Information will remain on the admin application.</div>
          <div className='col-12 d-flex justify-content-center mt-3 mb-4'>
            <button className='btnstyles' onClick={() => deleteEventCall()}>Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btnstyledetails' onClick={() => cancelHandle(false)}>No</button>
          </div>
        </div>

      </Modal>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    getEventDetailsData: state.getEventDetailsData,
    getMembersToInviteData: state.getMembersToInviteData,
    inviteMembersToAttendEventData: state.inviteMembersToAttendEventData,
    uploadEventBannerImageData: state.uploadEventBannerImageData,
    getAllActiveEventsData: state.getAllActiveEventsData,
    updateEventData: state.updateEventData,
    DeleteEventData: state.DeleteEventData,
    authStat_getMembersToInvite: state.authStat_getMembersToInvite

  }
}

export default connect(mapStateToProps, {})(EditgroupPopup)