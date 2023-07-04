import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import AdminAccount from './createEdit_adminaccount'
import deletes from '../assets/images/dashboardimg/delete.png'
import deleteuser from '../assets/images/dashboardimg/deleteuser.png'
import { set } from 'react-hook-form'
import { connect, useDispatch, useSelector } from 'react-redux'
import { deleteUserAccount_APIcall } from './slice-deleteUser'
import { getActiveAdminAccount_APIcall } from './slice-active-deleteduserlist'
import Loaders from '../enableloader'
import { useNavigate } from 'react-router-dom'
import { LogIn } from 'react-feather'


function DeleteDialog(props) {
  const [show1, setShow1] = useState(false)
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()
  const authStat_getActiveList = useSelector((state) => state.getActiveAdminData)
  const authStat_deleteUserAccount = useSelector((state) => state.deleteUserData)
  const [isAccountDeleted, setIsAccountDeleted] = useState("1")
  const [deleteData, setDeleteData] = useState()

  const deleteUser = () => {
    setLoader(true)
    const payload = {
      user_id: props.userId
    }
    dispatch(deleteUserAccount_APIcall(payload))
  }

  useEffect(() => {
    if (authStat_deleteUserAccount.data.responseBody != undefined && authStat_deleteUserAccount.data.responseCode == 200) {
      // setDeleteData(authStat_deleteUserAccount.data.responseBody)
      if (localStorage.getItem('loggedIn_userId') != props.userId) {
        // navigate("/adminlogin")
        getCreatedAdminList()
        setShow1(false)
      }
    }
  }, [authStat_deleteUserAccount.data])

  // useEffect(() => {
  //   if (authStat_deleteUserAccount.data.responseCode==200) {
  //     const useridtest = localStorage.getItem('loggedIn_userId')
  //     console.log(useridtest)
  //     if (localStorage.getItem('loggedIn_userId') == props.userId) {
  //       
  //       localStorage.removeItem("loggedIn_userId")
  //       localStorage.setItem("user_name", '')
  //       localStorage.setItem("email", '')
  //       localStorage.setItem("user_role", '')
  //       navigate("/adminlogin")
  //     }
  //     // if (localStorage.getItem('loggedIn_userId') != "") {
  //     //   if (localStorage.getItem('loggedIn_userId') != props.userId) {
  //     //     const useriidd = localStorage.getItem('loggedIn_userId')
  //     //     console.log(useriidd)
  //     //     getCreatedAdminList()
  //     //   }
  //     // }
  //     setShow1(false)
  //   }
  // }, [deleteData])

  const getCreatedAdminList = () => {
    const userId = localStorage.getItem('loggedIn_userId')
    const payload = {
      user_id: userId
    }
    dispatch(getActiveAdminAccount_APIcall(payload))
  }



  return (
    <>
      <img className="mt-lg-4 mt-md-0 mt-sm-0 mt-xs-0" src={deletes} style={{ cursor: 'pointer' }} onClick={() => setShow1(true)} height="53px" width="53px" id="ptop" ></img>
      <Modal className='dispflex' show={show1} centered backdrop="static" keyboard={false}>
        <Modal.Body >
          <div style={{ display: loader !== false ? '' : 'none' }}>
            <Loaders></Loaders>
          </div>
          <div className='col-12 d-flex justify-content-center'>
            <img className="mt-4 mb-2 ml-2 mr-2" src={deleteuser} width="107px" height="107px"></img>
          </div>
          <div className='col-12 d-flex justify-content-center bodypopup'>Are you sure you want to delete</div>
          <div className='col-12 d-flex justify-content-center bodypopuptwo1 mt-1'> User data will remain on admin application.</div>
          <div className='col-12 d-flex justify-content-center mt-3 mb-4'>
            <button className='btnstyles' onClick={deleteUser}>Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btnstyledetails' onClick={() => setShow1(false)}>No</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    deleteUserData: state.deleteUserData,
  }
}
export default connect(mapStateToProps, {})(DeleteDialog)