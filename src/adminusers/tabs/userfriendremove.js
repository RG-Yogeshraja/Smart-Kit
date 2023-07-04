import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import deleteuserss from '../../assets/images/dashboardimg/delete-userss.png';
import deleteitem from '../../assets/images/dashboardimg/deleteitem.png';

const Removing = (props) => {
  console.log(props)
  const tests = props.props
  console.log(props.props, props)
  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => {
    setShow(true)
  }

  const index = () => {
    props.clickHandle(props.index)
    setShow(false)
  }

  return (
    <>
      <div onClick={handleShow} >
        <span><img src={deleteitem} width="16" height="16" /></span>&nbsp;
        <span className="dropdown-menuitemName">Remove User</span>
      </div>
      <Modal className='dispflex' show={show} centered onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Body >
          <div className='col-12 d-flex justify-content-center'>
            <img className="mt-4 mb-2 ml-2 mr-2" src={deleteuserss} width="114px" height="114px"></img>
          </div>
          <div className='col-12 d-flex justify-content-center bodypopup mt-2' >Are you sure you want to delete </div>
          <div className='col-12 d-flex justify-content-center bodypopup mt-25'> John Doe as a {props.data}?</div>
          <div className='col-12 d-flex justify-content-center mt-3 mb-4'>
            <button className='btnstyles ' onClick={index}>Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btnstyledetails ' onClick={handleClose}>No</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default Removing