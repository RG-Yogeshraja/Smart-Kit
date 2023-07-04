import React from "react"
import adminlogo from '../../assets/images/dashboardimg/test.png'
import adminslogan from '../../assets/images/dashboardimg/slogan.png'
import '@styles/react/pages/page-authentication.scss'
import '@styles/react/pages/adminpasswordreset4.scss';
import resets6 from '../../assets/images/dashboardimg/pwdreset6.png';
import { useNavigate } from "react-router-dom";



const Success_mobile = () => {

  const navigate = useNavigate()



  return (
    <div className='row' >
      <div className='col-lg-6 d-none d-lg-flex backgroundstyles d-flex flex-column justify-content-center align-items-center'>
        <img src={adminlogo} width="522px" height="278px" className='positionset'></img>
        <img src={adminslogan} width="649px" height="78px" ></img>
      </div>
      <div className='col-lg-6  d-flex justify-content-center   login'>
        <div className="card cardbar p-3 d-flex flex-column w-100 mx-2">
          <div className="d-flex justify-content-center align-items-center">
            <div className="mb-5">
              <img src={resets6} width="201px" height="187px"></img>

            </div>
          </div>

          <span className="fontstyles3 mb-5">Your Password Has Been Reset Successfully!</span>


          {/* <div className="form-group flex flex_button mb-3 ">
          <button type="submit"  onClick={() => navigate("/adminlogin")} className="btn btns btns btn_update11  col-7 " >
            <span className='colorss'>Back to Log In</span>
         
          </button>
          

          </div> */}







        </div>
      </div>
    </div>
  )
}
export default Success_mobile