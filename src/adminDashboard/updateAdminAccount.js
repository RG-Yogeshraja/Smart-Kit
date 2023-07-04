

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



const UpdateAdminAccount = (props) => {

    // console.log(props)
    const [logintype, set_logintype] = useState('')
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(false)
    const [adminAccountLists, setAdminAccountLists] = useState([])
    const [emailRegError, setEmailRegError] = useState(false)
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
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
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




    const canceledit = () => {
        
        setcreate(false)
        setSelected([0])
        setFullname('')
        setemail('')
        setNumber('')
        setpassword('')
        setconfirmPassword('')
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
        setSelected([obj.user_role])
        setpassword('')
        setconfirmPassword('')
        console.log(fullname)
        console.log(selected)
    }


    // const deleted = () => {
    //   setSelected('')
    //   setFullname('')
    //   setemail('')
    //   setmobile('')
    //   setpassword('')
    //   setconfirmPassword('')
    //   setcreate(false)
    // }

    //1 create/update admin api call
    const onSubmit = (data) => {
        
        console.log(data)
        // if (userData_forEdit == "" || userData_forEdit == undefined) {
        setLoader(true)
        if (data.options == "1" || data.options == "2") {
            const payload = {
                account_type: data.options,
                full_name: data.fullname,
                email_address: data.email,
                mobile_number: data.mnumber,
                password: data.password,
            }
            console.log(payload)
            // reset()
            // dispatch(createAdminUser_APIcall(payload))
        }
        // }
        // else if (userData_forEdit != "" || userData_forEdit != undefined) {
        //   
        setLoader(true)
        const payload = {
            user_id: userData_forEdit.user_id,
            account_type: selected[0],
            full_name: data.fullname,
            password: ""
        }
        
        dispatch(updateAdminUser_APIcall(payload))
    }
    // }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="" style={{ marginTop: "18px" }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <img src={username} height="20px" width="20px"></img>
                            <label className='extraalignment'> Account Type</label>
                            <select name="options" defaultValue={selected} className={`formControl`}
                                {...register("options", { required: "Account type is required" })}
                                value={selected}
                                onChange={e => setSelected(e.target.value)}>
                                <option value="">Select...</option>
                                <option value="1">Super Admin</option>
                                <option value="2"> Admin</option>
                            </select>
                            {errors.options && (<small className="text-danger">{errors.options.message}</small>)}
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-control-label">Full Name</label>
                            <input autoComplete="off" type="text" defaultValue={fullname} placeholder="First Name"
                                onChange={e => setFullname(e.target.value)}
                                className={`formControl`} {...register("fullname", {
                                    required: "Full Name is required",
                                    pattern: {
                                        value: /^\S[a-zA-Z'-_()0-9\s!@#$%^&*]*$/,
                                        message: "Please enter the valid Full Name"
                                    },
                                    minLength: { value: 3, message: "First Name must be 3 characters", }, maxLength: 16
                                })} />
                            {errors.fullname && (<small className="text-danger">{errors.fullname.message}</small>)}
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-control-label">
                                Email
                            </label>
                            <input autoComplete="off" type="email" defaultValue={email} placeholder="Email Address"
                                className={`formControl`}
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
                            <label className="form-control-label">
                                Mobile Number
                            </label>
                            <input autoComplete="off" type="number" defaultValue={mobileno1} placeholder="Mobile Number" className={`formControl`}{...register("mnumber", { required: "Mobile Number is required", pattern: { value: /([1-9][0-9]*)|0/, message: "Please enter the valid Mobile Number", } })} />
                            {errors.mnumber && (<small className="text-danger">{errors.mnumber.message}</small>)} </div>
                    </div>

                    <div>
                        <div className="col-md-12 pwd-container1">
                            <div className="form-group">
                                <label className="form-control-label">Password</label> &nbsp;
                                <input autoComplete="off" className={`formControl`} placeholder='Password' name="pwd" type={show === true ? "password" : "text"}
                                    {...register("password", {
                                        optional: "",
                                        pattern: {
                                            value: /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/,
                                            message: "Space should not be accept",
                                        },
                                    })} />

                                {errors.password && (<small className="text-danger">{errors.password.message}</small>)}
                                <img height="20px" width="20px" style={{ position: "absolute", right: "45px", bottom: "300px" }} onClick={() => setShow((s) => !s)} src={show === true ? eye : eyeslash} />
                            </div>
                        </div>
                        <div className="col-md-12 pwd-container1">
                            <div className="form-group">
                                <label className="form-control-label">
                                    Confirm Password
                                </label>
                                <input autoComplete="off" className={`formControl`} placeholder='Confirm Password' name="pwd" type={shown === true ? "password" : "text"} {...register("cpassword",
                                    {
                                        optional: "",
                                        validate: (val) => {
                                            if (watch('password') != val) {
                                                return "Your Passwords do not  match";
                                            }
                                        }
                                    }
                                )} />
                                {errors.cpassword && (<small className="text-danger">{errors.cpassword.message}</small>)}
                                <img height="20px" width="20px" style={{ position: "absolute", right: "45px", bottom: "193px" }} onClick={() => setShown((s) => !s)} src={shown === true ? eye : eyeslash} />
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
            </form>
        </>
    )


}


export default UpdateAdminAccount
