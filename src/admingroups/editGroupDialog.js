import { useState, useEffect } from 'react'
import Editprof from "../adminusers/editprofilepopup"
import deletes from '../assets/images/dashboardimg/editdelete.png'
import '../@core/scss/base/adminDashboard/editprofilepopup.scss'
import EditprofilePopup from './editpopupprofile'
import EditgroupInterest from './editgroupinterest'
import EditPopularInterests from '../adminusers/editpopularinterests'
import edit from '../assets/images/dashboardimg/editmenu.png'
import InviteMember from './invitemembers'
import Modal from 'react-bootstrap/Modal'
import Removepopupuser from '../adminusers/removeuser'
import { connect, useDispatch, useSelector } from 'react-redux'
import { invitememberinfo_APIcall } from './memberlist-splice'
import { adminupdateGroupInfo_APIcall } from './groupspanel/updategroups-slice'
import Loaders from '../enableloader'
import { deletegroups_APIcall } from './deletegroupsplice'
import { activeGroups_APIcall } from './groupspanel/getactive-splice'
import { groupupload_APIcall } from './groupspanel/imageupload-splice'
import { invitememberbyadmin_APIcall } from './groupspanel/invitememberbyadmin_splice'
import { getpendingGroups_APIcall } from './groupspending_splice'
import AutoComplete from './groupspanel/locationApi'
import blankimages from '../assets/images/dashboardimg/blank-image.png'
import twousers from '../assets/images/dashboardimg/twousersgroup.png'
import { defaultimage_APICall } from './resetfile-splice'


