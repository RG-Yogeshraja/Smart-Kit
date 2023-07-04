import { useState, useEffect } from 'react'

// import deletes from '../../assets/images/dashboardimg/editdelete.png'
// import   '../../@core/scss/base/adminDashboard/groupsmenu/editprofilepopup.scss'
import '../../@core/scss/base/adminDashboard/editprofilepopup.scss'
import Modal from 'react-bootstrap/Modal'
import EditInterests from '../../adminusers/editinterests'
import EditPopularInterests from '../../adminusers/editpopularinterests'
import addicon1 from '../../assets/images/dashboardimg/addicon1.png'
import EditgroupInterest from '../editgroupinterest'
import InviteMember from '../invitemembers'
import AddgroupsCropDemo from './addoreditprofileplus'
import { connect, useDispatch, useSelector } from 'react-redux'
import { adminGroupInfo_APIcall } from './createandupdategroups-slice'
import Loaders from "../../enableloader"
import { groupupload_APIcall } from './imageupload-splice'
import { activeGroups_APIcall } from './getactive-splice'
import { invitememberinfo_APIcall } from '../memberlist-splice'
import { invitememberbyadmin_APIcall } from './invitememberbyadmin_splice'
import AutoComplete from './locationApi'
import { getUUID } from '../../@core/assets/UUID'
import { useForm } from 'react-hook-form'
import usePlacesAutocomplete, { getGeocode, getDetails, getLatLng, getZipCode } from "use-places-autocomplete"

