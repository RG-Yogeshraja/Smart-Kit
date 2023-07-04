import React from "react"
import adminlogo from '../../assets/images/dashboardimg/test.png'
import adminslogan from '../../assets/images/dashboardimg/slogan.png'
import '@styles/react/pages/page-authentication.scss'
import '@styles/react/pages/adminpasswordreset5.scss'
import resets5 from '../../assets/images/dashboardimg/pwdreset5.png'
import boxfield from '../../assets/images/dashboardimg/fieldbox.png'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { number } from "yup"


const  Reseting = () => {
const [num, setnum] = useState()
const [num1, setnum1] = useState()
const [num2, setnum2] = useState()
const [num3, setnum3] = useState()
const [num4, setnum4] = useState()
const [num5, setnum5] = useState()
const [errors, seterrors] = useState()
  const navigate = useNavigate()
 
//   const validationSchema = Yup.object().shape({
//     num1: Yup.string()
//     .required('')
//     .matches('')
// })
  const onSubmit = (data) => {
    
    console.log(data)

  }
  const handleChange1 = (e) => {
    
    const value = e.target.value.replace(/[^0-9+]/gi, "")
    setnum(value)
  }
  const handleChange2 = (e) => {
    
    const value = e.target.value.replace(/[^0-9+]/gi, "")
    setnum1(value)
  }
  const handleChange3 = (e) => {
    
    const value = e.target.value.replace(/[^0-9+]/gi, "")
    setnum2(value)
  }
  const handleChange4 = (e) => {
    
    const value = e.target.value.replace(/[^0-9+]/gi, "")
    setnum3(value)
  }
  const handleChange5 = (e) => {
    
    const value = e.target.value.replace(/[^0-9+]/gi, "")
    setnum4(value)
  }
  const handleChange6 = (e) => {
    
    const value = e.target.value.replace(/[^0-9+]/gi, "")
    setnum5(value)
  }
  
 const navigatetoother = () => {
  console.log("sdddddddddddddddddddd", num, num1, num2, num3, num4, num5)
  
  if ((num === '' || num === undefined) || (num1 === '' || num1 === undefined) || (num2 === '' || num2 === undefined) || (num3 === '' || num3 === undefined) || (num4 === '' || num4 === undefined) || (num5 === '' || num5 === undefined))  {
    seterrors('code is invalid. please try again!')
  } else {
    seterrors('')
    navigate("/lastreset")
  }
  }
    return (
        <div className='row' >
        <div className='col-lg-6 d-none d-lg-flex backgroundstyles d-flex flex-column justify-content-center align-items-center'>
        <img src={adminlogo} width="522px" height="278px" className='positionset'></img>
          <img src={adminslogan} width="649px" height="78px" ></img>
        </div>
        <div className="col-lg-6 d-flex justify-content-center  ">
        
<div className='login'>
  <div className="text-center mt-0">
          <div className="card cardbar p-3 d-flex flex-column w-100 mx-auto mb-2">
            <div className="d-flex justify-content-center align-items-center">
                <div className="mb-3">
                <img src={resets5} width="132px" height="122px"></img>
        
                </div>
                </div>

        
                 <span className="fontstyles3 mb-2">Enter the code that was sent to the mobile number associated with your account</span>
                 <span className="fontstyles1 mb-3 text-center">Code expires in 10 minutes</span>


                 <div className="d-flex justify-content-center align-items-center box-width mb-3">
                  
                    <input className="form-control"  type="tel" maxLength="1" value={num} onChange={handleChange1}></input>&nbsp;&nbsp;&nbsp;
                    <input className="form-control"  type="tel" maxLength="1" value={num1} onChange={handleChange2}  ></input>&nbsp;&nbsp;&nbsp;
                    <input className="form-control" type="tel" maxLength="1" value={num2} onChange={handleChange3} ></input>&nbsp;&nbsp;&nbsp;
                    <input className="form-control" type="tel" maxLength="1" value={num3} onChange={handleChange4}  ></input>&nbsp;&nbsp;&nbsp;
                    <input className="form-control" type="tel" maxLength="1" value={num4} onChange={handleChange5}   ></input>&nbsp;&nbsp;&nbsp;
                    <input className="form-control" type="tel" maxLength="1" value={num5} onChange={handleChange6}></input>&nbsp;&nbsp;&nbsp;
                    

                    {/* <img src={boxfield} width="42px" height="42px"></img>&nbsp;&nbsp;&nbsp;
                    <img src={boxfield} width="42px" height="42px"></img>&nbsp;&nbsp;&nbsp;
                    <img src={boxfield} width="42px" height="42px"></img>&nbsp;&nbsp;&nbsp;
                    <img src={boxfield} width="42px" height="42px"></img>&nbsp;&nbsp;&nbsp;
                    <img src={boxfield} width="42px" height="42px"></img>&nbsp;&nbsp;&nbsp;
                    <img src={boxfield} width="42px" height="42px"></img>&nbsp;&nbsp;&nbsp; */}
                </div>

                <div className="d-flex justify-content-center mb-1">
<span className="text-danger">{errors}</span>
                </div>
                 <div className=" flex flex_button mb-1">
                  <button type="button" onClick={navigatetoother} className="btn btns btns btn_update14 col-6 " >
                    <span className='colorss'>Proceed</span>
                 
                  </button>
                  
        
                  </div>
        
        
          </div>
          <span className="returns ">Resend Code</span>   
          </div>
               </div>

        </div>
       
       
        </div>
    )
}

export default Reseting