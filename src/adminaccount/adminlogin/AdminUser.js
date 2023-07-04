// ** React Imports
// import { useSkin } from '@hooks/useSkin'

// import { useState } from 'react'
// ** Illustrations Imports
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getHomeRouteForLoggedInUser } from '@utils'
import { handleLogin } from '@store/authentication'

import adminlogo from '../../assets/images/dashboardimg/test.png'
import React, { useState, useContext, useEffect } from "react"
import adminslogan from '../../assets/images/dashboardimg/slogan.png'
import adminemail from '../../assets/images/dashboardimg/sms.png'
import adminpassword from '../../assets/images/dashboardimg/lock.png'
import eye from '../../assets/images/dashboardimg/Show.png'
import eyeslash from '../../assets/images/dashboardimg/eyeslashs.png'
import { AbilityContext } from '@src/utility/context/Can'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import '@styles/react/pages/page-authentication.scss'
import '@styles/react/pages/adminuser.scss'
import { Link } from 'react-router-dom'
import { adminLogin_APIcall } from './slice'
import Loaders from '../../enableloader'


const AdminUser = (props) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .matches('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$', 'Email is invalid'),
    password: Yup.string()
      .required('Password is required')

  })

  const [val, settoggle] = useState(true)
  const [isChecked, setIsChecked] = useState(false)
  const [loader, setLoader] = useState(false)
  const [loginFailData, setLoginFailData] = useState(false)
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const ability = useContext(AbilityContext)


  const v = [
    {
      action: "manage",
      subject: "all"
    }
  ]
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted }
  } = useForm({
    resolver: yupResolver(validationSchema)

  })

  const handleChange = () => {

    if (isChecked == false) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }

  const onSubmit = (data) => {
    
    // data.role = "admin"
    // const test = { ...data }
    // ability.update(v)
    // navigate(getHomeRouteForLoggedInUser(test.role))
    // dispatch(handleLogin(test))
    // console.log(JSON.stringify(data, null, 2));
    // let login_data = JSON.stringify(data);
    // localStorage.setItem("loginData", login_data);

    setLoader(true)
    // data.is_rememberme_checked = "true"
    // const adminLoggedInData = { ...data }
    const payload = {
      email_address: data.email,
      password: data.password
    }

    if (isChecked == true && localStorage.getItem("is_rememberme")==undefined) {
      localStorage.setItem('is_rememberme', "true");
    }
    else if (isChecked == false && localStorage.getItem("is_rememberme")==undefined) {
      localStorage.setItem('is_rememberme', "false");
    }
    else if (isChecked == false && localStorage.getItem("is_rememberme")=="false") {
      localStorage.setItem('is_rememberme', "false");
    }
    else if (isChecked == true && localStorage.getItem("is_rememberme")=="false") {
      localStorage.setItem('is_rememberme', "true");
    }

    dispatch(adminLogin_APIcall(payload))
  }

  const authStat = useSelector((state) => state.adminLoginData)
  console.log("adminLogin_responseData", authStat)

  useEffect(() => {
    
    console.log(authStat)
    if (authStat.loading == "idle" && localStorage.getItem("is_rememberme") == "false") {
      
      reset()
    }
    else if (authStat.loading == "idle" && localStorage.getItem("is_rememberme") == "true") {
      
      reset()
      setEmail(localStorage.getItem("email"))
    }


    if (authStat != undefined && authStat != "") {
      if (authStat.data.responseCode == 200) {
        const test = {
          role: "admin",
        }
        dispatch(handleLogin(test))
        setLoader(false)
        localStorage.setItem("loggedIn_userId", authStat.data.responseBody.user_id)
        localStorage.setItem("user_name", authStat.data.responseBody.full_name)
        localStorage.setItem("email", authStat.data.responseBody.email_address)
        localStorage.setItem("user_role", authStat.data.responseBody.user_role)
        navigate('/admin/adminAccount')
      }
      else if (authStat.data.responseCode === 201) {
        setLoginFailData(true)
        setLoader(false)
        console.log('failed');
      }
    }
  }, [authStat])

  return (
    <div className='row' >
      <div style={{ display: loader !== false ? '' : 'none' }}>
        <Loaders></Loaders>
      </div>
      <div className='col-lg-6  d-none d-lg-flex backgroundstyles d-flex flex-column justify-content-center align-items-center '>
        <img src={adminlogo} width="522px" height="278px" className='positionset'></img>
        <img src={adminslogan} width="649px" height="78px" ></img>
      </div>
      <div className='col-lg-6  d-flex justify-content-center  login'>
        <div className="card cardbar p-3 d-flex flex-column w-100 mx-2">
          <span className='fontstyle mb-1'>Welcome</span>
          <span className='subcontent mb-2'>Log In to Your Admin Account</span>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="form-group">
              <img src={adminemail} height="20px" width="20px"></img> <label className='smallheader'>Email</label>
              <input
                name="email"
                type="text"
                placeholder='Enter email'
                defaultValue={email}
                {...register('email')}
                className={`formControl text_field ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="form-group">
              <img src={adminpassword} height="20px" width="20px"></img>
              <label className='smallheader'>Password</label>
              <div className={`d-flex flexs  ${errors.password ? 'is-invalid' : ''
                }`}   >
                <input className={`forms text_field ${errors.password ? '' : ''
                  }`}
                  name="password"
                  type={val === true ? "password" : "text"}
                  placeholder='Enter password'
                  {...register('password')}
                />
                <img onClick={() => settoggle((s) => !s)}
                  src={val === true ? eye : eyeslash} width="22px;" height="22px" className="marginuser"></img>
              </div >
              <div className="invalid-feedback">
                {errors.password?.message}
              </div>
            </div>
            <div className="row">
              <div className='col'>
                <input autoComplete="off" type="checkbox" className='checkboxalign' id="remember" checked={isChecked} onChange={handleChange} />
                <label className='smallheader' htmlFor='remember'>Remember Me</label>
              </div>
              <div className='col-6 d-flex justify-content-end'>
                {/* <span className='smallheader text'>Forgot Password</span> */}
                <Link className="smallheader text" to="/ResetPassword">
                  Forgot Password
                </Link>
              </div>
            </div>
            {loginFailData == true ?
              <div className='mt-1 d-flex align-items-center justify-content-center'>
                {/* <span className='login-errorMessage'>You have entered an incorrect email or password</span> */}
                <span className='login-errorMessage'>Credentials are incorrect. Please Contact Hint Social for help logging in.</span>
              </div> : null}

            <div className="form-group flex flex_button  ">
              <button type="submit" className="btn btns btns btn_update col-7 " >
                <span className='colorss'>Log In</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log("*****", state)
  return {
    adminLoginData: state.adminLoginData
  }
}

export default connect(mapStateToProps, {})(AdminUser)