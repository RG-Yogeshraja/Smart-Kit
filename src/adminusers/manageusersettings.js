import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import '../@core/scss/base/adminDashboard/manageusersett.scss'
import keys from '../assets/images/dashboardimg/key.png'
import calendars from '../assets/images/dashboardimg/calendar.png'
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown"
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp"
import { Activity } from 'react-feather'


function ManageUserSettings(props) {

  const [show, setShow] = useState(false)
  const [manageuser, setManageuser] = useState([
    { id: 1, name: "miles or less between Primary Locations", values: "25", checking: true },
    { id: 2, name: "Mutual Friends", values: "1", checking: true },
    { id: 3, name: "Mutual Groups", values: "3", checking: true }
  ])
  const [manageuser1, setManageuser1] = useState([
    { id: 1, name: "Mutual Interests ", values: "2", checking: true },
    { id: 2, name: "Common Events Attended", values: "0", checking: true },
    { id: 3, name: "Common Events Attending", values: "0", checking: true }
  ])
  const [manageuser2, setManageuser2] = useState([
    { id: 1, name: "miles or less between Primary Locations ", values: "50", checking: true },
    { id: 2, name: "Mutual Friends", values: "0", checking: true },
    { id: 3, name: "Mutual Groups", values: "2", checking: true }
  ])
  const [manageuser3, setManageuser3] = useState([
    { id: 1, name: "Mutual Interests", values: "2", checking: true },
    { id: 2, name: "Common Events Attending", values: "0", checking: true }

  ])


  const [manageuser4] = useState([
    { id: 1, name: "Hide Friend Activity From Friends’ Dashboards" },
    { id: 2, name: "Hide Activity From Friends’ Dashboards" }

  ])

  const [manageuser5] = useState([
    { id: 1, name: "Past 7 days" },
    { id: 2, name: "Past 14 days" },
    { id: 3, name: "Past 30 days" }

  ])


  const [tags1, setTags1] = useState('Hide Friend Activity From Friends’ Dashboards')

  const [tags2, setTags2] = useState('Past 7 days')

  const handleAdd = (e) => {
    setTags1(e)
    console.log(setTags1, "ghuhu")
    setshowLess(!showLess)

  }

  const handleAdd1 = (e1) => {
    setTags2(e1)
    setshowLess1(!showLess1)
  }
  const handleClose = () => {
   
    setShow(false)
  }


  const handlechange = (index) => {

    const newUsers = [...manageuser]
    if (newUsers[index].checking === true) {
      newUsers[index].checking = false
    } else {
      newUsers[index].checking = true
    }

    setManageuser(newUsers)
  }
  const handlechange1 = (index) => {

    const newUsers1 = [...manageuser1]
    if (newUsers1[index].checking === true) {
      newUsers1[index].checking = false
    } else {
      newUsers1[index].checking = true
    }

    setManageuser1(newUsers1)
  }
  const handlechange2 = (index) => {

    const newUsers2 = [...manageuser2]
    if (newUsers2[index].checking === true) {
      newUsers2[index].checking = false
    } else {
      newUsers2[index].checking = true
    }

    setManageuser2(newUsers2)
  }
  const handlechange3 = (index) => {

    const newUsers3 = [...manageuser3]
    if (newUsers3[index].checking === true) {
      newUsers3[index].checking = false
    } else {
      newUsers3[index].checking = true
    }

    setManageuser3(newUsers3)
  }

  const changeShow = () => {
    setshowLess(!showLess)

    console.log(tags1, "hjhjkj")
  }

  const [showLess, setshowLess] = useState(true)


  const [showLess1, setshowLess1] = useState(true)
  const changeShow1 = () => {


    setshowLess1(!showLess1)
  }
const handleShow = () => {

  setshowLess(true)
  setshowLess1(true)
  setShow(true)
}
  return (
    <>
      <button style={{ cursor: props.data === true ? 'pointer' : 'not-allowed' }} onClick={props.data === true ? handleShow : handleClose} className='btn_emptycolor d-flex flex-row justify-content-center align-items-center'>
        <span className='text_color_change text-center'>
          <span >Manage User Settings
          </span>
        </span></button>
      {/* <Button onClick={() => setShow(true)}>Manage Interest Tags</Button> */}

      <Modal

        show={show}  backdrop="static"

      // aria-labelledby="example-modal-sizes-title"
      >
        <Modal.Body>

          <div className='p-1 my-1'>
            <div className='px-0'>
              <form>
                <div className='mb-3'>
                  <span className='font-stylinggg'>App User Settings</span>
                </div>
                <div className=''>

                  <div className="form-group ">
                    <div className=''>
                      <img src={keys} height="20px" width="20px"></img>
                      <label style={{ marginTop: "0px" }} className='extraalignment1'>
                        User Activity Privacy Preferences
                      </label></div>
                    <div className='mt-2'>
                      <span onClick={changeShow} style={{cursor:'pointer'}} >
                      {showLess ? <div className='relatives2'><IoIosArrowDown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div className='relatives3'><IoIosArrowUp style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}
                      </span>
                    </div>
                    <div onClick={changeShow} style={{ cursor: "pointer" }}>
                      {showLess ? <div style={{ fontSize: "16px", fontWeight: "500", color: "#003B4A", lineHeight: "35px", marginTop: "-15px" }} className="formControl font-dropdown"> &nbsp;&nbsp;{tags1}</div> : <div className='borderrs22' style={{ marginTop: "-15px" }}>
                        <div className='d-flex justify-content-center'>

                          <div style={{ fontSize: "16px", fontWeight: "500", color: "#003B4A", lineHeight: "60px" }}
                            className="noningoption1  mb-1"

                          > &nbsp;<span className='font-dropdown' style={{ cursor: 'pointer' }} >{tags1}</span>
                          </div>

                        </div>
                        <div>
                          {manageuser4.map((items, index) => <div key={index} >
                            <div className='mb-1' onClick={() => handleAdd(items.name)} >  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='font-dropdown'>{items.name}</span><br></br></div>

                          </div>)}
                        </div>
                      </div>}


                    </div>


                    {/* </div> */}


                  </div>
                  <div className="form-group ">
                    <div className=''>
                      <img src={calendars} height="20px" width="20px"></img>
                      <label className='extraalignment1'>
                        Activity Screen - Time Period Displayed
                      </label></div>
                    <div className='mt-2'>
                    <span onClick={changeShow1} style={{cursor:'pointer'}} >

                      {showLess1 ? <div className='relatives2'><IoIosArrowDown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div className='relatives3'><IoIosArrowUp style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}
                      </span>
                    </div>
                    <div onClick={changeShow1} style={{ cursor: "pointer" }}>
                      {showLess1 ? <div style={{ fontSize: "16px", fontWeight: "500", color: "#003B4A", lineHeight: "35px", marginTop: "-15px" }} className="formControl font-dropdown"> &nbsp;&nbsp;{tags2}</div> : <div className='borderrs2' style={{ marginTop: "-15px" }}>
                        <div className='d-flex justify-content-center'>

                          <div style={{ fontSize: "16px", fontWeight: "500", color: "#003B4A", lineHeight: "60px" }}
                            className="noningoption2 mb-1"

                          > &nbsp;<span className='font-dropdown' >{tags2}</span>
                          </div>

                        </div>
                        <div>
                          {manageuser5.map((items, index) => <div key={index} >
                            <div className='mb-1' onClick={() => handleAdd1(items.name)} >  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='font-dropdown'>{items.name}</span><br></br></div>

                          </div>)}
                        </div>
                      </div>}


                    </div>


                  </div>


                </div>
                <hr style={{ color: "#CCD8DB" }}></hr>

                <div className='mt-2'>
                  <div className='mb-2' >
                    <span className='font-stylinggg'>Algorithm Controls</span>
                  </div>
                </div>
                <div className='mb-2'>
                  <span className='fontinggg'>Requirements for Hint Recommended Existing Users:</span>
                </div>

                <div className=''>
                  <div className='row'>
                    <div className='col-6'>
                      {manageuser.map((items, index) => <div key={index} >
                        <div className='mb-2 d-flex align-items-center'>
                          <img onClick={() => { handlechange(index) }} src={items.checking ? checkblankboxes : checktickboxes} width="25px" height="25px"></img>&nbsp;&nbsp;
                          <input type="text" className={`formControl`} style={{ width: "59px", height: "40px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>&nbsp;&nbsp;&nbsp;
                          <span className='fonting-style col-7'>{items.name}  </span><br></br>

                        </div>

                      </div>)}
                    </div>
                    <div className='col-6'>
                      {manageuser1.map((items, index) => <div key={index} >
                        <div className='mb-2 d-flex align-items-center'>

                          <img onClick={() => { handlechange1(index) }} src={items.checking ? checkblankboxes : checktickboxes} width="25px" height="25px"></img>&nbsp;&nbsp;
                          <input type="text" className={`formControl`} style={{ width: "59px", height: "40px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>&nbsp;&nbsp;&nbsp;
                          <span className='fonting-style col-7'>{items.name} </span><br></br>

                        </div>
                      </div>)}

                    </div>
                  </div>
                </div>


                <div className='mb-2'>
                  <span className='fontinggg'>Requirements for Hint Recommended New Users:</span>
                </div>

                <div className=''>
                  <div className='row'>
                    <div className='col-6'>
                      {manageuser2.map((items, index) => <div key={index} >
                        <div className='mb-2 d-flex align-items-center'>

                          <img onClick={() => { handlechange2(index) }} src={items.checking ? checkblankboxes : checktickboxes} width="25px" height="25px"></img>&nbsp;&nbsp;
                          <input type="text" className={`formControl`} style={{ width: "59px", height: "40px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>&nbsp;&nbsp;&nbsp;
                          <span className='fonting-style col-7'>{items.name}  </span><br></br>

                        </div>

                      </div>)}
                    </div>
                    <div className='col-6'>
                      {manageuser3.map((items, index) => <div key={index} >
                        <div className='mb-2 d-flex align-items-center'>

                          <img onClick={() => { handlechange3(index) }} src={items.checking ? checkblankboxes : checktickboxes} width="25px" height="25px"></img>&nbsp;&nbsp;
                          <input type="text" className={`formControl`} style={{ width: "59px", height: "40px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>&nbsp;&nbsp;&nbsp;
                          <span className='fonting-style col-7'>{items.name}  </span><br></br>

                        </div>

                      </div>)}
                    </div>
                  </div>
                </div>




              </form>
            </div>
            <div className='col-12 d-flex justify-content-between mt-3 mb-2'>
              <button className='btnstyle2' onClick={handleClose}>Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className='btnstyledetail2' onClick={handleClose}>Save</button>
            </div>
          </div>


        </Modal.Body>

      </Modal>
    </>
  )
}
export default ManageUserSettings