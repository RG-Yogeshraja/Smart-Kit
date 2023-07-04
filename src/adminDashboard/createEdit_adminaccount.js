import '../@core/scss/base/adminDashboard/adminmenu/AdminAccount.scss'
import user from '../assets/images/dashboardimg/1.png'
import passwordss from '../assets/images/dashboardimg/lock.png'
import adminemail from '../assets/images/dashboardimg/sms.png'
import infocircle from '../assets/images/dashboardimg/info-circle1.png'
import infos from '../assets/images/dashboardimg/infocirc.png'
import username from '../assets/images/dashboardimg/useraccount.png'
import eye from '../assets/images/dashboardimg/Show.png'
import eyeslash from '../assets/images/dashboardimg/eyeslashs.png'
import addEvents from '../assets/images/dashboardimg/addnew.png'
import dot from '../assets/images/dashboardimg/Ellipse11.png'
import Select from 'react-select'
import React, { useState, useEffect, useRef } from "react"
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import { useForm } from 'react-hook-form'
import Overlay from 'react-bootstrap/Overlay';
import phones from '../../src/assets/images/dashboardimg/phonenum.png'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import AdminAccountList from './adminAccountList'
import { blue } from '@mui/material/colors'
import { createAdminUser_APIcall, clearRegisterData } from './slice-createuser'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getActiveAdminAccount_APIcall } from './slice-active-deleteduserlist'
import Loaders from '../enableloader'
import { updateAdminUser_APIcall } from './slice-updateuser'
import { Link, useNavigate } from "react-router-dom";
import UpdateAdminAccount from './updateAdminAccount'



