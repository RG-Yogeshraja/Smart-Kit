import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import "../@core/scss/base/adminDashboard/analyticsmenu/analytics.scss"
import dot from "../assets/images/dashboardimg/Ellipse11.png"
function ShowOthers() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
     <button className="small_ex_but"><span class="textanalytics" onClick={handleShow}>See “Other” Answers</span></button>
     

      <Modal
        className="display-flex "
        show={show}
        centered
        dialogClassName="flx"
        onHide={handleClose}
      >
        <Modal.Body dialogClassName="flx">
          <div className="p-2">
            <div className="col-12 display-flex justify-content-center heading">
            “Other” Answers
            </div>
            <div className="col-12 display-flex justify-content-center heading1">
              Question 2:{" "}
              <strong>
                Because you selected yes, how did you find out about it?
              </strong><br></br>
              Select all that apply
              <hr></hr>
            </div>
            <div className="container">
            <div className="row ">
              <div className="col top-space">
                <div className="mb-2" >
                 <img src={dot} width="8px" height="8px" classNamr="list"></img>&nbsp;&nbsp;&nbsp;
                    <span className="listcolor">Parents</span>
                    </div>
                    <div className="mb-2">
                    <img src={dot} width="8px" height="8px" classNamr="list"></img>&nbsp;&nbsp;&nbsp;
                    <span className="listcolor">Relatives</span>
                    </div>
                    <div className="mb-2">
                    <img src={dot} width="8px" height="8px" classNamr="list"></img>&nbsp;&nbsp;&nbsp;
                    <spam className="listcolor">Word of mouth</spam>
                    </div>
                    <div className="mb-2">
                    <img src={dot} width="8px" height="8px" classNamr="list"></img>&nbsp;&nbsp;&nbsp;
                    <spam className="listcolor">Other comedy show</spam>
                    </div>
                    <div className="mb-2">
                    <img src={dot} width="8px" height="8px" classNamr="list"></img>&nbsp;&nbsp;&nbsp;
                    <spam className="listcolor">Club</spam>
                    </div>
                
              </div>
              <div className="col  top-space">
              <div className="mb-2">
                    <img src={dot} width="8px" height="8px" classNamr="list"></img>&nbsp;&nbsp;&nbsp;
                    <spam className="listcolor">Parents</spam>
                  </div>
                  <div className="mb-2">
                    <img src={dot} width="8px" height="8px" classNamr="list"></img>&nbsp;&nbsp;&nbsp;
                    <spam className="listcolor">Relatives</spam>
                  </div>
                  <div className="mb-2">
                    <img src={dot} width="8px" height="8px" classNamr="list"></img>&nbsp;&nbsp;&nbsp;
                    <spam className="listcolor">Word of mouth</spam>
                  </div>
                  <div className="mb-2">
                    <img src={dot} width="8px" height="8px" classNamr="list"></img>&nbsp;&nbsp;&nbsp;
                    <spam className="listcolor">Other comedy show</spam>
                  </div>
                  <div className="mb-2">
                    <img src={dot} width="8px" height="8px" classNamr="list"></img>&nbsp;&nbsp;&nbsp;
                    <spam className="listcolor">Club</spam>
                  </div>
               
              </div>
            </div>
            <div className="text-center ">
              <button className=" closebutton" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default ShowOthers
