import React, { useState, useEffect } from "react"
import  Modal  from "react-bootstrap/Modal"
import CSV from '../assets/images/dashboardimg/csvs.png'
import '../@core/scss/base/adminDashboard/analyticsmenu/analytics.scss'

function Exportcsv (props) {
    
   
      const [shows, setShows] = useState(false)

      const handleClose = () => setShows(false)
      const handleShow = (el) => {
     
        if (el === "e") {
        
    //   props.clickhandle()
      setShows(true)
        }
      }
      useEffect(() => {

       if (shows === true) {
        props.handle()
       }
    })
      return (
        <>
        <button class="csvbutton" onClick={() => handleShow("e")}>CSV</button>
     
        {/* <button className="csvbutton" onClick={handleShow}>CSV</button> */}

        <Modal className="dispflex "
        show={shows} centered
        backdrop="static"  

        // dialogClassName="space"
        >

            <Modal.Body >
                
                <div className="col-12 d-flex justify-content-center  imgbg  ">
                    <img className="mt-4 mb-2 ml-2 mr-2 csv-img" src={CSV}></img>
                </div>

                <div className="col-12 d-flex justify-content-center my-4">
                     <h1 className="csvpop my-2">The analytics report has been exported as CSV.<br></br> Please check your mail.</h1>
                </div>

                <div className='text-center '>
                    <button className=' closebuttoncsv' onClick={handleClose}>Close</button>
                </div>
         
            </Modal.Body>
        </Modal>
        </>
      )
}
export default Exportcsv