const EditgroupPopup = (props) => {

  console.log(props.data1.interest)
  const dispatch = useDispatch()
  const [show1, setShow1] = useState(false)

  const [interest, setinterests] = useState([])
  const [locations, setlocation] = useState(props.data1.location)
  const [descriptions, setdescription] = useState(props.data1.description)
  const [grouperror, setgroupnameerror] = useState('')
  const [locationerror, setlocationerror] = useState('')
  const [overall, setoverall] = useState('')
  const [colorchange, setcolors] = useState(false)
  const [groupname, setgroupname] = useState(props.data1.group_name)
  const [usersFriendsList, setuser] = useState([])
  
  const [descriptionerror, setdescriptionerror] = useState('')
  const [started, setstart] = useState(false)
  const [submit, setsubmitted] = useState(false)
  const [deletesgroups, setdeletesgroups] = useState(false)
  const [setresetform, doresetform] = useState('')
  const [latitude, setlatitude] = useState('')
  const [longitude, setlongitude] = useState('')
  const [file, setfiles] = useState('')
  const [values_userid, setvalues_userid] = useState([])
  const [valalert, alertval] = useState(false)
  const [getreset, setreset] = useState('')
  const locationchange = (v, lat, long) => {
    //
    console.log(v)
    setlocation(v)
    setlatitude(lat)
    setlongitude(long)
  }
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
  const clickdelete = () => {
    setdeletesgroups(true)
  }
  const resetdefault = (v) => {
    setreset(v)
    setfiles('')
  }
  const handlecrop = (v) => {

    console.log(v)
    setfiles(v)
  }
  const handleClose = () => {
    alertval(false)
    setShow1(false)
    if (props.pending === false) {
      const payload = {
        user_id: localStorage.getItem("loggedIn_userId"),

      }

      dispatch(activeGroups_APIcall(payload))
    } else {
      const payload = {
        admin_id: localStorage.getItem("loggedIn_userId"),

      }

      dispatch(getpendingGroups_APIcall(payload))
    }
    setgroupname('')
    setlocation('')
    setdescription('')

  }
  const demoreset = (v1) => {

    doresetform(v1)
    setfiles('')
  }
  const handleshow = () => {
    //
    alertval(true)
    setvalues_userid([])
    setdeletesgroups(false)
    setShow1(true)
    setstart(false)
    setlatitude(props.data1.lattitude)
    setlongitude(props.data1.longitude)
    setgroupname(props.data1.group_name)
    setlocation(props.data1.location)
    setdescription(props.data1.description)
    setsubmitted(false)
  }
  const updategroups = () => {

    console.log(descriptions, groupname, locations)
    setsubmitted(true)
    if (groupname === '') {
      setgroupnameerror('Group Name is Required')
    } else {
      setgroupnameerror('')
    }
    
    if (descriptions === '' ) {
      setdescriptionerror('Description is Required')
    } else {
      setdescriptionerror('')
    }

    if (locations === '') {
      setlocationerror('Location is Required')
    } else {
      setlocationerror('')
    }

    if (groupname !== '' && descriptions !== '') {
      setstart(true)

      const payload = {
        admin_id: localStorage.getItem('loggedIn_userId'),
        group_id: props.data1.group_id,
        group_name: groupname,
        location: locations,
        longitude: longitude.toString(),
        lattitude: latitude.toString(),
        description: descriptions,
        interests: interest
      }
      //
      dispatch(adminupdateGroupInfo_APIcall(payload))
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
      if (descriptions === '' ) {
        setdescriptionerror('Description is Required')
      } else {
        setdescriptionerror('')
      }
  
    }
  }
  const handleClose1 = () => {
    alertval(false)
    setstart(true)
    const payload = {
      user_id: localStorage.getItem("loggedIn_userId"),
      group_id: props.data1.group_id

    }
    dispatch(deletegroups_APIcall(payload))

  }
  useEffect(() => {
    //

    const payload = {
      group_id: props.data1.group_id,
      admin_id: localStorage.getItem('loggedIn_userId')
    }

    dispatch(invitememberinfo_APIcall(payload))
  }, [valalert])
  const invite_member_selector = useSelector((state) => state.invite_Groupmemberbyadmin)
  useEffect(() => {
    if (authStat.updategroup.responseCode === 200) {
      const { invite_Groupmemberdetails } = invite_member_selector
      console.log("data", invite_Groupmemberdetails)
      const { responseBody } = invite_Groupmemberdetails
      console.log("login responseBody", responseBody)
      console.log("auth respomse success")
      if (invite_member_selector.invite_Groupmemberdetails.responseCode === 200) {
        //
        setoverall('Groups updated SuccessFully')
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
  const authStat = useSelector((state) => state.adminupdateGroupInfo)
  const defaultimg = useSelector((state) => state.defaultimageget)
  useEffect(() => {
    if (authStat !== undefined) {
      //
      const { updategroup } = authStat
      console.log("data", updategroup)
      const { responseBody } = updategroup
      console.log("login responseBody", responseBody)
      console.log("auth respomse success")
      //
      if (authStat.updategroup.responseCode === 200) {
        if (file !== '' && getreset === '') {
          const data = new FormData()

          data.append('file_data', file)
          data.append('group_id', props.data1.group_id)
          data.append('user_id', localStorage.getItem("loggedIn_userId"))
          dispatch(groupupload_APIcall(data))

        } else if (file === '' && getreset !== '') {
          const payload_user = {
            type: '2',
            uuid: props.data1.group_id

          }
          dispatch(defaultimage_APICall(payload_user))

        } else if ((file === '' || getreset === '') && values_userid.length > 1) {
          if (props.data1.group_id !== undefined) {
            const payload_user = {
              group_id: props.data1.group_id,
              admin_id: localStorage.getItem("loggedIn_userId"),
              invited_user_id: values_userid
            }

            console.log(payload_user)
            dispatch(invitememberbyadmin_APIcall(payload_user))
          }
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
      } else if (authStat.updategroup.responseCode === 201) {
        setstart(false)
        handleClose()
        setcolors(false)
        setoverall('')
        setlocation('')
        setgroupname('')
        setdescription('')
      }
    }
  }, [authStat.updategroup])
  useEffect(() => {

    if (defaultimg !== undefined && defaultimg !== "") {

      const { defaultgroup } = defaultimg
      console.log("data", defaultgroup)
      const { responseBody } = defaultgroup
      console.log("login responseBody", responseBody)
      console.log("auth respomse success")
      //
      if (defaultimg.defaultgroup.responseCode === 200) {
        if (values_userid.length > 1) {
          //
          if (props.data1.group_id !== undefined) {
            const payload_user = {
              group_id: props.data1.group_id,
              admin_id: localStorage.getItem("loggedIn_userId"),
              invited_user_id: values_userid
            }

            console.log(payload_user)
            dispatch(invitememberbyadmin_APIcall(payload_user))
          }
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
      } else if (defaultimg.defaultgroup.responseCode === 201) {
        setoverall('failed')
      }

    }
  }, [defaultimg.defaultgroup])
  const uploadupdate = useSelector((state) => state.groupuploaddetails)
  console.log(uploadupdate)
  useEffect(() => {

    if (uploadupdate !== undefined && uploadupdate !== "") {
      //
      const { uploadimage } = uploadupdate
      console.log("data", uploadimage)
      const { responseBody } = uploadimage
      console.log("login responseBody", responseBody)
      console.log("auth respomse success")
      //
      if (uploadupdate.uploadimage.responseCode === 200) {
        if (values_userid.length > 1) {
          //
          if (props.data1.group_id !== undefined) {
            const payload_user = {
              group_id: props.data1.group_id,
              admin_id: localStorage.getItem("loggedIn_userId"),
              invited_user_id: values_userid
            }

            console.log(payload_user)
            dispatch(invitememberbyadmin_APIcall(payload_user))
          }
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
      } else if (uploadupdate.uploadimage.responseCode === 201) {
        setoverall('failed')
      }

    }
  }, [uploadupdate.uploadimage])
  const auth = useSelector((state) => state.deletegroupsinfo)
  useEffect(() => {


    if (auth !== undefined && auth !== "") {

      const { deletegroups } = auth
      console.log("data", deletegroups)
      const { responseBody } = deletegroups
      console.log("login responseBody", responseBody)
      console.log("auth respomse success")

      if (auth.deletegroups.responseCode === 200) {
        setShow1(false)
        setstart(false)
        const payload = {
          user_id: localStorage.getItem("loggedIn_userId")
        }

        dispatch(activeGroups_APIcall(payload))

      } else if (auth.deletegroups.responseCode === 201) {
        setstart(false)
        setShow1(false)
      }
    }
  }, [auth.deletegroups])


  return (
    <>
      <img onClick={handleshow} src={edit} style={{ position: "absolute", top: 0, right: 0 }} className="m-3" width="44px" height="44px" ></img>

      <Modal show={show1} centered className={`${deletesgroups === true ? 'modal1' : 'modal'}`} >
        <div style={{ display: started !== false ? '' : 'none' }}>
          <Loaders></Loaders>
        </div>
        <div className='p-2' style={{ display: deletesgroups === false ? '' : 'none' }}>
          <div >
            <div className="p-2">
              <div className='d-flex justify-content-between'>
                <span className='edit_profile'>Edit Group Info
                </span>
                <span className='d-flex align-items-center' onClick={clickdelete}>
                  <img src={deletes} width="20px" height="20px"></img>&nbsp;
                  <span className='edit_delete'>Delete Group </span></span>


              </div>

              <div className='col-12 borders mb-2'>
                <span className=' mb-1 mx-1'></span>
              </div>

              <EditprofilePopup data={props.data1.image_url !== "" ? props.data1.image_url : twousers

                //  <> 
                //   <img style={{ position: "relative" , borderRadius:'10px'}}  width="60px" height="60px" src={blankimages}></img>
                //  <img src={twousers} width="35px" style={{position:'absolute', marginLeft:'12px', marginTop:'-45px'}}></img>
                //   </> 
              } style={props.data1.image_url !== "" ? null : 'red'}
                crop={handlecrop} handle1={resetdefault}></EditprofilePopup>
              <div className='row mt-2'>
                <div className='col-6'>
                  <span className='input_toptext'>Group Name</span>

                  <input

                    type="text"
                    // placeholder='Enter Email-Id' 
                    defaultValue={groupname}
                    className='formControl text_field mt-50'
                    onChange={(e) => {
                      setgroupname(e.target.value)

                    }}
                    onKeyUp={errorgroups}
                  />
                  <span className='text-danger'>{grouperror}</span>
                </div>
                {/* <div className='col-6'>
  <span className='input_toptext'>Location</span> 
      
      <input
       
        type="text" 
        // placeholder='Enter Email-Id' 
       defaultValue={locations}
        className='formControl text_field mt-50'
        onChange={(e) => setlocation(e.target.value)} onKeyUp={errorlocation}
      />
        <span className='text-danger'>{locationerror}</span>
   
    </div> */}
                <AutoComplete handle={locationchange} data={submit} sendloc={props.data1.location}></AutoComplete>
              </div>
              <div className='col-12 mt-2'>
                <span className='input_toptext'>Description</span>

                <textarea name="w3review" className='formControl text_field mt-50' defaultValue={descriptions} onChange={(e) => setdescription(e.target.value)} style={{ minHeight: "90px" }} rows="200" cols="200"  onKeyUp={errorgroups} placeholder='Type a description...'>

                </textarea>
                
                <span className='text-danger'>{descriptionerror}</span>

              </div>
              <EditgroupInterest data={props.data1.interest} handle={clickvalue} ></EditgroupInterest>
              <EditPopularInterests ></EditPopularInterests>
              <div className='col-12 borders mb-2'>
                <span className=' mb-1 mx-1'></span>
              </div>
              <InviteMember data={usersFriendsList} handleval={changedval}></InviteMember>
              <div className='col-12 d-flex justify-content-center mt-3 mb-2'>
                <button className='btn1-style' onClick={() => setShow1(false)}><span className="text-cancel" >Cancel</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn2-style' onClick={updategroups}><span className="text-update">Update</span></button>
              </div>
              <div className='d-flex justify-content-center'  >
                <span className={colorchange === true ? 'text-success' : 'text-danger'} style={{ fontSize: "18px", fontWeight: 700 }}>{overall}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-12' style={{ display: deletesgroups === true ? '' : 'none' }}>
          <div className='col-12 d-flex justify-content-center'>
            <img className="mt-4 mb-2 ml-2 mr-2" style={{ borderRadius: "15px" }} src={props.data1.image_url === '' ? twousers : props.data1.image_url} width="107px" height="107px"></img>
          </div>
          <div className='col-12  justify-content-center bodypopuptwo1 mt-1'> Group Information will remain on the admin application.</div>
          <div className='col-12 d-flex justify-content-center mt-3 mb-4'>
            <button className='btnstyles ' onClick={handleClose1}>Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btnstyledetails ' onClick={() => setShow1(false)}>No</button>
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
export default connect(mapStateToProps, {})(EditgroupPopup)
