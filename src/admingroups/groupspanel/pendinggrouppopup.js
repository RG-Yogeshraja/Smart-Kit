import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
// import '../@core/scss/base/adminDashboard/controlusersettings.scss';
import '../../@core/scss/base/adminDashboard/groupsmenu/pendinganddeltedtab.scss'
import deletedpending from '../../assets/images/dashboardimg/delete-pending.png'
import documenttext from '../../assets/images/dashboardimg/document-text.png'
import { getpendingGroups_APIcall } from '../groupspending_splice'
import { rejectpendinggroups_APIcall } from './rejectpendinggroups-splice'
import { connect, useDispatch, useSelector } from 'react-redux'
import load from '../../assets/images/dashboardimg/loadersimg.gif'

function PendingGroupPopup(props) {
  const dispatch = useDispatch()
  const [description, setdescription] = useState('')
  const [show, setShow] = useState(false)
  const [loader, setLoader] = useState(false)
  const handleClose = () => setShow(false)
  const authStat_rejectPendingGroup = useSelector((state) => state.rejectpendingGroupsdata)


  const deleteval = () => {
    const payload = {
      admin_id: localStorage.getItem("loggedIn_userId"),
      group_id: props.getid,
      reject_reason: description
    }
    dispatch(rejectpendinggroups_APIcall(payload))
  }

  useEffect(() => {
    if (authStat_rejectPendingGroup.data.responseCode == 200 && authStat_rejectPendingGroup.data.responseBody != undefined) {
      debugger
      const payload = {
        admin_id: localStorage.getItem("loggedIn_userId")
      }
      dispatch(getpendingGroups_APIcall(payload))
      setShow(false)
    }
    else if(authStat_rejectPendingGroup.data.responseCode == 201) {
      setShow(true)
    }
  }, [authStat_rejectPendingGroup.data])

  return (
    <>
      <img src={deletedpending} onClick={() => setShow(true)} width="32px" height="32px"></img>&nbsp;&nbsp;
      {/* <Button onClick={() => setShow(true)}>Manage Interest Tags</Button> */}
      <div className='area-top'>
        <Modal className='' show={show} centered onHide={() => setShow(false)} backdrop="static" keyboard={false}>
          <Modal.Body >
            <div style={{ display: loader !== false ? '' : 'none' }}>
              <div className='enable-loader1'>
                <img src={load} width="80px" height="80px"></img>
              </div>
            </div>
            <div className='p-2 my-1'>
              <div className='px-0'>
                <div className='d-flex align-items-center justify-content-center mb-2'>
                  <span className='font-lovers'>Reason for declining {props.data}?</span>
                </div>

                <div className="form-group">
                  <img src={documenttext} height="20px" width="20px"></img> <label className='font-document'>Description</label>

                  {/* <textarea
              
               style={{height:"171px",resize:'none'}}
                placeholder='Type a description....'
               
                className={`formControl`}

              ></textarea> */}
                  <textarea name="w3review" defaultValue={description} className='formControl mt-50' onChange={(e) => setdescription(e.target.value)} style={{ minHeight: "171px", resize: 'none' }} rows="200" cols="200" placeholder='Type a description...'>

                  </textarea>
                </div>


                <div className='col-12 d-flex justify-content-center mt-3 mb-2'>
                  <button className='btnstyle21' onClick={() => setShow(false)}>Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className='btnstyledetail21' onClick={deleteval}>Submit</button>
                </div>

              </div>
            </div>

          </Modal.Body>

        </Modal>
      </div>
    </>
  )
}

export default PendingGroupPopup