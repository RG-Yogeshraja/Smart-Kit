import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import "../@core/scss/base/adminDashboard/analytics.scss"
import user1 from "../assets/images/dashboardimg/users1.png"

import filter from "../assets/images/dashboardimg/SortBy.png"
import filterdown from "../assets/images/dashboardimg/filterdown.png"
import rightarrow from "../assets/images/dashboardimg/rightarrow.png"


function Example() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const users = [
    { name: "ajai", name1: "26 registration" },
    { name: "kabcsjh", name1: "27 registration" }
  ]

  return (
    <>
      <button className="invite-code" onClick={handleShow}>
        <span className="invite-number">120</span>
        <spam style={{ marginLeft: "100px" }}>
          Users with invite code registrations
        </spam>
        <img src={rightarrow} style={{ marginLeft: "30px" }}></img>
      </button>

      <Modal
        classname="ajai"
        show={show}
        centered
        // size='lg'
        dialogClassName="flx"
        // modal-dialog-scrollable

        onHide={handleClose}
      >
        <Modal.Body className="">
          <div className="p-3 ">
            <spam className="active-user">Invite code registration</spam>
            <button className="filterbutton" id="pop">
              <img src={filter} style={{ marginRight: "10px" }}></img>Filter by
              <img src={filterdown} className="filterdown"></img>
            </button>
          </div>

          {/* <div className="p-2 "> */}
          
               <div className="container ">
               {users.map((user) => (
                <div className="col ">
                  <div className="row-12 active_user_img px-2">
                
                    <><img src={user1}></img><spam className="user_name ">
                      {user.name}
                      <br></br>
                      <spam className="registration-count ">{user.name1}</spam>
                    </spam>
                   
                    </>
                      
                  </div>

                  {/* <div className="col active_user_img m-1">
                    <img src={user2}></img>
                    <spam className="user_name mx-1">
                      {user.name}
                      <br></br>
                      <spam className="registration-count">{user.name1}</spam>
                    </spam>
                  </div> */}
                 </div>
                  ))}
               </div>
         
          {/* </div> */}

          <div className="my-2">
            <button onClick={handleClose} className=" closebuttonuser mx-2">
              Close
            </button>
            <button className=" Exportbuttonuser">Export as</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default Example
