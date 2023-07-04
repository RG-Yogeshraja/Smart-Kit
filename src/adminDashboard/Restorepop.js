import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import AdminAccount from './createEdit_adminaccount'
import deletes from '../assets/images/dashboardimg/delete.png'
import restoreuser from '../assets/images/dashboardimg/user-restore.png'
import { set } from 'react-hook-form'
import { connect, useDispatch, useSelector } from 'react-redux'
import { restoreDeletedUserAccount_APIcall } from './slice-restoreDeletedAccount'
import Loaders from '../enableloader'
import { getDeletedUserAccount_APIcall } from './slice-getDeletedUser'


function RestoreExample(props) {

  const [show1, setShow1] = useState(false)
  const [loader, setLoader] = useState(false)
  const dispatch = useDispatch()
  const authStat_getDeletedAccountList = useSelector((state) => state.getDeletedUserAccountData)
  const authStat_restoreUserAccount = useSelector((state) => state.restoreUserAccountData)

  //restore api call start
  const restoreDeletedUser = () => {
    setLoader(true)
    const payload = {
      user_id: props.userId
    }
    dispatch(restoreDeletedUserAccount_APIcall(payload))
    console.log("restoreUserAccount_responseData", authStat_restoreUserAccount)
  }

  useEffect(() => {
    if (authStat_restoreUserAccount.data.responseBody != undefined) {
      if (authStat_restoreUserAccount.data.responseCode == 200) {
        getDeletedAdminAccountList()
        setShow1(false)
        console.log(authStat_restoreUserAccount)
        console.log('restore deleted account successfully')
        setLoader(false)
      }
    }
  }, [authStat_restoreUserAccount.data.responseBody])
  //restore api call ends

  // get deleted admin account list- api call start
  const getDeletedAdminAccountList = () => {
    const payload = {
      user_id: localStorage.getItem("loggedIn_userId")
    }
    dispatch(getDeletedUserAccount_APIcall(payload))
    console.log("deletedUserAccountList_responseData", authStat_getDeletedAccountList)
  }

  useEffect(() => {
    
    if (authStat_getDeletedAccountList.data.responseBody != undefined) {
      if (authStat_getDeletedAccountList.data.responseCode == 200) {
        setLoader(false)
        console.log('deleted user account retrived success')
      }
    }
  }, [authStat_getDeletedAccountList])
  // get deleted admin account list- api call ends


  return (
    <>
      <button className='btn btns borderdesignss mt-2' onClick={() => setShow1(true)}>Restore </button>
      {/* <UncontrolledTooltip placement='top' target={props.data === 'Michelle Johnson' ? '' : 'positionTop'}>
        Tooltip on Top
      </UncontrolledTooltip> */}
      <Modal className='dispflex' show={show1} centered backdrop="static" keyboard={false}>
        <Modal.Body >
          <div style={{ display: loader !== false ? '' : 'none' }}>
            <Loaders></Loaders>
          </div>
          <div className='col-12 d-flex justify-content-center'>
            <img className="mt-4 mb-2 ml-2 mr-2" src={restoreuser} width="107px" height="107px"></img>
          </div>
          <div className='col-12 d-flex justify-content-center align-items-center bodypopup'>Are you sure you want to restore this account?</div>
          {/* <div className='col-12 d-flex justify-content-center bodypopuptwo1 mt-1'> User data will remain on admin application.</div> */}
          <div className='col-12 d-flex justify-content-center mt-3 mb-4'>
            <button className='btnstyles ' onClick={restoreDeletedUser}>Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btnstyledetails' onClick={() => setShow1(false)}>No</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    restoreUserAccountData: state.restoreUserAccountData,
    getDeletedUserAccountData: state.getDeletedUserAccountData,
  }
}
export default connect(mapStateToProps, {})(RestoreExample)