const AddoreditgroupPopup = (props) => {
  const dispatch = useDispatch()

  const [started, setstart] = useState(false)
  const [submit, setsubmitted] = useState(false)
  const [show1, setShow1] = useState(false)
  const [groupName, setgroupname] = useState('')
  const [locations, setlocation] = useState('')
  const [groupDescription, setdescription] = useState('')
  const [interest, setinterests] = useState([""])
  const [grouperror, setgroupnameerror] = useState('')
  const [locationerror, setlocationerror] = useState('')
  const [overall, setoverall] = useState('')
  const [latitude, setlatitude] = useState('')
  const [longitude, setlongitude] = useState('')
  const [colorchange, setcolors] = useState(false)
  const [usersFriendsList, setuser] = useState([])
  const [values_userid, setvalues_userid] = useState([])
  const [file, setfiles] = useState('')
  const [setval, getval] = useState(false)
  const [eventerrortrue, seterror] = useState(false)
  const [valalert, alertval] = useState(false)
  const [eventVenue, setEventVenue] = useState('')
  const [eventLocationError, setEventLocationError] = useState('')
  const { register, handleSubmit, reset, clearErrors, setError, formState: { errors }, watch } = useForm()
  const { ready, value, suggestions: { status, data }, setValue } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 1000
  })


  const locationchange = (v, lat, long) => {
    console.log(v)
    setlocation(v)
    setlatitude(lat)
    setlongitude(long)
  }
  const resetval = (v) => {
    setfiles('')
  }
  const handleshow = () => {
    setShow1(true)
    alertval(true)
    setstart(false)
    setvalues_userid([])
    setsubmitted(false)
  }
  // const changedval = (pusheduserid, i) => {
  //   console.log(pusheduserid, i)
  //   if (pusheduserid !== '') {
  //   setvalues_userid(current => [... current, pusheduserid])
  //   }
  // }

  const changedval = (pusheduserid, id) => {
    console.log(pusheduserid, id)
    if (pusheduserid !== '') {
      setvalues_userid(current => [...current, pusheduserid])
    }
    if (id !== '') {
      const val = [...values_userid]
      val.splice(id, 1)
      setvalues_userid(val)
    }
  }

  const handleClose = () => {
    alertval(false)
    setgroupname('')
    setlocation('')
    setdescription('')
    setShow1(false)
    const payload = {
      user_id: localStorage.getItem("loggedIn_userId"),

    }

    dispatch(activeGroups_APIcall(payload))


  }
  const handlecrop = (v) => {
    console.log(v)
    setfiles(v)
  }
  useEffect(() => {
    //
    const payload = {
      group_id: "",
      admin_id: localStorage.getItem('loggedIn_userId')
    }
    dispatch(invitememberinfo_APIcall(payload))
  }, [valalert])

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
  const onSubmit = (data) => {
    
    setsubmitted(true)
    // if (groupname === '') {
    //   setgroupnameerror('Group Name is Required')
    // } else {
    //   setgroupnameerror('')
    // }
    if (value === '' || value === undefined) {
      setEventLocationError('Location is Required')
    } else {
      setEventLocationError('')
    }
    // if ( eventLocationError !== '' ) {
    //   setstart(true)

    //   const payload = {
    //     admin_id: localStorage.getItem('loggedIn_userId'),
    //     group_name: groupname,
    //     location: locations,
    //     longitude: longitude.toString(),
    //     lattitude: latitude.toString(),
    //     description: descriptions,
    //     interests: interest
    //   }
    //   
    //   console.log(payload)
    //   setShow1(false)
    //   dispatch(adminGroupInfo_APIcall(payload))
    // }
    // setTimeout(() => {
    //   handleClose()
    // }, 1)

    const payload =
    {
      admin_id: localStorage.getItem('loggedIn_userId'),
      group_name: data.groupName,
      location: value,
      longitude: longitude.toString(),
      lattitude: latitude.toString(),
      description: data.groupDescription,
      interests: interest
    }
    
    console.log(payload, "aaaaa")


    // if (eventNameError == "" && associatedGroupNameError == "" && eventAddressError == "" &&
    //   eventCityNameError == "" && eventStateNameError == "" && eventZipCodeError == "" &&
    //   eventSpotsCountError == "" && eventStartDateError == "" && eventEndDateError=="") {
    if (eventLocationError === '') {

      
      dispatch(adminGroupInfo_APIcall(payload))
      setShow1(false)

    } else {
      setShow1(true)
    }
  }

  const errorlocation = () => {
    if (submit === true) {
      if (locations === '') {
        setlocationerror('Location is Required')

      } else {
        setlocationerror('')
      }
    }
  }
  const errorgroups = () => {
    if (submit === true) {
      if (groupname === '') {
        setgroupnameerror('Group Name is Required')


      } else {
        setgroupnameerror('')
      }
    }
  }
  const authStat = useSelector((state) => state.adminGroupInfo)
  const upload = useSelector((state) => state.groupuploaddetails)
  console.log(upload)
  useEffect(() => {
    //
    if (upload !== undefined && upload !== "") {
      //
      const { uploadimage } = upload
      console.log("data", uploadimage)
      const { responseBody } = uploadimage
      console.log("login responseBody", responseBody)
      console.log("auth respomse success")
      //
      if (upload.uploadimage.responseCode === 200) {
        //
        if (values_userid.length > 1) {
          //
          const payload_user = {
            group_id: responseBody.group_id,
            admin_id: localStorage.getItem("loggedIn_userId"),
            invited_user_id: values_userid
          }

          console.log(payload_user)
          dispatch(invitememberbyadmin_APIcall(payload_user))
        } else {
          setoverall('Groups updated SuccessFully')
          setTimeout(() => {
            handleClose()
            setcolors(true)
            setoverall('')
            setlocation('')
            setgroupname('')
            setdescription('')
          }, 1)

        }
      } else if (upload.uploadimage.responseCode === 201) {
        setoverall('failed')
      }

    }
  }, [upload.uploadimage])
  const invite_member_selector = useSelector((state) => state.invite_Groupmemberbyadmin)
  useEffect(() => {
    if (authStat != undefined) {
      const { invite_Groupmemberdetails } = invite_member_selector
      console.log("data", invite_Groupmemberdetails)
      const { responseBody } = invite_Groupmemberdetails
      console.log("login responseBody", responseBody)
      console.log("auth respomse success")
      if (invite_member_selector.invite_Groupmemberdetails.responseCode === 200) {
        //
        setoverall('Groups added SuccessFully')
        setTimeout(() => {
          handleClose()

          setoverall('')
          setlocation('')
          setgroupname('')
          setdescription('')
        }, 1)
        setstart(false)
      } else {
        setstart(false)
      }
    }
  }, [invite_member_selector])
  useEffect(() => {

    if (authStat !== undefined && authStat !== "") {

      const { addgroup } = authStat
      console.log("data", addgroup)
      const { responseBody } = addgroup
      console.log("login responseBody", responseBody)
      console.log("auth respomse success")

      if (authStat.addgroup.responseCode === 200) {

        // console.log(responseBody)
        //         setstart(false)
        //         setcolors(true)

        //         const data = new FormData()
        //         data.append('file_data', file)
        //       data.append('group_id', responseBody.group_id)
        //         data.append('user_id', localStorage.getItem("loggedIn_userId"))

        //         if (file !== '' && values_userid.length === 0) {

        //         dispatch(groupupload_APIcall(data))


        //         } else {

        //         setTimeout(() => {
        //           handleClose()
        //           setoverall('')
        //           setlocation('')
        //           setgroupname('')
        //           setdescription('')
        //         }, 1)
        //         setoverall('Groups Added SuccessFully')


        //       }
        if (file !== ''  ) {
        
          const data = new FormData()

          data.append('file_data', file)
          data.append('group_id', responseBody.group_id)
          data.append('user_id', localStorage.getItem("loggedIn_userId"))
          dispatch(groupupload_APIcall(data))
          const payload_user = {

            group_id: responseBody.group_id,
            admin_id: localStorage.getItem("loggedIn_userId"),
            invited_user_id: values_userid
          }

          console.log(payload_user)
          dispatch(invitememberbyadmin_APIcall(payload_user))

        }
        // && values_userid.length > 1
         else if (file === '' ) {
          //
          const payload_user = {

            group_id: responseBody.group_id,
            admin_id: localStorage.getItem("loggedIn_userId"),
            invited_user_id: values_userid
          }

          console.log(payload_user)
          dispatch(invitememberbyadmin_APIcall(payload_user))
        } 
        else {
          setoverall('Groups updated SuccessFully')
          setcolors(true)
          setTimeout(() => {
            handleClose()

            setoverall('')
            setlocation('')
            setgroupname('')
            setdescription('')
          }, 1)
        }
      } if (authStat.addgroup.responseCode === 201) {
        setcolors(false)
        setstart(false)
        setoverall('Some Error Occurs Please Try again!')
        setTimeout(() => {
          handleClose()
          setoverall('')
          setlocation('')
          setgroupname('')
          setdescription('')
        }, 100)


      }

    }


  }, [authStat.addgroup])

  // *************LOCATION*************


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
  const handleInput = (e) => {
    setValue(e.target.value)
    if (e.target.value === '') {
      setEventLocationError('Location is Required')
    } else {
      setEventLocationError('')
    }
    getval(false)

  }

  const onError = (errors, e, data) => {
    
    seterror(true)

    if (value === '' || value === undefined) {
      setEventLocationError('Location is Required')
    } else {
      setEventLocationError('')
    }
  }



  return (
    <>
      {/* <img src={addicon1} width="16px" height="16px"/> */}
      <img onClick={handleshow} src={addicon1} width="16px" height="16px" style={{ marginLeft: '-2px' }} ></img>
      <Modal show={show1} onHide={() => setShow1(false)} backdrop='static' dialogClassName="custom-modal">
        <div style={{ display: started !== false ? '' : 'none' }}>
          <Loaders></Loaders>
        </div>
        <div className='p-2'>
          <div >
            <div className="p-2">
              <div className='d-flex justify-content-start'>
                <span className='edit_profile'>Add or Edit Group Info

                </span>


              </div>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className='col-12 borders mb-2'>
                  <span className=' mb-1 mx-1'></span>
                </div>
                <AddgroupsCropDemo crop={handlecrop} handle={resetval}></AddgroupsCropDemo>
                {/* <AddoreditgroupPopup></AddoreditgroupPopup> */}
                {/* <EditprofilePopup></EditprofilePopup> */}
                <div className='row mt-2'>
                  <div className='col-6'>
                    <span className='input_toptext'>Group Name</span>

                    <input autoComplete='off' name="groupName" type="text" placeholder='Type a group name...' defaultValue={groupName}
                      onChange={(e) => { setgroupname(e.target.value) }}
                      className='formControl text_field mt-50'
                      {...register("groupName", { required: "Group Name is required" })} />

                    {errors.groupName && (<span className="text-danger">{errors.groupName.message}</span>)}

                    {/* <span className='text-danger'>{grouperror}</span> */}
                  </div>
                  {/* <div className='col-6'>
  <span className='input_toptext'>Location</span> 
      
      <input
        name="fullname" 
        type="text" 
        placeholder='Search a location...' 
        defaultValue={locations}
        onChange={(e) => setlocation(e.target.value)} onKeyUp={errorlocation}
        className='formControl text_field mt-50'
      />
    <span className='text-danger'>{locationerror}</span>
    </div> */}
                  {/* <AutoComplete handle={locationchange} data={submit}></AutoComplete> */}
                  <div className="col-6 d-flex flex-column">
                    <span className="eventdetail_smaller ms-50">Location</span>
                    <input autoComplete='off' name="fullname formControl sponsorship_innertext" type="text" placeholder='Search a location...'
                      value={value}
                      onChange={handleInput}
                      disabled={!ready}

                      className='formControl text_field mt-50' />

                    {status === "OK" && setval === false && <div className="col-12 " style={{ border: "1px solid #d8d6de", borderRadius: "14px" }}>{renderSuggestions()}</div>}
                    <span className='text-danger' >{eventLocationError}</span>
                  </div>
                </div>
                <div className='col-12 mt-2'>
                  <span className='input_toptext'>Description</span>

                  <textarea autoComplete='off' name="groupDescription" className='formControl text_field mt-50' defaultValue={groupDescription}
                    onChange={(e) => setdescription(e.target.value)} style={{ minHeight: "90px" }} rows="200" cols="200" placeholder='Type a description...'  {...register("groupDescription", { required: "Description is required" })} />

                  {errors.groupDescription && (<span className="text-danger">{errors.groupDescription.message}</span>)}



                </div>
                <EditgroupInterest handle={clickvalue}></EditgroupInterest>
                <EditPopularInterests></EditPopularInterests>
                {/* <EditgroupInterest></EditgroupInterest>
<EditPopularInterests></EditPopularInterests> */}

                <div className='col-12 borders mb-2'>
                  <span className=' mb-1 mx-1'></span>
                </div>
                <InviteMember handleval={changedval} data={usersFriendsList}></InviteMember>
                {/* <InviteMember></InviteMember> */}
                <div className='col-12 d-flex justify-content-center mt-3 mb-2'>
                  <button className='btn1-style' onClick={handleClose}><span className="text-cancel" >Cancel</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className='btn2-style' type="submit"><span className="text-update" >Update</span></button>
                </div>
                <div className='d-flex justify-content-center'  >
                  <span className={colorchange === true ? 'text-success' : 'text-danger'} style={{ fontSize: "18px", fontWeight: 700 }}>{overall}</span>
                </div>
              </form>
            </div>
          </div>
        </div>

      </Modal>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    state
  }
}
export default connect(mapStateToProps, {})(AddoreditgroupPopup)