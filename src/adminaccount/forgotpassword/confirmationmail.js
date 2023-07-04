import React   from "react"
import adminlogo from '../../assets/images/dashboardimg/test.png'
import adminslogan from '../../assets/images/dashboardimg/slogan.png'
import '@styles/react/pages/page-authentication.scss'
import '@styles/react/pages/adminpasswordreset2.scss'
import resets3 from '../../assets/images/dashboardimg/pwdreset3.png'
import pwdemail from '../../assets/images/dashboardimg/sms.png'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


const Reset1 = () => {

  const navigate = useNavigate()
    
    return (
        <div className='row' >
<div className='col-lg-6 d-none d-lg-flex backgroundstyles d-flex flex-column justify-content-center align-items-center'>
<img src={adminlogo} width="522px" height="278px" className='positionset'></img>
  <img src={adminslogan} width="649px" height="78px" ></img>
</div>

<div className="col-lg-6 d-flex justify-content-center  ">
<div className='login'>
  <div className="text-center mt-0">
  <div className="card cardbar  p-3 d-flex flex-column w-100 mx-auto mb-4">
    <div className="d-flex justify-content-center align-items-center">
        <div className="mb-2">
        <img src={resets3} width="201px" height="187px"></img>

        </div>
        </div>

         <span className="fontstyles3 mb-2">Email Has Been Sent!</span>
         <span className="fontstyles1 mb-4 text-center">If there is an account associated with the email entered, you will receive an email with instructions to reset your password.</span>
        
         <div className="form-group flex flex_button ">
          <a onClick={() => navigate('/adminlogin')} type="submit" className="btn btns btns btn_update13 col-7 " >
            <span className='colorss'>Return to Log In</span>
         
          </a>
          

          </div>


  </div>
 
 
  </div>
</div>


</div>
</div>
    )
}
export default Reset1