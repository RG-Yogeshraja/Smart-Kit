import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import { ChevronLeft, ChevronRight } from "react-feather"
import '../@core/scss/base/adminDashboard/analyticsmenu/analytics.scss'
import '../@core/scss/base/adminDashboard/manageinterestt.scss'
import user1 from '../assets/images/dashboardimg/users1.png'
import user2 from '../assets/images/dashboardimg/users2.png'
import user3 from '../assets/images/dashboardimg/users3.png'
import user4 from '../assets/images/dashboardimg/users4.png'
import user5 from '../assets/images/dashboardimg/users5.png'
import user6 from '../assets/images/dashboardimg/users6.png'
import user7 from '../assets/images/dashboardimg/users7.png'
import filter from '../assets/images/dashboardimg/SortBy.png'
import filterdown from '../assets/images/dashboardimg/dropdownn.png'
import filterup from '../assets/images/dashboardimg/dropupp.png'
import { ModalBody, PopoverBody, UncontrolledPopover } from "reactstrap"
import checkbox from '@src/assets/images/dashboardimg/fieldbox.png'
import checked from '@src/assets/images/dashboardimg/checktickbox.png'
import defaultuserprofilepicture from '../assets/images/dashboardimg/defaultuserprofilepicture.png'
import closecircle from '../assets/images/dashboardimg/close-circle.png'
import plusicons from '../assets/images/dashboardimg/plusicon.png'

function ViewActiveUserDetail() {
  const [tags, setTags] = useState(['Secret Comedy Show'])
  const [show, setShow] = useState(false)
  const [filtershow, filterhide] = useState(false)
  const [tagInput, setTagInput] = useState('')
  const [checkeds, setunchecked] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const popovers = () => {
    filterhide(false)
  }
  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
    filterhide(false)
  }
  const checkstrigger = () => {

    if (checkeds === false) {
      setunchecked(true)
    } else {
      setunchecked(false)
    }
  }
  const [RegistrationsList, setregister] = useState([
    { id: '1', name: "Justin Rosser", imageName: user1, money: "$20.00" },
    { id: '2', name: "Justin Rosser", imageName: user1, money: "$20.00" },

    { id: '3', name: "Alex Hardy", imageName: user2, money: "$20.00" },
    { id: '4', name: "Alex Hardy", imageName: user2, money: "$20.00" },

    { id: '5', name: "Giana Bergson", imageName: user3, money: "$20.00" },
    { id: '6', name: "Giana Bergson", imageName: user3, money: "$20.00" },

    { id: '7', name: "Justin Rosser", imageName: user1, money: "$20.00" },
    { id: '8', name: "Justin Rosser", imageName: user1, money: "$20.00" },

    { id: '9', name: "Alex Hardy", imageName: user2, money: "$20.00" },
    { id: '10', name: "Alex Hardy", imageName: user2, money: "$20.00" }

  ])
  const click_filter = () => {
    if (filtershow == false) {
      filterhide(true)
    } else {
      filterhide(false)
    }
  }
  const handleAdd = () => {
    if (tagInput) {
      setTags(prevTags => [...prevTags, tagInput])
    }
    setTagInput('')
    setShowAddInput(false)
  }

  const handleRemove = index => {
    setTags(prevTags => {
      const tags = [...prevTags]
      tags.splice(index, 1)
      return tags
    })
  }

  return (
    <>
      {/* <button className="invite-code" onClick={handleShow}><span className="invite-number">120</span><spam style={{marginLeft:"100px"}}>Users with invite code registration</spam><img src={rightarrow} style={{marginLeft:"30px"}}></img></button>  */}
      <button class="exportbuttons " onClick={handleShow} style={{ width: "20%" }}><span class="textanalytics">View Details by User</span></button>

      <Modal classname="ajai"
        show={show}
        centered
        // size='lg'
        dialogClassName="flx"


        onHide={handleClose}>

        <Modal.Body className="">

          <div className="p-1 ">
            <span className="active-user">Event Attendee Payments</span>
            <button className="filterbutton" onClick={click_filter} id="poppval"><img src={filter} style={{ marginRight: "10px" }}></img>Filter by<img src={filtershow === false ? filterdown : filterup} width="12px" height="8px" className="filterdown"></img></button>
            <div className="row" style={{ display: filtershow === true ? 'flex' : 'none' }}>

              <div placement='bottom' target='poppval' className="col-7 " style={{ position: "absolute", marginLeft: "180px", marginTop: "20px" }} >
                <div className='card p-2 d-block' style={{ border: "1px solid  #95E1BF", borderRadius: "2px" }}>
                  <div className="d-flex justify-content-between">
                    <span className='filter_by'>Filter By Event</span>
                    <span className='clear_filter'>Clear Filters</span>
                  </div>
                  <div className="mt-1">
                    <img src={checkeds === true ? checked : checkbox} width="25px" height="25px" onClick={checkstrigger}></img>&nbsp;&nbsp;&nbsp;<span className="text_popup">All Events</span>
                  </div>
                  <div className='d-flex justify-content-between align-items-center flex-wrap mt-2'>


                    {tags.map((tag, tagIndex) => (
                      <div className="flex" key={tagIndex} >
                        <button className='btn_greens123 d-flex flex-row justify-content-between align-items-center ' style={{ padding: "12px" }}>

                          <span className='text_colors text-center' style={{ wordBreak: "break-word" }}> {tag}{' '}</span>&nbsp;
                          {/* <span className='text_colors text-center'>Books</span>&nbsp;&nbsp; */}
                          <img src={closecircle} width="20px" height="20px" onClick={() => handleRemove(tagIndex)}></img>

                        </button>&nbsp;
                      </div>))}


                  </div>
                  <div className='borderrs1 mt-1'>
                    <div className='d-flex justify-content-center'>
                      <input
                        className="noningoption mb-1"
                        value={tagInput}
                        onChange={e => setTagInput(e.target.value)}
                        onKeyPress={e => {
                          if (e.key === 'Enter') {
                            handleAdd()
                          }
                        }}

                        autoFocus
                      >

                      </input>
                      {/* <input className='borderss'></input> */}
                      <div className='d-flex align-items-end flex-column p-0 mt-1 px-1 positionss'>
                        <img src={plusicons} width="27px" height="27px" onClick={handleAdd} className='positionss'></img>
                      </div>

                      {/* <div className='d-flex align-items-center justify-content-center bordersss'></div> */}
                    </div>
                    &nbsp;&nbsp;&nbsp;<span className='mb-1'>Barry’s Private Event</span><br></br>
                    &nbsp;&nbsp;&nbsp;<span className='mb-1'>Barry’s Workout Social Event</span>

                  </div>
                  <div className='d-flex align-items-center justify-content-center mt-1'>
                    <button className='btn-applyy'  >
                      <span className='font-applyy' onClick={popovers}>Apply</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="p-1 ">

            <div className="overflow overflow_scroll" id="style-2">

              <div className="container ">
                <div className="row ">
                  {RegistrationsList.map(val => (


                    <div className="col-6">
                      <div className="col active_user_img mb-1" >

                        <img src={val.imageName !="" ? val.imageName : defaultuserprofilepicture} ></img>
                        <span className="user_name mx-1">{val.name}<br></br><span className="registration-count">{val.money}</span></span>
                      </div>

                    </div>


                  )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="my-2 col-12">
            <button onClick={handleClose} className=' closebuttonuser mx-2 col-5'>Close</button>
            <button className=' Exportbuttonuser col-5 me-3'>Export as</button>
            <span className='col-1'></span>
          </div>


        </Modal.Body>
      </Modal>
    </>

  )
}
export default ViewActiveUserDetail