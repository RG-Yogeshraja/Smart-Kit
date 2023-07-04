import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import users from '../assets/images/dashboardimg/userprofiles.png'
import deletes from '../assets/images/dashboardimg/delete.png'
import deleteuser from '../assets/images/dashboardimg/deleteuser.png'
import yogas from '../assets/images/dashboardimg/yogawithborder.png'
import { activeGroups_APIcall } from '../admingroups/groupspanel/getactive-splice'
import { deletegroups_APIcall } from '../admingroups/deletegroupsplice'
import { connect, useDispatch, useSelector } from 'react-redux'

function Removepopupuser(props) {
  const dispatch = useDispatch()
  const [usersdetail, setusers] = useState(false)
  const [imagesurls, setimagesurl] = useState('')
  console.log(props)
  const tests = props
  const auth = useSelector((state) => state.deletegroupsinfo)
  useEffect(() => {
    if (auth !== undefined && auth !== "") {

      const { deletegroups } = auth
      console.log("data", deletegroups)
      const { responseBody } = deletegroups
      console.log("login responseBody", responseBody)
      console.log("auth respomse success")
      if (auth.deletegroups.responseCode === 200) {
        const payload = {
          user_id: localStorage.getItem("loggedIn_userId"),

        }

        dispatch(activeGroups_APIcall(payload))
      } else if (auth.deletegroups.responseCode === 201) {

      }
    }
  }, [auth.deletegroups.responseCode])
  // eslint-disable-next-line prefer-const
  const [show, setShow] = useState(false)
  useEffect(() => {

    if (props.data1 !== undefined) {

      if (props.data1 !== '') setimagesurl(props.data1)
    } else {
      setimagesurl(dogs)
      console.log(imagesurls)
    }
  }, [props])
  const handleClose = () => {

    setShow(false)
  }
  const handleClose1 = () => {
    if (props.data3 !== undefined) {
      const payload = {
        user_id: localStorage.getItem("loggedIn_userId"),
        group_id: props.data3

      }
      dispatch(deletegroups_APIcall(payload))
      setShow(false)
    } else {

    }

  }
  const handleShow = () => {

    setShow(true)
    if (props.data == 'User') {
      setusers(true)
    } else {
      setusers(false)
    }
  }

  const index = () => {
    props.clickHandle(props.index)
    setShow(false)
  }


  return (
    <>

      <span className='edit_delete' onClick={handleShow}>Delete {props.data}</span>

      {/* <UncontrolledTooltip placement='top' target={props.data === 'Michelle Johnson' ? '' : 'positionTop'}>
        Tooltip on Top
      </UncontrolledTooltip> */}
      <Modal className='dispflex'
        show={show} centered
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Body >
          <div className='col-12 justify-content-center' style={{ display: props.data === 'Event' ? 'none' : 'flex' }}>
            <img className="mt-4 mb-2 ml-2 mr-2" style={{ display: imagesurls === '' ? '' : 'none' }} src={usersdetail === true && imagesurls == '' ? users : dogs} width="107px" height="107px"></img>
            <img className="mt-4 mb-2 ml-2 mr-2" style={{ display: imagesurls !== '' ? '' : 'none' }} src={usersdetail === true && imagesurls !== '' ? users : props.data1} width="107px" height="107px"></img>
          </div>
          <div className='col-12 justify-content-center' style={{ display: props.data === 'Event' ? 'flex' : 'none' }}>
            <img className="mt-4 mb-2 ml-2 mr-2" src={yogas} width="107px" height="107px"></img>
          </div>
          <div className='col-12  justify-content-center bodypopup' style={{ display: props.data === 'Event' ? 'none' : 'flex' }}>Are you sure you want to delete<br></br> {props.name} as a user?</div>
          <div className='col-12  justify-content-center bodypopup' style={{ display: props.data === 'Event' ? 'flex' : 'none' }}>Are you sure you want to delete<br></br> {props.name} for Beginners?</div>
          <div className='col-12  justify-content-center bodypopuptwo1 mt-1' style={{ display: props.data === 'Event' ? 'none' : 'flex' }}> User will be notified via email and user data will remain on the <br></br> admin application.</div>
          <div className='col-12  justify-content-center bodypopuptwo1 mt-1' style={{ display: props.data === 'Event' ? 'flex' : 'none' }}> Event Information will remain on the admin application.</div>
          <div className='col-12 d-flex justify-content-center mt-3 mb-4'>
            <button className='btnstyles ' onClick={handleClose1}>Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btnstyledetails ' onClick={handleClose}>No</button>
          </div>
        </Modal.Body>
        {/* <Modal.Body style={{display:props.val !== 'Admin' ? 'none' : 'block'}}>
          <div className='col-12 d-flex justify-content-center'>
        <img className="mt-4 mb-2 ml-2 mr-2" src={deleteuser} width="107px"  height="107px"></img>
        </div>
        <div className='col-12 d-flex justify-content-center bodypopup p-0'> you are not having access to delete {props.data} as a  {props.val}</div>

        <div className='col-12 d-flex justify-content-center mt-3 mb-4'>
        
          <button className='btnstyledetails ' onClick={handleClose}>No</button>
        </div>
        </Modal.Body> */}

      </Modal>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    state
  }
}
export default connect(mapStateToProps, {})(Removepopupuser)
