import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import '../../../scss/base/userSetting/UserSettings.scss'
import logout from '../../../../assets/images/dashboardimg/logoutdetail.png'
import { useNavigate } from "react-router-dom"
import logoutss from '../../../../assets/images/dashboardimg/logout.png'
import { forwardRef, useRef, useImperativeHandle } from "react"
import { useLocation } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { clearLogin } from '../../../../adminaccount/adminlogin/slice'

const ExLogpopup = (props) => {
  const { pathname } = useLocation()

  console.log()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [ignore, setIgnore] = useState(false)
  const [deletes, setdeletes] = useState(props.parentToChild)
  if (props.child == true && show === false) {
    
    setShow(true)
  }


  const navigate = useNavigate()
  const handleClose = (event) => {

    setShow(false)
    setdeletes(false)

    event.preventDefault()
    return props.parentToChild(false)
  }
  const handleShow = (event) => {


    setShow(true)
  }

  useEffect(() => {
    console.log('tessst')
    if (props.parentToChild === true && ignore === false) {
      setShow(props.parentToChild)
      setIgnore(true)
    }
  }, [])

  const logoutUser = () => {
    
    dispatch(clearLogin())
    // if (localStorage.getItem("is_rememberme") != undefined) {
    //   navigate('/adminlogin');
    // }
    navigate("/adminlogin")
    // localStorage.removeItem("")
  }

  // useEffect(() => {
  //   dispatch(logOut());
  //   dispatch(clearRegisterData());
  //   if (localStorage.getItem("is_rememberme") != undefined) {
  //     navigate('/dashboard');
  //   }
  // }, []);


  return (
    <>
      <div onClick={() => handleShow('yno')}>
        <div className='usersettings' >
          <img src={logoutss} width="27px" height="27px"></img>&nbsp;&nbsp;
          <span style={{ fontWeight: pathname === "/user/userSettings" ? '700' : '500' }}>Profile</span>
        </div>
        <div className='usersettings mt-1' >
          <img src={logoutss} width="27px" height="27px"></img>&nbsp;&nbsp;
          <span style={{ fontWeight: pathname === "/user/userSettings" ? '700' : '500' }}>Settings</span>
        </div>

      </div>

      <Modal className='dispflex'
        show={show} centered
        backdrop="static"
        keyboard={false}
      >

        <Modal.Body >
          <div className='col-12 d-flex justify-content-center'>
            <img className="mt-5 mb-3 ml-2 mr-2 colors" width="75px;" src={logout}></img>
          </div>
          <div className='col-12 d-flex justify-content-center bodypopup '>Are you sure you want to log out?</div>

          <div className='col-12 d-flex justify-content-center mt-5 mb-4'>
            <button className='btnstyle' logoutConfirm={confirm} onClick={()=>logoutUser()}>Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btnstyledetail' onClick={() => handleClose(event)} >No</button>
          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}
export default ExLogpopup
