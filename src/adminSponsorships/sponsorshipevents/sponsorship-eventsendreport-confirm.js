import React, { useState, useEffect } from "react"
import Modal from 'react-bootstrap/Modal'
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'


const SponsorshipEventSendReportConfirm = (props) => {
    const [show1, setShow1] = useState(false)
    const handleClose = () => setShow1(false)

    const sendReportConfirm = (kk) => {
        
        console.log('pppppp',props)
        setShow1(true)

    }

    useEffect(() => {
        console.log('******yyyyy', props.setchange)
        // props.setchange(sendReportConfirm())
        // props.setchange(sendReportConfirm())
        // sendReportConfirm()
    }, []);

    return (
        <>
            {/* <button onClick={sendReportConfirm} className=' Exportbuttonuser col-5' style={{ width: "45%" }}>Send</button> */}
            {/* <button onClick={() => setShow1(true)} className="sponsor-btntextbold2 sponsor-btn2 me-1">Manage Attending</button> */}
            <Modal show={show1} centered
                dialogClassName="manageattending-custommodal" >
                bjhppppppp
                ppppp

            </Modal>
        </>
    )
}

export default SponsorshipEventSendReportConfirm