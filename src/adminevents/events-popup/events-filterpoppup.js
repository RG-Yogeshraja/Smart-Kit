import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import sortby from '../../assets/images/dashboardimg/sorts.png'
// import uparrow from '../assets/images/dashboardimg/uparrows.png'
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown"
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp"
import '../../@core/scss/base/adminDashboard/eventsmenu/filtereventspopup.scss'
import checkblankboxes from '../../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../../assets/images/dashboardimg/checktickbox.png'
import searchIcon from '../../assets/images/dashboardimg/searchIcon.png'
// import FilterAgeRange from './filteragerange'
import React, { useEffect, useState } from "react"
import AutoComplete1 from '../../admingroups/groupspopup/getlocationfilter'
import { use } from 'i18next'
import FilterGrpCreatedby from './events-filtercreatedby'
import FiltergrpGroupType from './events-filtergrouptype'
import FiltergrpLocation from './events-filterlocation'
import EditHeight from '../../adminusers/editheight'
import FiltergrpSortby from './events-filtersortby'
import FilterInterests from '../../adminusers/filterinterests'
import FilterPopularInterests from '../../adminusers/filterpopularinterests'
import FilterGroupInterests from './events-filterinterests'
import FiltergrpWithin from './events-filterheight'
import FilterEventsCreatedby from './events-filtercreatedby'
import FilterEventsType from './events-filtergrouptype'
import FilterEventsLocation from './events-filterlocation'
import FilterEventsSortby from './events-filtersortby'
import FilterEventsWithin from './events-filterheight'
import FilterEventsSpots from './events-filternumberofspots'
import FilterEventsInterests from './events-filterinterests'
import { getEvent_filter_APICall } from '../slice-adminevents/geteventfilter-detail-splice'
import { useDispatch, useSelector } from 'react-redux'
import usePlacesAutocomplete, { getGeocode, getDetails, getLatLng, getZipCode } from "use-places-autocomplete"
import { getAllActiveEvents_APIcall } from '../slice-adminevents/slice-getallactiveevents'
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import { getAllPastEvents_APIcall } from '../slice-adminevents/slice-getallpastevents'

