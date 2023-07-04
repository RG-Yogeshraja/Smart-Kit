import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import reporteventimg from "../../../src/assets/images/dashboardimg/reporteventimg.png"
import subjectcontent from "../../../src/assets/images/dashboardimg/subjectcontent.png"
import sms from "../../../src/assets/images/dashboardimg/sms.png"


const SponsorshipActiveEventReport = () => {
    const [show1, setShow1] = useState(false)
    const handleClose = () => setShow1(false)


    return (
        <>
            <span onClick={() => setShow1(true)} className='sponsor-textspanbold5' style={{ cursor: "pointer" }}>1 Report</span>&nbsp;&nbsp;
            <Modal show={show1} centered dialogClassName="activeEventReport-custommodal" onHide={() => setShow1(false)}>

                <div className="activeEventReport-content">
                    <div className="pb-50">
                        <span className="sponsor-textspanbold14">Event Report</span>
                    </div>

                    <div className="eventReport-top p-1">
                        <div className="row">
                            <div className="col-2 ps-1 pe-0">
                                <img className="" src={reporteventimg} width="72px" height="72px" />
                            </div>
                            <div className="col-10 ps-2 d-flex flex-column justify-content-center">
                                <span className=" sponsor-textspanbold19 pb-50">Secret Comedy Show Event</span>
                                <span className="sponsor-textspanbold20 pt-50">Reported on Jun. 14,2022</span>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column pt-2">
                        <span className="sponser-textspanbold4 pt-50">Reason</span>
                        <div className="pt-75 d-flex align-items-center">
                            <img className="" src={subjectcontent} width="20px" height="20px" />
                            <span className="sponsor-textspanlight6 ps-50">Inappropriate Content</span>
                        </div>
                    </div>
                    <hr className="mt-2 mb-0"/>

                    <div className="d-flex flex-column pt-2 pb-1">
                        <span className="sponser-textspanbold4 pt-50">Message</span>
                        <div className="pt-75 d-flex align-items-center">
                            <img className="" src={sms} width="20px" height="20px" />
                            <span className="sponsor-textspanlight6 ps-50">There was some faul language used in the event description</span>
                        </div>
                    </div>
                    

                    <div className="col-12 mt-2">
                        <button className='closebuttonuser col-5 m-0' style={{ width: "45%" }} onClick={handleClose}>Close</button>
                        <span className='col-2'></span>
                        <button className='Exportbuttonuser col-5' style={{ width: "45%", padding:"15px 40px" }}>Go to Report</button>
                    </div>


                </div>

            </Modal>
        </>
    )
}

export default SponsorshipActiveEventReport