import React from "react"
import Modal from 'react-bootstrap/Modal'
import deletes from '../assets/images/dashboardimg/editdelete.png'
import edit from '../assets/images/dashboardimg/editmenu.png'
import '../@core/scss/base/adminDashboard/editprofilepopup.scss'
import profile from '../assets/images/dashboardimg/userprofiles.png'
// import { useState, useEffect } from 'react'
import FilterGenderActivity from "./filtergenderactivity"
import FilterLookingFor from "./filterlookingfor"
import Editprof from "./editprofilepopup"
import EditGenderActivity from "./editgenderactivity"
import FilterPopularInterests from "./filterpopularinterests"
import FilterInterests from "./filterinterests"
import EditInterests from "./editinterests"
import EditPopularInterests from "./editpopularinterests"
import EditRelationshipStatus from "./editrelationshipstatus"
import EditAttractedTo from "./editatractedto"
import EditPronouns from "./editpronouns"
import EditHometown from "./edithometown"
import EditHeight from "./editheight"
import EditEthinicity from "./editethnicity"
import EditLanguages from "./editlanguages"
import EditReligion from "./editreligion"
import EditKids from "./editkids"
import EditPolitics from "./editpolitics"
import EditExercise from "./editexercise"
import EditDrinking from "./editdrinking"
import Removepopupuser from "./removeuser"
import { deleteUserAccount_APIcall } from "./slice-adminusers/slice-deleteuseraccount"
import { useSelector, connect, useDispatch } from "react-redux"
import Loaders from '../enableloader'
import { getUsersFriendsLists_APIcall } from "./slice-adminusers/splice-userfriendslist"
import { getUsersLists_APIcall } from "./slice-adminusers/slice-userslist-details"
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"
import edit_logo12 from '../assets/images/dashboardimg/edit-logo12.png'
import edit_logo11 from '../assets/images/dashboardimg/edit-logo11.png'
import edit_logo9 from '../assets/images/dashboardimg/edit-logo10.png'
import edit_logo4 from '../assets/images/dashboardimg/edit-logo4.png'
import closecircle from '../assets/images/dashboardimg/close-circle.png'
import defaults from '../assets/images/dashboardimg/defaultuserprofilepicture.png'
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react"
import { split } from 'lodash'
import edit_logo5 from '../assets/images/dashboardimg/edit-logo5.png'
import RangeSlider from "react-range-slider-input"
import "react-range-slider-input/dist/style.css"
import InputRange from 'react-input-range'
import "react-input-range/lib/css/index.css"
import edit_logo10 from '../assets/images/dashboardimg/edit-logo9.png'

import '../@core/scss/base/adminDashboard/editprofilepopup.scss'
import adminemail from '../assets/images/dashboardimg/sms.png'
import phones from '../../src/assets/images/dashboardimg/phonenum.png'
import birth from '../assets/images/dashboardimg/birthdate.png'
import user from '../assets/images/dashboardimg/1.png'
import loc from '../assets/images/dashboardimg/location.png'
import cases from '../assets/images/dashboardimg/briefcase.png'
import teach from '../assets/images/dashboardimg/teacher.png'
import gender from '../assets/images/dashboardimg/Gender.png'
import edituser1 from '../assets/images/dashboardimg/edit-user1.png'
import editcamera from '../assets/images/dashboardimg/edit-camera.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import { useState, useEffect, useRef } from 'react'
import Demo from './tabs/croprofile'
import { updateUserData_APIcall } from './slice-adminusers/slice-updateuserdata'
import { start } from "@popperjs/core"
import moment from 'moment'
import { updateUserProfileImage_APIcall } from "./slice-adminusers/slice-updateuserprofileimage"
import { defaultimage_APICall } from '../admingroups/resetfile-splice'
//height file path

