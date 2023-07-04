import React, { useState } from "react"
import '../@core/scss/base/adminDashboard/adminmenu/adminprofile.css'
import logout from '../assets/images/dashboardimg/logout.png'
import user from '../assets/images/dashboardimg/1.png'
import password from '../assets/images/dashboardimg/lock.png'
import { useForm } from 'react-hook-form'
import email from '../assets/images/dashboardimg/sms.png'
import { yupResolver } from '@hookform/resolvers/yup'
import eye from '../assets/images/dashboardimg/Show.png'
import eyeslash from '../assets/images/dashboardimg/eyeslashs.png'
import * as Yup from 'yup'
import dot from '../assets/images/dashboardimg/Ellipse11.png'
import Ex from '../../src/@core/layouts/components/navbar/navdialog.js'
import ExLogpopup from "../../src/@core/layouts/components/navbar/navdialog.js"
const UserSettings = () => {
    const [val, settoggle] = useState(true)
    const [show, setShow] = useState(true)
    const [data, setData] = useState(false);
    const handleClick = (e) => {
      if(data===false && e===true){
        setData(true)
       
      }else{
        setData(false)
      }
      
    };
    const validschema = Yup.object().shape({
   
   
        fullname: Yup.string().trim().required('Full Name is required'),
       
        email: Yup.string()
          .required('Email is required')
          .matches('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$', 'Email is invalid'),
        password: Yup.string()
          .required('Password is required')
          .min(8, "Must Contain At Least Eight Characters in Length")

          .matches((/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/), "Must Contain At Least One Number, One Special Symbol, One Uppercase, and One Lowercase"),
         confirmPassword: Yup.string()
          .required('Confirm Password is required')
         
          .oneOf([Yup.ref('password'), null], 'Confirm Password does not match')
         
          
      })
      const {
        register,
        handleSubmit,
       
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validschema)
      })
      const onSubmit = (data) => {
        console.log(data)
        console.log(JSON.stringify(data, null, 2))
        
      }
    return (
        <React.Fragment>
<div className="d-flex justify-content-between align-items-center">
<span className="header_name  mx-1">My Admin User Settings</span>
<button className="text-center btn-update mx-1"  onClick={() => handleClick (true)}><div className="col-12"><ExLogpopup  parentToChild={handleClick} child={data}/></div>
</button>
</div>
<form onSubmit={handleSubmit(onSubmit)}>
<div className="mt-1 card p-2 pt-3 cardbar mx-1 mb-1" >
  <div className="container">
  <div className="row mb-3">
  <div className="col-6">
  <div className="form-group">
        <img src={user} height="20px" width="20px"></img> <label className="name_update">Full Name</label> 
          <input 
            name="fullname"
            type="text"
            placeholder='Enter full name'
            {...register('fullname')}
            className={`formControl text_field ${errors.fullname ? 'is-invalid' : ''}`}
          /> 
               <div className="invalid-feedback">{errors.fullname?.message}</div>
    </div>
  </div>
  <div className="col-6">
  <div className="form-group">
        <img src={email} height="20px" width="20px"></img> <label className="name_update">Email</label>
       
          <input
            name="email"
            type="text"
            placeholder='Enter email'
            {...register('email')}
            className={`formControl text_field ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
  </div>
  </div>
<div className="row">
<div className="col-6">
<div className="form-group">
        <img src={password} height="20px" width="20px"></img>
          <label className="name_update">Password</label>
          <div className={`d-flex flexs  ${
              errors.password ? 'is-invalid' : ''
            }`}  >
          <input
            name="password"
            type={ val === true ? "password" : "text" }
            placeholder='Enter password'
            {...register('password')}
            className={`forms text_field ${
              errors.password ? '' : ''
            }`} 
          />
         <img  width="22px;" height="22px" className="marginuser"  onClick={() => settoggle((v) => !v)}
           src={val === true ? eye : eyeslash} ></img> 
           </div>
          <div className="invalid-feedback ">{errors.password?.message}</div>
        </div>
</div>
<div className="col-6">
<div className="form-group">
        <img src={password}  height="20px" width="20px"></img>
          <label   className="name_update">Confirm Password</label>
          <div  className={`d-flex flexs  ${
              errors.confirmPassword ? 'is-invalid' : ''
            }`}   >
          <input className={`forms text_field  ${
              errors.confirmPassword ? '' : ''
            }`} 
            name="confirmPassword"
            type={ show === true ? "password" : "text" }
            placeholder='Re-enter password'
            {...register('confirmPassword')}
           
            
          />
           <img  onClick={() => setShow((s) => !s)}
           src={show === true ? eye : eyeslash} width="22px;" height="22px;" className="marginuser"></img> 
           </div >
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>


</div>



</div>

<div className="row">
  <div className="col-6">
  <div className='d-flex flex-row align-items-center'>
  <img src={dot} width="7px" height="7px" className='me-1 '></img>&nbsp;&nbsp;
         <span className="placeholder_profile">Must Contain At Least Eight Characters in Length</span>
          </div>
          <div className='d-flex flex-row align-items-center mt-1'>
          <img src={dot} width="7px" height="7px" className='me-1 '></img>&nbsp;&nbsp;
         <span className="placeholder_profile">Must Contain At Least One Number, One Special Symbol, One Uppercase, and One Lowercase Letter</span>
          </div>
    
  </div>
</div>

<div className="d-flex justify-content-center mt-4 mb-4">
          <button type="submit" className="btn_update user_detail" >Update</button>
         </div>



         </div>

  </div>


  </form>







          </React.Fragment>
     
    )
}


export default UserSettings