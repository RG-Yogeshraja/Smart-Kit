
import adminlogo from '../../assets/images/dashboardimg/test.png'
import adminslogan from '../../assets/images/dashboardimg/slogan.png'
import '@styles/react/pages/page-authentication.scss'
import '@styles/react/pages/adminpasswordreset3.scss'
import resets4 from '../../assets/images/dashboardimg/pwdreset4.png'
import adminpassword from '../../assets/images/dashboardimg/lock.png'
import eye from '../../assets/images/dashboardimg/Show.png'
import eyeslash from '../../assets/images/dashboardimg/eyeslashs.png'
// import pwdemail from '../assets/images/dashboardimg/sms.png';
import { useForm } from 'react-hook-form'
import dot from '../../assets/images/dashboardimg/Ellipse11.png'
import { AbilityContext } from '@src/utility/context/Can'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import React, { useState,useEffect, } from "react"
import { connect, useDispatch, useSelector } from 'react-redux'
// import points from '../assets/images/dashboardimg/point.png'
import { useNavigate, useLocation} from "react-router-dom"
import {resetpassword_APIcall} from './resetpasswordslice'
import Loaders from "../../enableloader"
const Resets = () => {
  const [started,setstart] = useState(false)

    const validationSchema = Yup.object().shape({
      password: Yup.string()
          .required('Password is required')
          .min(8, "Must Contain At Least Eight Characters in Length")

          .matches((/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/), "Must Contain At Least One Number, One Special Symbol, One Uppercase, and One Lowercase"),
         confirmPassword: Yup.string()
          .required('Confirm Password is required')
         
          .oneOf([Yup.ref('password'), null], 'Confirm Password does not match')
    })


    const [val, settoggle] = useState(true)
    const [show, setShow] = useState(true)
    const [errorss,seterror] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitted }
      } = useForm({
        resolver: yupResolver(validationSchema)
        
      })

const router = window.location.href.split('?')
const rest = router[1].split('key=')
const res = rest[1].split('&id')
console.log(res)
const authStat = useSelector((state) => state.resetData)
console.log("sdddddddddddddddddddd", authStat)

useEffect(() => {
  
  if (authStat != undefined && authStat != "") {

    const { resetpassword } = authStat
    console.log("data", resetpassword)
    const { responseBody } = resetpassword
    console.log("login responseBody", responseBody)
    console.log("auth respomse success")
    if (authStat.resetpassword.responseCode === 200) {
      setstart(false)
      // navigate("/reseting") 
      navigate("/resetConfirmation") 

      
      
    } else if (authStat.resetpassword.responseCode === 201) {
      setstart(false)
      seterror('invalid')
      
    }

  }


}, [authStat])
      const onSubmit = (data) => {
        setstart(true)
        
        console.log(data)
        const payload = {
          "new_password": data.password,
           "reset_key": res[0],
         
        }
        dispatch(resetpassword_APIcall(payload))
      
      }
    return (
      <div>
      <div style={{display:started !== false ? '' : 'none'}}>
      <Loaders></Loaders>
      </div>
        <div className='row' >
<div className='col-lg-6 d-none d-lg-flex backgroundstyles d-flex flex-column justify-content-center align-items-center'>
<img src={adminlogo} width="522px" height="278px" className='positionset'></img>
  <img src={adminslogan} width="649px" height="78px" ></img>
</div>
<div className='col-lg-6 d-flex justify-content-center login'>
  <div className="card cardbar p-3 d-flex flex-column w-100 mx-2">
    <div className="d-flex justify-content-center align-items-center">
        <div className="">
        <img src={resets4} width="50px" height="50px"></img>

        </div>
        </div>
        
        <span className="fontstyles3 mb-1">Password Reset</span>
        
        <span className="fontstyles1 mb-1 text-center">Enter a new password and confirm password.</span>
        <form onSubmit={handleSubmit(onSubmit)} >


        <div className="form-group">
        <img src={adminpassword} height="20px" width="20px"></img>
          <label className='smallheader'>Password</label>
          <div  className={`d-flex flexs  ${
              errors.password ? 'is-invalid' : ''
            }`}   >
          <input className={`forms text_field ${
              errors.password ? '' : ''
            }`} 
            
           
            type={ val === true ? "password" : "text" }
            placeholder='Enter password'
            {...register('password')}
           
            
          />
           <img  onClick={() => settoggle((s) => !s)}
           src={val === true ? eye : eyeslash} width="22px;" height="22px" className="marginuser"></img> 
           </div >
          <div className="invalid-feedback">
            {errors.password?.message}
          </div>
        </div>


        <div className="form-group mb-0">
        <img src={adminpassword} height="20px" width="20px"></img>
          <label  className='extraalignment'>Confirm Password</label>
         
          <div  className={`d-flex flexs  ${
              errors.confirmPassword ? 'is-invalid' : ''
            }`}   >
          <input className={`forms  ${
              errors.confirmPassword ? '' : ''
            }`} 
            name="confirmPassword" style={{fontSize:"16px", fontWeight:"500"}}
            type={ show === true ? "password" : "text" }
            placeholder='Re-enter password'
            {...register('confirmPassword')}
           
            
          />
           <img  onClick={() => setShow((s) => !s)}
           src={show === true ? eye : eyeslash} width="22px" height="22px" className="marginuser"></img> 
           </div >
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>  
        
        </div>

        
        <div className='mt-1 d-flex flex-row align-items-center '>
          <img src={dot} width="7px" height="7px" className='me-1'></img><span className='fontstyles'>Must Be At Least Eight Characters In Length</span>
          </div>
          <div className='mt-1 d-flex flex-row align-items-center'>
          <img src={dot} width="7px" height="7px" className='me-1'></img><span className='fontstyles'>Must Contain At Least One Number</span>
          </div>
          <div className='mt-1 d-flex flex-row align-items-center'>
          <img src={dot} width="7px" height="7px" className='me-1'></img><span className='fontstyles'>Must Contain At Least One Special Symbol</span>
          </div>
          <div className='mt-1 d-flex flex-row align-items-center'>
          <img src={dot} width="7px" height="7px" className='me-1'></img><span className='fontstyles'>Must Contain At Least One Uppercase Letter and One Lowercase Letter</span>
          </div>


        <div className="flex flex_button mt-4">
          <button type="submit" className="btn  btns btns btn_update15 col-7" >
            <span className='colorss'>Reset</span>
         
          </button>
          
          </div>
          <div className="d-flex justify-content-center mt-1">
<span className="text-danger">{errorss}</span>
          </div>
          </form>

  </div>
</div>
</div></div>
    )
}
const mapStateToProps = (state) => {
  console.log("*****", state)
  return {
    state
  }
}
export default connect(mapStateToProps, {})(Resets)