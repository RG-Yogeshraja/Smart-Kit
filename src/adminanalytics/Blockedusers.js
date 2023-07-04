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


function Blockedusers() {
    const [show, setShow] = useState(false)

      const handleClose = () => setShow(false)
      const handleShow = () => setShow(true)

      return (
        <>
        <button className="otherbutton textanalytics" onClick={handleShow}>Blocked Users</button>

        <Modal id="main"
        show={show} 
        centered
        // size='lg'
        // ClassName="modal"
        
      
        onHide={handleClose}>

          <Modal.Body>

            <div className="p-3">
                <spam className="active-user">Blocked users</spam>
                <button className="filterbutton" id="pop"><img src={filter} style={{marginRight:"10px"}}></img>Filter by<img src={filterdown} className="filterdown"></img></button>
               
            </div>
            <div className="p-1">
            <div className="container">
            <div className="row ">
                <div className="col active_user_img">
                    
                  <img src={user1} ></img>
                  <spam className="user_name mx-1">Justin rosser</spam>
                  
                  </div>
                  <div className="col active_user_img">
                  <img src={user2} ></img>
                  <spam className="user_name mx-1">Amy delacruz</spam>

                </div>
            </div>
            </div>
            <div className="container my-2">
            <div className="row  ">
                <div className="col active_user_img">
                    
                  <img src={user3} ></img>
                  <spam className="user_name mx-1">Alex hardy</spam>
                  
                  </div>
                  <div className="col active_user_img">
                  <img src={user4} ></img>
                  <spam className="user_name mx-1">Steven smith</spam>

                </div>
            </div>
            </div>
            <div className="container">
            <div className="row ">
                <div className="col active_user_img">
                    
                  <img src={user5} ></img>
                  <spam className="user_name mx-1">Giana bergson</spam>
                  
                  </div>
                  <div className="col active_user_img">
                  <img src={user6} ></img>
                  <spam className="user_name mx-1">Ayisha baker</spam>

                </div>
            </div>
            </div>
            <div className="container my-2">
            <div className="row ">
                <div className="col active_user_img">
                    
                  <img src={user1} ></img>
                  <spam className="user_name mx-1">Justin rosser</spam>
                  
                  </div>
                  <div className="col active_user_img">
                  <img src={user7} ></img>
                  <spam className="user_name mx-1">Ashley burn</spam>

                </div>
            </div>
            </div>
            <div className="container">
            <div className="row  ">
                <div className="col active_user_img">
                    
                  <img src={user3} ></img>
                  <spam className="user_name mx-1">Alex hardy</spam>
                  
                  </div>
                  <div className="col active_user_img">
                  <img src={user3} ></img>
                  <spam className="user_name mx-1">Alex hardy</spam>

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
export default Blockedusers