import React, { useState, useEffect } from "react"
import Modal from "react-bootstrap/Modal"
import Speak from '../../assets/images/dashboardimg/speaker.png'
import '../../@core/scss/base/adminDashboard/analyticsmenu/analytics.scss'
import deletes from '../../assets/images/dashboardimg/trash.png'
function SponsorPop(props) {

  console.log(props)
  const [shows, setShows] = useState(false)

  const handleClose = () => setShows(false)
  const handleShow = () => {

    //   props.clickhandle()
    setShows(false)

  }
  useEffect(() => {

  }, [])
  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-3 mb-1' onClick={() => handleShow()}>
        <img src={deletes} width="24px" height="24px" className='me-50 '></img><span className='generalinfo_bottomtext'>End Sponsorship</span>
      </div>

      {/* <button className="csvbutton" onClick={handleShow}>CSV</button> */}

      <Modal className="dispflex "
        show={shows} centered onHide={handleClose}
        backdrop="static"

      // dialogClassName="space"
      >

        <Modal.Body >

          <div className="col-12 d-flex justify-content-center  imgbg  ">
            <img className="mt-4 mb-2 ml-2 mr-2 csv-img1" src={Speak}></img>
          </div>

          <div className="col-12 d-flex justify-content-center my-2">
            <h1 className="csvpop my-2">Are you sure you want to end the<br></br> Dog Lovers Sponsorship?</h1>
          </div>


          <div className='col-12 d-flex justify-content-center mt-4 mb-4'>
            <button className='btnstyles ' onClick={handleClose}>Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btnstyledetails ' onClick={handleClose}>No</button>
          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}
export default SponsorPop