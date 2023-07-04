import React, { useState } from "react"
import  Modal  from "react-bootstrap/Modal"
import '../@core/scss/base/adminDashboard/analyticsmenu/analytics.scss'
import user1 from '../assets/images/dashboardimg/users1.png'
import user2 from '../assets/images/dashboardimg/users2.png'
import user3 from '../assets/images/dashboardimg/users3.png'
import user4 from '../assets/images/dashboardimg/users4.png'
import user5 from '../assets/images/dashboardimg/users5.png'
import user6 from '../assets/images/dashboardimg/users6.png'
import user7 from '../assets/images/dashboardimg/users7.png'
import filter from '../assets/images/dashboardimg/SortBy.png'
import filterdown from '../assets/images/dashboardimg/filterdown.png'
import { ModalBody, PopoverBody, UncontrolledPopover } from "reactstrap"


function Activeusers() {
    const [show, setShow] = useState(false)

      const handleClose = () => setShow(false)
      const handleShow = () => setShow(true)

      return (
        <>
        <button className="otherbutton textanalytics" onClick={handleShow}>View Active Users</button>

        <Modal id="main"
        show={show} 
        centered
        // size='lg'
        ClassName="modal"
        
      
        onHide={handleClose}>

          <Modal.Body>

            <div className="p-3">
                <spam className="active-user">Active users</spam>
                <button className="filterbutton" id="pop"><img src={filter} style={{marginRight:"10px"}}></img>Filter by<img src={filterdown} className="filterdown"></img></button>
                {/* <UncontrolledPopover placement="bottom" target='pop' id="popdown">
                  <PopoverBody>
                    <h1>jbekfcasbk</h1>
                  </PopoverBody>

                </UncontrolledPopover> */}
            </div>
            <div className="p-1">
            <div className="container">
            <div className="row ">
                <div className="col active_user_img">
                    
                  <img src={user1} ></img>
                  <span className="user_name mx-1">Justin Rosser</span>
                  
                  </div>
                  <div className="col active_user_img">
                  <img src={user2} ></img>
                  <span className="user_name mx-1">Amy Delacruz</span>

                </div>
            </div>
            </div>
            <div className="container my-2">
            <div className="row  ">
                <div className="col active_user_img">
                    
                  <img src={user3} ></img>
                  <span className="user_name mx-1">Alex Hardy</span>
                  
                  </div>
                  <div className="col active_user_img">
                  <img src={user4} ></img>
                  <span className="user_name mx-1">Steven Smith</span>

                </div>
            </div>
            </div>
            <div className="container">
            <div className="row ">
                <div className="col active_user_img">
                    
                  <img src={user5} ></img>
                  <span className="user_name mx-1">Giana Bergson</span>
                  
                  </div>
                  <div className="col active_user_img">
                  <img src={user6} ></img>
                  <span className="user_name mx-1">Ayisha Baker</span>

                </div>
            </div>
            </div>
            <div className="container my-2">
            <div className="row ">
                <div className="col active_user_img">
                    
                  <img src={user1} ></img>
                  <span className="user_name mx-1">Justin Rosser</span>
                  
                  </div>
                  <div className="col active_user_img">
                  <img src={user7} ></img>
                  <span className="user_name mx-1">Ashley Bern</span>

                </div>
            </div>
            </div>
            <div className="container">
            <div className="row  ">
                <div className="col active_user_img">
                    
                  <img src={user3} ></img>
                  <span className="user_name mx-1">Alex Hardy</span>
                  
                  </div>
                  <div className="col active_user_img">
                  <img src={user3} ></img>
                  <span className="user_name mx-1">Alex Hardy</span>

                </div>
            </div>
            </div>
            <div className="my-2">
                <button onClick={handleClose} className=' closebuttonuser mx-2'>Close</button>
                <button className=' Exportbuttonuser'>Export as</button>
            </div>
            </div>
            </Modal.Body>
        </Modal>
        </>

      )
}
export default Activeusers