import React, { useState, useRef, useCallback, useEffect } from 'react'
import whitebox from '../../assets/images/dashboardimg/fieldbox.png'
import checked from '../../assets/images/dashboardimg/checktickbox.png'
import '../../@core/scss/base/adminDashboard/editprofilepopup.scss'
import EditprofilePopup from '../events-editpopupprofile'
import EditgroupInterest from '../events-editinterest'
import EditPopularInterests from '../../adminusers/editpopularinterests'
import edit from '../../assets/images/dashboardimg/editmenu.png'
import Modal from 'react-bootstrap/Modal'
import addicon1 from '../../assets/images/dashboardimg/addicon1.png'
import Removepopupuser from '../../adminusers/removeuser'
import closecircle from '../../assets/images/dashboardimg/close-circle.png'
import search from '../../assets/images/dashboardimg/searchbar.png'
import off from '../../assets/images/dashboardimg/offtoggle.png'
import on from '../../assets/images/dashboardimg/ontoggle.png'
import calendar from '@src/assets/images/dashboardimg/CalendarButton.png'
import Calendar from "react-calendar"
import moment from 'moment'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsoredit.scss'
import AddorEditprofilePopup from './events-addoreditprofileplus'
import infocircle from '../../assets/images/dashboardimg/info-circle1.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import EditEventInterest from './events-editinterest'
import EditEventPopularInterest from '../events-editpopularinterest'
import InviteMember from '../events-invitemembers'
import { createNewEvent_APIcall } from '../slice-adminevents/slice-createevent'
import loadingSpin from '../../assets/images/dashboardimg/loadersimg.gif'
import { activeGroups_APIcall } from '../../admingroups/groupspanel/getactive-splice'
import EventLocationAPI from './events-locationAPI'
import UsersListToCreateEvent from './events-userListToCreateEvent'
import { inviteMembersToAttendEvent_APIcall } from '../slice-adminevents/slice-invitememberstoattendevent'
import { uploadEventBannerImage_APIcall } from '../slice-adminevents/slice-uploadeventbannerimage'
import { getUUID } from '../../@core/assets/UUID'
import { useForm } from 'react-hook-form'
import usePlacesAutocomplete, { getGeocode, getDetails, getLatLng, getZipCode } from "use-places-autocomplete"
import { getAllActiveEvents_APIcall } from '../slice-adminevents/slice-getallactiveevents'

