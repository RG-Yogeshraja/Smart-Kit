import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'



const SponsorshipPostEventViewReport = () => {
    const [show1, setShow1] = useState(false)
    const handleClose = () => setShow1(false)




    return (
        <>
            <button onClick={() => setShow1(true)} className="sponsor-btntextbold1" style={{ outline: "none" }}>View  Report</button>

            <Modal show={show1} centered dialogClassName="activeEventSendReport-custommodal" onHide={() => setShow1(false)}>
                <div className="">
                    view
                </div>
            </Modal>
        </>
    )
}

export default SponsorshipPostEventViewReport