const EditPopup = (props) => {
  const [getpronoun, setpronoun] = useState([])
  const [show, setShow] = useState(false)
  const [setheights, getheights] = useState('')
  const [show1, setShow1] = useState(false)
  const [deletesgroups, setdeletesgroups] = useState(false)
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)
  const [file, setfiles] = useState('')
  const [interest, setinterests] = useState([])
  const [setlooksfor, getlooksfor] = useState([])
  const [attracting_update, setattracting_update] = useState([])
  const authStat_deleteUserAccount = useSelector((state) => state.deleteUserAccountData)
  const [individualUserDetails, setdetails] = useState([])
  const [user_fullName, setUserFullname] = useState('')
  const [setrelation_shipstatus, getrelationshipstatus] = useState([])
  const [getsingleloc_Api, setmultiloc_Api] = useState([])
  // edit profile's declarations
  const inputRef = useRef(null)
  const [url, seturl] = useState('')
  const [tags1, setTags1] = useState([{ id: "1", naming: 'Display age as age range instead', checking: true }])
  const [birthsdate, setdate] = useState('02/07/1998')
  const [addmore, setmore] = useState([{ name: " ", circle: false }])

  const [getgenderidentity, setgenderidentity] = useState([])
  // edit profile- my edit for update API
  const [sentpronownval, getpronownval] = useState([])
  const [setattract, getattract] = useState([])
  const authStat_updateUserData = useSelector((state) => state.updateUserData)
  const authStat_getUsersList = useSelector((state) => state.getUsersListsData)
  const authStat_userProfileImageUpdate = useSelector((state) => state.updateUserProfileImageData)
  const [getrelationship_state, set_relationship_stat] = useState([])
  const [userUpdatedData, set_userUpdatedData] = useState()
  const [userUpdatedUserId, set_userUpdatedUserId] = useState()
  const [edit_userid, edit_setUserid] = useState('')
  const [edit_emailaddress, edit_setEmailaddress] = useState('')
  const [edit_mobilenumber, edit_setMobilenumber] = useState('')
  const [edit_fullname, edit_setFullname] = useState('')
  const [edit_birthdate, edit_setBirthdate] = useState('')
  const [edit_hometown, edit_setHometown] = useState('')
  const [edit_agerangeEnabled, edit_setAgerangeEnabled] = useState('0')
  const [get_edit_birthdate, set_edit_birthdate] = useState('0')
  const [edit_location, edit_setLocation] = useState('')
  const [edit_occupation, edit_setOccupation] = useState('')
  const [edit_education1, edit_setEducation1] = useState('')
  const [edit_educationall, edit_setEducationall] = useState([])
  const [edit_education2, edit_setEducation2] = useState([])
  const [userProfileImageUrl, setUserProfileImageUrl] = useState('')
  const [width, setwidth] = useState(5.5)
  const [height, setheight] = useState(`${5}0%`)
  const [minCaption, set_minCaption] = useState('5’ 5”')
  const [maxCaption, set_maxCaption] = useState('7’ 8”')
  const [minValue, set_minValue] = useState('3’ 0”')
  const [maxValue, set_maxValue] = useState('8’ 0”')
  const [showLess_lookingfor, setshowLess_lookingfor] = useState(true)
  const [value, setValue] = useState([30, 60])
  const [edit_Height, edit_setHeight] = useState([])
  const [getinterest, sendinterest] = useState([])
  const [edit_additionalinfo, edit_setAdditionalinfo] = useState([])
  const [edit_drinking, edit_setDrinking] = useState('')
  const [edit_exercise, edit_setExercise] = useState('')
  const [edit_havekids, edit_setHavekids] = useState('')
  const [setgender, pushgender] = useState([])
  const [setresetform, doresetform] = useState('')
  const [setothergenderinfo, pushothergenderinfo] = useState('')
  const [datingOpt, setdatingOpt] = useState(false)
  const [setrelation, getrelation] = useState([])
  const [drinking, setDrinking] = useState([
    { id: 0, name: 'Frequently', checked: false },
    { id: 1, name: 'Socially', checked: false },
    { id: 2, name: 'Never', checked: false },
    { id: 3, name: 'Sober', checked: false }
  ])
  const dummyDrinking = [...drinking]
  const getmorevalues = (val, index) => {
    const loc_value = [...addmore]
    loc_value[index].name = val

    setmore(loc_value)

    const local_val = []
    for (let i = 0; i < loc_value.length; i++) {
      local_val.push(loc_value[i].name)
    }
    setmultiloc_Api(local_val)
  }
  const [exercise, setExercise] = useState([
    { id: 0, name: 'Active', checked: false },
    { id: 1, name: 'Sometimes', checked: false },
    { id: 2, name: 'Almost Never', checked: false }
  ])
  const dummyExercise = [...exercise]

  const [havekids, setHavekids] = useState([
    { id: 0, name: 'Have Kids', name1: 'Have Kids', checked: false },
    { id: 1, name: 'Don’t Have Kids', name1: 'Don’t Have Kids', checked: false, css: { marginLeft: '-40px' } }
  ])
  const dummyHavekids = [...havekids]

  const [lookingfor, setLookingfor] = useState([
    { id: 0, name: 'New Friends', keyname: "new_friends", checked: false, show: true, values: 'new_friends' },
    { id: 1, name: 'Activity Partner', keyname: "activity_partners", checked: false, show: true, values: 'activity_partners' },
    { id: 2, name: 'Dating', keyname: "dating", checked: false, show: true, values: 'dating' },
    { id: 3, name: 'Things to Do', keyname: "things_to_do", checked: false, show: false, values: 'things_to_do' },
    { id: 4, name: 'Business', keyname: "business", checked: false, show: false, values: 'business' }
  ])

  const [dating, setDating] = useState([
    { id: 5, name: 'Long-Term Relationship', keyname: "long_term_relationship", checked: false },
    { id: 6, name: 'Casual', keyname: 'casual', checked: false },
    { id: 7, name: 'Marriage', keyname: 'marriage', checked: false },
    { id: 8, name: 'Not Sure Yet', keyname: 'not_sure_yet', checked: false }
  ])
  const relationshipvalue = (relation, tag) => {
    let m = []
    let v = []
    let totalval = []
    const relate1 = []
    if (relation.length !== 0) {
      m = relation.filter(res => res.checking === true)
    }
    if (tag.length !== 0) {
      v = tag.filter(res => res.checking === true)
    }
    totalval = [...m, ...v]
    for (let i = 0; i < totalval.length; i++) {
      relate1.push(totalval[i].value)

    }
    set_relationship_stat(relate1)
  }
  const getpronownvalue = (val) => {

    const pronouns_val = []
    for (let i = 0; i < val.length; i++) {
      pronouns_val.push(val[i].value)

    }
    getpronownval(pronouns_val)
  }

  const getattractvalue = (overall, men, women, binary) => {
    //
    const allgen = []
    let mergegend = []
    mergegend = [...overall, ...men, ...women, ...binary]
    for (let i = 0; i < mergegend.length; i++) {
      allgen.push(mergegend[i].values)

    }
    setattracting_update(allgen)

  }

  const updateCall = () => {
    setLoader(true)
    let looking_update = []
    let look = []
    const items_update = []
    let datings = []
    if (lookingfor.length !== 0) {
      look = lookingfor.filter(res => res.checked === true)

    }
    if (dating.length !== 0) {
      datings = dating.filter(res => res.checked === true)

    }

    looking_update = [...look, ...datings]
    for (let i = 0; i < looking_update.length; i++) {
      items_update.push(looking_update[i].keyname)
    }
    getlooksfor(items_update)
    const payload1 = {
      email_address: edit_emailaddress,
      mobile_number: edit_mobilenumber,
      full_name: edit_fullname,
      birth_date: edit_birthdate,
      age_range_enabled: edit_agerangeEnabled,
      location: edit_location,
      ocupation: edit_occupation
    }


    // const payload = {
    //   user_id: edit_userid,
    //   full_name: edit_fullname,
    //   birth_date: edit_birthdate,
    //   age_range_enabled: '',
    //   current_location: '',
    //   occupation: edit_occupation,
    //   location: edit_location,
    //   latitude: '5.6',
    //   longitude: '2.6',
    //   schools: getsingleloc_Api,
    //   interest,
    //   gender_identity: setgender,
    //   other_gender: '',
    //   looking_for: items_update,
    //   relationship_status: getrelationship_state,
    //   attracted_to: attracting_update,
    //   other_attracted: '',
    //   pronouns: sentpronownval,
    //   other_pronouns: '',
    //   ethnicity: [],
    //   other_ethnicity: '',
    //   religion: [],
    //   other_religion: '',
    //   height: setheights,
    //   hometown: edit_hometown,
    //   language: [],
    //   kids: edit_havekids,
    //   politics: '',
    //   exercise: edit_exercise,
    //   drinking: edit_drinking
    // }
    const payload = {
      admin_id: '',
      user_id: edit_userid,
      full_name: edit_fullname,
      birth_date: individualUserDetails[0].User_details.birth_date,
      age_range_enabled: (individualUserDetails[0].User_details.age_range_enabled).toString(),
      current_location: individualUserDetails[0].addition_info[0].current_location,
      occupation: edit_occupation,
      location: individualUserDetails[0].User_details.location,
      latitude: (individualUserDetails[0].addition_info[0].current_latitude).toString(),
      longitude: (individualUserDetails[0].addition_info[0].current_longitude).toString(),
      schools: getsingleloc_Api,
      interest: individualUserDetails[0].interest,
      gender_identity: setgender,
      other_gender: '',
      looking_for: individualUserDetails[0].looking_for,
      relationship_status: individualUserDetails[0].relationship,
      attracted_to: individualUserDetails[0].attracted_to,
      other_attracted: '',
      pronouns: individualUserDetails[0].pronouns,
      other_pronouns: '',
      ethnicity: [],
      other_ethnicity: '',
      religion: [],
      other_religion: '',
      height: individualUserDetails[0].addition_info[0].height,
      hometown: individualUserDetails[0].addition_info[0].hometown,
      language: [],
      kids: individualUserDetails[0].addition_info[0].kids,
      politics: '',
      exercise: individualUserDetails[0].addition_info[0].exercise,
      drinking: individualUserDetails[0].addition_info[0].drinking
    }

    console.log(payload)
    console.log(individualUserDetails[0])
    dispatch(updateUserData_APIcall(payload))
  }

  useEffect(() => {
    setLoader(true)
    if (authStat_updateUserData.data.responseCode === 200 && authStat_updateUserData.data.responseBody !== undefined) {

      set_userUpdatedUserId(authStat_updateUserData.data.responseBody.User_details.user_id)
      // authStat_getUsersList.
      setfiles('')
      const data = []
      data.push(authStat_updateUserData.data.responseBody)
      set_userUpdatedData(data)
      const fetchfromStore = authStat_getUsersList.usersListsData.responseBody
      if (file !== "" && setresetform === '') {
        const data = new FormData()
        data.append('file_data', file)
        data.append('user_id', edit_userid)
        // const payload = {
        //   user_id: edit_userid,
        //   file_data: file
        // }

        dispatch(updateUserProfileImage_APIcall(data))
        setShow1(false)
      } else if (file === "" && setresetform !== '') {
        const payload_user = {
          type: '1',
          uuid: edit_userid
        }

        dispatch(defaultimage_APICall(payload_user))
        setShow1(false)
      }

      // const fil = fetchfromStore.filter(data => data.User_details.user_id == edit_userid)
      // const updatedData_index = fetchfromStore.findIndex(data => data.User_details.user_id == edit_userid)

      // console.log(fil)
      // console.log(updatedData_index)
      // console.log(typeof (updatedData_index))
      // console.log(userUpdatedData);

      // authStat_getUsersList.usersListsData.responseBody.splice(updatedData_index, 1)
      // authStat_getUsersList.usersListsData.responseBody.insert(updatedData_index-1,userUpdatedData )

      // item.questions.filter(queObj => queObj.question.toLowerCase().includes(knowledgeBaseSearchQueryLower)).length


      console.log(fetchfromStore)
    } if (file === '' && setresetform === '') {
      setLoader(false)
      setShow1(false)
      const loggedIn_userID = localStorage.getItem("loggedIn_userId")
      const payload = {
        user_id: loggedIn_userID
      }
      dispatch(getUsersLists_APIcall(payload))
    }


    if (authStat_updateUserData.data.responsecode == 201) {
      setShow1(false)
    }
  }, [authStat_updateUserData])
  const defaultimg1 = useSelector((state) => state.defaultimageget)
  useEffect(() => {
    //
    if (defaultimg1.defaultgroup.responseBody !== undefined && defaultimg1.defaultgroup.responseCode == 200) {
      //
      setLoader(false)
      setShow1(false)
      const loggedIn_userID = localStorage.getItem("loggedIn_userId")
      const payload = {
        user_id: loggedIn_userID
      }
      dispatch(getUsersLists_APIcall(payload))
    } else if (defaultimg1.defaultgroup.responseCode !== 200) {
      setLoader(false)
    }
  }, [defaultimg1])

  useEffect(() => {
    // ////
    if (authStat_userProfileImageUpdate.data.responseBody != undefined && authStat_userProfileImageUpdate.data.responseCode == 200) {
      //
      setLoader(false)
      setShow1(false)
      const loggedIn_userID = localStorage.getItem("loggedIn_userId")
      const payload = {
        user_id: loggedIn_userID
      }
      dispatch(getUsersLists_APIcall(payload))
    } else if (authStat_userProfileImageUpdate.data.responseCode != 200) {
      setLoader(false)
    }
  }, [authStat_userProfileImageUpdate])

  useEffect(() => {
    setdetails(props.userVal)
  })

  const handleClose = () => {
    setShow1(false)
  }

  const cancelHandle = () => {
    setShow1(false)
    setmore([])
    setdetails(null)
  }

  const handleshow = () => {
    //
    setdeletesgroups(false)
    setShow1(true)
    pushothergenderinfo(individualUserDetails[0].user_other_info[0].gender_other_info)
    setUserFullname(individualUserDetails[0].User_details.full_name)
    edit_setUserid(individualUserDetails[0].User_details.user_id)
    edit_setEmailaddress(individualUserDetails[0].User_details.email_address)
    edit_setMobilenumber(individualUserDetails[0].User_details.mobile_number)
    edit_setFullname(individualUserDetails[0].User_details.full_name)
    edit_setBirthdate(individualUserDetails[0].User_details.birth_date)
    if (individualUserDetails[0].addition_info[0] != undefined) {
      edit_setHometown(individualUserDetails[0].addition_info[0].hometown)
    }
    if (individualUserDetails[0].addition_info.length !== 0) {
      if (individualUserDetails[0].addition_info[0].height !== '') {
        const val = individualUserDetails[0].addition_info[0].height
        //

        const divideNumber = parseInt(val / 12)
        const moduloNumber = parseInt(val) - (divideNumber * 12)
        const modifyValue = `${divideNumber}.${moduloNumber}`
        const valsplit = modifyValue.split('.')
        set_minCaption(`${valsplit[0]}’${valsplit[1]}’’`)
        setwidth(modifyValue)
        setheight(`${valsplit[0]}0` - 2, '%')
      }
    }

    edit_setAgerangeEnabled(individualUserDetails[0].User_details.age_range_enabled)
    set_edit_birthdate(individualUserDetails[0].User_details.is_birthdate_enabled)
    // edit_setAgerangeEnabled('1')
    edit_setLocation(individualUserDetails[0].User_details.location)
    edit_setOccupation(individualUserDetails[0].User_details.occupation)
    edit_setEducation1(individualUserDetails[0].User_details.schools[0])
    // edit_setEducationall(individualUserDetails[0].User_details.schools)

    // setUserProfileImageUrl(individualUserDetails[0].user_profile_picture)
    // 
    if (individualUserDetails[0].user_profile_picture[0] != undefined) {
      setUserProfileImageUrl(individualUserDetails[0].user_profile_picture[0].image_url)
    } else {
      setUserProfileImageUrl('')
    }
    //Interest
    //
    if (individualUserDetails[0].interest.length !== 0) {
      sendinterest(individualUserDetails[0].interest)
    }

    const filter_edu = []
    filter_edu.shift(edit_educationall)
    edit_setEducation2(filter_edu)

    // edit_setHeight(individualUserDetails[0].looking_for[0].height)
    // ////
    const addInfo = []
    addInfo.push(individualUserDetails[0].addition_info[0])
    edit_setAdditionalinfo(addInfo)


    // have kids

    //
    if (individualUserDetails[0].addition_info.length !== 0) {
      if (individualUserDetails[0].addition_info[0].kids != null) {
        const data = individualUserDetails[0].addition_info[0].kids
        edit_setHavekids(data)
        const havekidsData = [...havekids]
        if (individualUserDetails[0].addition_info[0].kids != "") {
          const findInd = havekids.findIndex(data => data.name == individualUserDetails[0].addition_info[0].kids)
          if (findInd !== -1) {
            havekidsData[findInd].checked = true
            edit_setHavekids(havekidsData)
          }
        } else if (individualUserDetails[0].addition_info[0].kids == "") {
          for (let i = 0; i < havekidsData.length; i++) {
            havekidsData[i].checked = false
          }
          edit_setHavekids(havekidsData)
        }
      }
    }
    //Relationship Status
    if (individualUserDetails[0].relationship.length !== 0) {
      getrelationshipstatus(individualUserDetails[0].relationship)
    } else {
      getrelationshipstatus([])

    }
    //pronoun
    //
    if (individualUserDetails[0].pronouns.length !== 0) {
      setpronoun(individualUserDetails[0].pronouns)
    } else {
      setpronoun([])

    }
    //Education
    //
    if (individualUserDetails[0].User_details.schools.length !== 0) {
      const items_val = []
      const val_itemss = []
      for (let i = 0; i < individualUserDetails[0].User_details.schools.length; i++) {
        items_val.push({ name: individualUserDetails[0].User_details.schools[i], circle: true })
        //
        val_itemss.push(individualUserDetails[0].User_details.schools[i])
        setmore(items_val)
        setmultiloc_Api(val_itemss)
      }
    }
    //looking for
    //
    if (individualUserDetails[0].looking_for.length !== 0) {
      //
      const look_for = [...lookingfor]
      if (look_for.length >= individualUserDetails[0].looking_for.length) {
        for (let i = 0; i < look_for.length; i++) {
          for (let j = 0; j < individualUserDetails[0].looking_for.length; j++) {

            if (look_for[i].values === individualUserDetails[0].looking_for[j]) {
              look_for[i].checked = true
            }
            const v1 = individualUserDetails[0].looking_for.filter(res => res === 'dating')
            if (v1.length !== 0) {
              setdatingOpt(true)
              setshowLess_lookingfor(false)
            } else {
              setdatingOpt(false)
              setshowLess_lookingfor(true)
            }
          }
        }
      }
      if (look_for.length < individualUserDetails[0].looking_for.length) {
        for (let j = 0; j < individualUserDetails[0].looking_for.length; j++) {
          for (let i = 0; i < look_for.length; i++) {
            if (look_for[i].values === individualUserDetails[0].looking_for[j]) {
              look_for[i].checked = true
            }
            const v1 = individualUserDetails[0].looking_for.filter(res => res === 'dating')
            //
            if (v1.length !== 0) {
              setdatingOpt(true)
            } else {
              setdatingOpt(false)
            }
          }
        }
      }
      setLookingfor(look_for)

      const datings = [...dating]
      if (datings.length >= individualUserDetails[0].looking_for.length) {

        for (let k = 0; k < datings.length; k++) {
          for (let l = 0; l < individualUserDetails[0].looking_for.length; l++) {

            if (look_for[k].values === individualUserDetails[0].looking_for[l]) {
              look_for[k].checked = true
            }
            const v1 = individualUserDetails[0].looking_for.filter(res => res === 'dating')
            if (v1.length !== 0) {
              setdatingOpt(true)
            } else {
              setdatingOpt(false)
            }
          }
        }
      }
      if (look_for.length < individualUserDetails[0].looking_for.length) {
        for (let j = 0; j < individualUserDetails[0].looking_for.length; j++) {
          for (let i = 0; i < look_for.length; i++) {
            if (look_for[i].values === individualUserDetails[0].looking_for[j]) {
              look_for[i].checked = true
            }
            const v1 = individualUserDetails[0].looking_for.filter(res => res === 'dating')
            if (v1.length !== 0) {
              setdatingOpt(true)
            } else {
              setdatingOpt(false)
            }
          }
        }
      }
      setLookingfor(look_for)

      // const datings = [...dating]
      if (datings.length <= individualUserDetails[0].looking_for.length) {

        for (let k = 0; k < datings.length; k++) {
          for (let l = 0; l < individualUserDetails[0].looking_for.length; l++) {

            if (datings[k].keyname === individualUserDetails[0].looking_for[l]) {
              //
              datings[k].checked = true
            }

          }
        }
      }

      setDating(datings)
    }
    //Attracted To
    if (individualUserDetails[0].attracted_to.length !== 0) {
      //
      getattract(individualUserDetails[0].attracted_to)
    } else {
      getattract([])
    }
    //excercise
    if (individualUserDetails[0].addition_info.length !== 0) {
      const data = individualUserDetails[0].addition_info[0].exercise
      edit_setExercise(data)
      const exerciseData = [...exercise]
      if (individualUserDetails[0].addition_info[0].exercise != "") {
        const findInd = exercise.findIndex(data => data.name == individualUserDetails[0].addition_info[0].exercise)
        exerciseData[findInd].checked = true
        edit_setExercise(exerciseData)
      } else if (individualUserDetails[0].addition_info[0].exercise == "") {
        for (let i = 0; i < exerciseData.length; i++) {
          exerciseData[i].checked = false
        }
        edit_setExercise(exerciseData)
      }
    }

    //drinking
    // if (edit_additionalinfo[0].drinking != "") {
    if (individualUserDetails[0].addition_info.length !== 0) {
      const data = individualUserDetails[0].addition_info[0].drinking
      edit_setDrinking(data)
      const drinkingData = [...drinking]

      if (individualUserDetails[0].addition_info[0].drinking != "") {
        const findInd = drinking.findIndex(data => data.name == individualUserDetails[0].addition_info[0].drinking)
        drinkingData[findInd].checked = true
        setDrinking(drinkingData)
      }
      if (individualUserDetails[0].addition_info[0].drinking == "") {
        for (let i = 0; i < drinkingData.length; i++) {
          drinkingData[i].checked = false
        }
        setDrinking(drinkingData)
      }

    }
    //Gender Identity

    if (individualUserDetails[0].gender.length !== 0) {
      ////
      setgenderidentity(individualUserDetails[0].gender)

    }

  }

  const handlechange_ageEnabled = (val) => {
    //
    if (val == "1") {
      edit_setAgerangeEnabled("0")
    } else if (val == "0") {
      edit_setAgerangeEnabled("1")
    }
  }
  const dateofbirth_ageEnabled = (val) => {

    if (val == "1") {
      set_edit_birthdate("0")
    } else if (val == "0") {
      set_edit_birthdate("1")
    }
  }
  const deleteUser = () => {
    setdeletesgroups(true)
  }

  const genderval = (women, men, binary, over_all) => {
    //
    let mans = []
    let binaries = []
    let womens = []
    let full_load = []
    if (men.length !== 0) {
      mans = men.filter(res => res.checked === true)
    }

    if (binary.length !== 0) {
      binaries = binary.filter(res => res.checked === true)
    }
    if (women.length !== 0) {
      womens = women.filter(res => res.checked === true)
    }
    if (over_all.length !== 0) {
      full_load = over_all.filter(res => res.checked === true)
    }
    //
    let items = []
    items = [...mans, ...binaries, ...womens, ...full_load]
    const values_index = []
    const val_data = [...items]
    for (let i = 0; i < val_data.length; i++) {
      values_index.push(val_data[i].values)
    }
    pushgender(values_index)
  }

  // edit profile's functions
  const handleUpload = () => {
    inputRef.current?.click()
  }
  // const handleDisplayFileDetails = (event) => {
  //   const file = event.target.files[0]
  //   seturl(URL.createObjectURL(file))
  //   console.log(file, url, event.target.result)
  // }


  // This function will be triggered when the file field change
  const handlechange1 = (index) => {
    const newTags1 = [...tags1]
    if (newTags1[index].checking === true) {
      newTags1[index].checking = false
    } else {
      newTags1[index].checking = true
    }
    setTags1(newTags1)
  }

  const moreclick = () => {
    //
    const val1 = addmore.length - 1
    if (addmore[val1].name !== '') {
      setmore(oldArray => [...oldArray, { name: "", circle: true }])
    }
  }

  const deleteUserCall = () => {
    setLoader(true)
    const userID = individualUserDetails[0].User_details.user_id
    const payload = {
      admin_id: localStorage.getItem("loggedIn_userId"),
      user_id: userID
    }
    dispatch(deleteUserAccount_APIcall(payload))
  }

  useEffect(() => {
    if (authStat_deleteUserAccount.data.responseCode == 200 && authStat_deleteUserAccount.data.responseBody != undefined) {
      getAllUsersList()
      setLoader(false)
      setShow1(false)
    }
    else {
      // setShow1(true)
      setLoader(false)
    }
  }, [authStat_deleteUserAccount.data])

  const getAllUsersList = () => {
    const payload = {
      user_id: localStorage.getItem("loggedIn_userId")
    }
    dispatch(getUsersLists_APIcall(payload))
  }

  const clickvalue = (v) => {
    if (v.length !== 0) {
      const text = []
      const int = [...v]
      for (let i = 0; i < int.length; i++) {
        text.push(int[i].name)
        setinterests(text)
      }
    }
  }


  // filter looking for start
  const [tags, setTags] = useState([
    { id: "1", naming: 'New Friends', checking: true },
    { id: "2", naming: 'Activity Partner', checking: true },
    { id: "3", naming: 'Dating', checking: true },
    { id: "4", naming: 'Things to Do', checking: true },
    { id: "5", naming: 'Business', checking: true }
  ])

  const [tags11, setTags11] = useState([
    { id: "7", naming: 'Long-Term Relationship', checking: true },
    { id: "8", naming: 'Casual', checking: true },
    { id: "9", naming: 'Marriage', checking: true },
    { id: "10", naming: 'Not Sure Yet', checking: true }
  ])

  const handlechange = (index) => {
    const newTags = [...tags]
    if (newTags[index].checking === true) {
      newTags[index].checking = false
    } else {
      newTags[index].checking = true
    }
    setTags(newTags)
  }

  const handlechange3 = (index) => {
    const newTags11 = [...tags11]
    if (newTags11[index].checking === true) {
      newTags11[index].checking = false
    } else {
      newTags11[index].checking = true
    }
    setTags1(newTags11)
  }


  const [showLess, setshowLess] = useState(true)
  const changeShow = () => {
    setshowLess(!showLess)
  }
  // filter looking for ends


  // set user height start


  const handleInput = (e) => {
    const minValue = e.target.value
    const maxValue = e.target.value
    setwidth(e.target.value)
    setheight(`${e.target.value - 4}%`)
    const minFeet = minValue / 12
    const minInch = minValue % 12
    const maxFeet = maxValue / 12
    const maxInch = maxValue % 12

    const minText = `${Math.floor(minFeet)}’${minInch}”`
    const maxText = `${Math.floor(maxFeet)}’${maxInch}”`
    set_maxCaption(maxText)
    set_minCaption(minText)
  }
  // set user height ends

  //new  havekids starts
  const changeShow_havekids = () => {
    setshowLess_havekids(!showLess_havekids)
  }
  const [showLess_havekids, setshowLess_havekids] = useState(true)

  const handlechange_havekids = (index) => {
    for (let i = 0; i < dummyHavekids.length; i++) {
      if (dummyHavekids[i].id == index) {
        dummyHavekids[i].checked = true
      } else if (dummyHavekids[i].id != index) {
        dummyHavekids[i].checked = false
      }
    }
    //
    setHavekids(dummyHavekids)
    const find_changedIndex = havekids.findIndex(data => data.checked == true)
    //
    const setname = havekids[find_changedIndex].name
    if (setname == "Have Kids") {
      edit_setHavekids("Have Kids")
    } else if (setname == "Don’t Have Kids") {
      edit_setHavekids("Dont Have Kids")
    }

  }
  // new havekids ends 

  //new exercise habits starts
  const [showLess_exercise, setshowLess_exercise] = useState(true)
  const changeShow_exercise = () => {
    setshowLess_exercise(!showLess_exercise)
  }
  // const resetDrinking = drinking
  const handlechange_exercise = (index) => {
    for (let i = 0; i < dummyExercise.length; i++) {
      if (dummyExercise[i].id == index) {
        dummyExercise[i].checked = true
      } else if (dummyExercise[i].id != index) {
        dummyExercise[i].checked = false
      }
    }
    ////
    setExercise(dummyExercise)
    const find_changedIndex = exercise.findIndex(data => data.checked == true)
    const setname = exercise[find_changedIndex].name
    edit_setExercise(setname)
  }
  // new exercise habits ends 

  //new drinking habits starts
  const [showLess_drinking, setshowLess_drinking] = useState(true)
  const changeShow_drinking = () => {
    setshowLess_drinking(!showLess_drinking)
  }
  // const resetDrinking = drinking
  const handlechange_drinking = (index) => {
    for (let i = 0; i < dummyDrinking.length; i++) {
      if (dummyDrinking[i].id == index) {
        dummyDrinking[i].checked = true
      } else if (dummyDrinking[i].id != index) {
        dummyDrinking[i].checked = false
      }
    }
    ////
    setDrinking(dummyDrinking)
    const find_changedIndex = drinking.findIndex(data => data.checked == true)
    const setname = drinking[find_changedIndex].name
    edit_setDrinking(setname)
  }
  // new drinking habits ends 

  //looking_for starts

  const lookingforHandle = (index) => {
    ////
    // const selectedraw = []

    const newLookingfor1 = [...lookingfor]

    if (newLookingfor1[index].checked === false) {
      newLookingfor1[index].checked = true
      // selectedraw.push(newLookingfor1[index].keyname)
      setLookingfor(newLookingfor1)
    } else {
      newLookingfor1[index].checked = true
      newLookingfor1[index].checked = false
      setLookingfor(newLookingfor1)
    }

    if (index === 2 && newLookingfor1[index].checked === true) {
      setdatingOpt(true)
      setLookingfor(newLookingfor1)

    } else if (index === 2 && newLookingfor1[index].checked === false) {
      setdatingOpt(false)
      setLookingfor(newLookingfor1)
    }


  }

  const lookingforDatingHandle = (index) => {
    const newDating = [...dating]
    if (newDating[index].checked === false) {
      newDating[index].checked = true
      setDating(newDating)
    } else {
      newDating[index].checked = true
      newDating[index].checked = false
      setDating(newDating)
    }
  }


  const changeShow_lookingfor = () => {
    if (showLess_lookingfor === true) {
      setshowLess_lookingfor(false)
    } else {
      setshowLess_lookingfor(true)
    }

  }
  // looking_for ends
  const geterrorbutton = (i) => {
    //
    const data1 = [...addmore]
    const remove_val = data1
    remove_val.splice(i, 1)
    const deletedval = remove_val
    setmore(deletedval)
    const m = []
    if (deletedval.length !== 0) {
      for (let i = 0; i < deletedval.length; i++) {
        m.push(deletedval[i].name)
        setmultiloc_Api(m)
      }
    } else {
      setmultiloc_Api([])
    }
  }

  useEffect(() => {
  }, [addmore])
  const handlecrop = (v) => {
    doresetform('')
    setfiles(v)
  }
  const demoreset = (v1) => {
    //
    doresetform(v1)
    setfiles('')
  }
  return (
    <>
      <img onClick={() => handleshow(true)} src={edit} width="44px" height="44px"></img>
      <Modal show={show1} onHide={() => setShow1(false)} centered dialogClassName="userEditProfile-customModal" className={`${deletesgroups === true ? 'modal1' : 'modal'}`}>
        {/* {loader == true ? <div>
          <Loaders></Loaders>
        </div> : null} */}
        <div style={{ display: loader !== false ? '' : 'none' }}>
          <Loaders></Loaders>
        </div>
        <div className='p-2' style={{ display: deletesgroups === false ? '' : 'none' }}>
          <div className="" id="style-2">
            <div className="p-2">
              <div className='d-flex justify-content-between'>
                <span className='edit_profile'>Edit User</span>
                <div className='d-flex align-items-center' onClick={deleteUser} style={{ cursor: "pointer" }}>
                  <img src={deletes} width="20px" height="20px"></img>&nbsp;
                  <span className='edit_delete'>Remove User</span>
                </div>
                {/* <span className='d-flex align-items-center'>
                  <Removepopupuser data="Group" name="Dog Lovers"></Removepopupuser>
                </span> */}
              </div>
              <div className='col-12 borders mb-2'>
                <span className=' mb-1 mx-1'></span>
              </div>
              {/* <Editprof data="usered"></Editprof> */}

              {/* edit profile section start aaaaaa*/}
              {/* <Demo data={props.userVal[0].user_profile_picture[0].image_url} crop={handlecrop} ></Demo> */}
              <Demo data={userProfileImageUrl} crop={handlecrop} handles={demoreset} ></Demo>
              <div className='row mt-1'>
                <span className='edit_subheading mb-2'>Credentials</span>
                <div className='col-6'>
                  <div className="form-group">
                    <div className='d-flex align-items-center'>
                      <img src={adminemail} height="20px" width="20px" className='me-50'></img> <span className='input_toptext'>Email</span>
                    </div>
                    <input name="fullname" readOnly type="text" defaultValue={edit_emailaddress} onChange={e => edit_setEmailaddress(e.target.value)} className='formControl text_field ' />
                  </div>

                  {/* <button onClick={testclick}>test</button> */}
                </div>
                <div className='col-6'>
                  <div className="form-group">
                    <img src={phones} height="20px" width="20px" className='me-50'></img> <span className='input_toptext'>Mobile Number</span>
                    <input name="fullname" readOnly type="text" defaultValue={edit_mobilenumber} onChange={e => edit_setEmailaddress(e.target.value)} className='formControl text_field ' />
                  </div>
                </div>
              </div>

              <hr style={{ borderBottom: "0.5px solid #CCD8DB" }} className="mb-2"></hr>

              <div className='row'>
                <span className='edit_subheading mb-2'>Key Profile Info</span>
                <div className='col-6'>
                  <div className="form-group">
                    <div className='d-flex align-items-center'>
                      <img src={user} height="20px" width="20px" className='me-50'></img> <span className='input_toptext'>Full Name</span>
                    </div>
                    <input name="fullname" type="text" defaultValue={edit_fullname} onChange={e => edit_setFullname(e.target.value)} className='formControl text_field ' />
                  </div>
                </div>
                <div className='col-6'>
                  <div className="form-group">
                    <div className='d-flex align-items-center'>
                      <img src={birth} height="20px" width="20px" className='me-50'></img> <span className='input_toptext'>Birthdate</span>
                    </div>
                    <input name="birthdate" readOnly type="text" placeholder='MM/DD/YYYY' defaultValue={edit_birthdate} onChange={e => edit_setBirthdate(e.target.value)} className='formControl text_field ' />
                  </div>
                </div>
              </div>
              <div className='row mb-2'>
                <div className='col-7'></div>
                <div className='col-5' >
                  {/* {tags1.map((items1, index) => <div key={index} style={{ marginLeft: "10%", marginTop: "-2%" }} >
                    <img disabled={() => { handlechange1(index) }} src={items1.checking ? checkblankboxes : checktickboxes} width="25px" height="25px"></img>&nbsp;&nbsp;
                    <span class="text_style">{items1.naming}</span>
                  </div>)} */}

                  <div style={{ marginTop: "-5%" }}>
                    {edit_agerangeEnabled == '1' ? <img disabled={() => { handlechange_ageEnabled(edit_agerangeEnabled) }} src={checktickboxes} width="25px" height="25px" /> : <img disabled={() => { handlechange_ageEnabled(edit_agerangeEnabled) }} src={checkblankboxes} width="25px" height="25px" />}
                    <span class="text_style ps-50">Display age as age range instead</span>

                  </div>
                  <div style={{ marginTop: "3%", marginLeft: "-25px" }}>
                    {get_edit_birthdate == '1' ? <img disabled={() => { dateofbirth_ageEnabled(get_edit_birthdate) }} src={checktickboxes} width="25px" height="25px" /> : <img disabled={() => { dateofbirth_ageEnabled(get_edit_birthdate) }} src={checkblankboxes} width="25px" height="25px" />}
                    <span class="text_style ps-50">Display birthday (month and day only)</span>

                  </div>
                </div>
              </div>

              <div className='row mb-2'>
                <div className='col-6'>
                  <div className="form-group">
                    <div className='d-flex align-items-center'>
                      <img src={loc} height="20px" width="20px" className='me-50'></img>
                      <span className='input_toptext'>Primary Location</span>
                    </div>
                    <input name="fullname" readOnly type="text" defaultValue={edit_location} onChange={e => edit_setLocation(e.target.value)} className='formControl text_field ' />
                  </div>
                </div>
                <div className='col-6'>
                  <div className="form-group">
                    <div className='d-flex align-items-center'>
                      <img src={cases} height="20px" width="20px" className='me-50'></img> <span className='input_toptext'>Occupation</span>
                    </div>
                    <input name="birthdate" type="text" defaultValue={edit_occupation} onChange={e => edit_setOccupation(e.target.value)} className='formControl text_field ' />
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-between '>
                <span className='d-flex align-items-center'>
                  <img src={teach} height="20px" width="20px" className='me-50'></img> <span className='input_toptext'>Education</span> </span>
                {/* <span className='edit_delete' onClick={moreclick} >Add More</span> */}

              </div>
              <div className='row mb-2'>
                {/* <div className='col-6'>
                  <input name="birthdate" type="text" defaultValue={edit_education1} onChange={e => edit_setEducation1(e.target.value)} className='formControl text_field ' />
                </div> */}

                {addmore.map((res, index) => {
                  return (

                    <div className='col-6 d-flex' >
                      <div className=' d-flex formControl text_field' >
                        <input name="birthdate" type="text" defaultValuez={getsingleloc_Api} className=" text_field " onChange={(e) => getmorevalues(e.target.value, index)} style={{ width: "100%", border: "none", outline: "none" }} />
                        <div className="d-flex justify-content-end align-items-center" >
                          <img src={closecircle} width="25px" height="25px" style={{ display: index !== 0 ? '' : 'none' }} onClick={() => geterrorbutton(index)} ></img>
                        </div>
                      </div>
                    </div>

                  )
                })
                }
              </div>
              {/* edit profile section ends */}

              <div className="row">
                <div className="col-6">
                  <EditGenderActivity data={getgenderidentity} data1={setothergenderinfo} handles={genderval}></EditGenderActivity>
                </div>
                <div className="col-6">
                  {/* <FilterLookingFor></FilterLookingFor> */}

                  {/* filter looking for start */}
                  <div>
                    <div className='d-flex justify-content-between flex-row mb-2'>
                      <div>
                        <span className='loc'>Looking for</span>
                      </div>
                      <div>
                        {/* <div onClick={changeShow_lookingfor}>{showLess_lookingfor ? <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div> */}
                      </div>
                    </div>
                    <div className="row">

                      {lookingfor.map((items, index) => {
                        return (
                          <div key={index} className="col-4">
                            <div className='mb-2 d-flex align-items-center' >
                              <img className="me-50" src={items.checked == true ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>
                              <span style={items.css} className='fonting-style col-9'>{items.name} </span><br></br>
                            </div>
                          </div>
                        )
                      })}
                      {/* onClick={() => { lookingforHandle(index) }} */}
                      {datingOpt == true ? <div className="row">
                        <div className="mb-1" >
                          <span className='fonting-styling '>Because you selected dating...</span><br></br>
                        </div>
                        {dating.map((items1, index) => {
                          return (
                            <div key={index} className="col-6">
                              <div className='mb-2 d-flex align-items-center'>
                                <img className="me-50" disabled={() => { lookingforDatingHandle(index) }} src={items1.checked == true ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>
                                <span className='fonting-style col'>{items1.name} </span><br></br>
                              </div>
                            </div>
                          )
                        }
                        )}
                      </div> : null}
                    </div>
                  </div>

                  {/* filter looking for ends */}
                </div>
              </div>
              <hr style={{ color: '#CCD8DB' }}></hr>
              <EditInterests handle={clickvalue} data={getinterest}></EditInterests>
              <EditPopularInterests></EditPopularInterests>
              <hr className="mb-2" style={{ color: '#CCD8DB' }}></hr>
              <div className="mb-2">
                <span className="profile-info">Additional Profile Info</span>
              </div>
              <EditRelationshipStatus dataval={setrelation_shipstatus} sethandle={relationshipvalue}></EditRelationshipStatus>
              <hr style={{ color: '#CCD8DB' }}></hr>
              <EditAttractedTo datavalue={setattract} setattraction={getattractvalue}></EditAttractedTo>
              <hr style={{ color: '#CCD8DB' }}></hr>
              <EditPronouns data_pronoun={getpronoun} setpro={getpronownvalue} ></EditPronouns>
              <hr style={{ color: '#CCD8DB' }} className="mb-2"></hr>
              <div className="row ">
                <div className="col-6">
                  {/* <EditHometown></EditHometown> */}
                  <div className='mb-2 '>
                    <div className="d-flex align-items-center justidy-content-center">
                      <img src={edit_logo4} width="20px" height="20px"></img>&nbsp;&nbsp;
                      <span className='loc-text'>Hometown</span>
                    </div>
                  </div>
                  <div className='col-12 mb-2 placehollding1'>
                    <div className='d-flex align-items-center border_size'>
                      <input className='w-100 height-range ms-1 text_search'
                        defaultValue={edit_hometown} readOnly placeholder="Search neighborhood, city, or state" onChange={e => edit_setHometown(e.target.value)}
                        style={{ fontFamily: "Asap", fontStyle: 'normal', fontWeight: "500", fontSize: "14px", lineHeight: "16px", color: " #003B4A" }}></input>
                    </div>
                  </div>
                </div>

                {/* user height start */}
                <div className="col-6">
                  {/* <EditHeight></EditHeight> */}
                  <div className='range  flex-row mb-2'>
                    <img src={edit_logo5} width="9px" height="19px"></img> &nbsp;&nbsp;
                    <span className="loc-text">Height</span>
                  </div>

                  <div className="hello1" data-tip="This is the text of the tooltip2">
                    <div style={{ marginLeft: height }}>{minCaption}</div>
                    <input style={{ width: "100%" }}
                      type='range' readOnly

                      min={minCaption}
                      max={8}
                      value={width}></input>
                  </div>
                </div>
                {/* user height ends  onChange={handleInput} */}

                {/* <hr style={{ color: '#CCD8DB' }}></hr>
                <EditEthinicity></EditEthinicity> */}
                {/* <hr style={{ color: '#CCD8DB' }}></hr>
                <EditLanguages></EditLanguages> */}
                {/* <hr style={{ color: '#CCD8DB' }}></hr>
                <EditReligion></EditReligion>
                <hr style={{ color: '#CCD8DB' }}></hr>
                {/* <EditKids></EditKids> */}

                {/* new havekids habits start */}
                <div className='d-flex justify-content-between flex-row mb-2'>
                  <div className="">
                    <img src={edit_logo10} width="20px" height="20px"></img>
                    <span className='loc-text ms-1'>Kids</span>
                  </div>
                  <div>
                    <div disabled={changeShow_havekids}>{showLess_havekids ? <div><IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
                  </div>
                </div>
                {havekids.map((items, index) => {
                  return (
                    <div key={index} className="col-3 pe-0">
                      <div className='mb-2 d-flex align-items-center' >
                        <img disabled={() => { handlechange_havekids(index) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                        <span className='fonting-style'>{items.name1} </span><br></br>
                      </div>
                    </div>
                  )
                }
                )}
                {/* new havekids habits ends */}

                <hr style={{ color: '#CCD8DB' }}></hr>
                {/* <EditPolitics></EditPolitics> */}


                {/* new politics habits start */}
                {/* <div className='d-flex justify-content-between flex-row mb-2'>
                  <div className="">
                    <img src={edit_logo9} width="20px" height="20px"></img>
                    <span className='loc-text ms-1'>Politics</span>
                  </div>
                  <div>
                    <div onClick={changeShow_politics}>{showLess_politics ? <div><IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
                  </div>
                </div> */}
                {/* {politics.map((items, index) => {
                  return (
                    <div key={index} className="col-2">
                      <div className='mb-2 d-flex align-items-center' >
                        <img onClick={() => { handlechange_politics(index) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                        <span className='fonting-style'>{items.name} </span><br></br>
                      </div>
                    </div>
                  )
                }
                )} */}
                {/* new politics habits ends */}

                {/* <hr style={{ color: '#CCD8DB' }}></hr> */}
                {/* <EditExercise></EditExercise> */}

                {/* new exercise habits start */}
                <div className='d-flex justify-content-between flex-row mb-2'>
                  <div className="">
                    <img src={edit_logo11} width="28px" height="30px"></img>
                    <span className='loc-text ms-1'>Exercise</span>
                  </div>
                  <div>
                    <div disabled={changeShow_exercise}>{showLess_exercise ? <div><IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
                  </div>
                </div>
                {exercise.map((items, index) => {
                  return (
                    <div key={index} className="col-3 pe-0">
                      <div className='mb-2 d-flex align-items-center' >
                        <img disabled={() => { handlechange_exercise(index) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                        <span className='fonting-style'>{items.name} </span><br></br>
                      </div>
                    </div>
                  )
                }
                )}
                {/* new exercise habits ends */}

                <hr style={{ color: '#CCD8DB' }}></hr>
                {/* <EditDrinking></EditDrinking> */}

                {/* new drinking habits start */}
                <div className='d-flex justify-content-between flex-row mb-2'>
                  <div className="">
                    <img src={edit_logo12} width="20px" height="20px"></img>
                    <span className='loc-text ms-1'>Drinking</span>
                  </div>
                  <div>
                    <div disabled={changeShow_drinking}>{showLess_drinking ? <div><IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
                  </div>
                </div>
                {drinking.map((items, index) => {
                  return (
                    <div key={index} className="col-3 pe-0">
                      <div className='mb-2 d-flex align-items-center' >
                        <img disabled={() => { handlechange_drinking(index) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                        <span className='fonting-style'>{items.name} </span><br></br>
                      </div>
                    </div>
                  )
                }
                )}
                {/* new drinking habits ends */}


                <div className='col-12 d-flex justify-content-center mt-3 mb-2'>
                  <button className='btn1-style' onClick={() => cancelHandle(false)}><span className="text-cancel" >Cancel</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className='btn2-style' onClick={() => updateCall()}><span className="text-update">Update</span></button>
                  {/* <button className='btn2-style' onClick={updategroups}><span className="text-update">Update</span></button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: deletesgroups === true ? '' : 'none' }}>

          <div className='col-12 justify-content-center align-items-center d-flex'>
            <img className="mt-4 mb-2 ml-2 mr-2" src={userProfileImageUrl != "" ? userProfileImageUrl : defaults} width="107px" height="107px" style={{ borderRadius: "15px" }}></img>
          </div>
          <div className='col-12  justify-content-center bodypopup'>Are you sure you want to delete<br></br></div>
          <div className='col-12  justify-content-center bodypopup pt-25'>{user_fullName} as a user ?</div>
          <div className='col-12  justify-content-center bodypopuptwo1 mt-1'> User will be notified via email and user data will remain on the <br></br> admin application.</div>
          <div className='col-12 d-flex justify-content-center mt-3 mb-4'>
            <button className='btnstyles ' onClick={deleteUserCall}>Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btnstyledetails ' onClick={() => cancelHandle(false)}>No</button>
          </div>
        </div>
      </Modal>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    deleteUserAccountData: state.deleteUserAccountData,
    updateUserData: state.updateUserData,
    getUsersListsData: state.getUsersListsData,
    updateUserProfileImageData: state.updateUserProfileImageData
  }
}
export default connect(mapStateToProps, {})(EditPopup)