const AddoreditgroupPopup = (props) => {
  console.log(props)
  const handleClose = () => setshow1(false)
  const [hrs, sethrs] = useState([])
  const [values, onChange] = useState('')
  const [eventname, seteventname] = useState('')
  const [cityy, getcity] = useState('')
  const [Code, setcode] = useState('')
  const [file, setfiles] = useState('')
  const [eventVenue, setEventVenue] = useState('')
  const [address, setaddress] = useState('')
  const [txt, defaulttxt] = useState('No')
  const [levent, setevent] = useState(true)
  const [showCalendardetail, setShowCalendardetail] = useState(false)
  const [mom, setmom] = useState('')
  const [alldays, setalldays] = useState(false)
  const stateoption = [{ value: '', label: 'Boston' }]
  const [img1, setimg1] = useState('')
  const [intersetarr1] = useState([{ name: 'Pets' }, { name: 'Sports', css: { marginLeft: "-8px" } }, { name: 'Travel', css: { marginLeft: "-1px" } }, { name: 'Music', css: { marginLeft: "5px" } }, { name: 'Painting', css: { marginLeft: "10px" } }, { name: 'Outdoors', css: { marginLeft: "10px" } }])
  const [intersetarr] = useState([{ name: 'Comedy' }])
  const [textareas, setarea] = useState('')
  const [isHintSocialEvent, setIsHintSocialEvent] = useState(false)
  const [isHintSocialVal, setIsHintSocialVal] = useState('0')
  const [SelectedGroupName, setSelectedGroupName] = useState('')
  const [selected1, setSelected1] = useState(null)
  const [show1, setshow1] = useState(false)
  const [Options2, setoption2] = useState([])
  const [eventFromDate, setEventFromDate] = useState('')
  const [showCalendar, setShowCalendar] = useState(false)
  const [eventToDate, setEventToDate] = useState('')
  const [allDayEnable, setAllDayEnable] = useState(true)
  const [interest, setinterests] = useState([""])
  const [userIdListToInvite, setUserIdToInvite] = useState([])
  const [chooseGroupName, setChooseGroupName] = useState('')
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)
  const [allDayValue, setAllDayValue] = useState('0')
  const [onOffLimitesSpotsValue, setOnOffLimitesSpotsValue] = useState('0')
  const [startMeridiem, setStartMeridiem] = useState("AM")
  const [endMeridiem, setEndMeridiem] = useState("AM")
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [secondaryEventAddress, secondaddress] = useState('')
  const [City, setcity] = useState('')
  const [states, secondstate] = useState('')
  const [postal_code, setpostal_code] = useState('')
  const [allActiveGroupsList, setAllActiveGroupsList] = useState([])
  const [getAllActiveGroupsList, setGetAllActiveGroupsList] = useState([])
  const authStat_uploadEventBannerImageData = useSelector((state) => state.uploadEventBannerImageData)
  const authStat_getAllActiveEvents = useSelector((state) => state.getAllActiveEventsData)
  const authStat_createEvent = useSelector((state) => state.createNewEventData)
  const authStat_getAllActiveGroups = useSelector((state) => state.activeGroupsdata)
  const authStat_inviteUsersToAttendEvent = useSelector((state) => state.inviteMembersToAttendEventData)


  const [eventNameError, setEventNameError] = useState('')
  const [associatedGroupNameError, setAssociatedGroupNameError] = useState('')
  const [eventAddressError, setEventAddressError] = useState('')
  const [eventCityNameError, setEventCityNameError] = useState('')
  const [eventStateNameError, setEventStateNameError] = useState('')
  const [eventZipCodeError, setEventZipCodeError] = useState('')
  const [eventSpotsCountError, setEventSpotsCountError] = useState('')
  const [eventStartDateError, setEventStartDateError] = useState('')
  const [eventEndDateError, setEventEndDateError] = useState('')
  const [eventLocationError, setEventLocationError] = useState('')
  const [eventStarttimeError, setEventStarttimeError] = useState('')
  const [eventEndtimeError, setEventEndtimeError] = useState('')
  const [eventerrortrue, seterror] = useState(false)

  // new declarations
  const [eventName, setEventName] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [limitedSpots, setLimitedEnable] = useState(false)
  const [numberofSpots, setNumberofSpots] = useState('')
  const [eventURL, setEventURL] = useState('')
  const [groupingid, setgroupingid] = useState('')
  const [submit, setsubmitted] = useState(false)

  // location Declarations
  const [eventAddress, setEventAddress] = useState('')
  const [latitudes, setlatitude] = useState('')
  const [longitudes, setlongitude] = useState('')
  const [submitEvent, setSubmitEvent] = useState(false)
  const { register, handleSubmit, reset, clearErrors, setError, formState: { errors }, watch } = useForm()

  // const [latitude, setlatitude] = useState('')
  // const [longitude, setlongitude] = useState('')
  const [setval, getval] = useState(false)
  const [locationerror, getlocationerror] = useState('')
  // const [submit, setsubmitted] = useState(false)
  // const [setcity, getcity] = useState('')
  const [spoterror, showspoterror] = useState('')
  const { ready, value, suggestions: { status, data }, setValue } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 1000
  })

  useEffect(() => {
    if (props.sendloc !== undefined || props.sendloc !== '') {
      setValue(props.sendloc)
      getval(true)
    }
    // 
    // if (value === '') {
    //   getlocationerror('Location Name is Required')
    // } else {
    //   getlocationerror('')
    // }
  }, [])


  const handleInput = (e) => {
    setValue(e.target.value)
    if (e.target.value === '') {
      setEventLocationError('Location Name is Required')
    } else {
      setEventLocationError('')
    }
    getval(false)

  }

  const handleSelect = ({ description }) => () => {
    const parameter = {
      address: description
    }
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false)
    getval(true)

    // Get latitude and longitude via utility functions
    getGeocode(parameter)
      // By default we use the "long_name" value from API response, you can tell the utility to use "short_name"
      // by setting the second parameter to "true"
      .then((results) => {
        const { lat, lng } = getLatLng(results[0])
        console.log("📍 Coordinates: ", lat, lng)
        const lati = lat
        const longi = lng
        // secondaddress(address)
        setlatitude(lati)
        setlongitude(longi)
        const parameter1 = {
          // Use the "place_id" of suggestion from the dropdown (object), here just taking first suggestion for brevity
          placeId: results[0].place_id,
          // Specify the return data that you want (optional)
          fields: ["adr_address"]
        }

        getDetails(parameter1)
          .then((details) => {
            let more_region = ''
            let more_locality = ''
            let more_postal = ''
            const val = JSON.stringify(details.adr_address)
            const m = JSON.parse(val)
            console.log(m)
            if (m.includes("locality")) {
              const locality = m.split('locality">')
              more_locality = locality[1].split("</span>")
              getcity(more_locality[0])


            }
            if (m.includes("region")) {
              const region = m.split('region">')
              more_region = region[1].split("</span>")
            }
            if (m.includes("postal-code")) {

              const postal = m.split('postal-code">')
              more_postal = postal[1].split("</span>")
            }

            secondstate(more_region[0])
            setcity(more_locality[0])


            setpostal_code(more_postal[0])

            // props.sendloc(description, more_locality[0], more_region[0], more_postal[0], latitude, longitude)

          })
          .catch((error) => {
            console.log("Error: ", error)
          })
      })
  }

  const renderSuggestions = () => data.map((suggestion) => {
    const {
      place_id,
      structured_formatting: { main_text, secondary_text }
    } = suggestion
    console.log("renderSuggestions", suggestion)
    return (
      <li style={{ listStyleType: 'none' }} className="m-75" key={place_id} onClick={handleSelect(suggestion)}>
        <strong>{main_text} </strong> <small>{secondary_text}</small>
      </li>
    )
  })

  const updateTest = () => {

  }


  const handleSelectGroup = event => {
    setOnOffLimitesSpotsValue('0')
    console.log(event.target.value)
    const selectedGroupId = event.target.value
    setgroupingid(selectedGroupId)
    const selectedGroupNames = event.target.label
    setSelectedGroupName(selectedGroupNames)
    const newAllGroupList = [...allActiveGroupsList]
    const findGroupName = newAllGroupList.filter((item) => item.value == selectedGroupId)
    const choosedGroupname = findGroupName[0].label
    setChooseGroupName(choosedGroupname)
    console.log(choosedGroupname)
  }
  useEffect(() => {
    if (onOffLimitesSpotsValue === '1') {
      if (numberofSpots === '' || numberofSpots === undefined) {
        showspoterror('Limited Spot Required')
      } else {
        showspoterror('')
      }
    } else {
      showspoterror('')
    }
    if (eventerrortrue === true) {
      if (City === '' || City === undefined) {
        setEventCityNameError('City is Required')

      } else {
        setEventCityNameError('')
      }

      if (states === '' || states === undefined) {
        setEventStateNameError('State is Required')
      } else {
        setEventStateNameError('')
      }
      if (postal_code === '' || postal_code === undefined) {
        setEventZipCodeError('Zip Code is Required')
      } else {
        setEventZipCodeError('')
      }

      if (eventFromDate === '' && eventFromDate === 'MM/DD/YYYY') {
        setEventStartDateError('Start Date is Required')
      } else if (eventFromDate != '' && eventFromDate != 'MM/DD/YYYY') {
        setEventStartDateError('')
      }
      if (eventToDate === '' && eventToDate == 'MM/DD/YYYY') {
        setEventEndDateError('End Date is Required')
      } else if (eventToDate != '' && eventToDate != 'MM/DD/YYYY') {
        setEventEndDateError('')
      }
    }
  }, [eventFromDate, value, eventToDate, City, postal_code, states, numberofSpots])
  const setcityval = (val) => {
    setcity(val)
    if (val !== '') {
      setEventCityNameError('')
    }
  }


  const onError = (errors, e, data) => {
    seterror(true)
    console.log(value)
    console.log(errors)
    if (onOffLimitesSpotsValue === '1') {
      if (numberofSpots === '' || numberofSpots === undefined) {
        showspoterror('Limited Spot Required')
      } else {
        showspoterror('')
      }
    } else {
      showspoterror('')
    }


    if (value === '' || value === undefined) {
      setEventLocationError('Location is Required')
    } else {
      setEventLocationError('')
    }
    if (City === '' || City === undefined) {
      setEventCityNameError('City is Required')
    } else if (City !== '' || City !== undefined) {
      setEventCityNameError('')
    }
    if (states === '' || states === undefined) {
      setEventStateNameError('State is Required')
    } else if (states !== '' || states !== undefined) {
      setEventStateNameError('')
    }
    if (postal_code === '' || postal_code === undefined) {
      setEventZipCodeError('Postal Code is Required')
    } else if (postal_code !== '' || postal_code !== undefined) {
      setEventZipCodeError('')
    }
    if (eventFromDate === '' || eventFromDate === 'MM/DD/YYYY') {
      setEventStartDateError('Start Date is Required')
    } else if (eventFromDate !== '' || eventFromDate != 'MM/DD/YYYY') {
      setEventStartDateError('')
    }
    if (eventToDate === '' || eventToDate === 'MM/DD/YYYY') {
      setEventEndDateError('End Date is Required')
    } else if (eventToDate !== '' || eventToDate !== 'MM/DD/YYYY') {
      setEventEndDateError('')
    }
    if (startTime === '' || startTime === '00:00') {
      setEventStarttimeError('Start Date is Required')
    } else if (startTime !== '' || startTime !== '00:00') {
      setEventStarttimeError('')
    }
    if (endTime === '' || endTime === '00:00') {
      setEventEndtimeError('End Date is Required')
    } else if (endTime !== '' || endTime !== '00:00') {
      setEventEndtimeError('')
    }

  }
  useEffect(() => {

    const vid_file_name = getUUID()
    const options = []
    const obj = {}
    const test = 12
    for (let i = 0; i <= 11; i++) {
      for (let j = 0; j <= 59; j++) {

        const obj = {}
        if ((i < 10)) {

          obj['label'] = `0${i}`
        } else {

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
  }, [])

  const getallvalues = (address, city, state, postal, lat, long) => {

    console.log(address, city, state, postal, lat, long)
    secondaddress(address)
    setcity(city)
    secondstate(state)
    setpostal_code(postal)
    setlatitude(lat)
    setlongitude(long)
    // handleCityNameError()

  }
  const isHintSocialEventTrigger = () => {
    if (isHintSocialEvent === true) {
      setIsHintSocialEvent(false)
      setIsHintSocialVal('0')
    } else {
      setIsHintSocialEvent(true)
      setIsHintSocialVal('1')
    }
  }

  const checktoggle = () => {
    if (allDayEnable === true) {
      setAllDayEnable(false)
      setAllDayValue('1')
    } else {
      setAllDayEnable(true)
      setAllDayValue('0')
    }
  }

  const chooseFromDateCall = () => {
    if (showCalendar == false) {
      setShowCalendar(true)
    } else {
      setShowCalendar(false)
    }
  }

  const chooseToDateCall = () => {
    if (showCalendardetail === false) {
      setShowCalendardetail(true)
    } else {
      setShowCalendardetail(false)
    }
  }

  const onOffLimitedSpotsCall = () => {
    if (limitedSpots === false) {
      setLimitedEnable(true)
      if (eventerrortrue === true) {
        showspoterror('Limited Spots Required')
      }
      setOnOffLimitesSpotsValue('1')
      defaulttxt('Yes')
    } else if (limitedSpots === true) {
      setLimitedEnable(false)
      setOnOffLimitesSpotsValue('0')
      showspoterror('')
      defaulttxt('No')
    }
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

  const openCreateEventDialog = () => {
    setshow1(true)
    clearErrors()
    reset()
    showspoterror('')
    setIsHintSocialEvent('0')
    seterror(false)
    setcity('')
    setValue('')
    secondstate('')
    setpostal_code('')
    setEventLocationError('')
    setEventEndDateError('')
    setEventStartDateError('')
    setEventStarttimeError('')
    setEventEndtimeError('')
    setEventCityNameError('')
    setEventStateNameError('')
    setEventZipCodeError('')
    setSubmitEvent(false)
  }

  const closeDialogCall = () => {
    clearErrors()

    setshow1(false)
    reset()
  }

  const handlecrop = (v) => {
    console.log(v)
    setfiles(v)
  }

  const resetval = (v) => {
    setfiles('')
  }

  const clickvalue = (v) => {
    console.log(v)
    if (v.length !== 0) {
      const text = []
      const int = [...v]
      for (let i = 0; i < int.length; i++) {
        text.push(int[i].name)
        setinterests(text)
      }
    }
    else if (v.length == 0) {
      setinterests([""])
    }
    console.log(interest)
  }

  const handleStartTime = (event) => {
    const setIndex = Options2.findIndex(res => res.id === event.target.value)
    console.log(setIndex)
    console.log(Options2[setIndex].value1, Options2[setIndex].label)
    setStartTime(`${Options2[setIndex].label}:${Options2[setIndex].value1}`)
    const svaltime = `${Options2[setIndex].label}:${Options2[setIndex].value1}`
    console.log(event.target.value)
    if (svaltime == '00:00') {
      setEventStarttimeError('Start Time is Required')
    } else if (svaltime != '') {
      setEventStarttimeError('')
    }
    // console.log(event.target.value1)
  }
  const handleEndTime = (event) => {

    const setIndex = Options2.findIndex(res => res.id === event.target.value)
    console.log(setIndex)
    console.log(Options2[setIndex].value1, Options2[setIndex].label)
    setEndTime(`${Options2[setIndex].label}:${Options2[setIndex].value1}`)
    const evaltime = `${Options2[setIndex].label}:${Options2[setIndex].value1}`
    console.log(event.target.value)
    if (evaltime == '00:00') {
      setEventEndtimeError('End Time is Required')
    } else if (evaltime != '') {
      setEventEndtimeError('')
    }
    // console.log(event.target.value1)
  }

  useEffect(() => {
    setLoader(true)
    const payload = {
      user_id: localStorage.getItem('loggedIn_userId')
    }
    dispatch(activeGroups_APIcall(payload))
  }, [])

  useEffect(() => {
    if (authStat_getAllActiveGroups.activeGroupsValue.responseBody != undefined && authStat_getAllActiveGroups.activeGroupsValue.responseCode == 200) {
      setGetAllActiveGroupsList(authStat_getAllActiveGroups.activeGroupsValue.responseBody)
      const responseData = [...authStat_getAllActiveGroups.activeGroupsValue.responseBody]
      const groupsData = []
      for (let i = 0; i < responseData.length; i++) {
        groupsData.push({ value: responseData[i].group_id, label: responseData[i].group_name })
      }
      const defaultVal = [{ value: '', label: 'Select one...' }]
      const filterVal = groupsData.filter(item => item.label !== null || item.label !== undefined)
      const filterByGroupName = filterVal.sort((a, b) => a.label.localeCompare(b.label))
      const consolidatedGroupsList = [...defaultVal, ...filterByGroupName]
      console.log(consolidatedGroupsList)
      setAllActiveGroupsList(consolidatedGroupsList)
      setLoader(false)
    } else {
      setGetAllActiveGroupsList([])
    }
  }, [authStat_getAllActiveGroups.activeGroupsValue])


  const locationchange = (v, lat, long) => {

    console.log(v)
    setEventAddress(v)
    setlatitude(lat)
    setlongitude(long)
  }

  // const handleAssociatedGroupNameError = () => {
  //   if (submitEvent === true) {
  //     if (chooseGroupName === '') {
  //       setAssociatedGroupNameError('Associated Group name is Required')
  //     } else {
  //       setAssociatedGroupNameError('')
  //     }
  //   }
  // }

  // setEventNameError setAssociatedGroupNameError setEventAddressError setEventCityNameError setEventStateNameError setEventZipCodeError setEventSpotsCountError

  const dateConversionTest = () => {

    console.log(eventFromDate)
    const conversion = eventFromDate.toUTCString()
    console.log(conversion)
    const UTCStartDate = moment(eventFromDate).format("YYYY-MM-DD")
    console.log(UTCStartDate)
    const UTCStartTime = `${startTime} ${startMeridiem}`
    const UTCStartTimeConversion = moment(UTCStartTime, "h:mmA").format("HH:mm")
    console.log(UTCStartTimeConversion)
    const consolidateUTCStartDateTime = UTCStartDate + 'T' + UTCStartTimeConversion + '.000Z'
    console.log(consolidateUTCStartDateTime)
  }

  const onSubmit = (data) => {
    seterror(true)
    console.log(data)
    setSubmitEvent(true)
    console.log(value)
    console.log(errors)
    if (onOffLimitesSpotsValue === '1') {
      if (numberofSpots === '' || numberofSpots === undefined) {
        showspoterror('Limited Spot Required')
      } else {
        showspoterror('')
      }
    } else {
      showspoterror('')
    }
    if (value === '' || value === undefined) {
      setEventLocationError('Location is Required')
    } else {
      setEventLocationError('')
    }
    if (City === '' || City === undefined) {
      setEventCityNameError('City is Required')
    } else if (City !== '' || City !== undefined) {
      setEventCityNameError('')
    }
    if (states === '' || states === undefined) {
      setEventStateNameError('State is Required')
    } else if (states !== '' || states !== undefined) {
      setEventStateNameError('')
    }
    if (postal_code === '' || postal_code === undefined) {
      setEventZipCodeError('Postal Code is Required')
    } else if (postal_code !== '' || postal_code !== undefined) {
      setEventZipCodeError('')
    }
    if (eventFromDate === '' || eventFromDate === 'MM/DD/YYYY') {
      setEventStartDateError('Start Date is Required')
    } else if (eventFromDate !== '' || eventFromDate != 'MM/DD/YYYY') {
      setEventStartDateError('')
    }
    if (eventToDate === '' || eventToDate == 'MM/DD/YYYY') {
      setEventEndDateError('End Date is Required')
    } else if (eventToDate != '' || eventToDate != 'MM/DD/YYYY') {
      setEventEndDateError('')
    }
    if (startTime === '' || startTime === '00:00') {
      setEventStarttimeError('Start Date is Required')
    } else if (startTime != '' || startTime != '00:00') {
      setEventStarttimeError('')
    }
    if (endTime === '' || endTime == '00:00') {
      setEventEndtimeError('End Date is Required')
    } else if (endTime != '' || endTime != '00:00') {
      setEventEndtimeError('')
    }

    //*****Start date and time- section start */
    const startconsolidateUTCStartDateTime = []
    const endConsolidateUTCEndDateTime = []
    if (allDayValue == '0') {
      console.log(eventFromDate)
      const startConversion = eventFromDate.toUTCString()
      console.log(startConversion)
      const startUTCStartDate = moment(eventFromDate).format("YYYY-MM-DD")
      console.log(startUTCStartDate)
      const startUTCStartTime = `${startTime} ${startMeridiem}`
      const startUTCStartTimeConversion = moment(startUTCStartTime, "h:mmA").format("HH:mm")
      console.log(startUTCStartTimeConversion)
      const startDateResult = startUTCStartDate + 'T' + startUTCStartTimeConversion + ':00.000Z'
      console.log(startDateResult)
      startconsolidateUTCStartDateTime.push(startDateResult)
      //*****Start date and time- section ends */

      //*****end date and time- section start */
      console.log(eventFromDate)
      const endConversion = eventToDate.toUTCString()
      console.log(endConversion)
      const endUTCEndDate = moment(eventToDate).format("YYYY-MM-DD")
      console.log(endUTCEndDate)
      const endUTCEndTime = `${endTime} ${endMeridiem}`
      const endUTCEndtimeConversion = moment(endUTCEndTime, "h:mmA").format("HH:mm")
      console.log(endUTCEndtimeConversion)
      const endDateResult = endUTCEndDate + 'T' + endUTCEndtimeConversion + ':00.000Z'
      console.log(endDateResult)
      endConsolidateUTCEndDateTime.push(endDateResult)
    }
    else if (allDayValue == "1") {
      console.log(eventFromDate)
      const startConversion = eventFromDate.toUTCString()
      console.log(startConversion)
      const startUTCStartDate = moment(eventFromDate).format("YYYY-MM-DD")
      console.log(startUTCStartDate)
      const startDateResult = startUTCStartDate + 'T00:00:00.000Z'
      startconsolidateUTCStartDateTime.push(startDateResult)

      console.log(eventFromDate)
      const endConversion = eventToDate.toUTCString()
      console.log(endConversion)
      const endUTCEndDate = moment(eventToDate).format("YYYY-MM-DD")
      console.log(endUTCEndDate)
      const endDateResult = startUTCStartDate + 'T00:00:00.000Z'
      endConsolidateUTCEndDateTime.push(endDateResult)
    }
    //*****end date and time- section ends */

    let group_name1
    if (allActiveGroupsList.length !== 0) {
      const val = allActiveGroupsList.filter(res => res.value === data.SelectedGroupName)
      console.log(val)
      group_name1 = val[0].label
    } else {
      group_name1 = ''
    }
    console.log(group_name1)
    const eventStartTime = `${startTime} ${startMeridiem}`
    const eventEndTime = `${endTime} ${endMeridiem}`
    const longitudeVal = longitudes
    const latitudeVal = latitudes
    console.log(eventFromDate)

    // const enteredEventURL = eventURL
    // const URLdata = []
    // if (eventURL.startsWith("https://") == true) {
    //   URLdata.push(eventURL)
    // }
    // else if (eventURL.startsWith("https://") == false) {
    //   URLdata.push("https://" + eventURL)
    // }

    const payload =
    {
      is_hint_social_event: isHintSocialVal,
      group_id: data.SelectedGroupName,
      user_id: localStorage.getItem("loggedIn_userId"),
      event_title: data.eventname,
      group_name: group_name1,
      description: data.description,

      //address key-values
      location: data.venue,
      // longitude: longitudeVal.toString(),
      // lattitude: latitudeVal.toString(),
      longitude: longitudeVal.toString(),
      lattitude: latitudeVal.toString(),
      address: value,
      city: City,
      state: states,
      zip_code: postal_code,

      is_all_day_enable: allDayValue,
      start_date: startconsolidateUTCStartDateTime[0],
      end_date: endConsolidateUTCEndDateTime[0],
      start_time: eventStartTime,
      end_time: eventEndTime,
      is_add_multiple_dates_enable: '0',
      additional_date_time: [''],
      interest: interest,

      is_limited_spots_enable: onOffLimitesSpotsValue,
      no_of_spots: numberofSpots,
      autofill_spots_from_waitlist: '0',
      autofill_spots_from_signups: '0',
      event_url: data.eventURL
    }

    console.log(payload, "aaaaa")


    // if (eventNameError == "" && associatedGroupNameError == "" && eventAddressError == "" &&
    //   eventCityNameError == "" && eventStateNameError == "" && eventZipCodeError == "" &&
    //   eventSpotsCountError == "" && eventStartDateError == "" && eventEndDateError=="") {
    if (eventLocationError === '' && eventEndtimeError === '' && eventEndtimeError === '' && eventEndDateError === '' && eventStartDateError === '' && eventCityNameError === '' && eventZipCodeError === '' && eventStartDateError === '' && spoterror === '') {
      setLoader(true)

      dispatch(createNewEvent_APIcall(payload))

    }
    setshow1(true)
  }

  useEffect(() => {
    if (authStat_createEvent.data.responseBody != undefined && authStat_createEvent.data.responseCode == 200) {
      
      if ((userIdListToInvite.length === 0) && (file == "")) {
        const payloads = {
          admin_id: localStorage.getItem("loggedIn_userId"),
        }
        dispatch(getAllActiveEvents_APIcall(payloads))
      }
    }
  }, [authStat_createEvent.data])


  useEffect(() => {
    if (authStat_createEvent.data.responseBody !== undefined && authStat_createEvent.data.responseCode == 200) {
      setLoader(false)
      setshow1(false)
      if (userIdListToInvite.length > 0) {
        console.log(authStat_createEvent.data.responseBody.event_id)
        const payload = {
          user_id: localStorage.getItem('loggedIn_userId'),
          group_id: groupingid,
          event_id: authStat_createEvent.data.responseBody.event_id,
          userArray: userIdListToInvite
        }
        dispatch(inviteMembersToAttendEvent_APIcall(payload))
      }
    } else {
      // setshow1(true)
      setLoader(false)
    }
  }, [authStat_createEvent.data])

  useEffect(() => {

    if (authStat_inviteUsersToAttendEvent.data.responseBody != undefined &&
      authStat_inviteUsersToAttendEvent.data.responseCode == 200 &&
      authStat_createEvent.data.responseBody != undefined
    ) {

      console.log(authStat_inviteUsersToAttendEvent.data.responseBody)
      console.log(authStat_createEvent.data.responseBody)
      if (file != "" && file != undefined) {
        const payload = new FormData()
        payload.append('user_id', localStorage.getItem("loggedIn_userId"))
        payload.append("event_id", authStat_createEvent.data.responseBody.event_id)
        payload.append("file_data", file)
        dispatch(uploadEventBannerImage_APIcall(payload))
      } else if (file == "") {
        setLoader(false)
        setshow1(false)
      }
    }
  }, [authStat_createEvent.data])

  useEffect(() => {

    if (authStat_uploadEventBannerImageData.data.responseBody != undefined &&
      authStat_uploadEventBannerImageData.data.responseCode == 200 &&
      authStat_createEvent.data.responseBody != undefined) {
      const payloads = {
        admin_id: localStorage.getItem("loggedIn_userId"),
      }
      dispatch(getAllActiveEvents_APIcall(payloads))
      setLoader(false)
      setshow1(false)
    } else {
      setLoader(false)
      setshow1(false)
      setIsHintSocialVal('0')
      setgroupingid('')
      setEventName('')
      setEventVenue('')
      secondaddress('')
      setcity('')
      secondstate('')
      setpostal_code('')
      setEventFromDate('')
      setEventToDate('')
      setinterests([""])
      setOnOffLimitesSpotsValue('0')
      setNumberofSpots('')
      setEventURL('')
      setEventNameError('')
      setAssociatedGroupNameError('')
      setEventAddressError('')
      setEventCityNameError('')
      setEventStateNameError('')
      setEventZipCodeError('')
      setEventSpotsCountError('')
      setEventStartDateError('')
      setEventEndDateError('')
    }
  }, [authStat_createEvent.data])

  const numberInputOnWheelPreventChange = (e) => {
    // Prevent the input value change
    e.target.blur()

    // Prevent the page/container scrolling
    e.stopPropagation()

    // Refocus immediately, on the next tick (after the current   function is done)
    setTimeout(() => {
      e.target.focus()
    }, 0)
  }

  return (
    <>
      <img onClick={() => openCreateEventDialog()} src={addicon1} width="16px" height="16px" style={{ cursor: "pointer" }}></img>
      <Modal show={show1} onHide={() => setshow1(false)} backdrop='static' dialogClassName="custom-modal">
        <div style={{ display: loader !== false ? '' : 'none' }}>
          <div className='enable-loader1'>
            <img src={loadingSpin} width="80px" height="80px"></img>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit, onError)} >
          <div className='p-2'>
            <div>
              <div className="p-2">
                <div className='d-flex justify-content-start'>
                  <span className='edit_profile'>Add Event Info</span>
                </div>
                <div className='col-12 borders mb-2'>
                  <span className=' mb-1 mx-1'></span>
                </div>
                {/* <button onClick={() => dateConversionTest()}>dateConversionTest</button> */}

                <AddorEditprofilePopup crop={handlecrop} handle={resetval}></AddorEditprofilePopup>
                <div className='mt-2'>
                  <img src={isHintSocialEvent === true ? checked : whitebox} width="20px" height="20px" className='me-50' onClick={isHintSocialEventTrigger}></img>
                  <span className='sponsorpopup-textheader'>Hint Social Event</span>&nbsp;
                  <img src={infocircle} width="20px" height="20px"></img></div>
                <div className="row mt-1">
                  <div className="col-6 d-flex flex-column">
                    <span className="eventdetail_smaller ms-50 mt-75">Event Name</span>
                    <input autoComplete='off' defaultValue={eventname} className="formControl text_field mt-50" placeholder="Add event name..." onChange={e => setEventName(e.target.value)}
                      {...register("eventname", { required: "Event Name is required" })} />

                    {errors.eventname && (<span className="text-danger">{errors.eventname.message}</span>)}
                    {/* <span className='ps-25 text-danger'>{eventNameError}</span> */}
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <span className="eventdetail_smaller ms-50 mt-75">Associated Group</span>
                    <select id="category" defaultValue={SelectedGroupName} onChange={(e) => handleSelectGroup} placeholder="Select One..."
                      className='formControl sponsorship_aligns editevent-inputtext'
                      // onKeyUp={handleAssociatedGroupNameError}
                      {...register("SelectedGroupName", { required: "Associated Group name is Required" })}
                    // onKeyUp={handleAssociatedGroupNameError}
                    >
                      {allActiveGroupsList.map((data) => {
                        return (
                          <>
                            <option value={data.value}>{data.label}</option>
                          </>
                        )
                      })}
                    </select>
                    {/* <span className='ps-25 text-danger'>{associatedGroupNameError}</span> */}
                    {errors.SelectedGroupName && <p style={{ color: 'red' }}> {errors.SelectedGroupName.message}</p>}
                  </div>
                </div>

                <div className="col-12 mt-2 d-flex flex-column">
                  <span className="eventdetail_smaller  ms-50">Description</span>
                </div>
                <div className="col-12 mt-50">
                  <textarea className="w-100 formControl pt-1 text_field" maxLength="3001" placeholder="Add a description" style={{ height: "104px" }}
                    onChange={e => setEventDescription(e.target.value)} {...register("description", { required: "Description is required", maxLength: { value: 3000, message: "Description Character Limit Exceeded", } })} />
                  {errors.description && (<span className="text-danger">{errors.description.message}</span>)}
                </div>

                {/* location api starts */}
                <div className='bodycenter-panel'>
                  {/* <AutoComplete handle={locationchange} data={submit} sendloc={props.data1.location}></AutoComplete> */}

                  {/* <AutoComplete handle={clickfunction} unhandle={clickno} past={clickfunc1} searchValue={searchValue}></AutoComplete> */}

                  {/* <EventLocationAPI handle={locationchange} data={submit} sendloc={''}></EventLocationAPI> */}
                </div>
                {/* location api ends */}

                <div className="row mt-2">
                  <div className="col-6 d-flex flex-column">
                    <span className="eventdetail_smaller ms-50 mt-75">Venue</span>
                    <input autoComplete='off' className="formControl text_field" placeholder="Add venue name..."
                      onChange={e => setEventVenue(e.target.value)} {...register("venue", { required: "Venue is required" })} />

                    {errors.venue && (<span className="text-danger">{errors.venue.message}</span>)}

                  </div>
                  <div className="col-6 d-flex flex-column">
                    {/* <EventLocationAPI handle={locationchange} data={submit} sendloc={getallvalues}></EventLocationAPI> */}

                    <div className='col-12' >
                      <span className='input_toptext'>Address</span>

                      <input autoComplete='off' name="fullname formControl sponsorship_innertext" type="text" placeholder='Add venue Address...'
                        value={value}
                        onChange={handleInput}
                        disabled={!ready}

                        className='formControl text_field mt-50' />

                      {status === "OK" && setval === false && <div className="col-12 " style={{ border: "1px solid #d8d6de", borderRadius: "14px" }}>{renderSuggestions()}</div>}
                      <span className='text-danger' >{eventLocationError}</span>
                      {/* <span className='ps-25 text-danger' style={{display:value === ''}}>Location is Required</span> */}
                      {/* <span className='text-danger' >{eventAddressError}</span> */}
                      {/* <span>{secondary_text}</span> */}
                    </div>
                    {/* {errors.venue && (<small className="text-danger">{errors.venue.message}</small>)} */}


                    {/* <span className='ps-25 text-danger'>{eventAddressError}</span> */}

                    {/* <span className="eventdetail_smaller ms-50 mt-75">Address</span>
                  <input className="formControl sponsorship_innertext" placeholder="Add venue address..." defaultValue={address}></input> */}
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-4 d-flex flex-column mt-75">
                    <span className="eventdetail_smaller ms-50 ">City</span>

                    <input autoComplete='off' className="formControl text_field" placeholder="Add city..." defaultValue={City} name="City"
                      onChange={e => setcity(e.target.value)}
                    // onChange={City?()=>clearErrors("City"):''}
                    />
                    <span className='text-danger'>{eventCityNameError}</span>


                    {/* {errors.City && (<small className="text-danger">{errors.City.message}</small>)} */}

                  </div>
                  <div className="col-4 d-flex flex-column mt-75">
                    <span className="eventdetail_smaller ms-50 ">State</span>
                    <input autoComplete='off' className="formControl  text_field" placeholder="Add state..." defaultValue={states} name="states"
                      onChange={e => secondstate(e.target.value)} />

                    <span className='text-danger'>{eventStateNameError}</span>
                    {/* <select value={selected1} onChange={handleChanges1} placeholder="Select one..."
                    className={`formControl  sponsorship_aligns ${selected1 == undefined ? "sponshorship_text_placeholder" : "sponsorship_innertext"}`}    >
                    {stateoption.map((res) => {
                      return (
                        <>
                          <option className="text" style={{ display: props.value !== 'edit' ? 'none' : '' }} >Select one...</option>
                          <option
                            value={res.value}>{res.label}</option>
                        </>
                      )
                    })}
                  </select> */}
                  </div>

                  <div className="col-4 d-flex flex-column">
                    <span className="eventdetail_smaller ms-50 mt-75">Zip Code</span>
                    <input autoComplete='off' type='number' className="formControl text_field" placeholder="Add zip code..." defaultValue={postal_code} name="postal_code"
                      onChange={e => setpostal_code(e.target.value)} />

                    <span className='text-danger'>{eventZipCodeError}</span>
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
                    {/* <img className="ms-50" onClick={checktoggle} src={alldays === true ? on : off} width="48px" height="27px" style={{ position: "relative", top: "-7px" }}></img> */}
                    <img className="ms-50" onClick={checktoggle} src={allDayEnable === true ? off : on} width="48px" height="27px" style={{ position: "relative", top: "-7px" }}></img>
                  </div>
                </div>

                <div className="row">
                  {/* start date */}
                  <div className="col-6">
                    <div className='formControl calen d-flex justify-content-flex-end align-items-center'>
                      <input autoComplete='off' className={`form_box ${eventFromDate === '' ? "sponshorship_text_placeholder" : ''}`} value={eventFromDate !== '' ? moment(eventFromDate).format("MM/DD/YYYY") : 'MM/DD/YYYY'}

                      ></input>
                      <img src={calendar} width="34px" height="34px" onClick={chooseFromDateCall}></img>
                    </div>
                    <div>
                      {errors.eventFromDate && (<span className="text-danger">{errors.eventFromDate.message}</span>)}
                      <span className='ps-25 text-danger'>{eventStartDateError}</span>
                      <Calendar className={showCalendar ? "" : "hide"} minDate={new Date()}
                        onChange={setEventFromDate} value={eventFromDate} />
                    </div>
                  </div>


                  {/* end date */}
                  <div className="col-6">
                    <div className='formControl calen d-flex justify-content-flex-end align-items-center'>
                      <input autoComplete='off' className={`form_box ${eventToDate === '' ? "sponshorship_text_placeholder" : ""}`} value={eventToDate !== '' ? moment(eventToDate).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                      <img src={calendar} width="34px" height="34px" onClick={chooseToDateCall}></img>
                    </div>
                    <div>
                      <span className='ps-25 text-danger'>{eventEndDateError}</span>
                      <Calendar className={showCalendardetail ? "" : "hide"} minDate={new Date()}
                        onChange={setEventToDate} value={eventToDate} />
                    </div>
                  </div>
                </div>


                {allDayEnable === true ? <div>
                  <div className="row mt-1">
                    <div className="col-6 d-flex flex-column ">
                      <span className="eventdetail_smaller ms-50 mt-75">Start Time</span>
                    </div>
                    <div className="col-6 d-flex flex-column">
                      <span className="eventdetail_smaller ms-50 mt-75">End Time</span>
                    </div>
                  </div>

                  <div className="row  d-flex justify-content-between">
                    <div className='col-6'>
                      <div className=" d-flex flex-row justify-content-between formControl "  >
                        <select className="col-4 event_test event_align" onChange={handleStartTime}
                        //  {...register("startTime", { required: "Associated Group name is Required" })}
                        >
                          {Options2.map((res, index) => {
                            return (
                              <option value={res.id}>{res.label}:{res.value1}</option>
                            )
                          })}

                        </select>
                        <select onChange={e => setStartMeridiem(e.target.value)} className="col-2 event_test sponsorship_aligns">
                          <option>AM</option>
                          <option>PM</option>
                        </select>
                      </div>
                      <span className='ps-25 text-danger'>{eventStarttimeError}</span>
                    </div>
                    {/* {errors.startTime && (<span className="text-danger">{errors.startTime.message}</span>)} */}
                    <div className='col-6'>
                      <div className="col-6 d-flex flex-row justify-content-between formControl "  >
                        <select onChange={handleEndTime} className="col-4 event_test event_align">
                          {Options2.map((res) => {
                            return (
                              <option value={res.id}>{res.label}:{res.value1}</option>
                            )
                          })}
                        </select>

                        <select onChange={e => setEndMeridiem(e.target.value)} className="col-2 event_test sponsorship_aligns">
                          <option>AM</option>
                          <option>PM</option>
                        </select>
                      </div>
                      <span className='ps-25 text-danger'>{eventEndtimeError}</span>
                    </div>

                  </div>

                </div>
                  : null}


                <hr className="mt-2" style={{ border: "1px solid #CCD8DB", width: "100%" }}></hr>

                <EditEventInterest handle={clickvalue}></EditEventInterest>
                {/* <EditEventPopularInterest></EditEventPopularInterest> */}
                <hr style={{ border: "1px solid #CCD8DB" }} className="mt-2"></hr>

                <div className='row pt-25'>
                  <div className='col-6'>
                    <div className='d-flex justify-content-between'>
                      <span className='eventdetails_bolderheading pb-1'>Limited Spots</span>
                      <div>
                        <span className="eventdetail_placeholder">
                          {txt} &nbsp;
                          <img src={limitedSpots === true ? on : off} width="48px" height="27px" onClick={onOffLimitedSpotsCall}></img>
                        </span>
                      </div>
                    </div>

                    <div style={{ display: limitedSpots == true ? "" : "none" }}>
                      <div className="mt-0 mb-1">
                        <span className="eventdetail_smaller ms-50 mt-75">Add Number of Spots</span>
                        <input autoComplete='off' onWheel={numberInputOnWheelPreventChange} type='number' className="formControl editEventInput" placeholder="Add Number of Spots"
                          onChange={e => setNumberofSpots(e.target.value)} />

                        {(<span className="text-danger">{spoterror}</span>)}
                      </div>
                    </div>
                  </div>

                  <div className='col-6 d-flex flex-column'>
                    <span className='eventdetails_bolderheading pb-1'>URL of the Event</span>
                    <input autoComplete='off' name="eventURL" className="formControl editEventInput eventURL" onChange={e => setEventURL(e.target.value)} placeholder="Enter Url"
                      {...register("eventURL", {
                        optional: "",
                        pattern: {
                          value: /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/,
                          message: "URL must begin with https://",
                        },
                      })} />
                    {errors.eventURL && (<small className="text-danger">{errors.eventURL.message}</small>)}
                  </div>
                </div>
                <hr className="mt-2" style={{ border: "1px solid #CCD8DB", width: "100%" }}></hr>

                <UsersListToCreateEvent handleDataToInviteMembers={getUserIdFromMembersList} eventId={""}></UsersListToCreateEvent>


                <div className='col-12 d-flex justify-content-center mt-3 mb-2'>
                  <button className='btn1-style me-4 text-cancel' onClick={() => closeDialogCall()}>Cancel</button>
                  <button className='btn2-style text-update' type="submit" >Update</button>
                  {/* onClick={() => createEventCall()} */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    getAllActiveEventsData: state.getAllActiveEventsData,
    createNewEventData: state.createNewEventData,
    activeGroupsdata: state.activeGroupsdata,
    inviteMembersToAttendEventData: state.inviteMembersToAttendEventData
  }
}
export default connect(mapStateToProps, {})(AddoreditgroupPopup)