const CreateEdit_adminAccount = (props) => {

  // console.log(props)
  const [logintype, set_logintype] = useState('')
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)
  const [adminAccountLists, setAdminAccountLists] = useState([])
  const [emailRegError, setEmailRegError] = useState(false)
  const [loggedInAsSuperAdmin, setLoggedInAsSuperAdmin] = useState(false)
  const ref = useRef(null)
  const Options = [
    { value: '', label: 'Select One...' },
    { value: '1', label: 'Super Admin' },
    { value: '2', label: 'Admin' },
  ]
  const [onlyAdmin, setOnlyAdmin] = useState([
    // { value: '0', label: 'Select One...' },
    // { value: '1', label: 'Super Admin' },
    { value: '2', label: 'Admin' },
  ])
  // const [selected, setSelected] = useState(Options[0].value)
  const [selected, setSelected] = useState()
  const [fullname, setFullname] = useState('')
  const [email, setemail] = useState('')
  const [mobileno, setmobile] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [updatepassword, setUpdatePassword] = useState('')
  const [updateconfirmPassword, setUpdateConfirmPassword] = useState('')
  const [adminAccountType, setAdminAccountType] = useState('')
  const [opt, setopt] = useState('')
  const [passwordSectionShow, setPasswordSectionShow] = useState(true)
  const [show, setShow] = useState(true)
  const [create, setcreate] = useState(false)
  const [mobileno1, setNumber] = useState('')
  const [editdata, setEditdata] = useState()
  const [userData_forEdit, setUserData_forEdit] = useState()
  const [createAdmin, setCreateAdmin] = useState(true)


  //new declarations
  const { register, handleSubmit, getValues, setValue, reset, formState: { errors }, watch } = useForm()
  const authStat = useSelector((state) => state.userRegisterData)
  const [shown, setShown] = useState(true)
  const authStat_createUser = useSelector((state) => state.createAdminUserData)
  const authStat_updateUser = useSelector((state) => state.updateAdminUserData)
  const authStat_getActiveList = useSelector((state) => state.getActiveAdminData)
  const authStat_deleteUserAccount = useSelector((state) => state.deleteUserData)


  const canceledit = () => {
    setcreate(false)
    setSelected([0])
    setFullname('')
    // setemail('')
    // setNumber('')
    // setPassword('')
    setValue("fullname", "")
    setValue("email", "")
    setValue("mnumber", "")
    setValue("password", "")
    setValue("cpassword", "")
    setValue("updatePassword", "")
    setValue("UpdateConfirmPassword", "")
    // setConfirmPassword('')
    // setUpdatePassword('')
    // setUpdateConfirmPassword('')
    reset()
    setCreateAdmin(true)
  }

  const edittabs = (obj, index) => {
    setEditdata(obj)
    setUserData_forEdit(obj)
    setcreate(true)
    setCreateAdmin(false)
    setValue("options", obj.user_role)
    setValue("fullname", obj.full_name)
    setValue("email", obj.email_address)
    setValue("mnumber", obj.mobile_number)
    setValue("password", "")
    setValue("cpassword", "")
    setValue("updatePassword", "")
    setValue("UpdateConfirmPassword", "")
    setSelected([obj.user_role])
    setPassword('')
    // setConfirmPassword('')
    // setUpdatePassword('')
    // setUpdateConfirmPassword('')
    console.log(fullname)
    console.log(selected)
  }

  // denamedford@hintsocial.com
  // luvkaria@hintsocial.com
  // const deleted = () => {
  //   setSelected('')
  //   setFullname('')
  //   setemail('')
  //   setmobile('')
  //   setpassword('')
  //   setconfirmPassword('')
  //   setcreate(false)
  // }


  useEffect(() => {
    const idtest = localStorage.getItem("loggedIn_userId")
    console.log(idtest)
    getCreatedAdminList()
  }, [])

  //1 get admin accouns list API call
  const getCreatedAdminList = () => {
    setLoader(true)
    const userId = localStorage.getItem('loggedIn_userId')
    const payload = {
      user_id: userId
    }
    dispatch(getActiveAdminAccount_APIcall(payload))
  }

  //1 create/update admin account api call
  const onSubmit = (data) => {
    setLoader(true)
    console.log(data)
    if (createAdmin == true) {
      setLoader(true)
      if (data.selected == "1" || data.selected == "2") {
        const payload = {
          account_type: data.selected,
          full_name: data.fullname,
          email_address: data.email,
          mobile_number: data.mnumber,
          password: data.password,
        }
        console.log(payload)
        dispatch(createAdminUser_APIcall(payload))
      }
    }
    if (createAdmin == false) {

      setLoader(true)
      const payload = {
        user_id: userData_forEdit.user_id,
        account_type: selected[0],
        full_name: data.fullname,
        password: data.UpdateConfirmPassword
      }
      dispatch(updateAdminUser_APIcall(payload))
      reset()
    }
  }

  useEffect(() => {
    dispatch(clearRegisterData());
  }, [])

  //3 after getting response from create admin account API call, need to reload the get admin accounts list API call
  useEffect(() => {
    if (authStat_createUser.data.responseBody != undefined && authStat_createUser.data.responseCode == 200) {
      console.log('SUCCESS account created')
      reset()
      setSelected([0])
      getCreatedAdminList()
    }
    else if (authStat_createUser.data.responseCode == 201) {
      console.log('FAILED Entered email is already registered')
    }
  }, [authStat_createUser.data])


  //4 after getting response from update admin account API call, need to reload the get admin accounts list API call
  useEffect(() => {
    if (authStat_updateUser.data.responseBody != undefined && authStat_updateUser.data.responseCode == 200) {
      reset()
      setSelected([0])
      // setUpdatePassword('')
      // setUpdateConfirmPassword('')
      setCreateAdmin(true)
      setcreate(false)
      getCreatedAdminList()
    }
  }, [authStat_updateUser.data])

  //5 after get response from get admin accounts list api call, store the result
  useEffect(() => {
    // if (authStat_getActiveList.data.responseCode != 200 || authStat_getActiveList.data.responseCode == undefined) {
    //   getCreatedAdminList()
    // }
    if (authStat_getActiveList.data.responseBody != undefined && authStat_getActiveList.data.responseCode == 200) {
      const responseData = authStat_getActiveList.data.responseBody
      console.log('account created SUCCESS', authStat_getActiveList.data.responseBody)
      const loggedInAdmin = responseData.filter((item) => item.user_id == localStorage.getItem("loggedIn_userId"))
      const otherUsers = responseData.filter((item) => item.user_id != localStorage.getItem("loggedIn_userId"))
      const filterSuperAdminOnly = otherUsers.filter((item) => item.user_role == '1')
      const sortSuperAdminOnly = filterSuperAdminOnly.sort((a, b) => a.full_name.localeCompare(b.full_name))
      const filterAdminOnly = otherUsers.filter((item) => item.user_role == '2')
      const sortAdminOnly = filterAdminOnly.sort((a, b) => a.full_name.localeCompare(b.full_name))
      const loggedInUserData = [...loggedInAdmin, ...sortSuperAdminOnly, ...sortAdminOnly]
      localStorage.setItem("user_role", loggedInUserData[0].user_role)
      localStorage.setItem("user_name", loggedInUserData[0].full_name)

      if (loggedInUserData[0].user_role == "1") {
        setLoggedInAsSuperAdmin(true)
      }
      else if (loggedInUserData[0].user_role == "2") {
        setLoggedInAsSuperAdmin(false)
      }
      setLoader(false)
      setAdminAccountLists(loggedInUserData)
    }
    else if (authStat_getActiveList.data.responseCode == 201) {
      console.log('ERROR Entered Email ID already registered')
      setLoader(false)
    }
    else {
      setLoader(false)
    }
  }, [authStat_getActiveList.data])

  const numberInputOnWheelPreventChange = (e) => {
    e.target.blur()
    e.stopPropagation()
    setTimeout(() => {
      e.target.focus()
    }, 0)
  }

  return (
    <div class="row">
      <div style={{ display: loader !== false ? '' : 'none' }}>
        <Loaders></Loaders>
      </div>
      <span className='headingtag'>Admin Accounts</span>
      <div className="col-xl-7 col-lg-7 col-md-6 col-xs-6 col-sm-6 tnt card flex-layout flex-column" style={{ display: adminAccountLists.length !== 0 ? 'none' : 'flex' }} >
        <div className='text-center mb-5'>
          <img src={addEvents} width="100px;" ></img>
          <div className='spantag mt-3'>Add new admin user on right panel</div>
        </div>
      </div>
      <div className="col-xl-7 col-lg-7 col-md-6 col-xs-6 col-sm-6 aligns" style={{ display: adminAccountLists.length === 0 ? 'none' : 'block' }} >
        {/* <AdminAccountList logintype={logintype} onClickFunc={(parm) => onClosePopup(parm)} props={adminAccountLists} edit={edittabs} delete={deleted}></AdminAccountList> */}
        <AdminAccountList logintype={logintype} onClickFunc={(parm) => onClosePopup(parm)} props={adminAccountLists} edit={edittabs}></AdminAccountList>
      </div>
      <div className="col-xl-5 col-lg-5 col-md-6 col-xs-6 col-sm-6">
        <div className="card topalign d-flex flex-column ms-1">
          <div className="register-form">
            <span className='spans' style={{ display: create === true ? 'none' : 'block' }}>Create User</span>
            <span className='spans' style={{ display: create === false ? 'none' : 'block' }}>Edit User</span>

            {createAdmin == true ?
              <form onSubmit={handleSubmit(onSubmit)} className="" style={{ marginTop: "18px" }}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <img src={username} height="20px" width="20px"></img>
                      <label className='extraalignment'> Account Type</label>
                      <select name="selected" defaultValue={selected} className={`formControl admin_text text_field`}
                        {...register("selected", { required: "Account Type is required" })}
                        value={selected}
                        onChange={e => setSelected(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Admin</option>
                      </select>
                      {errors.selected && (<small className="text-danger">{errors.selected.message}</small>)}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <img src={user} height="20px" width="20px"></img>
                      <label className="form-control-label">Full Name</label>
                      <input autoComplete="off" type="text" defaultValue={fullname} placeholder="First Name"
                        onChange={e => setFullname(e.target.value)}
                        className={`formControl text_field ${errors.fullname ? 'is-invalid' : ''}`}
                        {...register("fullname", {
                          required: "Full Name is required",
                          pattern: {
                            value: /^\S[a-zA-Z'-_()0-9\s!@#$%^&*]*$/,
                            message: "Please enter the valid Full Name"
                          },
                          minLength: { value: 3, message: "First Name must be 3 characters", },
                        })} />
                      {errors.fullname && (<small className="text-danger">{errors.fullname.message}</small>)}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <img src={adminemail} height="20px" width="20px"></img>
                      <label className="form-control-label">Email</label>
                      <input autoComplete="off" type="email" defaultValue={email} placeholder="Email Address"
                        className={`formControl text_field`}
                        {...register("email",
                          {
                            required: "Email Address is required",
                            pattern: {
                              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                              message: "Please enter the valid Email Address",
                            }
                          })} />
                      {errors.email && (<small className="text-danger">{errors.email.message}</small>)} </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <img src={phones} height="20px" width="20px"></img>
                      <label className="form-control-label">Mobile Number</label>
                      <input onWheel={numberInputOnWheelPreventChange} autoComplete="off" type="number" defaultValue={mobileno1} placeholder="Mobile Number" className={`formControl text_field`}{...register("mnumber", {
                        required: "Mobile Number is required",
                        pattern: { value: /^(?!(000000))^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, message: "Please enter the valid Mobile Number", }
                      })} />
                      {/* pattern: { value: /^(?!000000)\d{8}$/, message: "Please enter the valid Mobile Number", } })} /> */}
                      {errors.mnumber && (<small className="text-danger">{errors.mnumber.message}</small>)} </div>
                  </div>

                  <div>
                    <div className="col-md-12 ">
                      <div className="form-group">
                        <img src={passwordss} height="20px" width="20px"></img>
                        <label className="extraalignment">Password</label> &nbsp;
                        <div className="pwd-container2">
                          <input autoComplete="off" className={`formControl text_field`} placeholder='Password' name="pwd" type={show === true ? "password" : "text"}
                            onChange={e => setPassword(e.target.value)} {...register("password", {
                              required: "Password is required",
                              pattern: {
                                value: /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/,
                                message: "Password must contain at least one number, one special character, one uppercase, and one lowercase. ",
                              },
                            })} />

                          {errors.password && (<small className="text-danger">{errors.password.message}</small>)}
                          <img height="22px" width="22px" onClick={() => setShow((s) => !s)} src={show === true ? eye : eyeslash} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 ">
                      <div className="form-group">
                        <img src={passwordss} height="20px" width="20px"></img>
                        <label className="form-control-label">
                          Confirm Password
                        </label>
                        <div className='pwd-container3'>
                          <input autoComplete="off" className={`formControl text_field`} placeholder='Confirm Password'
                            onChange={e => setConfirmPassword(e.target.value)} name="pwd" type={shown === true ? "password" : "text"} {...register("cpassword",
                              {
                                required: "Confirm Password is required",
                                validate: (val) => {
                                  if (watch('password') != val) {
                                    return "Your Passwords do not match";
                                  }
                                }
                              }
                            )} />
                          {errors.cpassword && (<small className="text-danger">{errors.cpassword.message}</small>)}
                          <img height="22px" width="22px" onClick={() => setShown((s) => !s)} src={shown === true ? eye : eyeslash} />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className='mt-1 d-flex flex-row align-items-center'>
                    <img src={dot} width="7px" height="7px" className='me-1'></img><span className='fontstyles'>Must Contain At Least One Special Symbol</span>
                  </div>
                  <div className='mt-1 d-flex flex-row align-items-center'>
                    <img src={dot} width="7px" height="7px" className='me-1'></img><span className='fontstyles'>Must Contain At Least One Number</span>
                  </div>

                  {create == true ?
                    <div className="form-group flex flex_button mt-4">
                      <button type="button" className="cancelBtn2 p-1 col-lg-9 w-md-100 w-xs-100 w-sm-100 " onClick={() => canceledit()} >
                        <span className=''>Cancel</span>
                      </button>
                    </div> : null}
                  <div className="form-group flex flex_button ">

                    {create == false ?
                      <button type="submit" className="btn btns btn_update col-lg-9 w-md-100 w-xs-100 w-sm-100 " >
                        <span className='colorss'>Add</span>
                      </button> : null}

                    {create == true ?
                      <button type="submit" className="btn btns btn_update col-lg-9 w-md-100 w-xs-100 w-sm-100 " >
                        <span className='colorss'>Save</span>
                      </button> : null}
                  </div>
                </div>
              </form> : null}



            {createAdmin == false ?
              <form onSubmit={handleSubmit(onSubmit)} className="" style={{ marginTop: "18px" }}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <img src={username} height="20px" width="20px"></img>
                      <label className='extraalignment'> Account Type</label>
                      <select name="options" defaultValue={selected} className={`formControl admin_text text_field`}
                        {...register("options", { required: "Account Type is required" })}
                        value={selected}
                        onChange={e => setSelected(e.target.value)}>
                        {loggedInAsSuperAdmin == true ?
                          <option value="">Select...</option> : null}
                        {loggedInAsSuperAdmin == true ?
                          <option value="1">Super Admin</option> : null}
                        <option value="2"> Admin</option>
                      </select>
                      {errors.options && (<small className="text-danger">{errors.options.message}</small>)}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <img src={user} height="20px" width="20px"></img>
                      <label className="form-control-label">Full Name</label>
                      <input autoComplete="off" type="text" defaultValue={fullname} placeholder="First Name"
                        onChange={e => setFullname(e.target.value)}
                        className={`formControl text_field`} {...register("fullname", {
                          required: "Full Name is required",
                          pattern: {
                            value: /^\S[a-zA-Z'-_()0-9\s!@#$%^&*]*$/,
                            message: "Please enter the valid Full Name"
                          },
                          minLength: { value: 3, message: "First Name must be 3 characters", }
                        })} />
                      {errors.fullname && (<small className="text-danger">{errors.fullname.message}</small>)}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <img src={adminemail} height="20px" width="20px"></img>
                      <label className="form-control-label">
                        Email
                      </label>
                      <input autoComplete="off" type="email" defaultValue={email} placeholder="Email Address"
                        className={`formControl text_field`}
                        {...register("email",
                          {
                            required: "Email Address is required",
                            pattern: {
                              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                              message: "Please enter the valid Email Address",
                            }
                          })} />
                      {errors.email && (<small className="text-danger">{errors.email.message}</small>)} </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <img src={phones} height="20px" width="20px"></img>
                      <label className="form-control-label">Mobile Number</label>
                      <input autoComplete="off" type="number" defaultValue={mobileno1} placeholder="Mobile Number" className={`formControl text_field`}{...register("mnumber", {
                        required: "Mobile Number is required",
                        pattern: { value: /([1-9][0-9]*)|0/, message: "Please enter the valid Mobile Number", }
                      })} />
                      {errors.mnumber && (<small className="text-danger">{errors.mnumber.message}</small>)} </div>
                  </div>

                  <div>
                    <div className="col-md-12 ">
                      <div className="form-group">
                        <img src={passwordss} height="20px" width="20px"></img>
                        <label className="form-control-label">Password</label> &nbsp;
                        <div className='pwd-container2'>
                          <input autoComplete="off" className={`formControl text_field`} placeholder='Password' name="pwd" type={show === true ? "password" : "text"}
                            onChange={e => setUpdatePassword(e.target.value)} {...register("updatePassword", {
                              optional: "",
                              pattern: {
                                value: /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/,
                                message: "Password must contain at least one number, one special character, one uppercase, and one lowercase. ",
                              },
                            })} />
                          {errors.updatePassword && (<small className="text-danger">{errors.updatePassword.message}</small>)}
                          <img height="20px" width="20px" onClick={() => setShow((s) => !s)} src={show === true ? eye : eyeslash} />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <img src={passwordss} height="20px" width="20px"></img>
                        <label className="form-control-label">
                          Confirm Password
                        </label>
                        <div className='pwd-container3'>
                          <input autoComplete="off" className={`formControl text_field`} placeholder='Confirm Password' name="pwd" type={shown === true ? "password" : "text"}
                            onChange={e => setUpdateConfirmPassword(e.target.value)}  {...register("UpdateConfirmPassword",
                              {
                                optional: "",
                                validate: (val) => {
                                  if (watch('updatePassword') != val) {
                                    return "Your Passwords do not match ";
                                  }
                                }
                              }
                            )} />
                          {errors.UpdateConfirmPassword && (<small className="text-danger">{errors.UpdateConfirmPassword.message}</small>)}
                          <img height="20px" width="20px" onClick={() => setShown((s) => !s)} src={shown === true ? eye : eyeslash} />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className='mt-1 d-flex flex-row align-items-center'>
                    <img src={dot} width="7px" height="7px" className='me-1'></img><span className='fontstyles'>Must Contain At Least One Special Symbol</span>
                  </div>
                  <div className='mt-1 d-flex flex-row align-items-center'>
                    <img src={dot} width="7px" height="7px" className='me-1'></img><span className='fontstyles'>Must Contain At Least One Number</span>
                  </div>

                  {create == true ?
                    <div className="form-group flex flex_button mt-4">
                      <button type="button" className="cancelBtn2 p-1 col-lg-9 w-md-100 w-xs-100 w-sm-100 " onClick={() => canceledit()} >
                        <span className=''>Cancel</span>
                      </button>
                    </div> : null}
                  <div className="form-group flex flex_button ">

                    {create == false ?
                      <button type="submit" className="btn btns btn_update col-lg-9 w-md-100 w-xs-100 w-sm-100 " >
                        <span className='colorss'>Add</span>
                      </button> : null}

                    {create == true ?
                      <button type="submit" className="btn btns btn_update col-lg-9 w-md-100 w-xs-100 w-sm-100 " >
                        <span className='colorss'>Save</span>
                      </button> : null}
                  </div>
                </div>
              </form> : null}





            {/* {createAdmin == false ?
            <UpdateAdminAccount editdata={editdata}></UpdateAdminAccount>
              : null} */}


          </div>
        </div>
      </div >
      <div>
        {authStat_createUser.data.responseCode != undefined && authStat_createUser.data.responseCode == 201 && (<small className="invalid-feedback" style={{ marginTop: "20px" }}>
          The entered Email Id has already registered</small>)}
      </div>
    </div >
  )
}


const mapStateToProps = (state) => {
  return {
    createAdminUserData: state.createAdminUserData,
    updateAdminUserData: state.updateAdminUserData,
    getActiveAdminData: state.getActiveAdminData,
    deleteUserData: state.deleteUserData,

  }
}
export default connect(mapStateToProps, {})(CreateEdit_adminAccount)