const FilterGrppopup = (props) => {
  const [loader, setloader] = useState(false)
  const [show, setShow] = useState(true)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [showLess, setshowLess] = useState(true)
  const [gender, setgender] = useState('')
  const [look, setlooks] = useState('')
  const [locationMileError, setLocationMileError] = useState('')
  const [choosedAddress, setChoosedAddress] = useState('')
  const [lastArray, setLastArray] = useState([])
  const [item_array, setitem_array] = useState([''])
  const [milesDisabled, setMilesDisabled] = useState(true)
  const authStat_getAllActiveEventsData = useSelector((state) => state.getAllActiveEventsData)
  const authStat_getFilterEventsData = useSelector((state) => state.getEvent_filterDetail)

  const min = 0
  const max = 1000
  const [getMiles, setMiles] = useState('')
  const [getenteredlocation, setenteredlocation] = useState('')
  const [maxs, setmax] = useState('')
  const [latitude, setlatitude] = useState('')
  const [longitude, setlongitude] = useState('')
  const [setval, getval] = useState(false)
  const [mins, setmin] = useState('')




  const dispatch = useDispatch()
  const [tags, setTags] = useState([
    { id: 0, naming: 'Private Events', keyname: 'Private Events', checking: false },
    { id: 1, naming: 'Public Events', keyname: 'Public Events', checking: false },
    { id: 2, naming: 'Limited spots Events', keyname: 'Limited Spots Events', checking: false },
    { id: 3, naming: 'Open Events', keyname: 'Open Events', checking: false },
    { id: 4, naming: 'Hint Social Events Only', keyname: 'Hint Social Events', checking: false },
    { id: 5, naming: 'Non-Hint Social Events Only', keyname: 'Non-Hint Social Events', checking: false },
    { id: 6, naming: 'Sponsored Events', keyname: 'Sponsored Events', checking: false },
  ])

  const clearFilterCall = () => {
    setMiles('')
    setValue('')
    setenteredlocation('')
    setlatitude('')
    setlongitude('')

    setTags([
      { id: 0, naming: 'Private Events', keyname: 'Private Events', checking: false },
      { id: 1, naming: 'Public Events', keyname: 'Public Events', checking: false },
      { id: 2, naming: 'Limited spots Events', keyname: 'Limited Spots Events', checking: false },
      { id: 3, naming: 'Open Events', keyname: 'Open Events', checking: false },
      { id: 4, naming: 'Hint Social Events Only', keyname: 'Hint Social Events', checking: false },
      { id: 5, naming: 'Non-Hint Social Events Only', keyname: 'Non-Hint Social Events', checking: false },
      { id: 6, naming: 'Sponsored Events', keyname: 'Sponsored Events', checking: false },
    ])
  }

  const changeShow = () => {
    setshowLess(!showLess)
  }

  //2 search location section starts
  const handleChange = event => {
    let val
    const values = Math.max(min, Math.min(max, Number(event.target.value)));
    if (values === 0) {
      val = ''
    } else {
      val = values
    }
    setMiles(val);
  }

  const numberInputOnWheelPreventChange = (e) => {
    e.target.blur()
    e.stopPropagation()
    setTimeout(() => {
      e.target.focus()
    }, 0)
  }

  const handleInputs = (e) => {
    if (e.target.value === '') {
      // alert('empty ...')
      setValue('')
      setenteredlocation('')
      setlatitude('')
      setlongitude('')
    }
    setValue(e.target.value)
    // if (e.target.value === '' && props.data === true) {
    //   getlocationerror('Location Name is Required')
    // } else {
    //   getlocationerror('')
    // }
    getval(false)
  }

  // ******* location API start********
  const { ready, value, suggestions: { status, data }, setValue } = usePlacesAutocomplete({
    requestOptions: {
    },
    debounce: 1000
  })
  const handleSelect = ({ description }) => () => {
    const parameter = { address: description }
    setValue(description, false)
    getval(true)
    getGeocode(parameter)
      .then((results) => {
        const { lat, lng } = getLatLng(results[0])
        const lati = lat
        const longi = lng
        setlatitude(lati)
        setlongitude(longi)
        setenteredlocation(description)
      })
  }
  const renderSuggestions = () => data.map((suggestion) => {
    const {
      place_id,
      structured_formatting: { main_text, secondary_text }
    } = suggestion
    if ((suggestion == '') || (suggestion == null) || (suggestion == undefined)) {
      alert('empty')
    }
    console.log("renderSuggestions", suggestion)
    console.log(typeof (suggestion))
    return (
      <li style={{ listStyleType: 'none' }} className="m-75" key={place_id} onClick={handleSelect(suggestion)}>
        <strong>{main_text} </strong> <small>{secondary_text}</small>
      </li>
    )
  })
  // ******* location API ends********

  useEffect(() => {
    if (getenteredlocation == '') {
      setMilesDisabled(true)
      setMiles('')
    }
    else if (getenteredlocation != '') {
      setMilesDisabled(false)
    }
  }, [getenteredlocation])
  //2 search location section ends

  // const handlechange = (index) => {  //old logic
  //   const val = []
  //   const newTags = [...tags]
  //   if (newTags[index].checking === true) {
  //     newTags[index].checking = false
  //   } else {
  //     newTags[index].checking = true
  //   }
  //   setTags(newTags)
  // }

  const handlechange = (index) => {  //new logic
    debugger
    const newTags = [...tags]
    const newTags1 = [...tags]
    const sortTags = newTags1
    const len = newTags.length
    switch (index) {
      case 0: {
        switch (newTags[index].checking) {
          case true: {
            if (newTags[0].checking == true) {
              newTags[0].checking = false
            }
            break;
          }
          case false: {
            if (newTags[0].checking == false) {
              newTags[0].checking = true
              newTags[1].checking = false
            }
            break;
          }
        }
        break;
      }
      case 1: {
        switch (newTags[index].checking) {
          case true: {
            if (newTags[1].checking == true) {
              newTags[1].checking = false
            }
            break;
          }
          case false: {
            if (newTags[1].checking == false) {
              newTags[1].checking = true
              newTags[0].checking = false
            }
            break;
          }
        }
        break;
      }
      case 2: {
        switch (newTags[index].checking) {
          case true: {
            if (newTags[2].checking == true) {
              newTags[2].checking = false
            }
            break;
          }
          case false: {
            if (newTags[2].checking == false) {
              newTags[2].checking = true
              newTags[3].checking = false
            }
            break;
          }
        }
        break;
      }
      case 3: {
        switch (newTags[index].checking) {
          case true: {
            if (newTags[3].checking == true) {
              newTags[3].checking = false
            }
            break;
          }
          case false: {
            if (newTags[3].checking == false) {
              newTags[3].checking = true
              newTags[2].checking = false
            }
            break;
          }
        }
        break;
      }
      case 4: {
        switch (newTags[index].checking) {
          case true: {
            if (newTags[4].checking == true) {
              newTags[4].checking = false
            }
            break;
          }
          case false: {
            if (newTags[4].checking == false) {
              newTags[4].checking = true
              newTags[5].checking = false
            }
            break;
          }
        }
        break;
      }
      case 5: {
        switch (newTags[index].checking) {
          case true: {
            if (newTags[5].checking == true) {
              newTags[5].checking = false
            }
            break;
          }
          case false: {
            if (newTags[5].checking == false) {
              newTags[5].checking = true
              newTags[4].checking = false
            }
            break;
          }
        }
        break;
      }
      case 6: {
        switch (newTags[index].checking) {
          case true: {
            newTags[6].checking = false
            break;
          }
          case false: {
            newTags[6].checking = true
            break;
          }
        }
        break;
      }
    }

    // if (newTags[index].checking === true) {
    //   newTags[index].checking = false
    // } else {
    //   newTags[index].checking = true
    // }
    setTags(newTags1)
  }

  const applyFilter = () => {
    // if ( value != '' && (values === '' || values === undefined) ) {
    //   setLocationMileError('Please add Mileage')
    //   setshowLess(true)
    //   setPopoverOpen(false)
    //   }
    // else {
    //   setLocationMileError('')
    // }
    let item_array = []
    const val = tags.filter(res => res.checking === true)

    console.log(val)
    if (val.length !== 0) {
      for (let i = 0; i < val.length; i++) {
        item_array.push(val[i].naming)
      }
      console.log(lastArray)
    }
    else {
      item_array = []
    }
    debugger
    let milesVal= ''
    if (latitude != '' && longitude != '' && getMiles == '') {
      milesVal='0'
    }
    else{
      milesVal=getMiles
    }
    console.log(getMiles)
    const payloads = {
      admin_id: localStorage.getItem("loggedIn_userId"),
      search_key: props.data,
      location: getenteredlocation,
      event_type: item_array,
      latitude: latitude,
      longitude: longitude,
      miles: milesVal
    }
    console.log(locationMileError)
    // if (value != '' && (miles === '' || miles === undefined)) {
    //   setLocationMileError('Mileage is required')
    // }
    // else if (miles != '' && (value === '' || value === undefined)) {
    //   setLocationMileError('Location is required')
    // }
    // else {
    // setLocationMileError('')
    console.log(payloads)
    if (payloads.event_type.length > 0 || (payloads.latitude != '' && payloads.longitude != '')) {
      setloader(true)
      dispatch(getEvent_filter_APICall(payloads))
    }
    else if (payloads.event_type.length == 0 && (payloads.latitude == '' && payloads.longitude == '')) {
      const payload = {
        admin_id: localStorage.getItem("loggedIn_userId"),
      }
      setloader(true)
      dispatch(getAllActiveEvents_APIcall(payload))
      dispatch(getAllPastEvents_APIcall(payload))
    }
    setPopoverOpen(!popoverOpen)
    setshowLess(!showLess)
    console.log(min, max, gender, look)
  }

  useEffect(() => {
    if (authStat_getAllActiveEventsData.data.responseCode == 200 && authStat_getAllActiveEventsData.data.responseBody != undefined) {
      setloader(false)
    }
    else {
      setloader(true)
    }
  }, [authStat_getAllActiveEventsData.data])

  useEffect(() => {
    if (authStat_getFilterEventsData.getEvent_dataval.responseCode == 200 && authStat_getFilterEventsData.getEvent_dataval.responseBody != undefined) {
      setloader(false)
    }
    else {
      setloader(true)
    }
  }, [authStat_getFilterEventsData.getEvent_dataval])



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
  }


  return (
    <div>
      <button className='btn_filter d-flex flex-row justify-content-flex-start align-items-center' style={{ border: "1px solid  #95E1BF", borderRadius: "10px", outline: 'none' }} onClick={() => changeShow(true)} id='popBottom'>
        <div className='col-10 d-flex justify-content-center'>
          <img src={sortby} width="18px" height="18px" /><span className='textalgn'>&nbsp;&nbsp;&nbsp;Filter By</span></div>
        <div className='col-1'>
          {showLess ? <div><IoIosArrowDown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><IoIosArrowUp style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}
          {/* <IoIosArrowDown style={{width:"22px",height:"22px",color:"#003B4A"}}/> */}
        </div>
      </button>&nbsp;&nbsp;&nbsp;
      <div style={{ display: loader !== false ? '' : 'none' }}>
        <div className='enable-loader1'>
          <img src={load} width="80px" height="80px"></img>
        </div>
      </div>
      <UncontrolledPopover isOpen={popoverOpen} toggle={() => setPopoverOpen(!popoverOpen)} placement='bottom' target='popBottom' >
        <div className={`card p-2 d-block ${props.data == true ? 'width_size1' : 'width_size'}`} style={{ border: "1px solid  #95E1BF", borderRadius: "15px" }}>
          <div className='d-flex justify-content-between flex-row align-items-center   mb-3'>
            <span className='filter_by' >Filter By</span>
            <span className='clear_filter' onClick={() => clearFilterCall()}>Clear Filters</span>

          </div>
          {/* 
   <div>

<FilterEventsCreatedby></FilterEventsCreatedby>
   </div> */}

          <div>
            <div>
              <div className='range flex-row mb-2'>
                <span className="min-header col-10">Location</span>
              </div>
              <div className='mb-2'>
                <div className='d-flex align-items-between justify-content-between'>
                  <div className='col-9 pe-1'>
                    <img src={searchIcon} width='20px' height='20px' style={{ position: "absolute", left: "6%", marginTop: "23px" }} />
                    <input type="text" className='formControl text_field' placeholder='Search neighborhood, city, or state'
                      value={value} onChange={handleInputs}
                      disabled={!ready} style={{ paddingLeft: "11%" }}></input>
                    {status === "OK" && setval === false && <div className="col-12 " style={{ border: "1px solid #d8d6de", borderRadius: "14px" }}>{renderSuggestions()}</div>}
                  </div>
                  <div className='col-3 pb-25'>
                    <input type="number" onWheel={numberInputOnWheelPreventChange} className='formControl text_field' placeholder='Add miles' disabled={milesDisabled}
                      value={getMiles} onChange={handleChange}></input>
                  </div>
                </div>
                <span className='text-danger'>{locationMileError}</span>
              </div>
            </div>
            {/* <AutoComplete1 handle={locationchange} ></AutoComplete1> */}
            {/* <FiltergrpGroupType ></FiltergrpGroupType> */}
            {/* <FilterEventsType></FilterEventsType> */}
            <div className="mt-1 mb-2">
              <span className="font-events">Event Type</span>
            </div>
            <form className="row">
              {tags.map((items, index) => <div key={index} className="col-6">
                <div className='mb-2 d-flex align-items-center' >
                  <img onClick={() => { handlechange(index) }} src={items.checking ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                  <span className="font-grptype13">{items.keyname}</span>
                </div>
              </div>)}
            </form>
          </div>


          {/* ****** PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint******* */}

          {/* 
<hr style={{color:"#CCD8DB"}}></hr>

<FilterEventsLocation></FilterEventsLocation>
<FilterEventsWithin></FilterEventsWithin>
<hr style={{color:"#CCD8DB"}}></hr>
<FilterEventsSpots></FilterEventsSpots>
<hr style={{color:"#CCD8DB"}}></hr>
<FilterEventsInterests></FilterEventsInterests>
<FilterPopularInterests></FilterPopularInterests>
<hr style={{color:"#CCD8DB"}}></hr>
<FilterEventsSortby></FilterEventsSortby> */}


          <div className='d-flex align-items-center justify-content-center mt-1 mb-1'>
            <button className='btn-applyy' onClick={applyFilter}>
              <span className='font-applyy'>Apply</span>
            </button>
          </div>
        </div>
      </UncontrolledPopover>
    </div>

  )
}
export default FilterGrppopup