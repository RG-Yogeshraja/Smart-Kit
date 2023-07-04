import React, { useState, useEffect } from "react"
import adminlogo from '../../assets/images/dashboardimg/test.png'
import adminslogan from '../../assets/images/dashboardimg/slogan.png'
import '@styles/react/pages/page-authentication.scss'
import '@styles/react/pages/adminpasswordreset1.scss'
import resets1 from '../../assets/images/dashboardimg/pwdreset1.png'
import pwdemail from '../../assets/images/dashboardimg/sms.png'
import { useForm } from 'react-hook-form'
import { AbilityContext } from '@src/utility/context/Can'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom"
import { adminforgot_APIcall } from "./slice"
import { connect, useDispatch, useSelector } from 'react-redux'
import Loaders from "../../enableloader"
const Reset = () => {
  const dispatch = useDispatch()
  const [errorval, seterror] = useState('')
  const [started, setstart] = useState(false)
  const [submitted, issubmitted] = useState(false)
  const val = event => {
    seterror('')

    console.log(event.target.value)
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .matches('[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$', 'Email is invalid')
  })

  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted }
  } = useForm({
    resolver: yupResolver(validationSchema)

  })


  const authStat = useSelector((state) => state.adminForgotData)

  useEffect(() => {

    if (authStat != undefined && authStat != "") {

      const { forgotvalue } = authStat
      console.log("data", forgotvalue)
      const { responseBody } = forgotvalue
      console.log("login responseBody", responseBody)
      console.log("auth respomse success")
      
      if (authStat.forgotvalue.responseCode === 200) {
         

        navigate("/reset1")
        setstart(false)
      } else if (authStat.forgotvalue.responseCode === 201) {

        seterror('The email is not registered with Hint Social')
        setstart(false)
      } else {
        setstart(false)
      }

    }


  }, [authStat.forgotvalue.responseCode])
  const onSubmit = (data) => {

    setstart(true)
    console.log(errors, isSubmitted)
    issubmitted(true)
    console.log(data)
    const payload = {
      email_address: data.email

    }

    dispatch(adminforgot_APIcall(payload))

  }
  return (
    <div>
      <div style={{ display: started !== false ? '' : 'none' }}>
        <Loaders></Loaders>
      </div>

      <div className='row' >

        <div className='col-lg-6 d-none d-lg-flex backgroundstyles d-flex flex-column justify-content-center align-items-center'>
          <img src={adminlogo} width="522px" height="278px" className='positionset'></img>
          <img src={adminslogan} width="649px" height="78px" ></img>
        </div>
        <div className='col-lg-6 d-flex justify-content-center  login'>
          <div className="card cardbar p-3 d-flex flex-column w-100 mb-0 mx-2">
            <div className="d-flex justify-content-center align-items-center">
              <div className="mb-2">
                <img src={resets1} width="132px" height="122px"></img>

              </div>
            </div>

            <span className="fontstyles3 mb-1">Password Reset</span>
            <div className="mb-3 text-center">
              <span className="fontstyles1">Enter the email associated with your account to receive an email to reset your password.</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="form-group">
                <img src={pwdemail} height="20px" width="20px"></img> <label className='smallheader'>Email</label>

                <input
                  name="email"
                  type="text"
                  placeholder='Enter email'
                  {...register('email')}
                  className={`formControl text_field ${errors.email ? 'is-invalid' : ''}`}
                  onKeyDown={val}

                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="form-group flex flex_button mt-2 ">
                <button type="submit" className="btn btns btns btn_update12  col-7" >

                  <span className='colorss'>Send</span>

                </button>
                <div className="d-flex justify-content-center mt-1">
                  <span className="text-danger" style={{ display: errors.email ? 'none' : '' }}>{errorval}</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log("*****", state)
  return {
    state
  }
}
export default connect(mapStateToProps, {})(Reset)